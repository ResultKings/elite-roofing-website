export interface Service {
  id: string
  slug: string
  icon: string
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  image: string
}

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  location: string
  year: string
  description: string
  image: string
  images: string[]
  featured: boolean
  tags: string[]
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  authorImage: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  rating: number
  quote: string
  image: string
  projectType: string
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'residential-roofing',
    icon: 'Home',
    title: 'Residential Roofing',
    shortDescription:
      'Full-service residential roof installation, replacement, and upgrades for homes of every style.',
    fullDescription:
      'Our residential roofing services encompass everything from new construction installations to complete roof replacements. We work with premium materials including architectural shingles, metal roofing, cedar shakes, and slate to deliver roofs that are both beautiful and built to last.',
    features: [
      'Complete tear-off and replacement',
      'Architectural shingle systems',
      'Metal roofing installation',
      'Cedar shake and slate options',
      'Energy-efficient materials',
      'Full warranty coverage',
    ],
    image: '/residential-roofing.webp',
  },
  {
    id: '2',
    slug: 'commercial-roofing',
    icon: 'Building2',
    title: 'Commercial Roofing',
    shortDescription:
      'Durable, high-performance commercial roofing systems for businesses, retail, and industrial properties.',
    fullDescription:
      'Elite Roofing provides comprehensive commercial roofing solutions designed to protect your business assets. Our team specializes in TPO, EPDM, modified bitumen, and built-up roofing systems for low-slope and flat roof applications.',
    features: [
      'TPO and EPDM membrane systems',
      'Modified bitumen roofing',
      'Built-up (BUR) systems',
      'Rooftop HVAC accommodation',
      'Minimal business disruption',
      'Preventive maintenance programs',
    ],
    image: '/commercial-roofing.jpg',
  },
  {
    id: '3',
    slug: 'roof-repair',
    icon: 'Wrench',
    title: 'Roof Repair',
    shortDescription:
      "Fast, expert repairs for leaks, storm damage, and wear, restoring your roof's integrity promptly.",
    fullDescription:
      'When damage strikes, our rapid-response repair team is ready to assess and restore your roof. We identify the root cause of leaks and damage, providing lasting repairs rather than temporary fixes, backed by our workmanship warranty.',
    features: [
      'Same-day emergency response',
      'Leak detection and repair',
      'Flashing replacement',
      'Ridge and valley repairs',
      'Fascia and soffit repairs',
      'Workmanship guarantee',
    ],
    image: '/roof-repair.webp',
  },
  {
    id: '4',
    slug: 'storm-damage-restoration',
    icon: 'Cloud',
    title: 'Storm Damage Restoration',
    shortDescription:
      'Comprehensive storm damage assessment and restoration, with full insurance claim support.',
    fullDescription:
      'Severe weather can devastate a roof in minutes. Our storm damage specialists provide thorough inspections, detailed documentation for insurance claims, and complete restoration services to bring your property back to pre-storm condition and often better.',
    features: [
      'Free storm damage inspections',
      'Insurance claim assistance',
      'Hail and wind damage repair',
      'Emergency tarping and board-up',
      'Complete roof replacement when needed',
      'Direct insurance billing available',
    ],
    image: '/storm-damage.webp',
  },
  {
    id: '5',
    slug: 'gutter-systems',
    icon: 'Droplets',
    title: 'Gutter Systems',
    shortDescription:
      "Seamless gutters, guards, and complete drainage systems to protect your home's foundation.",
    fullDescription:
      "A properly functioning gutter system is essential to protecting your home's foundation, siding, and landscaping. We install seamless aluminum and copper gutters, leaf-guard systems, and downspout extensions tailored to your property.",
    features: [
      'Seamless aluminum gutters',
      'Copper gutter installation',
      'Leaf guard and protection systems',
      'Downspout extensions',
      'Gutter cleaning and maintenance',
      'Custom colors to match your home',
    ],
    image: '/gutter-systems.jpg',
  },
  {
    id: '6',
    slug: 'skylight-installation',
    icon: 'Sun',
    title: 'Skylight Installation',
    shortDescription:
      'Premium skylight solutions that flood your interiors with natural light while maintaining a watertight seal.',
    fullDescription:
      'Skylights transform living spaces by introducing natural light and enhancing architectural character. We source and install premium Velux and Solatube skylights with proper flashing and sealing for a guaranteed leak-free installation.',
    features: [
      'Fixed and venting skylights',
      'Tubular daylighting systems',
      'Energy-efficient glazing options',
      'Leak-proof flashing systems',
      'Integrated blinds available',
      'Sun tunnel installation',
    ],
    image: '/skylight-installation.webp',
  },
  {
    id: '7',
    slug: 'roof-inspection',
    icon: 'Search',
    title: 'Roof Inspection',
    shortDescription: 'Comprehensive professional roof assessments that identify vulnerabilities before they become costly problems.',
    fullDescription: 'Our certified roof inspectors conduct thorough evaluations of every roof component, from deck sheathing and underlayment to flashings, penetrations, and ridge systems. We document every finding with high-resolution photography and deliver a detailed written report within 24 hours.',
    features: [
      'Full photographic documentation',
      'Drone-assisted inspection available',
      'Written condition report within 24 hours',
      'Insurance-ready documentation',
      'Pre-purchase home inspection reports',
      'Post-storm damage assessment',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: '8',
    slug: 'emergency-roofing',
    icon: 'Zap',
    title: 'Emergency Roofing',
    shortDescription: 'Rapid-response emergency roofing services available 24/7 to protect your property when disaster strikes.',
    fullDescription: 'Roofing emergencies do not wait for business hours. Our dedicated emergency response team is on call around the clock, equipped to secure your property, stop active leaks, and deploy temporary protection within hours of your call.',
    features: [
      '24/7 emergency dispatch',
      'On-site within 4 hours or less',
      'Emergency tarping and board-up',
      'Active leak containment',
      'Storm and wind damage response',
      'After-hours and weekend availability',
    ],
    image: 'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: '9',
    slug: 'flat-roofing',
    icon: 'Layers',
    title: 'Flat Roofing',
    shortDescription: "Expert flat and low-slope roofing systems engineered for Ontario's demanding climate and freeze-thaw cycles.",
    fullDescription: "Flat and low-slope roofs require specialized systems and expertise. We design and install TPO, EPDM, modified bitumen, and spray polyurethane foam systems tailored to your building's load requirements, drainage profile, and long-term performance goals.",
    features: [
      'TPO and EPDM membrane systems',
      'Modified bitumen hot-applied systems',
      'Spray polyurethane foam (SPF)',
      'Internal and scupper drain design',
      'Parapet and curb flashing',
      'Bi-annual maintenance programs',
    ],
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: '10',
    slug: 'multi-family-roofing',
    icon: 'Building',
    title: 'Multi-Family Roofing',
    shortDescription: 'Specialized roofing solutions for condominiums, townhouses, and apartment complexes with minimal tenant disruption.',
    fullDescription: 'Multi-family properties demand a roofing partner who understands occupied buildings, strata management, and phased project delivery. We work closely with property managers and condo boards to deliver complete roofing solutions on time and within budget.',
    features: [
      'Phased project scheduling',
      'Direct condo board reporting',
      'Reserve fund study coordination',
      'Occupied building protocols',
      'Multi-unit pricing advantages',
      'Preventive maintenance contracts',
    ],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: '11',
    slug: 'roof-replacement',
    icon: 'RefreshCw',
    title: 'Roof Replacement',
    shortDescription: 'Complete tear-off and replacement of aging or failed roofing systems, built for decades of trouble-free performance.',
    fullDescription: 'When a roof reaches the end of its serviceable life, a proper replacement is the most cost-effective solution. Our complete replacement service includes full tear-off, decking inspection and repair, upgraded underlayment, and installation of premium roofing systems backed by manufacturer and workmanship warranties.',
    features: [
      'Full tear-off and debris removal',
      'Deck sheathing inspection and repair',
      'Ice-and-water shield upgrades',
      'High-performance underlayment systems',
      'GAF Master Elite certified installation',
      '10-year workmanship warranty',
    ],
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: '12',
    slug: 'roof-tarping',
    icon: 'Shield',
    title: 'Roof Tarping',
    shortDescription: 'When damage hits unexpectedly, roof tarping acts as a temporary shield, preventing further water penetration until permanent repairs are made.',
    fullDescription: 'A properly installed emergency tarp is the difference between a contained repair and a catastrophic interior loss. Our crew deploys professional-grade, UV-resistant polyethylene tarps anchored with battens and weighted edges to provide genuine, wind-resistant protection for weeks if needed.',
    features: [
      '24/7 emergency deployment',
      'Commercial-grade 10mil polyethylene',
      'Batten-and-anchor installation',
      'Wind-rated up to 60 mph',
      'Insurance documentation provided',
      'Seamless handoff to permanent repair',
    ],
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format',
  },
]

