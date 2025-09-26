from django.contrib import admin
from .models import Appointment, TimeSlot

@admin.register(TimeSlot)
class TimeSlotAdmin(admin.ModelAdmin):
    list_display = ('start_time', 'end_time', 'is_available')
    list_filter = ('is_available',)
    ordering = ('start_time',)

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'date', 'time_slot', 'status', 'created_at')
    list_filter = ('status', 'date', 'service')
    search_fields = ('first_name', 'last_name', 'email', 'phone')
    date_hierarchy = 'date'
    ordering = ('-date', 'time_slot')
