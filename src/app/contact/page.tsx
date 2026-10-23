'use client'

import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

// Leaflet must not render on the server
const ServiceAreaMap = dynamic(() => import('@/components/ServiceAreaMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#1a2035] flex items-center justify-center">
      <span className="font-sans text-xs text-white/30 tracking-widest uppercase">Loading mapâ€¦</span>
    </div>
  ),
})

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const hours = [
  { day: 'Monday to Friday', time: '7:00 AM to 6:00 PM' },
  { day: 'Saturday', time: '8:00 AM to 3:00 PM' },
  { day: 'Sunday', time: 'Emergency calls only' },
]

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(905) 555-0198',
    href: 'tel:+19055550198',
    note: 'Available for emergency calls 24/7',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@eliteroofingon.ca',
    href: 'mailto:info@eliteroofingon.ca',
    note: 'We respond within one business day',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '3250 Ridgeway Dr, Unit 12, Mississauga, ON',
    href: 'https://maps.google.com',
    note: 'Serving the Greater Toronto Area',
  },
]


export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 bg-[#0f172a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #c9a55a 0, #c9a55a 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="mb-5">
              <span className="font-sans text-[10px] font-semibold tracking-[0.4em] uppercase text-[#c9a55a]">
                Get In Touch
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            >
              Let&apos;s Talk About
              <br />
              <span className="text-[#c9a55a]">Your Project.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-white/55 max-w-lg leading-relaxed">
              Whether you need a free inspection, have questions about materials, or are ready
              to schedule your installation. Our team is here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Contact Details */}
            <div className="lg:col-span-2 space-y-10">

              <FadeIn>
                <h2 className="font-serif text-2xl font-semibold text-[#0f172a] mb-2">
                  Contact Details
                </h2>
                <div className="w-10 h-[2px] bg-[#c9a55a] mb-8" />

                <div className="space-y-7">
                  {contactDetails.map(({ icon: Icon, label, value, href, note }) => (
                    <div key={label} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#c9a55a]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#c9a55a]/20 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-[#c9a55a]" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-[#64748b] mb-1">
                          {label}
                        </p>
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-sans text-sm font-medium text-[#0f172a] hover:text-[#c9a55a] transition-colors duration-200 leading-snug"
                        >
                          {value}
                        </a>
                        <p className="font-sans text-xs text-[#94a3b8] mt-0.5">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Business Hours */}
              <FadeIn delay={0.1}>
                <div className="border-t border-[#e7e5e4] pt-8">
                  <div className="flex items-center gap-3 mb-5">
                    <Clock className="w-4 h-4 text-[#c9a55a]" />
                    <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#0f172a]">
                      Business Hours
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {hours.map(({ day, time }) => (
                      <li key={day} className="flex items-center justify-between">
                        <span className="font-sans text-sm text-[#64748b]">{day}</span>
                        <span className="font-sans text-sm font-medium text-[#0f172a]">{time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-sans text-xs text-[#94a3b8] border-t border-[#e7e5e4] pt-4">
                    For storm emergencies, call our emergency line at any time. We maintain
                    an on-call crew 24 hours a day.
                  </p>
                </div>
              </FadeIn>

              {/* Why Elite Roofing â€” light, cohesive styling */}
              <FadeIn delay={0.15}>
                <div className="bg-slate-50 border border-[#e7e5e4] p-6">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-5">
                    Why Elite Roofing
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      'Licensed and $5M insured in Ontario',
                      'GAF Master Elite, top 2% nationally',
                      '10-year written workmanship warranty',
                      'Free inspections, no obligation',
                      '300+ five-star Google reviews',
                    ].map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9a55a] flex-shrink-0" />
                        <span className="font-sans text-sm text-[#475569] leading-snug">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <FadeIn className="lg:col-span-3" delay={0.05}>
              <div className="bg-white border border-[#e7e5e4] p-8 md:p-12 shadow-sm">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-semibold text-[#0f172a] mb-2">
                    Request a Free Inspection
                  </h2>
                  <div className="w-10 h-[2px] bg-[#c9a55a] mb-4" />
                  <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                    Fill out the form below and a specialist will reach out within one
                    business day to schedule your no-obligation roof assessment.
                  </p>
                </div>
                <ContactForm />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Interactive Service Area Map */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#c9a55a] mb-3 block">
              Where We Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              Proudly Serving Ontario
            </h2>
            <div className="w-10 h-[2px] bg-[#c9a55a] mx-auto" />
          </div>

          {/* Map container â€” ssr:false component renders inside */}
          <div className="h-[420px] overflow-hidden border border-white/10">
            <ServiceAreaMap />
          </div>

          <p className="text-center font-sans text-xs text-white/30 mt-5 tracking-wide">
            Click a marker to see service area details &middot; Scroll or pinch to zoom
          </p>
        </div>
      </section>
    </>
  )
}

