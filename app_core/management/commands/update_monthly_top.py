from django.core.management.base import BaseCommand
from app_core.tasks import update_monthly_ranking


class Command(BaseCommand):
    """Ручное обновление топ-100 игроков командой - python manage.py update_monthly_top"""
    help = "Обновляет топ-100 игроков за текущий месяц"

    def handle(self, *args, **kwargs):
        self.stdout.write("Запускаем обновление топ-100...")
        update_monthly_ranking.delay()  # Асинхронно запускаем задачу Celery
        self.stdout.write("Задача отправлена на выполнение!")
