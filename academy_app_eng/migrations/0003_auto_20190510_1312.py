# Generated by Django 2.2 on 2019-05-10 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('academy_app_eng', '0002_delete_coursesschedules'),
    ]

    operations = [
        migrations.AddField(
            model_name='courses',
            name='_3d_printing_logo',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='courses',
            name='electronics_logo',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='courses',
            name='engineering_logo',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='courses',
            name='technical_support_logo',
            field=models.CharField(default='', max_length=255),
        ),
    ]
