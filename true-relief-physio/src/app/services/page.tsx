import Header from "@/components/header";
import Services from "@/components/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive physiotherapy services delivered with expertise and care.
            We bring professional healthcare to your doorstep in Gurgaon and Delhi NCR.
          </p>
        </div>
      </div>

      <Services />

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 True Relief Physio. All rights reserved. | Dr. Rajan Sharma [PT]
          </p>
        </div>
      </footer>
    </div>
  );
}