from django.db import models
from django.core.validators import RegexValidator

class Appointment(models.Model):
    SERVICE_CHOICES = [
        ('physiotherapy', 'Physiotherapy'),
        ('manual_therapy', 'Manual Therapy'),
        ('electro_therapy', 'Electro Therapy'),
        ('exercise_fitness', 'Exercise & Fitness'),
        ('cupping_therapy', 'Cupping Therapy'),
        ('orthopaedic_physio', 'Orthopaedic physiotherapy'),
        ('neuro_physio', 'Neuro physiotherapy'),
        ('sports_physio', 'Sports physiotherapy'),
        ('paediatrics_physio', 'Paediatrics physiotherapy'),
        ('dry_needling', 'Dry needling'),
        ('physio_at_home', 'Physiotherapy at Home'),
        ('chest_physio', 'Chest Physiotherapy'),
        ('tele_physio', 'Tele Physiotherapy'),
        ('chiropractic', 'Chiropractic Therapy'),
        ('obesity_physio', 'Obesity Physiotherapy'),
        ('iastm_therapy', 'IASTM Therapy'),
        ('vertigo_testing', 'Vertigo Testing'),
        ('shockwave_therapy', 'Shockwave Therapy'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
    )

    service = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(validators=[phone_regex], max_length=17)
    age = models.PositiveIntegerField()
    location = models.TextField()
    date = models.DateField()
    time = models.CharField(max_length=20)
    message = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.get_service_display()} on {self.date} at {self.time}"


class Contact(models.Model):
    CONCERN_TYPE_CHOICES = [
        ('general_inquiry', 'General Inquiry'),
        ('back_pain', 'Back Pain'),
        ('neck_pain', 'Neck Pain'),
        ('joint_pain', 'Joint Pain'),
        ('sports_injury', 'Sports Injury'),
        ('post_surgery_recovery', 'Post-Surgery Recovery'),
        ('neurological_condition', 'Neurological Condition'),
        ('pediatric_care', 'Pediatric Care'),
        ('home_visit_request', 'Home Visit Request'),
        ('online_consultation', 'Online Consultation'),
        ('emergency_care', 'Emergency Care'),
        ('other', 'Other'),
    ]

    STATUS_CHOICES = [
        ('new', 'New'),
        ('in_progress', 'In Progress'),
        ('replied', 'Replied'),
        ('closed', 'Closed'),
    ]

    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
    )

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(validators=[phone_regex], max_length=17)
    concern_type = models.CharField(max_length=50, choices=CONCERN_TYPE_CHOICES)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.get_concern_type_display()} - {self.subject}"
