import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Clock, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react'
import { blogPosts } from '@/data/mockData'
import blogContent from '@/data/blogContent'

interface PageProps {
  params: { slug: string }
}

// Generate static paths for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

// Generate per-post SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const content = blogContent[post.slug]

  // Determine prev/next posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  // Related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug && p.category === post.category)
    .slice(0, 2)

  return (
    <>
      {/* Article Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        {/* Header area */}
        <div className="bg-[#0f172a] pt-12 pb-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link
                href="/blog"
                className="flex items-center gap-1.5 font-sans text-xs text-white/40 hover:text-[#c9a55a] transition-colors duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All Articles
              </Link>
              <span className="text-white/20">/</span>
              <span className="font-sans text-xs text-[#c9a55a]">{post.category}</span>
            </div>

            {/* Category badge */}
            <span className="inline-flex items-center px-3 py-1 bg-[#c9a55a]/15 border border-[#c9a55a]/30 text-[#c9a55a] font-sans text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#e7e5e4] flex-shrink-0">
                  <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-white leading-none">{post.author}</p>
                  <p className="font-sans text-xs text-white/40 mt-0.5">{post.authorRole}</p>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-1.5 font-sans text-xs text-white/40">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </div>
              <div className="font-sans text-xs text-white/40">
                {formatDate(post.date)}
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-72 md:h-96 lg:h-[480px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/30 via-transparent to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-3xl mx-auto">

          {content ? (
            <article className="prose-elite">
              {/* Intro paragraph */}
              <p className="font-serif text-lg md:text-xl text-[#0f172a] leading-relaxed mb-10 pb-10 border-b border-[#e7e5e4]">
                {content.intro}
              </p>

              {/* Sections */}
              {content.sections.map((section, i) => (
                <div key={i} className="mb-8">
                  {section.heading && (
                    <h2 className="font-serif text-2xl font-bold text-[#0f172a] mb-4 flex items-start gap-3">
                      <span className="text-[#c9a55a] font-serif text-lg mt-1 flex-shrink-0">â€”</span>
                      {section.heading}
                    </h2>
                  )}
                  <p className="font-sans text-base text-[#334155] leading-relaxed">{section.text}</p>
                </div>
              ))}

              {/* Conclusion */}
              <div className="mt-10 pt-10 border-t border-[#e7e5e4]">
                <div className="bg-[#c9a55a]/8 border-l-4 border-[#c9a55a] pl-6 py-5 pr-5">
                  <p className="font-serif text-base text-[#0f172a] leading-relaxed italic">
                    {content.conclusion}
                  </p>
                </div>
              </div>
            </article>
          ) : (
            <div className="py-10 text-center">
              <p className="font-sans text-[#64748b]">Full article coming soon.</p>
              <p className="font-sans text-sm text-[#94a3b8] mt-2">{post.excerpt}</p>
            </div>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[#e7e5e4]">
              <div className="flex flex-wrap items-center gap-3">
                <Tag className="w-3.5 h-3.5 text-[#c9a55a]" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white border border-[#e7e5e4] font-sans text-xs text-[#64748b] hover:border-[#c9a55a]/40 hover:text-[#c9a55a] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-12 p-6 md:p-8 bg-white border border-[#e7e5e4]">
            <div className="flex items-start gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#e7e5e4] flex-shrink-0">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a55a] mb-1">
                  About the Author
                </p>
                <h3 className="font-serif text-lg font-semibold text-[#0f172a] mb-1">{post.author}</h3>
                <p className="font-sans text-xs text-[#64748b] mb-3">{post.authorRole} at Elite Roofing</p>
                <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                  A certified roofing specialist with 15+ years of hands-on experience in
                  residential and commercial roofing across Ontario and the Greater Toronto Area.
                </p>
              </div>
            </div>
          </div>

          {/* Prev/Next Navigation */}
          {(prevPost || nextPost) && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-5 bg-white border border-[#e7e5e4] hover:border-[#c9a55a]/40 transition-all duration-300"
                >
                  <p className="flex items-center gap-1.5 font-sans text-[10px] text-[#94a3b8] uppercase tracking-wider mb-2">
                    <ArrowLeft className="w-3 h-3" /> Previous
                  </p>
                  <p className="font-serif text-sm font-semibold text-[#0f172a] group-hover:text-[#c9a55a] transition-colors leading-snug line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-5 bg-white border border-[#e7e5e4] hover:border-[#c9a55a]/40 transition-all duration-300 text-right"
                >
                  <p className="flex items-center justify-end gap-1.5 font-sans text-[10px] text-[#94a3b8] uppercase tracking-wider mb-2">
                    Next <ArrowRight className="w-3 h-3" />
                  </p>
                  <p className="font-serif text-sm font-semibold text-[#0f172a] group-hover:text-[#c9a55a] transition-colors leading-snug line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white border-t border-[#e7e5e4]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-[#0f172a] mb-2">Related Articles</h2>
            <div className="w-10 h-[2px] bg-[#c9a55a] mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-5 bg-white border border-[#e7e5e4] p-5 hover:border-[#c9a55a]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-semibold text-[#c9a55a] tracking-wider uppercase">
                      {related.category}
                    </span>
                    <h3 className="font-serif text-sm font-semibold text-[#0f172a] group-hover:text-[#c9a55a] transition-colors leading-snug mt-1 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="flex items-center gap-1.5 font-sans text-xs text-[#94a3b8] mt-2">
                      <Clock className="w-3 h-3" /> {related.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#c9a55a] mb-2">
              Ready to Take Action?
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
              Get a Free Roof Inspection Today
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a55a] text-white font-sans text-xs font-medium tracking-[0.25em] uppercase hover:bg-[#a87d3a] transition-colors duration-300 flex-shrink-0"
          >
            Schedule Inspection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
