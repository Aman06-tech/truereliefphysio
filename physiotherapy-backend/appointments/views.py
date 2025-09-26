from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
from datetime import datetime, timedelta
from .models import Appointment, TimeSlot
from .serializers import (
    AppointmentSerializer, AppointmentCreateSerializer, TimeSlotSerializer
)

class TimeSlotViewSet(viewsets.ModelViewSet):
    queryset = TimeSlot.objects.all()
    serializer_class = TimeSlotSerializer

    @action(detail=False, methods=['get'])
    def available_slots(self, request):
        date_str = request.query_params.get('date')
        if not date_str:
            return Response({'error': 'Date parameter is required'},
                          status=status.HTTP_400_BAD_REQUEST)

        try:
            date = datetime.strptime(date_str, '%Y-%m-%d').date()
        except ValueError:
            return Response({'error': 'Invalid date format. Use YYYY-MM-DD'},
                          status=status.HTTP_400_BAD_REQUEST)

        booked_slots = Appointment.objects.filter(
            date=date,
            status__in=['pending', 'confirmed']
        ).values_list('time_slot_id', flat=True)

        available_slots = TimeSlot.objects.filter(
            is_available=True
        ).exclude(id__in=booked_slots)

        serializer = TimeSlotSerializer(available_slots, many=True)
        return Response(serializer.data)

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get_serializer_class(self):
        if self.action == 'create':
            return AppointmentCreateSerializer
        return AppointmentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        appointment = serializer.save()

        self.send_confirmation_emails(appointment)

        return Response(
            AppointmentSerializer(appointment).data,
            status=status.HTTP_201_CREATED
        )

    def send_confirmation_emails(self, appointment):
        subject = f'Appointment Confirmation - Dr. Rajan Sharma Physiotherapy'

        customer_message = f'''
        Dear {appointment.first_name} {appointment.last_name},

        Your appointment has been successfully booked!

        Details:
        Date: {appointment.date}
        Time: {appointment.time_slot}
        Service: {appointment.service.name if appointment.service else 'General Consultation'}

        Please arrive 10 minutes before your scheduled appointment.

        Contact us at {settings.DEFAULT_FROM_EMAIL} if you need to reschedule.

        Best regards,
        Dr. Rajan Sharma
        '''

        admin_message = f'''
        New appointment booking received!

        Patient: {appointment.first_name} {appointment.last_name}
        Email: {appointment.email}
        Phone: {appointment.phone}
        Date: {appointment.date}
        Time: {appointment.time_slot}
        Service: {appointment.service.name if appointment.service else 'General Consultation'}
        Complaint: {appointment.complaint}
        Additional Notes: {appointment.additional_notes or 'None'}
        '''

        try:
            send_mail(
                subject,
                customer_message,
                settings.DEFAULT_FROM_EMAIL,
                [appointment.email],
                fail_silently=False,
            )

            send_mail(
                f'New Appointment - {appointment.first_name} {appointment.last_name}',
                admin_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Email sending failed: {e}")

    @action(detail=True, methods=['post'])
    def confirm(self, request, pk=None):
        appointment = self.get_object()
        appointment.status = 'confirmed'
        appointment.save()
        return Response({'status': 'Appointment confirmed'})

    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        appointment = self.get_object()
        appointment.status = 'cancelled'
        appointment.save()
        return Response({'status': 'Appointment cancelled'})
