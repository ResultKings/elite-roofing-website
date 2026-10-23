'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isTransparent = !scrolled && pathname === '/' && !mobileOpen

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
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex flex-col leading-none">
                <span
                  className={[
                    'font-serif text-xl font-bold tracking-tight transition-colors duration-300',
                    isTransparent ? 'text-white' : 'text-[#0f172a]',
                  ].join(' ')}
                >
                  ELITE
                </span>
                <span className="font-sans text-[10px] font-semibold tracking-[0.4em] uppercase text-[#8a6928] -mt-0.5">
                  ROOFING
                </span>
              </div>
              <div className="w-px h-8 bg-[#c9a55a]/40 ml-1" />
              <div className="w-1 h-1 rounded-full bg-[#c9a55a] ml-1" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'relative font-sans text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300',
                      'after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-[#c9a55a]',
                      'after:transition-all after:duration-300',
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                      isTransparent
                        ? isActive
                          ? 'text-[#c9a55a]'
                          : 'text-white/80 hover:text-white'
                        : isActive
                        ? 'text-[#c9a55a]'
                        : 'text-[#0f172a]/70 hover:text-[#0f172a]',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+19055550198"
                className={[
                  'flex items-center gap-2 font-sans text-xs font-medium transition-colors duration-300',
                  isTransparent ? 'text-white/70 hover:text-white' : 'text-[#0f172a]/60 hover:text-[#c9a55a]',
                ].join(' ')}
              >
                <Phone className="w-3.5 h-3.5" />
                (905) 555-0198
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 bg-[#c9a55a] text-[#0f172a] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300 rounded-full"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className={[
                'md:hidden p-2 transition-colors duration-300',
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
            className="fixed inset-0 z-40 bg-[#0f172a] pt-20 px-6 flex flex-col"
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
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
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
                Get Free Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

