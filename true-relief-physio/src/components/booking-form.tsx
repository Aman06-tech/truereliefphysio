"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MapPin, FileText } from "lucide-react";

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

interface FormData {
  service: string;
  name: string;
  email: string;
  phone: string;
  age: string;
  location: string;
  date: string;
  time: string;
  message: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
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
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Convert age to number before sending
      const submitData = {
        ...formData,
        age: parseInt(formData.age)
      };

      const response = await fetch('http://localhost:8000/api/appointments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message || "Appointment booked successfully! We'll contact you soon.");
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
      } else {
        setSubmitMessage(data.message || "Error booking appointment. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error booking appointment. Please check your connection and try again.");
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Choose a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your@email.com"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="+91 9876543210"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your age"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your address in Gurgaon/Delhi NCR"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
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
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Please describe your condition or any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-green-400 disabled:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? "Booking..." : "Book Appointment"}
              </button>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`text-center p-4 rounded-lg ${
                submitMessage.includes("successfully")
                  ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                  : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
              }`}>
                {submitMessage}
              </div>
            )}
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
                <span>Call us directly</span>
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