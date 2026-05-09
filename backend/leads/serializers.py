from rest_framework import serializers
from .models import Lead


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ['id', 'name', 'email', 'source', 'status', 'notes', 'created_at', 'updated_at']
