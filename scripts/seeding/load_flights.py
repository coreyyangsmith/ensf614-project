#-------------------------------------------------------#
#   File Name: scripts/load_flights.py
#   Description: Seeding script to generate flight information for each destination
#
#   Requirements:
#       - None
#
#   Returns:
#       - Populates database with Seat
#
#   Created By: Corey Yang-Smith
#   Date: November 18th, 2023
#-------------------------------------------------------#


#   IMPORTS
#-------------------------------------------------------#
from main.models import Flight, Aircraft, Destination, Crew, FlightCrew
from scripts.seeding.config import YEAR, MONTH, DAY, NUM_FLIGHTS_PER_DAY, NUM_DAYS
import pandas as pd
from datetime import date, timedelta
import random;
import math

#   MAIN FUNCTION
#-------------------------------------------------------#

def deg2rad(degree):
    return math.radians(degree)

def getDistance(start, end):
    R = 6371

    lat1 = start.latitude
    lon1 = start.longitude
    lat2 = end.latitude
    lon2 = end.longitude

    dLat = deg2rad(lat2-lat1)
    dLon = deg2rad(lon2-lon1)

    a = math.sin(dLat/2) * (math.sin(dLat/2)) + math.cos(deg2rad(lat1)) * math.cos(deg2rad(lat2)) * math.sin(dLon/2) * math.sin(dLon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    d = R * c # distance in km

    return d

def run():
    count = 0

    for single_date in (date(YEAR, MONTH, DAY) + timedelta(n) for n in range(NUM_DAYS)):
        # print("Generating Flights for: ", single_date)

        # Generate Test Flights | YYC --> LAX
        start = Destination.objects.get(airport_code = "YYC")
        end = Destination.objects.get(airport_code = "LAX")
        distance = 10000 # fake

        flight = Flight.objects.get_or_create(
            date = single_date,
            start_point = start,
            end_point = end,
            distance = distance,
            aircraft_ref = Aircraft.objects.order_by('?').first(),
        )
        count += 1

        for i in range(NUM_FLIGHTS_PER_DAY):
            start = Destination.objects.order_by('?').first()
            end = Destination.objects.order_by('?').first()
            distance = getDistance(start, end)
                    

            flight = Flight.objects.get_or_create(
                date = single_date,
                start_point = start,
                end_point = end,
                distance = distance,
                aircraft_ref = Aircraft.objects.order_by('?').first(),
            )    
            count += 1    

    print("'Flight' model successfully loaded (",count,")")

        
