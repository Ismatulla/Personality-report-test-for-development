from django.urls import path
from .views import RegisterUserView
from django.urls import path,include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from chartype.views import LinkedinUrl
urlpatterns = [
    path("signup", RegisterUserView.as_view(), name="signup"),
    path("linkedin-url", LinkedinUrl.as_view(), name="link"),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]