from django.db import models

# Create your models here.
class User(models.Model):
    comp_id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50)
