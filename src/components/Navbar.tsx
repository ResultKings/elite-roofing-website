'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react'

type ServiceCategory = 'roofing' | 'installation' | 'repair'

const categoryLabels: { id: ServiceCategory; label: string }[] = [
  { id: 'roofing', label: 'ROOFING SERVICES' },
  { id: 'installation', label: 'INSTALLATION' },
  { id: 'repair', label: 'REPAIR AND INSPECTION' },
]

const roofingLinks = [
  { href: '/services/residential-roofing', label: 'Residential Roofing' },
  { href: '/services/commercial-roofing', label: 'Commercial Roofing' },
  { href: '/services/multi-family-roofing', label: 'Multi-Family Roofing' },
  { href: '/services/roof-replacement', label: 'Roof Replacement' },
  { href: '/services/metal-roofing', label: 'Metal Roofing' },
  { href: '/services/flat-roofing', label: 'Flat Roofing' },
]

const installationLinks = [
  { href: '/services/gutter-systems', label: 'Gutter Systems' },
  { href: '/services/skylight-installation', label: 'Skylight Installation' },
]

const repairSections = [
  {
    title: 'Repair',
    links: [
      { href: '/services/roof-repair', label: 'Roof Repair' },
      { href: '/services/storm-damage-restoration', label: 'Storm Damage Restoration' },
      { href: '/services/roof-tarping', label: 'Roof Tarping' },
    ],
  },
  {
    title: 'Inspection',
    links: [
      { href: '/services/roof-inspection', label: 'Roof Inspection' },
    ],
  },
]

const serviceLinks = [
  ...roofingLinks,
  ...installationLinks,
  ...repairSections.flatMap((s) => s.links),
]

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/service-areas', label: 'Areas Served' },
  { href: '/projects', label: 'Projects' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('roofing')
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
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

  const openServices = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setServicesOpen(true)
  }

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setServicesOpen(false), 120)
  }

  const isTransparent = !scrolled && pathname === '/' && !mobileOpen && !servicesOpen
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
        <div className="w-full px-6 md:px-12 lg:px-40 xl:px-48">
          <div className="flex items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0 mr-4 lg:mr-8">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/er-logo.png" alt="" fill sizes="40px" className="object-contain" />
              </div>
              <div className="w-px h-8 bg-[#c9a55a]/40" />
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
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-5">
              {navLinks.slice(0, 2).map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'relative font-sans text-[13px] font-extrabold tracking-[0.1em] uppercase transition-colors duration-300 whitespace-nowrap',
                      'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#c9a55a]',
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

              {/* Services dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={[
                    'flex items-center gap-1 font-sans text-[13px] font-extrabold tracking-[0.1em] uppercase transition-colors duration-300 whitespace-nowrap',
                    'relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#c9a55a] after:transition-all after:duration-300',
                    isServicesActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                    isTransparent
                      ? isServicesActive ? 'text-[#c9a55a]' : 'text-white hover:text-white/80'
                      : isServicesActive ? 'text-[#c9a55a]' : 'text-[#0f172a] hover:text-[#c9a55a]',
                  ].join(' ')}
                >
                  Roofing Services
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {navLinks.slice(2).map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'relative font-sans text-[13px] font-extrabold tracking-[0.1em] uppercase transition-colors duration-300 whitespace-nowrap',
                      'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#c9a55a]',
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
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5 flex-shrink-0 ml-4 lg:ml-8">
              <a
                href="tel:+19055550198"
                className={[
                  'flex items-center gap-2 font-sans text-[13px] font-bold tracking-[0.08em] uppercase transition-colors duration-300 whitespace-nowrap',
                  isTransparent ? 'text-white hover:text-white/80' : 'text-[#0f172a]/70 hover:text-[#c9a55a]',
                ].join(' ')}
              >
                <Phone className="w-3.5 h-3.5" />
                (905) 555-0198
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-[#041D35] text-white font-sans text-[10px] font-bold tracking-[0.18em] uppercase hover:bg-[#0a2a4a] transition-colors duration-300 rounded-full whitespace-nowrap"
              >
                Schedule an Estimate
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className={[
                'lg:hidden ml-auto p-2 transition-colors duration-300',
                isTransparent ? 'text-white' : 'text-[#0f172a]',
              ].join(' ')}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mega Menu Dropdown — fixed, full width */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white shadow-2xl border-t border-[#e7e5e4] hidden lg:block"
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
          >
            <div className="max-w-7xl mx-auto px-8 lg:px-14 py-10 flex gap-0">

              {/* Left column — category headings */}
              <div className="w-60 flex-shrink-0 flex flex-col justify-start gap-5 pr-10 border-r border-[#e7e5e4]">
                {categoryLabels.map((cat) => (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    className={[
                      'text-left font-sans font-black text-xl xl:text-2xl uppercase tracking-tight leading-tight transition-colors duration-200',
                      activeCategory === cat.id
                        ? 'text-[#c9a55a]'
                        : 'text-[#0f172a]/25 hover:text-[#0f172a]/50',
                    ].join(' ')}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Middle column — service links */}
              <div className="flex-1 px-10 min-h-[180px]">
                {activeCategory === 'roofing' && (
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {roofingLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={[
                          'block py-2.5 font-sans text-sm font-medium tracking-wide border-b border-[#f1ede8] transition-colors duration-200',
                          pathname === link.href
                            ? 'text-[#c9a55a]'
                            : 'text-[#0f172a]/70 hover:text-[#c9a55a]',
                        ].join(' ')}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}

                {activeCategory === 'installation' && (
                  <div className="flex flex-col gap-1">
                    {installationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={[
                          'block py-2.5 font-sans text-sm font-medium tracking-wide border-b border-[#f1ede8] transition-colors duration-200',
                          pathname === link.href
                            ? 'text-[#c9a55a]'
                            : 'text-[#0f172a]/70 hover:text-[#c9a55a]',
                        ].join(' ')}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}

                {activeCategory === 'repair' && (
                  <div className="flex flex-col gap-5">
                    {repairSections.map((section) => (
                      <div key={section.title}>
                        <p className="font-sans text-[10px] font-black tracking-[0.25em] uppercase text-[#c9a55a] mb-2">
                          {section.title}
                        </p>
                        <div className="flex flex-col gap-0">
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={[
                                'block py-2.5 font-sans text-sm font-medium tracking-wide border-b border-[#f1ede8] transition-colors duration-200',
                                pathname === link.href
                                  ? 'text-[#c9a55a]'
                                  : 'text-[#0f172a]/70 hover:text-[#c9a55a]',
                              ].join(' ')}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right column — featured image + info */}
              <div className="w-64 xl:w-72 flex-shrink-0 flex flex-col">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="/service-residential-roofing.jpg"
                    alt="Elite Roofing — Residential"
                    fill
                    sizes="288px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="font-sans text-xs font-semibold text-[#0f172a] leading-snug">
                    Providing Excellent Roofing Services In Ontario Since 2004.
                  </p>
                  <a
                    href="https://www.google.com/maps/place/216+Rivermede+Rd+Unit+7,+Vaughan,+ON+L4K+3M6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-1.5 text-[#64748b] hover:text-[#c9a55a] transition-colors duration-200"
                  >
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-xs leading-snug">
                      216 Rivermede Rd Unit 7, Vaughan, ON L4K 3M6
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  Roofing Services
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
                className="inline-flex items-center justify-center px-8 py-4 bg-[#041D35] text-white font-sans text-sm font-medium tracking-[0.2em] uppercase hover:bg-[#0a2a4a] transition-colors rounded-full"
              >
                Get Free Estimate
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
