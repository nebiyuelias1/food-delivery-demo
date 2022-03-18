from django.db import models

from django_geofield import fields

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=1000)
    
    position = fields.GeoPositionField(db_index=True)
    
    def __str__(self) -> str:
        return f'{self.name} ({self.position})'
