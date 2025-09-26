import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'Admin Dashboard - PainChain Medical Center',
  description: 'Administrative dashboard for healthcare management',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 transition-all duration-300 ease-in-out lg:ml-64">
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}