'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ArrowRight, Zap } from 'lucide-react'

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

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#c9a55a] text-[#c9a55a]" />
      ))}
    </div>
  )
}

function ReviewCard({ t }: { t: { name: string; location: string; rating: number; quote: string; image: string; projectType: string } }) {
  return (
    <div className="bg-white border border-[#e7e5e4] p-6 flex flex-col gap-4 hover:border-[#c9a55a]/40 hover:shadow-md transition-all duration-300">
      <StarRow count={t.rating} />
      <p className="font-sans text-sm text-[#475569] leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-3 border-t border-[#e7e5e4]">
        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-[#c9a55a]/10">
          <Image src={t.image} alt={t.name} fill sizes="36px" className="object-cover" />
        </div>
        <div>
          <p className="font-sans text-xs font-semibold text-[#0f172a]">{t.name}</p>
          <p className="font-sans text-[10px] text-[#94a3b8]">{t.location} &middot; {t.projectType}</p>
        </div>
      </div>
    </div>
  )
}

const initialReviews = [
  {
    name: 'Robert Mackenzie',
    location: 'Markham, ON',
    rating: 5,
    quote: 'Elite Roofing did a complete tear-off and replacement on our century home. The crew was on time every single day, they covered all our landscaping and left the yard spotless. The new roof looks incredible and the warranty gives us real peace of mind.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    projectType: 'Residential Roofing',
  },
  {
    name: 'Sarah Johansson',
    location: 'Mississauga, ON',
    rating: 5,
    quote: 'We had a significant leak above our retail space that two other companies couldn\'t find. Elite Roofing diagnosed the issue within an hour and had it fully repaired by end of day. Professional from start to finish. Will only call them going forward.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    projectType: 'Commercial Roofing',
  },
  {
    name: 'Thomas Wu',
    location: 'Richmond Hill, ON',
    rating: 5,
    quote: 'After the August storms we had water coming in through three spots. Elite Roofing came out the next morning, gave me a clear written quote with no surprises, and completed all repairs in one day. Fair pricing and excellent work.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    projectType: 'Storm Damage Repair',
  },
  {
    name: 'Amanda Foster',
    location: 'Burlington, ON',
    rating: 5,
    quote: 'I was dreading getting a new roof but Elite Roofing made the whole process easy. They walked me through every material option, helped with the insurance claim, and finished ahead of schedule. Neighbours have already asked me who did the work.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    projectType: 'Roof Replacement',
  },
  {
    name: 'Kevin O\'Brien',
    location: 'Oakville, ON',
    rating: 5,
    quote: 'Had Elite Roofing install new gutters and downspouts across our entire house. They arrived exactly when they said, the installation was flawless, and the cleanup was immaculate. Can\'t recommend them enough — a truly professional team.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    projectType: 'Gutter Systems',
  },
  {
    name: 'Patricia Leblanc',
    location: 'Brampton, ON',
    rating: 5,
    quote: 'From the free inspection to the final walkthrough, Elite Roofing exceeded every expectation. The GAF certified materials they used are top quality and the crew treated our home with the utmost respect. An honest, reliable company.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
    projectType: 'Residential Roofing',
  },
]

const extraReviews = [
  {
    name: 'Daniel Park',
    location: 'Vaughan, ON',
    rating: 5,
    quote: 'Called Elite Roofing for a free inspection before selling our home. They were thorough, honest, and gave me a detailed written report same day. No pressure, just good advice. I ended up hiring them to do the repairs and the buyers were thrilled.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
    projectType: 'Roof Inspection',
  },
  {
    name: 'Christine Moreau',
    location: 'Thornhill, ON',
    rating: 5,
    quote: 'We needed emergency tarping after a tree fell on our roof during a storm. Elite Roofing was on site within two hours. They secured the damage, gave us a full repair estimate, and completed the full job within the week. Lifesavers.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    projectType: 'Emergency Roofing',
  },
  {
    name: 'Marcus Williams',
    location: 'Concord, ON',
    rating: 5,
    quote: 'Elite Roofing replaced the flat roof on our commercial warehouse. The TPO membrane they installed is excellent quality and they completed the project with zero disruption to our operations. On budget, on time, and exceptional workmanship.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face',
    projectType: 'Flat Roofing',
  },
  {
    name: 'Helen Kovacs',
    location: 'Woodbridge, ON',
    rating: 5,
    quote: 'Had three skylights installed by Elite Roofing last spring. The light those skylights bring into our living room is transformative. The installation was leak-free and perfectly finished. The crew cleaned up every bit of debris. Absolutely wonderful.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face',
    projectType: 'Skylight Installation',
  },
  {
    name: 'Andrew Bertrand',
    location: 'King City, ON',
    rating: 5,
    quote: 'Our condo building hired Elite Roofing for a full flat roof replacement. Managing 72 units I was worried about noise and disruption but the crew was incredibly professional. Residents barely noticed the work. Outstanding result from a very skilled team.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&fit=crop&crop=face',
    projectType: 'Multi-Family Roofing',
  },
  {
    name: 'Jennifer Tran',
    location: 'Etobicoke, ON',
    rating: 5,
    quote: 'I got four quotes for my roof replacement and Elite Roofing wasn\'t the cheapest — but they were clearly the most professional and thorough. The quality of the final product justified every dollar. I\'d make the same choice again without hesitation.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
    projectType: 'Roof Replacement',
  },
  {
    name: 'Paul Dimitriou',
    location: 'North York, ON',
    rating: 5,
    quote: 'Elite Roofing repaired significant hail damage on our roof and coordinated directly with our insurance company. They documented everything thoroughly, which made the claim process seamless. Exceptional customer service from day one.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face',
    projectType: 'Storm Damage Restoration',
  },
  {
    name: 'Lisa Nakamura',
    location: 'Stouffville, ON',
    rating: 5,
    quote: 'The team at Elite Roofing replaced all our aging gutters and added leaf guards that have made maintenance so much easier. They were punctual, respectful of our property, and the price was very fair. Genuinely a pleasure to work with.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face',
    projectType: 'Gutter Systems',
  },
  {
    name: 'George Papadopoulos',
    location: 'Newmarket, ON',
    rating: 5,
    quote: 'Had Elite Roofing inspect our roof before a major renovation. Their inspector was incredibly knowledgeable and honest — told me what truly needed work and what could wait. No upselling, just straight advice. Hired them for the repairs and they were excellent.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&h=80&fit=crop&crop=face',
    projectType: 'Roof Inspection',
  },
  {
    name: 'Monica Ashford',
    location: 'Aurora, ON',
    rating: 5,
    quote: 'Elite Roofing responded to our emergency call on a Sunday afternoon. They had our roof tarped within three hours and the permanent repair completed by Wednesday. Outstanding service when we needed it most. Cannot thank them enough.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
    projectType: 'Emergency Roofing',
  },
  {
    name: 'Brian Kowalski',
    location: 'Pickering, ON',
    rating: 5,
    quote: 'We run a manufacturing facility and needed our aging flat roof replaced without shutting down operations. Elite Roofing planned the job in phases and worked around our schedule. Excellent project management and top-quality workmanship.',
    image: 'https://images.unsplash.com/photo-1541710430735-5fca14c95b00?w=80&h=80&fit=crop&crop=face',
    projectType: 'Commercial Flat Roofing',
  },
  {
    name: 'Susan Lafleur',
    location: 'Ajax, ON',
    rating: 5,
    quote: 'From the moment I called to get a quote to the day the job was done, Elite Roofing was professional, communicative, and efficient. They replaced my entire roof in one day and the site was cleaner when they left than when they arrived.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop&crop=face',
    projectType: 'Roof Replacement',
  },
  {
    name: 'Christopher Nolan',
    location: 'Whitby, ON',
    rating: 5,
    quote: 'Elite Roofing did our residential roofing after a particularly harsh winter. The team was prompt, skilled, and respectful of our home. They explained every step of the process and left a beautiful, durable roof. Highly recommend to any homeowner.',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&crop=face',
    projectType: 'Residential Roofing',
  },
  {
    name: 'Angela Rousseau',
    location: 'Oshawa, ON',
    rating: 5,
    quote: 'I own several rental properties and Elite Roofing has become my go-to roofing contractor. Their pricing is transparent, their work is consistently excellent, and they always complete jobs on time. Trusted partner for my entire portfolio.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=80&h=80&fit=crop&crop=face',
    projectType: 'Commercial Roofing',
  },
  {
    name: 'Nathan Bergström',
    location: 'Barrie, ON',
    rating: 5,
    quote: 'Excellent work on our commercial strip mall. Elite Roofing coordinated with all our tenants and worked in sections to minimize any disruption. The project came in on budget and the roof has been completely problem-free for two years now.',
    image: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=80&h=80&fit=crop&crop=face',
    projectType: 'Commercial Roofing',
  },
  {
    name: 'Diane Chen',
    location: 'Scarborough, ON',
    rating: 5,
    quote: 'Elite Roofing replaced our roof and added new attic insulation at the same time. The energy savings in our heating bills have been noticeable. The project was handled beautifully and the crew was friendly and knowledgeable throughout.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=80&h=80&fit=crop&crop=face',
    projectType: 'Residential Roofing',
  },
  {
    name: 'Frank Esposito',
    location: 'Mississauga, ON',
    rating: 5,
    quote: 'After getting burned by a low-budget roofer two years ago, I was careful choosing a contractor for my full replacement. Elite Roofing was worth every penny. Proper installation, quality materials, and a team that takes real pride in their work.',
    image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=80&h=80&fit=crop&crop=face',
    projectType: 'Roof Replacement',
  },
  {
    name: 'Stephanie Gagnon',
    location: 'Hamilton, ON',
    rating: 5,
    quote: 'I hired Elite Roofing based on a neighbour\'s recommendation and I completely understand why she raved about them. The inspection was thorough and honest, the quote was fair, and the installation was flawless. My new roof looks stunning.',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=80&h=80&fit=crop&crop=face',
    projectType: 'Residential Roofing',
  },
  {
    name: 'Victor Okafor',
    location: 'Brampton, ON',
    rating: 5,
    quote: 'Elite Roofing handled our multi-unit residential building in a tight timeline before winter. The project manager kept us updated every day, the crew worked efficiently, and the quality of the finished roofs on all eight units is exceptional.',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=80&h=80&fit=crop&crop=face',
    projectType: 'Multi-Family Roofing',
  },
  {
    name: 'Carol Hutchinson',
    location: 'Orangeville, ON',
    rating: 5,
    quote: 'Elite Roofing inspected our historic Victorian home and gave us options that respected the character of the property while providing modern performance. Their attention to architectural detail was impressive. The finished roof is absolutely beautiful.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=80&h=80&fit=crop&crop=face',
    projectType: 'Residential Roofing',
  },
  {
    name: 'James Ferreira',
    location: 'Guelph, ON',
    rating: 5,
    quote: 'Fast, honest, and skilled. Elite Roofing came out, assessed our damage from an ice dam, explained exactly what needed to be done, and completed the work without any surprises. The invoice matched the quote to the dollar. That\'s rare and I appreciate it.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    projectType: 'Roof Repair',
  },
]

export default function TestimonialsPage() {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-20 lg:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/contact-hero-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
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
                Client Stories
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              What Our Clients
              <br />
              <span className="text-[#c9a55a]">Are Saying</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-white/55 max-w-lg leading-relaxed">
              Hundreds of Ontario homeowners and businesses trust Elite Roofing to protect what matters most. Read their stories below.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a55a] text-[#c9a55a]" />
                ))}
              </div>
              <span className="font-sans text-sm text-white/60">4.9 out of 5 &middot; 300+ Google Reviews</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main reviews section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">

          {/* Summary box */}
          <FadeIn className="mb-12">
            <div className="bg-white border border-[#e7e5e4] rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-3.5 h-3.5 text-[#c9a55a]" />
                <span className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-[#64748b]">
                  What Customers Say
                </span>
              </div>
              <p className="font-sans text-sm text-[#475569] leading-relaxed mb-5">
                Clients across the Greater Toronto Area consistently praise Elite Roofing for their prompt arrival times, transparent written quotes, and immaculate job-site cleanup. Many homeowners highlight how the team handled insurance claims on their behalf, making a stressful process completely painless. Customers in Vaughan, Markham, Oakville, Mississauga and surrounding communities describe the crew as knowledgeable, respectful, and genuinely invested in the outcome of every project — whether a quick repair or a full roof replacement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Fast Response', 'Fair & Transparent Pricing', 'Quality Materials', 'Clean Job Sites', 'Insurance Assistance', 'GAF Certified', 'Professional Crew', 'On-Time Completion'].map((tag) => (
                  <span key={tag} className="font-sans text-[10px] text-[#64748b] border border-[#e7e5e4] px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-sans text-[10px] text-[#94a3b8]">Summary based on verified Google reviews.</p>
            </div>
          </FadeIn>

          {/* Stars + Leave a Review */}
          <FadeIn className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a55a] text-[#c9a55a]" />
                ))}
              </div>
              <p className="font-sans text-xs text-[#94a3b8] tracking-wide">4.9 out of 5 across 300 Google reviews</p>
            </div>
            <a
              href="https://customerreviews.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#c9a55a] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-all duration-300"
            >
              Leave a Google Review
            </a>
          </FadeIn>

          {/* Initial 6 reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {initialReviews.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <ReviewCard t={t} />
              </FadeIn>
            ))}
          </div>

          {/* Show More */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                key="extra-testimonial-reviews"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0 } }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                  {extraReviews.map((t) => (
                    <ReviewCard key={t.name} t={t} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="inline-flex items-center gap-3 px-8 py-3 border border-[#0f172a]/30 rounded-full font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-[#0f172a] hover:border-[#0f172a] transition-colors duration-200"
            >
              <span className="text-[8px]">{showMore ? '▼' : '▶'}</span>
              {showMore ? 'Show Less' : 'Show More Reviews'}
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#c9a55a] mb-5 block">
              Get Started Today
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Need Reliable Roofing Services
              <br />
              <span className="text-[#c9a55a]">in Ontario?</span>
            </h2>
            <p className="font-sans text-sm text-white/55 leading-relaxed mb-10 max-w-xl mx-auto">
              Join hundreds of satisfied Ontario homeowners and businesses. Our free inspection includes a full assessment, photographic documentation, and a transparent written proposal — no obligation, no pressure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#c9a55a] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300"
            >
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
