from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.


# Notes:
# ID's (PK) are implicitly defined in Django, and so we don't need to include explicit definition
# Other Datatypes (String, Char, Numbers, etc) are known as "Fields" inside of django models (Fields == Attributes)
# To defined an attribute visit the documentation for more info
# https://docs.djangoproject.com/en/4.2/ref/models/fields/

# For Foreign Keys, we can generally use models.ForeignKey, however for more complex relationships (One to Many, Many to Many)
# We need to create an intermediate "Junction Table" ie a Relationship (like creating the "registration" table from the 607 A3)

USER_TYPE = {}

class Aircraft(models.Model): # Todo

    class AirplaneStatus(models.TextChoices):
        AVAILABLE = "AVL", _('Available')
        RESERVED = "RES", _('Reserved')
        MAINTENANCE = "MTN", _('Maintenance')
        UNAVAILABLE = "UNV", _('Unavailable')                        
    company = models.CharField(max_length=50)
    type = models.CharField(max_length=100)

    capacity = models.PositiveSmallIntegerField() # eg. 500
    seat_rows = models.PositiveSmallIntegerField() # eg. 34
    seat_columns = models.CharField(max_length=10) # eg. 3-4-3, 3-3, 2-4-2, etc

    status = models.CharField(max_length=3, choices=AirplaneStatus.choices, default=AirplaneStatus.AVAILABLE)
    fuel_per_km = models.DecimalField(max_digits=4, decimal_places=2) # will dictate base cost of flight (fuel/km * km / #seats) 

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return str(self.pk) + "-" + self.company + " " + self.type 


class Seat(models.Model): # Todo
    class SeatType(models.TextChoices):
        ORDINARY = "ORD", _('Ordinary')
        COMFORT = "CMF", _('Comfort')
        BUSINESS = "BUS", _('Business')   

    type = models.CharField(max_length=3, choices=SeatType.choices, default=SeatType.ORDINARY)
    amount = models.DecimalField(max_digits=5, decimal_places=2) # eg. $999.99
    multiplier = models.DecimalField(max_digits=3, decimal_places=2) # eg. 1x for ordinary, 1.4x for comfort, 2x for business
    row_position = models.PositiveSmallIntegerField()
    column_position = models.PositiveSmallIntegerField()    
    available = models.BooleanField()

    aircraft_ref = models.ForeignKey(Aircraft, null=False, blank=False, on_delete=models.CASCADE)    

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)   

    def __str__(self):
        return str(self.pk) + "-" + self.aircraft_ref.type + " " + self.type + " [" + str(self.column_position) + "," + str(self.row_position) + "]"    


class Destination(models.Model): # Complete
    name = models.CharField(max_length=100)
    airport_code = models.CharField(max_length=3)
    latitude = models.DecimalField(max_digits=10, decimal_places=7) # eg. +/- 123.4567
    longitude = models.DecimalField(max_digits=10, decimal_places=7) # eg. +/- 123.4567

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)      

    def __str__(self):
        return self.name + ", (" + self.airport_code + ")"


class Crew(models.Model): # Complete
    class CrewStatus(models.TextChoices):
        AVAILABLE = "AVL", _('Available')
        REGISTERED = "REG", _('Registered')
        UNAVAILABLE = "UNV", _('Unavailable')                   

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    status = models.CharField(max_length=3, choices=CrewStatus.choices, default=CrewStatus.AVAILABLE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)   

    def __str__(self):
        return self.first_name + " " + self.last_name


class Flight(models.Model): # Todo
    date = models.DateField()
    # depature_time = models.DateTimeField()
    # arrival_time = models.DateTimeField()
    start_point = models.ForeignKey(Destination, null=True, blank= True, on_delete=models.DO_NOTHING, related_name="origin")
    end_point = models.ForeignKey(Destination, null=True, blank= True, on_delete=models.DO_NOTHING, related_name="destination")
    distance = models.FloatField()

    aircraft_ref = models.ForeignKey(Aircraft, null=True, blank= True, on_delete=models.DO_NOTHING)
    
    crews_ref = models.ManyToManyField('Crew', through='FlightCrew')
    # seats_ref = models.ForeignKey(Aircraft, null=True, blank=False, on_delete=models.DO_NOTHING)
    # passengers_ref = models.ForeignKey(Aircraft, null=True, blank=False, on_delete=models.DO_NOTHING)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)   

    def __str__(self):
        return str(self.date) + "-" + self.start_point.name + "-" + self.end_point.name;



# class Transaction(models.Model):
#     amount = models.DecimalField(max_digits=7, decimal_places=2) # eg. $12,345.67
#     user_ref = models.ForeignKey() #TODO
#     flight_ref = models.ForeignKey() #TODO
#     seat_ref = models.ForeignKey() # TODO

#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)       


# Junction Tables
class FlightCrew(models.Model):
    flight_id = models.ForeignKey(Flight, on_delete=models.CASCADE)
    crew_id = models.ForeignKey(Crew, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)   

    def __str__(self):
        return str(self.flight_id.id) + "-" + str(self.crew_id.id)
    
        