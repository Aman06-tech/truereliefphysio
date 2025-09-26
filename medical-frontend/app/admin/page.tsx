"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineUser
} from 'react-icons/hi2'

interface Appointment {
  id: number
  first_name: string
  last_name: string
  service_name: string
  date: string
  time_slot_detail: {
    start_time: string
    end_time: string
  }
  status: string
  complaint: string
  phone: string
  email: string
}

export default function Dashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [todaysAppointments, setTodaysAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/appointments/')
      if (response.ok) {
        const data = await response.json()
        const appointmentsData = data.results || data
        setAppointments(appointmentsData)

        // Filter today's appointments
        const today = new Date().toISOString().split('T')[0]
        const todaysAppts = appointmentsData.filter((apt: Appointment) => apt.date === today)
        setTodaysAppointments(todaysAppts)
      } else {
        console.error('Failed to fetch appointments')
      }
    } catch (error) {
      console.error('Error fetching appointments:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300'
      case 'pending':
        return 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300'
      case 'cancelled':
        return 'bg-danger-100 text-danger-700 dark:bg-danger-900 dark:text-danger-300'
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return <HiOutlineCheckCircle className="w-4 h-4 text-success-500" />
      case 'pending':
        return <HiOutlineExclamationTriangle className="w-4 h-4 text-warning-500" />
      case 'cancelled':
        return <HiOutlineExclamationTriangle className="w-4 h-4 text-danger-500" />
      default:
        return <HiOutlineClock className="w-4 h-4 text-slate-500" />
    }
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Welcome back, Dr. Smith 👋
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Here are your appointments for today, {new Date().toLocaleDateString()}
          </p>
        </div>
      </motion.div>

      {/* Appointment Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
      >
        <div className="medical-card text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <HiOutlineCalendarDays className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {todaysAppointments.length}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Today's Appointments</div>
        </div>

        <div className="medical-card text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <HiOutlineCheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {appointments.filter(apt => apt.status.toLowerCase() === 'confirmed').length}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Confirmed Appointments</div>
        </div>

        <div className="medical-card text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-warning-500 to-warning-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <HiOutlineExclamationTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {appointments.filter(apt => apt.status.toLowerCase() === 'pending').length}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Pending Appointments</div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Today's Schedule */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="medical-card"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
              <HiOutlineClock className="w-5 h-5 mr-2 text-primary-500" />
              Today's Schedule
            </h3>
            <span className="text-xs text-primary-600 bg-primary-100 dark:bg-primary-900 px-2 py-1 rounded-full">
              {todaysAppointments.length} appointments
            </span>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {todaysAppointments.length === 0 ? (
                <div className="text-center py-8">
                  <HiOutlineCalendarDays className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 dark:text-slate-400">No appointments scheduled for today</p>
                </div>
              ) : (
                todaysAppointments.map((appointment) => (
                  <motion.div
                    key={appointment.id}
                    whileHover={{ x: -2, transition: { duration: 0.2 } }}
                    className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all duration-200"
                  >
                    <div className="text-center min-w-[4rem]">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {appointment.time_slot_detail.start_time}
                      </p>
                      <div className="w-2 h-2 bg-primary-500 rounded-full mx-auto mt-1" />
                    </div>

                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {appointment.first_name[0]}{appointment.last_name[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900 dark:text-white truncate">
                          {appointment.first_name} {appointment.last_name}
                        </h4>
                        <div className="flex items-center space-x-1 ml-2">
                          {getStatusIcon(appointment.status)}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                        {appointment.service_name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 truncate mt-1">
                        {appointment.complaint || 'No complaint specified'}
                      </p>
                    </div>

                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </motion.div>

        {/* All Upcoming Appointments */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="medical-card"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
              <HiOutlineCalendarDays className="w-5 h-5 mr-2 text-primary-500" />
              All Upcoming Appointments
            </h3>
            <span className="text-xs text-primary-600 bg-primary-100 dark:bg-primary-900 px-2 py-1 rounded-full">
              {appointments.length} total
            </span>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-pulse p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-2/3 mb-1"></div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {appointments.length === 0 ? (
                <div className="text-center py-8">
                  <HiOutlineUser className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 dark:text-slate-400">No appointments scheduled</p>
                </div>
              ) : (
                appointments.map((appointment) => (
                  <motion.div
                    key={appointment.id}
                    whileHover={{ x: -2, transition: { duration: 0.2 } }}
                    className="p-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-slate-900 dark:text-white text-sm">
                            {appointment.first_name} {appointment.last_name}
                          </h4>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {appointment.service_name} • {appointment.date} at {appointment.time_slot_detail.start_time}
                        </p>
                        {appointment.phone && (
                          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                            📞 {appointment.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}