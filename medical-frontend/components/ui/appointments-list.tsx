"use client"

import { motion } from 'framer-motion'
import { HiOutlineClock, HiOutlineUser, HiOutlineCheckCircle, HiOutlineExclamationTriangle } from 'react-icons/hi2'

const appointments = [
  {
    id: 1,
    patient: 'John Smith',
    time: '09:00',
    type: 'Physical Therapy',
    status: 'confirmed',
    avatar: 'JS',
    condition: 'Back Pain Recovery'
  },
  {
    id: 2,
    patient: 'Sarah Johnson',
    time: '10:30',
    type: 'Consultation',
    status: 'pending',
    avatar: 'SJ',
    condition: 'Knee Rehabilitation'
  },
  {
    id: 3,
    patient: 'Michael Brown',
    time: '11:00',
    type: 'Follow-up',
    status: 'confirmed',
    avatar: 'MB',
    condition: 'Shoulder Therapy'
  },
  {
    id: 4,
    patient: 'Emily Davis',
    time: '14:00',
    type: 'Assessment',
    status: 'confirmed',
    avatar: 'ED',
    condition: 'Sports Injury'
  },
  {
    id: 5,
    patient: 'David Wilson',
    time: '15:30',
    type: 'Treatment',
    status: 'pending',
    avatar: 'DW',
    condition: 'Chronic Pain'
  }
]

export function AppointmentsList() {
  return (
    <div className="medical-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
          <HiOutlineClock className="w-5 h-5 mr-2 text-primary-500" />
          Today's Schedule
        </h3>
        <span className="text-xs text-primary-600 bg-primary-100 dark:bg-primary-900 px-2 py-1 rounded-full">
          {appointments.length} appointments
        </span>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <motion.div
            key={appointment.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: -2, transition: { duration: 0.2 } }}
            className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 cursor-pointer group"
          >
            {/* Time */}
            <div className="text-center min-w-[4rem]">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {appointment.time}
              </p>
              <div className="w-2 h-2 bg-primary-500 rounded-full mx-auto mt-1 group-hover:scale-125 transition-transform" />
            </div>

            {/* Avatar */}
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              {appointment.avatar}
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900 dark:text-white truncate">
                  {appointment.patient}
                </h4>
                <div className="flex items-center space-x-1 ml-2">
                  {appointment.status === 'confirmed' ? (
                    <HiOutlineCheckCircle className="w-4 h-4 text-success-500" />
                  ) : (
                    <HiOutlineExclamationTriangle className="w-4 h-4 text-warning-500" />
                  )}
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                {appointment.type}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 truncate mt-1">
                {appointment.condition}
              </p>
            </div>

            {/* Status Badge */}
            <div className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
              appointment.status === 'confirmed'
                ? 'status-completed'
                : 'status-pending'
            }`}>
              {appointment.status}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium py-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200"
        >
          View Full Schedule
        </motion.button>
      </div>
    </div>
  )
}