"use client";

import React from "react";
import { Calendar, MapPin, Clock, Award, Users, Heart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                True Relief
                <span className="text-orange-600 dark:text-orange-400 block">Physio</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Expert Physiotherapy Care at Your Doorstep
              </p>
            </div>

            {/* Doctor Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Dr. RAJAN SHARMA [PT]
                  </h2>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold">
                    SR.PHYSIO CONSULTANT
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Reg. HSCP - PT(1994), BPT, CMT, CDMT
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                  Services in Gurgaon and Delhi NCR
                </p>
                <p className="flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-orange-500 dark:text-orange-400" />
                  Home Care / Online Consultation
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <Clock className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Flexible Timing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Available at your convenience</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Home Visits</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Treatment at your comfort</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-appointment"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Link>
              <a
                href="#services"
                className="border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl p-8 text-white">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                  <Heart className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold">5+ Years Experience</h3>
                <p className="text-green-100">
                  Dedicated to providing comprehensive physiotherapy care with personalized treatment plans
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">800+</div>
                    <div className="text-sm text-green-100">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm text-green-100">Services</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <Award className="h-8 w-8 text-orange-800" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="h-6 w-6 text-blue-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}