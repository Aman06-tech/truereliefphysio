# True Relief Physio - Complete Healthcare Solution

<div align="center">

![True Relief Physio](https://img.shields.io/badge/True%20Relief%20Physio-Healthcare%20Platform-blue)
![Django](https://img.shields.io/badge/Django-4.2-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-cyan)

</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

True Relief Physio is a comprehensive healthcare platform designed for physiotherapy services. The platform provides home care services, online consultations, and appointment management with a professional admin dashboard.

**Dr. Rajan Sharma [PT]** - Senior Physiotherapy Consultant
*Serving Gurgaon & Delhi NCR with 5+ years of experience*

## ✨ Features

### 🏠 **Home Care Services**
- Professional physiotherapy treatment at your doorstep
- Flexible timing (8AM - 8PM)
- Comprehensive home assessment

### 💻 **Online Platform**
- Modern, responsive web application
- Dark/Light theme support
- Mobile-optimized design

### 📅 **Appointment Management**
- Easy online booking system
- Real-time appointment tracking
- Email notifications
- Status management (Pending → Confirmed → Completed)

### 🏥 **18 Specialized Services**
- Physiotherapy
- Manual Therapy
- Electro Therapy
- Exercise & Fitness
- Cupping Therapy
- Orthopaedic Physiotherapy
- Neuro Physiotherapy
- Sports Physiotherapy
- Paediatrics Physiotherapy
- Dry Needling
- Physiotherapy at Home
- Chest Physiotherapy
- Tele Physiotherapy
- Chiropractic Therapy
- Obesity Physiotherapy
- IASTM Therapy
- Vertigo Testing
- Shockwave Therapy

### 👨‍💼 **Professional Admin Dashboard**
- Modern, professional UI with statistics
- Real-time appointment management
- Customer inquiry tracking
- Advanced search and filtering
- Responsive design with sidebar navigation
- Status management for appointments and contacts

### 📞 **Contact System**
- Multiple inquiry types (General, Sports Injury, Post-Surgery, etc.)
- Real-time status tracking
- Professional response management

## 🛠 Tech Stack

### Backend
- **Django 4.2** - Python web framework
- **Django REST Framework** - API development
- **SQLite** - Database (development)
- **CORS Headers** - Cross-origin requests
- **Email Backend** - Notification system

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **next-themes** - Theme management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📁 Project Structure

```
truerelief/
├── 📁 backend/                 # Django backend
│   ├── 📁 appointments/        # Appointment app
│   │   ├── models.py           # Database models
│   │   ├── views.py            # API views
│   │   ├── serializers.py      # Data serializers
│   │   └── admin.py            # Admin interface
│   ├── 📁 truereliefapi/       # Main Django project
│   │   ├── settings.py         # Django settings
│   │   ├── urls.py             # URL routing
│   │   └── wsgi.py             # WSGI config
│   ├── manage.py               # Django management
│   └── requirements.txt        # Python dependencies
├── 📁 true-relief-physio/      # Next.js frontend
│   ├── 📁 src/
│   │   ├── 📁 app/             # App Router pages
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── about/          # About page
│   │   │   ├── services/       # Services page
│   │   │   ├── contact/        # Contact page
│   │   │   ├── book-appointment/ # Booking page
│   │   │   └── admin/          # Admin dashboard
│   │   └── 📁 components/      # Reusable components
│   │       ├── header.tsx      # Navigation header
│   │       ├── hero.tsx        # Hero section
│   │       ├── services-preview.tsx
│   │       ├── booking-form.tsx
│   │       └── admin/          # Admin components
│   ├── package.json            # Node dependencies
│   ├── tailwind.config.ts      # Tailwind configuration
│   └── tsconfig.json           # TypeScript config
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

## 🚀 Installation

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Aman06-tech/truereliefphysio.git
cd truereliefphysio
```

### 2. Backend Setup (Django)
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start Django server
python manage.py runserver 8000
```

### 3. Frontend Setup (Next.js)
```bash
# Navigate to frontend directory
cd true-relief-physio

# Install dependencies
npm install

# Start development server
npm run dev
```

## ⚙️ Configuration

### Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Configure your environment variables:
```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Email Configuration (for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
EMAIL_USE_TLS=True

# CORS Settings
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

### Database Configuration

For development, the project uses SQLite. For production, configure PostgreSQL:

```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'truereliefphysio',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## 🎯 Usage

### Development Servers

1. **Backend** (Django): `http://localhost:8000`
   - API endpoints available at `/api/`
   - Admin interface at `/admin/`

2. **Frontend** (Next.js): `http://localhost:3000`
   - Main website interface
   - Admin dashboard at `/admin`

### Default Admin Credentials
- **Username**: admin
- **Password**: admin123

*⚠️ Change these credentials in production!*

### Key Features Usage

#### 📅 Booking Appointments
1. Visit `/book-appointment`
2. Fill in patient details
3. Select service and preferred time
4. Submit form
5. Receive email confirmation

#### 👨‍💼 Admin Dashboard
1. Visit `/admin`
2. Login with admin credentials
3. View appointment statistics
4. Manage appointments and contacts
5. Update status and respond to inquiries

## 📚 API Documentation

### Appointments API

#### List Appointments
```http
GET /api/appointments/list/
```

#### Create Appointment
```http
POST /api/appointments/
Content-Type: application/json

{
  "service": "physiotherapy",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "age": 35,
  "location": "Gurgaon",
  "date": "2024-01-15",
  "time": "10:00 AM",
  "message": "Back pain issue"
}
```

#### Update Appointment Status
```http
PATCH /api/appointments/{id}/
Content-Type: application/json

{
  "status": "confirmed"
}
```

### Contacts API

#### List Contacts
```http
GET /api/contacts/list/
```

#### Create Contact
```http
POST /api/contacts/
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210",
  "concern_type": "sports_injury",
  "subject": "Knee injury consultation",
  "message": "Looking for sports injury treatment"
}
```

### Service Types

Available service options:
- `physiotherapy`
- `manual_therapy`
- `electro_therapy`
- `exercise_fitness`
- `cupping_therapy`
- `orthopaedic_physio`
- `neuro_physio`
- `sports_physio`
- `paediatrics_physio`
- `dry_needling`
- `physio_at_home`
- `chest_physio`
- `tele_physio`
- `chiropractic`
- `obesity_physio`
- `iastm_therapy`
- `vertigo_testing`
- `shockwave_therapy`

## 🚀 Deployment

### Backend Deployment (Django)

1. **Prepare for Production**:
```bash
# Install production dependencies
pip install gunicorn psycopg2-binary

# Collect static files
python manage.py collectstatic

# Set environment variables
export DEBUG=False
export SECRET_KEY=your-production-secret-key
```

2. **Using Gunicorn**:
```bash
gunicorn truereliefapi.wsgi:application --bind 0.0.0.0:8000
```

### Frontend Deployment (Next.js)

1. **Build for Production**:
```bash
cd true-relief-physio
npm run build
```

2. **Deploy to Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

### Environment Variables for Production

```env
# Production Django Settings
SECRET_KEY=generate-a-new-secret-key
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com

# Production CORS
CORS_ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Database (PostgreSQL recommended)
DATABASE_URL=postgresql://user:password@localhost/truereliefphysio

# Email (Production SMTP)
EMAIL_HOST=your-smtp-server.com
EMAIL_HOST_USER=noreply@yourdomain.com
EMAIL_HOST_PASSWORD=your-smtp-password
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow PEP 8 for Python code
- Use TypeScript for all React components
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📞 Contact Information

**True Relief Physio**
Dr. Rajan Sharma [PT] - Senior Physiotherapy Consultant

- 📱 **Phone**: 9625891710 | 8449555400
- 📧 **Email**: truereliefphysio@gmail.com
- 🏠 **Service Area**: Gurgaon & Delhi NCR
- ⏰ **Available**: 8AM - 8PM
- 🏥 **Services**: Home Care & Online Consultation

**Qualifications**: Reg. HSCP - PT(1994), BPT, CMT, CDMT

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Django and Next.js communities for excellent frameworks
- Tailwind CSS for the beautiful design system
- Lucide React for the modern icons
- All patients and healthcare professionals who inspired this platform

---

<div align="center">

**Built with ❤️ for better healthcare accessibility**

[Website](https://truereliefphysio.com) • [API Docs](https://truereliefphysio.com/api/) • [Support](mailto:truereliefphysio@gmail.com)

</div>