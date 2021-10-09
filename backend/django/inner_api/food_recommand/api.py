from .models import *
from rest_framework import serializers, viewsets, status
from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        # 모델 설정
        model = Food
        # 필드 설정
        fields = ('id', 'name', 'img_url')
        

class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
    
