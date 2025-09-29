"use client";

import React from "react";
import Link from "next/link";

const featuredTreatments = [
  {
    category: "Orthopedic",
    color: "from-orange-400 to-red-400",
    conditions: [
      "Back Pain", "Neck Pain", "Shoulder Pain", "Knee Pain",
      "Hip Pain", "Joint Pain"
    ]
  },
  {
    category: "Neurological",
    color: "from-green-400 to-emerald-400",
    conditions: [
      "Stroke Recovery", "Paralysis", "Multiple Sclerosis",
      "Parkinson's Disease", "Nerve Pain", "Muscle Weakness"
    ]
  },
  {
    category: "Sports Injuries",
    color: "from-blue-400 to-indigo-400",
    conditions: [
      "ACL Injury", "Tennis Elbow", "Runner's Knee",
      "Ankle Sprain", "Muscle Strain", "Sports Recovery"
    ]
  },
  {
    category: "Post-Surgery",
    color: "from-purple-400 to-pink-400",
    conditions: [
      "Knee Replacement", "Hip Replacement", "Fracture Recovery",
      "Post-Operative Care", "Mobility Restoration", "Rehabilitation"
    ]
  }
];

export default function TreatmentsPreview() {
  return (
    <section id="treatments" className="py-20 bg-gradient-to-br from-orange-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Conditions We Treat
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert treatment for a wide range of health conditions with personalized care plans.
          </p>
        </div>

        {/* Featured Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredTreatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-blue-200 dark:border-blue-800"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${treatment.color} rounded-full mb-4`}></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {treatment.category}
              </h3>
              <ul className="space-y-2">
                {treatment.conditions.map((condition, conditionIndex) => (
                  <li
                    key={conditionIndex}
                    className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <span className={`w-2 h-2 bg-gradient-to-r ${treatment.color} rounded-full mr-2 flex-shrink-0`}></span>
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Treatment Process */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Treatment Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Assessment</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Comprehensive evaluation of your condition
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Diagnosis</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Accurate identification of root causes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Treatment</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Personalized treatment plan execution
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recovery</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Ongoing monitoring and rehabilitation
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/treatments"
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 mr-4"
          >
            View All Treatments
          </Link>
          <Link
            href="/book-appointment"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}