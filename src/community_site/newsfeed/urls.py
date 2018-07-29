
from django.contrib import admin
from django.urls import path
from .views import (
    PostListView
)

app_name = 'newsfeed'

urlpatterns = [
    path(r'', PostListView.as_view(), name='list'),
]
