# True Relief Physio - Comprehensive Physiotherapy Website

A modern, full-stack physiotherapy clinic website built with Next.js frontend and Django backend, featuring comprehensive appointment booking, 43+ specialized services, and a responsive design.

## 🌟 Features

### Frontend (Next.js + Tailwind CSS)
- **Modern Design**: Beautiful, responsive UI with smooth animations
- **Home Page**: Hero section, featured services, specialized care programs, testimonials
- **Services**: 43+ comprehensive physiotherapy services with pricing in rupees
- **Appointment Booking**: Simplified 4-step booking system with date/time selection
- **Mobile Responsive**: Optimized for all device sizes
- **Professional Service Cards**: Gradient headers, hover effects, and detailed descriptions

### Backend (Django + Django REST Framework)
- **RESTful API**: Complete API for all frontend functionality
- **Admin Panel**: Django admin interface for content management
- **Models**: Services, Appointments, Contact info, Testimonials, About section
- **Time Management**: Available time slot management system
- **Data Validation**: Form validation and error handling

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup (Django)

1. **Navigate to backend directory**
```bash
cd physiotherapy-backend
```

2. **Create and activate virtual environment**
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

3. **Install dependencies**
```bash
pip install Django==5.0.1 djangorestframework==3.14.0 django-cors-headers==4.3.1 python-decouple==3.8 Pillow==10.2.0
```

4. **Run migrations**
```bash
python manage.py makemigrations
python manage.py migrate
```

5. **Create superuser**
```bash
python manage.py createsuperuser
```

6. **Start development server**
```bash
python manage.py runserver
```

The Django backend will be available at `http://localhost:8000`

### Frontend Setup (Next.js)

1. **Navigate to frontend directory**
```bash
cd medical-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The Next.js frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
truereliefphysio/
├── physiotherapy-backend/          # Django Backend
│   ├── appointments/               # Appointment booking app
│   ├── services/                   # Services management app
│   ├── contact/                    # Contact information app
│   ├── physio_backend/            # Main Django settings
│   ├── requirements.txt           # Python dependencies
│   └── manage.py                  # Django management script
│
├── medical-frontend/               # Next.js Frontend
│   ├── app/                       # Next.js 13+ App Router
│   │   ├── page.tsx              # Home page
│   │   ├── appointments/         # Appointment booking
│   │   └── layout.tsx            # Root layout
│   ├── components/               # Reusable components
│   ├── lib/                     # API and utilities
│   └── package.json             # Node.js dependencies
│
├── DEPLOYMENT.md                # Deployment guide
└── README.md                    # This file
```

## 🏥 Services Offered

### Featured Treatment Services
- **Manual Therapy** 🥜 - ₹2000 (60 min)
- **Electro Therapy** ⚡ - ₹1200 (30 min)
- **Class 4 Laser Therapy** 🔦 - ₹1800 (20 min)
- **Exercise Therapy** 🏋 - ₹1500 (45 min)
- **Dry Needling** 📍 - ₹2000 (30 min)
- **Shockwave Therapy** 〰️ - ₹2500 (20 min)

### Specialized Care Programs
- **Neuro Physiotherapy** 🧠 - Stroke, Parkinson's, MS rehabilitation
- **Sports Physiotherapy** ⚽ - Athletic injury recovery
- **Pediatric Physiotherapy** 👶 - Child development support
- **Home Physiotherapy** 🏠 - In-home treatment services
- **Tele Physiotherapy** 💻 - Online consultations
- **Custom Orthotics** 👟 - Personalized foot support

### Condition-Specific Treatments
- ACL/PCL Rehabilitation
- Post-Surgery Recovery (Knee/Hip Replacement)
- Stroke Rehabilitation
- Facial Palsy Treatment
- Frozen Shoulder
- Back Pain (LBA/PIVD)
- Neck Pain (Cervical)
- Tennis/Golfer's Elbow
- Plantar Fasciitis
- And 30+ more specialized treatments!

## 🎨 Design Features

### Modern UI/UX
- **Gradient Service Cards** with hover animations
- **Professional Color Scheme** with medical theming
- **Responsive Grid Layouts** for all screen sizes
- **Smooth Animations** using Framer Motion
- **Clean Typography** and intuitive navigation

### Appointment Booking
- **4-Step Process**: Service → Date/Time → Personal Info → Confirmation
- **Simplified Form**: Only essential fields (Name, Phone, Age, Message)
- **Real-time Validation** and error handling
- **Professional Service Selection** with pricing display

## 🔧 API Endpoints

### Appointments
- `GET /api/appointments/` - List appointments
- `POST /api/appointments/` - Create appointment
- `GET /api/timeslots/available_slots/?date=YYYY-MM-DD` - Get available slots

### Services
- `GET /api/services/` - List services
- `GET /api/services/{id}/` - Get service details

### Contact
- `GET /api/contact/info/latest/` - Get contact information
- `POST /api/contact/messages/` - Send contact message

## 💻 Technologies Used

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hot Toast** - Toast notifications
- **Heroicons** - Professional icon library

### Backend
- **Django 5.0** - Python web framework
- **Django REST Framework** - API development
- **django-cors-headers** - CORS handling
- **python-decouple** - Environment variables
- **Pillow** - Image processing
- **SQLite** - Database (development)

## 🚀 Deployment

### Netlify (Frontend)
1. Build the project: `npm run build`
2. Deploy to Netlify using the provided `netlify.toml` configuration
3. Site will be available at your Netlify URL

### Backend Deployment
1. Set up production environment (PostgreSQL recommended)
2. Configure environment variables
3. Run migrations and collect static files
4. Deploy to your preferred platform (AWS, Heroku, etc.)

## 📞 Contact Information

**Dr. Rajan Sharma [PT]**
- **Phone**: 9625891710, 8449555400
- **Service Hours**: 8AM - 8PM
- **Coverage**: Gurgaon & Delhi NCR
- **Specialization**: Home Care Physiotherapy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

