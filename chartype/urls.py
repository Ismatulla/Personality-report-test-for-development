from .views import LinkedinUrl
from django.urls import path

urlpatterns = [
    path('linkedin-url', LinkedinUrl.as_view(), name='linkedin-url'),
]