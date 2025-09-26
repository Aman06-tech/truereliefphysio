from django.contrib import admin
from .models import ContactInfo, ContactMessage

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ('phone', 'email', 'city', 'state', 'updated_at')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'is_read', 'is_replied', 'created_at')
    list_filter = ('is_read', 'is_replied')
    search_fields = ('name', 'email', 'subject', 'message')
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
