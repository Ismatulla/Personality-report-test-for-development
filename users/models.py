from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

def user_dir(instance, filename):
    return f'/personality/user_data/user_{instance.user.username}/{filename}'

class User(AbstractUser):
    username=models.CharField(max_length=100, unique=True)
    email=models.EmailField(max_length=100, unique=True)
    first_name=models.CharField(max_length=100, blank=True)
    last_name=models.CharField(max_length=100, blank=True)
    profile_pic=models.ImageField(upload_to=user_dir, blank=True)
    def __str__(self):
        return str(self.username)
    
class Linkedin_data(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, related_name='usernames')
    linkedin_url=models.CharField(max_length=200, blank=True)
    first_name=models.CharField(max_length=100, blank=True)
    last_name=models.CharField(max_length=100, blank=True)
    chartype=models.CharField(max_length=50, blank=True)
    prof_pic=models.CharField(max_length=200, blank=True)

    def __str__(self) -> str:
        return str(self.user.username)