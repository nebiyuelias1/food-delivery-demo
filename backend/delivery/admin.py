from django.contrib import admin

from .models import Restaurant

# Register your models here.
class RestaurantModelAdmin(admin.ModelAdmin):
    pass

admin.site.register(Restaurant, RestaurantModelAdmin)
