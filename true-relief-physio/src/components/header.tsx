"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const services = [
  "Physiotherapy",
  "Manual Therapy",
  "Electro Therapy",
  "Exercise & Fitness",
  "Cupping Therapy",
  "Orthopaedic physiotherapy",
  "Neuro physiotherapy",
  "Sports physiotherapy",
  "Paediatrics physiotherapy",
  "Dry needling",
  "Physiotherapy at Home",
  "Chest Physiotherapy",
  "Tele Physiotherapy",
  "Chiropractic Therapy",
  "Obesity Physiotherapy",
  "IASTM Therapy",
  "Vertigo Testing",
  "Shockwave Therapy"
];

const treatments = [
  "ACL", "Ankle Sprain", "Back Pain", "Shoulder Impingement", "Plantar Fasciatis",
  "Bells Palsy", "Osteoarthritis", "Rheumatoid Arthritis", "Multiple Sclerosis",
  "Spinal Cord Injuries", "Ankylosing Spondylitis", "Brachial Plexus Injury",
  "Calf Strain", "Carpal Tunnel Syndrome", "Cerebellar Ataxia", "Cervical Spondylosis",
  "Cervicogenic Headache", "Chondromalacia Patella", "Costochondritis",
  "De Quervain tenosynovitis", "Diastasis Recti", "Fibromyalgia", "Foot Drop",
  "Calcaneal Spur", "Hemiplegia", "Hip Pain", "Lumbar Spinal Stenosis",
  "Meniscus Injury", "Meralgia Paresthetica", "Motor Neuron Disease",
  "Muscular Dystrophy", "Neuralgia", "Neuropathy", "Parkinson Disease",
  "Post Fracture", "Post Operative", "Scoliosis", "Shin Splint",
  "Stress Incontinence", "Supraspinatus Tendinitis", "(TMD) Joint Dysfunction",
  "Tendonitis", "Trigger Finger", "Vertigo", "Arthroplasty", "Cerebral Palsy",
  "Frozen Shoulder", "(SIJ) Joint Dysfunction", "Slipped Disc",
  "Tennis & Golfers Elbow", "Sciatica", "Total Knee Replacement",
  "Reflex Sympathetic Dystrophy", "Traumatic Brain Injury", "Trigger Point Pain",
  "Trapezitis Physiotherapy"
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-200">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">9625891710 | 8449555400</span>
              </div>
              <div className="flex items-center">
                <span>Home Care & Online Consultation</span>
              </div>
              <div className="flex items-center">
                <span>Available 8AM - 8PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>truereliefphysio@gmail.com</span>
              </div>
              <button
                onClick={toggleTheme}
                className="p-1 rounded-md hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                True Relief Physio
              </h1>
              <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                Dr. RAJAN SHARMA [PT]
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50 grid grid-cols-2 gap-1 p-4 border border-green-200 dark:border-green-800"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.slice(0, 10).map((service, index) => (
                    <Link
                      key={index}
                      href="/services"
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 rounded transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="col-span-2 block px-3 py-2 text-sm font-semibold text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 rounded transition-colors text-center border-t border-green-200 dark:border-green-800 mt-2 pt-3"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Treatments Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onMouseEnter={() => setIsTreatmentsOpen(true)}
                onMouseLeave={() => setIsTreatmentsOpen(false)}
              >
                Treatments
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isTreatmentsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50 grid grid-cols-2 gap-1 p-4 border border-blue-200 dark:border-blue-800"
                  onMouseEnter={() => setIsTreatmentsOpen(true)}
                  onMouseLeave={() => setIsTreatmentsOpen(false)}
                >
                  {treatments.slice(0, 12).map((treatment, index) => (
                    <Link
                      key={index}
                      href="/treatments"
                      className="block px-2 py-1 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded transition-colors"
                    >
                      {treatment}
                    </Link>
                  ))}
                  <Link
                    href="/treatments"
                    className="col-span-2 block px-3 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors text-center border-t border-blue-200 dark:border-blue-800 mt-2 pt-3"
                  >
                    View All Treatments →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/book-appointment"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-md transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors w-full text-left"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.slice(0, 8).map((service, index) => (
                      <Link
                        key={index}
                        href="/services"
                        className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {service}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block py-2 text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Treatments */}
              <div>
                <button
                  onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)}
                  className="flex items-center justify-between text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left"
                >
                  Treatments
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMobileTreatmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileTreatmentsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {treatments.slice(0, 8).map((treatment, index) => (
                      <Link
                        key={index}
                        href="/treatments"
                        className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileTreatmentsOpen(false);
                        }}
                      >
                        {treatment}
                      </Link>
                    ))}
                    <Link
                      href="/treatments"
                      className="block py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileTreatmentsOpen(false);
                      }}
                    >
                      View All Treatments →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/book-appointment"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-md transition-all duration-300 w-full text-center inline-flex items-center justify-center shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}