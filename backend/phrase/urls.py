from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'^phrases', views.PhraseView)

urlpatterns = [
    path('', include(router.urls)),
]