#-------------------------------------------------------#
#   File Name: main/views.py
#   Description: View Functions for Main
#
#   Requirements:
#       - urls
#
#   Renders:
#       - Authentication Routes
#       - Main Model REST
#
#   Created By: Corey Yang-Smith
#   Date: November 11th, 2023
#-------------------------------------------------------#


#   IMPORTS
#-------------------------------------------------------#
# Django Imports
from django.shortcuts import render

# Project imports
from .models import *
from .serializers import *

# DRF
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework import viewsets


#   VIEWS
#-------------------------------------------------------#
def MainView(request):
    return render(request, 'home/index.html')

@api_view(['GET', 'POST'])
def crews_list(request):
    if request.method == 'GET':
        data = Crew.objects.all()
        #print(data)
        serializer = CrewSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CrewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def destinations_list(request):
    if request.method == 'GET':
        data = Destination.objects.all()
        #print(data)
        serializer = DestinationSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    

@api_view(['GET'])
def flights_list(request):
    if request.method == 'GET':
        data = Flight.objects.all()
        #print(data)
        serializer = FlightSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)    
    

@api_view(['GET'])
def seats_list(request):
    if request.method == 'GET':
        data = Seat.objects.all()
        #print(data)
        serializer = SeatSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)       

@api_view(['GET'])
def aircrafts_list(request):
    if request.method == 'GET':
        data = Aircraft.objects.all()
        #print(data)
        serializer = AircraftSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)             
    
@api_view(['GET'])
def flightcrews_list(request):
    if request.method == 'GET':
        data = FlightCrew.objects.all()
        #print(data)
        serializer = FlightCrewSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)                 
    
@api_view(['GET'])
def crews_by_flight(request):
    if request.method == 'GET':
        flight_id = request.GET.get('flight_id','')
        data = FlightCrew.objects.filter(flight_id=flight_id)
        #print(data)
        serializer = FlightCrewSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)    

@api_view(['GET'])
def passengers_by_flight(request, flight_id):
    if request.method == 'GET':
        data = Passenger.objects.filter(flight_id=flight_id)
        serializer = PassengerSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
                 