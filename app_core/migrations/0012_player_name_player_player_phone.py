# Generated by Django 4.2.16 on 2024-12-15 00:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_core', '0011_player_country'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='name_player',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Имя игрока для задачи'),
        ),
        migrations.AddField(
            model_name='player',
            name='phone',
            field=models.CharField(blank=True, max_length=25, null=True, verbose_name='Телефон пользователя'),
        ),
    ]
