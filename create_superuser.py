#!/usr/bin/env python
import os
import django
from django.conf import settings
from django.contrib.auth.models import User

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'physio_backend.settings')
django.setup()

# Create superuser
username = 'admin'
email = 'admin@truereliefphysio.com'
password = 'admin123'

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username, email, password)
    print(f"Superuser '{username}' created successfully!")
    print(f"Username: {username}")
    print(f"Password: {password}")
    print("You can access Django admin at: http://localhost:8000/admin/")
else:
    print(f"Superuser '{username}' already exists!")