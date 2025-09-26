"use client"

import { motion } from 'framer-motion'
import { type IconType } from 'react-icons'
import { HiOutlineArrowTrendingUp, HiOutlineArrowTrendingDown } from 'react-icons/hi2'

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: IconType
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  description?: string
}

const colorClasses = {
  primary: {
    gradient: 'from-primary-500 to-primary-600',
    bg: 'bg-primary-100 dark:bg-primary-900',
    text: 'text-primary-600 dark:text-primary-400',
    border: 'border-primary-200 dark:border-primary-800'
  },
  secondary: {
    gradient: 'from-secondary-500 to-secondary-600',
    bg: 'bg-secondary-100 dark:bg-secondary-900',
    text: 'text-secondary-600 dark:text-secondary-400',
    border: 'border-secondary-200 dark:border-secondary-800'
  },
  success: {
    gradient: 'from-success-500 to-success-600',
    bg: 'bg-success-100 dark:bg-success-900',
    text: 'text-success-600 dark:text-success-400',
    border: 'border-success-200 dark:border-success-800'
  },
  warning: {
    gradient: 'from-warning-500 to-warning-600',
    bg: 'bg-warning-100 dark:bg-warning-900',
    text: 'text-warning-600 dark:text-warning-400',
    border: 'border-warning-200 dark:border-warning-800'
  },
  danger: {
    gradient: 'from-danger-500 to-danger-600',
    bg: 'bg-danger-100 dark:bg-danger-900',
    text: 'text-danger-600 dark:text-danger-400',
    border: 'border-danger-200 dark:border-danger-800'
  }
}

export function StatsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
  description
}: StatsCardProps) {
  const colors = colorClasses[color]

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -2,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="medical-card relative overflow-hidden group"
    >
      {/* Background gradient overlay */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:opacity-10 transition-opacity`} />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 ${colors.bg} rounded-xl`}>
            <Icon className={`w-6 h-6 ${colors.text}`} />
          </div>

          <div className="flex items-center space-x-1 text-sm">
            {trend === 'up' ? (
              <HiOutlineArrowTrendingUp className="w-4 h-4 text-success-500" />
            ) : (
              <HiOutlineArrowTrendingDown className="w-4 h-4 text-danger-500" />
            )}
            <span className={trend === 'up' ? 'text-success-600' : 'text-danger-600'}>
              {change}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            {title}
          </p>
          {description && (
            <p className="text-slate-500 dark:text-slate-500 text-xs">
              {description}
            </p>
          )}
        </div>

        {/* Pulse indicator */}
        <motion.div
          className={`absolute top-3 right-3 w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  )
}