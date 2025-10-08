"""
Enhanced views with security features for True Relief Physio
Includes: Throttling, Pagination, Error Handling, Logging
"""
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from django.conf import settings
from django.db import DatabaseError, IntegrityError
import logging

from .models import Appointment, Contact
from .serializers import AppointmentSerializer, ContactSerializer
from truereliefapi.throttling import (
    AppointmentRateThrottle,
    ContactRateThrottle,
    ListAPIRateThrottle,
    BurstRateThrottle
)

logger = logging.getLogger(__name__)


class StandardResultsPagination(PageNumberPagination):
    """
    Standard pagination for list views
    """
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100


class AppointmentCreateView(generics.CreateAPIView):
    """
    Create appointment with rate limiting and email notifications
    Rate limit: 5 per hour per IP
    """
    serializer_class = AppointmentSerializer
    permission_classes = [AllowAny]
    throttle_classes = [AppointmentRateThrottle, BurstRateThrottle]

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            appointment = serializer.save()

            # Send emails (async in production with Celery)
            self.send_confirmation_emails(appointment)

            logger.info(f"Appointment created: {appointment.id} by {appointment.email}")

            headers = self.get_success_headers(serializer.data)
            return Response(
                {
                    'success': True,
                    'message': 'Appointment booked successfully! You will receive a confirmation email shortly.',
                    'appointment': serializer.data
                },
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        except IntegrityError as e:
            logger.error(f"Database integrity error: {str(e)}")
            return Response(
                {'error': 'Failed to create appointment due to a database error.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        except Exception as e:
            logger.error(f"Unexpected error creating appointment: {str(e)}")
            return Response(
                {'error': 'An unexpected error occurred. Please try again later.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def send_confirmation_emails(self, appointment):
        try:
            # Email to patient
            patient_subject = 'Appointment Confirmation - True Relief Physio'
            patient_message = f"""
Dear {appointment.name},

Thank you for booking an appointment with True Relief Physio!

Appointment Details:
- Service: {appointment.get_service_display()}
- Date: {appointment.date}
- Time: {appointment.time}
- Location: {appointment.location}

Dr. Rajan Sharma will contact you soon to confirm the appointment and provide further details.

If you have any questions, please don't hesitate to contact us.

Best regards,
True Relief Physio Team
Dr. RAJAN SHARMA [PT]
Reg. HSCP - PT(1994), BPT, CMT, CDMT
"""

            send_mail(
                patient_subject,
                patient_message,
                settings.DEFAULT_FROM_EMAIL,
                [appointment.email],
                fail_silently=True,
            )

            # Email to doctor
            doctor_subject = f'New Appointment Booking - {appointment.name}'
            doctor_message = f"""
New appointment booking received:

Patient Details:
- Name: {appointment.name}
- Email: {appointment.email}
- Phone: {appointment.phone}
- Age: {appointment.age}
- Location: {appointment.location}

Appointment Details:
- Service: {appointment.get_service_display()}
- Preferred Date: {appointment.date}
- Preferred Time: {appointment.time}

Additional Information:
{appointment.message if appointment.message else 'None provided'}

Please contact the patient to confirm the appointment.
"""

            send_mail(
                doctor_subject,
                doctor_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.DOCTOR_EMAIL],
                fail_silently=True,
            )

            logger.info(f"Confirmation emails sent for appointment {appointment.id}")

        except Exception as e:
            logger.error(f"Error sending emails for appointment {appointment.id}: {str(e)}")


class AppointmentListView(generics.ListAPIView):
    """
    List appointments with pagination and rate limiting
    Rate limit: 30 per minute per IP
    """
    queryset = Appointment.objects.all().order_by('-created_at')
    serializer_class = AppointmentSerializer
    pagination_class = StandardResultsPagination
    throttle_classes = [ListAPIRateThrottle]


class AppointmentDetailView(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update appointment
    Rate limit: 100 per minute for authenticated users
    """
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    throttle_classes = [BurstRateThrottle]


@api_view(['GET'])
@throttle_classes([ListAPIRateThrottle])
def appointment_stats(request):
    """
    Get appointment statistics
    Rate limit: 30 per minute per IP
    """
    try:
        total_appointments = Appointment.objects.count()
        pending_appointments = Appointment.objects.filter(status='pending').count()
        confirmed_appointments = Appointment.objects.filter(status='confirmed').count()
        completed_appointments = Appointment.objects.filter(status='completed').count()

        return Response({
            'total_appointments': total_appointments,
            'pending_appointments': pending_appointments,
            'confirmed_appointments': confirmed_appointments,
            'completed_appointments': completed_appointments,
        })
    except DatabaseError as e:
        logger.error(f"Database error in appointment stats: {str(e)}")
        return Response(
            {'error': 'Unable to retrieve statistics'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


class ContactCreateView(generics.CreateAPIView):
    """
    Create contact with rate limiting
    Rate limit: 3 per hour per IP
    """
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]
    throttle_classes = [ContactRateThrottle, BurstRateThrottle]

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            contact = serializer.save()

            # Send emails
            self.send_notification_emails(contact)

            logger.info(f"Contact form submitted: {contact.id} by {contact.email}")

            headers = self.get_success_headers(serializer.data)
            return Response(
                {
                    'success': True,
                    'message': 'Thank you for contacting us! We\'ll get back to you within 24 hours.',
                    'contact': serializer.data
                },
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        except Exception as e:
            logger.error(f"Error creating contact: {str(e)}")
            return Response(
                {'error': 'An unexpected error occurred. Please try again later.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def send_notification_emails(self, contact):
        try:
            # Email to user
            user_subject = 'Thank you for contacting True Relief Physio'
            user_message = f"""
Dear {contact.name},

Thank you for reaching out to True Relief Physio!

We have received your message regarding: {contact.get_concern_type_display()}
Subject: {contact.subject}

Dr. Rajan Sharma or our team will review your concern and get back to you within 24 hours.

If this is an emergency or you need immediate assistance, please call us directly at:
- 9625891710
- 8449555400

Best regards,
True Relief Physio Team
Dr. RAJAN SHARMA [PT]
Reg. HSCP - PT(1994), BPT, CMT, CDMT
"""

            send_mail(
                user_subject,
                user_message,
                settings.DEFAULT_FROM_EMAIL,
                [contact.email],
                fail_silently=True,
            )

            # Email to doctor
            doctor_subject = f'New Contact Form Submission - {contact.get_concern_type_display()}'
            doctor_message = f"""
New contact form submission received:

Contact Details:
- Name: {contact.name}
- Email: {contact.email}
- Phone: {contact.phone}
- Concern Type: {contact.get_concern_type_display()}

Subject: {contact.subject}

Message:
{contact.message}

Submitted on: {contact.created_at}

Please respond to this inquiry promptly.
"""

            send_mail(
                doctor_subject,
                doctor_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.DOCTOR_EMAIL],
                fail_silently=True,
            )

            logger.info(f"Notification emails sent for contact {contact.id}")

        except Exception as e:
            logger.error(f"Error sending emails for contact {contact.id}: {str(e)}")


class ContactListView(generics.ListAPIView):
    """
    List contacts with pagination
    """
    queryset = Contact.objects.all().order_by('-created_at')
    serializer_class = ContactSerializer
    pagination_class = StandardResultsPagination
    throttle_classes = [ListAPIRateThrottle]


class ContactDetailView(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update contact
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    throttle_classes = [BurstRateThrottle]


@api_view(['GET'])
@throttle_classes([ListAPIRateThrottle])
def contact_stats(request):
    """
    Get contact statistics
    """
    try:
        total_contacts = Contact.objects.count()
        new_contacts = Contact.objects.filter(status='new').count()
        in_progress_contacts = Contact.objects.filter(status='in_progress').count()
        replied_contacts = Contact.objects.filter(status='replied').count()
        closed_contacts = Contact.objects.filter(status='closed').count()

        return Response({
            'total_contacts': total_contacts,
            'new_contacts': new_contacts,
            'in_progress_contacts': in_progress_contacts,
            'replied_contacts': replied_contacts,
            'closed_contacts': closed_contacts,
        })
    except DatabaseError as e:
        logger.error(f"Database error in contact stats: {str(e)}")
        return Response(
            {'error': 'Unable to retrieve statistics'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
def health_check(request):
    """
    Health check endpoint for monitoring
    Returns system status
    """
    try:
        # Check database connectivity
        Appointment.objects.count()

        return Response({
            'status': 'healthy',
            'service': 'True Relief Physio API',
            'version': '1.0.0',
            'database': 'connected'
        })
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        return Response({
            'status': 'unhealthy',
            'error': 'Database connection failed'
        }, status=status.HTTP_503_SERVICE_UNAVAILABLE)
