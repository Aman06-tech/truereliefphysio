"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MapPin, FileText, AlertCircle, CheckCircle2 } from "lucide-react";
import { apiService } from "@/lib/api-client";
import { validateAppointmentForm, sanitizeFormData, type AppointmentFormData } from "@/utils/validation";
import { handleApiError, logError, formatRetryTime, getActionRecommendation } from "@/utils/error-handler";

const services = [
  { value: "physiotherapy", label: "Physiotherapy" },
  { value: "manual_therapy", label: "Manual Therapy" },
  { value: "electro_therapy", label: "Electro Therapy" },
  { value: "exercise_fitness", label: "Exercise & Fitness" },
  { value: "cupping_therapy", label: "Cupping Therapy" },
  { value: "orthopaedic_physio", label: "Orthopaedic physiotherapy" },
  { value: "neuro_physio", label: "Neuro physiotherapy" },
  { value: "sports_physio", label: "Sports physiotherapy" },
  { value: "paediatrics_physio", label: "Paediatrics physiotherapy" },
  { value: "dry_needling", label: "Dry needling" },
  { value: "physio_at_home", label: "Physiotherapy at Home" },
  { value: "chest_physio", label: "Chest Physiotherapy" },
  { value: "tele_physio", label: "Tele Physiotherapy" },
  { value: "chiropractic", label: "Chiropractic Therapy" },
  { value: "obesity_physio", label: "Obesity Physiotherapy" },
  { value: "iastm_therapy", label: "IASTM Therapy" },
  { value: "vertigo_testing", label: "Vertigo Testing" },
  { value: "shockwave_therapy", label: "Shockwave Therapy" }
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM"
];

export default function BookingFormSecure() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    service: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    date: "",
    time: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error' | 'warning';
    title: string;
    message: string;
    details?: string[];
  } | null>(null);
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [retryCountdown, setRetryCountdown] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error for this field
    if (validationErrors[name as keyof AppointmentFormData]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof AppointmentFormData];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);
    setValidationErrors({});

    // Frontend validation
    const validation = validateAppointmentForm(formData);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      setSubmitMessage({
        type: 'error',
        title: 'Validation Error',
        message: 'Please fix the errors in the form before submitting.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize form data
      const sanitizedData = sanitizeFormData({
        ...formData,
        age: parseInt(formData.age.toString())
      });

      // Submit using secure API client
      const response = await apiService.appointments.create(sanitizedData);

      if (response.success) {
        setSubmitMessage({
          type: 'success',
          title: 'Success!',
          message: response.data?.message || response.message || "Appointment booked successfully! We'll contact you soon.",
        });

        // Clear form
        setFormData({
          service: "",
          name: "",
          email: "",
          phone: "",
          age: "",
          location: "",
          date: "",
          time: "",
          message: ""
        });

        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (response.error) {
        // Handle API error with user-friendly messages
        const userError = handleApiError(response.error);
        logError(response.error, 'Appointment Booking');

        setSubmitMessage({
          type: response.error.isRateLimited ? 'warning' : 'error',
          title: userError.title,
          message: userError.message,
          details: userError.action ? [userError.action, ...getActionRecommendation(response.error)] : undefined,
        });

        // Handle rate limiting with countdown
        if (response.error.isRateLimited && response.error.retryAfter) {
          setRetryCountdown(response.error.retryAfter);
          const interval = setInterval(() => {
            setRetryCountdown(prev => {
              if (prev === null || prev <= 1) {
                clearInterval(interval);
                return null;
              }
              return prev - 1;
            });
          }, 1000);
        }
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setSubmitMessage({
        type: 'error',
        title: 'Unexpected Error',
        message: 'An unexpected error occurred. Please try again or contact us directly.',
        details: ['Call: 9625891710 or 8449555400', 'Email: truereliefphysio@gmail.com'],
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Schedule your home visit physiotherapy session today
          </p>
        </div>

        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`mb-8 rounded-xl p-6 shadow-lg ${
            submitMessage.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
              : submitMessage.type === 'warning'
              ? 'bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-500'
              : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
          }`}>
            <div className="flex items-start">
              {submitMessage.type === 'success' ? (
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className={`h-6 w-6 mr-3 flex-shrink-0 mt-0.5 ${
                  submitMessage.type === 'warning' ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                }`} />
              )}
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-2 ${
                  submitMessage.type === 'success'
                    ? 'text-green-900 dark:text-green-100'
                    : submitMessage.type === 'warning'
                    ? 'text-yellow-900 dark:text-yellow-100'
                    : 'text-red-900 dark:text-red-100'
                }`}>
                  {submitMessage.title}
                </h3>
                <p className={`${
                  submitMessage.type === 'success'
                    ? 'text-green-800 dark:text-green-200'
                    : submitMessage.type === 'warning'
                    ? 'text-yellow-800 dark:text-yellow-200'
                    : 'text-red-800 dark:text-red-200'
                }`}>
                  {submitMessage.message}
                </p>
                {retryCountdown && (
                  <p className="mt-2 text-yellow-700 dark:text-yellow-300 font-semibold">
                    You can try again in {formatRetryTime(retryCountdown)}
                  </p>
                )}
                {submitMessage.details && (
                  <ul className="mt-3 space-y-1">
                    {submitMessage.details.map((detail, index) => (
                      <li key={index} className={`text-sm ${
                        submitMessage.type === 'success'
                          ? 'text-green-700 dark:text-green-300'
                          : submitMessage.type === 'warning'
                          ? 'text-yellow-700 dark:text-yellow-300'
                          : 'text-red-700 dark:text-red-300'
                      }`}>
                        • {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Booking Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FileText className="inline h-4 w-4 mr-1" />
                  Select Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border ${
                    validationErrors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                >
                  <option value="">Choose a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {validationErrors.service && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.service}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border ${
                    validationErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="Enter your full name"
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.name}</p>
                )}
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="your@email.com"
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border ${
                    validationErrors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="+91 9876543210"
                />
                {validationErrors.phone && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.phone}</p>
                )}
              </div>
            </div>

            {/* Age and Location */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="120"
                  className={`w-full px-4 py-3 border ${
                    validationErrors.age ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="Enter your age"
                />
                {validationErrors.age && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.age}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border ${
                    validationErrors.location ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="Your address in Gurgaon/Delhi NCR"
                />
                {validationErrors.location && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.location}</p>
                )}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={today}
                  className={`w-full px-4 py-3 border ${
                    validationErrors.date ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {validationErrors.date && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border ${
                    validationErrors.time ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {validationErrors.time && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.time}</p>
                )}
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 border ${
                  validationErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                placeholder="Please describe your condition or any specific requirements..."
              />
              {validationErrors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || retryCountdown !== null}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-green-400 disabled:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting
                  ? "Booking..."
                  : retryCountdown
                  ? `Please wait ${formatRetryTime(retryCountdown)}`
                  : "Book Appointment"}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>Call: 9625891710 or 8449555400</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                <span>truereliefphysio@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
