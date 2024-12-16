from collections import defaultdict

from adrf.views import APIView
from django.db.models import Prefetch, Q
from adrf.viewsets import GenericAPIView
from django.utils import timezone
from drf_spectacular.types import OpenApiTypes
from drf_spectacular.utils import OpenApiParameter, extend_schema, extend_schema_view, OpenApiResponse, OpenApiExample
from rest_framework import status
from app_core.models import Player
from shop.models import Product, PlayerProduct
from rest_framework.response import Response


@extend_schema_view(
    get=extend_schema(
        tags=["Продукты: Список продуктов"],
        summary="Получить список продуктов игрока",
        description="Возвращает список всех доступных продуктов для покупки.",
        parameters=[
            OpenApiParameter(
                name="tg_id", type=int, description="Уникальный идентификатор игрока в Telegram", required=True)],
        responses={
            200: OpenApiResponse(
                response=OpenApiTypes.OBJECT,
                description="Информация о продуктах.",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value={
                            "products": [
                                {
                                    "id": 'Id продукта',
                                    "name": 'Имя продукта',
                                    "description": 'Описание продукта',
                                    "price": 'Стоимость продукта',
                                    "shop": {
                                        "id": 'Id магазина',
                                        "name": 'Имя магазина'
                                    },
                                    "is_purchased": 'Дата покупки',
                                    "is_accessible": 'Доступен ли продукт текущему игроку'
                                }
                            ]
                        }
                    )
                ]
            ),
            404: {"description": "Игрок не найден"}
        }
    ),
    post=extend_schema(
        tags=["Продукты"],
        summary="Купить продукт для игрока",
        description="Покупает указанный продукт для игрока.",
        parameters=[OpenApiParameter(name="tg_id", type=int, description="Уникальный идентификатор игрока в Telegram",
                                     required=True)],
        responses={
            201: OpenApiResponse(
                response=OpenApiTypes.OBJECT,
                description="Информация о продуктах.",
                examples=[
                    OpenApiExample(
                        "Пример ответа",
                        value={
                            "products": [
                                {
                                    "id": 'Id продукта',
                                    "name": 'Имя продукта',
                                    "description": 'Описание продукта',
                                    "price": 'Стоимость продукта',
                                    "shop": {
                                        "id": 'Id магазина',
                                        "name": 'Имя магазина'
                                    },
                                    "is_purchased": 'Дата покупки',
                                    "is_accessible": 'Доступен ли продукт текущему игроку',
                                    "remaining_points": 'Количество очков игрока'
                                }
                            ]
                        }
                    )
                ]
            ),
            400: {"description": "Недостаточно баллов для покупки"},
            404: {"description": "Игрок или продукт не найдены"}
        }
    )
)
class ProductListView(APIView):
    """
    Эндпоинт для получения списка продуктов и покупки продуктов для игрока.
    GET:
    - Возвращает список всех активных продуктов, включая статус покупки и доступности для игрока.
    POST:
    - Позволяет игроку приобрести продукт, если у него достаточно баллов.
    Параметры:
    - `tg_id`: Уникальный идентификатор игрока в Telegram (передается в URL).
    - `product_id`: ID продукта, который нужно купить (передается в теле POST-запроса).
    Возвращает:
    - Список продуктов (GET).
    - Информацию о купленном продукте и оставшихся баллах игрока (POST).
    - Сообщение об ошибке, если данные неверные или объект не найден.
    """

    async def get(self, request, tg_id):
        try:
            player = await Player.objects.prefetch_related(
                Prefetch('purchases', queryset=PlayerProduct.objects.select_related('product', 'product__shop'))
            ).aget(tg_id=tg_id)
        except Player.DoesNotExist:
            return Response({"error": "Игрок не найден"}, status=status.HTTP_404_NOT_FOUND)
        # Получаем страну игрока
        player_country = player.country
        # Получаем все активные продукты, соответствующие стране игрока или с пустым полем country
        products = Product.objects.filter(
            Q(is_active=True) & (Q(country=player_country) | Q(country__isnull=True) | Q(country=''))
        ).order_by('id').select_related('shop').aiterator()
        products = [product async for product in products]
        # Собираем список продуктов игрока
        player_products = {pp.product.id: pp for pp in player.purchases.all()}
        # Группируем товары по магазинам
        shops = defaultdict(list)
        for product in products:
            player_product = player_products.get(product.id)  # Проверяем, есть ли продукт у игрока
            shops[product.shop].append({
                "id": product.id,
                "name": product.name,
                "description": product.description,
                "price": product.price,
                'link': product.link,
                'country': product.country,
                "is_purchased": player_products.get(product.id,
                                                    None).purchased_at if product.id in player_products else False,
                "is_accessible": player_product.is_accessible if player_product else False,
            })
        response_data = [
            {
                "id": shop.id,
                "name": shop.name,
                "description": shop.description,
                "picture": shop.picture.url if shop.picture else None,
                "products": shop_products
            }
            for shop, shop_products in shops.items()
        ]

        return Response({"shops": response_data}, status=status.HTTP_200_OK)

    async def post(self, request, tg_id):
        product_id = request.data.get('product_id')
        # Проверяем наличие игрока
        try:
            player = await Player.objects.aget(tg_id=tg_id)
        except Player.DoesNotExist:
            return Response({"error": "Игрок не найден"}, status=status.HTTP_404_NOT_FOUND)
        # Проверяем наличие продукта
        try:
            product = await Product.objects.select_related('shop').aget(id=product_id, is_active=True)
        except Product.DoesNotExist:
            return Response({"error": "Продукт не найден или не активен"}, status=status.HTTP_404_NOT_FOUND)
        # Проверяем, был ли продукт уже куплен
        product_already_purchased = await PlayerProduct.objects.filter(player=player, product=product).aexists()
        if product_already_purchased:
            return Response({"error": "Продукт уже куплен"}, status=status.HTTP_400_BAD_REQUEST)
        # Проверяем, достаточно ли баллов у игрока для покупки
        if player.points < product.price:
            return Response({"error": "Недостаточно баллов для покупки"}, status=status.HTTP_400_BAD_REQUEST)
        # Уменьшаем количество баллов игрока на цену продукта
        player.points -= product.price
        await player.asave()
        # Создаем запись о покупке продукта для игрока
        player_product = await PlayerProduct.objects.acreate(player=player, product=product,
                                                             purchased_at=timezone.now(),
                                                             is_accessible=True)
        return Response({
            "message": "Продукт успешно куплен",
            "shop": {
                "id": product.shop.id,
                "name": product.shop.name,
                "description": product.description
            },
            "product": {
                "id": product.id,
                "name": product.name,
                "description": product.description,
                "price": product.price,
                'link': product.link,
                'country': product.country,
                "is_accessible": player_product.is_accessible
            },
            "remaining_points": player.points
        }, status=status.HTTP_201_CREATED)
