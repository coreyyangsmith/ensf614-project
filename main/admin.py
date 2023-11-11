from django.contrib import admin

from .models import *

# Register your models here.

admin.site.register(Aircraft)
admin.site.register(Seat)
admin.site.register(Destination)
admin.site.register(Crew)
admin.site.register(Flight)
