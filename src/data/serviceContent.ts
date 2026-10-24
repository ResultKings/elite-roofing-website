export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServicePageContent {
  slug: string
  heroImage: string
  galleryImages: string[]
  tagline: string
  highlights: string[]
  faqs: ServiceFAQ[]
}

const serviceContent: Record<string, ServicePageContent> = {
  'residential-roofing': {
    slug: 'residential-roofing',
    heroImage:
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=1400&h=800&fit=crop&auto=format',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
    ],
    tagline: 'Premium protection for the home you love.',
    highlights: [
      '20+ years of residential expertise across Ontario',
      'GAF Master Elite certified installers',
      'Premium materials with lifetime manufacturer warranties',
      '10-year written workmanship warranty on every job',
    ],
    faqs: [
      {
        question: 'How long does a full residential roof replacement take?',
        answer:
          'Most residential roof replacements take 1–3 days depending on the size of the home and the material selected. A standard 2,000 sq ft home with architectural shingles typically takes one full day. Slate or metal installations on larger homes may require 3–5 days. We always provide a firm timeline in writing before work begins.',
      },
      {
        question: 'What roofing materials work best for Ontario homes?',
        answer:
          "Ontario's climate, with cold winters, heavy snowfall, and summer heat and humidity, calls for durable materials. Architectural asphalt shingles are the most popular for their cost-performance balance. For premium homes, natural slate and standing-seam metal offer exceptional longevity (50 to 100 years). We always recommend based on your specific home, budget, and aesthetic goals.",
      },
      {
        question: 'Do I need to leave my home during a roof replacement?',
        answer:
          'No, most homeowners stay home during roof installation. There will be noise from nail guns and foot traffic, but our crew works efficiently to minimize disruption. We do recommend making arrangements for pets that are sensitive to loud noise. Interior work is kept to a minimum, and we use drop cloths to protect landscaping and decks.',
      },
      {
        question: 'What is covered under your residential roofing warranty?',
        answer:
          'Every residential installation comes with a 10-year Elite Roofing workmanship warranty covering any installation-related failures. Materials carry a separate manufacturer warranty: typically 30 years for architectural shingles, lifetime for premium Timberline HDZ, and 50+ years for metal or slate. We provide all warranty documentation in writing at project completion.',
      },
      {
        question: 'How do I know if I need a repair or a full replacement?',
        answer:
          'As a rule: if your roof is under 15 years old and damage is isolated (a few missing shingles, a single flashing failure), repair is likely the right call. If the roof is over 20 years old, shows widespread granule loss, has multiple leak points, or has structural sagging, replacement is almost always more cost-effective over a 10-year horizon. Our free inspection includes an honest assessment with no sales pressure.',
      },
    ],
  },

  'commercial-roofing': {
    slug: 'commercial-roofing',
    heroImage:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&h=800&fit=crop&auto=format',
    galleryImages: [
      'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
    ],
    tagline: 'Protecting your investment, with zero downtime.',
    highlights: [
      'Certified for TPO, EPDM, and modified bitumen systems',
      'Phased installation to keep your business open',
      'Dedicated commercial project management team',
      'Preventive maintenance contracts available',
    ],
    faqs: [
      {
        question: 'What commercial roofing systems do you specialize in?',
        answer:
          'We install and service TPO (thermoplastic polyolefin), EPDM (rubber membrane), modified bitumen, built-up roofing (BUR), and PVC single-ply systems. TPO is our most commonly specified system for its energy efficiency and cost-performance ratio. We assess each building individually and recommend the system that best fits your load requirements, drainage profile, and budget.',
      },
      {
        question: 'Can you work around our business hours to minimize disruption?',
        answer:
          "Absolutely. For retail, medical, and 24/7 operations, we regularly schedule work during off-hours, weekends, or in phased sections so that no area of your building is fully taken offline at once. We've completed full commercial reroofs on active retail centers, hospitals, and data centers with zero business interruption. We'll develop a specific schedule with you before signing any contract.",
      },
      {
        question: 'How do you handle large or multi-building projects?',
        answer:
          'Large commercial projects are managed by a dedicated project manager who serves as your single point of contact from survey to sign-off. For multi-building portfolios, we develop a phased scope of work with fixed milestones, weekly progress reporting, and daily site cleanup protocols. We are fully bonded and carry $5M commercial liability insurance.',
      },
      {
        question: 'Do you offer maintenance programs for commercial roofs?',
        answer:
          'Yes. Our Commercial Roof Maintenance Program (CRMP) includes bi-annual inspections, proactive seam and flashing maintenance, drain clearing, and detailed condition reports. Studies show that proactive maintenance extends commercial roof life by 30–50% versus reactive repair. Program clients also receive priority emergency response and discounted repair rates.',
      },
      {
        question: 'How long does a commercial roof installation take?',
        answer:
          'Timeline varies significantly by roof size, system type, and building access. A 10,000 sq ft flat roof with TPO typically takes 3–5 days. A 50,000+ sq ft installation may require 2–4 weeks. We provide a detailed project schedule with every proposal, including material lead times, so your facilities team can plan accordingly.',
      },
    ],
  },

  'roof-repair': {
    slug: 'roof-repair',
    heroImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=800&fit=crop&auto=format',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
    ],
    tagline: 'Fast response. Lasting repairs. No temporary patches.',
    highlights: [
      'Same-day emergency response for active leaks',
      'Root-cause diagnosis, not just symptom treatment',
      'All repairs backed by our workmanship warranty',
      'Honest assessment: we tell you when repair is not the right call',
    ],
    faqs: [
      {
        question: 'How quickly can you respond to an emergency leak?',
        answer:
          'For active leaks, we offer same-day emergency response 7 days a week. Call our emergency line at (905) 555-0198 and a crew will be dispatched within 4 hours during business hours. After-hours emergency calls are assessed and typically receive next-morning service. We carry emergency tarping materials on all trucks to immediately stop interior damage while the permanent repair is scheduled.',
      },
      {
        question: "Will my homeowner's insurance cover roof repairs?",
        answer:
          "It depends on the cause. Sudden damage from storms, hail, falling trees, or other covered perils is typically insured under your homeowner's policy. Damage caused by lack of maintenance or normal wear is generally not covered. We provide detailed written documentation of all damage with photos, suitable for insurance claim submission, at no charge as part of every inspection.",
      },
      {
        question: 'Can you repair any type of roofing material?',
        answer:
          'Yes. We repair all residential and commercial roofing materials including architectural shingles, 3-tab shingles, natural slate, cedar shake, standing-seam and exposed-fastener metal, TPO, EPDM, modified bitumen, and built-up roofing. We carry a comprehensive inventory of matching materials to ensure repairs are seamless and not patchwork.',
      },
      {
        question: 'How do I know if my roof can be repaired or needs full replacement?',
        answer:
          'We evaluate three factors: age of the existing roof, extent and pattern of damage, and remaining serviceable life. If the roof is under 15 years old and damage is localized, repair almost always makes sense. If the roof is over 20 years old or shows widespread deterioration (multiple leak points, widespread granule loss, systemic fastener failure), we will tell you honestly that repair is throwing good money after bad.',
      },
      {
        question: 'Do you warranty your repair work?',
        answer:
          'Every repair completed by Elite Roofing carries a minimum 2-year workmanship warranty against the same defect recurring. For larger repairs (full section replacements, complete flashing rebuilds), the warranty extends to 5 years. All warranty terms are documented in writing and provided at job completion.',
      },
    ],
  },

  'storm-damage-restoration': {
    slug: 'storm-damage-restoration',
    heroImage:
      'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=1400&h=800&fit=crop&auto=format',
    galleryImages: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
    ],
    tagline: "When the storm passes, we make it right.",
    highlights: [
      'Free storm damage inspections, 7 days a week',
      'Expert insurance claim support and documentation',
      'Emergency tarping to prevent further damage',
      'Direct billing to most major insurance carriers',
    ],
    faqs: [
      {
        question: 'What should I do immediately after storm damage?',
        answer:
          "First, document everything from ground level with your phone. Do not go on the roof yourself. Take photos from all angles. If you have active leaks, place buckets and protect valuables. Then call us for emergency tarping if there are exposed areas. Report the claim to your insurer within 24 hours (most policies require prompt notice). Do not make any permanent repairs until after your adjuster has visited.",
      },
      {
        question: 'How do you help with the insurance claim process?',
        answer:
          "We provide a complete professional damage assessment with detailed photographs before your adjuster arrives. This independent documentation consistently results in higher initial settlement offers. We attend adjuster meetings on request, identify missed damage items, prepare written supplements when the adjuster's scope is incomplete, and have direct billing relationships with all major Ontario insurers. Our goal is to get you fully compensated.",
      },
      {
        question: 'What types of storm damage can you repair?',
        answer:
          "We handle all types of weather-related roofing damage: hail damage (granule loss, punctures, shingle fractures), wind damage (lifted and missing shingles, ridge cap loss, fascia damage), ice dam damage, fallen tree and debris impact, and lightning strike damage. We also handle associated interior water damage documentation for insurance purposes.",
      },
      {
        question: 'How long does the full storm damage restoration process take?',
        answer:
          'Emergency tarping is same-day or next-day. The insurance claim process varies by carrier, typically 1 to 3 weeks from claim to adjuster visit to settlement offer. Once insurance is approved, we schedule the actual restoration work within 1–2 weeks. Total time from storm to completed restoration is typically 3–6 weeks for residential, 6–12 weeks for complex commercial properties.',
      },
      {
        question: 'Will insurance cover a full roof replacement after storm damage?',
        answer:
          "If hail or wind damage is widespread enough that matching the existing shingles is not possible (a very common situation), most policies will cover a full roof replacement rather than a patchwork repair, even if only a portion of shingles are technically damaged. We know how to identify and document these situations. Ontario insurance regulations also have specific provisions about matching coverage that we apply to every claim.",
      },
    ],
  },

  'gutter-systems': {
    slug: 'gutter-systems',
    heroImage:
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1400&h=800&fit=crop&auto=format',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
    ],
    tagline: 'Complete drainage protection from roofline to foundation.',
    highlights: [
      'Custom-formed seamless gutters in over 30 colors',
      'Copper gutters with hand-soldered joints',
      'Micro-mesh leaf guards with lifetime warranty',
      'Free gutter inspection with every roofing estimate',
    ],
    faqs: [
      {
        question: 'What is the advantage of seamless gutters over sectional?',
        answer:
          'Seamless gutters are formed on-site in one continuous piece, eliminating the joints that are the primary leak and failure points in sectional gutters. They also require less maintenance, look cleaner, and are available in a far wider range of profiles and colors. They cost more upfront but last significantly longer and perform better, especially in high-volume rainfall events.',
      },
      {
        question: 'How often should gutters be cleaned?',
        answer:
          "In Ontario, we recommend cleaning gutters at minimum twice per year: once in late spring after seed drop, and once in late November after leaf fall. Homes under mature deciduous trees may need 3–4 cleanings annually. Neglected gutters can cause fascia rot, foundation saturation, and basement flooding, all far more expensive than regular cleaning.",
      },
      {
        question: 'Are gutter guards worth the investment?',
        answer:
          'Quality gutter guards, specifically micro-mesh systems with 50-micron stainless mesh, are highly effective and we stand behind them. They eliminate routine cleaning for most homeowners and are particularly worthwhile on homes with difficult roof access. We do not install reverse-curve or screen-type guards, which create more problems than they solve. We only install the MasterShield micro-mesh system.',
      },
      {
        question: 'What gutter materials do you offer?',
        answer:
          "We install 0.032\" and 0.040\" aluminum seamless gutters in 5\" K-style, 6\" K-style, and half-round profiles, in 30+ factory finishes. For premium applications, we install copper gutters with hand-soldered miters and end caps, the traditional choice for historic homes, slate roofs, and properties where the gutter is a visible architectural feature. We also install commercial-grade steel gutters for industrial properties.",
      },
      {
        question: 'How do I know when gutters need replacing versus cleaning?',
        answer:
          'Signs that gutters need replacing rather than just cleaning: pulling away from the fascia (fastener failure), sagging between hangers (improper pitch or weight damage), visible cracks, splits, or holes in sections, peeling paint or rust staining on the exterior, and water marks on the fascia or siding directly below the gutter. Our team assesses this at every inspection and will not recommend replacement if cleaning or minor repair is sufficient.',
      },
    ],
  },

  'skylight-installation': {
    slug: 'skylight-installation',
    heroImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&h=800&fit=crop&auto=format',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
    ],
    tagline: 'Bring the outside in. Permanently.',
    highlights: [
      'Velux and Solatube certified installation partner',
      'Guaranteed leak-free installation or we fix it free',
      'Solar-powered venting skylights available',
      'Energy Star-rated glazing options for Ontario climates',
    ],
    faqs: [
      {
        question: 'Will a skylight cause leaks?',
        answer:
          'A properly installed skylight with correct flashing will not leak. The leading cause of skylight leaks is improper flashing, specifically, installers who use sealant instead of purpose-built step and saddle flashing systems. Every skylight we install uses manufacturer-specified curb flashing kits with no exposed caulk at the primary waterline. We back every installation with a written 10-year leak-free guarantee.',
      },
      {
        question: 'What types of skylights do you install?',
        answer:
          'We install fixed skylights (light-only), manually venting skylights, solar-powered venting skylights (no electrician required), tubular daylighting devices (for small spaces and closets), and custom unit skylights for architectural applications. We work exclusively with Velux and Solatube, the two manufacturers with the best long-term performance records and parts availability.',
      },
      {
        question: 'Can skylights improve my home\'s energy efficiency?',
        answer:
          "Modern skylights have dramatically improved in energy performance. Velux's triple-pane and dynamic glazing skylights can reduce solar heat gain by up to 78% compared to older single-pane units while still providing excellent daylight. Properly placed skylights also reduce the need for artificial lighting during daylight hours, typically saving 10–20% on lighting costs. Solar-powered venting models also improve natural ventilation, reducing cooling loads.",
      },
      {
        question: 'How long does skylight installation take?',
        answer:
          'A single standard skylight installation takes 4–6 hours: opening the roof, installing the curb, flashing, and glazing, then patching the interior ceiling. Multiple skylights or larger custom units take proportionally longer. We always complete the weatherproofing in a single day, we never leave a partially installed skylight overnight. Interior finishing (drywall, painting around the light shaft) is a separate step often done by the homeowner.',
      },
      {
        question: 'Are there skylights suitable for low-slope or flat roofs?',
        answer:
          "Yes. For low-slope roofs (below 15 degrees), we install curb-mounted skylights, the skylight unit sits on a raised curb that provides proper drainage. Solatube tubular skylights can also be adapted for low-slope conditions with special flat-roof flashing kits. We assess roof pitch as part of every skylight consultation and recommend the appropriate mounting system for your specific roof.",
      },
    ],
  },
}

export default serviceContent
