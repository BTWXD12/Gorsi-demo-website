import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Elegant serif font for headings - sophisticated and professional
const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

// Modern sans-serif for body text - clean and highly readable
const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

// Monospace font for code/technical content
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FirmName Chartered Accountants",
  description: "Professional accounting and financial advisory services",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${cormorantGaramond.variable} ${plusJakartaSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
