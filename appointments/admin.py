from django.contrib import admin
from .models import Appointment, Contact


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'service', 'date', 'time', 'phone', 'status', 'created_at']
    list_filter = ['status', 'service', 'date', 'created_at']
    search_fields = ['name', 'email', 'phone', 'location']
    readonly_fields = ['created_at', 'updated_at']
    list_editable = ['status']
    date_hierarchy = 'date'
    ordering = ['-created_at']

    fieldsets = (
        ('Patient Information', {
            'fields': ('name', 'email', 'phone', 'age')
        }),
        ('Appointment Details', {
            'fields': ('service', 'date', 'time', 'location', 'message')
        }),
        ('Status & Tracking', {
            'fields': ('status', 'created_at', 'updated_at')
        }),
    )

    def get_service_display(self, obj):
        return obj.get_service_display()
    get_service_display.short_description = 'Service'

    actions = ['mark_as_confirmed', 'mark_as_completed', 'mark_as_cancelled']

    def mark_as_confirmed(self, request, queryset):
        queryset.update(status='confirmed')
        self.message_user(request, f"{queryset.count()} appointments marked as confirmed.")
    mark_as_confirmed.short_description = "Mark selected appointments as confirmed"

    def mark_as_completed(self, request, queryset):
        queryset.update(status='completed')
        self.message_user(request, f"{queryset.count()} appointments marked as completed.")
    mark_as_completed.short_description = "Mark selected appointments as completed"

    def mark_as_cancelled(self, request, queryset):
        queryset.update(status='cancelled')
        self.message_user(request, f"{queryset.count()} appointments marked as cancelled.")
    mark_as_cancelled.short_description = "Mark selected appointments as cancelled"


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'concern_type', 'subject', 'phone', 'status', 'created_at']
    list_filter = ['status', 'concern_type', 'created_at']
    search_fields = ['name', 'email', 'phone', 'subject', 'message']
    readonly_fields = ['created_at', 'updated_at']
    list_editable = ['status']
    date_hierarchy = 'created_at'
    ordering = ['-created_at']

    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'phone')
        }),
        ('Concern Details', {
            'fields': ('concern_type', 'subject', 'message')
        }),
        ('Status & Tracking', {
            'fields': ('status', 'created_at', 'updated_at')
        }),
    )

    def get_concern_type_display(self, obj):
        return obj.get_concern_type_display()
    get_concern_type_display.short_description = 'Concern Type'

    actions = ['mark_as_in_progress', 'mark_as_replied', 'mark_as_closed']

    def mark_as_in_progress(self, request, queryset):
        queryset.update(status='in_progress')
        self.message_user(request, f"{queryset.count()} contacts marked as in progress.")
    mark_as_in_progress.short_description = "Mark selected contacts as in progress"

    def mark_as_replied(self, request, queryset):
        queryset.update(status='replied')
        self.message_user(request, f"{queryset.count()} contacts marked as replied.")
    mark_as_replied.short_description = "Mark selected contacts as replied"

    def mark_as_closed(self, request, queryset):
        queryset.update(status='closed')
        self.message_user(request, f"{queryset.count()} contacts marked as closed.")
    mark_as_closed.short_description = "Mark selected contacts as closed"
