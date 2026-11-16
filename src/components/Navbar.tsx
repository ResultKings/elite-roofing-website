'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

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
  { href: '/service-areas', label: 'Service Areas' },
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
  const [navHovered, setNavHovered] = useState(false)
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
    closeTimeout.current = setTimeout(() => setServicesOpen(false), 150)
  }

  const closeServices = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setServicesOpen(false)
  }

  const isTransparent = !scrolled && pathname === '/' && !mobileOpen && !servicesOpen && !navHovered
  const isServicesActive = pathname.startsWith('/services')

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[1001]',
          servicesOpen ? '' : 'transition-all duration-500',
          isTransparent
            ? 'bg-[#06090f]/50 backdrop-blur-sm'
            : 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]',
        ].join(' ')}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => { scheduleClose(); setNavHovered(false) }}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 ml-0 lg:ml-28 xl:ml-44">
              <Image
                src="/elite-roofing-logo-new.webp"
                alt="Elite Roofing"
                width={280}
                height={80}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav — centred in remaining space */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7">
              <div className="flex items-center gap-5 xl:gap-7" onMouseEnter={closeServices}>
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
              </div>

              {/* Services dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={openServices}
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

              <div className="flex items-center gap-5 xl:gap-7" onMouseEnter={closeServices}>
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
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0 mr-6 lg:mr-14 xl:mr-20" onMouseEnter={closeServices}>
              <a
                href="tel:+19055550198"
                className={[
                  'flex items-center gap-2 px-4 py-2 font-sans text-sm font-semibold transition-all duration-300 whitespace-nowrap rounded-md border',
                  isTransparent
                    ? 'text-white border-white/40 hover:border-white hover:bg-white/10'
                    : 'text-[#0f172a] border-[#d1d5db] hover:border-[#D0000F] hover:text-[#D0000F]',
                ].join(' ')}
              >
                <Phone className={`w-4 h-4 flex-shrink-0 ${isTransparent ? 'text-white/80' : 'text-[#D0000F]'}`} />
                (905) 555-0198
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2 bg-[#D0000F] text-white font-sans text-base font-semibold hover:bg-[#A5000A] transition-colors duration-300 rounded-md whitespace-nowrap"
              >
                Free Estimate
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
      </header>

      {/* Mega Menu Dropdown — fixed, full width */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.08 }}
            className="fixed top-16 left-0 right-0 z-[1000] bg-white shadow-2xl border-t border-[#e7e5e4] hidden lg:block"
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

              {/* Service links */}
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
                  <div className="grid grid-cols-2 gap-x-8">
                    {repairSections.map((section) => (
                      <div key={section.title}>
                        <p className="font-sans text-[10px] font-black tracking-[0.25em] uppercase text-[#D0000F] mb-2">
                          {section.title}
                        </p>
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
                    ))}
                  </div>
                )}
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
            className="fixed inset-0 z-40 bg-[#0f172a] pt-16 px-6 flex flex-col overflow-y-auto"
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
                className="inline-flex items-center justify-center px-8 py-4 bg-[#041D35] text-white font-sans text-base font-semibold hover:bg-[#0a2a4a] transition-colors rounded-md"
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
