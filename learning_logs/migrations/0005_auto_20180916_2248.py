# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-09-17 02:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning_logs', '0004_auto_20180916_2243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='topic',
            name='text',
            field=models.CharField(max_length=120),
        ),
    ]
