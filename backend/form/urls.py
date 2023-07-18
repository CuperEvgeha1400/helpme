from django.contrib import admin
from django.urls import path, re_path
from .views import students_list, post , students_detail
from django.conf import settings
from django.conf.urls.static import static
 
# urlpatterns = [
#     path('api/form/', students_list),
#     path('api/post/', post),
#     path('api/put/', put),
#     path('api/delete/', delete)
# ]


urlpatterns = [
    path('api/form/', students_list),
    path('api/post/', post),
    re_path(r'^api/form/(\d+)$', students_detail),
]