from rest_framework import serializers
from django.core.exceptions import ValidationError as DjangoValidationError
from .models import Appointment, Contact
from .validators.input_validators import (
    InputSanitizer,
    DateTimeValidator,
    BusinessValidator
)


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

    def validate_name(self, value):
        """Sanitize name input"""
        try:
            return InputSanitizer.sanitize_string(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_email(self, value):
        """Validate and sanitize email"""
        try:
            return InputSanitizer.sanitize_email(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_phone(self, value):
        """Validate and sanitize phone number"""
        try:
            return InputSanitizer.sanitize_phone(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_age(self, value):
        """Validate age"""
        try:
            return BusinessValidator.validate_age(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_location(self, value):
        """Sanitize location input"""
        try:
            return InputSanitizer.sanitize_string(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_date(self, value):
        """Validate appointment date"""
        try:
            return DateTimeValidator.validate_appointment_date(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_time(self, value):
        """Validate appointment time"""
        try:
            return DateTimeValidator.validate_time_slot(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_message(self, value):
        """Validate and sanitize message"""
        if value:
            try:
                BusinessValidator.validate_message_length(value, min_length=0, max_length=2000)
                return InputSanitizer.sanitize_string(value)
            except DjangoValidationError as e:
                raise serializers.ValidationError(str(e))
        return value

    def validate(self, data):
        """Cross-field validation"""
        # Check for duplicate appointments
        if self.instance is None:  # Only for create operations
            try:
                BusinessValidator.check_duplicate_appointment(
                    Appointment,
                    data.get('email'),
                    data.get('phone'),
                    data.get('date')
                )
            except DjangoValidationError as e:
                raise serializers.ValidationError(str(e))

        return data


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

    def validate_name(self, value):
        """Sanitize name input"""
        try:
            return InputSanitizer.sanitize_string(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_email(self, value):
        """Validate and sanitize email"""
        try:
            return InputSanitizer.sanitize_email(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_phone(self, value):
        """Validate and sanitize phone number"""
        try:
            return InputSanitizer.sanitize_phone(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_subject(self, value):
        """Validate and sanitize subject"""
        try:
            if len(value.strip()) < 3:
                raise DjangoValidationError("Subject must be at least 3 characters long.")
            return InputSanitizer.sanitize_string(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))

    def validate_message(self, value):
        """Validate and sanitize message"""
        try:
            BusinessValidator.validate_message_length(value, min_length=10, max_length=2000)
            return InputSanitizer.sanitize_string(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(str(e))