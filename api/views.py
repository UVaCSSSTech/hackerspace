from django.contrib.auth.models import User
from django.conf import settings
from django.shortcuts import redirect

from .serializers import *
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions

from rest_framework.permissions import IsAuthenticated

from django.views.decorators.csrf import csrf_exempt

from .models import User

import os

from django.contrib.auth import login
from social_django.utils import psa
# from allauth.socialaccount.providers.oauth2.views import (
#     OAuth2Adapter,
#     OAuth2CallbackView,
#     OAuth2LoginView,
# )
# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from allauth.socialaccount.providers.google.provider import GoogleProvider

# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# class UserList(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#
#
# class UserDetail(generics.RetrieveAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# class GoogleOAuth2AdapterIdToken(GoogleOAuth2Adapter):
#     def complete_login(self, request, app, token, **kwargs):
#         idinfo = id_token.verify_oauth2_token(token.token, requests.Request(), app.client_id)
#         if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
#             raise ValueError('Wrong issuer.')
#         extra_data = idinfo
#         login = self.get_provider() \
#             .sociallogin_from_response(request,
#                                        extra_data)
#         return login
#
#
# oauth2_login = OAuth2LoginView.adapter_view(GoogleOAuth2AdapterIdToken)
# oauth2_callback = OAuth2CallbackView.adapter_view(GoogleOAuth2AdapterIdToken)
#
# class GoogleAuthView(APIView):
#     def post(self, request):
#         payload = {'access_token': request.data.get("token")}  # validate the token
#         r = requests.get('https://www.googleapis.com/oauth2/v2/userinfo', params=payload)
#         data = json.loads(r.text)
#
#         if 'error' in data:
#             content = {'message': 'wrong google token / this google token is already expired.'}
#             return Response(content)
#
#         # create user if not exist
#         try:
#             user = User.objects.get(email=data['email'])
#         except User.DoesNotExist:
#             user = User()
#             user.username = data['email']
#             # provider random default password
#             user.password = make_password(BaseUserManager().make_random_password())
#             user.email = data['email']
#             user.save()
#
#         token = RefreshToken.for_user(user)  # generate token without username & password
#         response = {}
#         response['username'] = user.username
#         response['access_token'] = str(token.access_token)
#         response['refresh_token'] = str(token)
#         return Response(response)


@psa('social:complete')
def register_by_access_token(request, backend):
    # This view expects an access_token GET parameter, if it's needed,
    # request.backend and request.strategy will be loaded with the current
    # backend and strategy.
    print('yes')
    token = request.GET.get('token')
    user = request.backend.do_auth(token)
    if user:
        login(request, user)
        print('ok')
        return 'OK'
    else:
        return 'ERROR'

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
@permission_classes([IsAuthenticated])
def user_detail(request, comp_id):
    """
 Retrieve, update or delete a user by id/pk.
 """
    print(request.user.is_authenticated)

    try:
        user = User.objects.get(comp_id=comp_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def is_authenticated(request):
    if request.user.is_authenticated:
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)

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
