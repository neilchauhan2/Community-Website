
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include("homepage.urls")),
    path('admin/', admin.site.urls),
    path('user/', include("users.urls")),
    path('newsfeed/', include("newsfeed.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.site_header = "NEIL & AMAAN"
admin.site.site_title = "NEIL & AMAAN Admin Portal"
admin.site.index_title = "Welcome to NEIL & AMAAN Researcher Portal"
