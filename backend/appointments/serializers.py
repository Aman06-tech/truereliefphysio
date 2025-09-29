from rest_framework import serializers
from .models import Appointment

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