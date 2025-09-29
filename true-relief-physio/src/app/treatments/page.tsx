import Header from "@/components/header";
import Treatments from "@/components/treatments";

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Conditions We Treat
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive treatment for a wide range of conditions. Our expert physiotherapy
            services address various musculoskeletal, neurological, and other health conditions.
          </p>
        </div>
      </div>

      <Treatments />

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