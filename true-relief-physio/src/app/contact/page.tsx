"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import { Phone, Mail, MapPin, Clock, MessageSquare, User, Send } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["9625891710", "8449555400"],
    color: "text-orange-600 dark:text-orange-400"
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["truereliefphysio@gmail.com"],
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: MapPin,
    title: "Service Areas",
    details: ["Gurgaon", "Delhi NCR"],
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Clock,
    title: "Availability",
    details: ["8AM - 8PM", "7 Days a Week"],
    color: "text-orange-600 dark:text-orange-400"
  }
];

const concernTypes = [
  { value: "general_inquiry", label: "General Inquiry" },
  { value: "back_pain", label: "Back Pain" },
  { value: "neck_pain", label: "Neck Pain" },
  { value: "joint_pain", label: "Joint Pain" },
  { value: "sports_injury", label: "Sports Injury" },
  { value: "post_surgery_recovery", label: "Post-Surgery Recovery" },
  { value: "neurological_condition", label: "Neurological Condition" },
  { value: "pediatric_care", label: "Pediatric Care" },
  { value: "home_visit_request", label: "Home Visit Request" },
  { value: "online_consultation", label: "Online Consultation" },
  { value: "emergency_care", label: "Emergency Care" },
  { value: "other", label: "Other" }
];

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  concern_type: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    concern_type: "",
    subject: "",
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
      const response = await fetch('http://localhost:8000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message || "Thank you for contacting us! We'll get back to you within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          concern_type: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitMessage(data.message || "Error sending message. Please try again or call us directly.");
      }
    } catch (error) {
      setSubmitMessage("Error sending message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />


      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-orange-100 mb-6">
              For urgent physiotherapy needs or emergency home visits, call us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9625891710"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: 9625891710
              </a>
              <a
                href="tel:8449555400"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: 8449555400
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Share Your Concerns
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tell us about your health concerns and we'll get back to you with personalized advice
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              </div>

              {/* Phone and Concern Type */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Type of Concern *
                  </label>
                  <select
                    name="concern_type"
                    value={formData.concern_type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select your concern</option>
                    {concernTypes.map((type, index) => (
                      <option key={index} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Brief subject line"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Please describe your health concern, symptoms, or questions in detail..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-green-400 disabled:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none inline-flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`text-center p-4 rounded-lg ${
                  submitMessage.includes("Thank you")
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you provide home visits?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we specialize in home care physiotherapy. Dr. Rajan Sharma provides professional treatment in the comfort of your home across Gurgaon and Delhi NCR.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-green-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What are your consultation hours?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are available from 8AM to 8PM, seven days a week. For emergency cases, please call us directly for special arrangements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How quickly can you respond to appointment requests?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We typically respond to appointment requests within 2-4 hours during business hours. For urgent cases, we can often arrange same-day visits.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link
              href="/book-appointment"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                True Relief Physio
              </h3>
              <p className="text-gray-300 mb-4">
                Dr. RAJAN SHARMA [PT] - SR.PHYSIO CONSULTANT
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Reg. HSCP - PT(1994), BPT, CMT, CDMT
              </p>
              <p className="text-gray-400 text-sm">
                Professional physiotherapy services at your doorstep in Gurgaon and Delhi NCR.
                We provide comprehensive home care physiotherapy with 5+ years of experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="/treatments" className="hover:text-blue-400 transition-colors">Treatments</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                <li><Link href="/book-appointment" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  9625891710 | 8449555400
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  truereliefphysio@gmail.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Gurgaon & Delhi NCR
                </li>
                <li>🏠 Home Care Services</li>
                <li>💻 Online Consultation</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 True Relief Physio. All rights reserved. | Dr. Rajan Sharma [PT]
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}