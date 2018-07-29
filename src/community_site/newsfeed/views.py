from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import PostSerializer

from .models import Post

from django.views.generic import (
    CreateView,
    DetailView,
    ListView,
    UpdateView,
    DeleteView
)

class PostListView(ListView):
    queryset = Post.objects.all()

class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
