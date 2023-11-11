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

urlpatterns = [
    path('', views.MainView),
    re_path(r'^api/crews/$', views.crews_list),
]