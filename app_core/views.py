import logging
from django.db.models import Prefetch
from django.utils.timezone import now
from drf_spectacular.types import OpenApiTypes
from drf_spectacular.utils import OpenApiParameter, extend_schema_view, extend_schema, OpenApiResponse, OpenApiExample
from rest_framework import status
from rest_framework.response import Response
from app_core.models import Player, ReferralSystem, League, PlayerTask, DAILY_BONUSES, Task, MonthlyTopPlayer, Blogger
from app_core.serializers import PlayerSerializer, PlayerTaskSerializer
from adrf.viewsets import GenericAPIView
from async_cache import async_cache


@extend_schema_view(
    get=extend_schema(
        tags=["Игрок: информация о пользователе"],
        summary="Получить или создать пользователя",
        description="Получает или создает пользователя по уникальному идентификатору в Telegram и имени пользователя.",
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор пользователя в Telegram"),
            OpenApiParameter(name="name", type=str, description="Имя пользователя"),
            OpenApiParameter(name="referral_id", type=int, description="Идентификатор реферала (опционально)", required=False)
        ],
        responses={
            200: OpenApiResponse(
                response=PlayerSerializer,
                description="Информация о пользователе",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value={
                            "id": "id пользователя в БД",
                            "tg_id": "tg_id пользователя в ТГ",
                            "name": "Имя пользователя",
                            "registration_date": "Дата регистрации",
                            "points": "Текущие очки пользователя",
                            "points_all": "Очки пользователя за месяц",
                            "tap_points": "Очки за 1 тап в игре",
                            "tickets": "Билеты пользователя",
                            "tickets_all": "Билеты пользователя за месяц",
                            "premium_tickets": "Премиум билеты пользователя",
                            "premium_tickets_all": "Премиум билеты пользователя за месяц",
                            "consecutive_days": "Количество входов дней подряд",
                            "last_login_date": "Дата последнего входа",
                            "login_today":  "Входил ли пользователь сегодня",
                            "daily_points": "Количество очков за день",
                            "daily_bonus_friends": "Бонус за друзей в размере 10% в сутки",
                            "rank": "Ранг в игре",
                            "league": "Id лиги игрока",
                            "bonus_info": "Информация о ежедневных бонусах"
                        }
                    )
                ]
            ),
            400: {"description": "Неверные данные"},
            404: {"description": "Реферал не найден"}
        }
    )
)
class PlayerInfo(GenericAPIView):
    """
    Представление для входа/создания пользователя.
    Принимает GET-запрос с идентификатором пользователя (tg_id) и именем пользователя (name).
    Необходимые переменные для корректной работы:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    - `name`: Имя пользователя.
    - `referral_id`: Id-друга который пригласил. (Не обязательный аргумент)
    - `utm_nickname`: UTM-метка (ник блогера), по которой пришёл пользователь. (Не обязательный аргумент)
    Возвращает:
    - Информацию о пользователе.
    """
    serializer_class = PlayerSerializer

    async def update_player_status(self, player):
        """Функция для обновления ежедневного бонуса и получение бонусов от друзей 10%"""
        if player.daily_bonus_friends != 0:
            player.points += player.daily_bonus_friends
            player.points_all += player.daily_bonus_friends
            player.daily_bonus_friends = 0
        elif player.is_new:
            player.is_new = False
        # Обновляем ежедневный статус
        await player.update_daily_status()
        await player.asave()
        serializer = self.get_serializer(player)
        return await serializer.adata

    async def create_tasks_new_player(self, player):
        """Функция для присваивания всех существующих задач игроку."""
        tasks = [task async for task in Task.objects.all()]
        await PlayerTask.objects.abulk_create([PlayerTask(player=player, task=task) for task in tasks])

    async def get(self, request, tg_id: int, name: str, referral_id: int = None, utm_nickname: str = None):
        # Пытаемся получить игрока или создаем нового
        defaults = {"name": name, "is_new": True}
        # Устанавливаем дефолтную лигу
        default_league = await League.objects.afirst()
        if default_league:
            defaults["league"] = default_league
        player, created = await Player.objects.aget_or_create(tg_id=tg_id, defaults=defaults)
        # Если игрок только что создан, проверяем реферальную систему
        if created:
            players_count = await Player.objects.acount()  # Получаем общее количество игроков
            player.rank = players_count  # Новый игрок всегда в конце списка
            await self.create_tasks_new_player(player)  # Присваиваем все задачи игроку
            # Проверяем, что не переданы оба параметра одновременно
            if referral_id and utm_nickname:
                response_data = await self.update_player_status(player)
                response_data["Error"] = "Нельзя передавать referral_id и utm_nickname одновременно."
                return Response(response_data, status=status.HTTP_400_BAD_REQUEST)
            if referral_id and referral_id != tg_id:
                referral = await Player.objects.aget(tg_id=referral_id)
                # Проверяем, что реферальная связь ещё не существует
                exists = await ReferralSystem.objects.filter(referral=referral, new_player=player).aexists()
                if not exists:
                    await ReferralSystem.objects.acreate(referral=referral, new_player=player, blogger=None)
                else:
                    response_data = await self.update_player_status(player)
                    response_data["Error"] = "Игрок уже в друзьях у реферала."
                    return Response(response_data, status=status.HTTP_400_BAD_REQUEST)
            elif referral_id == tg_id:
                response_data = await self.update_player_status(player)
                response_data["Error"] = "Нельзя добавить самого себя в друзья!."
                return Response(response_data, status=status.HTTP_400_BAD_REQUEST)
            elif utm_nickname:
                blogger = await Blogger.objects.aget(nickname=utm_nickname)
                if blogger:
                    blogger.referral_count += 1
                    await blogger.asave()
                    await ReferralSystem.objects.acreate(referral=None, new_player=player, blogger=blogger)
                else:
                    response_data = await self.update_player_status(player)
                    response_data["Error"] = "Блогер с такой UTM-меткой не найден."
                    return Response(response_data, status=status.HTTP_400_BAD_REQUEST)
        friends_count = await player.referral.acount()

        # Обновляем ежедневный статус и возвращаем данные игрока
        response_data = await self.update_player_status(player)
        response_data['friends_count'] = friends_count
        response_data['bonus_info'] = DAILY_BONUSES
        return Response(response_data, status=status.HTTP_200_OK)


