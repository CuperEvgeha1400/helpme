from django.contrib import admin
from django.urls import path, re_path
from .views import students_list,students_detail
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/form/$', students_list),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)