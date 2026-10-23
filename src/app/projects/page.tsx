'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
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

function FadeIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

// â”€â”€â”€ Project Card â€” receives syncIndex from parent so all cards stay in sync â”€â”€

function ProjectCard({
  project,
  syncIndex,
  onPrev,
  onNext,
}: {
  project: Project
  syncIndex: number
  onPrev: (e: React.MouseEvent) => void
  onNext: (e: React.MouseEvent) => void
}) {
  const images = project.images?.length ? project.images : [project.image]
  // All cards share the same index so they all slide at the same millisecond.
  const current = ((syncIndex % images.length) + images.length) % images.length

  return (
    <motion.div variants={fadeUp} className="group">
      <div className="overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500">
        {/* CSS crossfade â€” all images always in DOM, no white flash or desync */}
        <div className="relative aspect-[4/3] bg-[#0f172a] overflow-hidden">
          {images.map((src, i) => (
            <div
              key={i}
              className={[
                'absolute inset-0 transition-opacity ease-in-out',
                i === current ? 'opacity-100 duration-700' : 'opacity-0 duration-700',
              ].join(' ')}
            >
              <Image
                src={src}
                alt={`${project.title} photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}

          {/* Category badge */}
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="px-2.5 py-1 bg-[#b59b74] text-white font-sans text-[10px] font-semibold tracking-[0.25em] uppercase">
              {project.category}
            </span>
          </div>

          {/* Prev / Next â€” calls parent to advance the shared timer */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                aria-label="Previous image"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 hover:bg-black/75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNext}
                aria-label="Next image"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 hover:bg-black/75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={[
                    'rounded-full transition-all duration-300',
                    i === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40',
                  ].join(' ')}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card info */}
        <div className="p-5 border-t border-[#e7e5e4]">
          <h3 className="font-serif text-base font-semibold text-[#0f172a] mb-1 leading-snug">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-[#94a3b8] mb-3">
            {project.location} &middot; {project.year}
          </p>
          <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-[#f8fafc] border border-[#e7e5e4] font-sans text-[10px] text-[#64748b] tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// â”€â”€â”€ Filter tabs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const categories = ['All', 'Residential', 'Commercial'] as const

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Residential' | 'Commercial'>('All')

  // Single shared timer â€” all cards slide at the exact same millisecond
  const [syncIndex, setSyncIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSyncIndex(i => i + 1), 4200)
    return () => clearInterval(id)
  }, [])

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSyncIndex(i => i - 1)
  }
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSyncIndex(i => i + 1)
  }

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <main className="pt-28 pb-24 bg-[#fafaf9]">
      {/* Header */}
      <section className="px-6 md:px-8 lg:px-16 mb-14">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#8c6d41] mb-4 block">
              Portfolio
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-4 leading-[1.05]">
                  Our Work
                </h1>
                <div className="w-12 h-[2px] bg-[#b59b74] mb-5" />
                <p className="font-sans text-base text-[#64748b] leading-relaxed max-w-lg">
                  Every project reflects the same commitment to precision, premium materials, and lasting protection for Ontario homes and businesses.
                </p>
              </div>

              {/* Filter */}
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

      {/* Grid */}
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
                <ProjectCard
                  key={project.id}
                  project={project}
                  syncIndex={syncIndex}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA strip */}
      <section className="mt-20 px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="bg-[#0f172a] px-10 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Start Your Project?
                </h2>
                <p className="font-sans text-sm text-white/45">
                  Free inspection, transparent proposal, master-certified crew.
                </p>
              </div>
              <a
                href="/contact"
                className="flex-shrink-0 inline-flex items-center px-8 py-3.5 bg-[#b59b74] text-white font-sans text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#9a8260] transition-colors duration-300"
              >
                Get Free Quote
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