@extend_schema_view(
    get=extend_schema(
        tags=["Игрок: друзья"],
        summary="Получить список друзей игрока",
        description="Возвращает список друзей игрока по уникальному идентификатору в Telegram.",
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор пользователя в Telegram")
        ],
        responses={
            200: OpenApiResponse(
                response=PlayerTaskSerializer,
                description="Информация о друзьях",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value=[
                            {
                                "tg_id": 'Id пользователя',
                                "name": 'Имя пользователя',
                                "referral_bonus": 'Забрали бонус или нет',
                                "points": 'Количество монет друга'
                            }
                        ]
                    )
                ]
            ),
            404: {"description": "Игрок не найден"}
        }
    )
)
class PlayerFriendsView(GenericAPIView):
    """
    Представление для получения списка друзей игрока.
    Принимает GET-запрос с идентификатором пользователя (tg_id).
    Необходимые переменные для корректной работы:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    Возвращает:
    - Список друзей игрока.
    """
    async def get(self, request, tg_id: int):
        try:
            # Получаем игрока и всех его друзей в одном запросе
            player = await Player.objects.prefetch_related('referral__new_player').aget(tg_id=tg_id)
            # Получаем список друзей
            friends = player.referral.all()  # Получаем все объекты ReferralSystem, связанные с игроком
            # Сериализуем друзей
            friends_data = [{'tg_id': friend.new_player.tg_id, 'name': friend.new_player.name,
                            'referral_bonus': friend.referral_bonus, 'points': friend.new_player.points,
                             'reg_data': friend.new_player.registration_date}
                            for friend in friends]
            return Response(friends_data, status=status.HTTP_200_OK)
        except Player.DoesNotExist:
            return Response({"error": "Игрок не найден."}, status=status.HTTP_404_NOT_FOUND)


