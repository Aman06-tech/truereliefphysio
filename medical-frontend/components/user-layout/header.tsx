"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  HiOutlineHeart,
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlinePhone,
  HiOutlineMapPin
} from 'react-icons/hi2'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Appointment', href: '/appointments', isButton: true }
  ]

  if (!mounted) return null

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <HiOutlinePhone className="w-4 h-4" />
              <span>9625891710 | 8449555400</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>Home Care & Online Consultation</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span>Available 8AM - 8PM</span>
            <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white dark:bg-slate-900 shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-medical"
              >
                <HiOutlineHeart className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  TrueRelief
                </h1>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                  Physiotherapy
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.isButton
                      ? 'medical-button px-6 py-3'
                      : item.active
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {theme === 'dark' ? (
                  <HiOutlineSun className="w-5 h-5" />
                ) : (
                  <HiOutlineMoon className="w-5 h-5" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 lg:hidden">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {theme === 'dark' ? (
                  <HiOutlineSun className="w-5 h-5" />
                ) : (
                  <HiOutlineMoon className="w-5 h-5" />
                )}
              </motion.button>

              {/* Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isMenuOpen ? (
                  <HiOutlineXMark className="w-6 h-6" />
                ) : (
                  <HiOutlineBars3 className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden border-t border-slate-200 dark:border-slate-700 py-4 space-y-4"
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block ${
                      item.isButton
                        ? 'medical-button text-center py-3 mx-4'
                        : item.active
                        ? 'text-primary-600 dark:text-primary-400 font-semibold px-4 py-2'
                        : 'text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-4'
                    } transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}