export const projects: Project[] = [
  {
    id: '1',
    slug: 'heritage-oak-estate',
    title: 'Heritage Oak Estate',
    category: 'Residential',
    location: 'Oakville, ON',
    year: '2024',
    description:
      'Complete re-roofing of a 7,200 sq ft colonial estate with premium natural slate tiles, custom copper gutters, and matching copper flashing for a seamless historic aesthetic.',
    image:
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
    ],
    featured: true,
    tags: ['Natural Slate', 'Copper Gutters', 'Historic Restoration'],
  },
  {
    id: '2',
    slug: 'meridian-office-complex',
    title: 'Meridian Office Complex',
    category: 'Commercial',
    location: 'Mississauga, ON',
    year: '2024',
    description:
      'Full commercial roof replacement of a 45,000 sq ft office complex with a high-performance TPO membrane system, improved drainage, and solar-ready mounting infrastructure.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format',
    ],
    featured: true,
    tags: ['TPO Membrane', 'Commercial', 'Solar-Ready'],
  },
  {
    id: '3',
    slug: 'riverside-modern-home',
    title: 'Riverside Modern Residence',
    category: 'Residential',
    location: 'Toronto, ON',
    year: '2024',
    description:
      'Standing-seam metal roof installation on a contemporary architectural home, combining sleek aesthetics with unparalleled durability and a 50-year finish warranty.',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
    ],
    featured: true,
    tags: ['Metal Roofing', 'Modern', 'Standing Seam'],
  },
  {
    id: '4',
    slug: 'cedar-ridge-farmhouse',
    title: 'Cedar Ridge Farmhouse',
    category: 'Residential',
    location: 'Vaughan, ON',
    year: '2023',
    description:
      'Cedar shake roof restoration and replacement on a classic farmhouse, preserving the original character with naturally sourced, hand-split cedar shakes.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
    ],
    featured: false,
    tags: ['Cedar Shake', 'Historic', 'Restoration'],
  },
  {
    id: '5',
    slug: 'lakefront-villa',
    title: 'Lakefront Villa',
    category: 'Residential',
    location: 'Burlington, ON',
    year: '2023',
    description:
      'Complete storm damage restoration after a major weather event, including full roof replacement, gutter overhaul, and skylight installation, all documented for insurance reimbursement.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=800&h=600&fit=crop&auto=format',
    ],
    featured: false,
    tags: ['Storm Restoration', 'Skylights', 'Insurance Claim'],
  },
  {
    id: '6',
    slug: 'plaza-retail-center',
    title: 'Plaza Retail Center',
    category: 'Commercial',
    location: 'Brampton, ON',
    year: '2023',
    description:
      'Planned commercial re-roofing of a 28,000 sq ft retail strip with EPDM rubber membrane, new flashing, and internal drains, completed over a weekend to minimize tenant disruption.',
    image:
      'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
    ],
    featured: false,
    tags: ['EPDM', 'Commercial', 'Retail'],
  },
  {
    id: '7',
    slug: 'markham-estate',
    title: 'Markham Heritage Estate',
    category: 'Residential',
    location: 'Markham, ON',
    year: '2023',
    description:
      'Full architectural shingle replacement on a sprawling 5,800 sq ft estate, featuring GAF Timberline HDZ in Charcoal with matching ridge caps and enhanced ice-and-water shield throughout.',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format',
    ],
    featured: false,
    tags: ['Architectural Shingles', 'GAF System', 'Residential'],
  },
  {
    id: '8',
    slug: 'vaughan-corporate-campus',
    title: 'Vaughan Corporate Campus',
    category: 'Commercial',
    location: 'Vaughan, ON',
    year: '2024',
    description:
      'Multi-building corporate campus roofing overhaul across 8 buildings, 160,000+ sq ft total, phased over four months with zero operational disruption and full common-area protection.',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format',
    ],
    featured: false,
    tags: ['Multi-Building', 'Commercial', 'Phased Project'],
  },
  {
    id: '9',
    slug: 'oakville-colonial-revival',
    title: 'Oakville Colonial Revival',
    category: 'Residential',
    location: 'Oakville, ON',
    year: '2024',
    description:
      'Historic colonial revival home with a full natural Vermont slate roof restoration, period-accurate copper valley flashing, and custom lead-coated copper ridge detailing.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
    ],
    featured: false,
    tags: ['Vermont Slate', 'Historic', 'Copper Flashing'],
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'signs-you-need-roof-replacement',
    title: '7 Clear Signs Your Roof Needs Replacing, Not Just Repairing',
    excerpt:
      "Knowing the difference between a repair and a replacement can save you thousands. Here are the definitive signs that it's time to invest in a new roof.",
    content: '',
    author: 'James Hartwell',
    authorRole: 'Master Roofer & Founder',
    authorImage:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&auto=format',
    date: '2024-10-01',
    readTime: '6 min read',
    category: 'Maintenance',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    tags: ['Roof Replacement', 'Maintenance', 'Inspection'],
  },
  {
    id: '2',
    slug: 'metal-vs-shingle-roofing',
    title: 'Metal vs. Asphalt Shingles: Which Is Right For Your Home?',
    excerpt:
      'Both options have merit, but the right choice depends on your climate, budget, and long-term goals. We break down the pros and cons of each material.',
    content: '',
    author: 'Sarah Chen',
    authorRole: 'Roofing Consultant',
    authorImage:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&auto=format',
    date: '2024-09-15',
    readTime: '8 min read',
    category: 'Materials',
    image:
      'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=500&fit=crop&auto=format',
    tags: ['Metal Roofing', 'Asphalt Shingles', 'Materials'],
  },
  {
    id: '3',
    slug: 'storm-damage-insurance-guide',
    title: "Navigating Storm Damage Insurance Claims: A Homeowner's Guide",
    excerpt:
      "Filing a roofing insurance claim doesn't have to be stressful. Here's how to document damage, work with your adjuster, and ensure you're fully compensated.",
    content: '',
    author: 'James Hartwell',
    authorRole: 'Master Roofer & Founder',
    authorImage:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&auto=format',
    date: '2024-08-28',
    readTime: '10 min read',
    category: 'Insurance',
    image:
      'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=800&h=500&fit=crop&auto=format',
    tags: ['Storm Damage', 'Insurance', 'Claims'],
  },
  {
    id: '4',
    slug: 'roof-ventilation-guide',
    title: 'Why Proper Roof Ventilation Is the Hidden Key to Roof Longevity',
    excerpt:
      "Inadequate ventilation is one of the top causes of premature roof failure. Discover how the right ventilation system can dramatically extend your roof's lifespan.",
    content: '',
    author: 'Marcus Rivera',
    authorRole: 'Project Manager',
    authorImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    date: '2024-08-10',
    readTime: '7 min read',
    category: 'Installation',
    image:
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=500&fit=crop&auto=format',
    tags: ['Ventilation', 'Longevity', 'Installation'],
  },
  {
    id: '5',
    slug: 'choosing-roofing-contractor',
    title: '10 Questions to Ask Before Hiring Any Roofing Contractor',
    excerpt:
      "Your roof is a major investment. Protect it by knowing exactly what to ask any contractor before you sign a contract.",
    content: '',
    author: 'Sarah Chen',
    authorRole: 'Roofing Consultant',
    authorImage:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&auto=format',
    date: '2024-07-22',
    readTime: '5 min read',
    category: 'Advice',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop&auto=format',
    tags: ['Contractor', 'Tips', 'Hiring'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Margaret & David Thornton',
    role: 'Homeowners',
    location: 'Oakville, ON',
    rating: 5,
    quote:
      'Elite Roofing transformed our 100-year-old home. The slate work is flawless. James and his crew treated our property with extraordinary care. Neighbours stop and ask who did the roof. Worth every penny.',
    image:
      'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&auto=format',
    projectType: 'Natural Slate Replacement',
  },
  {
    id: '2',
    name: 'Robert Kaplan',
    role: 'Property Manager',
    location: 'Mississauga, ON',
    rating: 5,
    quote:
      'Managing 12 commercial properties means I need contractors I can trust completely. Elite Roofing has handled three of my buildings. Consistent quality, zero surprises, and they always finish ahead of schedule.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&auto=format',
    projectType: 'Commercial TPO Roofing',
  },
  {
    id: '3',
    name: 'Christine & Paul Wu',
    role: 'Homeowners',
    location: 'Toronto, ON',
    rating: 5,
    quote:
      "After a devastating hailstorm, I was overwhelmed. Elite Roofing's team handled everything: inspection, documentation, and dealing directly with our insurer. The new roof looks better than the original.",
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&auto=format',
    projectType: 'Storm Damage Restoration',
  },
  {
    id: '4',
    name: 'Andrew Breslin',
    role: 'General Contractor',
    location: 'Vaughan, ON',
    rating: 5,
    quote:
      "I've been working with Elite Roofing as my subcontractor for 8 years. Their metal roofing work on the Riverside project was exceptional: precise, clean, and exactly on spec. My clients are always impressed.",
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    projectType: 'Standing Seam Metal Roofing',
  },
]
