'use client'

import React, { useState, useRef, useEffect } from 'react'
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

const allReviews = [
  { name: 'Robert Mackenzie', location: 'Markham, ON', projectType: 'Residential Roofing', quote: 'Elite Roofing did a complete tear-off and replacement on our century home. The crew was on time every single day, they covered all our landscaping and left the yard spotless. The new roof looks incredible and the warranty gives us real peace of mind.' },
  { name: 'Sarah Johansson', location: 'Mississauga, ON', projectType: 'Commercial Roofing', quote: "We had a significant leak above our retail space that two other companies couldn't find. Elite Roofing diagnosed the issue within an hour and had it fully repaired by end of day. Professional from start to finish." },
  { name: 'Thomas Wu', location: 'Richmond Hill, ON', projectType: 'Storm Damage Repair', quote: 'After the August storms we had water coming in through three spots. Elite Roofing came out the next morning, gave me a clear written quote with no surprises, and completed all repairs in one day. Fair pricing and excellent work.' },
  { name: 'Amanda Foster', location: 'Burlington, ON', projectType: 'Roof Replacement', quote: 'I was dreading getting a new roof but Elite Roofing made the whole process easy. They walked me through every material option, helped with the insurance claim, and finished ahead of schedule. Neighbours have already asked me who did the work.' },
  { name: "Kevin O'Brien", location: 'Oakville, ON', projectType: 'Gutter Systems', quote: "Had Elite Roofing install new gutters and downspouts across our entire house. They arrived exactly when they said, the installation was flawless, and the cleanup was immaculate. Can't recommend them enough — a truly professional team." },
  { name: 'Patricia Leblanc', location: 'Brampton, ON', projectType: 'Residential Roofing', quote: 'From the free inspection to the final walkthrough, Elite Roofing exceeded every expectation. The GAF certified materials they used are top quality and the crew treated our home with the utmost respect. An honest, reliable company.' },
  { name: 'Daniel Park', location: 'Vaughan, ON', projectType: 'Roof Inspection', quote: 'Called Elite Roofing for a free inspection before selling our home. They were thorough, honest, and gave me a detailed written report same day. No pressure, just good advice. I ended up hiring them to do the repairs and the buyers were thrilled.' },
  { name: 'Christine Moreau', location: 'Thornhill, ON', projectType: 'Emergency Roofing', quote: 'We needed emergency tarping after a tree fell on our roof during a storm. Elite Roofing was on site within two hours. They secured the damage, gave us a full repair estimate, and completed the full job within the week. Lifesavers.' },
  { name: 'Marcus Williams', location: 'Concord, ON', projectType: 'Flat Roofing', quote: 'Elite Roofing replaced the flat roof on our commercial warehouse. The TPO membrane they installed is excellent quality and they completed the project with zero disruption to our operations. On budget, on time, and exceptional workmanship.' },
  { name: 'Helen Kovacs', location: 'Woodbridge, ON', projectType: 'Skylight Installation', quote: 'Had three skylights installed by Elite Roofing last spring. The light those skylights bring into our living room is transformative. The installation was leak-free and perfectly finished. The crew cleaned up every bit of debris. Absolutely wonderful.' },
  { name: 'Andrew Bertrand', location: 'King City, ON', projectType: 'Multi-Family Roofing', quote: 'Our condo building hired Elite Roofing for a full flat roof replacement. Managing 72 units I was worried about noise and disruption but the crew was incredibly professional. Residents barely noticed the work. Outstanding result.' },
  { name: 'Jennifer Tran', location: 'Etobicoke, ON', projectType: 'Roof Replacement', quote: "I got four quotes for my roof replacement and Elite Roofing wasn't the cheapest — but they were clearly the most professional and thorough. The quality of the final product justified every dollar. I'd make the same choice again without hesitation." },
  { name: 'Paul Dimitriou', location: 'North York, ON', projectType: 'Storm Damage Restoration', quote: 'Elite Roofing repaired significant hail damage on our roof and coordinated directly with our insurance company. They documented everything thoroughly, which made the claim process seamless. Exceptional customer service from day one.' },
  { name: 'Lisa Nakamura', location: 'Stouffville, ON', projectType: 'Gutter Systems', quote: 'The team at Elite Roofing replaced all our aging gutters and added leaf guards that have made maintenance so much easier. They were punctual, respectful of our property, and the price was very fair. Genuinely a pleasure to work with.' },
  { name: 'Monica Ashford', location: 'Aurora, ON', projectType: 'Emergency Roofing', quote: 'Elite Roofing responded to our emergency call on a Sunday afternoon. They had our roof tarped within three hours and the permanent repair completed by Wednesday. Outstanding service when we needed it most. Cannot thank them enough.' },
  { name: 'Brian Kowalski', location: 'Pickering, ON', projectType: 'Commercial Flat Roofing', quote: 'We run a manufacturing facility and needed our aging flat roof replaced without shutting down operations. Elite Roofing planned the job in phases and worked around our schedule. Excellent project management and top-quality workmanship.' },
  { name: 'Susan Lafleur', location: 'Ajax, ON', projectType: 'Roof Replacement', quote: 'From the moment I called to get a quote to the day the job was done, Elite Roofing was professional, communicative, and efficient. They replaced my entire roof in one day and the site was cleaner when they left than when they arrived.' },
  { name: 'George Papadopoulos', location: 'Newmarket, ON', projectType: 'Roof Inspection', quote: 'Had Elite Roofing inspect our roof before a major renovation. Their inspector was incredibly knowledgeable and honest — told me what truly needed work and what could wait. No upselling, just straight advice. Hired them for the repairs and they were excellent.' },
  { name: 'Diane Chen', location: 'Scarborough, ON', projectType: 'Residential Roofing', quote: 'Elite Roofing replaced our roof and added new attic insulation at the same time. The energy savings in our heating bills have been noticeable. The project was handled beautifully and the crew was friendly and knowledgeable throughout.' },
  { name: 'Stephanie Gagnon', location: 'Hamilton, ON', projectType: 'Residential Roofing', quote: "I hired Elite Roofing based on a neighbour's recommendation and I completely understand why she raved about them. The inspection was thorough and honest, the quote was fair, and the installation was flawless. My new roof looks stunning." },
  { name: 'Angela Rousseau', location: 'Oshawa, ON', projectType: 'Commercial Roofing', quote: 'I own several rental properties and Elite Roofing has become my go-to roofing contractor. Their pricing is transparent, their work is consistently excellent, and they always complete jobs on time. Trusted partner for my entire portfolio.' },
  { name: 'James Ferreira', location: 'Guelph, ON', projectType: 'Roof Repair', quote: "Fast, honest, and skilled. Elite Roofing came out, assessed our damage from an ice dam, explained exactly what needed to be done, and completed the work without any surprises. The invoice matched the quote to the dollar. That's rare and I appreciate it." },
]

function ReviewCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex(i => (i + 1) % allReviews.length)
    }, 4500)
    return () => clearInterval(id)
  }, [paused])

  const review = allReviews[index]

  return (
    <div
      className="lg:col-span-3 bg-white p-10 md:p-14 flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="font-sans text-[10px] font-semibold tracking-[0.4em] uppercase text-[#c9a55a] block mb-6">
        What Our Clients Say
      </span>

      <div className="flex-1 relative min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <p className="font-serif text-lg md:text-xl font-medium text-[#0f172a] leading-relaxed mb-6 italic">
              &ldquo;{review.quote}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`meta-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between flex-wrap gap-4 mt-8 pt-6 border-t border-[#e7e5e4]"
        >
          <div>
            <p className="font-sans text-sm font-semibold text-[#0f172a]">{review.name}</p>
            <p className="font-sans text-xs text-[#94a3b8] mt-0.5">{review.location} &mdash; {review.projectType}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#c9a55a] tracking-wider select-none">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="font-sans text-[10px] text-[#94a3b8] tabular-nums">
              {index + 1} / {allReviews.length}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-1.5 mt-5">
        {allReviews.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPaused(false); setIndex(i) }}
            aria-label={`Review ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-[#c9a55a]' : 'w-1.5 bg-[#e2e0db] hover:bg-[#c9a55a]/50'}`}
          />
        ))}
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
                <ReviewCarousel />

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
