"use client"

import { motion } from 'framer-motion'
import {
  HiOutlineHeart,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineCalendarDays,
  HiOutlinePhone,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineHandRaised,
  HiOutlineBolt,
  HiOutlineAcademicCap,
  HiOutlineUser,
  HiOutlineFire,
  HiOutlineBeaker,
  HiOutlineCpuChip,
  HiOutlineWrenchScrewdriver,
  HiOutlineComputerDesktop,
  HiOutlineHomeModern,
  HiOutlineGlobeAlt
} from 'react-icons/hi2'
import Link from 'next/link'

const featuredServices = [
  {
    title: 'Manual Therapy 🥜',
    description: 'Hands-on treatment and joint mobilization for pain relief and improved mobility.',
    icon: HiOutlineHandRaised,
    price: '₹2000',
    duration: '60 min',
    features: ['Joint Mobilization', 'Soft Tissue Massage', 'Trigger Point Release', 'Movement Restoration'],
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Electro Therapy ⚡',
    description: 'Advanced electrical stimulation techniques for deep tissue healing and pain management.',
    icon: HiOutlineBolt,
    price: '₹1200',
    duration: '30 min',
    features: ['TENS Therapy', 'Ultrasound', 'Muscle Stimulation', 'Pain Relief'],
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    title: 'Class 4 Laser Therapy 🔦',
    description: 'High-intensity laser therapy for accelerated healing and tissue regeneration.',
    icon: HiOutlineFire,
    price: '₹1800',
    duration: '20 min',
    features: ['Deep Tissue Healing', 'Inflammation Reduction', 'Pain Management', 'Faster Recovery'],
    gradient: 'from-red-500 to-pink-600'
  },
  {
    title: 'Exercise Therapy 🏋',
    description: 'Personalized therapeutic exercises designed to restore strength and function.',
    icon: HiOutlineAcademicCap,
    price: '₹1500',
    duration: '45 min',
    features: ['Strength Training', 'Balance Exercise', 'Flexibility', 'Functional Movement'],
    gradient: 'from-green-500 to-teal-600'
  },
  {
    title: 'Dry Needling 📍',
    description: 'Precision trigger point therapy using fine needles for muscle tension release.',
    icon: HiOutlineBeaker,
    price: '₹2000',
    duration: '30 min',
    features: ['Trigger Point Release', 'Muscle Relaxation', 'Pain Reduction', 'Improved Mobility'],
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'Shockwave Therapy 〰️',
    description: 'Acoustic wave therapy for chronic conditions and tissue regeneration.',
    icon: HiOutlineCpuChip,
    price: '₹2500',
    duration: '20 min',
    features: ['Chronic Pain Relief', 'Tissue Regeneration', 'Non-invasive', 'Quick Recovery'],
    gradient: 'from-purple-500 to-indigo-600'
  }
]

const specializedServices = [
  {
    title: 'Neuro Physiotherapy 🧠',
    description: 'Specialized rehabilitation for neurological conditions and brain injuries.',
    icon: HiOutlineSparkles,
    specialties: ['Stroke Recovery', 'Parkinson\'s Care', 'Brain Injury Rehab', 'MS Management']
  },
  {
    title: 'Sports Physiotherapy ⚽',
    description: 'Expert care for athletes with injury prevention and performance optimization.',
    icon: HiOutlineShieldCheck,
    specialties: ['Injury Prevention', 'Performance Enhancement', 'Return to Sport', 'Athletic Recovery']
  },
  {
    title: 'Pediatric Physiotherapy 👶',
    description: 'Gentle, specialized care for children with developmental and mobility challenges.',
    icon: HiOutlineHeart,
    specialties: ['Developmental Delays', 'Cerebral Palsy', 'Motor Skills', 'Growth Support']
  },
  {
    title: 'Home Physiotherapy 🏠',
    description: 'Professional physiotherapy services delivered to your home for convenience.',
    icon: HiOutlineHomeModern,
    specialties: ['Home Visits', 'Elderly Care', 'Post-Surgery', 'Mobility Support']
  },
  {
    title: 'Tele Physiotherapy 💻',
    description: 'Online consultations and guided therapy sessions via video call.',
    icon: HiOutlineComputerDesktop,
    specialties: ['Remote Consultation', 'Exercise Guidance', 'Progress Monitoring', 'Follow-up Care']
  },
  {
    title: 'Custom Orthotics 👟',
    description: 'Personalized foot orthotics designed for optimal support and comfort.',
    icon: HiOutlineWrenchScrewdriver,
    specialties: ['Foot Assessment', 'Custom Design', 'Gait Analysis', 'Comfort Fitting']
  }
]

