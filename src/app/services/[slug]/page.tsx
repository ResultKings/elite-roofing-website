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

// â”€â”€â”€ FAQ Accordion â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  const content = serviceContent[params.slug]

  if (!service || !content) {
    notFound()
  }

  const Icon = iconMap[service.icon] ?? Home

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[42vh] min-h-[340px] flex items-end overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/50 to-[#0f172a]/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-16">
          <div className="flex items-center gap-2 mb-5 text-white/50 font-sans text-xs">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c9a55a] flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#c9a55a]">
              Elite Roofing Services
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.05] max-w-3xl">
            {service.title}
          </h1>
          <p className="font-sans text-base text-white/60 max-w-xl leading-relaxed">
            {content.tagline}
          </p>
        </div>
      </section>

      {/* Overview + Highlights */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#c9a55a] mb-4 block">
                Overview
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
                What to Expect
              </h2>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              {service.features && service.features.length > 0 && (
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a55a] mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-[#374151]">{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <span className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#c9a55a] mb-4 block">
                Why Elite Roofing
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
                Our Commitment
              </h2>
              <ul className="space-y-4">
                {content.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-4 p-4 border border-[#e7e5e4] bg-[#fafaf9]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a55a] mt-2 flex-shrink-0" />
                    <span className="font-sans text-sm text-[#374151] leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {content.galleryImages.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden bg-[#e7e5e4]">
                  <Image
                    src={img}
                    alt={`${service.title} example ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#c9a55a] mb-4 block">
              Questions & Answers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-5">
              Common Questions About {service.title}
            </h2>
          </div>
          <FAQAccordion faqs={content.faqs} />
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
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
                    <div className="flex-shrink-0 w-10 h-10 bg-[#c9a55a]/10 group-hover:bg-[#c9a55a]/20 flex items-center justify-center transition-colors duration-300">
                      <OtherIcon className="w-4 h-4 text-[#c9a55a]" />
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

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#c9a55a] mb-5 block">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Ready to Discuss Your {service.title} Project?
          </h2>
          <p className="font-sans text-sm text-white/55 leading-relaxed mb-10 max-w-xl mx-auto">
            Our free inspection includes a detailed assessment, photographic documentation,
            and a transparent written proposal, with no obligation and no pressure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c9a55a] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300"
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
            {['No obligation, ever', '10-Year Workmanship Warranty', 'Serving all of Ontario'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#c9a55a] flex-shrink-0" />
                <span className="font-sans text-xs text-white/40">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
