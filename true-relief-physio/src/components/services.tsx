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
  Baby,
  Home,
  Video,
  Users,
  Stethoscope,
  Bone,
  Brain,
  Trophy,
  UserCheck
} from "lucide-react";

const services = [
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
    icon: Dumbbell,
    title: "Exercise & Fitness",
    description: "Customized exercise programs for strength and conditioning"
  },
  {
    icon: Heart,
    title: "Cupping Therapy",
    description: "Traditional cupping therapy for muscle tension relief"
  },
  {
    icon: Bone,
    title: "Orthopaedic Physiotherapy",
    description: "Specialized treatment for musculoskeletal conditions"
  },
  {
    icon: Brain,
    title: "Neuro Physiotherapy",
    description: "Rehabilitation for neurological conditions and injuries"
  },
  {
    icon: Trophy,
    title: "Sports Physiotherapy",
    description: "Sports injury prevention, treatment, and performance enhancement"
  },
  {
    icon: Baby,
    title: "Paediatrics Physiotherapy",
    description: "Specialized physiotherapy care for children and infants"
  },
  {
    icon: Target,
    title: "Dry Needling",
    description: "Precision needle therapy for trigger point release"
  },
  {
    icon: Home,
    title: "Physiotherapy at Home",
    description: "Convenient physiotherapy treatment in your comfort zone"
  },
  {
    icon: Stethoscope,
    title: "Chest Physiotherapy",
    description: "Respiratory physiotherapy for breathing difficulties"
  },
  {
    icon: Video,
    title: "Tele Physiotherapy",
    description: "Online consultation and guidance from anywhere"
  },
  {
    icon: Activity,
    title: "Chiropractic Therapy",
    description: "Spinal adjustment and alignment therapy"
  },
  {
    icon: Heart,
    title: "Obesity Physiotherapy",
    description: "Specialized physiotherapy for weight management"
  },
  {
    icon: Target,
    title: "IASTM Therapy",
    description: "Instrument-assisted soft tissue mobilization"
  },
  {
    icon: Brain,
    title: "Vertigo Testing",
    description: "Comprehensive assessment and treatment for vertigo"
  },
  {
    icon: Zap,
    title: "Shockwave Therapy",
    description: "Advanced shockwave treatment for chronic pain"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive physiotherapy services delivered with expertise and care.
            We bring professional healthcare to your doorstep.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Home className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Home Care Services</h3>
              <p className="text-blue-100">
                Professional physiotherapy treatment in the comfort of your home
              </p>
            </div>
            <div>
              <Video className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Consultation</h3>
              <p className="text-blue-100">
                Virtual consultations for assessment and follow-up care
              </p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-blue-100">
                25+ years of experience in physiotherapy and rehabilitation
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/book-appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            Book Your Service Today
          </Link>
        </div>
      </div>
    </section>
  );
}