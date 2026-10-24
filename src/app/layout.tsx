import React from 'react'
import type { Metadata } from 'next'
import { Playfair_Display, Inter, Barlow } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eliteroofingon.ca'),
  title: {
    default: 'Elite Roofing | Premium Roofing Solutions in Ontario',
    template: '%s | Elite Roofing Ontario',
  },
  description:
    "Ontario's premier roofing specialist. Master craftsmanship, premium materials, lasting protection. Serving Toronto, Mississauga, Oakville and the GTA. Licensed and insured. Free inspections.",
  keywords: [
    'roofing contractor Ontario',
    'Toronto roofer',
    'Mississauga roofing company',
    'GTA roof replacement',
    'GAF Master Elite roofer Ontario',
    'residential roofing Ontario',
    'commercial roofing Toronto',
    'storm damage roof repair Ontario',
    'slate roofing Oakville',
    'Vaughan roofing contractor',
    'Brampton roof replacement',
    'Markham roofing specialist',
  ],
  openGraph: {
    siteName: 'Elite Roofing',
    title: 'Elite Roofing | Premium Roofing Solutions in Ontario',
    description:
      "Ontario's premier roofing specialist. Master craftsmanship, premium materials, lasting protection. Licensed and insured. Free inspections.",
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Elite Roofing: Premium Roofing Solutions in Ontario',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Roofing | Premium Roofing Solutions in Ontario',
    description:
      "Ontario's premier roofing specialist. Master craftsmanship, premium materials, lasting protection.",
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-site-verification-token',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${playfair.variable} ${inter.variable} ${barlow.variable}`}>
      <body className="bg-[#fafaf9] text-[#0f172a] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