@extend_schema_view(
    post=extend_schema(
        tags=["Игрок: бонусы"],
        summary="Получить бонус за друга",
        description=(
            "Позволяет игроку получить бонус за привлечение нового игрока. "
            "Если реферальная связь существует и бонус не был получен ранее, "
            "игрок получает бонус и обновляется количество его билетов."
        ),
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="ID игрока, который привлекает друга (Telegram)."),
            OpenApiParameter(name="new_player_id", type=int, description="ID нового игрока, которого пригласил реферал.")
        ],
        responses={
            200: OpenApiResponse(
                response=PlayerTaskSerializer,
                description="Информация о бонусе",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value='Вы получили 500 бонусный очков за друга ...'
                    )
                ]
            ),
            400: {"description": "Реферальная связь не найдена или бонус уже получен."},
            404: {"description": "Игрок не найден."}
        }
    )
)
class FriendBonusView(GenericAPIView):
    """
    Эндпоинт для получения бонуса за друга.
    Принимает POST-запрос с идентификатором пользователя (tg_id) и идентификатором нового игрока (new_player_id).
    Параметры:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    - `new_player_id`: Уникальный идентификатор нового игрока, за которого начисляется бонус.
    Возвращает:
    - Сообщение о получении бонуса и общее количество билетов.
    - Статус 400, если реферальная связь не найдена или бонус уже получен.
    - Статус 404, если игрок не найден.
    """

    async def post(self, request, tg_id: int, new_player_id: int):
        try:
            # Ищем игрока и его реферальную связь
            referral_relation = await ReferralSystem.objects.select_related('referral', 'new_player').filter(
                referral__tg_id=tg_id, new_player__tg_id=new_player_id).afirst()
            if not referral_relation:
                return Response({"message": "Реферальная связь не найдена."}, status=status.HTTP_400_BAD_REQUEST)
            # Проверка бонуса
            elif not referral_relation.referral_bonus:
                return Response({"message": "Бонус за этого друга уже получен."},
                                status=status.HTTP_400_BAD_REQUEST)
            # Обновляем данные
            referral_relation.referral.points += 500
            referral_relation.referral.points_all += 500
            await referral_relation.referral.asave(update_fields=["points", "points_all"])
            referral_relation.referral_bonus = False
            await referral_relation.asave(update_fields=["referral_bonus"])
            return Response({"message": f"Вы получили 500 бонусный очков за друга {referral_relation.new_player.name}!",
                            "total_tickets": referral_relation.referral.tickets}, status=status.HTTP_200_OK)
        except Player.DoesNotExist:
            return Response({"error": "Игрок не найден."}, status=status.HTTP_404_NOT_FOUND)


