import Header from "@/components/header";
import { Heart, Shield, Clock, Award, Users, Target, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const whyChooseUs = [
  {
    icon: Award,
    title: "5+ Years Experience",
    description: "Dr. Rajan Sharma brings years of expertise in physiotherapy"
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

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About True Relief Physio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in health and wellness, bringing professional physiotherapy care directly to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-6">
                    <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Dr. RAJAN SHARMA [PT]
                    </h2>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold text-lg">
                      SR.PHYSIO CONSULTANT
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="flex items-center">
                    <Award className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
                    Reg. HSCP - PT(1994), BPT, CMT, CDMT
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-green-600 dark:text-green-400" />
                    Services in Gurgaon and Delhi NCR
                  </p>
                  <p className="flex items-center">
                    <Heart className="h-5 w-5 mr-3 text-orange-500 dark:text-orange-400" />
                    Home Care / Online Consultation
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-green-600 dark:text-green-400" />
                    Available 8AM - 8PM
                  </p>
                </div>
              </div>

              {/* Professional Journey */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    With over 5 years of dedicated service in physiotherapy, Dr. Rajan Sharma has been a beacon of hope for hundreds of patients across Delhi NCR. His journey began with a passion for helping people regain their mobility and live pain-free lives.
                  </p>
                  <p className="leading-relaxed">
                    Specializing in home care physiotherapy, Dr. Sharma understands that healing happens best in familiar, comfortable environments. His expertise spans across orthopedic, neurological, sports, and pediatric physiotherapy.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics & Achievements */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">800+</div>
                    <div className="text-green-100">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <div className="text-green-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-green-100">Patient Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">20+</div>
                    <div className="text-green-100">Services Offered</div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  To provide accessible, professional, and compassionate physiotherapy care that empowers individuals to overcome physical challenges and achieve optimal health and wellness in the comfort of their homes.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To be the leading home care physiotherapy service in Delhi NCR, recognized for excellence in patient care, innovative treatment approaches, and commitment to improving quality of life for all our patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Common Health Concerns We Address
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dr. Rajan Sharma specializes in treating a wide range of conditions with personalized care plans.
            </p>
          </div>

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
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose True Relief Physio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the difference of personalized, professional physiotherapy care in your home.
            </p>
          </div>

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
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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