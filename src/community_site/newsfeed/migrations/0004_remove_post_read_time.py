# Generated by Django 2.0.7 on 2018-09-01 14:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newsfeed', '0003_auto_20180728_1503'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='read_time',
        ),
    ]