# Generated by Django 2.2.6 on 2020-01-13 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('academy_app', '0014_auto_20200107_1243'),
    ]

    operations = [
        migrations.AddField(
            model_name='certificates',
            name='qr_code',
            field=models.ImageField(blank=True, null=True, upload_to='website/'),
        ),
    ]
