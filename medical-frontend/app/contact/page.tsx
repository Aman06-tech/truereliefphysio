"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineCalendarDays,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck
} from 'react-icons/hi2'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredTime: '',
    urgency: 'routine'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredTime: '',
        urgency: 'routine'
      })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      title: 'Dr. Rajan Sharma [PT]',
      icon: HiOutlineMapPin,
      details: [
        'SR. PHYSIO CONSULTANT',
        'Reg. HSCP - PT(1994), BPT, CMT, CDMT',
        'TrueRelief Physiotherapy'
      ]
    },
    {
      title: 'Phone Numbers',
      icon: HiOutlinePhone,
      details: [
        'Primary: 9625891710',
        'Secondary: 8449555400',
        'WhatsApp Available'
      ]
    },
    {
      title: 'Service Areas',
      icon: HiOutlineEnvelope,
      details: [
        'Gurgaon (All Areas)',
        'Delhi NCR',
        'Home Visits & Online Consultations'
      ]
    },
    {
      title: 'Service Hours',
      icon: HiOutlineClock,
      details: [
        'Daily: 8:00 AM - 8:00 PM',
        'Home Visits Available',
        'Online Consultations',
        'Appointment Based Service'
      ]
    }
  ]

  return (
    <div className="bg-white dark:bg-slate-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Contact{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Dr. Rajan
              </span>{' '}
              Sharma
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Ready to start your physiotherapy journey? Contact Dr. Rajan Sharma for professional home care and online consultation services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/appointments">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="medical-button flex items-center space-x-2 px-8 py-4"
                >
                  <HiOutlineCalendarDays className="w-5 h-5" />
                  <span>Book Appointment</span>
                </motion.button>
              </Link>
              <a href="tel:+919625891710">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                >
                  <HiOutlinePhone className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Dr. Rajan Sharma Information
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  Professional physiotherapist providing home care services. Contact for appointments, consultations, or any questions about physiotherapy treatments.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="medical-card"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-slate-600 dark:text-slate-400 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-danger-500 to-warning-500 rounded-xl p-6 text-white"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <HiOutlineShieldCheck className="w-6 h-6" />
                  <h3 className="font-semibold">Home Care Service</h3>
                </div>
                <p className="text-white/90 text-sm mb-3">
                  Professional physiotherapy services at your home. Available 8AM - 8PM daily.
                  Online consultations also available for remote guidance.
                </p>
                <a
                  href="tel:+919625891710"
                  className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
                >
                  <HiOutlinePhone className="w-4 h-4" />
                  <span>Call: 9625891710</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="medical-card"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Send us a Message
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="medical-input"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="medical-input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="medical-input"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="medical-input"
                    >
                      <option value="routine">Routine Inquiry</option>
                      <option value="urgent">Urgent</option>
                      <option value="followup">Follow-up</option>
                      <option value="appointment">Appointment Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="medical-input"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Preferred Contact Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="medical-input"
                    placeholder="e.g., Mornings, Afternoons, Weekends"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="medical-input resize-none"
                    placeholder="Please describe your question or concern in detail..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'medical-button'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <div className="flex items-center space-x-2 text-primary-700 dark:text-primary-300">
                  <HiOutlineCheckCircle className="w-5 h-5" />
                  <span className="font-medium text-sm">HIPAA Compliant</span>
                </div>
                <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">
                  Your information is secure and protected under healthcare privacy laws.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Service Coverage Areas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Dr. Rajan Sharma provides home physiotherapy services across Gurgaon and Delhi NCR regions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center medical-card">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <HiOutlineMapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Home Visits</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Professional physiotherapy treatment delivered at your home for maximum comfort and convenience.
              </p>
            </div>

            <div className="text-center medical-card">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <HiOutlineShieldCheck className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Online Consultations</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Remote physiotherapy guidance and exercise instructions through video consultations.
              </p>
            </div>

            <div className="text-center medical-card">
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <HiOutlineClock className="w-6 h-6 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Service hours 8AM - 8PM daily with appointment-based scheduling to fit your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}