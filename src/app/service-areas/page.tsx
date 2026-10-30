'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle, Phone, Star, ChevronLeft, ChevronRight } from 'lucide-react'
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

const serviceAreas = [
  { city: 'Vaughan',       note: 'Company Headquarters', lat: 43.8361, lng: -79.4985 },
  { city: 'Toronto',       note: 'Greater Toronto Area',  lat: 43.6532, lng: -79.3832 },
  { city: 'Mississauga',   note: 'Peel Region',           lat: 43.5890, lng: -79.6441 },
  { city: 'Brampton',      note: 'Peel Region',           lat: 43.6832, lng: -79.7666 },
  { city: 'Markham',       note: 'York Region',           lat: 43.8561, lng: -79.3370 },
  { city: 'Richmond Hill', note: 'York Region',           lat: 43.8828, lng: -79.4403 },
  { city: 'Thornhill',     note: 'York Region',           lat: 43.8168, lng: -79.4164 },
  { city: 'Woodbridge',    note: 'York Region',           lat: 43.7877, lng: -79.5962 },
  { city: 'Concord',       note: 'York Region',           lat: 43.8128, lng: -79.4897 },
  { city: 'King City',     note: 'York Region',           lat: 43.9284, lng: -79.5307 },
  { city: 'Newmarket',     note: 'York Region',           lat: 44.0573, lng: -79.4608 },
  { city: 'Aurora',        note: 'York Region',           lat: 44.0065, lng: -79.4502 },
  { city: 'Oakville',      note: 'Halton Region',         lat: 43.4675, lng: -79.6877 },
  { city: 'Burlington',    note: 'Halton Region',         lat: 43.3255, lng: -79.7990 },
  { city: 'Milton',        note: 'Halton Region',         lat: 43.5183, lng: -79.8774 },
  { city: 'Etobicoke',     note: 'West Toronto',          lat: 43.6205, lng: -79.5132 },
  { city: 'North York',    note: 'Central Toronto',       lat: 43.7615, lng: -79.4111 },
  { city: 'Scarborough',   note: 'East Toronto',          lat: 43.7731, lng: -79.2577 },
  { city: 'Pickering',     note: 'Durham Region',         lat: 43.8384, lng: -79.0868 },
  { city: 'Ajax',          note: 'Durham Region',         lat: 43.8509, lng: -79.0204 },
  { city: 'Whitby',        note: 'Durham Region',         lat: 43.8975, lng: -78.9429 },
  { city: 'Oshawa',        note: 'Durham Region',         lat: 43.8971, lng: -78.8658 },
  { city: 'Stouffville',   note: 'York Region',           lat: 43.9699, lng: -79.2536 },
  { city: 'Hamilton',      note: 'Hamilton',              lat: 43.2557, lng: -79.8711 },
  { city: 'Barrie',        note: 'Simcoe County',         lat: 44.3894, lng: -79.6903 },
  { city: 'Guelph',        note: 'Wellington County',     lat: 43.5448, lng: -80.2482 },
  { city: 'Orangeville',   note: 'Dufferin County',       lat: 43.9193, lng: -80.0939 },
]

