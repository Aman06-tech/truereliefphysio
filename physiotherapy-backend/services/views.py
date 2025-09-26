from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Service, AboutSection, Testimonial
from .serializers import (
    ServiceSerializer, AboutSectionSerializer, TestimonialSerializer
)

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer

class AboutSectionViewSet(viewsets.ModelViewSet):
    queryset = AboutSection.objects.all()
    serializer_class = AboutSectionSerializer

    @action(detail=False, methods=['get'])
    def latest(self, request):
        about = AboutSection.objects.first()
        if about:
            serializer = self.get_serializer(about)
            return Response(serializer.data)
        return Response({'message': 'No about section found'})

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer
