"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineExclamationTriangle
} from 'react-icons/hi2'
import toast from 'react-hot-toast'

const services = [
  {
    id: 'consultation',
    name: 'Initial Consultation 📋',
    duration: '30 minutes',
    price: '₹800',
    description: 'Comprehensive patient evaluation and assessment',
    icon: HiOutlineUser
  },
  {
    id: 'manual-therapy',
    name: 'Manual Therapy 🥜',
    duration: '60 minutes',
    price: '₹2000',
    description: 'Hands-on treatment and joint mobilization',
    icon: HiOutlineHeart
  },
  {
    id: 'chiropractic-therapy',
    name: 'Chiropractic Therapy 🦴',
    duration: '45 minutes',
    price: '₹2200',
    description: 'Spinal adjustments and alignment correction',
    icon: HiOutlineSparkles
  },
  {
    id: 'electro-therapy',
    name: 'Electro Therapy ⚡',
    duration: '30 minutes',
    price: '₹1200',
    description: 'Electrical stimulation for pain relief',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'class4-laser-therapy',
    name: 'Class 4 Laser Therapy / HILT 🔦',
    duration: '20 minutes',
    price: '₹1800',
    description: 'High-intensity laser therapy for deep tissue healing',
    icon: HiOutlineSparkles
  },
  {
    id: 'exercise-therapy',
    name: 'Exercise & Fitness Therapy 🏋',
    duration: '45 minutes',
    price: '₹1500',
    description: 'Therapeutic exercises for rehabilitation',
    icon: HiOutlineHeart
  },
  {
    id: 'chest-physio',
    name: 'Chest Physiotherapy 🫁',
    duration: '45 minutes',
    price: '₹1800',
    description: 'Respiratory therapy and chest clearance',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'cupping-therapy',
    name: 'Cupping Therapy 🥤',
    duration: '30 minutes',
    price: '₹1600',
    description: 'Traditional cupping for muscle relief',
    icon: HiOutlineSparkles
  },
  {
    id: 'dry-needling',
    name: 'Dry Needling 📍',
    duration: '30 minutes',
    price: '₹2000',
    description: 'Trigger point dry needling therapy',
    icon: HiOutlineHeart
  },
  {
    id: 'iastm-therapy',
    name: 'IASTM Therapy 🔧',
    duration: '30 minutes',
    price: '₹1800',
    description: 'Instrument Assisted Soft Tissue Mobilization',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'shockwave-therapy',
    name: 'Shockwave Therapy 〰️',
    duration: '20 minutes',
    price: '₹2500',
    description: 'Acoustic wave therapy for chronic conditions',
    icon: HiOutlineSparkles
  },
  {
    id: 'custom-orthotics',
    name: 'Custom Orthotics 👟',
    duration: '45 minutes',
    price: '₹3000',
    description: 'Custom foot orthotic assessment and fitting',
    icon: HiOutlineHeart
  },
  {
    id: 'orthopedic-physio',
    name: 'Orthopedic Physiotherapy 🦴',
    duration: '60 minutes',
    price: '₹2000',
    description: 'Musculoskeletal injury treatment',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'neuro-physio',
    name: 'Neuro Physiotherapy 🧠',
    duration: '60 minutes',
    price: '₹2500',
    description: 'Neurological condition rehabilitation',
    icon: HiOutlineSparkles
  },
  {
    id: 'sports-physio',
    name: 'Sports Physiotherapy ⚽',
    duration: '60 minutes',
    price: '₹2200',
    description: 'Athletic injury prevention and recovery',
    icon: HiOutlineHeart
  },
  {
    id: 'pediatric-physio',
    name: 'Pediatric Physiotherapy 👶',
    duration: '45 minutes',
    price: '₹2000',
    description: 'Specialized therapy for children',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'osteopathy',
    name: 'Osteopathy Services 🤲',
    duration: '60 minutes',
    price: '₹2500',
    description: 'Holistic osteopathic treatment',
    icon: HiOutlineSparkles
  },
  {
    id: 'vertigo-testing',
    name: 'Vertigo Testing & Treatment 😇',
    duration: '45 minutes',
    price: '₹2000',
    description: 'Balance assessment and vestibular rehabilitation',
    icon: HiOutlineHeart
  },
  {
    id: 'knee-replacement',
    name: 'Post Knee Replacement Rehab 🦵',
    duration: '60 minutes',
    price: '₹2200',
    description: 'Specialized rehabilitation after knee replacement',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'hip-replacement',
    name: 'Post Hip Replacement Rehab 🦿',
    duration: '60 minutes',
    price: '₹2200',
    description: 'Comprehensive hip replacement recovery program',
    icon: HiOutlineSparkles
  },
  {
    id: 'acl-rehab',
    name: 'ACL Rehabilitation 🦵',
    duration: '60 minutes',
    price: '₹2500',
    description: 'Anterior cruciate ligament injury rehabilitation',
    icon: HiOutlineHeart
  },
  {
    id: 'stroke-rehab',
    name: 'Stroke Rehabilitation 🧠',
    duration: '60 minutes',
    price: '₹2800',
    description: 'Comprehensive stroke recovery program',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'bells-palsy',
    name: 'Bells Palsy / Facial Paralysis 🫥',
    duration: '45 minutes',
    price: '₹2000',
    description: 'Facial nerve paralysis rehabilitation',
    icon: HiOutlineSparkles
  },
  {
    id: 'parkinsons-therapy',
    name: "Parkinson's Disease Therapy 🧑‍🦯",
    duration: '60 minutes',
    price: '₹2500',
    description: 'Movement therapy for Parkinson\'s disease',
    icon: HiOutlineHeart
  },
  {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis Therapy 🦽',
    duration: '60 minutes',
    price: '₹2800',
    description: 'MS symptom management and mobility training',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'spinal-cord-injury',
    name: 'Spinal Cord Injury Rehab 🦴',
    duration: '60 minutes',
    price: '₹3000',
    description: 'Spinal cord injury rehabilitation program',
    icon: HiOutlineSparkles
  },
  {
    id: 'frozen-shoulder',
    name: 'Frozen Shoulder Treatment 🙋‍♂',
    duration: '45 minutes',
    price: '₹1800',
    description: 'Adhesive capsulitis rehabilitation',
    icon: HiOutlineHeart
  },
  {
    id: 'neck-pain',
    name: 'Neck Pain / Cervical Spondylosis 🙇‍♂',
    duration: '45 minutes',
    price: '₹1600',
    description: 'Cervical spine pain and stiffness treatment',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'back-pain',
    name: 'Back Pain / Slipped Disc 🏋‍♂',
    duration: '45 minutes',
    price: '₹1800',
    description: 'Lower back pain and disc problem treatment',
    icon: HiOutlineSparkles
  },
  {
    id: 'shoulder-impingement',
    name: 'Shoulder Impingement 💪',
    duration: '45 minutes',
    price: '₹1800',
    description: 'Shoulder impingement syndrome treatment',
    icon: HiOutlineHeart
  },
  {
    id: 'tennis-elbow',
    name: 'Tennis/Golfers Elbow 🏌‍♂',
    duration: '30 minutes',
    price: '₹1400',
    description: 'Lateral and medial epicondylitis treatment',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'plantar-fasciitis',
    name: 'Plantar Fasciitis 🦶',
    duration: '30 minutes',
    price: '₹1500',
    description: 'Heel pain and plantar fasciitis treatment',
    icon: HiOutlineSparkles
  },
  {
    id: 'ankle-sprain',
    name: 'Ankle Sprain Rehabilitation 🦶',
    duration: '30 minutes',
    price: '₹1200',
    description: 'Ankle injury recovery and strengthening',
    icon: HiOutlineHeart
  },
  {
    id: 'osteoarthritis',
    name: 'Osteoarthritis Management 🦴',
    duration: '45 minutes',
    price: '₹1800',
    description: 'Joint arthritis pain management',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'rheumatoid-arthritis',
    name: 'Rheumatoid Arthritis Care 🦴',
    duration: '45 minutes',
    price: '₹2000',
    description: 'Inflammatory arthritis management',
    icon: HiOutlineSparkles
  },
  {
    id: 'muscular-dystrophy',
    name: 'Muscular Dystrophy Therapy 💪',
    duration: '60 minutes',
    price: '₹2500',
    description: 'Progressive muscle condition management',
    icon: HiOutlineHeart
  },
  {
    id: 'geriatric-care',
    name: 'Geriatric Care 💪🧓👴',
    duration: '45 minutes',
    price: '₹1800',
    description: 'Comprehensive elderly care and mobility',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'obesity-physio',
    name: 'Obesity Physiotherapy ⚖️',
    duration: '60 minutes',
    price: '₹2000',
    description: 'Weight management and fitness therapy',
    icon: HiOutlineSparkles
  },
  {
    id: 'post-fracture',
    name: 'Post Fracture Rehabilitation 🦴',
    duration: '45 minutes',
    price: '₹1800',
    description: 'Bone healing and mobility restoration',
    icon: HiOutlineHeart
  },
  {
    id: 'post-heart-surgery',
    name: 'Post-Heart Surgery Rehab 🫀',
    duration: '45 minutes',
    price: '₹2500',
    description: 'Cardiac rehabilitation and recovery',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'home-physio',
    name: 'Physiotherapy at Home 🏠',
    duration: '60 minutes',
    price: '₹2500',
    description: 'In-home physiotherapy treatment',
    icon: HiOutlineSparkles
  },
  {
    id: 'tele-physio',
    name: 'Tele Physiotherapy 💻',
    duration: '30 minutes',
    price: '₹1000',
    description: 'Online physiotherapy consultation',
    icon: HiOutlineHeart
  },
  {
    id: 'female-physio',
    name: 'Female Physiotherapist 👩‍⚕️',
    duration: '45 minutes',
    price: '₹2000',
    description: 'Treatment with female physiotherapist',
    icon: HiOutlineShieldCheck
  }
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
]

