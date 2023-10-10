from .models import User
from .serializers import (
    RegisterUserSerializer)
    # LinkedinSerializer,
    # SignInSerializer)
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, logout
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import check_password
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny

class RegisterUserView(APIView):
     permission_classes=[AllowAny]
     def post(self, request):
            reg_serializer=RegisterUserSerializer(data=request.data)
            if reg_serializer.is_valid():
                new_user=reg_serializer.save()
                if new_user:
                    return Response(status=status.HTTP_201_CREATED)
            return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class YourView(APIView):
    
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         # Check if the user is authenticated
#         if request.user.is_authenticated:
#             # User is authenticated, perform actions here
#             return Response({'message': 'Authenticated user data here'})
#         else:
#             # User is not authenticated
#             return Response({'message': 'User is not authenticated'}, status=401)

# class UserCreateAPIView(CreateAPIView):
#     serializer_class = RegisterModelSerializer
#     parser_classes = (FormParser, MultiPartParser)
#     permission_classes = (AllowAny,)

# class RegisterModelSerializer(ModelSerializer):
#     password = CharField(max_length=150)
#     confirm_password = CharField(max_length=150, write_only=True)

#     class Meta:
#         model = User
#         fields = ('first_name', 'last_name', 'phone', 'password', 'confirm_password')

#     def check_password(self, **kwargs):
#         if kwargs.get("password") != kwargs.get("confirm_password"):
#             raise serializers.ValidationError({"password_mismatch": Messages.PASSWORD_MISMATCH_ERROR})
#         return True

#     def validate(self, attrs):
#         if self.check_password(**attrs):
#             attrs.pop('confirm_password')
#         attrs['password'] = make_password(attrs.get('password'))
#         return attrs

# class SigninView(APIView):
#     def post(self, request):
#         # Deserialize the request data using your LoginSerializer
#         serializer = SignInSerializer(data=request.data)
        
#         if serializer.is_valid():
#             # Extract the validated data
#             email = serializer.validated_data['email']
#             password = serializer.validated_data['password']

#             def authenticate(email, password):
#                 try:
#                     user= User.objects.get(email=email)
#                     if check_password(password, user.password):
#                         return user
#                 except User.DoesNotExist:
#                     return None
            
#             user=authenticate(email=email, password=password)
#             print(f"User {user}")
#             if user is not None:
#                 print(f"USER {user}")
#                 # If the user is authenticated, generate JWT tokens
#                 refresh = RefreshToken.for_user(user)
#                 access_token = str(refresh.access_token)
                
#                 # Serialize the user's data using your Serializer
#                 # user_serializer = RegisterUserSerializer(user)
#                 try:
#                     user_linkedin_serializer=LinkedinSerializer(user).data
#                 except:
#                     user_linkedin_serializer=None
#                 user_data=User.objects.get(username=user)
#                 user_resp={"email":user_data.email, 
#                            "username":user_data.username, 
#                            "first name":user_data.first_name, 
#                            "last name":user_data.last_name, 
#                         #    "profile pic":user_data.profile_pic
#                            }
#                 # Return the user's data along with the access token
#                 return Response({
#                     'access_token': access_token,
#                     'user_data': user_resp,  # Include user data here
#                     'user_linkedin_data': user_linkedin_serializer  # Include user data here
#                 }, status=status.HTTP_200_OK)
#             else:
#                 # If authentication fails, return an error response
#                 return Response({'error': 'Authentication failed'}, status=status.HTTP_401_UNAUTHORIZED)
#         else:
#             # If the serializer data is invalid, return validation errors
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
