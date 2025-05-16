from django.db import models # type: ignore

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50)  # "Kawaii", "Elegant"
    
    def __str__(self):
        return self.name