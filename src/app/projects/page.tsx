'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronDown, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { projects } from '@/data/mockData'
import type { Project } from '@/data/mockData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeUp} className="group">
      <div className="overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500 rounded-xl">
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
    </motion.div>
  )
}

const PRIMARY_CATEGORIES = ['All', 'Residential', 'Commercial'] as const
const SERVICE_CATEGORIES = [
  'Roof Repair', 'Storm Damage Restoration', 'Gutter Systems',
  'Skylight Installation', 'Roof Inspection', 'Metal Roofing',
  'Flat Roofing', 'Multi-Family Roofing', 'Roof Replacement', 'Roof Tarping',
] as const
const categories = [...PRIMARY_CATEGORIES, ...SERVICE_CATEGORIES] as const

const projectReviews = [
  {
    name: 'Robert Mackenzie',
    location: 'Markham, ON',
    projectType: 'Residential Roofing',
    rating: 5,
    quote: 'Elite Roofing did a complete tear-off and replacement on our century home. The crew was on time every single day, they covered all our landscaping and left the yard spotless. The new roof looks incredible and the warranty gives us real peace of mind.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Sarah Johansson',
    location: 'Mississauga, ON',
    projectType: 'Commercial Roofing',
    rating: 5,
    quote: "We had a significant leak above our retail space that two other companies couldn't find. Elite Roofing diagnosed the issue within an hour and had it fully repaired by end of day. Professional from start to finish.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Thomas Wu',
    location: 'Richmond Hill, ON',
    projectType: 'Storm Damage Repair',
    rating: 5,
    quote: 'After the August storms we had water coming in through three spots. Elite Roofing came out the next morning, gave me a clear written quote with no surprises, and completed all repairs in one day. Fair pricing and excellent work.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Amanda Foster',
    location: 'Burlington, ON',
    projectType: 'Roof Replacement',
    rating: 5,
    quote: 'I was dreading getting a new roof but Elite Roofing made the whole process easy. They walked me through every material option, helped with the insurance claim, and finished ahead of schedule. Neighbours have already asked me who did the work.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
]

function ReviewCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = projectReviews.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent(c => (c + 1) % total), 4500)
    return () => clearInterval(id)
  }, [paused, total])

  const prev = () => { setPaused(true); setCurrent(c => (c - 1 + total) % total) }
  const next = () => { setPaused(true); setCurrent(c => (c + 1) % total) }
  const r = projectReviews[current]

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
              <p className="font-sans text-[11px] text-[#94a3b8]">{r.location} · {r.projectType}</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-1.5">
          {projectReviews.map((_, i) => (
            <button key={i} onClick={() => { setPaused(true); setCurrent(i) }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#c9a55a] w-5' : 'bg-[#e7e5e4]'}`} />
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

type Category = typeof categories[number]

const INITIAL_COUNT = 6
const BATCH = 9

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [collapsingMode, setCollapsingMode] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => (p.categories ?? [p.category]).includes(activeCategory))

  const isAll = activeCategory === 'All'
  const showMoreBtn = isAll && !collapsingMode && visibleCount < filtered.length
  const seeLessBtn = isAll && collapsingMode && visibleCount > INITIAL_COUNT

  const handleShowMore = () => {
    setVisibleCount(c => {
      const next = Math.min(c + BATCH, filtered.length)
      if (next >= filtered.length) setCollapsingMode(true)
      return next
    })
  }

  const handleSeeLess = () => {
    setVisibleCount(c => {
      const next = Math.max(c - BATCH, INITIAL_COUNT)
      if (next <= INITIAL_COUNT) setCollapsingMode(false)
      return next
    })
  }

  const selectCategory = useCallback((cat: Category) => {
    setActiveCategory(cat as Category)
    setDropdownOpen(false)
    setVisibleCount(INITIAL_COUNT)
    setCollapsingMode(false)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      <section className="relative pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-20 lg:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/projects-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#0f172a]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-5">
              <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a]">
                Portfolio
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Our History
              <br />
              <span className="text-[#c9a55a]">Your Inspiration.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <main className="bg-[#fafaf9]">
        {/* Gallery intro */}
        <section className="px-6 md:px-8 lg:px-16 pt-16 pb-10">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-5">
                Project Gallery
              </h2>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed max-w-3xl">
                Welcome to the official project gallery of Elite Roofing, a trusted roofing company where our commitment to excellence is captured in every shingle, and project. From residential roof replacements to large-scale commercial installs, these projects reflect our workmanship, our standards, and the trust placed in us by families and businesses throughout Ontario.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="px-6 md:px-8 lg:px-16 mb-10">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-2 flex-wrap">
                {/* Primary: All / Residential / Commercial */}
                <div className="flex items-center bg-white border border-[#e7e5e4] p-1">
                  {PRIMARY_CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => selectCategory(cat)}
                      className={[
                        'px-5 py-2 font-sans text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200 whitespace-nowrap',
                        activeCategory === cat
                          ? 'bg-[#0f172a] text-white'
                          : 'text-[#64748b] hover:text-[#0f172a]',
                      ].join(' ')}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Dropdown for service categories */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(o => !o)}
                    className={[
                      'flex items-center gap-1.5 px-5 py-2.5 font-sans text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200 border',
                      SERVICE_CATEGORIES.includes(activeCategory as typeof SERVICE_CATEGORIES[number])
                        ? 'bg-[#0f172a] text-white border-[#0f172a]'
                        : 'bg-white border-[#e7e5e4] text-[#64748b] hover:text-[#0f172a]',
                    ].join(' ')}
                  >
                    {SERVICE_CATEGORIES.includes(activeCategory as typeof SERVICE_CATEGORIES[number])
                      ? activeCategory
                      : 'Services'
                    }
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-1 z-50 bg-white border border-[#e7e5e4] shadow-lg min-w-[220px]">
                      {SERVICE_CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => selectCategory(cat)}
                          className={[
                            'w-full text-left px-4 py-2.5 font-sans text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-150',
                            activeCategory === cat
                              ? 'bg-[#0f172a] text-white'
                              : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]',
                          ].join(' ')}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Base cards, first INITIAL_COUNT for All, all cards for other filters */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {(isAll ? filtered.slice(0, INITIAL_COUNT) : filtered).map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Extra cards, animated in/out like testimonials Show More */}
            <AnimatePresence>
              {isAll && visibleCount > INITIAL_COUNT && (
                <motion.div
                  key="extra-cards"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }}
                  exit={{ height: 0, opacity: 0, transition: { duration: 0.25 } }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {filtered.slice(INITIAL_COUNT, visibleCount).map(project => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Show More / See Less button */}
            {isAll && (
              <div className="flex justify-center mt-10">
                <AnimatePresence mode="wait">
                  {showMoreBtn && (
                    <motion.button
                      key={`show-more-${visibleCount}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                      exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                      onClick={handleShowMore}
                      className="inline-flex items-center gap-3 px-8 py-3 bg-[#041D35] hover:bg-[#0a2a4a] rounded-full font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-white transition-colors duration-200"
                    >
                      <span className="text-[8px]">▶</span>
                      Show More Projects
                    </motion.button>
                  )}
                  {seeLessBtn && (
                    <motion.button
                      key={`see-less-${visibleCount}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                      exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                      onClick={handleSeeLess}
                      className="inline-flex items-center gap-3 px-8 py-3 bg-[#041D35] hover:bg-[#0a2a4a] rounded-full font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-white transition-colors duration-200"
                    >
                      <span className="text-[8px]">▼</span>
                      See Less
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* Service CTA, shown for every filter except All */}
        <AnimatePresence>
          {!isAll && (() => {
            const slugMap: Record<string, string> = {
              'Residential':              'residential-roofing',
              'Commercial':               'commercial-roofing',
              'Roof Repair':              'roof-repair',
              'Storm Damage Restoration': 'storm-damage-restoration',
              'Gutter Systems':           'gutter-systems',
              'Skylight Installation':    'skylight-installation',
              'Roof Inspection':          'roof-inspection',
              'Metal Roofing':            'metal-roofing',
              'Flat Roofing':             'flat-roofing',
              'Multi-Family Roofing':     'multi-family-roofing',
              'Roof Replacement':         'roof-replacement',
              'Roof Tarping':             'roof-tarping',
            }
            const displayName = activeCategory === 'Residential'
              ? 'Residential Roofing'
              : activeCategory === 'Commercial'
              ? 'Commercial Roofing'
              : activeCategory
            const slug = slugMap[activeCategory] ?? '#'
            return (
              <motion.section
                key={`service-cta-${activeCategory}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                className="mt-16 md:mt-20 px-6 md:px-8 lg:px-16"
              >
                <div className="max-w-7xl mx-auto">
                  <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-2xl px-8 md:px-14 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                    <div>
                      <p className="font-sans text-[11px] font-semibold tracking-[0.3em] uppercase text-[#041D35] mb-3">
                        Want to learn more about how we work?
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] leading-snug">
                        Check Out Our {displayName} Services
                      </h3>
                    </div>
                    <Link
                      href={`/services/${slug}`}
                      className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-[#041D35] hover:bg-[#0a2a4a] text-white font-sans text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200 rounded-full"
                    >
                      View {displayName} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.section>
            )
          })()}
        </AnimatePresence>

        {/* Hear From Our Clients */}
        <section className="mt-20 px-6 md:px-8 lg:px-16 pb-20 md:pb-24">
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
                  {activeCategory === 'All'
                    ? <>What Our Clients<br />Are Saying</>
                    : <>What Our Clients<br />Are Saying About Our<br />{activeCategory === 'Residential' ? 'Residential Roofing' : activeCategory === 'Commercial' ? 'Commercial Roofing' : activeCategory}</>
                  }
                </h3>

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex -space-x-3">
                    {projectReviews.slice(0, 3).map((r, i) => (
                      <div key={i} className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                        <Image src={r.image} alt={r.name} fill sizes="44px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className="text-[#c9a55a] text-base leading-none">★</span>
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
                  <a
                    href="/testimonials"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#041D35] text-[#041D35] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#041D35] hover:text-white transition-colors duration-300 rounded-full"
                  >
                    See More Reviews →
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-5 block">
              Get Started
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {activeCategory === 'All'
                ? 'Ready to Start Your Roofing Project?'
                : `Ready to Discuss Your ${activeCategory === 'Residential' ? 'Residential Roofing' : activeCategory === 'Commercial' ? 'Commercial Roofing' : activeCategory} Project?`
              }
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
              {['No obligation, ever', '10-Year Workmanship Warranty', 'Serving all of Ontario'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c9a55a] flex-shrink-0" />
                  <span className="font-sans text-xs text-white/40">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
