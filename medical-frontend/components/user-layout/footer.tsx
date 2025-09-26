"use client"

import { motion } from 'framer-motion'
import {
  HiOutlineHeart,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineGlobeAlt
} from 'react-icons/hi2'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Physical Therapy',
    'Pain Management',
    'Rehabilitation',
    'Sports Medicine',
    'Chronic Pain Treatment',
    'Injury Prevention'
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Book Appointment', href: '/appointments' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Emergency Care', href: '/emergency' },
    { name: 'Patient Portal', href: '/portal' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-medical"
              >
                <HiOutlineHeart className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">PainChain</h3>
                <p className="text-primary-400 text-sm font-medium">Medical Center</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading healthcare provider specializing in pain management and rehabilitation.
              Committed to helping you achieve optimal health and wellness.
            </p>
            <div className="flex items-center space-x-2 text-success-400">
              <div className="w-3 h-3 bg-success-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available 24/7 for Emergencies</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiOutlineMapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare City, ST 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <HiOutlinePhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-xs text-slate-500">Main Line</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <HiOutlineEnvelope className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <p>info@painchain.com</p>
                  <p className="text-xs text-slate-500">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <HiOutlineClock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <p className="font-medium">Business Hours:</p>
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 5:00 PM</p>
                  <p className="text-success-400 text-xs mt-1">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>&copy; {currentYear} PainChain Medical Center. All rights reserved.</p>
              <p className="mt-1">Licensed Healthcare Provider | HIPAA Compliant</p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}