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
  categories?: string[]
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
    id: '3',
    slug: 'roof-repair',
    icon: 'Wrench',
    title: 'Roof Repairs',
    shortDescription:
      "Fast, expert repairs for leaks, storm damage, and wear, restoring your roof's integrity promptly.",
    fullDescription:
      'A roof repair done correctly addresses the root cause of the failure, not just the visible symptom. At Elite Roofing, we diagnose every leak with photographic documentation, provide an honest written assessment of what it will take to fix it properly, and complete lasting repairs backed by our written workmanship warranty.',
    features: [
      'Same day emergency response',
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
      'Storm damage moves fast, and so do we. At Elite Roofing, we respond within hours, document every area of damage with the photography your insurer requires, and manage the entire claim and restoration process from emergency tarping to final inspection — so you are fully restored with as little stress as possible.',
    features: [
      'Free storm damage inspections',
      'Insurance claim assistance',
      'Hail and wind damage repair',
      'Emergency tarping and board up',
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
      "A properly designed and installed gutter system is the first line of defence for your foundation, siding, and landscaping. At Elite Roofing, we fabricate seamless eavestroughs on-site to your exact roofline, pitch them correctly to every downspout, and install the system in a single visit — with no joints that leak and no follow-up adjustments.",
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
      'A properly installed skylight transforms a room permanently — flooding it with natural light and improving air circulation without compromising your roof. At Elite Roofing, we install every skylight in a single day with full manufacturer step flashing and a written 10-year leak-free guarantee, so you get the light without the worry.',
    features: [
      'Fixed and venting skylights',
      'Tubular daylighting systems',
      'Energy efficient glazing options',
      'Leak proof flashing systems',
      'Integrated blinds available',
      'Sun tunnel installation',
    ],
    image: '/skylight-installation.webp',
  },
  {
    id: '8',
    slug: 'metal-roofing',
    icon: 'Layers',
    title: 'Metal Roofing',
    shortDescription: 'Standing seam and exposed fastener metal roofing systems built for Ontario\'s climate, lasting 50+ years with minimal maintenance.',
    fullDescription: 'Metal roofing is the highest-performing long-term investment you can make on an Ontario home or building. At Elite Roofing, we install standing seam, metal shingle, and corrugated systems in steel, aluminum, and copper — all engineered for our freeze-thaw climate, anchored with concealed fasteners, and backed by 50-year finish warranties.',
    features: [
      'Standing seam and exposed fastener systems',
      'Steel, aluminum, and copper options',
      '50 year finish warranty available',
      'Superior ice and snow shedding',
      'Energy efficient reflective coatings',
      'Fire resistant Class A rating',
    ],
    image: '/service-metal-roofing.webp',
  },
  {
    id: '9',
    slug: 'flat-roofing',
    icon: 'Layers',
    title: 'Flat Roofing',
    shortDescription: "Expert flat and low slope roofing systems engineered for Ontario's demanding climate and freeze thaw cycles.",
    fullDescription: "Flat and low-slope roofs require specialized membrane systems, correct drainage design, and experienced installation to perform in Ontario winters. At Elite Roofing, we design and install TPO, EPDM, and modified bitumen systems tailored to your building's load requirements and drainage profile — with properly sloped decks and fully adhered terminations that eliminate ponding and premature failure.",
    features: [
      'TPO and EPDM membrane systems',
      'Modified bitumen hot applied systems',
      'Spray polyurethane foam (SPF)',
      'Internal and scupper drain design',
      'Parapet and curb flashing',
      'Bi annual maintenance programs',
    ],
    image: '/service-flat-roofing.jpg',
  },
  {
    id: '10',
    slug: 'multi-family-roofing',
    icon: 'Building',
    title: 'Multi Family Roofing',
    shortDescription: 'Specialized roofing solutions for condominiums, townhouses, and apartment complexes with minimal tenant disruption.',
    fullDescription: 'Multi-family roofing requires a partner who understands occupied buildings, strata management, and the coordination demands of phased project delivery. At Elite Roofing, we work directly with property managers and condo boards to deliver complete roofing solutions on schedule, within budget, and with minimal disruption to residents.',
    features: [
      'Phased project scheduling',
      'Direct condo board reporting',
      'Reserve fund study coordination',
      'Occupied building protocols',
      'Multi unit pricing advantages',
      'Preventive maintenance contracts',
    ],
    image: '/service-multi-family.webp',
  },
  {
    id: '11',
    slug: 'roof-replacement',
    icon: 'RefreshCw',
    title: 'Roof Replacement',
    shortDescription: 'Complete tear off and replacement of aging or failed roofing systems, built for decades of trouble free performance.',
    fullDescription: 'When a roof reaches the end of its serviceable life, a proper replacement is the most cost-effective decision you can make. At Elite Roofing, we complete full tear-offs, inspect and repair the deck, install upgraded underlayment with ice and water shield, and finish with premium roofing systems backed by both manufacturer and 10-year workmanship warranties.',
    features: [
      'Full tear off and debris removal',
      'Deck sheathing inspection and repair',
      'Ice and water shield upgrades',
      'High performance underlayment systems',
      'GAF Master Elite certified installation',
      '10 year workmanship warranty',
    ],
    image: '/service-roof-replacement.jpg',
  },
]

