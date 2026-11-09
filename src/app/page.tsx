'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Phone, ChevronDown, ChevronLeft, ChevronRight, Shield, Users, BadgeCheck, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import { services, testimonials, projects, type Service } from '@/data/mockData'

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
              <div className="font-display font-black text-[clamp(1.2rem,2vw,1.8rem)] text-white leading-none">2,400+</div>
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

function StandardSection() {
  return (
    <section className="relative min-h-[67vh] flex items-center overflow-hidden">
      {/* Background image anchored right */}
      <div className="absolute inset-0">
        <Image
          src="/standard-bg.webp"
          alt="Elite Roofing craftsmanship"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '30% center' }}
        />
        {/* Black left side fading at 50% across */}
        <div className="absolute inset-0 bg-gradient-to-r from-black from-[40%] via-black/70 via-[55%] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 pl-4 md:pl-12 lg:pl-24 pr-4 md:pr-8 lg:pr-0 py-16 md:py-20 w-full">
        <FadeIn className="max-w-full lg:max-w-[45%]">
          <p className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-5">
            The Standard
          </p>

          <h2 className="font-display font-bold text-[clamp(2.4rem,4.2vw,5.2rem)] leading-[0.92] tracking-[-0.02em] mb-8">
            <span className="text-white">We don&apos;t just fix roofs.</span><br />
            <span className="text-[#D0000F]">We restore them.</span>
          </h2>

          {/* Body text */}
          <p className="font-sans text-[15px] text-white/70 leading-relaxed mb-10 max-w-[85%]">
            Our GAF Master Elite certification and 25 year warranty guarantee that premium results aren&apos;t a promise, they&apos;re our standard.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-start gap-8 lg:gap-14 pt-7 border-t border-white/10">
            {[
              { value: '2,400+', label: 'Roofs Completed' },
              { value: '500+', label: 'Five Star Reviews' },
              { value: '20+', label: 'Years in Business' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-stretch">
                {i > 0 && <div className="hidden lg:block w-px bg-white/15 mr-14 self-stretch" />}
                <div>
                  <div className="font-display font-black text-[clamp(1.4rem,2.2vw,2.5rem)] text-[#D0000F] leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[12px] text-white/40 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}


// â"€â"€â"€ Services â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function ServiceCard({ service, className = '' }: { service: Service; className?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative block rounded-xl hover:shadow-2xl transition-shadow duration-500 bg-[#0f172a] ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#D0000F] via-[#D0000F]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="font-serif text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="font-sans text-sm text-white/70 leading-relaxed mb-4 line-clamp-2">{service.shortDescription}</p>
        <span className="font-sans text-sm text-white/50 group-hover:text-white/80 inline-flex items-center gap-2 transition-colors duration-300">
          Learn More
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

// â"€â"€â"€ Process â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Free Estimate',
      desc: 'We assess your roof at zero cost, documenting every issue with photographs and a detailed written report.',
    },
    {
      number: '02',
      title: 'Transparent Proposal',
      desc: 'A clear, itemized quote with material options, timeline, and warranty terms. No pressure. No hidden fees.',
    },
    {
      number: '03',
      title: 'Expert Execution',
      desc: 'Our master certified crew completes your project on schedule, with daily site clean-up and a final walkthrough.',
    },
  ]

  return (
    <section className="relative px-4 md:px-8 lg:px-16 overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/process-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a1120]/85" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Simple. Transparent. Reliable.
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-12" delay={0.12}>
          {steps.map(step => (
            <motion.div key={step.number} variants={fadeUp}>
              <h3 className="font-serif text-2xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="font-sans text-sm text-white/45 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </Stagger>

        <FadeIn className="mt-14 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Get Free Estimate
          </Button>
        </FadeIn>
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
  // Append clones of first VISIBLE items so wrapping never animates rightward
  const looped = [...base, ...base.slice(0, VISIBLE)]
  const TOTAL = looped.length // 8

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
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <FadeIn className="text-center mb-10 lg:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
            Explore Our Clients Projects
          </h2>
        </FadeIn>
      </div>

      <div className="flex items-center gap-3 md:gap-5 px-2 md:px-6 lg:px-10">
        <button
          onClick={prev}
          aria-label="Previous project"
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-md bg-[#f1f0ef] border border-[#c8c5bf] shadow-sm hover:bg-[#D0000F] hover:border-[#D0000F] hover:text-white text-[#0f172a] flex items-center justify-center transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 min-w-0 overflow-hidden">
          <motion.div
            className="flex"
            style={{ width: `${TOTAL * 100 / VISIBLE}%` }}
            animate={{ x: `-${pos * (100 / TOTAL)}%` }}
            transition={instant ? { duration: 0 } : { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            {looped.map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                style={{ width: `${100 / TOTAL}%` }}
                className="flex-shrink-0 px-2 group"
              >
                <Link href="/projects" className="overflow-hidden bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-500 rounded-xl block">
                  <div className="relative aspect-[4/3] bg-[#0f172a] overflow-hidden rounded-t-xl">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 border-t border-[#e7e5e4]">
                    <h3 className="font-serif text-base font-semibold text-[#0f172a] mb-1 leading-snug">{p.title}</h3>
                    <p className="font-sans text-xs text-\[#374151\] mb-3">{p.location} &middot; {p.year}</p>
                    <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={next}
          aria-label="Next project"
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-md bg-[#f1f0ef] border border-[#c8c5bf] shadow-sm hover:bg-[#D0000F] hover:border-[#D0000F] hover:text-white text-[#0f172a] flex items-center justify-center transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center items-center gap-2 mt-8">
          {base.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setTimerResetKey(k => k + 1)
                setInstant(false)
                setPos(i)
              }}
              aria-label={`Go to project ${i + 1}`}
              className={[
                'rounded-none transition-all duration-300',
                i === dotActive
                  ? 'w-6 h-2.5 bg-[#D0000F]'
                  : 'w-2.5 h-2.5 bg-[#e2e0db] hover:bg-[#D0000F]/50',
              ].join(' ')}
            />
          ))}
        </div>

        <FadeIn className="flex justify-center mt-8">
          <Button href="/projects" variant="primary" size="md">
            View More Projects
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

// â"€â"€â"€ Testimonials â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const extraTestimonials = [
  {
    id: 4,
    name: 'James Patterson',
    location: 'Oakville, ON',
    rating: 5,
    quote: 'Elite Roofing replaced our 25 year old roof in two days. The crew was professional, clean, and communicated every step. Our new roof looks stunning and we feel confident it will last for decades.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
  },
  {
    id: 5,
    name: 'Sandra Kim',
    location: 'Vaughan, ON',
    rating: 5,
    quote: 'After hail damage, Elite Roofing came out the very next day and covered our roof with tarps to prevent further damage. The insurance claim process was seamless with their documentation. Truly above and beyond.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
  },
  {
    id: 6,
    name: 'Michael Torres',
    location: 'Brampton, ON',
    rating: 5,
    quote: 'I got three quotes and Elite Roofing was not the cheapest, but their inspection report was the most detailed and their warranty terms were the best. Six months in and the roof looks and performs perfectly.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format',
  },
  {
    id: 7,
    name: 'Linda Bergstrom',
    location: 'Mississauga, ON',
    rating: 5,
    quote: 'The team was respectful of our property, cleaned up completely each day, and finished on time. The project manager kept us informed every morning. I would recommend Elite Roofing to anyone in Vaughan and surrounding areas.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format',
  },
  {
    id: 8,
    name: 'David Chen',
    location: 'Markham, ON',
    rating: 5,
    quote: 'Elite Roofing identified a ventilation issue during inspection that two other companies missed. Fixing it alongside the new shingles has dramatically reduced our attic moisture. Exceptional knowledge and honest advice.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
  },
  {
    id: 9,
    name: 'Rachel Moore',
    location: 'Burlington, ON',
    rating: 5,
    quote: 'We had a flat roof that was causing ongoing leaks into our commercial space. Elite Roofing installed a new TPO membrane system and solved the problem permanently. Their warranty gives us complete peace of mind.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format',
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
      <blockquote className="font-serif text-base md:text-[1.05rem] text-[#0f172a] leading-relaxed mb-6 flex-1 italic">
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
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto">
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
            <p className="font-sans text-xs text-\[#374151\] tracking-wide">
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

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map(t => (
            <motion.div key={t.id} variants={fadeUp}>
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </Stagger>

        {/* Show More toggle */}
        <div className="flex justify-center mt-10 mb-2">
          <button
            onClick={() => setShowMore(prev => !prev)}
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#D0000F] hover:bg-[#A5000A] rounded-md font-sans text-sm font-semibold text-white transition-colors duration-200"
          >
            <span className="text-[8px]">{showMore ? '▼' : '▶'}</span>
            Show More Reviews
          </button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              key="extra-reviews"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0 } }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {extraTestimonials.map(t => (
                  <TestimonialCard key={t.id} t={t} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
      <ProcessSection />
      <ProjectsSection />
      <StandardSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

