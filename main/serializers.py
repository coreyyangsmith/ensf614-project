#-------------------------------------------------------#
#   File Name: main/serializers.py
#   Description: Serializers for Django Models
#
#   Requirements:
#       - TODO
#
#   Returns:
#       - Authentication Routes
#       - Main Model REST
#
#   Created By: Corey Yang-Smith
#   Date: November 11th, 2023
#-------------------------------------------------------#


#   IMPORTS
#-------------------------------------------------------#

# Django Imports
from .models import *
import datetime

# Django Authentication
from django.contrib.auth.password_validation import validate_password

# Django Rest Framework (DRF) Imports
from rest_framework import serializers


#   SERIALIZERS
#-------------------------------------------------------#
class CrewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crew      
        fields = '__all__'
        
class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination      
        fields = '__all__'        

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight      
        fields = '__all__'          
        
class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat      
        fields = '__all__'              