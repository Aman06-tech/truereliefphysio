from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, AboutSectionViewSet, TestimonialViewSet

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'about', AboutSectionViewSet)
router.register(r'testimonials', TestimonialViewSet)

urlpatterns = [
    path('', include(router.urls)),
]