from rest_framework import serializers
from .models import Form

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Form
        fields = ("pk",'name','status' ,'email', 'nameCompany', 'phone', 'registrationDate',)