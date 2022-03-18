from django.contrib.gis.db import models

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=1000)
    
    location = models.PointField()
    
    address = models.CharField(max_length=100)
    
    city = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return f'{self.name}'
