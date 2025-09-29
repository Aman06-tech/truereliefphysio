"use client";

import React from "react";
import { Heart, Shield, Clock, Award, Users, Target } from "lucide-react";
import Link from "next/link";

const commonConcerns = [
  {
    title: "Back Pain & Neck Pain",
    description: "Chronic pain relief through specialized manual therapy and targeted exercises"
  },
  {
    title: "Post-Surgery Rehabilitation",
    description: "Comprehensive recovery programs for post-operative patients"
  },
  {
    title: "Sports Injuries",
    description: "Professional treatment for athletes and sports-related injuries"
  },
  {
    title: "Neurological Conditions",
    description: "Specialized care for stroke, paralysis, and neurological disorders"
  },
  {
    title: "Joint Pain & Arthritis",
    description: "Pain management and mobility improvement for joint conditions"
  },
  {
    title: "Pediatric Physiotherapy",
    description: "Gentle care for children with developmental and movement disorders"
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "25+ Years Experience",
    description: "Dr. Rajan Sharma brings decades of expertise in physiotherapy"
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your specific condition"
  },
  {
    icon: Shield,
    title: "Home Comfort",
    description: "Professional treatment in the safety and comfort of your home"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Available 8AM-8PM with convenient appointment timing"
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Treatment for all age groups from pediatrics to geriatrics"
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description: "Focused on achieving measurable improvement and recovery"
  }
];

export default function Concerns() {
  return (
    <section id="concerns" className="py-20 bg-gradient-to-br from-green-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Your Health, Our Priority
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              At True Relief Physio, we understand that every patient is unique. Dr. Rajan Sharma
              provides comprehensive physiotherapy care with a personal touch, bringing professional
              treatment directly to your doorstep.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">800+</div>
                  <div className="text-gray-600 dark:text-gray-300">Patients Treated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</div>
                  <div className="text-gray-600 dark:text-gray-300">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Concerns */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Common Health Concerns We Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonConcerns.map((concern, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {concern.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {concern.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose True Relief Physio?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards better health. Book your consultation today and
            experience professional physiotherapy care at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Appointment Now
            </Link>
            <a
              href="tel:9625891710"
              className="border-2 border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white dark:hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call Now: 9625891710
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}