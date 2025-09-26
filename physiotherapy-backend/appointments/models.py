from django.db import models
from django.core.validators import RegexValidator
from django.utils import timezone

class TimeSlot(models.Model):
    start_time = models.TimeField()
    end_time = models.TimeField()
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.start_time.strftime('%I:%M %p')} - {self.end_time.strftime('%I:%M %p')}"

    class Meta:
        ordering = ['start_time']

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$')
    phone = models.CharField(validators=[phone_regex], max_length=17)

    date = models.DateField()
    time_slot = models.ForeignKey(TimeSlot, on_delete=models.SET_NULL, null=True)

    service = models.ForeignKey('services.Service', on_delete=models.SET_NULL, null=True, related_name='appointments')

    complaint = models.TextField(help_text="Describe your main complaint or reason for visit")
    additional_notes = models.TextField(blank=True, null=True)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.date} at {self.time_slot}"

    class Meta:
        ordering = ['-date', 'time_slot']
        unique_together = ['date', 'time_slot']
