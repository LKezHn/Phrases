from django.contrib import admin
from .models import Phrases

class PhrasesAdmin(admin.ModelAdmin):
    list_display = ('name','title','description','date')

admin.site.register(Phrases,PhrasesAdmin)    