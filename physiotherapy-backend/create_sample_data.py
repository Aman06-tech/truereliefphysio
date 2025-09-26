#!/usr/bin/env python
"""
Sample data creation script for the physiotherapy website.
Run this script after applying migrations to populate the database with initial data.

Usage: python manage.py shell < create_sample_data.py
"""

import os
import sys
import django
from datetime import time

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'physio_backend.settings')
django.setup()

from services.models import Service, AboutSection, Testimonial
from appointments.models import TimeSlot
from contact.models import ContactInfo

def create_services():
    """Create sample services"""
    services_data = [
        {
            'name': 'Manual Therapy',
            'description': 'Manual therapy involves skilled hand movements and mobilization techniques to treat musculoskeletal pain and dysfunction. Our approach includes joint mobilization, soft tissue manipulation, and myofascial release techniques. This treatment method is highly effective for conditions such as back pain, neck pain, joint stiffness, and muscle tension.',
            'short_description': 'Hands-on treatment techniques to improve mobility and reduce pain',
            'duration': '60 minutes',
            'price': 2000,
            'icon': '🤲',
            'order': 1
        },
        {
            'name': 'Exercise Therapy',
            'description': 'Exercise therapy is a cornerstone of physiotherapy treatment, involving carefully designed exercise programs tailored to each patient\'s specific needs and condition. Our exercise therapy includes strengthening exercises, flexibility training, balance and coordination exercises, and functional movement patterns.',
            'short_description': 'Customized exercise programs for rehabilitation and strengthening',
            'duration': '45 minutes',
            'price': 1500,
            'icon': '💪',
            'order': 2
        },
        {
            'name': 'Pain Management',
            'description': 'Our comprehensive pain management program utilizes multiple modalities to provide effective pain relief and improve quality of life. We employ techniques such as TENS, ultrasound therapy, heat and cold therapy, and therapeutic exercises specifically designed for pain reduction.',
            'short_description': 'Advanced pain relief treatments and techniques',
            'duration': '30 minutes',
            'price': 1200,
            'icon': '🎯',
            'order': 3
        },
        {
            'name': 'Sports Injury Rehabilitation',
            'description': 'Our sports injury rehabilitation program is designed specifically for athletes and active individuals. We specialize in treating common sports injuries such as sprains, strains, tendinitis, and post-surgical rehabilitation. Our approach focuses not only on healing but also on preventing re-injury.',
            'short_description': 'Specialized care for sports-related injuries and performance enhancement',
            'duration': '60 minutes',
            'price': 2500,
            'icon': '🏃‍♂️',
            'order': 4
        },
        {
            'name': 'Post-Surgery Rehabilitation',
            'description': 'Post-surgical rehabilitation is crucial for optimal recovery after orthopedic surgeries. Our specialized program is designed to restore function, strength, and mobility following procedures such as joint replacements, ligament repairs, and fracture treatments.',
            'short_description': 'Recovery and rehabilitation after surgical procedures',
            'duration': '45 minutes',
            'price': 2200,
            'icon': '🏥',
            'order': 5
        },
        {
            'name': 'Geriatric Physiotherapy',
            'description': 'Geriatric physiotherapy addresses the unique needs of older adults, focusing on maintaining independence, preventing falls, and managing age-related conditions. Our gentle approach includes balance training, strength exercises, and mobility enhancement.',
            'short_description': 'Specialized care for elderly patients and age-related conditions',
            'duration': '45 minutes',
            'price': 1800,
            'icon': '👴',
            'order': 6
        }
    ]

    for service_data in services_data:
        service, created = Service.objects.get_or_create(
            name=service_data['name'],
            defaults=service_data
        )
        if created:
            print(f"Created service: {service.name}")

def create_time_slots():
    """Create sample time slots"""
    time_slots = [
        (time(9, 0), time(10, 0)),   # 9:00 AM - 10:00 AM
        (time(10, 0), time(11, 0)),  # 10:00 AM - 11:00 AM
        (time(11, 0), time(12, 0)),  # 11:00 AM - 12:00 PM
        (time(14, 0), time(15, 0)),  # 2:00 PM - 3:00 PM
        (time(15, 0), time(16, 0)),  # 3:00 PM - 4:00 PM
        (time(16, 0), time(17, 0)),  # 4:00 PM - 5:00 PM
        (time(17, 0), time(18, 0)),  # 5:00 PM - 6:00 PM
        (time(18, 0), time(19, 0)),  # 6:00 PM - 7:00 PM
    ]

    for start_time, end_time in time_slots:
        slot, created = TimeSlot.objects.get_or_create(
            start_time=start_time,
            end_time=end_time,
            defaults={'is_available': True}
        )
        if created:
            print(f"Created time slot: {slot}")

