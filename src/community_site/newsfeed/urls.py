
from django.contrib import admin
from django.urls import path
from .views import (
    PostListView
)

app_name = 'posts'

urlpatterns = [
    path(r'', PostListView.as_view(), name='newsfeed'),
]
