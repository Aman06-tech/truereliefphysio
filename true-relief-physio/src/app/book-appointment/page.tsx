import Header from "@/components/header";
import BookingFormSecure from "@/components/booking-form-secure";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Schedule your physiotherapy session with Dr. Rajan Sharma. We provide
            professional home care services in Gurgaon and Delhi NCR.
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <BookingFormSecure />

      {/* Additional Information */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Home Care Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Professional physiotherapy treatment in the comfort of your home
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Flexible Timing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Available 8AM - 8PM, choose your convenient time slot
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Expert Care
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                5+ years experience with Dr. Rajan Sharma [PT]
              </p>
            </div>
          </div>
        </div>
      </div>

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
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
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