export default function Appointments() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Service Selection
    selectedService: '',

    // Date & Time
    selectedDate: '',
    selectedTime: '',

    // Personal Information
    firstName: '',
    lastName: '',
    phone: '',
    age: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Find service ID by matching the name
      const selectedService = services.find(s => s.id === formData.selectedService)
      const serviceIdMap: { [key: string]: number } = {
        'consultation': 1,
        'manual-therapy': 2,
        'chiropractic-therapy': 3,
        'electro-therapy': 4,
        'class4-laser-therapy': 5,
        'exercise-therapy': 6,
        'chest-physio': 7,
        'cupping-therapy': 8,
        'dry-needling': 9,
        'iastm-therapy': 10,
        'shockwave-therapy': 11,
        'custom-orthotics': 12,
        'orthopedic-physio': 13,
        'neuro-physio': 14,
        'sports-physio': 15,
        'pediatric-physio': 16,
        'osteopathy': 17,
        'vertigo-testing': 18,
        'knee-replacement': 19,
        'hip-replacement': 20,
        'acl-rehab': 21,
        'stroke-rehab': 22,
        'bells-palsy': 23,
        'parkinsons-therapy': 24,
        'multiple-sclerosis': 25,
        'spinal-cord-injury': 26,
        'frozen-shoulder': 27,
        'neck-pain': 28,
        'back-pain': 29,
        'shoulder-impingement': 30,
        'tennis-elbow': 31,
        'plantar-fasciitis': 32,
        'ankle-sprain': 33,
        'osteoarthritis': 34,
        'rheumatoid-arthritis': 35,
        'muscular-dystrophy': 36,
        'geriatric-care': 37,
        'obesity-physio': 38,
        'post-fracture': 39,
        'post-heart-surgery': 40,
        'home-physio': 41,
        'tele-physio': 42,
        'female-physio': 43
      }
      const serviceId = serviceIdMap[formData.selectedService] || 1

      // Convert time to time slot ID (simple mapping for demo)
      const timeSlotId = formData.selectedTime === '9:00 AM' ? 1 :
                        formData.selectedTime === '10:00 AM' ? 2 :
                        formData.selectedTime === '11:00 AM' ? 3 :
                        formData.selectedTime === '2:00 PM' ? 4 :
                        formData.selectedTime === '3:00 PM' ? 5 :
                        formData.selectedTime === '4:00 PM' ? 6 :
                        formData.selectedTime === '5:00 PM' ? 7 :
                        formData.selectedTime === '6:00 PM' ? 8 : 1

      const appointmentData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@example.com`, // Auto-generate email
        phone: formData.phone.replace(/\D/g, ''), // Remove non-numeric characters
        date: formData.selectedDate,
        service: serviceId,
        time_slot: timeSlotId,
        complaint: formData.message,
        additional_notes: `Age: ${formData.age} years`,
        status: 'pending'
      }

      const response = await fetch('http://localhost:8000/api/appointments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      })

      if (response.ok) {
        toast.success('Appointment request submitted successfully! We\'ll call you within 2 hours to confirm.')

        // Reset form
        setFormData({
          selectedService: '',
          selectedDate: '',
          selectedTime: '',
          firstName: '',
          lastName: '',
          phone: '',
          age: '',
          message: ''
        })

        setCurrentStep(1)
      } else {
        const errorData = await response.json()
        console.error('Appointment submission failed:', errorData)
        toast.error('Failed to submit appointment. Please try again or call us directly.')
      }
    } catch (error) {
      console.error('Error submitting appointment:', error)
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const steps = [
    { number: 1, title: 'Service', description: 'Choose your service' },
    { number: 2, title: 'Date & Time', description: 'Select appointment time' },
    { number: 3, title: 'Information', description: 'Personal details' },
    { number: 4, title: 'Confirmation', description: 'Review and submit' }
  ]

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return formData.selectedService !== ''
      case 2:
        return formData.selectedDate !== '' && formData.selectedTime !== ''
      case 3:
        return formData.firstName !== '' && formData.lastName !== '' && formData.phone !== '' && formData.age !== '' && formData.message !== ''
      default:
        return false
    }
  }

  // Generate next 14 days for date selection
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip Sundays (day 0)
      if (date.getDay() !== 0) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          }),
          dayOfWeek: date.getDay()
        })
      }
    }

    return dates
  }

  const availableDates = generateAvailableDates()
  const selectedServiceInfo = services.find(s => s.id === formData.selectedService)

  return (
    <div className="bg-white dark:bg-slate-900 pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Book Your{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Appointment
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Schedule your consultation with our expert healthcare team. We'll guide you through every step of your treatment journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition-all duration-300 ${
                        currentStep >= step.number
                          ? 'bg-primary-500 text-white border-primary-500'
                          : currentStep === step.number
                          ? 'border-primary-500 text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-slate-300 dark:border-slate-600 text-slate-400'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {isStepComplete(step.number) ? (
                        <HiOutlineCheckCircle className="w-6 h-6" />
                      ) : (
                        step.number
                      )}
                    </motion.div>
                    <div className="ml-3 hidden sm:block">
                      <div className={`text-sm font-semibold ${
                        currentStep >= step.number ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {step.description}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${
                        currentStep > step.number ? 'bg-primary-500' : 'bg-slate-300 dark:bg-slate-600'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="medical-card"
              >
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Choose Your Service
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <motion.div
                          key={service.id}
                          whileHover={{ y: -2 }}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            formData.selectedService === service.id
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                              : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                          }`}
                          onClick={() => handleChange('selectedService', service.id)}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              formData.selectedService === service.id
                                ? 'bg-primary-500 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}>
                              <service.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-900 dark:text-white">
                                {service.name}
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                {service.description}
                              </p>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500">{service.duration}</span>
                                <span className="font-semibold text-primary-600">{service.price}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time Selection */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Select Date & Time
                    </h2>
                    {selectedServiceInfo && (
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {selectedServiceInfo.name} - {selectedServiceInfo.duration}
                      </p>
                    )}

                    {/* Date Selection */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Choose Date</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                        {availableDates.map((dateOption) => (
                          <motion.button
                            key={dateOption.date}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                              formData.selectedDate === dateOption.date
                                ? 'bg-primary-500 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                            }`}
                            onClick={() => handleChange('selectedDate', dateOption.date)}
                          >
                            {dateOption.display}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {formData.selectedDate && (
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Choose Time</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                          {timeSlots.map((time) => (
                            <motion.button
                              key={time}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                formData.selectedTime === time
                                  ? 'bg-primary-500 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                              }`}
                              onClick={() => handleChange('selectedTime', time)}
                            >
                              {time}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Personal Information */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Personal Information
                    </h2>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            className="medical-input"
                            placeholder="Enter your first name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            className="medical-input"
                            placeholder="Enter your last name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="medical-input"
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Age *
                          </label>
                          <input
                            type="number"
                            value={formData.age}
                            onChange={(e) => handleChange('age', e.target.value)}
                            className="medical-input"
                            placeholder="Enter your age"
                            min="1"
                            max="120"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Message / Reason for Visit *
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className="medical-input resize-none"
                          rows={4}
                          placeholder="Describe your symptoms or reason for the appointment"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Appointment Confirmation
                    </h2>

                    <div className="space-y-6">
                      {/* Appointment Summary */}
                      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Appointment Summary</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <HiOutlineHeart className="w-5 h-5 text-primary-500" />
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Service</p>
                              <p className="font-medium text-slate-900 dark:text-white">
                                {selectedServiceInfo?.name}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <HiOutlineCalendarDays className="w-5 h-5 text-primary-500" />
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Date & Time</p>
                              <p className="font-medium text-slate-900 dark:text-white">
                                {formData.selectedDate} at {formData.selectedTime}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <HiOutlineClock className="w-5 h-5 text-primary-500" />
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Duration</p>
                              <p className="font-medium text-slate-900 dark:text-white">
                                {selectedServiceInfo?.duration}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <HiOutlineUser className="w-5 h-5 text-primary-500" />
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Patient</p>
                              <p className="font-medium text-slate-900 dark:text-white">
                                {formData.firstName} {formData.lastName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Important Information */}
                      <div className="bg-warning-50 dark:bg-warning-900/20 rounded-xl p-6">
                        <div className="flex items-start space-x-3">
                          <HiOutlineExclamationTriangle className="w-5 h-5 text-warning-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                              Important Information
                            </h4>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                              <li>• Please arrive 15 minutes early for check-in</li>
                              <li>• Bring a valid photo ID and insurance card</li>
                              <li>• Wear comfortable, loose-fitting clothing</li>
                              <li>• Cancel at least 24 hours in advance to avoid fees</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Confirmation Button */}
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                          isSubmitting
                            ? 'bg-slate-400 cursor-not-allowed'
                            : 'medical-button'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Submitting Request...</span>
                          </>
                        ) : (
                          <>
                            <HiOutlineCheckCircle className="w-6 h-6" />
                            <span>Confirm Appointment</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      currentStep === 1
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    <HiOutlineArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </motion.button>

                  {currentStep < 4 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      disabled={!isStepComplete(currentStep)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isStepComplete(currentStep)
                          ? 'medical-button'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <span>Next</span>
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}