def create_about_section():
    """Create about section data"""
    about_data = {
        'title': 'About Dr. Rajan Sharma',
        'subtitle': 'Your Partner in Recovery and Wellness',
        'description': 'With over 25 years of dedicated experience in physiotherapy, Dr. Rajan Sharma has established himself as a leading expert in rehabilitation medicine. His commitment to evidence-based practice and patient-centered care has helped thousands of patients regain their mobility and improve their quality of life.',
        'qualifications': '''Bachelor of Physiotherapy (BPT) - Mumbai University
Master of Physiotherapy (MPT) - Orthopedics
Certified Manual Therapist - International Federation
Sports Injury Specialist - American Sports Medicine Institute
Pain Management Certification - European Pain Federation
Neurological Rehabilitation - Bobath Concept''',
        'experience_years': 25,
        'specializations': '''Manual Therapy & Joint Mobilization
Sports Injury Rehabilitation
Post-Surgery Recovery & Rehabilitation
Chronic Pain Management
Geriatric Physiotherapy
Neurological Rehabilitation
Pediatric Physiotherapy
Women's Health Physiotherapy''',
        'vision': 'To provide world-class physiotherapy care that empowers patients to achieve their maximum potential and live pain-free, active lives. We envision a future where everyone has access to quality rehabilitation services.',
        'mission': 'Our mission is to deliver personalized, evidence-based physiotherapy treatments using the latest techniques and technologies, while maintaining the highest standards of care and compassion.'
    }

    about, created = AboutSection.objects.get_or_create(
        defaults=about_data
    )
    if created:
        print(f"Created about section: {about.title}")

def create_testimonials():
    """Create sample testimonials"""
    testimonials_data = [
        {
            'name': 'Priya Sharma',
            'designation': 'Software Engineer',
            'content': 'Dr. Rajan Sharma helped me recover from a severe back injury that was affecting my work. His personalized treatment plan and caring approach made all the difference. I\'m now completely pain-free!',
            'rating': 5
        },
        {
            'name': 'Rajesh Kumar',
            'designation': 'Cricket Player',
            'content': 'As a professional athlete, I needed the best care for my sports injury. Dr. Sharma\'s expertise in sports rehabilitation got me back on the field faster than expected. Highly recommended!',
            'rating': 5
        },
        {
            'name': 'Anita Patel',
            'designation': 'Teacher',
            'content': 'After my knee surgery, I was worried about my mobility. Dr. Sharma\'s post-surgery rehabilitation program was amazing. His team\'s dedication and modern techniques helped me walk normally again.',
            'rating': 5
        },
        {
            'name': 'Vikram Singh',
            'designation': 'Business Owner',
            'content': 'The chronic neck pain from long hours at work was unbearable. Dr. Sharma not only treated my condition but also taught me prevention techniques. Excellent service and care!',
            'rating': 5
        },
        {
            'name': 'Meera Gupta',
            'designation': 'Homemaker',
            'content': 'Dr. Sharma\'s geriatric physiotherapy services for my mother were exceptional. His gentle approach and effective treatments improved her quality of life significantly. We\'re very grateful!',
            'rating': 5
        }
    ]

    for testimonial_data in testimonials_data:
        testimonial, created = Testimonial.objects.get_or_create(
            name=testimonial_data['name'],
            defaults=testimonial_data
        )
        if created:
            print(f"Created testimonial: {testimonial.name}")

def create_contact_info():
    """Create contact information"""
    contact_data = {
        'phone': '+91 98765 43210',
        'email': 'info@rajansharma-physio.com',
        'address': '123 Health Street, Medical District',
        'city': 'Mumbai',
        'state': 'Maharashtra',
        'pincode': '400001',
        'working_hours_weekdays': '9:00 AM - 7:00 PM',
        'working_hours_saturday': '9:00 AM - 2:00 PM',
        'working_hours_sunday': 'Closed',
        'facebook_url': 'https://facebook.com/rajansharma-physio',
        'instagram_url': 'https://instagram.com/rajansharma-physio',
        'linkedin_url': 'https://linkedin.com/in/rajansharma-physio',
        'twitter_url': 'https://twitter.com/rajansharma_pt'
    }

    contact, created = ContactInfo.objects.get_or_create(
        defaults=contact_data
    )
    if created:
        print(f"Created contact info: {contact.phone}")

def main():
    """Main function to create all sample data"""
    print("Creating sample data for physiotherapy website...")

    create_services()
    create_time_slots()
    create_about_section()
    create_testimonials()
    create_contact_info()

    print("\nSample data creation completed successfully!")
    print("\nYou can now:")
    print("1. Access the Django admin at http://localhost:8000/admin/")
    print("2. Create a superuser with: python manage.py createsuperuser")
    print("3. Start the development server with: python manage.py runserver")

if __name__ == "__main__":
    main()