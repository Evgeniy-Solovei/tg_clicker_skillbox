# Generated by Django 4.2.16 on 2024-12-15 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_core', '0012_player_name_player_player_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='country',
            field=models.CharField(default='tg_by', max_length=50, verbose_name='Страна'),
        ),
    ]