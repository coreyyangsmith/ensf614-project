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

    type = models.CharField(max_length=100)
    rows = models.PositiveSmallIntegerField()
    seat_columns = models.PositiveSmallIntegerField()
    seat_divisions = models.PositiveSmallIntegerField()

    status = models.CharField(max_length=3, choices=AirplaneStatus.choices, default=AirplaneStatus.AVAILABLE)
    amount = models.FloatField() # base cost of flight

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

class Seat(models.Model): # Todo
    class SeatType(models.TextChoices):
        ORDINARY = "ORD", _('Ordinary')
        COMFORT = "CMF", _('Comfort')
        BUSINESS = "BUS", _('Business')   

    type = models.CharField(max_length=3, choices=SeatType.choices, default=SeatType.ORDINARY)
    amount = models.DecimalField(max_digits=5, decimal_places=2) # eg. $999.99
    multiplier = models.DecimalField(max_digits=3, decimal_places=2) # eg. 1x for ordinary, 1.4x for comfort, 2x for business
    available = models.BooleanField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)   


class Destination(models.Model): # Complete
    city = models.CharField(max_length=75)
    country = models.CharField(max_length=75)
    country_code = models.CharField(max_length=3)
    latitude = models.DecimalField(max_digits=7, decimal_places=4) # eg. +/- 123.4567
    longitude = models.DecimalField(max_digits=7, decimal_places=4) # eg. +/- 123.4567

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)      

    def __str__(self):
        return self.country_code + " | " + self.country + ", " + self.city 


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
    depature_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    start_point = models.ForeignKey(Destination, null=True, blank= True, on_delete=models.DO_NOTHING, related_name="origin")
    end_point = models.ForeignKey(Destination, null=True, blank= True, on_delete=models.DO_NOTHING, related_name="destination")
    distance = models.FloatField()

    # aircraft_ref = models.ForeignKey(Aircraft, null=True, blank=False, on_delete=models.DO_NOTHING)
    # crews_ref = models.ForeignKey(Aircraft, null=True, blank=False, on_delete=models.DO_NOTHING)
    # seats_ref = models.ForeignKey(Aircraft, null=True, blank=False, on_delete=models.DO_NOTHING)
    # passengers_ref = models.ForeignKey(Aircraft, null=True, blank=False, on_delete=models.DO_NOTHING)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)   



# class Transaction(models.Model):
#     amount = models.DecimalField(max_digits=7, decimal_places=2) # eg. $12,345.67
#     user_ref = models.ForeignKey() #TODO
#     flight_ref = models.ForeignKey() #TODO
#     seat_ref = models.ForeignKey() # TODO

#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)       


    