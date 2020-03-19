from django.urls import path
from .views import *
from academy_app.views import *

urlpatterns = [
    path('', index_eng, name="eng_home"),
    path('certificate/', certificate, name="certificate"),
    # path('detail/', detail, name='deatil'),
    path('search/', search, name='search_results'),
]

handler404 = handler404