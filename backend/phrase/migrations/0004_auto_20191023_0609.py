# Generated by Django 2.2.6 on 2019-10-23 06:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('phrase', '0003_auto_20191023_0607'),
    ]

    operations = [
        migrations.RenameField(
            model_name='phrase',
            old_name='phrase',
            new_name='description',
        ),
    ]
