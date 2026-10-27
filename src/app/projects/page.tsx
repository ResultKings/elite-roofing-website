'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
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
                Portfolio
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Our Work
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-white/55 max-w-xl leading-relaxed">
              Every project reflects the same commitment to precision, premium materials, and lasting protection for Ontario homes and businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <main className="pb-24 bg-[#fafaf9]">
        <section className="px-6 md:px-8 lg:px-16 pt-10 mb-10">
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

        <section className="mt-20 px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-5 border border-[#e7e5e4] overflow-hidden">
                <div className="lg:col-span-3 bg-white p-10 md:p-14">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.4em] uppercase text-[#c9a55a] block mb-6">
                    What Our Clients Say
                  </span>
                  <p className="font-serif text-xl md:text-2xl font-medium text-[#0f172a] leading-relaxed mb-8 italic">
                    &ldquo;Elite Roofing replaced our 25-year-old roof in two days. The crew was professional, clean, and communicated every step of the way. Our new roof looks stunning &mdash; we feel confident it will last for decades.&rdquo;
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#0f172a]">Margaret &amp; David Thornton</p>
                      <p className="font-sans text-xs text-[#94a3b8] mt-0.5">Homeowners &mdash; Oakville, ON</p>
                    </div>
                    <span className="text-[#c9a55a] text-lg tracking-wider select-none">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-[#0f172a] p-10 md:p-14 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { val: '2,400+', lbl: 'Projects Completed' },
                      { val: '300+', lbl: 'Five-Star Reviews' },
                      { val: '20+', lbl: 'Years in Business' },
                      { val: '4.9', lbl: 'Google Rating' },
                    ].map(s => (
                      <div key={s.lbl} className="text-center">
                        <p className="font-serif text-3xl font-bold text-[#c9a55a] mb-1">{s.val}</p>
                        <p className="font-sans text-[10px] text-white/50 uppercase tracking-wider leading-snug">{s.lbl}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <p className="font-sans text-xs text-white/40 mb-3">Trusted by hundreds of Ontario homeowners and businesses.</p>
                    <a
                      href="/testimonials"
                      className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a55a] hover:text-white transition-colors duration-200"
                    >
                      Read All Reviews &#8594;
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  )
}
