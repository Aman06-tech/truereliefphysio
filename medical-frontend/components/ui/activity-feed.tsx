"use client"

import { motion } from 'framer-motion'
import {
  HiOutlineUser,
  HiOutlineCalendarDays,
  HiOutlineDocumentText,
  HiOutlineHeart,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineSparkles
} from 'react-icons/hi2'

const activities = [
  {
    id: 1,
    type: 'patient',
    title: 'New patient registered',
    description: 'Sarah Mitchell joined the system',
    time: '2 minutes ago',
    icon: HiOutlineUser,
    color: 'primary',
    avatar: 'SM'
  },
  {
    id: 2,
    type: 'appointment',
    title: 'Appointment completed',
    description: 'Physical therapy session with John Smith finished',
    time: '15 minutes ago',
    icon: HiOutlineCalendarDays,
    color: 'success',
    avatar: 'JS'
  },
  {
    id: 3,
    type: 'prescription',
    title: 'Prescription updated',
    description: 'Pain medication dosage adjusted for Emily Davis',
    time: '1 hour ago',
    icon: HiOutlineDocumentText,
    color: 'secondary',
    avatar: 'ED'
  },
  {
    id: 4,
    type: 'treatment',
    title: 'Treatment plan created',
    description: 'New rehabilitation program for Michael Brown',
    time: '2 hours ago',
    icon: HiOutlineHeart,
    color: 'warning',
    avatar: 'MB'
  },
  {
    id: 5,
    type: 'milestone',
    title: 'Recovery milestone reached',
    description: 'David Wilson completed 80% of treatment goals',
    time: '3 hours ago',
    icon: HiOutlineCheckCircle,
    color: 'success',
    avatar: 'DW'
  },
  {
    id: 6,
    type: 'ai',
    title: 'AI insight generated',
    description: 'Treatment recommendation available for chronic pain patients',
    time: '4 hours ago',
    icon: HiOutlineSparkles,
    color: 'primary',
    badge: 'AI'
  }
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-100 dark:bg-primary-900',
    text: 'text-primary-600 dark:text-primary-400',
    icon: 'bg-primary-500'
  },
  secondary: {
    bg: 'bg-secondary-100 dark:bg-secondary-900',
    text: 'text-secondary-600 dark:text-secondary-400',
    icon: 'bg-secondary-500'
  },
  success: {
    bg: 'bg-success-100 dark:bg-success-900',
    text: 'text-success-600 dark:text-success-400',
    icon: 'bg-success-500'
  },
  warning: {
    bg: 'bg-warning-100 dark:bg-warning-900',
    text: 'text-warning-600 dark:text-warning-400',
    icon: 'bg-warning-500'
  },
  danger: {
    bg: 'bg-danger-100 dark:bg-danger-900',
    text: 'text-danger-600 dark:text-danger-400',
    icon: 'bg-danger-500'
  }
}

export function ActivityFeed() {
  return (
    <div className="medical-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Recent Activity
        </h3>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const colors = colorClasses[activity.color as keyof typeof colorClasses]
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 2, transition: { duration: 0.2 } }}
              className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 cursor-pointer group"
            >
              {/* Icon/Avatar */}
              <div className={`p-2 ${colors.icon} text-white rounded-xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                <activity.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm truncate">
                    {activity.title}
                  </h4>
                  {activity.badge && (
                    <span className="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 px-2 py-0.5 rounded-full text-xs font-medium ml-2 flex-shrink-0">
                      {activity.badge}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2 truncate">
                  {activity.description}
                </p>

                <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-500">
                  <HiOutlineClock className="w-3 h-3" />
                  <span>{activity.time}</span>
                  {activity.avatar && (
                    <>
                      <span>•</span>
                      <span className="font-medium">{activity.avatar}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Connection line for next item (except last) */}
              {index < activities.length - 1 && (
                <div className="absolute left-8 mt-16 w-0.5 h-6 bg-slate-200 dark:bg-slate-700" />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
          >
            <p className="text-lg font-bold text-primary-600 dark:text-primary-400">24</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Today</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg"
          >
            <p className="text-lg font-bold text-secondary-600 dark:text-secondary-400">168</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">This Week</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-3 bg-success-50 dark:bg-success-900/20 rounded-lg"
          >
            <p className="text-lg font-bold text-success-600 dark:text-success-400">724</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">This Month</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-3 bg-warning-50 dark:bg-warning-900/20 rounded-lg"
          >
            <p className="text-lg font-bold text-warning-600 dark:text-warning-400">2.8K</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">This Year</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}