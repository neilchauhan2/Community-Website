from django.urls import path, include
from . import views

app_name = 'homepage'

urlpatterns = [
    path(r'', views.index, name='index'),
]