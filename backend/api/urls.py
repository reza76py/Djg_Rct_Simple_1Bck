from django.urls import path
from .views import ContentView

urlpatterns = [
    path('content/', ContentView.as_view(), name='content'),
]
