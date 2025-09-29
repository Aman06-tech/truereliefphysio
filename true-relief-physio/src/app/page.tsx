import Header from "@/components/header";
import Hero from "@/components/hero";
import ServicesPreview from "@/components/services-preview";
import TreatmentsPreview from "@/components/treatments-preview";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <ServicesPreview />
      <TreatmentsPreview />

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
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#treatments" className="hover:text-blue-400 transition-colors">Treatments</a></li>
                <li><a href="/book-appointment" className="hover:text-blue-400 transition-colors">Book Appointment</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📍 Gurgaon & Delhi NCR</li>
                <li>📞 Available for consultation</li>
                <li>✉️ truereliefphysio@gmail.com</li>
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
