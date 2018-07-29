
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import (
    PostListView,
    PostView
)

router = routers.DefaultRouter()
router.register('newsfeed',PostView)
app_name = 'newsfeed'

urlpatterns = [
    path(r'', PostListView.as_view(), name='list'),
    path('api',include(router.urls)),
]
