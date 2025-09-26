"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineCalendarDays,
  HiOutlineHeart,
  HiOutlineDocumentText,
  HiOutlineChartBarSquare,
  HiOutlineCog6Tooth,
  HiOutlineChevronRight,
  HiOutlineSparkles,
  HiOutlineClipboardDocumentList
} from 'react-icons/hi2'

const menuItems = [
  {
    name: 'Dashboard',
    icon: HiOutlineHome,
    href: '/',
    active: true
  },
  {
    name: 'Patients',
    icon: HiOutlineUsers,
    href: '/patients',
    badge: 247,
    submenu: [
      { name: 'All Patients', href: '/patients' },
      { name: 'Add Patient', href: '/patients/add' },
      { name: 'Patient History', href: '/patients/history' }
    ]
  },
  {
    name: 'Appointments',
    icon: HiOutlineCalendarDays,
    href: '/appointments',
    badge: 12,
    submenu: [
      { name: 'Today\'s Schedule', href: '/appointments/today' },
      { name: 'All Appointments', href: '/appointments' },
      { name: 'Book New', href: '/appointments/book' }
    ]
  },
  {
    name: 'Treatment Plans',
    icon: HiOutlineHeart,
    href: '/treatments',
    submenu: [
      { name: 'Active Plans', href: '/treatments/active' },
      { name: 'Create Plan', href: '/treatments/create' },
      { name: 'Templates', href: '/treatments/templates' }
    ]
  },
  {
    name: 'Medical Records',
    icon: HiOutlineDocumentText,
    href: '/records'
  },
  {
    name: 'Reports',
    icon: HiOutlineChartBarSquare,
    href: '/reports',
    submenu: [
      { name: 'Patient Progress', href: '/reports/progress' },
      { name: 'Treatment Outcomes', href: '/reports/outcomes' },
      { name: 'Financial Reports', href: '/reports/financial' }
    ]
  },
  {
    name: 'AI Insights',
    icon: HiOutlineSparkles,
    href: '/insights',
    badge: 'NEW',
    badgeColor: 'primary'
  },
  {
    name: 'Prescriptions',
    icon: HiOutlineClipboardDocumentList,
    href: '/prescriptions'
  }
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    )
  }

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: -320, opacity: 0 }
  }

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        variants={sidebarVariants}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`fixed left-0 top-16 bottom-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-200/60 dark:border-slate-700/60 ${
          isCollapsed ? 'w-20' : 'w-64'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Collapse toggle - Desktop only */}
          <div className="hidden lg:flex justify-end mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <motion.div
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiOutlineChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 2 }}
                  className={`group relative flex items-center p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    item.active
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-medical'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  onClick={() => item.submenu && toggleExpanded(item.name)}
                >
                  <item.icon
                    className={`w-6 h-6 ${isCollapsed ? 'mx-auto' : 'mr-3'} ${
                      item.active ? 'text-white' : 'text-slate-500 group-hover:text-primary-500'
                    }`}
                  />

                  {!isCollapsed && (
                    <>
                      <span className="font-medium flex-1 text-sm">{item.name}</span>

                      {item.badge && (
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          item.badgeColor === 'primary'
                            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                        }`}>
                          {item.badge}
                        </span>
                      )}

                      {item.submenu && (
                        <motion.div
                          animate={{ rotate: expandedItems.includes(item.name) ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <HiOutlineChevronRight className="w-4 h-4" />
                        </motion.div>
                      )}
                    </>
                  )}

                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                      {item.name}
                      <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45"></div>
                    </div>
                  )}
                </motion.div>

                {/* Submenu */}
                {!isCollapsed && item.submenu && expandedItems.includes(item.name) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-6 mt-2 space-y-1 border-l-2 border-primary-200 dark:border-primary-800 pl-4"
                  >
                    {item.submenu.map((subItem) => (
                      <motion.div
                        key={subItem.name}
                        whileHover={{ x: 2 }}
                        className="flex items-center p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg cursor-pointer transition-all duration-200"
                      >
                        <span>{subItem.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Settings - Always at bottom */}
          {!isCollapsed && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <motion.div
                whileHover={{ x: 2 }}
                className="flex items-center p-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-xl cursor-pointer transition-all duration-200"
              >
                <HiOutlineCog6Tooth className="w-6 h-6 mr-3" />
                <span className="font-medium text-sm">Settings</span>
              </motion.div>
            </div>
          )}
        </div>
      </motion.aside>
    </>
  )
}