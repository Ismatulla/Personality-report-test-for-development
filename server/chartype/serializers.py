from rest_framework import serializers

class LinkedinUrlSerializer(serializers.Serializer):
    link = serializers.URLField()
    username=serializers.CharField()
