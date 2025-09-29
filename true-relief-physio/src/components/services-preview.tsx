"use client";

import React from "react";
import Link from "next/link";
import {
  Activity,
  Heart,
  Zap,
  Target,
  Dumbbell,
  Shield,
  Home,
  Video,
  Users
} from "lucide-react";

const featuredServices = [
  {
    icon: Activity,
    title: "Physiotherapy",
    description: "Comprehensive physiotherapy treatment for various conditions"
  },
  {
    icon: Heart,
    title: "Manual Therapy",
    description: "Hands-on treatment techniques for pain relief and mobility"
  },
  {
    icon: Zap,
    title: "Electro Therapy",
    description: "Advanced electrical stimulation for healing and pain management"
  },
  {
    icon: Target,
    title: "Cupping Therapy",
    description: "Traditional cupping therapy for pain relief and circulation"
  },
  {
    icon: Dumbbell,
    title: "Exercise & Fitness",
    description: "Customized exercise programs for strength and conditioning"
  },
  {
    icon: Shield,
    title: "Sports Physiotherapy",
    description: "Sports injury prevention, treatment, and performance enhancement"
  }
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional physiotherapy services delivered with expertise and care.
            We bring healthcare to your doorstep.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Special Features */}
        <div className="mb-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Home className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Home Care Services</h3>
              <p className="text-orange-100">
                Professional physiotherapy treatment in the comfort of your home
              </p>
            </div>
            <div>
              <Video className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Consultation</h3>
              <p className="text-orange-100">
                Virtual consultations for assessment and follow-up care
              </p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-orange-100">
                5+ years of experience in physiotherapy and rehabilitation
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/services"
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 mr-4"
          >
            View All Services
          </Link>
          <Link
            href="/book-appointment"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}