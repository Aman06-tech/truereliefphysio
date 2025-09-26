"use client"

import { motion } from 'framer-motion'
import { HiOutlineChartBarSquare, HiOutlineUsers, HiOutlineArrowTrendingUp } from 'react-icons/hi2'

const chartData = [
  { month: 'Jan', patients: 145, treatments: 380, revenue: 28500 },
  { month: 'Feb', patients: 152, treatments: 425, revenue: 32100 },
  { month: 'Mar', patients: 168, treatments: 456, revenue: 35800 },
  { month: 'Apr', patients: 174, treatments: 492, revenue: 38200 },
  { month: 'May', patients: 189, treatments: 518, revenue: 41500 },
  { month: 'Jun', patients: 195, treatments: 547, revenue: 44800 }
]

export function PatientChart() {
  const maxPatients = Math.max(...chartData.map(d => d.patients))
  const maxTreatments = Math.max(...chartData.map(d => d.treatments))

  return (
    <div className="medical-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-2 sm:space-y-0">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
            <HiOutlineChartBarSquare className="w-5 h-5 mr-2 text-primary-500" />
            Patient Analytics
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Monthly overview of patients and treatments
          </p>
        </div>

        <div className="flex flex-wrap items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
            <span className="text-slate-600 dark:text-slate-400">Patients</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full" />
            <span className="text-slate-600 dark:text-slate-400">Treatments</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-80 flex items-end justify-between space-x-2 sm:space-x-3 mb-6">
        {chartData.map((data, index) => (
          <div key={data.month} className="flex-1 flex flex-col items-center space-y-2">
            <div className="w-full flex space-x-1 items-end h-56 sm:h-72">
              {/* Patients Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(data.patients / maxPatients) * 100}%` }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg relative group cursor-pointer"
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {data.patients} patients
                </div>
              </motion.div>

              {/* Treatments Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(data.treatments / maxTreatments) * 100}%` }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1 + 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex-1 bg-gradient-to-t from-secondary-500 to-secondary-400 rounded-t-lg relative group cursor-pointer"
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {data.treatments} treatments
                </div>
              </motion.div>
            </div>

            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              {data.month}
            </span>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-4 rounded-xl border border-primary-200 dark:border-primary-800"
        >
          <div className="flex items-center space-x-2 mb-2">
            <HiOutlineUsers className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Avg. New Patients
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400">
            171
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">per month</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 p-4 rounded-xl border border-secondary-200 dark:border-secondary-800"
        >
          <div className="flex items-center space-x-2 mb-2">
            <HiOutlineChartBarSquare className="w-4 h-4 text-secondary-500" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Total Treatments
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-secondary-600 dark:text-secondary-400">
            2,818
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">this year</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 p-4 rounded-xl border border-success-200 dark:border-success-800"
        >
          <div className="flex items-center space-x-2 mb-2">
            <HiOutlineArrowTrendingUp className="w-4 h-4 text-success-500" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Growth Rate
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-success-600 dark:text-success-400">
            +24.7%
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">vs last year</p>
        </motion.div>
      </div>
    </div>
  )
}