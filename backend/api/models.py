from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    #comp_id = models.CharField(max_length=50, unique=True)
    #password = models.CharField(max_length=100, null=True)
    comp_id = models.CharField(max_length=50, unique=True, null=True)

    def __str__(self):
        return self.username
