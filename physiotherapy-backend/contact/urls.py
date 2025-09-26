from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactInfoViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'info', ContactInfoViewSet)
router.register(r'messages', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]