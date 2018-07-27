
from django.contrib import admin
from django.urls import path
from . import views

app_name = 'newsfeed'

urlpatterns = [
    path(r'', views.newsfeed, name='newsfeed'),
]
