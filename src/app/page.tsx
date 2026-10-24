'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Phone, ChevronDown, ChevronRight } from 'lucide-react'
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#080d14]/60 via-transparent to-transparent" />

      <div className="relative z-10 flex-1 pl-12 md:pl-16 lg:pl-24 w-full pt-28 md:pt-32 flex flex-col justify-center">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.1)}>
          {/* Social proof row */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 md:mb-8">
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
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#c9a55a] text-[#c9a55a]" />
                ))}
              </div>
              <span className="font-sans text-xs text-white/70">
                <span className="text-white font-semibold">5.0</span> on Google &middot; 500+ reviews
              </span>
            </div>
          </motion.div>

          {/* Display heading */}
          <motion.h1 variants={fadeUp} className="mb-8 md:mb-10 leading-[0.9] tracking-[-0.02em]">
            <span className="block font-display font-black uppercase text-[clamp(2rem,4.5vw,5.5rem)] text-[#f0ece4]">
              Master Craftsmanship.
            </span>
            <span className="block font-display font-black uppercase text-[clamp(2rem,4.5vw,5.5rem)] text-[#c9a55a]">
              Premium Results.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-base md:text-lg text-white leading-relaxed mb-8 max-w-sm"
          >
            Exceptional skill and premium materials to every project across Ontario.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Get Free Inspection
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pr-8 md:pr-12 py-4 flex justify-end">
        <div className="flex items-center gap-3">
          <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white">Scroll</span>
          <div className="w-px h-3.5 bg-white/50" />
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

      <div className="relative z-10 pl-12 md:pl-16 lg:pl-24 py-16 md:py-20 w-full">
        <FadeIn className="max-w-[40%]">
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
          <div className="flex items-start gap-14 pt-7 border-t border-white/10">
            {[
              { value: '5.0', label: 'Google Rating' },
              { value: '500+', label: 'Five-Star Reviews' },
              { value: '20+', label: 'Years in Ontario' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-stretch">
                {i > 0 && <div className="w-px bg-white/15 mr-14 self-stretch" />}
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
    <section id="services" className="py-24 px-6 md:px-8 lg:px-16 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
            Our Services
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(service => (
            <motion.div key={service.id} variants={fadeUp}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-white border border-[#e7e5e4] overflow-hidden hover:border-[#c9a55a]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
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
                  <h3 className="font-serif text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#c9a55a] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-6 flex-1">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#c9a55a] tracking-[0.2em] uppercase group-hover:gap-3 transition-all duration-300">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
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
    <section className="py-24 px-6 md:px-8 lg:px-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
            How It Works
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Simple. Transparent. Reliable.
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-12" delay={0.12}>
          {steps.map(step => (
            <motion.div key={step.number} variants={fadeUp}>
              <div className="font-serif text-7xl font-bold text-[#c9a55a]/12 mb-5 leading-none select-none">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="font-sans text-sm text-white/45 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

// â"€â"€â"€ Featured Projects â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function ProjectsSection() {
  const featured = projects.filter(p => p.featured).slice(0, 3)

  return (
    <section className="py-24 px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
            Recent Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Featured Projects
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-16 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-0.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#c9a55a] text-[#c9a55a]" />
            ))}
          </div>
          <p className="font-sans text-xs text-[#94a3b8] tracking-wide">
            4.9 out of 5 across 300 Google reviews
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map(t => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="bg-white p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
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
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-[#0f172a] leading-tight">
                    {t.name}
                  </div>
                  <div className="font-sans text-xs text-[#94a3b8] mt-0.5">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>

        <div className="flex justify-center mt-14">
          <a
            href="https://customerreviews.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-[#c9a55a]/50 text-[#c9a55a] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#c9a55a] hover:text-white transition-all duration-300"
          >
            Leave a Google Review
          </a>
        </div>
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
    <section className="py-24 px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
            Common Questions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
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
    <section className="relative py-28 px-6 md:px-8 lg:px-16 overflow-hidden">
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
      <TickerBanner />
      <StandardSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

