import requests
import json

# Test the API endpoint
url = "http://localhost:8000/api/appointments/"

test_data = {
    "service": "manual_therapy",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+919876543210",
    "age": 35,
    "location": "Delhi NCR",
    "date": "2025-09-29",
    "time": "02:00 PM",
    "message": "Need help with back pain"
}

try:
    response = requests.post(url, json=test_data, headers={'Content-Type': 'application/json'})

    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")

    if response.status_code == 201:
        print("✅ API is working correctly!")
        print("✅ Email notifications should be sent!")
    else:
        print("❌ API Error")

except Exception as e:
    print(f"❌ Error: {e}")