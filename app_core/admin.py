from django.contrib import admin
from django.db import transaction
from app_core.models import *


@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    """Регистрация в админ панели модели Player."""
    list_display = ['id', 'tg_id', 'name', 'registration_date', 'points', 'points_all', 'tap_points', 'tickets',
                    'tickets_all', 'premium_tickets', 'premium_tickets_all', 'consecutive_days', 'last_login_date',
                    'login_today', 'is_new', 'daily_points', 'daily_bonus_friends', 'rank', 'country', 'name_player',
                    'phone', 'league', 'instruction', 'total_logged_in_today']

    def total_logged_in_today(self, obj):
        # Считаем количество игроков с login_today=True
        return Player.objects.filter(login_today=True).count()

    # Устанавливаем заголовок для нового поля
    total_logged_in_today.short_description = "Зашли сегодня"


@admin.register(League)
class LeagueAdmin(admin.ModelAdmin):
    """Регистрация в админ панели модели League."""
    list_display = ['id', 'name', 'picture', 'description']


@admin.register(ReferralSystem)
class ReferralSystemAdmin(admin.ModelAdmin):
    """Регистрация в админ панели модели ReferralSystem."""
    list_display = ['id', 'referral', 'new_player', 'referral_bonus', 'new_player_bonus', 'blogger']


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    """Регистрация в админ панели модели Task."""
    list_display = ['id', 'heading', 'name', 'picture', 'dop_name', 'description', 'link', 'reward_currency',
                    'reward_tickets', 'country', 'is_active']

    def save_model(self, request, obj, form, change):
        # Сохраняем объект модели
        super().save_model(request, obj, form, change)
        # Если объект создается впервые (не изменяется)
        if not change:
            # Получаем все идентификаторы игроков
            players = Player.objects.values_list('id', flat=True)
            # Создаем объекты PlayerTask для каждого игрока
            tasks = [PlayerTask(player_id=player_id, task_id=obj.id)for player_id in players]
            # Выполняем операции в транзакции
            with transaction.atomic():
                # Создаем объекты пакетами по 500 штук
                while tasks:
                    batch = tasks[:500]
                    tasks = tasks[500:]
                    PlayerTask.objects.bulk_create(batch)


@admin.register(PlayerTask)
class PlayerTaskAdmin(admin.ModelAdmin):
    """Регистрация в админ панели модели PlayerTask."""
    list_display = ['id', 'player', 'task', 'start_time', 'completed', 'add_flag']


@admin.register(MonthlyTopPlayer)
class MonthlyTopPlayerAdmin(admin.ModelAdmin):
    """Регистрация в админ панели модели MonthlyTopPlayer."""
    list_display = ['id', 'month', 'tg_id', 'name', 'points', 'rank']


@admin.register(Blogger)
class BloggerAdmin(admin.ModelAdmin):
    """Регистрация в админ панели модели Blogger."""
    list_display = ['id', 'nickname', 'country', 'referral_link', 'referral_count']
