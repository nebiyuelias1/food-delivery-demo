from django.contrib import admin
from django.urls import include, path
from .views import RestaurantListView

urlpatterns = [
    path('restaurants/', RestaurantListView.as_view(), name='restaurant-list'),
]