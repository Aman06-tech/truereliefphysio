from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings
from .models import Appointment, Contact
from .serializers import AppointmentSerializer, ContactSerializer

class AppointmentCreateView(generics.CreateAPIView):
    serializer_class = AppointmentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        appointment = serializer.save()

        # Send emails
        self.send_confirmation_emails(appointment)

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

        except Exception as e:
            # Log the error but don't fail the appointment creation
            print(f"Error sending emails: {e}")

class AppointmentListView(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentDetailView(generics.RetrieveUpdateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

@api_view(['GET'])
def appointment_stats(request):
    """Get appointment statistics"""
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


class ContactCreateView(generics.CreateAPIView):
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact = serializer.save()

        # Send emails
        self.send_notification_emails(contact)

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

        except Exception as e:
            # Log the error but don't fail the contact creation
            print(f"Error sending emails: {e}")


class ContactListView(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ContactDetailView(generics.RetrieveUpdateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


@api_view(['GET'])
def contact_stats(request):
    """Get contact statistics"""
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
