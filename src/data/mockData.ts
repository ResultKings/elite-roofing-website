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
    image: '/service-roof-inspection.jpg',
  },
  {
    id: '8',
    slug: 'metal-roofing',
    icon: 'Layers',
    title: 'Metal Roofing',
    shortDescription: 'Standing-seam and exposed-fastener metal roofing systems built for Ontario\'s climate, lasting 50+ years with minimal maintenance.',
    fullDescription: 'Metal roofing is the highest-performing long-term investment for Ontario homeowners and commercial property owners. We install standing-seam, corrugated, and metal shingle systems in steel, aluminum, and copper, all engineered for our freeze-thaw climate and backed by 50-year finish warranties.',
    features: [
      'Standing-seam and exposed-fastener systems',
      'Steel, aluminum, and copper options',
      '50-year finish warranty available',
      'Superior ice and snow shedding',
      'Energy-efficient reflective coatings',
      'Fire-resistant Class A rating',
    ],
    image: '/service-metal-roofing.webp',
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
    image: '/service-flat-roofing.jpg',
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
    image: '/service-multi-family.webp',
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
    image: '/service-roof-replacement.jpg',
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
    image: '/service-roof-tarping.avif',
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
      'Full re-roofing of a 6,400 sq ft stone colonial estate with premium charcoal metal tile panels, custom copper flashing at all valleys and dormers, and seamless eavestrough in matching dark bronze.',
    image: '/project-res-2.webp',
    images: ['/project-res-2.webp'],
    featured: true,
    tags: ['Metal Tile', 'Colonial Estate', 'Copper Flashing'],
  },
  {
    id: '2',
    slug: 'meridian-office-complex',
    title: 'Meridian Office Complex',
    category: 'Commercial',
    location: 'Mississauga, ON',
    year: '2024',
    description:
      'Full commercial roof replacement of a 45,000 sq ft office complex with a high-performance TPO membrane system, upgraded drainage, rooftop HVAC curb flashing, and solar-ready mounting infrastructure.',
    image: '/project-com-2.jpg',
    images: ['/project-com-2.jpg'],
    featured: true,
    tags: ['TPO Membrane', 'Commercial', 'Solar-Ready'],
  },
  {
    id: '3',
    slug: 'concord-townhome-complex',
    title: 'Concord Townhome Complex',
    category: 'Multi-Family Roofing',
    categories: ['Multi-Family Roofing'],
    location: 'Concord, ON',
    year: '2024',
    description:
      'Full re-roofing of a 64-unit townhome complex across four buildings, completed in phased sections with minimal tenant disruption. GAF Timberline HDZ architectural shingles with full ice-and-water shield and upgraded ventilation throughout.',
    image: '/project-res-8.webp',
    images: ['/project-res-8.webp'],
    featured: true,
    tags: ['Multi-Family', 'Architectural Shingles', 'Phased Project'],
  },
  {
    id: '5',
    slug: 'markham-heritage-estate',
    title: 'Markham Heritage Estate',
    category: 'Residential',
    location: 'Markham, ON',
    year: '2024',
    description:
      'Complete tear-off and replacement on a 5,800 sq ft estate featuring GAF Timberline HDZ in Charcoal, full ice-and-water shield, enhanced ridge ventilation, and new seamless aluminum eavestroughs with leaf guard protection.',
    image: '/project-res-6.webp',
    images: ['/project-res-6.webp'],
    featured: true,
    tags: ['Architectural Shingles', 'GAF System', 'Ice Shield'],
  },
  {
    id: '6',
    slug: 'riverside-modern-residence',
    title: 'Riverside Modern Residence',
    category: 'Residential',
    categories: ['Residential', 'Flat Roofing'],
    location: 'Toronto, ON',
    year: '2024',
    description:
      'Low-slope TPO membrane installation on a contemporary architectural home, seamlessly integrating with the building envelope. Standing-seam metal accent panels at the entry canopy completed the design with a 50-year finish warranty.',
    image: '/project-res-3.jpg',
    images: ['/project-res-3.jpg'],
    featured: false,
    tags: ['TPO Membrane', 'Modern Residential', 'Low-Slope'],
  },
  {
    id: '7',
    slug: 'cedar-ridge-farmhouse',
    title: 'Cedar Ridge Farmhouse',
    category: 'Residential',
    location: 'Vaughan, ON',
    year: '2023',
    description:
      'Full tear-off and replacement on a classic two-storey farmhouse, photographed here mid-installation. New high-performance underlayment, reinforced hip and ridge, and GAF Timberline architectural shingles over a fully inspected deck.',
    image: '/project-res-5.jpg',
    images: ['/project-res-5.jpg'],
    featured: false,
    tags: ['Roof Replacement', 'Residential', 'GAF System'],
  },
  {
    id: '8',
    slug: 'burlington-lakefront-villa',
    title: 'Burlington Lakefront Villa',
    category: 'Residential',
    location: 'Burlington, ON',
    year: '2023',
    description:
      'Storm damage restoration following a severe hail event, full insurance-documented tear-off and replacement with GAF Timberline HDZ in Charcoal, three new Velux skylights, and complete eavestrough overhaul all completed within one week.',
    image: '/project-res-1.avif',
    images: ['/project-res-1.avif'],
    featured: false,
    tags: ['Storm Restoration', 'Skylights', 'Insurance Claim'],
  },
  {
    id: '9',
    slug: 'thornhill-eavestrough-upgrade',
    title: 'Thornhill Eavestrough & Shingle Upgrade',
    category: 'Residential',
    categories: ['Residential', 'Gutter Systems'],
    location: 'Thornhill, ON',
    year: '2024',
    description:
      'Combined roof and eavestrough upgrade on a two-storey home, new architectural shingles, drip edge, and a full seamless aluminum eavestrough system with micro-mesh leaf guards installed across all roof lines.',
    image: '/project-res-4.webp',
    images: ['/project-res-4.webp'],
    featured: false,
    tags: ['Eavestroughs', 'Leaf Guard', 'Shingle Upgrade'],
  },
  {
    id: '10',
    slug: 'king-city-craftsman-estates',
    title: 'King City Craftsman Estates',
    category: 'Multi-Family Roofing',
    categories: ['Multi-Family Roofing'],
    location: 'King City, ON',
    year: '2023',
    description:
      'Re-roofing of three attached craftsman-style homes in a premium estate enclave, featuring GAF Timberline HDZ in Pewter Gray with custom ridge caps, enhanced attic ventilation, and new cedar soffits to complement the existing architecture.',
    image: '/project-res-7.jpg',
    images: ['/project-res-7.jpg'],
    featured: false,
    tags: ['Craftsman Style', 'Architectural Shingles', 'Multi-Unit'],
  },
  {
    id: '11',
    slug: 'plaza-retail-center',
    title: 'Plaza Retail Center',
    category: 'Commercial',
    location: 'Brampton, ON',
    year: '2023',
    description:
      'Weekend re-roofing of a 28,000 sq ft retail strip with a new TPO membrane system, upgraded insulation board, and fully re-flashed HVAC curbs, completed Saturday to Monday to ensure zero business day disruption for tenants.',
    image: '/project-com-1.jpg',
    images: ['/project-com-1.jpg'],
    featured: false,
    tags: ['TPO Membrane', 'Retail', 'Weekend Install'],
  },
  {
    id: '12',
    slug: 'vaughan-corporate-campus',
    title: 'Vaughan Corporate Campus',
    category: 'Commercial',
    location: 'Vaughan, ON',
    year: '2024',
    description:
      'EPDM rubber membrane replacement across a four-building corporate campus totalling 92,000 sq ft. Work was phased over six weekends with continuous operations maintained, new safety rail systems installed at all roof access points.',
    image: '/project-com-5.jpg',
    images: ['/project-com-5.jpg'],
    featured: false,
    tags: ['EPDM Membrane', 'Multi-Building', 'Safety Rails'],
  },
  {
    id: '13',
    slug: 'north-york-medical-centre',
    title: 'North York Medical Centre',
    category: 'Commercial',
    location: 'North York, ON',
    year: '2024',
    description:
      'New-construction flat roof installation on a 52,000 sq ft medical office building. TPO mechanically fastened membrane over polyisocyanurate insulation, with full air barrier continuity, internal drainage, and HVAC service walkway pads throughout.',
    image: '/project-com-3.jpg',
    images: ['/project-com-3.jpg'],
    featured: false,
    tags: ['TPO Membrane', 'New Construction', 'Medical'],
  },
  {
    id: '14',
    slug: 'brampton-industrial-warehouse',
    title: 'Brampton Industrial Warehouse',
    category: 'Commercial',
    location: 'Brampton, ON',
    year: '2023',
    description:
      'Hot-applied modified bitumen re-roofing of a 95,000 sq ft distribution warehouse, including new tapered insulation for improved drainage, all 34 skylights re-curbed and re-flashed, and full perimeter edge metal replaced.',
    image: '/project-com-4.jpg',
    images: ['/project-com-4.jpg'],
    featured: false,
    tags: ['Modified Bitumen', 'Industrial', 'Skylights'],
  },
  {
    id: '15',
    slug: 'mississauga-business-park',
    title: 'Mississauga Business Park',
    category: 'Commercial',
    location: 'Mississauga, ON',
    year: '2023',
    description:
      'SBS granulated modified bitumen roof replacement on a 67,000 sq ft multi-tenant business park, with improved scupper drainage, new parapet cap flashing, and a phased schedule that kept all 18 tenants fully operational throughout.',
    image: '/project-com-6.jpg',
    images: ['/project-com-6.jpg'],
    featured: false,
    tags: ['Modified Bitumen', 'Multi-Tenant', 'Business Park'],
  },

  // ── Roof Repair ────────────────────────────────────────────────────────────
  {
    id: '16', slug: 'aurora-leak-flashing-repair', title: 'Aurora Leak & Flashing Repair',
    category: 'Roof Repair', location: 'Aurora, ON', year: '2024',
    description: 'Diagnosed and repaired three separate leak points on a 3,200 sq ft two-storey home, failed step flashing at the chimney, a cracked rubber boot around a plumbing stack, and lifted ridge cap shingles. All repaired in one visit with full documentation.',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Leak Repair', 'Flashing', 'Chimney'],
  },
  {
    id: '17', slug: 'newmarket-chimney-cap-seal', title: 'Newmarket Chimney Cap & Seal',
    category: 'Roof Repair', location: 'Newmarket, ON', year: '2024',
    description: 'Full chimney cap replacement and step-flashing re-installation on a 1980s split-level home. New galvanized cap, counter-flashing, and full re-pointing of the surrounding brick. Water infiltration eliminated at source.',
    image: 'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Chimney', 'Flashing', 'Masonry Seal'],
  },
  {
    id: '18', slug: 'barrie-shingle-valley-repair', title: 'Barrie Shingle & Valley Repair',
    category: 'Roof Repair', location: 'Barrie, ON', year: '2023',
    description: 'Targeted valley repair and shingle replacement on a ranch-style home after repeated ice dam damage. New W-valley metal installed with a woven shingle overlay and full ice-and-water shield at the eaves. No leaks through the following two winters.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Valley Repair', 'Ice Dam', 'Shingles'],
  },

  // ── Storm Damage Restoration ───────────────────────────────────────────────
  {
    id: '19', slug: 'oshawa-hail-storm-restoration', title: 'Oshawa Hail Storm Restoration',
    category: 'Storm Damage Restoration', location: 'Oshawa, ON', year: '2024',
    description: 'Full tear-off and replacement on a 2,800 sq ft home after a severe hail event caused widespread granule loss and bruising to all south-facing slopes. Insurance claim fully documented and approved for complete replacement with GAF Timberline HDZ.',
    image: 'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Hail Damage', 'Insurance Claim', 'Full Replacement'],
  },
  {
    id: '20', slug: 'whitby-wind-damage-response', title: 'Whitby Wind Damage Response',
    category: 'Storm Damage Restoration', location: 'Whitby, ON', year: '2024',
    description: 'Emergency response and full restoration after severe straight-line winds lifted and removed shingles across 40% of the roof. Emergency tarping the same evening prevented interior damage; complete restoration completed within five days of the storm.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Wind Damage', 'Emergency Tarp', 'Restoration'],
  },
  {
    id: '21', slug: 'ajax-post-storm-rebuild', title: 'Ajax Post-Storm Rebuild',
    category: 'Storm Damage Restoration', location: 'Ajax, ON', year: '2023',
    description: 'Fallen tree impact caused structural damage to two roof sections on a colonial-style home. Full deck repair, new framing members, complete re-roofing with architectural shingles, and new gutters along the damaged elevation. Total rebuild covered by insurance.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Tree Impact', 'Structural Repair', 'Insurance Claim'],
  },

  // ── Gutter Systems ─────────────────────────────────────────────────────────
  {
    id: '22', slug: 'woodbridge-seamless-aluminum-install', title: 'Woodbridge Seamless Eavestrough',
    category: 'Gutter Systems', location: 'Woodbridge, ON', year: '2024',
    description: 'Full removal of failing sectional gutters and installation of new 5″ seamless aluminum eavestroughs in bronze finish across a 3,400 sq ft two-storey home. New fascia wrap and downspout extensions routed to the rear of the property away from the foundation.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Seamless Gutters', 'Aluminum', 'Downspouts'],
  },
  {
    id: '23', slug: 'kleinburg-copper-eavestrough', title: 'Kleinburg Copper Eavestrough',
    category: 'Gutter Systems', location: 'Kleinburg, ON', year: '2024',
    description: 'Custom half-round copper eavestrough installation on a heritage-style estate home with natural slate roof. Hand-soldered miters and outlets, copper downspouts with decorative rectangular heads, and round leaders routed to underground drainage.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Copper Gutters', 'Heritage', 'Half-Round'],
  },
  {
    id: '24', slug: 'stouffville-micro-mesh-guards', title: 'Stouffville Micro-Mesh Gutter Guards',
    category: 'Gutter Systems', location: 'Stouffville, ON', year: '2023',
    description: 'MasterShield micro-mesh leaf guard installation across 320 linear feet of existing seamless gutters on a heavily treed suburban property. Installation resolved chronic seasonal clogging and eliminated the need for twice-yearly cleaning.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Leaf Guards', 'Micro-Mesh', 'MasterShield'],
  },

  // ── Skylight Installation ──────────────────────────────────────────────────
  {
    id: '25', slug: 'forest-hill-velux-skylight', title: 'Forest Hill Velux Triple-Pane Skylights',
    category: 'Skylight Installation', location: 'Toronto, ON', year: '2024',
    description: 'Installation of two Velux FCM triple-pane fixed skylights in a Forest Hill home renovation, integrated into a new cathedral ceiling assembly. Full manufacturer step-flashing kits with no exposed caulk, guaranteed leak-free with a 10-year Elite workmanship warranty.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Velux', 'Triple-Pane', 'Fixed Skylight'],
  },
  {
    id: '26', slug: 'etobicoke-solar-tube-conversion', title: 'Etobicoke Solar Tube Conversion',
    category: 'Skylight Installation', location: 'Etobicoke, ON', year: '2024',
    description: 'Three Solatube 160DS tubular daylighting devices installed in an interior hallway and two windowless bathrooms. Each unit brings bright, glare-free natural light into spaces that had no other daylighting option, significantly reducing daytime electricity use.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Solatube', 'Solar Tube', 'Daylighting'],
  },
  {
    id: '27', slug: 'oakville-venting-skylight-pair', title: 'Oakville Solar-Powered Venting Skylights',
    category: 'Skylight Installation', location: 'Oakville, ON', year: '2023',
    description: 'Two Velux VSS solar-powered venting skylights installed over the main living area of a custom bungalow. No electrician required, solar-charged battery opens and closes with a remote, and includes a rain sensor that closes automatically to protect the interior.',
    image: 'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Velux VSS', 'Solar-Powered', 'Rain Sensor'],
  },

  // ── Roof Inspection ────────────────────────────────────────────────────────
  {
    id: '28', slug: 'richmond-hill-pre-purchase-report', title: 'Richmond Hill Pre-Purchase Inspection',
    category: 'Roof Inspection', location: 'Richmond Hill, ON', year: '2024',
    description: 'Full pre-purchase roof inspection on a 4,100 sq ft home with a 12-year-old architectural shingle roof. Inspection identified failed pipe boot flashings and inadequate attic ventilation. Written report with 47 photographs used to negotiate $6,200 in purchase credits.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Pre-Purchase', 'Written Report', 'Photographic'],
  },
  {
    id: '29', slug: 'north-york-annual-assessment', title: 'North York Annual Condition Assessment',
    category: 'Roof Inspection', location: 'North York, ON', year: '2024',
    description: 'Annual maintenance inspection and condition assessment on a 22-year-old three-tab shingle roof. Drone-assisted survey of all slopes, valleys, and penetrations. Report included a 5-year outlook projection and identified minor repairs required before the next winter season.',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Annual Inspection', 'Drone Survey', 'Condition Report'],
  },
  {
    id: '30', slug: 'scarborough-insurance-documentation', title: 'Scarborough Insurance Documentation',
    category: 'Roof Inspection', location: 'Scarborough, ON', year: '2023',
    description: 'Detailed storm damage inspection and insurance documentation following an aggressive hail event. Comprehensive report with close-up photography of every impacted shingle, valley, and ridge, submitted to the insurer and instrumental in securing a full roof replacement claim approval.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Insurance Docs', 'Hail Assessment', 'Claim Support'],
  },

  // ── Metal Roofing ──────────────────────────────────────────────────────────
  {
    id: '31', slug: 'caledon-standing-seam-estate', title: 'Caledon Standing Seam Estate',
    category: 'Metal Roofing', location: 'Caledon, ON', year: '2024',
    description: 'Custom standing-seam steel roofing installation on a 7,200 sq ft estate property in Caledon Hills. 24-gauge Galvalume panels in charcoal grey with concealed clips throughout, custom copper ridge caps and valley trim, and a full acoustic underlayment for rain noise reduction.',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Standing Seam', 'Steel', 'Custom Estate'],
  },
  {
    id: '32', slug: 'nobleton-metal-shingle-conversion', title: 'Nobleton Metal Shingle Conversion',
    category: 'Metal Roofing', location: 'Nobleton, ON', year: '2024',
    description: 'Conversion from aging asphalt shingles to steel shake-profile metal roofing on a two-storey craftsman home. Classic shake appearance with the performance of steel, 50-year finish warranty, Class A fire rating, and significantly improved snow and ice shedding characteristics.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Metal Shingles', 'Steel Shake', 'Conversion'],
  },
  {
    id: '33', slug: 'schomberg-agricultural-metal', title: 'Schomberg Agricultural Metal Roof',
    category: 'Metal Roofing', location: 'Schomberg, ON', year: '2023',
    description: 'Exposed-fastener corrugated steel roof installation on a large agricultural building and attached workshop. High-rib galvanized steel in classic red over new purlins, installed with thermal washers throughout and translucent ridge vents for interior daylighting.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Agricultural', 'Corrugated Steel', 'Exposed Fastener'],
  },

  // ── Flat Roofing ───────────────────────────────────────────────────────────
  {
    id: '34', slug: 'scarborough-tpo-addition', title: 'Scarborough TPO Flat Roof Addition',
    category: 'Flat Roofing', location: 'Scarborough, ON', year: '2024',
    description: 'New-construction TPO membrane installation on a 1,200 sq ft rear addition with a low-slope flat roof profile. Mechanically fastened 60-mil TPO with polyisocyanurate insulation, new internal drain with overflow scupper, and full air-barrier continuity at the wall-to-roof junction.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['TPO Membrane', 'New Construction', 'Addition'],
  },
  {
    id: '35', slug: 'etobicoke-rubber-membrane', title: 'Etobicoke EPDM Membrane Rebuild',
    category: 'Flat Roofing', location: 'Etobicoke, ON', year: '2024',
    description: 'Complete removal and replacement of a failed torch-down roof on a 1970s bungalow with a large flat section over the garage. New 60-mil EPDM fully adhered membrane over tapered polyiso insulation to correct long-standing ponding water at the centre of the field.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['EPDM', 'Tapered Insulation', 'Ponding Fix'],
  },
  {
    id: '36', slug: 'burlington-flat-conversion', title: 'Burlington Modern Flat Conversion',
    category: 'Flat Roofing', location: 'Burlington, ON', year: '2023',
    description: 'Low-slope conversion on a mid-century bungalow undergoing a full architectural renovation. New structural deck, 60-mil TPO adhered system, parapet cap flashing in matching zinc, and a rooftop terrace area with equipment pads and perimeter safety cable system.',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['TPO', 'Rooftop Terrace', 'Architectural'],
  },

  // ── Multi-Family Roofing ───────────────────────────────────────────────────
  {
    id: '37', slug: 'brampton-townhome-phase-one', title: 'Brampton Townhome Complex Phase 1',
    category: 'Multi-Family Roofing', location: 'Brampton, ON', year: '2024',
    description: 'First phase of a three-phase re-roofing program on a 96-unit townhome complex, covering 32 units in two buildings. GAF Timberline HDZ in Pewter Gray, complete ice-and-water shield, ridge-to-soffit ventilation upgrades, and condo board–approved phased scheduling with zero unit lockouts.',
    image: 'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Townhome Complex', 'Phased Project', 'Condo Board'],
  },
  {
    id: '38', slug: 'mississauga-condo-corporation', title: 'Mississauga Condo Corporation Re-Roof',
    category: 'Multi-Family Roofing', location: 'Mississauga, ON', year: '2024',
    description: 'Full re-roofing of a 14-building condominium corporation managed through the reserve fund process. Coordinated with the property management firm and condo board over a six-month phased program, delivering consistent quality across all 14 buildings with a unified warranty.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Condo Corp', 'Reserve Fund', 'Multi-Building'],
  },
  {
    id: '39', slug: 'etobicoke-apartment-reroof', title: 'Etobicoke Apartment Building Re-Roof',
    category: 'Multi-Family Roofing', location: 'Etobicoke, ON', year: '2023',
    description: 'Complete flat roof replacement on a 6-storey, 48-unit apartment building. Hot-applied SBS modified bitumen system with improved tapered insulation and new internal drains, all scheduled during off-peak hours to minimize noise impact on tenants across all floors.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Apartment', 'Modified Bitumen', 'Flat Roof'],
  },

  // ── Roof Replacement ───────────────────────────────────────────────────────
  {
    id: '40', slug: 'vaughan-complete-tearoff', title: 'Vaughan Complete Tear-Off & Replace',
    category: 'Roof Replacement', location: 'Vaughan, ON', year: '2024',
    description: 'Full tear-off and replacement of a 28-year-old three-tab shingle roof on a 2,600 sq ft two-storey home. Four layers of old material removed, deck inspection revealed and repaired two areas of rot, then new GAF Timberline HDZ with upgraded ventilation and ice shield throughout.',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Full Tear-Off', 'GAF System', 'Ventilation Upgrade'],
  },
  {
    id: '41', slug: 'aurora-century-home-replacement', title: 'Aurora Century Home Replacement',
    category: 'Roof Replacement', location: 'Aurora, ON', year: '2024',
    description: 'Complete roof replacement on a 1920s century home requiring careful old-growth deck preservation and custom hip-and-valley work. Original wood deck reinforced where needed, new ice-and-water shield, premium architectural shingles selected to match the home\'s historic character.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Century Home', 'Architectural Shingles', 'Heritage'],
  },
  {
    id: '42', slug: 'stouffville-family-replacement', title: 'Stouffville Family Home Replacement',
    category: 'Roof Replacement', location: 'Stouffville, ON', year: '2023',
    description: 'One-day complete roof replacement on a 2,200 sq ft family home. Full crew arrival at 7am, complete tear-off, new deck fastening, ice-and-water shield at all eaves and valleys, GAF Timberline HDZ architectural shingles, and site cleanup completed before 5pm.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['One-Day Replace', 'GAF HDZ', 'Full Crew'],
  },

  // ── Roof Tarping ───────────────────────────────────────────────────────────
  {
    id: '43', slug: 'barrie-emergency-storm-tarp', title: 'Barrie Emergency Storm Response',
    category: 'Roof Tarping', location: 'Barrie, ON', year: '2024',
    description: 'Emergency tarp deployment within 90 minutes of a homeowner call after a fast-moving storm tore away shingles across the entire rear slope. Commercial-grade 10-mil polyethylene anchored with 2×4 battens and weighted perimeter held through three additional days of rain before permanent repairs.',
    image: 'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Emergency Response', 'Storm Tarp', '90-Minute Dispatch'],
  },
  {
    id: '44', slug: 'innisfil-wind-damage-protection', title: 'Innisfil Wind Damage Protection',
    category: 'Roof Tarping', location: 'Innisfil, ON', year: '2024',
    description: 'Professional tarping of a 3,000 sq ft home after sustained 90 km/h winds lifted and displaced shingles along the full windward face. Complete documentation package produced for the homeowner\'s insurance claim including drone photographs of all damage areas before tarping.',
    image: 'https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1600596542815-0c0c5e7ba6a8?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Wind Damage', 'Insurance Docs', 'Drone Survey'],
  },
  {
    id: '45', slug: 'newmarket-emergency-response', title: 'Newmarket Emergency Tarp & Report',
    category: 'Roof Tarping', location: 'Newmarket, ON', year: '2023',
    description: 'Same-day emergency tarping of a hail-damaged roof, followed by a full written damage assessment within 24 hours. The tarp installation and written report were submitted directly to the insurer, accelerating the claim timeline and leading to full replacement approval within one week.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format'],
    featured: false, tags: ['Hail Damage', 'Same-Day Tarp', 'Claim Support'],
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
