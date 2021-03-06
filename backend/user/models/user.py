from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key = True)
    first_name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    phone_number = models.CharField(max_length = 30)

    def __str__(self):
        return self.first_name +" "+self.last_name
