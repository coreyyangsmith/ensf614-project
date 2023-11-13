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
import scripts.seeding.load_destinations as destination
import scripts.seeding.load_aircrafts as aircraft
import scripts.seeding.load_seats as seat
import scripts.seeding.initialize as initialize

#   MAIN FUNCTION
#-------------------------------------------------------#
def run():
    print("#######################")  
    print("# -- Begin Seeding -- #")  
    print("#######################")  

    print("\nDeleting objects...")
    # Step 1: Wipe current DB
    Flight.objects.all().delete()
    Crew.objects.all().delete()
    Aircraft.objects.all().delete()
    Seat.objects.all().delete()
    Destination.objects.all().delete()
    #Transaction.objects.all().delete()
    print("All objects successfully deleted!")

    # Step 2: Populate
    print("\nPopulating database...")
    initialize.run()
    crew.run()
    aircraft.run()
    seat.run()
    destination.run()
    print("Database successfully populated!")

    print("\n##########################")  
    print("# -- Seeding Complete -- #")
    print("##########################")  