export const projects: Project[] = [
  {
    id: '1',
    slug: 'heritage-oak-estate',
    title: 'Oakville Stone Estate Re-Roof',
    category: 'Residential',
    location: 'Oakville, ON',
    year: '2024',
    description:
      'Full re-roof of a large stone colonial home with premium charcoal metal tile panels and custom copper valley and dormer flashing.',
    image: '/project-res-2.webp',
    images: ['/project-res-2.webp'],
    featured: true,
    tags: ['Metal Tile', 'Colonial Estate', 'Copper Flashing'],
  },
  {
    id: '3',
    slug: 'concord-townhome-complex',
    title: 'Concord 64-Unit Townhome Re-Roof',
    category: 'Multi-Family Roofing',
    categories: ['Multi-Family Roofing'],
    location: 'Concord, ON',
    year: '2024',
    description:
      'Phased re-roofing of a 64-unit townhome complex across four buildings with GAF Timberline HDZ shingles and upgraded ventilation — minimal disruption to residents throughout.',
    image: '/project-res-8.webp',
    images: ['/project-res-8.webp'],
    featured: true,
    tags: ['Multi Family', 'Architectural Shingles', 'Phased Project'],
  },
  {
    id: '5',
    slug: 'markham-heritage-estate',
    title: 'Markham Two-Storey Re-Roof',
    category: 'Residential',
    categories: ['Residential', 'Roof Replacement'],
    location: 'Markham, ON',
    year: '2024',
    description:
      'Complete tear-off and replacement on a large two-storey home with GAF Timberline HDZ in Charcoal, full ice and water shield, and new seamless aluminum eavestroughs with leaf guards.',
    image: '/project-res-6.webp',
    images: ['/project-res-6.webp'],
    featured: true,
    tags: ['Architectural Shingles', 'GAF System', 'Ice Shield'],
  },
  {
    id: '6',
    slug: 'riverside-modern-residence',
    title: 'Toronto Contemporary Home — TPO & Metal',
    category: 'Residential',
    categories: ['Residential', 'Flat Roofing'],
    location: 'Toronto, ON',
    year: '2024',
    description:
      'Low-slope TPO membrane on a contemporary home, paired with a standing seam metal entry canopy — clean integration with the building envelope and a 50-year finish warranty.',
    image: '/project-res-3.jpg',
    images: ['/project-res-3.jpg'],
    featured: false,
    tags: ['TPO Membrane', 'Modern Residential', 'Low Slope'],
  },
  {
    id: '7',
    slug: 'cedar-ridge-farmhouse',
    title: 'Vaughan Two-Storey Roof Replacement',
    category: 'Residential',
    categories: ['Residential', 'Roof Replacement'],
    location: 'Vaughan, ON',
    year: '2023',
    description:
      'Full tear-off and new GAF Timberline HDZ installation on a classic two-storey home, shown here mid-installation with new high-performance underlayment in place.',
    image: '/project-res-5.jpg',
    images: ['/project-res-5.jpg'],
    featured: false,
    tags: ['Roof Replacement', 'Residential', 'GAF System'],
  },
  {
    id: '8',
    slug: 'burlington-lakefront-villa',
    title: 'Burlington Insurance Roof Replacement',
    category: 'Residential',
    categories: ['Residential', 'Roof Replacement'],
    location: 'Burlington, ON',
    year: '2023',
    description:
      'Insurance-documented full replacement after hail damage — GAF Timberline HDZ, three new Velux skylights, and a complete eavestrough overhaul, all finished within one week.',
    image: '/project-res-1.avif',
    images: ['/project-res-1.avif'],
    featured: false,
    tags: ['Storm Restoration', 'Skylights', 'Insurance Claim'],
  },
  {
    id: '9',
    slug: 'thornhill-eavestrough-upgrade',
    title: 'Thornhill Shingle & Gutter Upgrade',
    category: 'Residential',
    categories: ['Residential', 'Gutter Systems'],
    location: 'Thornhill, ON',
    year: '2024',
    description:
      'Combined shingle and eavestrough upgrade — new architectural shingles, drip edge, and a full seamless aluminum gutter system with micro-mesh leaf guards across all rooflines.',
    image: '/project-res-4.webp',
    images: ['/project-res-4.webp'],
    featured: false,
    tags: ['Eavestroughs', 'Leaf Guard', 'Shingle Upgrade'],
  },
  {
    id: '10',
    slug: 'king-city-craftsman-estates',
    title: 'King City Craftsman Re-Roof',
    category: 'Multi-Family Roofing',
    categories: ['Multi-Family Roofing'],
    location: 'King City, ON',
    year: '2023',
    description:
      'Re-roofing of three attached craftsman homes with GAF Timberline HDZ in Pewter Gray, custom ridge caps, enhanced attic ventilation, and new cedar soffits to match the existing architecture.',
    image: '/project-res-7.jpg',
    images: ['/project-res-7.jpg'],
    featured: false,
    tags: ['Craftsman Style', 'Architectural Shingles', 'Multi Unit'],
  },

  // ── Roof Repair ────────────────────────────────────────────────────────────
  {
    id: '16', slug: 'aurora-leak-flashing-repair', title: 'Shingle & Flashing Repair',
    category: 'Roof Repairs', location: 'Aurora, ON', year: '2024',
    description: 'On-site diagnosis and repair of multiple leak points — failed step flashing, a cracked pipe boot, and lifted ridge caps — all resolved in a single visit with full documentation.',
    image: '/project-repair-aurora.webp',
    images: ['/project-repair-aurora.webp'],
    featured: false, tags: ['Leak Repair', 'Flashing', 'Chimney'],
  },
  {
    id: '17', slug: 'newmarket-chimney-cap-seal', title: 'Chimney Cap & Step Flashing Repair',
    category: 'Roof Repairs', location: 'Newmarket, ON', year: '2024',
    description: 'New galvanized chimney cap, re-installed step flashing, and full re-pointing of the surrounding brick on a split-level home. Leak source fully eliminated.',
    image: '/project-repair-2.jpg',
    images: ['/project-repair-2.jpg'],
    featured: false, tags: ['Chimney', 'Flashing', 'Masonry Seal'],
  },
  {
    id: '18', slug: 'barrie-shingle-valley-repair', title: 'Valley Repair & Shingle Replacement',
    category: 'Roof Repairs', location: 'Barrie, ON', year: '2023',
    description: 'Ice dam damage repaired with new W-valley metal, a woven shingle overlay, and ice and water shield at the eaves. No leaks through two subsequent winters.',
    image: '/project-repair-3.jpg',
    images: ['/project-repair-3.jpg'],
    featured: false, tags: ['Valley Repair', 'Ice Dam', 'Shingles'],
  },

  // ── Storm Damage Repair ───────────────────────────────────────────────
  {
    id: '19', slug: 'oshawa-hail-storm-restoration', title: 'Hail Damage Tear-Off & Replacement',
    category: 'Storm Damage Restoration', location: 'Oshawa, ON', year: '2024',
    description: 'Full tear-off after widespread hail damage caused granule loss across all south-facing slopes. Insurance claim documented and approved; new GAF Timberline HDZ installed over a fully inspected deck.',
    image: '/project-storm-1.webp',
    images: ['/project-storm-1.webp'],
    featured: false, tags: ['Hail Damage', 'Insurance Claim', 'Full Replacement'],
  },
  {
    id: '20', slug: 'whitby-wind-damage-response', title: 'Wind Damage Restoration',
    category: 'Storm Damage Restoration', location: 'Whitby, ON', year: '2024',
    description: 'Emergency tarp deployed the same evening after straight-line winds removed shingles across 40% of the roof. Full restoration with new underlayment and shingles completed within five days.',
    image: '/project-storm-2.jpg',
    images: ['/project-storm-2.jpg'],
    featured: false, tags: ['Wind Damage', 'Emergency Tarp', 'Restoration'],
  },
  {
    id: '21', slug: 'ajax-post-storm-rebuild', title: 'Post-Storm Deck & Shingle Rebuild',
    category: 'Storm Damage Restoration', location: 'Ajax, ON', year: '2023',
    description: 'Tree impact caused structural damage to two roof sections. Full deck repair, new framing members, and complete re-roofing with architectural shingles — total rebuild covered by insurance.',
    image: '/project-storm-3.webp',
    images: ['/project-storm-3.webp'],
    featured: false, tags: ['Tree Impact', 'Structural Repair', 'Insurance Claim'],
  },

  // ── Gutter Systems ─────────────────────────────────────────────────────────
  {
    id: '22', slug: 'woodbridge-seamless-aluminum-install', title: 'Seamless Aluminum Eavestrough Install',
    category: 'Gutter Systems', location: 'Woodbridge, ON', year: '2024',
    description: 'Old sectional gutters removed and replaced with new 5″ seamless aluminum eavestroughs in bronze finish, with new fascia wrap and downspout extensions routed away from the foundation.',
    image: '/project-gutter-woodbridge.webp',
    images: ['/project-gutter-woodbridge.webp'],
    featured: false, tags: ['Seamless Gutters', 'Aluminum', 'Downspouts'],
  },
  {
    id: '24', slug: 'stouffville-micro-mesh-guards', title: 'Micro-Mesh Gutter Guard Installation',
    category: 'Gutter Systems', location: 'Stouffville, ON', year: '2023',
    description: 'MasterShield micro-mesh leaf guards installed across 320 linear feet on a heavily treed property — chronic seasonal clogging resolved, no more twice-yearly cleanouts.',
    image: '/project-gutter-stouffville.webp',
    images: ['/project-gutter-stouffville.webp'],
    featured: false, tags: ['Leaf Guards', 'Micro Mesh', 'MasterShield'],
  },

  // ── Skylight Installation ──────────────────────────────────────────────────
  {
    id: '25', slug: 'forest-hill-velux-skylight', title: 'Triple Skylight Installation',
    category: 'Skylight Installation', location: 'Toronto, ON', year: '2024',
    description: 'Three large fixed skylights installed with full manufacturer step flashing — no exposed caulk, and a 10-year leak-free workmanship warranty.',
    image: '/project-skylight-1.jpg',
    images: ['/project-skylight-1.jpg'],
    featured: false, tags: ['Velux', 'Triple Pane', 'Fixed Skylight'],
  },
  {
    id: '26', slug: 'etobicoke-solar-tube-conversion', title: 'Velux Skylight Installation',
    category: 'Skylight Installation', location: 'Etobicoke, ON', year: '2024',
    description: 'Three Velux fixed skylights installed in a shingle roof with full manufacturer step flashing, bringing natural light into interior rooms with a 10-year leak-free guarantee.',
    image: '/project-skylight-solar.jpg',
    images: ['/project-skylight-solar.jpg'],
    featured: false, tags: ['Solatube', 'Solar Tube', 'Daylighting'],
  },
  {
    id: '27', slug: 'oakville-venting-skylight-pair', title: 'Solar-Powered Venting Skylights',
    category: 'Skylight Installation', location: 'Oakville, ON', year: '2023',
    description: 'Two Velux VSS solar-powered venting skylights installed over the main living area — opens and closes by remote, with a rain sensor that closes automatically.',
    image: '/project-skylight-3.jpg',
    images: ['/project-skylight-3.jpg'],
    featured: false, tags: ['Velux VSS', 'Solar Powered', 'Rain Sensor'],
  },

  // ── Metal Roofing ──────────────────────────────────────────────────────────
  {
    id: '31', slug: 'caledon-standing-seam-estate', title: 'Standing Seam Steel Roof',
    category: 'Metal Roofing', location: 'Caledon, ON', year: '2024',
    description: '24-gauge Galvalume standing seam panels in charcoal grey with concealed clips, custom copper ridge caps and valley trim, and acoustic underlayment on a large estate property.',
    image: '/project-metal-1.jpg',
    images: ['/project-metal-1.jpg'],
    featured: false, tags: ['Standing Seam', 'Steel', 'Custom Estate'],
  },
  {
    id: '32', slug: 'nobleton-metal-shingle-conversion', title: 'Steel Shake Metal Shingle Re-Roof',
    category: 'Metal Roofing', location: 'Nobleton, ON', year: '2024',
    description: 'Aged asphalt shingles replaced with a steel shake profile — classic look, 50-year finish warranty, Class A fire rating, and greatly improved snow and ice shedding.',
    image: '/project-metal-2.webp',
    images: ['/project-metal-2.webp'],
    featured: false, tags: ['Metal Shingles', 'Steel Shake', 'Conversion'],
  },
  {
    id: '33', slug: 'schomberg-agricultural-metal', title: 'Agricultural Steel Roof Installation',
    category: 'Metal Roofing', location: 'Schomberg, ON', year: '2023',
    description: 'Exposed fastener corrugated steel on a large agricultural building and workshop — high-rib galvanized panels over new purlins with thermal washers and translucent ridge vents.',
    image: '/project-metal-3.jpg',
    images: ['/project-metal-3.jpg'],
    featured: false, tags: ['Agricultural', 'Corrugated Steel', 'Exposed Fastener'],
  },

  // ── Flat Roofing ───────────────────────────────────────────────────────────
  {
    id: '34', slug: 'scarborough-tpo-addition', title: 'TPO Flat Roof on Rear Addition',
    category: 'Flat Roofing', location: 'Scarborough, ON', year: '2024',
    description: 'Mechanically fastened 60-mil TPO with polyiso insulation on a new rear addition — internal drain, overflow scupper, and full air barrier continuity at the wall-to-roof junction.',
    image: '/project-flat-tpo.jpg',
    images: ['/project-flat-tpo.jpg'],
    featured: false, tags: ['TPO Membrane', 'New Construction', 'Addition'],
  },
  {
    id: '36', slug: 'burlington-flat-conversion', title: 'Flat Roof Conversion & Rooftop Terrace',
    category: 'Flat Roofing', location: 'Burlington, ON', year: '2023',
    description: 'New 60-mil adhered TPO system on a renovated bungalow, with parapet cap flashing in zinc and a rooftop terrace area including equipment pads and a perimeter safety cable.',
    image: '/project-flat-burlington.jpg',
    images: ['/project-flat-burlington.jpg'],
    featured: false, tags: ['TPO', 'Rooftop Terrace', 'Architectural'],
  },

  // ── Multi Family Roofing ───────────────────────────────────────────────────
  {
    id: '38', slug: 'mississauga-condo-corporation', title: 'Condo Corporation Re-Roof',
    category: 'Multi-Family Roofing', location: 'Mississauga, ON', year: '2024',
    description: 'Full re-roofing of a 14-building condo corporation through a six-month phased reserve fund program — consistent quality across every building with a single unified warranty.',
    image: '/project-condo-reroof.jpg',
    images: ['/project-condo-reroof.jpg'],
    featured: false, tags: ['Condo Corp', 'Reserve Fund', 'Multi Building'],
  },

  // ── Roof Replacement ───────────────────────────────────────────────────────
  {
    id: '40', slug: 'vaughan-complete-tearoff', title: 'Complete Tear-Off & Replacement',
    category: 'Roof Replacement', location: 'Vaughan, ON', year: '2024',
    description: 'Four layers of old shingles removed, two areas of deck rot repaired, then new GAF Timberline HDZ installed with upgraded ventilation and ice and water shield throughout.',
    image: '/project-reroof-1.jpg',
    images: ['/project-reroof-1.jpg'],
    featured: false, tags: ['Full Tear Off', 'GAF System', 'Ventilation Upgrade'],
  },
  {
    id: '41', slug: 'aurora-century-home-replacement', title: 'Century Home Roof Replacement',
    category: 'Roof Replacement', location: 'Aurora, ON', year: '2024',
    description: 'Full replacement on a 1920s home with careful old-growth deck preservation, custom hip and valley work, and premium architectural shingles matched to the home\'s historic character.',
    image: '/project-reroof-2.jpg',
    images: ['/project-reroof-2.jpg'],
    featured: false, tags: ['Century Home', 'Architectural Shingles', 'Heritage'],
  },
  {
    id: '42', slug: 'stouffville-family-replacement', title: 'One-Day Full Roof Replacement',
    category: 'Roof Replacement', location: 'Stouffville, ON', year: '2023',
    description: 'Full crew on site at 7am — complete tear-off, new GAF Timberline HDZ, ice and water shield at all eaves and valleys, and full site cleanup done by 5pm.',
    image: '/project-reroof-3.jpg',
    images: ['/project-reroof-3.jpg'],
    featured: false, tags: ['One Day Replace', 'GAF HDZ', 'Full Crew'],
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
      'Both options have merit, but the right choice depends on your climate, budget, and long term goals. We break down the pros and cons of each material.',
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
      'Elite Roofing transformed our 100-year old home. The slate work is flawless. James and his crew treated our property with extraordinary care. Neighbours stop and ask who did the roof. Worth every penny.',
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
