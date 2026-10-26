'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const serviceLinks = [
  { href: '/services/residential-roofing', label: 'Residential Roofing' },
  { href: '/services/commercial-roofing', label: 'Commercial Roofing' },
  { href: '/services/roof-repair', label: 'Roof Repair' },
  { href: '/services/storm-damage-restoration', label: 'Storm Damage Restoration' },
  { href: '/services/gutter-systems', label: 'Gutter Systems' },
  { href: '/services/skylight-installation', label: 'Skylight Installation' },
  { href: '/services/roof-inspection', label: 'Roof Inspection' },
  { href: '/services/metal-roofing', label: 'Metal Roofing' },
  { href: '/services/flat-roofing', label: 'Flat Roofing' },
  { href: '/services/multi-family-roofing', label: 'Multi-Family Roofing' },
  { href: '/services/roof-replacement', label: 'Roof Replacement' },
  { href: '/services/roof-tarping', label: 'Roof Tarping' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isTransparent = !scrolled && pathname === '/' && !mobileOpen
  const isServicesActive = pathname.startsWith('/services')

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0 mr-4">
              <div className="flex flex-col leading-none">
                <span
                  className={[
                    'font-serif text-xl font-bold tracking-tight transition-colors duration-300',
                    isTransparent ? 'text-white' : 'text-[#0f172a]',
                  ].join(' ')}
                >
                  ELITE
                </span>
                <span className="font-sans text-[10px] font-black tracking-[0.4em] uppercase text-[#c9a55a] -mt-0.5">
                  ROOFING
                </span>
              </div>
              <div className="w-px h-8 bg-[#c9a55a]/40 ml-1" />
              <div className="relative w-8 h-8 ml-1 flex-shrink-0 bg-white rounded-sm p-0.5">
                <Image src="/er-logo.webp" alt="" fill sizes="32px" className="object-contain" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'relative font-sans text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 whitespace-nowrap',
                      'after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-[#c9a55a]',
                      'after:transition-all after:duration-300',
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                      isTransparent
                        ? isActive ? 'text-[#c9a55a]' : 'text-white hover:text-white/80'
                        : isActive ? 'text-[#c9a55a]' : 'text-[#0f172a] hover:text-[#c9a55a]',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {/* Services dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={[
                    'flex items-center gap-1 font-sans text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 whitespace-nowrap',
                    'relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-[#c9a55a] after:transition-all after:duration-300',
                    isServicesActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                    isTransparent
                      ? isServicesActive ? 'text-[#c9a55a]' : 'text-white hover:text-white/80'
                      : isServicesActive ? 'text-[#c9a55a]' : 'text-[#0f172a] hover:text-[#c9a55a]',
                  ].join(' ')}
                >
                  Services
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl border border-[#e7e5e4] py-2 z-50"
                    >
                      {serviceLinks.map((sl) => (
                        <Link
                          key={sl.href}
                          href={sl.href}
                          className={[
                            'block px-5 py-2.5 font-sans text-xs font-medium tracking-wide transition-colors duration-200',
                            pathname === sl.href
                              ? 'text-[#c9a55a] bg-[#fafaf9]'
                              : 'text-[#0f172a]/70 hover:text-[#c9a55a] hover:bg-[#fafaf9]',
                          ].join(' ')}
                        >
                          {sl.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-6 xl:ml-10">
              <a
                href="tel:+19055550198"
                className={[
                  'flex items-center gap-2 font-sans text-xs font-medium transition-colors duration-300',
                  isTransparent ? 'text-white hover:text-white/80' : 'text-[#0f172a]/70 hover:text-[#c9a55a]',
                ].join(' ')}
              >
                <Phone className="w-3.5 h-3.5" />
                (905) 555-0198
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-[#c9a55a] text-[#0f172a] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300 rounded-full whitespace-nowrap"
              >
                Free Inspection
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className={[
                'lg:hidden p-2 transition-colors duration-300',
                isTransparent ? 'text-white' : 'text-[#0f172a]',
              ].join(' ')}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0f172a] pt-20 px-6 flex flex-col overflow-y-auto"
          >
            <nav className="flex flex-col gap-1 mt-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={[
                        'block py-4 border-b border-white/10 font-serif text-2xl font-medium transition-colors duration-200',
                        isActive ? 'text-[#c9a55a]' : 'text-white hover:text-[#c9a55a]',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              {/* Mobile Services expandable */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
              >
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className={[
                    'w-full flex items-center justify-between py-4 border-b border-white/10 font-serif text-2xl font-medium transition-colors duration-200',
                    isServicesActive ? 'text-[#c9a55a]' : 'text-white',
                  ].join(' ')}
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      {serviceLinks.map((sl) => (
                        <Link
                          key={sl.href}
                          href={sl.href}
                          className={[
                            'block py-3 pl-4 border-b border-white/5 font-sans text-base transition-colors duration-200',
                            pathname === sl.href ? 'text-[#c9a55a]' : 'text-white/70 hover:text-[#c9a55a]',
                          ].join(' ')}
                        >
                          {sl.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col gap-4"
            >
              <a
                href="tel:+19055550198"
                className="flex items-center gap-3 text-white/60 font-sans text-sm"
              >
                <Phone className="w-4 h-4 text-[#c9a55a]" />
                (905) 555-0198
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a55a] text-[#0f172a] font-sans text-sm font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors rounded-full"
              >
                Get Free Inspection
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
