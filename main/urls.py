#-------------------------------------------------------#
#   File Name: main/urls.py
#   Description: Main Routing for API
#
#   Requirements:
#       - None
#
#   Renders:
#       - Links Routes to View Functions for Main
#
#   Created By: Corey Yang-Smith
#   Date: November 11th, 2023
#-------------------------------------------------------#


#   IMPORTS
#-------------------------------------------------------#

from django.urls import path, re_path, include
from main import views

from . import views

#   MAIN FUNCTION
#-------------------------------------------------------#

# www.airline.com/

urlpatterns = [
    path('', views.MainView), # www.airline.com/
    re_path(r'^api/crews/$', views.crews_list), # www.airline.com/api/crews/
    re_path(r'^api/destinations/$', views.destinations_list),
    re_path(r'^api/flights/$', views.flights_list),    
    re_path(r'^api/seats/$', views.seats_list),        
    re_path(r'^api/aircrafts/$', views.aircrafts_list),         
]