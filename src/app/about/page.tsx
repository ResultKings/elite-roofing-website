'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle, Award, Shield, Users, Clock } from 'lucide-react'

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

const stats = [
  { value: '20+', label: 'Years in Business' },
  { value: '2,400+', label: 'Roofs Completed' },
  { value: '300+', label: 'Five-Star Reviews' },
  { value: '$5M', label: 'Fully Insured' },
]

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We provide honest assessments, transparent pricing, and no-pressure proposals. What we quote is what you pay, every time.',
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
  { name: '10-Year Workmanship Warranty', note: 'Written warranty on all installation and repair work' },
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
              <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a]">
                Our Story
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Ontario&apos;s Trusted
              <br />
              <span className="text-[#c9a55a]">Roofing Specialist</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                Built on a Foundation
                <br />of Honest Work
              </h2>
              <div className="space-y-4 font-sans text-sm text-[#475569] leading-relaxed">
                <p>
                  Elite Roofing was founded in 2004 with a straightforward belief: homeowners and business owners deserve a roofing contractor who shows up when they say they will, charges what they quoted, and stands behind their work long after the crew has left.
                </p>
                <p>
                  Over the past two decades, we have grown into one of the Greater Toronto Area&apos;s most trusted roofing companies, not by cutting corners or chasing the lowest bid, but by consistently delivering results that exceed expectations and last for decades.
                </p>
                <p>
                  Our team of certified craftsmen brings deep expertise to every project, from a single-family residential repair in Vaughan to a full commercial roofing system in Mississauga. We hold GAF Master Elite certification, achieved by fewer than 2% of roofing contractors in North America, a reflection of our technical standards, ongoing training, and dedication to quality.
                </p>
                <p>
                  Today, with over 2,400 completed projects and 300+ five-star reviews, we are proud of the reputation we have earned, one roof at a time.
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
            <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
              What Drives Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Our Core Values
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-[#e7e5e4] p-8 flex gap-5 hover:border-[#c9a55a]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-[#c9a55a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <v.icon className="w-5 h-5 text-[#c9a55a]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#0f172a] mb-2">{v.title}</h3>
                    <p className="font-sans text-sm text-[#64748b] leading-relaxed">{v.description}</p>
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
              <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
                Credentials & Certifications
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                Licensed, Insured
                <br />and Certified
              </h2>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-8">
                When you hire Elite Roofing, you hire a team backed by the highest industry certifications, full insurance coverage, and a written warranty that holds us accountable long after the job is done.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#c9a55a] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#0f172a]">{cert.name}</p>
                      <p className="font-sans text-xs text-[#94a3b8] leading-snug mt-0.5">{cert.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#0f172a] p-8 md:p-10 rounded-xl">
                <span className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-6 block">
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

      {/* CTA */}
      <section className="py-14 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Experience the Elite Difference?
            </h2>
            <p className="font-sans text-sm text-white/75 leading-relaxed mb-8 max-w-lg mx-auto">
              Book your no-obligation free estimate today. Our experts will assess your roof, provide honest recommendations, and give you a transparent written proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-[#c9a55a] hover:bg-[#a87d3a] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 rounded-full"
              >
                Get Free Estimate <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 px-9 py-4 bg-white hover:bg-white/90 text-[#0f172a] font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 rounded-full"
              >
                Read Our Reviews <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
