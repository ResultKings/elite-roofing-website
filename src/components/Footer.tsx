import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const roofingServices = [
  { href: '/services/roof-repair', label: 'Roof Repairs' },
  { href: '/services/storm-damage-restoration', label: 'Storm Damage Restoration' },
  { href: '/services/gutter-systems', label: 'Gutter Systems' },
  { href: '/services/skylight-installation', label: 'Skylight Installation' },
  { href: '/services/metal-roofing', label: 'Metal Roofing' },
  { href: '/services/flat-roofing', label: 'Flat Roofing' },
  { href: '/services/multi-family-roofing', label: 'Multi Family Roofing' },
  { href: '/services/roof-replacement', label: 'Roof Replacement' },
]

const quickLinks = [
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/service-areas#office-location', label: 'Office Location' },
  { href: '/about', label: 'About Us' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/projects', label: 'Projects' },
  { href: '/testimonials', label: 'Testimonials' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d1f35] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Column 1–2, Company */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/elite-roofing-logo-new.webp"
                alt="Elite Roofing"
                width={280}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="font-sans text-sm text-white/50 leading-relaxed mb-5">
              Ontario&apos;s premier roofing specialist. Delivering master craftsmanship, premium
              materials, and lasting protection for homes and businesses since 2004.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-[#D0000F] flex items-center justify-center transition-colors duration-300 rounded"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-[#D0000F] flex items-center justify-center transition-colors duration-300 rounded"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-white/10 hover:bg-[#D0000F] flex items-center justify-center transition-colors duration-300 rounded"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2, Roofing Services */}
          <div>
            <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-white mb-5">
              Roofing Services
            </h3>
            <ul className="space-y-2">
              {roofingServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-[#D0000F] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D0000F]/40 group-hover:bg-[#D0000F] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4, Quick Links */}
          <div>
            <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-[#D0000F] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D0000F]/40 group-hover:bg-[#D0000F] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5, Contact Us */}
          <div>
            <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-white mb-5">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-white/50 leading-snug">
                  216 Rivermede Rd Unit 7, Vaughan, ON L4K 3M6
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href="tel:+19055550198"
                  className="font-sans text-sm text-white/50 hover:text-[#D0000F] transition-colors"
                >
                  (905) 555-0198
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href="mailto:info@eliteroofingon.ca"
                  className="font-sans text-sm text-white/50 hover:text-[#D0000F] transition-colors"
                >
                  info@eliteroofingon.ca
                </a>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="font-sans text-xs text-white/30 uppercase tracking-wider mb-1">Hours</p>
              <p className="font-sans text-sm text-white/50">Mon–Fri: 7:00 AM – 6:00 PM</p>
              <p className="font-sans text-sm text-white/50">Sat: 8:00 AM – 3:00 PM</p>
            </div>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center w-full px-5 py-2.5 bg-[#D0000F] text-white font-sans text-base font-semibold hover:bg-[#A5000A] transition-colors duration-300 rounded-md"
            >
              Free Estimate
            </Link>
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
