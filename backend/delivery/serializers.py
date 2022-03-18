from rest_framework.serializers import ModelSerializer

from .models import Restaurant

class RestaurantModelSerializer(ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('name', 'location', 'address', 'city', )