@extend_schema_view(
    get=extend_schema(
        tags=["Игрок: реферальная ссылка"],
        summary="Сгенерировать реферальную ссылку",
        description="Генерирует реферальную ссылку для игрока по уникальному идентификатору в Telegram.",
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор пользователя в Telegram")
        ],
        responses={
            200: OpenApiResponse(
                response=PlayerTaskSerializer,
                description="Реферальная ссылка",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value="https://t.me/skillbox_app_bot?start=id_1234"
                    )
                ]
            ),
            500: {"description": "Ошибка при генерации ссылки"}
        }
    )
)
class GenerateRefLinkView(GenericAPIView):
    """
    Эндпоинт для генерации реферальной ссылки.
    Принимает GET-запрос с идентификатором пользователя (tg_id).
    Необходимые переменные для корректной работы:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    Возвращает:
    - Реферальную ссылку игрока.
    """
    async def get(self, request, tg_id: int):
        try:
            create_link = f"https://t.me/skillbox_app_bot?start=id_{tg_id}"
        except Exception as e:
            logging.error(f"Error generating referral link: {e}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response({'ref_link': create_link}, status=status.HTTP_200_OK)


@extend_schema_view(
    get=extend_schema(
        tags=["Игрок: задачи"],
        summary="Получить информацию о задачах игрока",
        description="Возвращает информацию о задачах и их статусе у игрока по уникальному идентификатору в Telegram.",
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор пользователя в Telegram"),
            OpenApiParameter(name="dop_name", type=str, description="Дополнительное имя задачи (опционально)", required=False)
        ],
        responses={
            200: OpenApiResponse(
                response=PlayerTaskSerializer,
                description="Информация о задачах",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value=[
                            {
                                "id": 'id пользователя в БД',
                                "task": {
                                    "id": 'id задачи',
                                    "name": 'Имя задачи',
                                    "picture": 'Картинка',
                                    "dop_name": 'Дополнительное имя',
                                    "description": 'Описание',
                                    "link": 'Ссылка на задачу',
                                    "reward_currency": 'Награда за выполнение - очки',
                                    "reward_tickets": 'Награда за выполнение - билеты',
                                    "is_active": 'Активна задачи или нет'
                                },
                                "start_time": 'Начало выполнения задачи',
                                "completed": 'Выполнена ли задача'
                            }
                        ]
                    )
                ]
            ),
            404: {"description": "Задачи не найдены"}
        }
    ),
    post=extend_schema(
        tags=["Игрок: задачи"],
        summary="Обновить статус задачи игрока",
        description="Обновляет статус задачи игрока по уникальному идентификатору в Telegram и дополнительному имени задачи.",
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор пользователя в Telegram"),
            OpenApiParameter(name="dop_name", type=str, description="Дополнительное имя задачи")
        ],
        request=OpenApiTypes.OBJECT,
        responses={
            200: OpenApiResponse(
                response=PlayerTaskSerializer,
                description="Информация о задачах",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value=[
                            {
                                "id": 'id пользователя в БД',
                                "task": {
                                    "id": 'id задачи',
                                    "name": 'Имя задачи',
                                    "picture": 'Картинка',
                                    "dop_name": 'Дополнительное имя',
                                    "description": 'Описание',
                                    "link": 'Ссылка на задачу',
                                    "reward_currency": 'Награда за выполнение - очки',
                                    "reward_tickets": 'Награда за выполнение - билеты',
                                    "is_active": 'Активна задачи или нет'
                                },
                                "start_time": 'Начало выполнения задачи',
                                "completed": 'Выполнена ли задача'
                            }
                        ]
                    )
                ]
            ),
            400: {"description": "Неверные данные"},
            404: {"description": "Задача не найдена"}
        }
    )
)
class TaskPlayerDetailView(GenericAPIView):
    """
    Эндпоинт для информации о задачах игрока.
    Принимает GET-запрос с идентификатором пользователя (tg_id) и необязательным параметром dop_name.
    Принимает POST-запрос с идентификатором пользователя (tg_id) и dop_name.
    Параметры:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    - `dop_name`: Дополнительное имя задачи (необязательный параметр).
    Возвращает:
    - Информацию о задачах игрока.
    - Статус 404, если игрок или задачи не найдены.
    - Статус 400, если данные невалидны.
    """
    serializer_class = PlayerTaskSerializer

    async def get(self, request, tg_id, dop_name=None):
        try:
            # Используем prefetch_related для загрузки задач игрока и связанных Task
            player = await (Player.objects.prefetch_related
                            (Prefetch('task_player', queryset=PlayerTask.objects.select_related('task')
                                      .order_by('completed', 'id'))).aget(tg_id=tg_id))
        except Player.DoesNotExist:
            return Response({"detail": "Игрок не найден"}, status=status.HTTP_404_NOT_FOUND)
        # Фильтруем задачи, если передан dop_name
        task_players = player.task_player.all()  # Получаем связанные PlayerTask
        if dop_name:
            task_players = [tp for tp in task_players if tp.task.dop_name == dop_name]
        if not task_players:
            return Response({"detail": "Задачи не найдены"}, status=status.HTTP_404_NOT_FOUND)
        # Сериализуем данные
        serializer = self.get_serializer(task_players, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    async def post(self, request, tg_id, dop_name):
        if tg_id and dop_name:
            player = await (Player.objects.prefetch_related
                            (Prefetch('task_player', queryset=PlayerTask.objects.select_related('task')))
                            .aget(tg_id=tg_id))
            tasks = player.task_player.filter(task__dop_name=dop_name)
            # Преобразуем QuerySet в список асинхронно
            tasks_list = [task async for task in tasks.aiterator()]
            # Проверяем, что задача существует
            if not tasks_list:
                return Response({"error": "Задача не найдена"}, status=status.HTTP_404_NOT_FOUND)
            task = tasks_list[0]
            serializer = self.get_serializer(task, data=request.data, partial=True)
            if serializer.is_valid():
                await serializer.asave()
                await task.check_completion()
                return Response(await serializer.adata, status=status.HTTP_200_OK)
            return Response(await serializer.aerrors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'tg_id и dop_name обязательные поля'}, status=status.HTTP_400_BAD_REQUEST)


