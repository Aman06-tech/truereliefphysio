"use client"

import { motion } from 'framer-motion'
import {
  HiOutlineUserPlus,
  HiOutlineCalendarDays,
  HiOutlineDocumentPlus,
  HiOutlineChartBarSquare,
  HiOutlineClipboardDocumentList,
  HiOutlineSparkles
} from 'react-icons/hi2'

const quickActions = [
  {
    title: 'Add New Patient',
    description: 'Register a new patient',
    icon: HiOutlineUserPlus,
    color: 'primary',
    href: '/patients/add'
  },
  {
    title: 'Schedule Appointment',
    description: 'Book a new appointment',
    icon: HiOutlineCalendarDays,
    color: 'secondary',
    href: '/appointments/book'
  },
  {
    title: 'Create Treatment Plan',
    description: 'Design therapy program',
    icon: HiOutlineDocumentPlus,
    color: 'success',
    href: '/treatments/create'
  },
  {
    title: 'View Reports',
    description: 'Analytics & insights',
    icon: HiOutlineChartBarSquare,
    color: 'warning',
    href: '/reports'
  },
  {
    title: 'Write Prescription',
    description: 'Digital prescriptions',
    icon: HiOutlineClipboardDocumentList,
    color: 'primary',
    href: '/prescriptions/create'
  },
  {
    title: 'AI Recommendations',
    description: 'Smart treatment insights',
    icon: HiOutlineSparkles,
    color: 'secondary',
    href: '/ai-insights',
    badge: 'New'
  }
]

const colorClasses = {
  primary: 'from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700',
  secondary: 'from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700',
  success: 'from-success-500 to-success-600 hover:from-success-600 hover:to-success-700',
  warning: 'from-warning-500 to-warning-600 hover:from-warning-600 hover:to-warning-700'
}

export function QuickActions() {
  return (
    <div className="medical-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Quick Actions
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          Frequently used actions and shortcuts
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className={`relative group cursor-pointer bg-gradient-to-br ${colorClasses[action.color as keyof typeof colorClasses]} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge */}
            {action.badge && (
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                {action.badge}
              </div>
            )}

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-4">
                <action.icon className="w-8 h-8 text-white/90 group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h4 className="font-semibold text-white group-hover:text-white/95">
                  {action.title}
                </h4>
                <p className="text-white/80 text-sm group-hover:text-white/90 transition-colors">
                  {action.description}
                </p>
              </div>

              {/* Hover arrow indicator */}
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-5 h-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Animated background elements */}
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Additional Actions */}
      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Import Patients
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Export Data
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Settings
          </motion.button>
        </div>
      </div>
    </div>
  )
}