import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/user-layout/header'
import { Footer } from '@/components/user-layout/footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PainChain Medical Center - Advanced Pain Management & Rehabilitation',
  description: 'Leading healthcare provider specializing in pain management, physical therapy, and rehabilitation services. Book your appointment today.',
  keywords: ['pain management', 'physical therapy', 'rehabilitation', 'healthcare', 'medical center', 'physiotherapy'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-slate-900">
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              className: 'medical-toast',
              style: {
                background: 'rgb(var(--background))',
                color: 'rgb(var(--foreground))',
                border: '1px solid rgb(20 184 166 / 0.2)',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(20, 184, 166, 0.1)',
              },
              success: {
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}