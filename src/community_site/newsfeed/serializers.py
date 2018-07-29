from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('id',
                'slug',
                'title',
                'image',
                'publish',
                'content_markdown',
                'content_markup',
                )