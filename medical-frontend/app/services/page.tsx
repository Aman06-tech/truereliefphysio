"use client"

import { motion } from 'framer-motion'
import {
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineFire,
  HiOutlineBolt,
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCalendarDays,
  HiOutlineArrowRight
} from 'react-icons/hi2'
import Link from 'next/link'

const mainServices = [
  {
    title: 'Manual Therapy / Chiropractic',
    description: 'Expert hands-on therapeutic techniques for joint mobility and muscle function restoration.',
    icon: HiOutlineHeart,
    color: 'primary',
    features: [
      'Joint Mobilization Techniques',
      'Soft Tissue Manipulation',
      'Spinal Alignment Therapy',
      'Trigger Point Release',
      'Myofascial Release',
      'Deep Tissue Massage'
    ],
    conditions: [
      'Frozen Shoulder',
      'Neck Pain (Cervical)',
      'Back Pain (LBA/PIVD)',
      'Joint Stiffness',
      'Muscle Tension',
      'Postural Problems'
    ],
    duration: '45-60 minutes',
    sessions: 'Home visit basis'
  },
  {
    title: 'Exercise Therapy',
    description: 'Customized therapeutic exercise programs for strength, mobility and functional improvement.',
    icon: HiOutlineShieldCheck,
    color: 'secondary',
    features: [
      'Strength Training Programs',
      'Range of Motion Exercises',
      'Balance & Coordination Training',
      'Functional Movement Patterns',
      'Core Strengthening',
      'Flexibility Training'
    ],
    conditions: [
      'Post-Operative Recovery',
      'Knee Pain (OA Knee)',
      'Post-Fracture Rehabilitation',
      'Muscle Weakness',
      'Mobility Limitations',
      'Sports Injury Recovery'
    ],
    duration: '45-60 minutes',
    sessions: 'Personalized schedule'
  },
  {
    title: 'Electro Therapy',
    description: 'Advanced electrical stimulation techniques for pain relief and muscle strengthening.',
    icon: HiOutlineSparkles,
    color: 'success',
    features: [
      'TENS (Pain Relief)',
      'Electrical Muscle Stimulation',
      'Ultrasound Therapy',
      'Interferential Current',
      'Muscle Re-education',
      'Nerve Stimulation'
    ],
    conditions: [
      'Chronic Pain Management',
      'Muscle Atrophy',
      'Nerve Dysfunction',
      'Inflammation Reduction',
      'Tissue Healing',
      'Pain Control'
    ],
    duration: '30-45 minutes',
    sessions: 'As per condition'
  }
]

const specialtyServices = [
  {
    title: 'Chest Physiotherapy',
    description: 'Specialized breathing and chest clearance techniques for respiratory health.',
    icon: HiOutlineFire,
    duration: '30-45 minutes'
  },
  {
    title: 'Cupping / Dry Needling Therapy',
    description: 'Traditional cupping and dry needling for deep tissue release and pain relief.',
    icon: HiOutlineBolt,
    duration: '20-30 minutes'
  },
  {
    title: 'Stroke Rehabilitation',
    description: 'Comprehensive rehabilitation for stroke recovery and neurological conditions.',
    icon: HiOutlineHeart,
    duration: '45-60 minutes'
  },
  {
    title: 'Geriatric Care',
    description: 'Specialized physiotherapy care for elderly patients and age-related conditions.',
    icon: HiOutlineAcademicCap,
    duration: '30-45 minutes'
  }
]

const colorClasses = {
  primary: 'from-primary-500 to-primary-600',
  secondary: 'from-secondary-500 to-secondary-600',
  success: 'from-success-500 to-success-600',
  warning: 'from-warning-500 to-warning-600'
}

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Professional{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Physiotherapy Services
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Dr. Rajan Sharma [PT] provides expert physiotherapy services at your home. With 5+ years of experience and BPT, CMT, CDMT qualifications, offering comprehensive care in Gurgaon & Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/appointments">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="medical-button flex items-center space-x-2 px-8 py-4"
                >
                  <HiOutlineCalendarDays className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                >
                  <span>Ask Questions</span>
                  <HiOutlineArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Core Physiotherapy Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Evidence-based physiotherapy treatments delivered at your home by Dr. Rajan Sharma, registered with HSCP - PT(1994).
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center shadow-medical`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                          Treatment Features:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <HiOutlineCheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Conditions */}
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                          Conditions Treated:
                        </h4>
                        <ul className="space-y-2">
                          {service.conditions.map((condition) => (
                            <li key={condition} className="flex items-center space-x-2">
                              <HiOutlineCheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">{condition}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center space-x-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center space-x-2">
                        <HiOutlineClock className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HiOutlineCalendarDays className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{service.sessions}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`relative bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-2xl p-8 shadow-medical`}>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            Treatment Progress
                          </span>
                          <span className="text-sm font-semibold text-primary-600">
                            Week {index + 4}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Pain Level</span>
                            <span className="text-success-600 font-medium">Improved 75%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: '25%' }}
                              whileInView={{ width: '75%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="bg-gradient-to-r from-success-500 to-success-400 h-2 rounded-full"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Mobility</span>
                            <span className="text-primary-600 font-medium">90% Restored</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: '30%' }}
                              whileInView={{ width: '90%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.7 }}
                              className={`bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} h-2 rounded-full`}
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                          <HiOutlineCheckCircle className="w-4 h-4 text-success-500" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Excellent progress - continue current plan
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Specialized Therapies
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Advanced specialized treatments for complex conditions and comprehensive rehabilitation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="medical-card text-center group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex items-center justify-center space-x-1 text-xs text-slate-500 dark:text-slate-500">
                  <HiOutlineClock className="w-3 h-3" />
                  <span>{service.duration}</span>
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
              Ready to Start Your Home Physiotherapy?
            </h2>
            <p className="text-xl text-primary-100">
              Dr. Rajan Sharma is ready to bring professional physiotherapy care to your home. Serving Gurgaon & Delhi NCR.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/appointments">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
                >
                  <HiOutlineCalendarDays className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}