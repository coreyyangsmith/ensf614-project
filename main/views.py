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
from rest_framework_simplejwt.tokens import RefreshToken

# Json
import json

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
        print(request)
        try:
            data = Passenger.objects.filter(flight_id=flight_id)
            serializer = PassengerSerializer(data, context={'request': request}, many=True)
        except Passenger.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        return Response(serializer.data)
    
@api_view(['GET'])
def query_flights(request):
    print("Initial Query")
    if request.method == 'GET':
        print("GET Request Start")
        print("Request\n")
        print(request)

        print("\nDump\n")
        dump = json.dumps(request.GET)
        print(dump)
        print(type(dump))

        print("\nHTTP Body\n")

        body = json.loads(dump)    
        print(body)    
        print(type(body))

        # Initialize Values from JSON, to filter
        start_point_id = body['info[start_point][id]']
        end_point_id = body['info[end_point][id]']

        try:
            start_point = Destination.objects.get(id=start_point_id)
            end_point = Destination.objects.get(id=end_point_id)

            print("\n# ---------------- #")
            print("Start Point\n")
            print(start_point)
            data = Flight.objects.filter(start_point=start_point, end_point=end_point)
            serializer = FlightSerializer(data, context={'request': request}, many=True)
        except Flight.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        return Response(serializer.data)    


# Add these views for user registration, login, and logout
@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        res = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        return Response(res, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    refresh = RefreshToken.for_user(user)
    res = {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
    return Response(res, status=status.HTTP_200_OK)

@api_view(['POST'])
def logout(request):
    try:
        refresh_token = request.data['refresh']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)
