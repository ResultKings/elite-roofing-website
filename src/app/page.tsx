'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Phone, ChevronDown, ChevronLeft, ChevronRight, Shield, Users, BadgeCheck, Award, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import dynamic from 'next/dynamic'
import { services, testimonials, projects, serviceAreas, type Service } from '@/data/mockData'

const ServiceAreaMapFull = dynamic(() => import('@/components/ServiceAreaMapFull'), { ssr: false })

// â"€â"€â"€ Animation helpers â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = (delay = 0.09) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: delay } },
})

function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
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

function Stagger({
  children,
  className = '',
  delay = 0.09,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger(delay)}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// â"€â"€â"€ Hero â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const credentialItems = [
  { label: 'Licensed in Ontario', Icon: Shield },
  { label: '$5M Liability Insurance', Icon: BadgeCheck },
  { label: 'WSIB Covered', Icon: Users },
  { label: 'BBB Accredited Business', Icon: Award },
]

function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-[#080d14]">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Slight overall tint + gradient */}
      <div className="absolute inset-0 bg-[#080d14]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080d14]/75 via-transparent to-transparent" />

      <div className="relative z-10 flex-1 pl-12 md:pl-24 lg:pl-40 w-full pt-28 md:pt-32 flex flex-col justify-center pb-24">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.1)}>

          {/* Display heading */}
          <motion.h1 variants={fadeUp} className="mb-7 md:mb-8 leading-[0.9] tracking-[-0.02em]">
            <span className="block font-display font-black uppercase text-[clamp(2rem,4.5vw,5.5rem)] text-white">
              Ontario Roofing Company
            </span>
            <span className="block font-display font-black uppercase text-[clamp(2rem,4.5vw,5.5rem)] text-white">
              You Can Trust
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-base md:text-lg text-white leading-relaxed mb-10 max-w-lg"
          >
            Professional roofing company across Ontario. Licensed teams for residential, multifamily, and commercial roofing. Always completed with our guaranteed professional result.
          </motion.p>

          {/* Social proof + stats row */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 md:gap-10">
            {/* Stars + photos, links to testimonials */}
            <Link href="/testimonials" className="flex items-center gap-3 hover:opacity-85 transition-opacity">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&auto=format',
                  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&auto=format',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&auto=format',
                ].map((src, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#080d14] flex-shrink-0">
                    <Image src={src} alt="Client" fill sizes="32px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <span className="font-sans text-xs text-white/70">
                  <span className="text-white font-semibold">4.9</span> on Google
                </span>
              </div>
            </Link>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/20" />

            {/* Stat 1 */}
            <div>
              <div className="font-display font-black text-[clamp(1.2rem,2vw,1.8rem)] text-white leading-none">2,500+</div>
              <div className="font-sans text-[10px] text-white/50 tracking-widest uppercase mt-1">Roofs Completed</div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/20" />

            {/* Stat 2 */}
            <div>
              <div className="font-display font-black text-[clamp(1.2rem,2vw,1.8rem)] text-white leading-none">20+</div>
              <div className="font-sans text-[10px] text-white/50 tracking-widest uppercase mt-1">Years in Business</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Credentials bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#06090f]/70 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5">
          <div className="flex items-center justify-between gap-4">
            {credentialItems.map(({ label, Icon }, i) => (
              <div key={i} className="flex items-center gap-2.5 flex-1 justify-center">
                <Icon className="w-4 h-4 text-white/50 flex-shrink-0" />
                <span className="font-sans text-xs font-bold tracking-wide text-white whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// â"€â"€â"€ Credentials (replaces icon-heavy trust badges) â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function TickerBanner() {
  const items = [
    { type: 'service', text: 'Residential Roofing' },
    { type: 'badge',   text: '5★ Rated' },
    { type: 'service', text: 'Commercial Roofing' },
    { type: 'location',text: 'Mississauga, Ontario' },
    { type: 'service', text: 'Roof Repair' },
    { type: 'badge',   text: 'GAF Master Elite' },
    { type: 'service', text: 'Storm Damage Restoration' },
    { type: 'location',text: 'Vaughan & Surrounding Areas' },
    { type: 'service', text: 'Gutter Systems' },
    { type: 'badge',   text: '500+ Reviews' },
    { type: 'service', text: 'Skylight Installation' },
    { type: 'badge',   text: 'Licensed & Insured' },
    { type: 'service', text: 'Residential' },
    { type: 'location',text: 'Toronto · Oakville · Vaughan' },
    { type: 'service', text: 'Commercial' },
    { type: 'badge',   text: '25 Year Warranty' },
  ]
  const doubled = [...items, ...items]

  return (
    <div className="bg-[#080d14] border-b border-white/5 overflow-hidden py-4 select-none">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2.5 flex-shrink-0 px-6">
            <span className={['text-[8px]', item.type === 'badge' ? 'text-[#D0000F]' : 'text-white/30'].join(' ')}>
              ●
            </span>
            <span
              className={[
                'font-sans text-[10px] font-semibold',
                item.type === 'badge' ? 'text-[#D0000F]' : 'text-white/80',
              ].join(' ')}
            >
              {item.text}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Services Highlight ───────────────────────────────────────────────────────

function ServicesHighlightSection() {
  const serviceLinks = [
    { label: 'Roof Replacement', href: '/services/roof-replacement' },
    { label: 'Roof Repairs', href: '/services/roof-repair' },
    { label: 'Storm Damage Restoration', href: '/services/storm-damage-restoration' },
    { label: 'Metal Roofing', href: '/services/metal-roofing' },
    { label: 'Flat Roofing', href: '/services/flat-roofing' },
    { label: 'Gutter Systems', href: '/services/gutter-systems' },
    { label: 'Skylight Installation', href: '/services/skylight-installation' },
    { label: 'Multi-Family Roofing', href: '/services/multi-family-roofing' },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left: Text */}
          <FadeIn className="h-full">
            <div className="flex flex-col justify-between h-full py-4 lg:py-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-8 leading-tight">
                  Quality You Can Count On
                </h2>
                <p className="font-sans text-sm font-medium text-[#374151] leading-relaxed mb-6">
                  As your full service roofing contractor, we work only with top quality materials and manufacturer certified installation methods to deliver results that protect your home for decades. We are proud to be Ontario&apos;s number one provider of:
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 mb-10">
                  {serviceLinks.map((s) => (
                    <span key={s.href} className="font-sans text-sm font-medium">
                      <Link
                        href={s.href}
                        className="text-[#D0000F] hover:text-[#A5000A] hover:underline transition-colors duration-200"
                      >
                        {s.label}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <Button href="/about" variant="primary" size="md">
                  About Our Company
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right: Image */}
          <FadeIn delay={0.1} className="h-full">
            <div className="relative min-h-[420px] lg:h-full overflow-hidden rounded-xl">
              <Image
                src="/quality-section-aerial.webp"
                alt="Elite Roofing aerial view of completed residential roof"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

function StandardSection() {
  const cards = [
    {
      icon: <Award className="w-7 h-7 text-white" />,
      title: 'GAF Master Elite Certified',
      desc: 'Only the top 2% of roofing contractors in North America earn this designation, guaranteeing manufacturer backed installation and the best warranty coverage available.',
    },
    {
      icon: <Shield className="w-7 h-7 text-white" />,
      title: '25-Year Written Warranty',
      desc: 'Every project is backed by a comprehensive written workmanship warranty. We stand behind our work long after the last shingle is in place.',
    },
    {
      icon: <BadgeCheck className="w-7 h-7 text-white" />,
      title: 'Honest. Local. Reliable.',
      desc: 'We are a locally owned Ontario company with no franchises and no middlemen, just a skilled local crew committed to doing the job right, every time.',
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/standard-section-aerial.webp"
          alt="Elite Roofing completed residential roof"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1120]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <FadeIn className="text-center mb-14">
          <p className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-white/50 mb-4">
            The Standard
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Why Choose Elite Roofing?
          </h2>
          <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl mx-auto">
            We hold ourselves to a higher standard. From the first call to the final inspection, we deliver the expertise and care your home deserves.
          </p>
        </FadeIn>

        {/* Feature cards */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" delay={0.12}>
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#D0000F] flex items-center justify-center mb-5 flex-shrink-0">
                {card.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0f172a] mb-3 leading-tight">
                {card.title}
              </h3>
              <p className="font-sans text-sm text-[#374151] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}


// â"€â"€â"€ Services â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const serviceDescriptions: Record<string, string> = {
  'roof-replacement': 'A full roof replacement means starting fresh with premium materials selected for Ontario\'s climate. We handle complete tear off, decking inspection and repair, ice and water barrier installation, and a new roofing system backed by a manufacturer warranty, all completed by our GAF Master Elite certified crew.',
  'roof-repair': 'Whether it\'s a handful of lifted shingles, a persistent leak around a chimney, or storm damage across multiple areas, our repair team diagnoses the root cause before touching a single nail. We\'ll give you an honest assessment, fix it right the first time, and document the work with photos.',
  'storm-damage-restoration': 'After a major storm, acting quickly protects your home and your insurance claim. We perform a detailed damage assessment, provide full photo documentation, work directly with your adjuster, and restore your roof to pre-storm condition, often with little to no out of pocket cost through your policy.',
  'gutter-systems': 'Properly functioning gutters are the first line of defence against foundation damage, basement flooding, and fascia rot. We install seamless aluminum gutters custom fabricated on site, gutter guards to eliminate debris buildup, and complete downspout systems that move water well away from your home.',
  'skylight-installation': 'A well placed skylight transforms a dark room with natural light and can significantly improve ventilation. We install VELUX and other premium units with flashing systems that create a truly watertight seal, no more leaks, no condensation problems, just clean light and a beautiful finish.',
  'metal-roofing': 'Standing seam and exposed fastener metal roofing systems offer a 50+ year lifespan, superior wind and hail resistance, and outstanding energy efficiency. We install metal roofing on both residential and commercial properties across Ontario, with a full range of profiles and finishes.',
  'flat-roofing': 'Flat and low slope roofs require specialized systems designed to handle Ontario\'s freeze thaw cycles and heavy snow loads. We install TPO, EPDM, and modified bitumen membranes with fully adhered details at every penetration, parapet, and drain to prevent the ponding and seam failures that cause most flat roof problems.',
  'multi-family-roofing': 'Large multi-unit residential properties demand a roofing contractor with the capacity and coordination to minimize disruption to residents. We plan phased work schedules, maintain clear site access at all times, and deliver consistent workmanship across every unit, from townhouse complexes to mid-rise condominiums.',
}

function ServiceCard({ service, className = '' }: { service: Service; className?: string }) {
  const desc = serviceDescriptions[service.slug] ?? service.shortDescription
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative block rounded-xl overflow-hidden transition-shadow duration-500 bg-[#0f172a] ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
        />
        {/* Permanent dark base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        {/* Hover tint — dark, not red */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
      </div>

      {/* Default state: name + "+" at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex items-end justify-between group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">{service.title}</h3>
        <span className="font-sans text-2xl font-light text-white/70 leading-none pb-0.5">+</span>
      </div>

      {/* Hover state: name + description + arrow */}
      <div className="absolute inset-0 p-6 z-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{service.title}</h3>
        <p className="font-sans text-sm text-white/80 leading-relaxed mb-5 line-clamp-4">{desc}</p>
        <span className="font-sans text-sm font-medium text-white inline-flex items-center gap-2">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}

function ServicesSection() {
  const serviceOrder = [
    'roof-replacement',
    'roof-repair',
    'metal-roofing',
    'flat-roofing',
    'multi-family-roofing',
    'storm-damage-restoration',
    'gutter-systems',
    'skylight-installation',
  ]

  const orderedServices = serviceOrder
    .map(slug => services.find(s => s.slug === slug))
    .filter((s): s is Service => !!s)

  const [firstService, secondService, ...restServices] = orderedServices

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12 text-center">
          <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-5 block">
            OUR SERVICES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-5">
            What Can We Help You With?
          </h2>
          <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed max-w-2xl mx-auto">
            From a single shingle{' '}
            <Link href="/services/roof-repair" className="text-[#D0000F] hover:text-[#A5000A] transition-colors font-medium">
              repairs
            </Link>{' '}
            to complete{' '}
            <Link href="/services/roof-replacement" className="text-[#D0000F] hover:text-[#A5000A] transition-colors font-medium">
              Roof Replacement
            </Link>{' '}
            Projects, Elite Roofing handles every roofing project across Vaughan and surrounding areas.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {firstService && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <ServiceCard service={firstService} className="h-[380px] md:h-[480px]" />
            </motion.div>
          )}
          {secondService && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceCard service={secondService} className="h-[380px] md:h-[480px]" />
            </motion.div>
          )}
          {restServices.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceCard service={service} className="h-[280px] md:h-[320px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Trusted Local Professionals ──────────────────────────────────────────────

function TrustedLocalSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left: Image */}
          <FadeIn className="h-full">
            <div className="relative min-h-[420px] lg:h-full overflow-hidden rounded-xl">
              <Image
                src="/residential-roofing.webp"
                alt="Elite Roofing crew on a residential roof replacement"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Right: Text */}
          <FadeIn delay={0.1} className="h-full">
            <div className="flex flex-col justify-between h-full py-4 lg:py-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-8 leading-tight">
                  Trusted Local Professionals
                </h2>
                <p className="font-sans text-sm font-medium text-[#374151] leading-relaxed mb-5">
                  Elite Roofing is a locally owned and operated roofing contractor serving Vaughan, Toronto, and the surrounding GTA. As a GAF Master Elite certified company, a designation held by only the top 2% of roofers in North America, we bring manufacturer-backed expertise to every project we take on.
                </p>
                <p className="font-sans text-sm font-medium text-[#374151] leading-relaxed mb-10">
                  We understand that a new roof is one of the most significant investments a homeowner makes. That&apos;s why we take the time to fully assess your situation, explain your options clearly, and deliver work that holds up for decades, with a written workmanship warranty to back it up. No pressure. No shortcuts.
                </p>
              </div>
              <div>
                <Button href="/contact" variant="primary" size="md">
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

// â"€â"€â"€ Process â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function ProcessSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Leaflet service area map */}
          <FadeIn>
            <div className="relative aspect-square overflow-hidden rounded-xl max-w-lg mx-auto w-full">
              <ServiceAreaMapFull locations={serviceAreas} focusCity={null} />
            </div>
          </FadeIn>

          {/* Right: Text */}
          <FadeIn delay={0.1}>
            <span className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-5 block">
              Service Area
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
              Proudly Serving Vaughan And Surrounding Areas
            </h2>
            <p className="font-sans text-sm font-medium text-[#374151] leading-relaxed mb-4">
              Elite Roofing covers Vaughan, Toronto, and the Greater Toronto Area, including Richmond Hill, Markham, Brampton, Mississauga, Burlington, Oakville, and surrounding communities.
            </p>
            <p className="font-sans text-sm font-medium text-[#374151] leading-relaxed mb-8">
              Our GAF Master Elite certified crews bring the same quality craftsmanship and care to every job, no matter where you are in the GTA.
            </p>
            <Button href="/service-areas" variant="primary" size="md">
              See All Locations
            </Button>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

// â"€â"€â"€ Featured Projects â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const HOME_PROJECT_SLUGS = [
  'burlington-lakefront-villa',
  'meridian-office-complex',
  'aurora-leak-flashing-repair',
  'whitby-wind-damage-response',
  'thornhill-eavestrough-upgrade',
  'forest-hill-velux-skylight',
  'schomberg-agricultural-metal',
  'riverside-modern-residence',
  'mississauga-condo-corporation',
  'vaughan-complete-tearoff',
]

function ProjectsSection() {
  const base = HOME_PROJECT_SLUGS
    .map(slug => projects.find(p => p.slug === slug))
    .filter(Boolean) as typeof projects
  const VISIBLE = 3
  // Prepend last item + append clones so both left and right loops are seamless
  const looped = [...base.slice(-1), ...base, ...base.slice(0, VISIBLE)]
  const TOTAL = looped.length

  const [pos, setPos] = useState(0)
  const [instant, setInstant] = useState(false)
  const [timerResetKey, setTimerResetKey] = useState(0)

  const dotActive = pos % base.length

  // Snap back to 0 when we reach the clone zone; reset timer after loop completes
  useEffect(() => {
    if (pos >= base.length) {
      const id = setTimeout(() => {
        setInstant(true)
        setPos(0)
        requestAnimationFrame(() => requestAnimationFrame(() => {
          setInstant(false)
          setTimerResetKey(k => k + 1)
        }))
      }, 580)
      return () => clearTimeout(id)
    }
  }, [pos, base.length])

  // Auto-advance, restarts on arrow/dot click and after each loop
  useEffect(() => {
    const id = setInterval(() => {
      setPos(p => (p < base.length ? p + 1 : p))
    }, 4200)
    return () => clearInterval(id)
  }, [timerResetKey, base.length])

  const prev = () => {
    setTimerResetKey(k => k + 1)
    setInstant(false)
    setPos(p => Math.max(0, p >= base.length ? base.length - 1 : p - 1))
  }

  const next = () => {
    setTimerResetKey(k => k + 1)
    setInstant(false)
    setPos(p => (p < base.length ? p + 1 : p))
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Heading row with inline arrows */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-10">
        <div className="flex items-start justify-between gap-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
              Real Homes. Quality Work.
            </h2>
            <div className="w-20 h-px bg-[#0f172a]/20 mb-4" />
            <p className="font-sans text-sm text-[#374151] leading-relaxed max-w-lg">
              Explore some of our latest projects. We are proud to be a part of every homeowners journey.
            </p>
          </FadeIn>
          <div className="flex items-center gap-2 flex-shrink-0 pt-1">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-[#0f172a]/25 hover:border-[#D0000F] hover:text-[#D0000F] text-[#0f172a] flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-[#0f172a]/25 hover:border-[#D0000F] hover:text-[#D0000F] text-[#0f172a] flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width image carousel — section overflow-hidden clips partial cards */}
      <div className="px-1">
        <motion.div
          className="flex"
          style={{ width: `${TOTAL * 100 / VISIBLE}%` }}
          animate={{ x: `-${(pos + 0.5) * (100 / TOTAL)}%` }}
          transition={instant ? { duration: 0 } : { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          {looped.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              style={{ width: `${100 / TOTAL}%` }}
              className="flex-shrink-0 px-1.5 group"
            >
              <Link href="/projects" className="relative block aspect-square overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover tint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-serif text-base md:text-xl font-bold text-white mb-2 leading-snug">{p.title}</h3>
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center gap-1 font-sans text-[11px] text-white/70 uppercase tracking-wider">
                      <MapPin className="w-3 h-3 flex-shrink-0" />{p.location}
                    </span>
                    <span className="font-sans text-[11px] text-white/40">·</span>
                    <span className="font-sans text-[11px] text-white/70 uppercase tracking-wider">{p.category}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <FadeIn className="flex justify-center mt-10">
          <Button href="/projects" variant="primary" size="md">
            View Portfolio
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

// â"€â"€â"€ Testimonials â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const carouselReviews = [
  {
    name: 'Robert Mackenzie',
    location: 'Markham, ON',
    rating: 5,
    quote: 'Elite Roofing did a complete tear-off and replacement on our century home. The crew was on time every single day, they covered all our landscaping and left the yard spotless. The new roof looks incredible and the warranty gives us real peace of mind.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Sarah Johansson',
    location: 'Mississauga, ON',
    rating: 5,
    quote: "We had a significant leak above our retail space that two other companies couldn't find. Elite Roofing diagnosed the issue within an hour and had it fully repaired by end of day. Professional from start to finish. Will only call them going forward.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Thomas Wu',
    location: 'Richmond Hill, ON',
    rating: 5,
    quote: 'After the August storms we had water coming in through three spots. Elite Roofing came out the next morning, gave me a clear written quote with no surprises, and completed all repairs in one day. Fair pricing and excellent work.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Amanda Foster',
    location: 'Burlington, ON',
    rating: 5,
    quote: 'I was dreading getting a new roof but Elite Roofing made the whole process easy. They walked me through every material option, helped with the insurance claim, and finished ahead of schedule. Neighbours have already asked me who did the work.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: "Kevin O'Brien",
    location: 'Oakville, ON',
    rating: 5,
    quote: "Had Elite Roofing install new gutters and downspouts across our entire house. They arrived exactly when they said, the installation was flawless, and the cleanup was immaculate. Can't recommend them enough, a truly professional team.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Patricia Leblanc',
    location: 'Brampton, ON',
    rating: 5,
    quote: 'From the free inspection to the final walkthrough, Elite Roofing exceeded every expectation. The GAF certified materials they used are top quality and the crew treated our home with the utmost respect. An honest, reliable company.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Daniel Park',
    location: 'Vaughan, ON',
    rating: 5,
    quote: 'Called Elite Roofing for a free inspection before selling our home. They were thorough, honest, and gave me a detailed written report same day. No pressure, just good advice. I ended up hiring them to do the repairs and the buyers were thrilled.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Christine Moreau',
    location: 'Thornhill, ON',
    rating: 5,
    quote: 'We needed emergency tarping after a tree fell on our roof during a storm. Elite Roofing was on site within two hours. They secured the damage, gave us a full repair estimate, and completed the full job within the week. Lifesavers.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Marcus Williams',
    location: 'Concord, ON',
    rating: 5,
    quote: 'Elite Roofing replaced the flat roof on our commercial warehouse. The TPO membrane they installed is excellent quality and they completed the project with zero disruption to our operations. On budget, on time, and exceptional workmanship.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Helen Kovacs',
    location: 'Woodbridge, ON',
    rating: 5,
    quote: 'Had three skylights installed by Elite Roofing last spring. The light those skylights bring into our living room is transformative. The installation was leak-free and perfectly finished. The crew cleaned up every bit of debris. Absolutely wonderful.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Andrew Bertrand',
    location: 'King City, ON',
    rating: 5,
    quote: 'Our condo building hired Elite Roofing for a full flat roof replacement. Managing 72 units I was worried about noise and disruption but the crew was incredibly professional. Residents barely noticed the work. Outstanding result from a very skilled team.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Jennifer Tran',
    location: 'Etobicoke, ON',
    rating: 5,
    quote: "I got four quotes for my roof replacement and Elite Roofing wasn't the cheapest, but they were clearly the most professional and thorough. The quality of the final product justified every dollar. I'd make the same choice again without hesitation.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Paul Dimitriou',
    location: 'North York, ON',
    rating: 5,
    quote: 'Elite Roofing repaired significant hail damage on our roof and coordinated directly with our insurance company. They documented everything thoroughly, which made the claim process seamless. Exceptional customer service from day one.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Lisa Nakamura',
    location: 'Stouffville, ON',
    rating: 5,
    quote: 'The team at Elite Roofing replaced all our aging gutters and added leaf guards that have made maintenance so much easier. They were punctual, respectful of our property, and the price was very fair. Genuinely a pleasure to work with.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'George Papadopoulos',
    location: 'Newmarket, ON',
    rating: 5,
    quote: 'Had Elite Roofing inspect our roof before a major renovation. Their inspector was incredibly knowledgeable and honest, told me what truly needed work and what could wait. No upselling, just straight advice. Hired them for the repairs and they were excellent.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&h=80&fit=crop&crop=face',
  },
]

function TestimonialCard({ t }: { t: { name: string; location: string; rating: number; quote: string; image: string } }) {
  return (
    <div className="bg-white p-8 flex flex-col hover:shadow-lg transition-shadow duration-300 rounded-xl">
      <div className="flex gap-0.5 mb-6">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>
      <blockquote className="font-sans text-sm text-[#374151] leading-relaxed mb-6 flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-5 border-t border-[#f1f5f9]">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#e7e5e4]">
          <Image src={t.image} alt={t.name} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <div className="font-sans text-sm font-semibold text-[#0f172a] leading-tight">{t.name}</div>
          <div className="font-sans text-xs text-\[#374151\] mt-0.5">{t.location}</div>
        </div>
      </div>
    </div>
  )
}

function TestimonialsSection() {
  const base = carouselReviews
  const VISIBLE = 3
  const looped = [...base, ...base.slice(0, VISIBLE)]
  const TOTAL = looped.length

  const [pos, setPos] = useState(0)
  const [instant, setInstant] = useState(false)
  const [timerResetKey, setTimerResetKey] = useState(0)

  useEffect(() => {
    if (pos >= base.length) {
      const id = setTimeout(() => {
        setInstant(true)
        setPos(0)
        requestAnimationFrame(() => requestAnimationFrame(() => {
          setInstant(false)
          setTimerResetKey(k => k + 1)
        }))
      }, 580)
      return () => clearTimeout(id)
    }
  }, [pos, base.length])

  useEffect(() => {
    const id = setInterval(() => {
      setPos(p => (p < base.length ? p + 1 : p))
    }, 5000)
    return () => clearInterval(id)
  }, [timerResetKey, base.length])

  const prev = () => {
    setTimerResetKey(k => k + 1)
    setInstant(false)
    setPos(p => Math.max(0, p >= base.length ? base.length - 1 : p - 1))
  }

  const next = () => {
    setTimerResetKey(k => k + 1)
    setInstant(false)
    setPos(p => (p < base.length ? p + 1 : p))
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <FadeIn className="text-center mb-10">
          <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-5">
            What Our Clients Say
          </h2>
          <Link href="/testimonials" className="flex items-center justify-center gap-3 mb-6 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="flex items-center">
              {[
                'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&auto=format',
              ].map((src, i) => (
                <div key={i} className={`relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#fafaf9] shadow-sm flex-shrink-0${i > 0 ? ' -ml-2' : ''}`}>
                  <Image src={src} alt="Client" fill sizes="32px" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <p className="font-sans text-xs text-[#374151] tracking-wide">
              4.9 out of 5 across 300 Google reviews
            </p>
          </Link>
          <div className="flex justify-center">
            <a
              href="https://customerreviews.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#f59e0b] text-[#0f172a] font-sans text-base font-semibold hover:bg-[#d97706] transition-all duration-300"
            >
              Leave a Google Review
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="flex items-center gap-3 md:gap-5 px-2 md:px-6 lg:px-10 mt-8">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-md bg-[#f1f0ef] border border-[#c8c5bf] shadow-sm hover:bg-[#D0000F] hover:border-[#D0000F] hover:text-white text-[#0f172a] flex items-center justify-center transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 min-w-0 overflow-hidden py-4 -my-4">
          <motion.div
            className="flex"
            style={{ width: `${TOTAL * 100 / VISIBLE}%` }}
            animate={{ x: `-${pos * (100 / TOTAL)}%` }}
            transition={instant ? { duration: 0 } : { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            {looped.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                style={{ width: `${100 / TOTAL}%` }}
                className="flex-shrink-0 px-2"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={next}
          aria-label="Next review"
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-md bg-[#f1f0ef] border border-[#c8c5bf] shadow-sm hover:bg-[#D0000F] hover:border-[#D0000F] hover:text-white text-[#0f172a] flex items-center justify-center transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-3 px-8 py-3 bg-[#D0000F] hover:bg-[#A5000A] rounded-md font-sans text-sm font-semibold text-white transition-colors duration-200"
        >
          Show More Reviews
        </Link>
      </div>
    </section>
  )
}

// â"€â"€â"€ FAQ â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const homeFAQs = [
  {
    question: 'How do I know if I need a roof repair or a full replacement?',
    answer:
      'As a general guide: if your roof is under 15 years old and the damage is localized, repair is almost always the right call. If your roof is over 20 years old, shows widespread granule loss, or has multiple leak points, replacement delivers far better value over the next 10 years. Our free inspection includes an honest, photo documented assessment with zero sales pressure.',
  },
  {
    question: "Does homeowner's insurance cover roof damage?",
    answer:
      "In most cases, yes, if the damage was caused by a sudden event like a storm, hail, high winds, or a falling tree. Standard homeowner's policies cover sudden and accidental damage but not normal wear or neglect. Our team provides complete written documentation of all damage, including photographs and a professional assessment, at no charge, suitable for direct submission to your insurance carrier.",
  },
  {
    question: 'How long does a residential roof replacement take?',
    answer:
      'A typical 2,000 to 3,000 sq ft residential roof takes one to two days for a full replacement using architectural asphalt shingles. Larger homes or premium materials like natural slate or standing seam metal take proportionally longer, typically three to five days. We always provide a confirmed project schedule in writing before work begins.',
  },
  {
    question: 'What areas of Ontario does Elite Roofing serve?',
    answer:
      'We serve Vaughan and surrounding areas, including Markham, Richmond Hill, Aurora, Newmarket, Brampton, Mississauga, and Burlington, along with surrounding communities. If you are unsure whether we cover your area, call us directly.',
    link: { text: 'View all areas we serve.', href: '/service-areas' },
  },
  {
    question: 'What warranty comes with a new roof from Elite Roofing?',
    answer:
      "Every new roof installation comes with two layers of protection: a manufacturer's material warranty, typically 30 years for architectural shingles and lifetime for GAF Timberline HDZ, and our own 10 year Elite Roofing workmanship warranty covering any installation related failures. All warranty documents are provided in writing at project completion.",
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-10 lg:mb-14">
          <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-5">
            Frequently Asked
          </h2>
        </FadeIn>

        <div className="space-y-2">
          {homeFAQs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  className={[
                    'border transition-colors duration-300',
                    isOpen ? 'border-[#D0000F]/50' : 'border-[#e7e5e4] hover:border-[#D0000F]/30',
                  ].join(' ')}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base md:text-lg font-semibold text-[#0f172a] leading-snug">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-[#D0000F]" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-6 border-t border-[#e7e5e4]">
                          <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed pt-5">
                            {faq.answer}
                            {faq.link && (
                              <> <Link href={faq.link.href} className="text-[#D0000F] hover:underline">{faq.link.text}</Link></>
                            )}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn className="mt-10 text-center">
          <p className="font-sans text-sm text-\[#374151\] mb-4">Have a question not listed here?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#D0000F] hover:text-[#A5000A] transition-colors"
          >
            Ask Us Directly <ChevronRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

// â"€â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function CTASection() {
  return (
    <section className="py-20 md:py-24 lg:py-28 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-white/60 mb-5 block">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Protect Your Investment?
          </h2>
          <p className="font-sans text-base text-white/50 leading-relaxed mb-10">
            Get a free, no obligation roof inspection from Ontario&apos;s most trusted
            roofing specialists. We assess your roof, answer every question, and provide
            a transparent written quote at no cost to you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get Free Estimate
            </Button>
            <a
              href="tel:+19055550198"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/5 font-sans text-base font-semibold transition-all duration-300 rounded-md whitespace-nowrap"
            >
              (905) 555-0198
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// â"€â"€â"€ Page â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrustedLocalSection />
      <ProjectsSection />
      <ServicesHighlightSection />
      <StandardSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

