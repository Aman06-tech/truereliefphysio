import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsentBanner from "@/components/cookie-consent";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "True Relief Physio - Dr. Rajan Sharma | Home Care Physiotherapy",
  description: "Expert physiotherapy services at your doorstep in Gurgaon & Delhi NCR. Dr. Rajan Sharma provides comprehensive home care physiotherapy, manual therapy, and rehabilitation services.",
  keywords: "physiotherapy, home care, Gurgaon, Delhi NCR, Dr Rajan Sharma, physical therapy, rehabilitation, manual therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
