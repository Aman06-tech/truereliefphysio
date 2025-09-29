"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const treatments = [
  {
    category: "Orthopedic",
    conditions: [
      "ACL", "Ankle Sprain", "Back Pain", "Shoulder Impingement", "Plantar Fasciatis",
      "Osteoarthritis", "Rheumatoid Arthritis", "Ankylosing Spondylitis",
      "Brachial Plexus Injury", "Calf Strain", "Carpal Tunnel Syndrome",
      "Cervical Spondylosis", "Cervicogenic Headache", "Chondromalacia Patella",
      "Costochondritis", "De Quervain tenosynovitis", "Hip Pain",
      "Lumbar Spinal Stenosis", "Meniscus Injury", "Meralgia Paresthetica",
      "Post Fracture", "Post Operative", "Scoliosis", "Shin Splint",
      "Supraspinatus Tendinitis", "(TMD) Joint Dysfunction", "Tendonitis",
      "Trigger Finger", "Arthroplasty", "Frozen Shoulder",
      "(SIJ) Joint Dysfunction", "Slipped Disc", "Tennis & Golfers Elbow",
      "Sciatica", "Total Knee Replacement", "Calcaneal Spur"
    ]
  },
  {
    category: "Neurological",
    conditions: [
      "Bells Palsy", "Multiple Sclerosis", "Spinal Cord Injuries",
      "Cerebellar Ataxia", "Motor Neuron Disease", "Muscular Dystrophy",
      "Neuralgia", "Neuropathy", "Parkinson Disease", "Hemiplegia",
      "Cerebral Palsy", "Traumatic Brain Injury", "Foot Drop"
    ]
  },
  {
    category: "Women's Health",
    conditions: [
      "Diastasis Recti", "Stress Incontinence"
    ]
  },
  {
    category: "Pain Management",
    conditions: [
      "Fibromyalgia", "Vertigo", "Reflex Sympathetic Dystrophy",
      "Trigger Point Pain", "Trapezitis Physiotherapy"
    ]
  }
];

export default function Treatments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allConditions = treatments.flatMap(category =>
    category.conditions.map(condition => ({
      condition,
      category: category.category
    }))
  );

  const filteredConditions = allConditions.filter(item => {
    const matchesSearch = item.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...treatments.map(t => t.category)];

  return (
    <section id="treatments" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Conditions We Treat
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive treatment for a wide range of conditions. Our expert physiotherapy
            services address various musculoskeletal, neurological, and other health conditions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for a condition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredConditions.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.condition}
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredConditions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No conditions found matching your search criteria.
            </p>
          </div>
        )}

        {/* Treatment Process */}
        <div className="mt-20 bg-white dark:bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Treatment Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Assessment</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Comprehensive evaluation of your condition and medical history
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Diagnosis</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Accurate diagnosis and identification of root causes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Treatment Plan</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Customized treatment plan tailored to your specific needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recovery</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Ongoing treatment and monitoring until full recovery
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
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}