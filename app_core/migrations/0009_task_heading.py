# Generated by Django 4.2.16 on 2024-12-13 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_core', '0008_alter_blogger_options_alter_referralsystem_referral'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='heading',
            field=models.CharField(default='', max_length=50, verbose_name='Заголовок задачи'),
        ),
    ]
