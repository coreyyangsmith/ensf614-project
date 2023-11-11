#-------------------------------------------------------#
#   File Name: scripts/seed_db.py
#   Description: Main Script for seeding of DB with data
#
#   Requirements:
#       - TODO
#
#   Returns:
#       - Calls related functions to populate db with data
#
#   Created By: Corey Yang-Smith
#   Date: November 11th, 2023
#-------------------------------------------------------#


#   IMPORTS
#-------------------------------------------------------#
from main.models import *

import scripts.seeding.load_crew as crew


#   MAIN FUNCTION
#-------------------------------------------------------#
def run():
    # Step 1: Wipe current DB
    Flight.objects.all().delete()
    Crew.objects.all().delete()
    Aircraft.objects.all().delete()
    Seat.objects.all().delete()
    Destination.objects.all().delete()
    #Transaction.objects.all().delete()

    # Step 2: Populate
    crew.run()




