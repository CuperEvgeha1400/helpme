from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
 
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .serializers import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.decorators import authentication_classes, permission_classes
 
@api_view(['GET'])
def students_list(request):
    if request.method == 'GET':
        data = Form.objects.all()
        serializer = StudentSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    
@authentication_classes([])
@permission_classes([])
@api_view(['POST'])
@permission_classes([AllowAny])
def post(request):
    if request.method == 'POST':
        print('post')
        serializer = StudentSerializer(data=request.data)
        serializer.is_valid()
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
@permission_classes([AllowAny])
def students_detail(request, pk):
    try:
        student = Form.objects.get(pk=pk)
    except Form.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = PutSerializer(student, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)