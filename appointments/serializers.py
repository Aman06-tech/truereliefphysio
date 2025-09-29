from rest_framework import serializers
from .models import Appointment, Contact

class AppointmentSerializer(serializers.ModelSerializer):
    service_display = serializers.CharField(source='get_service_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Appointment
        fields = [
            'id', 'service', 'service_display', 'name', 'email', 'phone',
            'age', 'location', 'date', 'time', 'message', 'status',
            'status_display', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_age(self, value):
        if value <= 0 or value > 120:
            raise serializers.ValidationError("Age must be between 1 and 120.")
        return value

    def validate_phone(self, value):
        # Remove any spaces, dashes, or parentheses
        cleaned_phone = ''.join(char for char in value if char.isdigit() or char == '+')
        if len(cleaned_phone) < 10:
            raise serializers.ValidationError("Phone number must have at least 10 digits.")
        return value


class ContactSerializer(serializers.ModelSerializer):
    concern_type_display = serializers.CharField(source='get_concern_type_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Contact
        fields = [
            'id', 'name', 'email', 'phone', 'concern_type', 'concern_type_display',
            'subject', 'message', 'status', 'status_display', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_phone(self, value):
        # Remove any spaces, dashes, or parentheses
        cleaned_phone = ''.join(char for char in value if char.isdigit() or char == '+')
        if len(cleaned_phone) < 10:
            raise serializers.ValidationError("Phone number must have at least 10 digits.")
        return value

    def validate_subject(self, value):
        if len(value.strip()) < 3:
            raise serializers.ValidationError("Subject must be at least 3 characters long.")
        return value

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters long.")
        return value