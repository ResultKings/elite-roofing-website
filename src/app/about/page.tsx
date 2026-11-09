'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle, Award, Shield, Users, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/data/mockData'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  )
}

function ReviewCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = testimonials.length

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, 4500)
    return () => clearInterval(timer)
  }, [paused, total])

  const prev = () => { setPaused(true); setCurrent((c) => (c - 1 + total) % total) }
  const next = () => { setPaused(true); setCurrent((c) => (c + 1) % total) }

  const t = testimonials[current]

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 relative overflow-hidden">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="bg-white border border-[#e7e5e4] p-7 rounded-xl shadow-sm h-full flex flex-col"
        >
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
            ))}
          </div>
          <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed flex-1 mb-6">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-[#e7e5e4]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src={t.image} alt={t.name} fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-[#0f172a]">{t.name}</p>
              <p className="font-sans text-[11px] text-\[#374151\]">{t.location} · {t.projectType}</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPaused(true); setCurrent(i) }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#D0000F] w-5' : 'bg-[#e7e5e4]'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-md border border-[#e7e5e4] flex items-center justify-center hover:border-[#D0000F] hover:text-[#D0000F] transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-md border border-[#e7e5e4] flex items-center justify-center hover:border-[#D0000F] hover:text-[#D0000F] transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

const stats = [
  { value: '20+', label: 'Years in Business' },
  { value: '2,400+', label: 'Roofs Completed' },
  { value: '300+', label: 'Five Star Reviews' },
  { value: '$5M', label: 'Fully Insured' },
]

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We provide honest assessments, transparent pricing, and no pressure proposals. What we quote is what you pay, every time.',
  },
  {
    icon: Award,
    title: 'Master Craftsmanship',
    description: 'As GAF Master Elite certified contractors, the top 2% nationally, we bring the highest standard of skill and technique to every project.',
  },
  {
    icon: Users,
    title: 'People Over Profit',
    description: 'We treat every home and business as if it were our own. Our team listens, communicates, and ensures you feel confident throughout the process.',
  },
  {
    icon: Clock,
    title: 'On Time, Every Time',
    description: 'We respect your schedule. Our crews arrive when scheduled, complete work within the agreed timeline, and clean up before leaving every day.',
  },
]

