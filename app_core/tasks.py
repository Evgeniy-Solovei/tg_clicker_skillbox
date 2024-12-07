from celery import shared_task
from django.utils.timezone import now
from .models import Player, MonthlyTopPlayer


@shared_task(acks_late=True, reject_on_worker_lost=True)
def calculate_daily_referral_bonus():
    """Задача для вычисления суточного бонуса за рефералов + изменение полей."""
    all_players = Player.objects.prefetch_related('referral__new_player').all()
    players_to_update = []
    for player in all_players:
        # Рассчитываем бонус для каждого игрока
        total_bonus = sum(ref.new_player.daily_points * 0.1 for ref in player.referral.all())
        player.daily_bonus_friends = int(total_bonus)
        players_to_update.append(player)
    # Массовое обновление daily_bonus_friends у всех игроков
    Player.objects.bulk_update(players_to_update, fields=['daily_bonus_friends'])
    # Обнуление поля daily_points у всех игроков
    Player.objects.update(daily_points=0)


@shared_task(acks_late=True, reject_on_worker_lost=True)
def update_monthly_ranking():
    """Обновление рангов игроков и сохранение топ-100 в модель MonthlyTopPlayer"""
    players = Player.objects.order_by('-points').all()
    updated_players = []
    rank = 1

    for player in players:
        player.rank = rank
        updated_players.append(player)
        rank += 1

    # Асинхронно обновляем ранги всех игроков в базе данных
    Player.objects.bulk_update(updated_players, ['rank'])

    # Формируем топ-100 игроков
    top_100_players = updated_players[:100]
    current_month = now().date().replace(day=1)

    # Проверяем, есть ли уже записи для текущего месяца
    existing_top = MonthlyTopPlayer.objects.filter(month=current_month).exists()
    if not existing_top:
        # Сохраняем топ-100 игроков в модель MonthlyTopPlayer
        bulk_data = [
            MonthlyTopPlayer(
                month=current_month,
                tg_id=player.tg_id,
                name=player.name,
                points=player.points,
                rank=player.rank
            )
            for player in top_100_players
        ]
        MonthlyTopPlayer.objects.bulk_create(bulk_data)


@shared_task(acks_late=True, reject_on_worker_lost=True)
def reset_login_today():
    """Сбрасывает поле login_today у всех игроков."""
    Player.objects.update(login_today=False)
