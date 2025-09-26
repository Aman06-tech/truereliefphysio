from django.db import models

class ContactInfo(models.Model):
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.TextField()
    city = models.CharField(max_length=100, default="Mumbai")
    state = models.CharField(max_length=100, default="Maharashtra")
    pincode = models.CharField(max_length=10)

    google_maps_url = models.URLField(blank=True, null=True)

    working_hours_weekdays = models.CharField(max_length=100, default="9:00 AM - 7:00 PM")
    working_hours_saturday = models.CharField(max_length=100, default="9:00 AM - 2:00 PM")
    working_hours_sunday = models.CharField(max_length=100, default="Closed")

    facebook_url = models.URLField(blank=True, null=True)
    instagram_url = models.URLField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Contact Info - {self.phone}"

    class Meta:
        verbose_name_plural = "Contact Information"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    subject = models.CharField(max_length=200)
    message = models.TextField()

    is_read = models.BooleanField(default=False)
    is_replied = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"

    class Meta:
        ordering = ['-created_at']
