from .models import User, Linkedin_data
from rest_framework import serializers

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs= {"password": {"write_only":True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta. model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class LinkedinSerializer(serializers.ModelSerializer):
        class Meta:
            model = Linkedin_data
            fields = '__all__'