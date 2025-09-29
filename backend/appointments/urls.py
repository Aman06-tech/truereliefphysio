from django.urls import path
from . import views

urlpatterns = [
    path('appointments/', views.AppointmentCreateView.as_view(), name='appointment-create'),
    path('appointments/list/', views.AppointmentListView.as_view(), name='appointment-list'),
    path('appointments/<int:pk>/', views.AppointmentDetailView.as_view(), name='appointment-detail'),
    path('appointments/stats/', views.appointment_stats, name='appointment-stats'),
]