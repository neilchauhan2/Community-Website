from django.db import models
from django.urls import reverse
from markdown_deux import markdown
from django.conf import settings
from django.utils.safestring import mark_safe
# Create your models here.

def upload_location(instance, filename):
    return "%s/%s" %(instance.id, filename)
    
class Post(models.Model):
    """ database model for the newsfeed app.

    Important fields: user, title, image, publish, content_markup and content_markdown.
    """
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1,null = True,on_delete=models.SET_NULL)
    title = models.CharField(max_length=120)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to=upload_location, 
            null=True, 
            blank=True, 
            width_field="width_field", 
            height_field="height_field")
    height_field = models.IntegerField(default=800)
    width_field = models.IntegerField(default=1000)
    draft = models.BooleanField(default=False)
    publish = models.DateField(auto_now=False, auto_now_add=False)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
    content_markup = models.TextField(null=True)
    content_markdown = models.TextField(null=True, blank=True)
   

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-timestamp", "-updated"]

    def get_markdown(self):
        """ function that actually converts the content_markdown field to markdown.
        
        It uses the markdown_deux package.
        """

        content = self.content_markdown
        markdown_text = markdown(content)
        return mark_safe(markdown_text)

