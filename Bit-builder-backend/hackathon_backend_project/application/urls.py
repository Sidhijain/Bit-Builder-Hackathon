from django.urls import path
from .views import sample_get_api

urlpatterns = [
    path('get', sample_get_api, name='sample_get_api'),
]