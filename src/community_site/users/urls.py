from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path
from . import views

app_name = 'users'

urlpatterns = [
    path(r'signup', views.signup, name='signup'),
    path(r'accounts/profile', views.profile, name='profile'),
    path(r'login', auth_views.login, name='login'),
]
