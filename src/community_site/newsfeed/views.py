from django.shortcuts import render
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
