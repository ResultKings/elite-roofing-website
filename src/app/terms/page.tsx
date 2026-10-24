import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Elite Roofing LLC â€” the terms and conditions governing use of our website and services.',
}

export default function TermsOfServicePage() {
  return (
    <main className="pt-28 pb-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="font-sans text-[12px] font-semibold tracking-[0.3em] uppercase text-[#8a6928] mb-4 block">
            Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Terms of Service
          </h1>
          <div className="w-14 h-[2px] bg-[#c9a55a] mb-5" />
          <p className="font-sans text-sm text-[#64748b]">
            Last updated: October 1, 2024
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 font-sans text-sm text-[#374151] leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website at{' '}
              <span className="text-[#c9a55a]">www.eliteroofingon.ca</span> (the
              &ldquo;Site&rdquo;) or engaging Elite Roofing LLC (&ldquo;Elite Roofing,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) for roofing services, you agree to be bound by these Terms of
              Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use
              our Site or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              2. Use of the Website
            </h2>
            <p className="mb-3">
              You agree to use the Site only for lawful purposes and in a manner that
              does not infringe the rights of any third party. You may not:
            </p>
            <ul className="list-none space-y-2 pl-4">
              {[
                'Use the Site for any fraudulent or unlawful purpose.',
                'Attempt to gain unauthorized access to any part of the Site or its related systems.',
                'Transmit any unsolicited commercial communications (spam).',
                'Reproduce, duplicate, copy, sell, or resell any portion of the Site without express written permission.',
                'Use automated tools to scrape, crawl, or extract data from the Site.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9a55a] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              3. Services and Estimates
            </h2>
            <p>
              Information provided on this Site, including service descriptions, material
              specifications, and pricing references, is for general informational purposes
              only and does not constitute a binding offer or contract. Actual pricing,
              project scope, and timelines are established only through a written proposal
              signed by both parties. Free inspection and estimate offers are subject to
              availability and geographic service area.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              4. Warranties and Representations
            </h2>
            <p>
              Warranties for completed roofing work are as specified in your written
              project contract and any manufacturer warranty documentation provided at
              project completion. Representations made on this website regarding
              certifications (e.g., GAF Master Elite status), ratings, and years of
              experience are accurate as of the last update date and are subject to
              change. Elite Roofing makes no warranty that the Site will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All content on the Site (including text, images, graphics, logos, and
              design) is the property of Elite Roofing LLC or its content suppliers and
              is protected by applicable copyright and trademark laws. You may not
              reproduce, distribute, or create derivative works from any Site content
              without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              6. Third-Party Links
            </h2>
            <p>
              The Site may contain links to third-party websites. These links are provided
              for your convenience only. Elite Roofing does not endorse, control, or
              accept responsibility for the content, privacy practices, or accuracy of
              any third-party site. Visiting linked sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Elite Roofing LLC shall
              not be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of or inability to use the Site or
              services described herein. In no event shall our total liability to you
              exceed the amount you paid to Elite Roofing for the specific service giving
              rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Elite Roofing LLC and its
              officers, directors, employees, and agents from and against any claims,
              liabilities, damages, losses, and expenses (including legal fees) arising
              out of your use of the Site, your violation of these Terms, or your
              infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              9. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws
              of the Province of Ontario, Canada, without regard to its conflict of law
              provisions. Any disputes arising under these Terms shall be subject to the
              exclusive jurisdiction of the courts located in the Province of Ontario.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              10. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. When we do, we
              will update the &ldquo;Last updated&rdquo; date above. Continued use of the Site after
              changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <div className="mt-4 p-5 border border-[#e7e5e4] bg-[#fafaf9]">
              <p className="font-semibold text-[#0f172a] mb-1">Elite Roofing LLC</p>
              <p>3250 Ridgeway Dr, Unit 12, Mississauga, ON L5L 5Z9</p>
              <p>
                Phone:{' '}
                <a href="tel:+19055550198" className="text-[#c9a55a] hover:underline">
                  (905) 555-0198
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:info@eliteroofingon.ca"
                  className="text-[#c9a55a] hover:underline"
                >
                  info@eliteroofingon.ca
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[#e7e5e4]">
          <Link
            href="/"
            className="font-sans text-sm text-[#64748b] hover:text-[#c9a55a] transition-colors"
          >
            â† Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}

