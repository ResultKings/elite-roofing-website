'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Home,
  Building2,
  Wrench,
  Cloud,
  Droplets,
  Sun,
  Phone,
  Search,
  Zap,
  Layers,
  Building,
  RefreshCw,
  Shield,
  Award,
  Clock,
} from 'lucide-react'
import { services } from '@/data/mockData'
import serviceContent from '@/data/serviceContent'

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Wrench,
  Cloud,
  Droplets,
  Sun,
  Search,
  Zap,
  Layers,
  Building,
  RefreshCw,
  Shield,
}

const commitmentIcons = [Shield, Award, CheckCircle, Clock]

const processSteps = [
  {
    num: '01',
    title: 'Free Roof Inspection',
    body: 'Our certified inspector evaluates every component — from deck to ridge — with full photographic documentation at no cost or obligation.',
  },
  {
    num: '02',
    title: 'Honest Written Proposal',
    body: 'You receive a detailed, itemized proposal within 24 hours. No hidden charges, no vague estimates — exactly what we will do and what it will cost.',
  },
  {
    num: '03',
    title: 'Expert Installation',
    body: 'Our GAF Master Elite certified crew arrives on schedule and completes the work to the highest standard, protecting your property throughout.',
  },
  {
    num: '04',
    title: 'Final Walkthrough & Warranty',
    body: 'We review every detail with you, answer all questions, and hand you your written workmanship warranty before we leave the site.',
  },
]

