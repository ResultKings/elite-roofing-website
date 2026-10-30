'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
import { services, projects } from '@/data/mockData'
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
    body: 'Our certified inspector evaluates every component, from deck to ridge, with full photographic documentation at no cost or obligation.',
  },
  {
    num: '02',
    title: 'Honest Written Proposal',
    body: 'You receive a detailed, itemized proposal within 24 hours. No hidden charges, no vague estimates. Exactly what we will do and what it will cost.',
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

// ─── Service Reviews ─────────────────────────────────────────────────────────

type ServiceReview = {
  name: string
  location: string
  rating: number
  quote: string
  image: string
}

const p1 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
const p2 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
const p3 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
const p4 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'

const serviceReviewsMap: Record<string, ServiceReview[]> = {
  'residential-roofing': [
    { name: 'Karen Mitchell', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite replaced our aging shingles last spring and the whole roof looks brand new. They were on time every morning, cleaned up every evening, and finished two days ahead of schedule. The workmanship warranty gave us total peace of mind.' },
    { name: 'David Nguyen', location: 'Richmond Hill, ON', rating: 5, image: p2, quote: 'From the free estimate to the final walkthrough, the process was completely transparent. The crew laid new residential shingles in one day and our home has never looked better. Couldn\'t recommend them more highly.' },
    { name: 'Sandra Kowalski', location: 'Markham, ON', rating: 5, image: p3, quote: 'We had multiple quotes and Elite Roofing was the most thorough by far. They identified ice dam damage we didn\'t even know about and fixed everything properly. Zero leaks through the whole winter.' },
    { name: 'Mark Thompson', location: 'Brampton, ON', rating: 5, image: p4, quote: 'Professional from start to finish. The team replaced our entire residential roof and the quality of their work speaks for itself. Neighbours have already stopped to ask who we used.' },
  ],
  'commercial-roofing': [
    { name: 'James Harrington', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite Roofing completed our flat roof replacement on a 12,000 sq ft warehouse with zero disruption to operations. The project manager communicated every step and the work was finished on budget.' },
    { name: 'Michelle Park', location: 'Mississauga, ON', rating: 5, image: p2, quote: 'We had a critical leak above our retail space that two other contractors couldn\'t solve. Elite found the source on the first visit and had it sealed that same day. Their commercial expertise is unmatched.' },
    { name: 'Robert Chen', location: 'Toronto, ON', rating: 5, image: p3, quote: 'For our office complex re-roofing, Elite brought a full crew that worked weekends to avoid disrupting our tenants. The new TPO roof is perfect and came with a full manufacturer warranty.' },
    { name: 'Lisa Fernandez', location: 'Brampton, ON', rating: 5, image: p4, quote: 'We\'ve used Elite for all three of our commercial properties now. Consistent quality, honest pricing, and they show up when they say they will. Exactly what you need for commercial work.' },
  ],
  'roof-repair': [
    { name: 'Patricia Liu', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Called Elite after noticing water stains on our ceiling. They came out the next morning, found the damaged flashing, and repaired it the same day. No sales pressure, just fast and honest repair work.' },
    { name: 'Tom Gallagher', location: 'Aurora, ON', rating: 5, image: p2, quote: 'I thought I needed a full replacement and was dreading the cost. Elite\'s inspector told me honestly that a targeted repair was all I needed. They saved me thousands and did the repair perfectly.' },
    { name: 'Nadia Okafor', location: 'Newmarket, ON', rating: 5, image: p3, quote: 'After a heavy rainstorm revealed a leak, Elite were there within 24 hours. They identified the problem, repaired the damaged section, and provided a full written report. Thorough and fast.' },
    { name: 'Eric Baxter', location: 'Barrie, ON', rating: 5, image: p4, quote: 'Exceptional roof repair service. The crew fixed three separate problem areas that a previous contractor had missed. They documented everything with photos and the repairs have held through two winters now.' },
  ],
  'storm-damage-restoration': [
    { name: 'Chris Papadopoulos', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'After the August hail storm we had damage across the entire roof. Elite came out the next morning, documented everything for insurance, and had the restoration completed in two days. They made a stressful situation easy.' },
    { name: 'Angela Morrison', location: 'Whitby, ON', rating: 5, image: p2, quote: 'Elite walked me through the entire insurance claim process for my storm-damaged roof. They knew exactly what the adjuster needed and helped me get a full replacement covered. Couldn\'t have done it without them.' },
    { name: 'Jason Dubois', location: 'Oshawa, ON', rating: 5, image: p3, quote: 'We had significant wind damage after a severe storm. Elite tarped the roof the same evening to prevent further damage, then completed the full restoration the following week. Fast, professional, and covered by insurance.' },
    { name: 'Maria Santos', location: 'Ajax, ON', rating: 5, image: p4, quote: 'I was overwhelmed after the storm damage to our home. Elite handled everything from the emergency tarp to the final inspection. Their team was calm, efficient, and incredibly knowledgeable about the entire restoration process.' },
  ],
  'gutter-systems': [
    { name: 'Brian Walsh', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite installed seamless eavestrough on our whole house in a single morning. They removed the old system, checked all the fascia, and left everything spotless. Our basement flooding issues have completely stopped.' },
    { name: 'Heather Campbell', location: 'Thornhill, ON', rating: 5, image: p2, quote: 'The gutter guards Elite installed have been incredible. For the first time in years I don\'t need to clean out the eavestroughs every fall. Very fair pricing and the install was done cleanly and quickly.' },
    { name: 'Steven Park', location: 'Markham, ON', rating: 5, image: p3, quote: 'Our old gutters were pulling away from the fascia and causing water damage. Elite replaced everything with a properly pitched seamless system and fixed the underlying fascia damage at the same time. Great all-in-one work.' },
    { name: 'Tamara Wilson', location: 'Stouffville, ON', rating: 5, image: p4, quote: 'Excellent eavestrough service. They came on time, explained exactly what needed to be done, and completed the installation faster than expected. The new gutter system channels water perfectly away from our foundation.' },
  ],
  'skylight-installation': [
    { name: 'Paul Andersen', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite installed two large skylights in our living room and the transformation is incredible. Natural light floods the space all day. The installation was watertight from day one and they cleaned up completely after themselves.' },
    { name: 'Rachel Kim', location: 'North York, ON', rating: 5, image: p2, quote: 'I was nervous about installing a skylight because of leak concerns. Elite explained the flashing and waterproofing process in detail, and three years later it\'s completely dry in any weather. Beautifully done work.' },
    { name: 'Daniel O\'Brien', location: 'Etobicoke, ON', rating: 5, image: p3, quote: 'We had Elite install a vented skylight over our master bathroom. The fresh air it brings in is amazing and the install is perfectly integrated with the roofline. Very professional crew and excellent attention to detail.' },
    { name: 'Jennifer Tran', location: 'Scarborough, ON', rating: 5, image: p4, quote: 'Our skylight installation was handled professionally from start to finish. The team was knowledgeable about different skylight options and helped us choose the right size and style. The end result exceeded our expectations.' },
  ],
  'roof-inspection': [
    { name: 'Alan Reeves', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'We used Elite for a pre-purchase inspection before buying our home. Their detailed report with photos gave us clear leverage in negotiation and peace of mind about the roof condition. Worth every penny.' },
    { name: 'Susan Park', location: 'Woodbridge, ON', rating: 5, image: p2, quote: 'Elite\'s roof inspection before we listed our home was incredibly thorough. They found minor issues we weren\'t aware of, we had them fixed, and our buyers had no concerns about the roof at all. Stress-free process.' },
    { name: 'Greg Lawson', location: 'Kleinburg, ON', rating: 5, image: p3, quote: 'Annual inspection service from Elite has been invaluable. They catch small problems early every year and we\'ve avoided any major repairs. Their written reports are detailed and easy to understand.' },
    { name: 'Carolyn Hughes', location: 'King City, ON', rating: 5, image: p4, quote: 'I requested a full roof inspection after a neighbour had significant storm damage. Elite\'s team was thorough and honest - they found two areas that needed attention and repaired them on the spot. Excellent service.' },
  ],
  'metal-roofing': [
    { name: 'Frank Deluca', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite installed a standing seam metal roof on our century home and it\'s the best home improvement we\'ve ever made. The installation was precise, the detail work around the dormers is flawless, and the warranty is exceptional.' },
    { name: 'Olivia Strand', location: 'Nobleton, ON', rating: 5, image: p2, quote: 'We wanted a metal roof that would last our lifetime. Elite helped us choose the right profile and colour, and the result is stunning. Two winters in and not a single issue - completely silent in rain thanks to the insulation they added.' },
    { name: 'Marcus Lee', location: 'Bolton, ON', rating: 5, image: p3, quote: 'The metal roofing team at Elite was outstanding. They completed our large farmhouse in three days with impeccable precision on every seam and ridge cap. The craftsmanship is immediately visible and the roof has dramatically improved our home.' },
    { name: 'Diana Bergmann', location: 'Schomberg, ON', rating: 5, image: p4, quote: 'After researching metal roofing companies for months, I chose Elite and I\'m so glad I did. Their installers are clearly specialists. The finished roof is beautiful, and they left the property cleaner than when they arrived.' },
  ],
  'flat-roofing': [
    { name: 'Tony Marchese', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite replaced our commercial flat roof with a TPO membrane system and the difference is night and day. No more ponding water, no more leaks. They applied a proper drainage slope and the results have been perfect.' },
    { name: 'Samantha Reed', location: 'Concord, ON', rating: 5, image: p2, quote: 'Our flat-roofed addition had been leaking for two years. Two other companies couldn\'t fix it permanently. Elite diagnosed the drainage problem, reconfigured the slope, and applied a fully adhered membrane. Zero leaks since.' },
    { name: 'Kevin Zhao', location: 'Maple, ON', rating: 5, image: p3, quote: 'We had Elite install a modified bitumen flat roof on our commercial unit. The crew was experienced, worked cleanly around our equipment, and the project came in on schedule and on budget. Excellent flat roofing work.' },
    { name: 'Laura Whitfield', location: 'Woodbridge, ON', rating: 5, image: p4, quote: 'The flat roof on our condo addition was a constant source of problems. Elite completely re-decked and applied a new waterproof membrane system. Three years of problem-free performance now. Highly recommended.' },
  ],
  'multi-family-roofing': [
    { name: 'Victor Rossi', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite re-roofed our entire 24-unit townhouse complex with minimal disruption to residents. Their phased approach was considerate of the tenants and their project management kept everything on track and on budget.' },
    { name: 'Helen Janowski', location: 'Mississauga, ON', rating: 5, image: p2, quote: 'As a property manager I\'ve worked with many roofing companies. Elite stands out for their communication, clean job sites, and consistent quality across our entire condominium portfolio. They understand multi-unit challenges.' },
    { name: 'Andrew Barrette', location: 'Brampton, ON', rating: 5, image: p3, quote: 'Our apartment building\'s roof was beyond its service life. Elite produced a thorough scope of work, coordinated everything with our board, and completed the project efficiently. Every unit remains leak-free.' },
    { name: 'Nicole Ferris', location: 'Burlington, ON', rating: 5, image: p4, quote: 'We contracted Elite for a full multi-family roof replacement on our townhouse complex. Their pricing was transparent, their scheduling minimized tenant complaints, and the final result was excellent quality throughout.' },
  ],
  'roof-replacement': [
    { name: 'Gary Buchanan', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Our 25-year-old roof was at end of life and Elite handled the full replacement seamlessly. Complete tear-off, new decking where needed, and premium shingles. The entire job took one day and the results are outstanding.' },
    { name: 'Patricia Sullivan', location: 'Thornhill, ON', rating: 5, image: p2, quote: 'I was dreading the process of replacing our roof but Elite made it easy. They walked us through every option, gave us a firm written price, and completed the replacement in one day. Home looked brand new when they finished.' },
    { name: 'Michael Kovacs', location: 'Woodbridge, ON', rating: 5, image: p3, quote: 'After getting four quotes, Elite wasn\'t the cheapest but they were the most detailed and professional. The quality of the replacement work exceeded my expectations and they found and fixed three soft spots in our decking.' },
    { name: 'Denise Lambert', location: 'Kleinburg, ON', rating: 5, image: p4, quote: 'Exceptional full roof replacement. The crew arrived at 7am, worked nonstop, and by 4pm our entire roof was completely replaced and the yard was spotless. The new roof has completely transformed the look of our home.' },
  ],
  'roof-tarping': [
    { name: 'Ryan Connors', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'After a tree fell on our roof during a storm, Elite had an emergency tarp in place within two hours of my call. It kept everything completely dry while we sorted out insurance. Fast response when it matters most.' },
    { name: 'Sarah Beaumont', location: 'Newmarket, ON', rating: 5, image: p2, quote: 'Our roof was severely damaged overnight and we were in a panic. Elite was there by 9am with a crew and had the entire damaged section secured under heavy-duty tarping before the next rain arrived. Professional emergency service.' },
    { name: 'Ben Kowalski', location: 'Barrie, ON', rating: 5, image: p3, quote: 'Roof tarping from Elite was exactly what we needed in an emergency. They secured three large sections after hail damage, gave me a full written damage report for insurance, and followed up once the repairs were complete.' },
    { name: 'Melissa Torres', location: 'Innisfil, ON', rating: 5, image: p4, quote: 'I was impressed by how quickly Elite responded to our emergency tarping call. Professional crew, heavy-duty materials, and they made sure the tarp was fully secured so nothing could shift in the wind. Saved our home from water damage.' },
  ],
}

// ─── Review Carousel ──────────────────────────────────────────────────────────

function ReviewCarousel({ reviews, serviceTitle }: { reviews: ServiceReview[]; serviceTitle: string }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = reviews.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 4500)
    return () => clearInterval(id)
  }, [paused, total])

  const prev = () => { setPaused(true); setCurrent((c) => (c - 1 + total) % total) }
  const next = () => { setPaused(true); setCurrent((c) => (c + 1) % total) }
  const r = reviews[current]

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
            {Array.from({ length: r.rating }).map((_, i) => (
              <span key={i} className="text-[#c9a55a] text-base leading-none">★</span>
            ))}
          </div>
          <p className="font-sans text-sm text-[#374151] leading-relaxed flex-1 mb-6">
            &ldquo;{r.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-[#e7e5e4]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src={r.image} alt={r.name} fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-[#0f172a]">{r.name}</p>
              <p className="font-sans text-[11px] text-[#94a3b8]">{r.location} · {serviceTitle}</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPaused(true); setCurrent(i) }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#c9a55a] w-5' : 'bg-[#e7e5e4]'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="w-9 h-9 rounded-full border border-[#e7e5e4] flex items-center justify-center hover:border-[#c9a55a] hover:text-[#c9a55a] transition-colors duration-200">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="w-9 h-9 rounded-full border border-[#e7e5e4] flex items-center justify-center hover:border-[#c9a55a] hover:text-[#c9a55a] transition-colors duration-200">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

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
  const reviews = serviceReviewsMap[params.slug] ?? serviceReviewsMap['residential-roofing']

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-20 lg:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={content.heroImagePosition ? { objectPosition: content.heroImagePosition } : undefined}
          />
        </div>
        <div className="absolute inset-0 bg-[#0f172a]/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-white/40 font-sans text-xs">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white/70 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-9 leading-[1.02] max-w-3xl">
            {service.title}
          </h1>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#041D35] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#0a2a4a] transition-colors duration-300 rounded-full"
            >
              Free Estimate <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+19055550198"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#041D35] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#0a2a4a] transition-colors duration-300 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Zig-Zag Row 1: What to Expect LEFT + Image RIGHT ─────────────── */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <Image
                src={content.overviewImage ?? zigImg1}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
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

      {/* ── Our Work (3-card grid) ────────────────────────────────────────────── */}
      {(() => {
        const featuredSlugs = content.featuredProjects ?? []
        const featuredCards = featuredSlugs
          .map(slug => projects.find(p => p.slug === slug))
          .filter(Boolean) as typeof projects
        if (featuredCards.length === 0) return null
        return (
          <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
                  Our Work
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
                  {service.title} Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {featuredCards.map(project => (
                  <div key={project.id} className="group overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500 rounded-xl">
                    <div className="relative aspect-[4/3] bg-[#0f172a] overflow-hidden rounded-t-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1">
                        {(project.categories ?? [project.category]).map(cat => (
                          <span key={cat} className="px-2.5 py-1 bg-[#c9a55a] text-white font-sans text-[10px] font-semibold tracking-[0.25em] uppercase">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 border-t border-[#e7e5e4]">
                      <h3 className="font-serif text-base font-semibold text-[#0f172a] mb-1 leading-snug">{project.title}</h3>
                      <p className="font-sans text-xs text-[#94a3b8] mb-3">{project.location} &middot; {project.year}</p>
                      <p className="font-sans text-sm text-[#64748b] leading-relaxed line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#041D35] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#0a2a4a] transition-colors duration-300 rounded-full"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
        )
      })()}

      {/* ── Client Reviews ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-4 block">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Hear From Our Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left — sliding reviews */}
            <div className="flex flex-col">
              <ReviewCarousel reviews={reviews} serviceTitle={service.title} />
            </div>

            {/* Right — stats + links */}
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 leading-snug">
                What Our Clients<br />Are Saying About Our<br />{service.title}
              </h3>

              <div className="flex items-center gap-4 mb-5">
                <div className="flex -space-x-3">
                  {reviews.slice(0, 3).map((r, i) => (
                    <div key={i} className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                      <Image src={r.image} alt={r.name} fill sizes="44px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <span key={i} className="text-[#c9a55a] text-base leading-none">★</span>
                    ))}
                  </div>
                  <p className="font-sans text-sm font-semibold text-[#0f172a]">
                    4.9 <span className="font-normal text-[#64748b]">out of 5 across 300 Google reviews</span>
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-8">
                Hundreds of homeowners and businesses across Ontario have trusted Elite Roofing for their {service.title.toLowerCase()} needs. Read what they have to say.
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
                <a
                  href="/testimonials"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#041D35] text-[#041D35] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#041D35] hover:text-white transition-colors duration-300 rounded-full"
                >
                  See More Reviews →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
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
      <section className="py-12 md:py-14 lg:py-16 px-4 md:px-8 lg:px-16 bg-white">
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
            and a transparent written proposal, no obligation and no pressure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#c9a55a] hover:bg-[#a87d3a] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 rounded-full"
            >
              Get Free Estimate <ArrowRight className="w-3.5 h-3.5" />
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
