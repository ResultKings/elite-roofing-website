'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock, User } from 'lucide-react'
import Button from '@/components/ui/Button'
import { blogPosts } from '@/data/mockData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerIn({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const allCategories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const [featured, ...rest] = blogPosts

  const filteredPosts =
    activeCategory === 'All'
      ? rest
      : rest.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 bg-[#0f172a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #c9a55a 0, #c9a55a 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#c9a55a]" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase text-[#8a6928]">
                Resources & Insights
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            >
              Roofing Knowledge
              <br />
              <span className="text-[#c9a55a]">From the Experts.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-white/55 max-w-lg leading-relaxed">
              Practical guidance, honest comparisons, and industry expertise â€” written by our
              master roofers to help you make confident decisions about your home.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">

          {/* Featured Post */}
          <FadeIn className="mb-16">
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#e7e5e4] overflow-hidden hover:border-[#c9a55a]/40 hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto min-h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center px-3 py-1 bg-[#c9a55a] text-white font-sans text-[10px] font-semibold tracking-wider uppercase">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center px-3 py-1 bg-[#c9a55a]/10 text-[#c9a55a] font-sans text-[10px] font-semibold tracking-wider uppercase w-fit mb-4">
                  {featured.category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] group-hover:text-[#c9a55a] transition-colors leading-snug mb-4">
                  {featured.title}
                </h2>
                <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#e7e5e4] flex-shrink-0">
                    <Image src={featured.authorImage} alt={featured.author} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-[#0f172a]">{featured.author}</p>
                    <p className="font-sans text-xs text-[#94a3b8]">{featured.authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-[#e7e5e4]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-[#94a3b8]">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                    <span className="font-sans text-xs text-[#94a3b8]">{formatDate(featured.date)}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-[#c9a55a] group-hover:gap-3 transition-all duration-300">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn className="flex items-center gap-3 mb-10 flex-wrap">
            <span className="font-sans text-xs text-[#94a3b8] mr-2">Category:</span>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  'px-4 py-2 font-sans text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-[#c9a55a] text-white'
                    : 'bg-white border border-[#e7e5e4] text-[#64748b] hover:border-[#c9a55a]/40 hover:text-[#c9a55a]',
                ].join(' ')}
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          {/* Posts Grid */}
          <StaggerIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={fadeUp}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-[#e7e5e4] overflow-hidden hover:border-[#c9a55a]/40 hover:shadow-md transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-2.5 py-1 bg-white/90 backdrop-blur-sm font-sans text-[10px] font-semibold text-[#c9a55a] tracking-wider uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-[#0f172a] group-hover:text-[#c9a55a] transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                    <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#e7e5e4]">
                      <div className="flex items-center gap-3">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#e7e5e4] flex-shrink-0">
                          <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                        </div>
                        <span className="font-sans text-xs text-[#64748b]">{post.author.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-sans text-xs text-[#94a3b8]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerIn>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-sans text-[#94a3b8]">No posts in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white border-t border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <p className="font-sans text-[12px] font-semibold tracking-[0.3em] uppercase text-[#8a6928] mb-3">
                Expert Advice
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#0f172a] mb-3">
                Have a Question About Your Roof?
              </h2>
              <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                Our team of experts is available for free consultations. No obligation â€” just
                honest advice from Ontario&apos;s most trusted roofers.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Ask An Expert
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

