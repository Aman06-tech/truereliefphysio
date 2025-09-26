from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    short_description = models.CharField(max_length=500)
    duration = models.CharField(max_length=50, help_text="e.g., 30 minutes, 1 hour")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    icon = models.CharField(max_length=50, blank=True, help_text="Icon class name for frontend")
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0, help_text="Order in which services appear")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order', 'name']

class AboutSection(models.Model):
    title = models.CharField(max_length=200, default="About Dr. Rajan Sharma")
    subtitle = models.CharField(max_length=300, blank=True)
    description = models.TextField()
    qualifications = models.TextField(help_text="Enter qualifications separated by new lines")
    experience_years = models.IntegerField(default=0)
    specializations = models.TextField(help_text="Enter specializations separated by new lines")
    profile_image = models.ImageField(upload_to='about/', blank=True, null=True)

    vision = models.TextField(blank=True)
    mission = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "About Section"

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100, blank=True)
    content = models.TextField()
    rating = models.IntegerField(default=5, choices=[(i, i) for i in range(1, 6)])
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.rating} stars"

    class Meta:
        ordering = ['-created_at']
