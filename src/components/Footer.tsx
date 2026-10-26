import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const exploreLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/#services', label: 'Our Services' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/projects', label: 'Projects' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Get Free Inspection' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/contact#service-area', label: 'Office Location' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-9 h-9 flex-shrink-0" style={{ mixBlendMode: 'multiply' }}>
                <Image src="/er-logo.webp" alt="" fill sizes="36px" className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">ELITE</span>
                <span className="font-sans text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a55a] mt-0.5">
                  ROOFING
                </span>
              </div>
            </div>
            <p className="font-sans text-sm text-white/50 leading-relaxed mb-6">
              Ontario&apos;s premier roofing specialist. Delivering master craftsmanship, premium
              materials, and lasting protection for homes and businesses since 2004.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/5 hover:bg-[#c9a55a]/20 flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-4 h-4 text-white/40 hover:text-[#c9a55a]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/5 hover:bg-[#c9a55a]/20 flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 text-white/40 hover:text-[#c9a55a]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-white/5 hover:bg-[#c9a55a]/20 flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-4 h-4 text-white/40 hover:text-[#c9a55a]" />
              </a>
            </div>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a55a] mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-[#c9a55a] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9a55a]/40 group-hover:bg-[#c9a55a] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a55a] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-[#c9a55a] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9a55a]/40 group-hover:bg-[#c9a55a] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a55a] mb-6">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a55a] mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-white/50 leading-relaxed">
                  216 Rivermede Rd Unit 7, Vaughan,
                  <br />
                  ON L4K 3M6, Canada
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a55a] flex-shrink-0" />
                <a
                  href="tel:+19055550198"
                  className="font-sans text-sm text-white/50 hover:text-[#c9a55a] transition-colors"
                >
                  (905) 555-0198
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a55a] flex-shrink-0" />
                <a
                  href="mailto:info@eliteroofingon.ca"
                  className="font-sans text-sm text-white/50 hover:text-[#c9a55a] transition-colors"
                >
                  info@eliteroofingon.ca
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="font-sans text-xs text-white/30 uppercase tracking-wider mb-1">Hours</p>
              <p className="font-sans text-sm text-white/50">Mon to Fri: 7:00 AM to 6:00 PM</p>
              <p className="font-sans text-sm text-white/50">Sat: 8:00 AM to 3:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <p className="font-sans text-xs text-white/30">
              &copy; {new Date().getFullYear()} Elite Roofing LLC. All rights reserved.
            </p>
            <a
              href="https://resultkings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Built by Result Kings
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://customerreviews.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
