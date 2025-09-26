from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AppointmentViewSet, TimeSlotViewSet

router = DefaultRouter()
router.register(r'appointments', AppointmentViewSet)
router.register(r'timeslots', TimeSlotViewSet)

urlpatterns = [
    path('', include(router.urls)),
]