@extend_schema_view(
    post=extend_schema(
        tags=["Игрок: задачи"],
        summary="Запустить таймер задачи",
        description="Запускает таймер задачи после перехода на ссылку по уникальному идентификатору в Telegram и "
                    "дополнительному имени задачи.",
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор пользователя в Telegram"),
            OpenApiParameter(name="dop_name", type=str, description="Дополнительное имя задачи")
        ],
        request=OpenApiTypes.OBJECT,
        responses={
            200: OpenApiResponse(
                response=PlayerTaskSerializer,
                description="Информация о задачах",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value=[
                                {
                                    "id": 'id пользователя в БД',
                                    "task": {
                                        "id": 'id задачи',
                                        "name": 'Имя задачи',
                                        "picture": 'Картинка',
                                        "dop_name": 'Дополнительное имя',
                                        "description": 'Описание',
                                        "link": 'Ссылка на задачу',
                                        "reward_currency": 'Награда за выполнение - очки',
                                        "reward_tickets": 'Награда за выполнение - билеты',
                                        "is_active": 'Активна задачи или нет'
                                    },
                                    "start_time": 'Начало выполнения задачи',
                                    "completed": 'Выполнена ли задача'
                                }
                            ]
                    )
                ]
            ),
            400: {"description": "Неверные данные"},
            404: {"description": "Задача не найдена"}
        }
    )
)
class StartTaskView(GenericAPIView):
    """
    Эндпоинт для запуска таймера задачи после перехода на ссылку.
    Принимает POST-запрос с идентификатором пользователя (tg_id) и dop_name.
    Параметры:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    - `dop_name`: Дополнительное имя задачи.
    Возвращает:
    - Информацию о задаче.
    - Статус 404, если задача не найдена.
    - Статус 400, если задача уже завершена или данные невалидны.
    """
    serializer_class = PlayerTaskSerializer

    async def post(self, request, tg_id, dop_name):
        player = await (Player.objects.prefetch_related
                        (Prefetch('task_player', queryset=PlayerTask.objects.select_related('task')))
                        .aget(tg_id=tg_id))
        tasks = player.task_player.filter(task__dop_name=dop_name)
        # Преобразуем QuerySet в список асинхронно
        tasks_list = [task async for task in tasks.aiterator()]
        # Проверяем, что задача существует
        if not tasks_list:
            return Response({"error": "Задача не найдена"}, status=status.HTTP_404_NOT_FOUND)
        task = tasks_list[0]
        if task.completed:
            return Response({"error": "Задача уже завершена."}, status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(task, data=request.data, partial=True)
        if serializer.is_valid():
            await serializer.asave()
            await task.start_task_player()
            return Response(await serializer.adata, status=status.HTTP_200_OK)
        return Response(await serializer.aerrors, status=status.HTTP_400_BAD_REQUEST)


@extend_schema_view(
    get=extend_schema(
        tags=["Игрок: топ-игроки"],
        summary="Получить информацию о топ-игроках и ранге игрока",
        description="Возвращает информацию о топ-100 игроках и ранге текущего игрока по уникальному идентификатору в Telegram.",
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор пользователя в Telegram", required=True)
        ],
        request=OpenApiTypes.OBJECT,
        responses={
            200: OpenApiResponse(
                response=PlayerTaskSerializer,
                description="Топ 100 игроков",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value=[
                            {
                                "top_players": [
                                    {
                                        "tg_id": 'Tg_id пользователя в ТГ',
                                        "name": "Имя пользователя",
                                        "points": 'Количество монет',
                                        "rank": 'Ранг игрока'
                                    },
                                ],
                                "player_rank": 'Ранг текущего игрока'
                            }
                        ]
                    )
                ]
            ),
            404: {"description": "Игрок не найден"}
        }
    )
)
class MonthlyTopPlayersView(GenericAPIView):
    """
    Эндпоинт для получения топ-100 игроков и ранга текущего игрока.
    Принимает GET-запрос с идентификатором пользователя (tg_id).
    Параметры:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    Возвращает:
    - Топ-100 игроков и ранг текущего игрока.
    - Статус 500, если возникла ошибка при работе с Redis или базой данных.
    """
    async def get(self, request, tg_id):
        player = await Player.objects.aget(tg_id=tg_id)
        player_rank = player.rank
        # Получаем текущий месяц
        current_month = now().date().replace(day=1)
        # Загружаем топ-100 игроков за текущий месяц
        top_players = []
        async for player in MonthlyTopPlayer.objects.filter(month=current_month).aiterator():
            top_players.append({
                "tg_id": player.tg_id,
                "name": player.name,
                "points": player.points,
                "rank": player.rank
            })
        return Response({'top_players': top_players, 'player_rank': player_rank})


