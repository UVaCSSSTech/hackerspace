from django.contrib.auth.models import User
from django.http import HttpRequest, HttpResponse
from rest_framework import viewsets
from .serializers import UserSerializer

from django.views.decorators.csrf import csrf_exempt

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

@csrf_exempt
def validate_google_auth(request):
    print(request)
    return HttpResponse()
