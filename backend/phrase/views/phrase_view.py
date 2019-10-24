from rest_framework import viewsets, permissions
from ..serializers import PhraseSerializer
from ..models import Phrase


class PhraseView(viewsets.ModelViewSet):
    serializer_class = PhraseSerializer
    queryset = Phrase.objects.all()
