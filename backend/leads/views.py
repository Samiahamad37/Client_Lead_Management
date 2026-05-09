from rest_framework import generics
from .models import Lead
from .serializers import LeadSerializer


class LeadListCreateAPIView(generics.ListCreateAPIView):
    queryset = Lead.objects.order_by('-created_at')
    serializer_class = LeadSerializer


class LeadRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