// ─── FAQ Accordion ──────────────────────────────────────────────────────────────

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={[
              'border transition-all duration-300',
              isOpen
                ? 'border-[#c9a55a]/50 shadow-sm'
                : 'border-[#e7e5e4] hover:border-[#c9a55a]/30',
            ].join(' ')}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base font-semibold text-[#0f172a] leading-snug">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
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
                  <div className="px-6 pb-5 border-t border-[#e7e5e4]">
                    <p className="font-sans text-sm text-[#64748b] leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────────

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  const content = serviceContent[params.slug]

  if (!service || !content) {
    notFound()
  }

  const Icon = iconMap[service.icon] ?? Home
  const zigImg1 = content.galleryImages[0] ?? content.heroImage
  const zigImg2 = content.galleryImages[1] ?? content.galleryImages[0] ?? content.heroImage

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[68vh] min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* left-to-right gradient so image shows on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/96 via-[#0f172a]/75 to-[#0f172a]/20" />
        {/* subtle diagonal texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #c9a55a 0, #c9a55a 1px, transparent 0, transparent 50%)',
            backgroundSize: '14px 14px',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-white/40 font-sans text-xs">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white/70 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </div>

          {/* Icon badge + label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 bg-[#041D35] flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a]">
              Elite Roofing Services
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.02] max-w-3xl">
            {service.title}
          </h1>
          <p className="font-sans text-base text-white/55 max-w-lg leading-relaxed mb-9">
            {content.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a55a] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300"
            >
              Free Inspection <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+19055550198"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-sans text-xs tracking-[0.2em] uppercase hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#c9a55a]" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Zig-Zag Row 1: Image LEFT + What to Expect RIGHT ──────────────── */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <Image
                src={zigImg1}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c9a55a]" />
            </div>

            {/* Content */}
            <div>
              <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
                Overview
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#0f172a] mb-6 leading-tight">
                What to Expect
              </h2>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              {service.features && service.features.length > 0 && (
                <ul className="space-y-3.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a55a] mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-[#374151] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment Icon Grid ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
              Why Elite Roofing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Our Commitment to You
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.highlights.map((h, i) => {
              const HIcon = commitmentIcons[i % commitmentIcons.length]
              return (
                <div
                  key={i}
                  className="bg-white border border-[#e7e5e4] p-8 flex flex-col items-center text-center hover:border-[#041D35]/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#041D35] flex items-center justify-center mb-5 flex-shrink-0">
                    <HIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-sans text-sm text-[#374151] leading-relaxed">{h}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Zig-Zag Row 2: Our Process LEFT + Image RIGHT ─────────────────── */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Process Steps */}
            <div>
              <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
                How It Works
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#0f172a] mb-10 leading-tight">
                Our Proven Process
              </h2>
              <div className="space-y-0">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    {/* Number column */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[#041D35] flex items-center justify-center flex-shrink-0">
                        <span className="font-sans text-[10px] font-bold text-white tracking-wider">
                          {step.num}
                        </span>
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="w-px flex-1 bg-[#e7e5e4] my-2 min-h-[36px]" />
                      )}
                    </div>
                    {/* Text */}
                    <div className={i < processSteps.length - 1 ? 'pb-8' : ''}>
                      <h3 className="font-serif text-base font-semibold text-[#0f172a] mb-1.5 leading-snug">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <Image
                src={zigImg2}
                alt={`${service.title} process`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#c9a55a]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Masonry Gallery ──────────────────────────────────────────────────── */}
      {content.galleryImages.length > 0 && (
        <section className="py-14 md:py-16 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
                Our Work
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
                Recent {service.title} Projects
              </h2>
            </div>

            {/* Desktop masonry */}
            <div className="hidden md:block h-[520px]">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 relative overflow-hidden group bg-[#e7e5e4]">
                  <Image
                    src={content.galleryImages[0]}
                    alt={`${service.title} 1`}
                    fill
                    sizes="66vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="col-span-1 grid grid-rows-2 gap-4">
                  {content.galleryImages.slice(1, 3).map((img, i) => (
                    <div key={i} className="relative overflow-hidden group bg-[#e7e5e4]">
                      <Image
                        src={img}
                        alt={`${service.title} ${i + 2}`}
                        fill
                        sizes="33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: 3 stacked */}
            <div className="grid grid-cols-1 gap-3 md:hidden">
              {content.galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden group bg-[#e7e5e4]">
                  <Image
                    src={img}
                    alt={`${service.title} ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
              Questions & Answers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Common Questions About {service.title}
            </h2>
          </div>
          <FAQAccordion faqs={content.faqs} />
        </div>
      </section>

      {/* ── Other Services ───────────────────────────────────────────────────── */}
      <section className="py-12 md:py-14 lg:py-16 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#0f172a]">Other Services</h2>
            <Link
              href="/#services"
              className="font-sans text-xs font-medium text-[#c9a55a] hover:text-[#a87d3a] transition-colors flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((s) => s.slug !== params.slug)
              .slice(0, 3)
              .map((s) => {
                const OtherIcon = iconMap[s.icon] ?? Home
                return (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-4 p-5 bg-white border border-[#e7e5e4] hover:border-[#c9a55a]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#041D35]/8 group-hover:bg-[#c9a55a]/15 flex items-center justify-center transition-colors duration-300">
                      <OtherIcon className="w-4 h-4 text-[#041D35] group-hover:text-[#c9a55a] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-serif text-sm font-semibold text-[#0f172a] group-hover:text-[#c9a55a] transition-colors mb-1">
                        {s.title}
                      </h3>
                      <p className="font-sans text-xs text-[#64748b] line-clamp-2 leading-relaxed">
                        {s.shortDescription}
                      </p>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-5 block">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Discuss Your {service.title} Project?
          </h2>
          <p className="font-sans text-sm text-white/55 leading-relaxed mb-10 max-w-xl mx-auto">
            Our free inspection includes a detailed assessment, photographic documentation,
            and a transparent written proposal — no obligation and no pressure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#c9a55a] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300"
            >
              Schedule Free Inspection <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+19055550198"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-[#c9a55a]" />
              (905) 555-0198
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {['No obligation, ever', '10-Year Workmanship Warranty', 'Serving all of Ontario'].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c9a55a] flex-shrink-0" />
                  <span className="font-sans text-xs text-white/40">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
