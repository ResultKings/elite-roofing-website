'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Phone, ChevronDown, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { services, testimonials, projects } from '@/data/mockData'

// â”€â”€â”€ Animation helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=1920&h=1080&fit=crop&q=85&auto=format"
          alt="Luxury Ontario home with premium roofing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-[#0f172a]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-16 pt-32 pb-44">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.12)} className="max-w-2xl">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#b59b74]" />
            <span className="font-sans text-[11px] font-medium tracking-[0.45em] uppercase text-[#b59b74]">
              Ontario&apos;s Premier Roofer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-6xl lg:text-[5.25rem] font-bold text-white leading-[1.04] mb-7"
          >
            Master Craftsmanship.
            <br />
            <span className="text-[#b59b74]">Premium Results.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-lg"
          >
            Elite Roofing brings exceptional skill and premium materials to every project
            across Ontario. Twenty years of proven expertise, backed by a
            satisfaction guarantee we have never had to break.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Get Free Inspection
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-x-8 gap-y-2">
            {['Licensed and Fully Insured', 'GAF Master Elite Certified', '25-Year Warranty Available'].map(item => (
              <span key={item} className="font-sans text-xs text-white/35 tracking-wide">{item}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: '20+', label: 'Years of Excellence' },
              { value: '500+', label: 'Projects Completed' },
              { value: '4.9', label: 'Google Star Rating' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map(stat => (
              <div key={stat.label} className="text-center px-4 py-2">
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#b59b74]">{stat.value}</div>
                <div className="font-sans text-[10px] text-white/35 tracking-widest mt-0.5 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// â”€â”€â”€ Credentials (replaces icon-heavy trust badges) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function CredentialsSection() {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <FadeIn>
            <div className="border-l-2 border-[#b59b74] pl-7">
              <div className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-3">
                GAF Master Elite
              </div>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                Top 2% of roofing contractors nationally. This certification requires ongoing training and financial stability, unlocking the industry&apos;s best manufacturer warranties for our clients.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border-l-2 border-[#b59b74] pl-7">
              <div className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-3">
                10-Year Guarantee
              </div>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                Every installation comes with our written workmanship warranty in addition to the manufacturer material coverage. No exceptions. No fine print.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border-l-2 border-[#b59b74] pl-7">
              <div className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-3">
                300+ Five-Star Reviews
              </div>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                A 4.9-star average across verified Google reviews from homeowners and businesses throughout Ontario. Our reputation speaks for itself.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// â”€â”€â”€ Services â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-16 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#8c6d41] mb-4 block">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
            Our Services
          </h2>
          <div className="w-12 h-[2px] bg-[#b59b74]" />
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(service => (
            <motion.div key={service.id} variants={fadeUp}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-white border border-[#e7e5e4] overflow-hidden hover:border-[#b59b74]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-0.5"
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
                  <h3 className="font-serif text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#b59b74] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-6 flex-1">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#b59b74] tracking-[0.2em] uppercase group-hover:gap-3 transition-all duration-300">
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

// â”€â”€â”€ Process â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
          <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#8c6d41] mb-4 block">
            How It Works
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Simple. Transparent. Reliable.
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-12" delay={0.12}>
          {steps.map(step => (
            <motion.div key={step.number} variants={fadeUp}>
              <div className="font-serif text-7xl font-bold text-[#b59b74]/12 mb-5 leading-none select-none">
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

// â”€â”€â”€ Featured Projects â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ProjectsSection() {
  const featured = projects.filter(p => p.featured).slice(0, 3)

  return (
    <section className="py-24 px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#8c6d41] mb-4 block">
              Recent Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Featured Projects
            </h2>
            <div className="w-12 h-[2px] bg-[#b59b74]" />
          </div>
          <Button href="/projects" variant="ghost" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            View All Projects
          </Button>
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
                  <span className="px-3 py-1 bg-[#b59b74] text-white font-sans text-[10px] font-semibold tracking-[0.25em] uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#0f172a] mb-1 group-hover:text-[#b59b74] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-sans text-xs text-[#94a3b8]">
                {project.location} &middot; {project.year}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

// â”€â”€â”€ Testimonials â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-16 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#8c6d41] mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
            What Our Clients Say
          </h2>
          <div className="w-12 h-[2px] bg-[#b59b74] mx-auto mb-5" />
          <div className="flex items-center justify-center gap-0.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#b59b74] text-[#b59b74]" />
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
                  <Star key={i} className="w-3.5 h-3.5 fill-[#b59b74] text-[#b59b74]" />
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
      </div>
    </section>
  )
}

// â”€â”€â”€ FAQ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
          <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#8c6d41] mb-4 block">
            Common Questions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
            Frequently Asked
          </h2>
          <div className="w-12 h-[2px] bg-[#b59b74] mx-auto" />
        </FadeIn>

        <div className="space-y-2">
          {homeFAQs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  className={[
                    'border transition-colors duration-300',
                    isOpen ? 'border-[#b59b74]/50' : 'border-[#e7e5e4] hover:border-[#b59b74]/30',
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
                      <ChevronDown className="w-5 h-5 text-[#b59b74]" />
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
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#b59b74] hover:text-[#9a8260] transition-colors"
          >
            Ask us directly <ChevronRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

// â”€â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
          <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#8c6d41] mb-5 block">
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
              <Phone className="w-4 h-4 text-[#b59b74]" />
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

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredentialsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

