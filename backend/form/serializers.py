from rest_framework import serializers
from .models import Form

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Form
        fields = ("pk",'name','nameCompany', 'status', 'email', 'phone', 'registrationDate', 'info',)




class PutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Form
        fields = ("pk", 'status',)