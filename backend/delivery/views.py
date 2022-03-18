from django.contrib.gis.geos import Point
from django.contrib.gis.db.models.functions import Distance
from rest_framework.generics import ListAPIView

from .serializers import RestaurantModelSerializer
from .models import Restaurant

class RestaurantListView(ListAPIView):
    serializer_class = RestaurantModelSerializer
    
    def get_queryset(self):
        longitude = int(self.request.query_params.get('long'))
        latitude = int(self.request.query_params.get('lat'))
        user_location = Point(longitude, latitude, srid=4326)
        queryset = Restaurant.objects.annotate(distance=Distance('location', user_location)).order_by('distance')[0:6]
        
        return queryset
