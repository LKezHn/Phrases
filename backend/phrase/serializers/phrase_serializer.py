from rest_framework import serializers
from user.serializers.user_serializer import UserSerializer
from ..models import Phrase


class PhraseSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only = True)
    class Meta:
        model = Phrase
        fields = ('id', 'user', 'title', 'description','date')