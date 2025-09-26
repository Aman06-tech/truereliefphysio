from rest_framework import serializers
from .models import Appointment, TimeSlot
from services.models import Service

class TimeSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSlot
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    time_slot_detail = TimeSlotSerializer(source='time_slot', read_only=True)
    service_name = serializers.CharField(source='service.name', read_only=True)

    class Meta:
        model = Appointment
        fields = '__all__'

class AppointmentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['first_name', 'last_name', 'email', 'phone', 'date',
                 'time_slot', 'service', 'complaint', 'additional_notes']

    def validate(self, data):
        if Appointment.objects.filter(date=data['date'], time_slot=data['time_slot']).exists():
            raise serializers.ValidationError("This time slot is already booked.")
        return data