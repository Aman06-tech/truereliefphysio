from django.urls import path
from . import views

urlpatterns = [
    # Health Check
    path('health/', views.health_check, name='health-check'),

    # Appointment URLs
    path('appointments/', views.AppointmentCreateView.as_view(), name='appointment-create'),
    path('appointments/list/', views.AppointmentListView.as_view(), name='appointment-list'),
    path('appointments/<int:pk>/', views.AppointmentDetailView.as_view(), name='appointment-detail'),
    path('appointments/stats/', views.appointment_stats, name='appointment-stats'),

    # Contact URLs
    path('contacts/', views.ContactCreateView.as_view(), name='contact-create'),
    path('contacts/list/', views.ContactListView.as_view(), name='contact-list'),
    path('contacts/<int:pk>/', views.ContactDetailView.as_view(), name='contact-detail'),
    path('contacts/stats/', views.contact_stats, name='contact-stats'),
]