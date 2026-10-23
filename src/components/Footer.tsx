import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const serviceLinks = [
  { href: '/services/residential-roofing', label: 'Residential Roofing' },
  { href: '/services/commercial-roofing', label: 'Commercial Roofing' },
  { href: '/services/roof-repair', label: 'Roof Repair' },
  { href: '/services/storm-damage-restoration', label: 'Storm Damage' },
  { href: '/services/gutter-systems', label: 'Gutter Systems' },
  { href: '/services/skylight-installation', label: 'Skylights' },
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Our Projects' },
  { href: '/contact', label: 'Get Free Quote' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Credentials strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'GAF Master Elite', sub: 'Certified Contractor' },
              { title: 'Licensed and Insured', sub: 'Ontario Provincial License' },
              { title: 'A+ BBB Accredited', sub: 'Better Business Bureau' },
              { title: '4.9 Star Rating', sub: '300+ Verified Reviews' },
            ].map(({ title, sub }) => (
              <div key={title} className="border-l border-[#b59b74]/30 pl-4">
                <div className="font-serif text-sm font-semibold text-white leading-tight">{title}</div>
                <div className="font-sans text-[10px] text-white/35 tracking-wider mt-0.5 uppercase">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 â€” Company */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">ELITE</span>
              <span className="font-sans text-[10px] font-semibold tracking-[0.4em] uppercase text-[#8c6d41] mt-0.5">
                ROOFING
              </span>
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
                className="w-9 h-9 bg-white/5 hover:bg-[#b59b74]/20 flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-4 h-4 text-white/40 hover:text-[#b59b74]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/5 hover:bg-[#b59b74]/20 flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 text-white/40 hover:text-[#b59b74]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-white/5 hover:bg-[#b59b74]/20 flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-4 h-4 text-white/40 hover:text-[#b59b74]" />
              </a>
            </div>
          </div>

          {/* Column 2 â€” Services */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#b59b74] mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-[#b59b74] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#b59b74]/40 group-hover:bg-[#b59b74] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 â€” Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#b59b74] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-[#b59b74] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#b59b74]/40 group-hover:bg-[#b59b74] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 border border-[#b59b74]/20 bg-[#b59b74]/5">
              <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                Emergency Service
              </p>
              <a
                href="tel:+19055550198"
                className="font-serif text-lg font-semibold text-[#b59b74] hover:text-[#cdb99a] transition-colors"
              >
                (905) 555-0198
              </a>
            </div>
          </div>

          {/* Column 4 â€” Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#b59b74] mb-6">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b59b74] mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-white/50 leading-relaxed">
                  3250 Ridgeway Dr, Unit 12
                  <br />
                  Mississauga, ON L5L 5Z9
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#b59b74] flex-shrink-0" />
                <a
                  href="tel:+19055550198"
                  className="font-sans text-sm text-white/50 hover:text-[#b59b74] transition-colors"
                >
                  (905) 555-0198
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#b59b74] flex-shrink-0" />
                <a
                  href="mailto:info@eliteroofingon.ca"
                  className="font-sans text-sm text-white/50 hover:text-[#b59b74] transition-colors"
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
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Elite Roofing LLC. All rights reserved.
          </p>
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
          </div>
        </div>
      </div>
    </footer>
  )
}