function ServiceAreaMap() {
  return (
    <iframe
      src="https://maps.google.com/maps?q=Vaughan,Ontario,Canada&z=11&output=embed"
      width="100%"
      height="500"
      style={{ border: 0, display: 'block' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      title="Elite Roofing service areas map"
    />
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
          {/* Stars */}
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#c9a55a] text-[#c9a55a]" />
            ))}
          </div>
          {/* Quote */}
          <p className="font-sans text-sm text-[#374151] leading-relaxed flex-1 mb-6">
            &ldquo;{t.quote}&rdquo;
          </p>
          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#e7e5e4]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src={t.image} alt={t.name} fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-[#0f172a]">{t.name}</p>
              <p className="font-sans text-[11px] text-[#94a3b8]">{t.location} · {t.projectType}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPaused(true); setCurrent(i) }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#c9a55a] w-5' : 'bg-[#e7e5e4]'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-[#e7e5e4] flex items-center justify-center hover:border-[#c9a55a] hover:text-[#c9a55a] transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-[#e7e5e4] flex items-center justify-center hover:border-[#c9a55a] hover:text-[#c9a55a] transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-20 lg:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/areas-served-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#0f172a]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-5">
              <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a]">
                Where We Work
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Based in Vaughan
              <br />
              <span className="text-[#c9a55a]">Serving All of Ontario</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Areas Served Map Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
              Our Coverage Area
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
              Areas Served
            </h2>
          </FadeIn>

          {/* Leaflet Map */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e7e5e4] mb-8">
              <ServiceAreaMap />
            </div>
          </FadeIn>

          {/* 4-column location list */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 mb-10 px-2">
              {[
                ['Vaughan','Toronto','Mississauga','Brampton','Markham','Richmond Hill','Thornhill'],
                ['Woodbridge','Concord','King City','Newmarket','Aurora','Oakville','Burlington'],
                ['Milton','Etobicoke','North York','Scarborough','Pickering','Ajax','Whitby'],
                ['Oshawa','Stouffville','Hamilton','Barrie','Guelph','Orangeville'],
              ].map((col, ci) => (
                <ul key={ci} className="space-y-2">
                  {col.map(city => (
                    <li key={city} className="flex items-center gap-2 font-sans text-sm text-[#374151]">
                      <span className="text-base leading-none">📍</span>
                      {city}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </FadeIn>

          {/* Not Sure We Cover Your Area? */}
          <FadeIn>
            <div className="bg-white border border-[#e7e5e4] p-8 md:p-10 rounded-xl mt-12 shadow-sm">
              <span className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-5 block">
                Not Sure We Cover Your Area?
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0f172a] mb-4 leading-snug">
                Give Us a Call, We&apos;ll Let You Know Right Away
              </h3>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-8">
                Our coverage area continues to expand. If you don&apos;t see your city listed, reach out and we&apos;ll confirm availability. Emergency calls are handled across a wider service radius.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="tel:+19055550198"
                  className="inline-flex items-center gap-3 text-[#0f172a] font-sans text-sm"
                >
                  <Phone className="w-4 h-4 text-[#c9a55a]" />
                  (905) 555-0198
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#041D35] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#0a2a4a] transition-colors duration-300 rounded-full"
                >
                  Contact Us <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hear From Our Clients */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Hear From Our Clients
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left, sliding reviews */}
            <FadeIn className="flex flex-col">
              <ReviewCarousel />
            </FadeIn>

            {/* Right, stats + buttons */}
            <FadeIn delay={0.1} className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 leading-snug">
                What Our Clients<br />Are Saying
              </h3>

              {/* Profile images + stars */}
              <div className="flex items-center gap-4 mb-5">
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
                      <Star key={i} className="w-4 h-4 fill-[#c9a55a] text-[#c9a55a]" />
                    ))}
                  </div>
                  <p className="font-sans text-sm font-semibold text-[#0f172a]">
                    4.9 <span className="font-normal text-[#64748b]">out of 5 across</span> 300 Google reviews
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-8">
                Hundreds of homeowners and businesses across Ontario have trusted Elite Roofing for their most important investment. Read what they have to say.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://customerreviews.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#041D35] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#0a2a4a] transition-colors duration-300 rounded-full"
                >
                  Leave a Google Review
                </a>
                <Link
                  href="/testimonials"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#041D35] text-[#041D35] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#041D35] hover:text-white transition-colors duration-300 rounded-full"
                >
                  See More Reviews <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Office Location Map */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-8">
            <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#0f172a] mb-3 block">
              Our Office Location
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a]">
              Based in Vaughan, Serving All of Ontario
            </h3>
            <a
              href="https://www.google.com/maps/place/216+Rivermede+Rd+Unit+7,+Vaughan,+ON+L4K+3M6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#64748b] mt-3 hover:text-[#c9a55a] transition-colors duration-200 block"
            >
              216 Rivermede Rd Unit 7, Vaughan, ON L4K 3M6
            </a>
          </FadeIn>
          <FadeIn>
            <div className="overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.1381433328875!2d-79.49001659999999!3d43.81149389999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e927bd77619%3A0x2ec48bc35221d622!2sElite%20Roofing%20and%20Contractors%20Limited!5e0!3m2!1sen!2sch!4v1793031022330!5m2!1sen!2sch"
                width="100%"
                height="500"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Elite Roofing office location map"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why us across all areas */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
                Same Standard Everywhere
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                Ontario&apos;s Premier
                <br />Roofing Company
              </h2>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-8">
                Whether you&apos;re in downtown Toronto or a suburb of the GTA, you receive the same premium craftsmanship and professional service that has made Elite Roofing Ontario&apos;s most trusted name in roofing.
              </p>
              <ul className="space-y-3">
                {[
                  'GAF Master Elite certified, top 2% nationally',
                  'Licensed and $5M insured across Ontario',
                  'Free estimates with no travel fees',
                  'Same-day emergency response available',
                  '10-year written workmanship warranty on all work',
                  '300+ five-star Google reviews from Ontario clients',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#c9a55a] mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-sm text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#0f172a]">
                <Image
                  src="/projects-hero-bg.webp"
                  alt="Elite Roofing workmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0f172a]/20" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-5 block">
              Start Today
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Protect Your Home with Ontario&apos;s
              <br />
              <span className="text-[#c9a55a]">Top Rated Roofing Team</span>
            </h2>
            <p className="font-sans text-sm text-white/55 leading-relaxed mb-10 max-w-xl mx-auto">
              Free inspections. Transparent quotes. Expert installation. Serving the Greater Toronto Area from our Vaughan headquarters.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#c9a55a] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300"
            >
              Get Free Estimate <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
