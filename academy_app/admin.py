from django.contrib import admin
from .models import *

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['name', 'url', 'order', 'status']
    search_fields = ['name', 'url', 'order', 'status']
    list_filter = ['name', 'url', 'order', 'status']

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ['title']

@admin.register(Courses)
class CoursesAdmin(admin.ModelAdmin):
    list_display = ['title']

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ['url']

@admin.register(InstructorsGeneral)
class InstructorsGeneralAdmin(admin.ModelAdmin):
    list_display = ['title']

@admin.register(Instructors)
class InstructorsAdmin(admin.ModelAdmin):
    list_display = ['fullname']

@admin.register(Footer)
class FooterAdmin(admin.ModelAdmin):
    list_display = ['facebook', 'linkedin', 'youtube']

@admin.register(Translations)
class TranslationsAdmin(admin.ModelAdmin):
    list_display = ['moto']

@admin.register(Certificates)
class CertificatesAdmin(admin.ModelAdmin):
    list_display = ['id_number', 'first_name', 'last_name', 'level', 'term', 'telephone', 'email']
    search_fields = ['id_number', 'first_name', 'last_name', 'level', 'term']
    list_filter = ['level', 'term']