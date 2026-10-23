import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Building2, Wrench, Cloud, Droplets, Sun, CheckCircle } from 'lucide-react'
import { services } from '@/data/mockData'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Elite Roofing offers premium residential and commercial roofing services in Ontario, including Toronto, Mississauga and the GTA, from full replacements and repairs to storm restoration, gutter systems, and skylights.',
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Wrench,
  Cloud,
  Droplets,
  Sun,
}

const serviceImages: Record<string, string> = {
  'residential-roofing':
    'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
  'commercial-roofing':
    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format',
  'roof-repair':
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
  'storm-damage-restoration':
    'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=800&h=600&fit=crop&auto=format',
  'gutter-systems':
    'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format',
  'skylight-installation':
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&auto=format',
}

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-24">
      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-16 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-[#8a6928] mb-4 block">
              What We Do
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-5 leading-[1.05]">
              Premium Roofing
              <br />
              <span className="text-[#c9a55a]">Services</span> for Every Need
            </h1>
            <div className="w-14 h-[2px] bg-[#c9a55a] mb-6" />
            <p className="font-sans text-base text-[#64748b] leading-relaxed">
              From complete residential replacements to commercial systems, emergency storm
              repairs, and precision skylight installations. Elite Roofing delivers master
              craftsmanship with materials that last decades, not years.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-4 md:px-8 lg:px-16 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Home
              const img = serviceImages[service.slug] ?? serviceImages['residential-roofing']
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block bg-white border border-[#e7e5e4] overflow-hidden hover:border-[#c9a55a]/40 hover:shadow-lg transition-all duration-300 rounded-sm"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e7e5e4]">
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-9 h-9 bg-[#c9a55a] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#c9a55a] transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="font-sans text-sm text-[#64748b] leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#c9a55a] flex-shrink-0" />
                            <span className="font-sans text-xs text-[#64748b]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-[#c9a55a] uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                      Explore Service <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why us strip */}
      <section className="px-4 md:px-8 lg:px-16 mb-20 bg-[#fafaf9] py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-[#8a6928] mb-4 block">
              The Elite Difference
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Why Ontario Homeowners Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'GAF Master Elite Certified',
                desc: 'Top 2% of roofing contractors nationwide. This certification requires proven expertise, financial stability, and ongoing training. It unlocks the industry\'s best manufacturer warranties for our clients.',
              },
              {
                title: '10-Year Workmanship Warranty',
                desc: 'Every installation is backed by our written workmanship guarantee, in addition to the manufacturer material warranty. If anything we installed fails, we fix it. Period.',
              },
              {
                title: 'Transparent, Itemized Proposals',
                desc: 'No vague line items. Every proposal includes detailed material specifications, labor breakdown, timeline, and warranty terms in plain language. You know exactly what you\'re paying for before we start.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex flex-col">
                <div className="w-10 h-1 bg-[#c9a55a] mb-5" />
                <h3 className="font-serif text-lg font-semibold text-[#0f172a] mb-3">{title}</h3>
                <p className="font-sans text-sm text-[#64748b] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-[#0f172a] p-10 md:p-16">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a55a]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a55a]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-2xl">
              <span className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-[#8a6928] mb-5 block">
                Free Consultation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Not sure which service you need?
              </h2>
              <p className="font-sans text-base text-white/60 leading-relaxed mb-8">
                Our free inspections include an honest, photo-documented assessment of your
                entire roofing system. We tell you exactly what is needed, nothing more,
                nothing less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c9a55a] text-white font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#a87d3a] transition-colors duration-300"
                >
                  Schedule Free Inspection <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="tel:+19055550198"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/70 font-sans text-xs font-medium tracking-[0.2em] uppercase hover:border-white/40 hover:text-white transition-all duration-300"
                >
                  (905) 555-0198
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

