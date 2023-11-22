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
    re_path(r'^api/flightcrews/$', views.flightcrews_list),       
    re_path(r'^api/crewsbyflight/$', views.crews_by_flight),
    re_path(r'^api/flights/(\d+)$', views.passengers_by_flight),
    # Add these URLs for user registration, login, and logout
    re_path(r'^api/register/$', views.register, name='register'),
    re_path(r'^api/login/$', views.login, name='login'),
    re_path(r'^api/logout/$', views.logout, name='logout'),
]