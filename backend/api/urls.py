from django.urls import path, include

from .hello_world_view import HelloView
from .login_view import LoginView

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('hello/', HelloView.as_view(), name='hello'),
]