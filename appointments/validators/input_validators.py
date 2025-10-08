"""
Input Validators for True Relief Physio
Comprehensive validation and sanitization for all user inputs
"""
import re
import html
from datetime import datetime, timedelta, date
from django.core.exceptions import ValidationError
from django.utils import timezone
import phonenumbers


class InputSanitizer:
    """
    Sanitizes user inputs to prevent XSS and injection attacks
    """

    @staticmethod
    def sanitize_string(value):
        """
        Sanitize string input by removing potentially harmful characters
        """
        if not value:
            return value

        # HTML escape to prevent XSS
        sanitized = html.escape(str(value))

        # Remove null bytes
        sanitized = sanitized.replace('\x00', '')

        # Limit length
        if len(sanitized) > 5000:
            raise ValidationError("Input too long. Maximum 5000 characters.")

        return sanitized.strip()

    @staticmethod
    def sanitize_email(email):
        """
        Validate and sanitize email address
        """
        if not email:
            raise ValidationError("Email is required.")

        email = email.strip().lower()

        # Basic email regex
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_pattern, email):
            raise ValidationError("Invalid email format.")

        # Check for suspicious patterns
        suspicious_patterns = ['script', 'javascript:', 'onerror', 'onclick']
        if any(pattern in email.lower() for pattern in suspicious_patterns):
            raise ValidationError("Email contains invalid characters.")

        if len(email) > 254:  # RFC 5321
            raise ValidationError("Email too long.")

        return email

    @staticmethod
    def sanitize_phone(phone):
        """
        Validate and sanitize phone number using phonenumbers library
        """
        if not phone:
            raise ValidationError("Phone number is required.")

        # Remove spaces, dashes, and parentheses
        cleaned = re.sub(r'[\s\-\(\)]', '', phone)

        try:
            # Try to parse with default region (India)
            parsed = phonenumbers.parse(cleaned, "IN")
            if not phonenumbers.is_valid_number(parsed):
                raise ValidationError("Invalid phone number.")

            # Format to international format
            return phonenumbers.format_number(parsed, phonenumbers.PhoneNumberFormat.E164)
        except Exception:
            # Fallback validation
            if not re.match(r'^\+?[0-9]{10,15}$', cleaned):
                raise ValidationError(
                    "Phone number must be between 10-15 digits and can optionally start with '+'"
                )
            return cleaned


class DateTimeValidator:
    """
    Validates dates and times for appointments
    """

    @staticmethod
    def validate_appointment_date(appointment_date):
        """
        Validate that appointment date is not in the past and not too far in future
        """
        if not appointment_date:
            raise ValidationError("Appointment date is required.")

        # Convert string to date if necessary
        if isinstance(appointment_date, str):
            try:
                appointment_date = datetime.strptime(appointment_date, '%Y-%m-%d').date()
            except ValueError:
                raise ValidationError("Invalid date format. Use YYYY-MM-DD.")

        today = date.today()

        # Check if date is in the past
        if appointment_date < today:
            raise ValidationError("Appointment date cannot be in the past.")

        # Check if date is too far in future (6 months)
        max_future_date = today + timedelta(days=180)
        if appointment_date > max_future_date:
            raise ValidationError("Appointment date cannot be more than 6 months in the future.")

        return appointment_date

    @staticmethod
    def validate_time_slot(time_slot):
        """
        Validate that time slot is within working hours
        """
        if not time_slot:
            raise ValidationError("Time slot is required.")

        # Valid time slots (8 AM - 8 PM)
        valid_times = [
            "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
            "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
            "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
            "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
            "08:00 PM"
        ]

        if time_slot not in valid_times:
            raise ValidationError(f"Invalid time slot. Must be between 8:00 AM and 8:00 PM.")

        return time_slot


class BusinessValidator:
    """
    Business logic validators
    """

    @staticmethod
    def validate_age(age):
        """
        Validate age is reasonable
        """
        if not age:
            raise ValidationError("Age is required.")

        try:
            age = int(age)
        except (ValueError, TypeError):
            raise ValidationError("Age must be a number.")

        if age < 1 or age > 120:
            raise ValidationError("Age must be between 1 and 120 years.")

        return age

    @staticmethod
    def validate_message_length(message, min_length=10, max_length=2000):
        """
        Validate message length
        """
        if message and len(message) < min_length:
            raise ValidationError(f"Message must be at least {min_length} characters.")

        if message and len(message) > max_length:
            raise ValidationError(f"Message cannot exceed {max_length} characters.")

        return message

    @staticmethod
    def check_duplicate_appointment(model, email, phone, appointment_date):
        """
        Check for duplicate appointments (same person, same day)
        """
        from datetime import datetime, timedelta
        from django.db import models as django_models

        # Check for appointments in the last 24 hours from same email or phone
        recent_cutoff = datetime.now() - timedelta(hours=24)

        duplicate = model.objects.filter(
            created_at__gte=recent_cutoff
        ).filter(
            django_models.Q(email=email) | django_models.Q(phone=phone)
        ).exists()

        if duplicate:
            raise ValidationError(
                "You have recently created an appointment. Please wait 24 hours before creating another one."
            )

        # Check for same day appointment
        same_day = model.objects.filter(
            email=email,
            date=appointment_date,
            status__in=['pending', 'confirmed']
        ).exists()

        if same_day:
            raise ValidationError(
                "You already have an appointment scheduled for this date. Please choose a different date."
            )