@extend_schema_view(
    post=extend_schema(
        tags=["Игра: результат игры"],
        summary="Обновить результаты игры для игрока",
        description="Обновляет количество очков и билетов для игрока по уникальному идентификатору в Telegram.",
        parameters=[
            OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор пользователя в Telegram", required=True),
            OpenApiParameter(name="points", type=int, description="Количество очков, которые игрок получил", required=True),
            OpenApiParameter(name="tickets", type=int, description="Количество обычных билетов", required=False),
            OpenApiParameter(name="premium_tickets", type=int, description="Количество премиум билетов", required=False)
        ],
        responses={
            200: OpenApiResponse(
                response=PlayerTaskSerializer,
                description="Информация о задачах",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value='Игрок Oleg получил 87 очков'
                    )
                ]
            ),
            400: {"description": "Неверные параметры"},
            404: {"description": "Игрок не найден"}
        }
    )
)
class GameResult(GenericAPIView):
    """
    Эндпоинт для обновления результатов игры для текущего игрока.
    Принимает POST-запрос.
    Параметры:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    - `points`: Количество очков.
    - `tickets`: Количество обычных билетов.
    - `premium_tickets`: Количество премиум билетов.
    Возвращает:
    - Количество очков заработанное пользователем.
    """
    async def post(self, request):
        tg_id = request.data.get('tg_id')
        points = request.data.get('points')
        tickets = request.data.get('tickets')
        premium_tickets = request.data.get('premium_tickets')
        if not tg_id or not points:
            return Response({"error": "Параметры tg_id и points обязательны"}, status=status.HTTP_400_BAD_REQUEST)
        if tickets is None and premium_tickets is None:
            return Response({"error": "Переменная tickets или premium_tickets обязательна"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            player = await Player.objects.aget(tg_id=tg_id)
        except Player.DoesNotExist:
            return Response({"error": "Игрок не найден"}, status=status.HTTP_404_NOT_FOUND)
        if tickets is not None:
            player.tickets -= int(tickets)
        if premium_tickets is not None:
            player.premium_tickets -= int(premium_tickets)
        player.points += int(points)
        player.points_all += int(points)
        if player.points < 0:
            player.points = 0
            player.points_all = 0
        player.instruction = False
        await player.asave(update_fields=["points", "points_all", "instruction", "tickets", "premium_tickets"])
        return Response({f"Игрок {player.name} получил {points} очков"}, status=status.HTTP_200_OK)
