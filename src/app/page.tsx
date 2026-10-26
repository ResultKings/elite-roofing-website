'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Phone, ChevronDown, ChevronRight, Shield, Users, BadgeCheck, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import { services, testimonials, projects } from '@/data/mockData'

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
            <span className="block font-display font-black uppercase text-[clamp(2rem,4.5vw,5.5rem)] text-[#c9a55a]">
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
            {/* Stars + photos — links to testimonials */}
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
                    <Star key={i} className="w-3 h-3 fill-[#c9a55a] text-[#c9a55a]" />
                  ))}
                </div>
                <span className="font-sans text-xs text-white/70">
                  <span className="text-white font-semibold">5.0</span> on Google
                </span>
              </div>
            </Link>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/20" />

            {/* Stat 1 */}
            <div>
              <div className="font-display font-black text-[clamp(1.2rem,2vw,1.8rem)] text-[#c9a55a] leading-none">2,400+</div>
              <div className="font-sans text-[10px] text-white/50 tracking-widest uppercase mt-1">Roofs Completed</div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/20" />

            {/* Stat 2 */}
            <div>
              <div className="font-display font-black text-[clamp(1.2rem,2vw,1.8rem)] text-[#c9a55a] leading-none">20+</div>
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
    { type: 'location',text: 'GTA & Ontario' },
    { type: 'service', text: 'Gutter Systems' },
    { type: 'badge',   text: '500+ Reviews' },
    { type: 'service', text: 'Skylight Installation' },
    { type: 'badge',   text: 'Licensed & Insured' },
    { type: 'service', text: 'Residential' },
    { type: 'location',text: 'Toronto · Oakville · Vaughan' },
    { type: 'service', text: 'Commercial' },
    { type: 'badge',   text: '25-Year Warranty' },
  ]
  const doubled = [...items, ...items]

  return (
    <div className="bg-[#080d14] border-b border-white/5 overflow-hidden py-4 select-none">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2.5 flex-shrink-0 px-6">
            <span className={['text-[8px]', item.type === 'badge' ? 'text-[#c9a55a]' : 'text-white/30'].join(' ')}>
              ●
            </span>
            <span
              className={[
                'font-sans text-[10px] font-semibold tracking-[0.25em] uppercase',
                item.type === 'badge' ? 'text-[#c9a55a]' : 'text-white/80',
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
          <p className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-5">
            The Standard
          </p>

          <h2 className="font-display font-bold text-[clamp(2.4rem,4.2vw,5.2rem)] leading-[0.92] tracking-[-0.02em] mb-8">
            <span className="text-white">We don&apos;t just fix roofs.</span><br />
            <span className="text-[#c9a55a]">We restore them.</span>
          </h2>

          {/* Body text */}
          <p className="font-sans text-[15px] text-white/70 leading-relaxed mb-10 max-w-[85%]">
            Our GAF Master Elite certification and 25-year warranty guarantee that premium results aren&apos;t a promise, they&apos;re our standard.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-start gap-8 lg:gap-14 pt-7 border-t border-white/10">
            {[
              { value: '2,400+', label: 'Roofs Completed' },
              { value: '500+', label: 'Five-Star Reviews' },
              { value: '20+', label: 'Years in Business' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-stretch">
                {i > 0 && <div className="hidden lg:block w-px bg-white/15 mr-14 self-stretch" />}
                <div>
                  <div className="font-display font-black text-[clamp(1.4rem,2.2vw,2.5rem)] text-[#c9a55a] leading-none mb-2">
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

function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
                What We Do
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
                Our Roofing Services<br />in Ontario
              </h2>
            </div>
            <div>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                <strong className="font-semibold text-[#0f172a]">Elite Roofing</strong> provides roofing services throughout Ontario, including{' '}
                <Link href="/services/roof-inspection" className="text-[#c9a55a] hover:text-[#a87d3a] transition-colors">inspections</Link>,{' '}
                <Link href="/services/roof-repair" className="text-[#c9a55a] hover:text-[#a87d3a] transition-colors">repairs</Link>, and{' '}
                <Link href="/services/roof-replacement" className="text-[#c9a55a] hover:text-[#a87d3a] transition-colors">full roof replacements</Link>. With our skilled team, exceptional workmanship, high-quality materials, and reliable service, we help safeguard your home or business while enhancing its value. Count on us for roofing services that protect your investment.
              </p>
            </div>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(service => (
            <motion.div key={service.id} variants={fadeUp} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-white border border-[#e7e5e4] overflow-hidden hover:border-[#c9a55a]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-0.5 h-full min-h-[380px] rounded-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a] flex-shrink-0 rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-semibold text-[#0f172a] mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#64748b] leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <div className="border-t border-[#e7e5e4] pt-4 mt-5 flex justify-center">
                    <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#0f172a] tracking-[0.15em] uppercase group-hover:text-[#c9a55a] group-hover:gap-3 transition-all duration-300">
                      {service.title} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

// â"€â"€â"€ Process â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Free Inspection',
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
      desc: 'Our master-certified crew completes your project on schedule, with daily site clean-up and a final walkthrough.',
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
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
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
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Get Free Inspection
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

// â"€â"€â"€ Featured Projects â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function ProjectsSection() {
  const featured = projects.filter(p => p.featured).slice(0, 3)

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10 lg:mb-14">
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
            Recent Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Featured Projects
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map(project => (
            <motion.div key={project.id} variants={fadeUp} className="group">
              <div className="relative overflow-hidden aspect-[4/3] bg-[#0f172a] mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/25 transition-colors duration-400" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#c9a55a] text-white font-sans text-[10px] font-semibold tracking-[0.25em] uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#0f172a] mb-1 group-hover:text-[#c9a55a] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-sans text-xs text-[#94a3b8]">
                {project.location} &middot; {project.year}
              </p>
            </motion.div>
          ))}
        </Stagger>

        <FadeIn className="flex justify-center mt-10">
          <Button href="/projects" variant="ghost" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            View All Projects
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
    quote: 'Elite Roofing replaced our 25-year-old roof in two days. The crew was professional, clean, and communicated every step. Our new roof looks stunning and we feel confident it will last for decades.',
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
    quote: 'The team was respectful of our property, cleaned up completely each day, and finished on time. The project manager kept us informed every morning. I would recommend Elite Roofing to anyone in the GTA.',
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
    <div className="bg-white p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-0.5 mb-6">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[#c9a55a] text-[#c9a55a]" />
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
          <div className="font-sans text-xs text-[#94a3b8] mt-0.5">{t.location}</div>
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
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-5">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#c9a55a] text-[#c9a55a]" />
              ))}
            </div>
            <p className="font-sans text-xs text-[#94a3b8] tracking-wide">
              4.9 out of 5 across 300 Google reviews
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://customerreviews.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#c9a55a] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-all duration-300"
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
            className="inline-flex items-center gap-3 px-8 py-3 border border-[#0f172a]/30 rounded-full font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-[#0f172a] hover:border-[#0f172a] transition-colors duration-200"
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
      'As a general guide: if your roof is under 15 years old and the damage is localized, repair is almost always the right call. If your roof is over 20 years old, shows widespread granule loss, or has multiple leak points, replacement delivers far better value over the next 10 years. Our free inspection includes an honest, photo-documented assessment with zero sales pressure.',
  },
  {
    question: "Does homeowner's insurance cover roof damage?",
    answer:
      "In most cases, yes, if the damage was caused by a sudden event like a storm, hail, high winds, or a falling tree. Standard homeowner's policies cover sudden and accidental damage but not normal wear or neglect. Our team provides complete written documentation of all damage, including photographs and a professional assessment, at no charge, suitable for direct submission to your insurance carrier.",
  },
  {
    question: 'How long does a residential roof replacement take?',
    answer:
      'A typical 2,000 to 3,000 sq ft residential roof takes one to two days for a full replacement using architectural asphalt shingles. Larger homes or premium materials like natural slate or standing-seam metal take proportionally longer, typically three to five days. We always provide a confirmed project schedule in writing before work begins.',
  },
  {
    question: 'What areas of Ontario does Elite Roofing serve?',
    answer:
      'We serve the Greater Toronto Area, including Toronto, Mississauga, Brampton, Vaughan, Markham, Oakville, Burlington, and Hamilton, along with surrounding communities. If you are unsure whether we cover your area, call us directly.',
  },
  {
    question: 'What warranty comes with a new roof from Elite Roofing?',
    answer:
      "Every new roof installation comes with two layers of protection: a manufacturer's material warranty, typically 30 years for architectural shingles and lifetime for GAF Timberline HDZ, and our own 10-year Elite Roofing workmanship warranty covering any installation-related failures. All warranty documents are provided in writing at project completion.",
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-10 lg:mb-14">
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
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
                    isOpen ? 'border-[#c9a55a]/50' : 'border-[#e7e5e4] hover:border-[#c9a55a]/30',
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
                      <ChevronDown className="w-5 h-5 text-[#c9a55a]" />
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
                          <p className="font-sans text-sm text-[#64748b] leading-relaxed pt-5">
                            {faq.answer}
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
          <p className="font-sans text-sm text-[#94a3b8] mb-4">Have a question not listed here?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#c9a55a] hover:text-[#a87d3a] transition-colors"
          >
            Ask us directly <ChevronRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

// â"€â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function CTASection() {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop&q=80&auto=format"
          alt="Elite roofing work"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0f172a]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-5 block">
            Start Today
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Protect Your Investment?
          </h2>
          <p className="font-sans text-base text-white/50 leading-relaxed mb-10">
            Get a free, no-obligation roof inspection from Ontario&apos;s most trusted
            roofing specialists. We assess your roof, answer every question, and provide
            a transparent written quote at no cost to you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Schedule Free Inspection
            </Button>
            <a
              href="tel:+19055550198"
              className="inline-flex items-center gap-3 font-sans text-sm text-white/50 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-[#c9a55a]" />
              (905) 555-0198
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {['No obligation, ever', 'Response within 24 hours', 'Across the GTA and Ontario'].map(item => (
              <span key={item} className="font-sans text-xs text-white/30 tracking-wide">{item}</span>
            ))}
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

