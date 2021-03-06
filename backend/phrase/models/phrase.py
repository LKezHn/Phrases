from django.db import models
from user.models.user import User

# Create your models here.

class Phrase(models.Model):
    id = models.AutoField(primary_key = True)
    user = models.ForeignKey(User , on_delete = models.CASCADE)
    title = models.CharField(max_length = 30)
    description = models.TextField(max_length = 100)
    date = models.DateField()

    Romance = 'Romance'
    Fiction = 'Fiction'
    Politics = 'Politics'
    Fantasy = 'Fantasy'
    Social = 'Social'
    Other = 'Other'

    category_choices = [
        (Romance, Romance),
        (Fiction, Fiction),
        (Politics, Politics),
        (Fantasy, Fantasy),
        (Social, Social),
        (Other, Other),
    ]

    category = models.CharField(max_length = 30, choices = category_choices, default = Romance,)

    def __str__(self):
        return self.title
