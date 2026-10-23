import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Elite Roofing LLC â€” how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-28 pb-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-[#8c6d41] mb-4 block">
            Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Privacy Policy
          </h1>
          <div className="w-14 h-[2px] bg-[#b59b74] mb-5" />
          <p className="font-sans text-sm text-[#64748b]">
            Last updated: October 1, 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose-elite space-y-10 font-sans text-sm text-[#374151] leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              1. Introduction
            </h2>
            <p>
              Elite Roofing LLC (&ldquo;Elite Roofing,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy
              and is committed to protecting the personal information you share with us.
              This Privacy Policy describes how we collect, use, disclose, and safeguard
              your information when you visit our website at{' '}
              <span className="text-[#b59b74]">www.eliteroofingon.ca</span> or contact us
              to request services.
            </p>
            <p className="mt-3">
              By using our website or submitting your information to us, you agree to the
              practices described in this Privacy Policy. If you do not agree, please do
              not use our website or submit your information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following categories of personal information:
            </p>
            <ul className="list-none space-y-2 pl-4">
              {[
                'Contact information: name, email address, phone number, and mailing address.',
                'Property information: home address, roof type, and project details you provide.',
                'Communication records: messages, emails, and notes from phone calls or form submissions.',
                'Usage data: IP address, browser type, pages visited, and time spent on our website (collected via cookies and analytics tools).',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b59b74] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-none space-y-2 pl-4">
              {[
                'Respond to your inquiries and provide the roofing services you request.',
                'Schedule and confirm free inspections and project estimates.',
                'Communicate project details, timelines, and updates.',
                'Send service reminders or relevant information about maintaining your roof (you may opt out at any time).',
                'Improve our website and understand how visitors use it.',
                'Comply with applicable legal obligations.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b59b74] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third parties
              for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              4. Information Sharing
            </h2>
            <p className="mb-3">
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-none space-y-2 pl-4">
              {[
                'Service providers: We may share information with trusted vendors who assist us with scheduling, payment processing, or communications, solely as needed to deliver our services.',
                'Legal compliance: We may disclose information if required by law, regulation, or valid legal process.',
                'Business transfer: If Elite Roofing is acquired or merges with another entity, your information may be transferred as part of that transaction.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b59b74] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              5. Cookies and Analytics
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies to improve your
              browsing experience and analyze site usage. You can control cookie settings
              through your browser. Note that disabling certain cookies may affect site
              functionality. We use analytics services (such as Google Analytics) that
              collect anonymized usage data to help us understand how visitors interact
              with our site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              6. Data Security
            </h2>
            <p>
              We implement reasonable technical and organizational measures to protect
              your personal information from unauthorized access, disclosure, alteration,
              or destruction. However, no method of transmission over the internet or
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may have the following rights regarding your
              personal information:
            </p>
            <ul className="list-none space-y-2 pl-4">
              {[
                'Access: Request a copy of the personal information we hold about you.',
                'Correction: Request that we correct inaccurate or incomplete information.',
                'Deletion: Request that we delete your personal information, subject to legal retention requirements.',
                'Opt-out: Unsubscribe from marketing communications at any time.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b59b74] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at the information below.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              8. Children&rsquo;s Privacy
            </h2>
            <p>
              Our website is not directed to children under 13 years of age, and we do
              not knowingly collect personal information from children. If you believe a
              child has submitted information to us, please contact us and we will
              promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will
              update the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to
              review this Policy periodically to stay informed about how we protect your
              information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f172a] mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="mt-4 p-5 border border-[#e7e5e4] bg-[#fafaf9]">
              <p className="font-semibold text-[#0f172a] mb-1">Elite Roofing LLC</p>
              <p>3250 Ridgeway Dr, Unit 12, Mississauga, ON L5L 5Z9</p>
              <p>
                Phone:{' '}
                <a href="tel:+19055550198" className="text-[#b59b74] hover:underline">
                  (905) 555-0198
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:info@eliteroofingon.ca"
                  className="text-[#b59b74] hover:underline"
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
            className="font-sans text-sm text-[#64748b] hover:text-[#b59b74] transition-colors"
          >
            â† Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}

