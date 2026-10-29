'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
      <div className="overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500">
        <div className="relative aspect-[4/3] bg-[#0f172a] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 bg-[#c9a55a] text-white font-sans text-[10px] font-semibold tracking-[0.25em] uppercase">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-5 border-t border-[#e7e5e4]">
          <h3 className="font-serif text-base font-semibold text-[#0f172a] mb-1 leading-snug">{project.title}</h3>
          <p className="font-sans text-xs text-[#94a3b8] mb-3">{project.location} &middot; {project.year}</p>
          <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-[#f8fafc] border border-[#e7e5e4] font-sans text-[10px] text-[#64748b] tracking-wide">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const categories = ['All', 'Residential', 'Commercial'] as const

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

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Residential' | 'Commercial'>('All')

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

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

      <main className="pb-24 bg-[#fafaf9]">
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
              <div className="flex justify-end">
                <div className="flex items-center bg-white border border-[#e7e5e4] p-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={[
                        'px-5 py-2 font-sans text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200',
                        activeCategory === cat
                          ? 'bg-[#0f172a] text-white'
                          : 'text-[#64748b] hover:text-[#0f172a]',
                      ].join(' ')}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Hear From Our Clients */}
        <section className="mt-20 px-6 md:px-8 lg:px-16 pb-8">
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
              {/* Left — sliding reviews */}
              <FadeIn className="flex flex-col">
                <ReviewCarousel />
              </FadeIn>

              {/* Right — stats + buttons */}
              <FadeIn delay={0.1} className="flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 leading-snug">
                  What Our Clients<br />Are Saying
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
      </main>
    </>
  )
}
