# Generated by Django 2.2.6 on 2020-01-07 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('academy_app', '0013_auto_20191106_1313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certificates',
            name='id_number',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
