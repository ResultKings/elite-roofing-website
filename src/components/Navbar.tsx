'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react'

type ServiceCategory = 'roofing' | 'repair'

const categoryLabels: { id: ServiceCategory; label: string }[] = [
  { id: 'roofing', label: 'ROOFING SERVICES' },
  { id: 'repair', label: 'INSTALLATION AND REPAIR' },
]

const roofingLinks = [
  { href: '/services/multi-family-roofing', label: 'Multi-Family Roofing' },
  { href: '/services/roof-replacement', label: 'Roof Replacement' },
  { href: '/services/metal-roofing', label: 'Metal Roofing' },
  { href: '/services/flat-roofing', label: 'Flat Roofing' },
]

const repairSections = [
  {
    title: 'Installation',
    links: [
      { href: '/services/gutter-systems', label: 'Gutter Systems' },
      { href: '/services/skylight-installation', label: 'Skylight Installation' },
    ],
  },
  {
    title: 'Repair',
    links: [
      { href: '/services/roof-repair', label: 'Roof Repairs' },
      { href: '/services/storm-damage-restoration', label: 'Storm Damage Restoration' },
    ],
  },
]

const serviceLinks = [
  ...roofingLinks,
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
          'fixed top-0 left-0 right-0 z-[1001] transition-all duration-500',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]',
        ].join(' ')}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 ml-10 lg:ml-24 xl:ml-36">
              <Image
                src="/elite-roofing-logo-new.webp"
                alt="Elite Roofing"
                width={280}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav — centred in remaining space */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7">
              {navLinks.slice(0, 2).map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'relative font-sans text-[16px] font-extrabold tracking-[0.08em] uppercase transition-colors duration-300 whitespace-nowrap',
                      'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#D0000F]',
                      'after:transition-all after:duration-300',
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                      isTransparent
                        ? isActive ? 'text-[#D0000F]' : 'text-white hover:text-white/80'
                        : isActive ? 'text-[#D0000F]' : 'text-[#0f172a] hover:text-[#D0000F]',
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
                    'flex items-center gap-1 font-sans text-[16px] font-extrabold tracking-[0.08em] uppercase transition-colors duration-300 whitespace-nowrap',
                    'relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#D0000F] after:transition-all after:duration-300',
                    isServicesActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                    isTransparent
                      ? isServicesActive ? 'text-[#D0000F]' : 'text-white hover:text-white/80'
                      : isServicesActive ? 'text-[#D0000F]' : 'text-[#0f172a] hover:text-[#D0000F]',
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
                      'relative font-sans text-[16px] font-extrabold tracking-[0.08em] uppercase transition-colors duration-300 whitespace-nowrap',
                      'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#D0000F]',
                      'after:transition-all after:duration-300',
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                      isTransparent
                        ? isActive ? 'text-[#D0000F]' : 'text-white hover:text-white/80'
                        : isActive ? 'text-[#D0000F]' : 'text-[#0f172a] hover:text-[#D0000F]',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5 flex-shrink-0 mr-6 lg:mr-14 xl:mr-20">
              <a
                href="tel:+19055550198"
                className={[
                  'flex items-center gap-2 font-sans text-[15px] font-bold tracking-[0.08em] uppercase transition-colors duration-300 whitespace-nowrap',
                  isTransparent ? 'text-white hover:text-white/80' : 'text-[#0f172a]/70 hover:text-[#D0000F]',
                ].join(' ')}
              >
                <Phone className="w-3.5 h-3.5" />
                (905) 555-0198
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 bg-[#D0000F] text-white font-sans text-sm font-semibold hover:bg-[#A5000A] transition-colors duration-300 rounded-md whitespace-nowrap"
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
            className="fixed top-20 left-0 right-0 z-[1000] bg-white shadow-2xl border-t border-[#e7e5e4] hidden lg:block"
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
                        ? 'text-[#D0000F]'
                        : 'text-[#0f172a] hover:text-[#0f172a]/70',
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
                            ? 'text-[#D0000F]'
                            : 'text-[#0f172a] hover:text-[#D0000F]',
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
                        <p className="font-sans text-[10px] font-black tracking-[0.25em] uppercase text-[#D0000F] mb-2">
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
                                  ? 'text-[#D0000F]'
                                  : 'text-[#0f172a] hover:text-[#D0000F]',
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
                    className="flex items-start gap-1.5 text-[#1e293b] hover:text-[#D0000F] transition-colors duration-200"
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
                        isActive ? 'text-[#D0000F]' : 'text-white hover:text-[#D0000F]',
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
                    isServicesActive ? 'text-[#D0000F]' : 'text-white',
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
                            pathname === sl.href ? 'text-[#D0000F]' : 'text-white/70 hover:text-[#D0000F]',
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
                <Phone className="w-4 h-4 text-[#D0000F]" />
                (905) 555-0198
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#041D35] text-white font-sans text-sm font-medium hover:bg-[#0a2a4a] transition-colors rounded-md"
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
