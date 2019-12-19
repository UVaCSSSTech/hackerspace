from django.contrib.auth.models import User
from django.http import HttpRequest, HttpResponse
from django.conf import settings
from django.shortcuts import redirect
from rest_framework import viewsets
from .serializers import UserSerializer

from django.views.decorators.csrf import csrf_exempt

from .models import User

from google.oauth2 import id_token
from google.auth.transport import requests

import os

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


def show_signup(request):
    pass

@csrf_exempt
def validate_google_auth(request):
    token = request.POST.get("token")
    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), settings.CLIENT_ID)
        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer.')
        # ID token is valid. Get the user's Google Account ID from the decoded token.
        comp_id = idinfo['email'].split('@')[0]
        name = idinfo['name']

        # If user have not signed up, redirect to signup
        if User.objects.filter(pk=comp_id).count() == 0:
            response = HttpResponse()
            response['redirect-url'] = os.path.join(settings.BASE_URL, 'signup')
            # data = {
            #     'redirect-url' : os.path.join(settings.BASE_URL, 'signup')
            # }
            return redirect(os.path.join("http://localhost:3000", '/signup/'))
        else:
            User.objects.create(
                comp_id = comp_id,
            )

    except ValueError:
    # Invalid token
        pass

    return HttpResponse()
