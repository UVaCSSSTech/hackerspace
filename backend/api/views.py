from django.contrib.auth.models import User
from django.conf import settings
from django.shortcuts import redirect

from .serializers import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions

from django.views.decorators.csrf import csrf_exempt

from .models import User

from google.oauth2 import id_token
from google.auth.transport import requests

import os

# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class CreateUserView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self,request):
        user = request.data.get('user')
        if not user:
            return Response({'response' : 'error', 'message' : 'No data found'})
        serializer = UserSerializerWithToken(data = user)
        if serializer.is_valid():
            saved_user = serializer.save()
        else:
            return Response({"response" : "error", "message" : serializer.errors})
        return Response({"response" : "success", "message" : "user created succesfully"})


@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, comp_id):
    """
 Retrieve, update or delete a user by id/pk.
 """
    try:
        user = User.objects.get(pk=comp_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = userSerializer(user, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


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
            return Response()
            #return HttpResponseRedirect(redirect_to='https://google.com')
            #return redirect(os.path.join("http://localhost:3000", '/signup/'))
        else:
            User.objects.create(
                comp_id = comp_id,
            )

    except ValueError:
    # Invalid token
        pass

    return HttpResponse()