const certifications = [
  { name: 'GAF Master Elite Certified', note: 'Top 2% of roofing contractors in North America' },
  { name: 'Licensed in Ontario', note: 'Fully licensed and compliant with all provincial regulations' },
  { name: '$5M Liability Insurance', note: 'Comprehensive coverage protecting your property throughout every project' },
  { name: 'WSIB Covered', note: 'All crew members covered, zero liability for homeowners' },
  { name: '10 Year Workmanship Warranty', note: 'Written warranty on all installation and repair work' },
  { name: 'BBB Accredited Business', note: 'Verified track record of ethical business practices' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-20 lg:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/about-hero-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#0f172a]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-5">
              <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-white/60">
                Our Story
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Ontario&apos;s Trusted
              <br />
              <span className="text-[#D0000F]">Roofing Specialist</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                Built on a Foundation
                <br />of Honest Work
              </h2>
              <div className="space-y-4 font-sans text-sm font-medium text-[#0f172a] leading-relaxed">
                <p>
                  Elite Roofing was founded in 2004 with a straightforward belief: homeowners and business owners deserve a roofing contractor who shows up when they say they will, charges what they quoted, and stands behind their work long after the crew has left.
                </p>
                <p>
                  Over the past two decades, we have grown into one of the Greater Toronto Area&apos;s most trusted roofing companies, not by cutting corners or chasing the lowest bid, but by consistently delivering results that exceed expectations and last for decades.
                </p>
                <p>
                  Our team of certified craftsmen brings deep expertise to every project, from a single family residential repair in Vaughan to a full commercial roofing system in Mississauga. We hold GAF Master Elite certification, achieved by fewer than 2% of roofing contractors in North America, a reflection of our technical standards, ongoing training, and dedication to quality.
                </p>
                <p>
                  Today, with over 2,400 completed projects and 300+ five star reviews, we are proud of the reputation we have earned, one roof at a time.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#0f172a]">
                <Image
                  src="/about-crew.avif"
                  alt="Elite Roofing team at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12 lg:mb-16">
            <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
              What Drives Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Our Core Values
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-[#e7e5e4] p-8 flex gap-5 hover:border-[#D0000F]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-[#D0000F]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <v.icon className="w-5 h-5 text-[#D0000F]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#0f172a] mb-2">{v.title}</h3>
                    <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
                Credentials & Certifications
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                Licensed, Insured
                <br />and Certified
              </h2>
              <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed mb-8">
                When you hire Elite Roofing, you hire a team backed by the highest industry certifications, full insurance coverage, and a written warranty that holds us accountable long after the job is done.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#D0000F] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#0f172a]">{cert.name}</p>
                      <p className="font-sans text-xs text-\[#374151\] leading-snug mt-0.5">{cert.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#0f172a] p-8 md:p-10 rounded-xl">
                <span className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-white/60 mb-6 block">
                  Our Promise to You
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-6 leading-snug">
                  &ldquo;Every project, big or small, receives the same standard of excellence we built this company on.&rdquo;
                </h3>
                <p className="font-sans text-sm text-white/55 leading-relaxed mb-8">
                  From your first call to the final walkthrough, you will always know what to expect: honest advice, skilled tradespeople, quality materials, and a team that is genuinely proud of every roof that leaves our hands.
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-sans text-sm font-semibold text-white">Elite Roofing Leadership</p>
                  <p className="font-sans text-xs text-white/40 mt-0.5">Est. 2004 , Vaughan, Ontario</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Hear From Our Clients
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <FadeIn className="flex flex-col">
              <ReviewCarousel />
            </FadeIn>

            <FadeIn delay={0.1} className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 leading-snug">
                What Our Clients<br />Are Saying
              </h3>
              <Link href="/testimonials" className="flex items-center gap-4 mb-5 hover:opacity-80 transition-opacity cursor-pointer">
                <div className="flex -space-x-3">
                  {testimonials.slice(0, 3).map((t, i) => (
                    <div key={i} className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                      <Image src={t.image} alt={t.name} fill sizes="44px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="font-sans text-sm font-semibold text-[#0f172a]">
                    4.9 <span className="font-normal text-[#1e293b]">out of 5 across</span> 300 Google reviews
                  </p>
                </div>
              </Link>
              <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed mb-8">
                Hundreds of homeowners and businesses across Ontario have trusted Elite Roofing for their most important investment. Read what they have to say.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://customerreviews.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f59e0b] text-[#0f172a] font-sans text-base font-semibold hover:bg-[#d97706] transition-colors duration-300 rounded-md"
                >
                  Leave a Google Review
                </a>
                <Link
                  href="/testimonials"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D0000F] text-white font-sans text-base font-semibold hover:bg-[#A5000A] transition-colors duration-300 rounded-md"
                >
                  See More Reviews
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Office Location Map */}
      <section className="py-14 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-sans text-[13px] font-semibold tracking-[0.4em] uppercase text-[#0f172a] mb-3 block">
              Our Office Location
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Based in Vaughan, Serving All of Ontario
            </h2>
            <a
              href="https://www.google.com/maps/place/216+Rivermede+Rd+Unit+7,+Vaughan,+ON+L4K+3M6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#1e293b] mt-3 hover:text-[#D0000F] transition-colors duration-200 block"
            >
              216 Rivermede Rd Unit 7, Vaughan, ON L4K 3M6
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184110.48409684018!2d-79.49001659999999!3d43.81149389999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f9!3m3!1m2!1s0x882b2e927bd77619%3A0x2ec48bc35221d622!2sElite%20Roofing%20and%20Contractors%20Limited!5e0!3m2!1sen!2sch!4v1793031022330!5m2!1sen!2sch"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Elite Roofing location map"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-white/60 mb-5 block">
              Get Started
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Experience the Elite Difference?
            </h2>
            <p className="font-sans text-sm text-white/55 leading-relaxed mb-10 max-w-lg mx-auto">
              Twenty years of work. Thousands of roofs. One standard. Book your free, no obligation estimate and see why homeowners across Vaughan and surrounding areas trust Elite Roofing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#D0000F] hover:bg-[#A5000A] text-white font-sans text-base font-semibold transition-colors duration-300 rounded-md"
              >
                Get Free Estimate
              </Link>
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
    </>
  )
}