const stats = [
  { number: '2,500+', label: 'Patients Treated', icon: HiOutlineUsers },
  { number: '95%', label: 'Success Rate', icon: HiOutlineCheckCircle },
  { number: '10+', label: 'Years Experience', icon: HiOutlineStar },
  { number: '24/7', label: 'Emergency Care', icon: HiOutlinePhone }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    condition: 'Chronic Back Pain',
    rating: 5,
    text: 'The team at PainChain helped me overcome years of chronic pain. I can now enjoy activities I thought I\'d never do again.',
    image: 'SJ'
  },
  {
    name: 'Michael Chen',
    condition: 'Sports Injury',
    rating: 5,
    text: 'Professional, caring, and incredibly effective. They got me back on the field faster than I expected.',
    image: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    condition: 'Post-Surgery Rehabilitation',
    rating: 5,
    text: 'Outstanding rehabilitation program. The staff made my recovery journey smooth and successful.',
    image: 'ER'
  }
]

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <HiOutlineSparkles className="w-4 h-4" />
                  <span>Advanced Pain Management Center</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Your Path to{' '}
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    Pain-Free
                  </span>{' '}
                  Living
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Expert healthcare professionals dedicated to helping you overcome pain and regain your quality of life through personalized treatment plans.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/appointments">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="medical-button flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 text-lg"
                  >
                    <HiOutlineCalendarDays className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </motion.button>
                </Link>

                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 px-8 py-4 text-lg border-2 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 w-full sm:w-auto"
                  >
                    <span>Our Services</span>
                    <HiOutlineArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 shadow-medical">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 space-y-6">
                  {/* Physiotherapy Treatment Card */}
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                      Dr. Rajan Sharma [PT]
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Senior Physiotherapy Consultant
                    </p>
                  </div>

                  {/* Treatment Services Icons */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <HiOutlineHandRaised className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Manual Therapy</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-success-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <HiOutlineBolt className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Electro Therapy</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <HiOutlineAcademicCap className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Exercise Therapy</p>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Home Care Service</span>
                      <span className="text-xs bg-success-100 text-success-700 px-2 py-1 rounded-full">Available</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                      <span>Service Hours:</span>
                      <span className="font-medium">8AM - 8PM</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                      <span>Coverage:</span>
                      <span className="font-medium">Gurgaon & Delhi NCR</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-success-600">
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">5+ Years Experience</span>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Featured Treatment Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Advanced physiotherapy treatments using modern techniques and equipment for optimal healing and recovery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="medical-card group cursor-pointer overflow-hidden"
              >
                {/* Service Header with Gradient */}
                <div className={`bg-gradient-to-r ${service.gradient} p-6 -m-6 mb-6`}>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <div className="flex items-center space-x-3 text-white/90 text-sm">
                          <span>{service.price}</span>
                          <span>•</span>
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Link href="/appointments" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                      <span>Book Now</span>
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Specialized Care Programs
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Expert specialized physiotherapy programs tailored to specific conditions and patient needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="medical-card group cursor-pointer"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.specialties.map((specialty) => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <HiOutlineSparkles className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{specialty}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <Link href="/appointments" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>Learn more</span>
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/appointments">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="medical-button inline-flex items-center space-x-2 px-8 py-4 text-lg"
              >
                <HiOutlineGlobeAlt className="w-5 h-5" />
                <span>View All 43+ Services</span>
                <HiOutlineArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              What Our Patients Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Real stories from real people who found relief and recovery with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="medical-card"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-5 h-5 text-warning-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.condition}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-white space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Start Your Recovery at Home?
            </h2>
            <p className="text-xl text-primary-100">
              Book your home visit with Dr. Rajan Sharma today. Professional physiotherapy care delivered to your doorstep in Gurgaon & Delhi NCR.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/appointments">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
                >
                  <HiOutlineCalendarDays className="w-5 h-5" />
                  <span>Book Your Appointment</span>
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 flex items-center space-x-2"
                >
                  <HiOutlinePhone className="w-5 h-5" />
                  <span>Call Us Today</span>
                </motion.button>
              </Link>
            </div>

            <p className="text-primary-200 text-sm">
              Call us at <span className="font-semibold text-white">9625891710</span> or <span className="font-semibold text-white">8449555400</span> | Available 8AM - 8PM
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}