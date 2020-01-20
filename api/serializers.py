#from django.contrib.auth.models import User
from .models import User
from rest_framework import serializers as sz
from rest_framework.settings import api_settings


class UserSerializer(sz.ModelSerializer):
    class Meta:
        model = User
        fields = ('comp_id', 'username', 'first_name', 'last_name')
