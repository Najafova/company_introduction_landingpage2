from django.urls import path
from .views import *
from .views import SearchResultView

urlpatterns = [
    path('', index, name="aze_home"),
    path('certificates/', certificates, name="certificates"),
    # path('detail/', detail, name='deatil'),
    path('search/', SearchResultView.as_view(), name='search_results'),
    path('admin/images/', simple_upload_aze, name='upload_aze'),
    path('admin/image/', simple_upload_eng, name='upload_eng'),

]

handler404 = handler404