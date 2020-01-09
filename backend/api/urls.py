from django.urls import path, re_path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/is_authenticated', views.is_authenticated),
    re_path('api/users/(?P<comp_id>[a-zA-Z0-9]+)$', views.user_detail),
    #re_path('.*', Templateview.as_view(template_name='index.html')),
    #path('google-auth/', views.GoogleAuthView.as_view())
    #path('auth/', views.register_by_access_token),
    # path('users/', views.UserList.as_view()),
    # path('users/<int:pk>', views.UserDetail.as_view()),
]
