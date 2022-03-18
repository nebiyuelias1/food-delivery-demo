from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin, GeoModelAdmin


from .models import Restaurant

# Register your models here.
class RestaurantModelAdmin(GeoModelAdmin):
    list_display = ('name', 'location', 'address', 'city')

admin.site.register(Restaurant, RestaurantModelAdmin)
