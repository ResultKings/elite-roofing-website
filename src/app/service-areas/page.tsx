'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MapPin, CheckCircle, Phone } from 'lucide-react'

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
  { city: 'Vaughan', note: 'Company Headquarters' },
  { city: 'Toronto', note: 'Greater Toronto Area' },
  { city: 'Mississauga', note: 'Peel Region' },
  { city: 'Brampton', note: 'Peel Region' },
  { city: 'Markham', note: 'York Region' },
  { city: 'Richmond Hill', note: 'York Region' },
  { city: 'Thornhill', note: 'York Region' },
  { city: 'Woodbridge', note: 'York Region' },
  { city: 'Concord', note: 'York Region' },
  { city: 'King City', note: 'York Region' },
  { city: 'Newmarket', note: 'York Region' },
  { city: 'Aurora', note: 'York Region' },
  { city: 'Oakville', note: 'Halton Region' },
  { city: 'Burlington', note: 'Halton Region' },
  { city: 'Milton', note: 'Halton Region' },
  { city: 'Etobicoke', note: 'West Toronto' },
  { city: 'North York', note: 'Central Toronto' },
  { city: 'Scarborough', note: 'East Toronto' },
  { city: 'Pickering', note: 'Durham Region' },
  { city: 'Ajax', note: 'Durham Region' },
  { city: 'Whitby', note: 'Durham Region' },
  { city: 'Oshawa', note: 'Durham Region' },
  { city: 'Stouffville', note: 'York Region' },
  { city: 'Hamilton', note: 'Hamilton' },
  { city: 'Barrie', note: 'Simcoe County' },
  { city: 'Guelph', note: 'Wellington County' },
  { city: 'Orangeville', note: 'Dufferin County' },
]

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-20 lg:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/toronto-skyline.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#0f172a]/82" />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #c9a55a 0, #c9a55a 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-5">
              <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a]">
                Where We Work
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Serving Ontario&apos;s
              <br />
              <span className="text-[#c9a55a]">Greater Toronto Area</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-white/55 max-w-xl leading-relaxed">
              From our Vaughan headquarters, Elite Roofing serves homeowners and businesses across the GTA and surrounding regions — providing the same premium standard of craftsmanship everywhere we go.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
              Our Coverage Area
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
              Cities We Serve
            </h2>
            <p className="font-sans text-sm text-[#64748b] max-w-2xl mx-auto leading-relaxed">
              Don&apos;t see your city? We may still be able to help. Contact us and we&apos;ll let you know if we can reach you.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
            {serviceAreas.map((area, i) => (
              <FadeIn key={area.city} delay={i * 0.03}>
                <div className="bg-white border border-[#e7e5e4] p-4 flex items-start gap-3 hover:border-[#c9a55a]/40 hover:shadow-sm transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 text-[#c9a55a] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#0f172a]">{area.city}</p>
                    <p className="font-sans text-[10px] text-[#94a3b8] mt-0.5">{area.note}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Map */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e7e5e4]">
              <div className="text-center pt-10 pb-6 px-8">
                <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-3 block">
                  Our Office Location
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a]">
                  Based in Vaughan, Serving All of Ontario
                </h3>
                <p className="font-sans text-sm text-[#64748b] mt-3">
                  216 Rivermede Rd Unit 7, Vaughan, ON L4K 3M6
                </p>
              </div>
              <div className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.1381433328875!2d-79.49001659999999!3d43.81149389999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e927bd77619%3A0x2ec48bc35221d622!2sElite%20Roofing%20and%20Contractors%20Limited!5e0!3m2!1sen!2sch!4v1793031022330!5m2!1sen!2sch"
                  width="100%"
                  height="480"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Elite Roofing service area map"
                />
              </div>
              <p className="text-center font-sans text-xs text-[#94a3b8] py-4 px-8 tracking-wide">
                Scroll or pinch to zoom &middot; Click to open in Google Maps
              </p>
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
                <br />Roofing Contractor
              </h2>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-8">
                Whether you&apos;re in downtown Toronto or a suburb of the GTA, you receive the same premium craftsmanship and professional service that has made Elite Roofing Ontario&apos;s most trusted name in roofing.
              </p>
              <ul className="space-y-3">
                {[
                  'GAF Master Elite certified — top 2% nationally',
                  'Licensed and $5M insured across Ontario',
                  'Free inspections with no travel fees',
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
              <div className="bg-[#0f172a] p-8 md:p-10 rounded-xl">
                <span className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-5 block">
                  Not Sure We Cover Your Area?
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-snug">
                  Give Us a Call — We&apos;ll Let You Know Right Away
                </h3>
                <p className="font-sans text-sm text-white/55 leading-relaxed mb-8">
                  Our coverage area continues to expand. If you don&apos;t see your city listed, reach out and we&apos;ll confirm availability. Emergency calls are handled across a wider service radius.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+19055550198"
                    className="inline-flex items-center gap-3 text-white font-sans text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#c9a55a]" />
                    (905) 555-0198
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c9a55a] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300 w-fit"
                  >
                    Request Free Inspection <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
              Get Free Inspection <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
