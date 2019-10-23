from django.db import models

# Create your models here.
class Phrases(models.Model):
    name = models.CharField(max_length = 30)
    title = models.CharField(max_length = 30)
    description = models.TextField(max_length = 60)
    date = models.DateField()