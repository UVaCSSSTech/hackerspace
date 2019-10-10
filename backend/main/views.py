from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import generics, viewsets
# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
