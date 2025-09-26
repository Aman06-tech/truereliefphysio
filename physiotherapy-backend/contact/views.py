from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactInfo, ContactMessage
from .serializers import ContactInfoSerializer, ContactMessageSerializer

class ContactInfoViewSet(viewsets.ModelViewSet):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer

    @action(detail=False, methods=['get'])
    def latest(self, request):
        contact = ContactInfo.objects.first()
        if contact:
            serializer = self.get_serializer(contact)
            return Response(serializer.data)
        return Response({'message': 'No contact information found'})

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        message = serializer.save()

        self.send_notification_email(message)

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )

    def send_notification_email(self, message):
        subject = f'New Contact Message from {message.name}'

        email_message = f'''
        New contact message received:

        Name: {message.name}
        Email: {message.email}
        Phone: {message.phone or 'Not provided'}
        Subject: {message.subject}

        Message:
        {message.message}
        '''

        try:
            send_mail(
                subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Email sending failed: {e}")
