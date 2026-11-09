'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Building2,
  Wrench,
  Cloud,
  Droplets,
  Sun,
  Phone,
  Search,
  Zap,
  Layers,
  Building,
  RefreshCw,
  Shield,
  Award,
  Clock,
  BadgeCheck,
  Users,
  Hammer,
  ClipboardList,
} from 'lucide-react'
import { services, projects, type Project } from '@/data/mockData'
import serviceContent from '@/data/serviceContent'

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Wrench,
  Cloud,
  Droplets,
  Sun,
  Search,
  Zap,
  Layers,
  Building,
  RefreshCw,
  Shield,
}

// ─── Per-Service Process Data ─────────────────────────────────────────────────

type ProcessStep = { num: string; title: string; body: string }

const serviceProcessData: Record<string, { steps: ProcessStep[]; icons: React.ElementType[] }> = {
  'residential-roofing': {
    steps: [
      { num: '01', title: 'Free Roof Inspection', body: 'Our certified inspector evaluates every component, from deck to ridge, with full photographic documentation at no cost or obligation.' },
      { num: '02', title: 'Honest Written Proposal', body: 'You receive a detailed, itemized proposal within 24 hours. No hidden charges, no vague estimates. Exactly what we will do and what it will cost.' },
      { num: '03', title: 'Expert Installation', body: 'Our GAF Master Elite certified crew arrives on schedule and completes the work to the highest standard, protecting your property throughout.' },
      { num: '04', title: 'Final Walkthrough & Warranty', body: 'We review every detail with you, answer all questions, and hand you your written workmanship warranty before we leave the site.' },
    ],
    icons: [Home, ClipboardList, Hammer, Shield],
  },
  'commercial-roofing': {
    steps: [
      { num: '01', title: 'Site Survey & Assessment', body: 'We survey the full roof system, assess load requirements, existing conditions, and drainage to specify the right commercial system for your building.' },
      { num: '02', title: 'Detailed Scope & Proposal', body: 'A written proposal with full material specifications, phased schedule, and firm price is delivered within 48 hours. No surprises, no add-ons.' },
      { num: '03', title: 'Phased Installation', body: 'Our commercial crew installs in phases to keep your business operational throughout, completing each section to weathertight condition daily.' },
      { num: '04', title: 'Handover & Warranty Package', body: 'We complete a full post-installation inspection with your facilities team and provide all manufacturer and workmanship warranty documentation.' },
    ],
    icons: [Search, ClipboardList, Building2, BadgeCheck],
  },
  'roof-repair': {
    steps: [
      { num: '01', title: 'Leak Diagnosis', body: 'We trace every leak to its root cause, not just the symptom, using photographic documentation and a comprehensive roof assessment.' },
      { num: '02', title: 'Written Repair Estimate', body: 'You receive a detailed written estimate before any work begins. If a full replacement is the smarter call, we will tell you honestly.' },
      { num: '03', title: 'Expert Repair', body: 'Our crew completes lasting repairs using matching materials, proper flashing systems, and techniques that address the underlying cause of failure.' },
      { num: '04', title: 'Inspection & Written Guarantee', body: 'Every repair is inspected and documented. Your written workmanship warranty is provided on site before we leave.' },
    ],
    icons: [Search, ClipboardList, Wrench, Shield],
  },
  'storm-damage-restoration': {
    steps: [
      { num: '01', title: 'Emergency Storm Inspection', body: 'We respond within hours to assess the full extent of storm damage with detailed photographic documentation of every affected area.' },
      { num: '02', title: 'Insurance Documentation', body: 'We prepare a complete professional damage report in the format your insurer requires, maximizing your settlement and eliminating back-and-forth.' },
      { num: '03', title: 'Emergency Tarping & Stabilization', body: 'While your claim is processed, we secure the damaged area with commercial-grade tarping rated to withstand high winds for weeks.' },
      { num: '04', title: 'Full Restoration', body: 'Once approved, our crew completes the full restoration to pre-storm condition, managing all scheduling directly with your insurance adjuster.' },
    ],
    icons: [Search, ClipboardList, Shield, Hammer],
  },
  'gutter-systems': {
    steps: [
      { num: '01', title: 'Property Assessment', body: 'We assess your roofline, fascia condition, drainage requirements, and existing gutter layout before recommending any system.' },
      { num: '02', title: 'Custom System Design', body: 'We design a seamless eavestrough system specific to your property, sized for your roof area and pitched correctly toward every downspout.' },
      { num: '03', title: 'On-Site Fabrication & Install', body: 'Gutters are formed on-site as a single continuous piece, eliminating joints. Our crew installs, pitches, and tests the complete drainage system in one visit.' },
      { num: '04', title: 'Final Flow Test & Warranty', body: 'We water-test every section, adjust pitch where needed, and provide your written installation warranty before we pack up.' },
    ],
    icons: [Search, ClipboardList, Droplets, Shield],
  },
  'skylight-installation': {
    steps: [
      { num: '01', title: 'On-Site Consultation', body: 'We assess your roof structure, attic space, and interior ceiling to determine the right size, placement, and skylight model for your home.' },
      { num: '02', title: 'Skylight Selection & Proposal', body: 'We present the best skylight options for your application with a written proposal and product samples. No pressure, just clarity.' },
      { num: '03', title: 'Weathertight Installation', body: 'Our crew opens the roof, installs the curb, applies full manufacturer step flashing, and seals the glazing unit. All completed in a single day with no open penetrations overnight.' },
      { num: '04', title: '10-Year Leak-Free Guarantee', body: 'After a final inspection, we hand you written documentation of your 10-year Elite leak-free workmanship guarantee and all manufacturer warranties.' },
    ],
    icons: [Search, ClipboardList, Sun, Shield],
  },
  'roof-inspection': {
    steps: [
      { num: '01', title: 'Roof Access & Survey', body: 'Our certified inspector walks every accessible surface and penetration, from ridge to eaves, in a thorough systematic survey.' },
      { num: '02', title: 'Photographic Documentation', body: 'Every defect, potential failure, and area of concern is photographed in high resolution and catalogued for the written report.' },
      { num: '03', title: 'Written Condition Report', body: 'A detailed report with photos, findings, and a remaining service life estimate is delivered within 24 hours, accepted by insurers and lenders.' },
      { num: '04', title: 'Findings Review', body: 'We walk you through every finding, answer your questions, and give you an honest recommendation with no obligation or sales pressure.' },
    ],
    icons: [Search, ClipboardList, CheckCircle, BadgeCheck],
  },
  'metal-roofing': {
    steps: [
      { num: '01', title: 'Property Assessment', body: 'We assess your roof pitch, structure, existing system, and architectural style to recommend the right metal roofing profile and material.' },
      { num: '02', title: 'Material Selection & Proposal', body: 'We present standing seam, metal shingle, and corrugated options with samples and a written proposal including full 50-year finish warranty details.' },
      { num: '03', title: 'Expert Metal Installation', body: 'Our metal roofing specialists install every panel, seam, and ridge cap with precision using concealed clips and acoustic underlayment throughout.' },
      { num: '04', title: 'Final Walkthrough & Warranty', body: 'We review every detail of the finished installation, register the manufacturer warranty on your behalf, and provide your workmanship warranty documentation.' },
    ],
    icons: [Search, ClipboardList, Hammer, Award],
  },
  'flat-roofing': {
    steps: [
      { num: '01', title: 'Drainage & Deck Assessment', body: 'We evaluate the existing roof condition, drainage patterns, ponding areas, and insulation levels before specifying any replacement system.' },
      { num: '02', title: 'System Design & Proposal', body: 'We design the right flat roofing system with proper slope and drainage built in, and provide a detailed written proposal with all material specifications.' },
      { num: '03', title: 'Membrane Installation', body: 'Our certified membrane crew installs your TPO, EPDM, or modified bitumen system with engineered drainage, flashed penetrations, and fully adhered terminations.' },
      { num: '04', title: 'Final Inspection & Warranty', body: 'A post-installation inspection covers every seam, termination, and penetration. Your written workmanship and manufacturer warranty documentation is provided on site.' },
    ],
    icons: [Search, ClipboardList, Layers, Shield],
  },
  'multi-family-roofing': {
    steps: [
      { num: '01', title: 'Portfolio Assessment', body: 'We conduct a full inspection of all buildings, assess current condition, and develop a phased project scope aligned with your reserve fund and timeline.' },
      { num: '02', title: 'Board Presentation & Approval', body: 'We present directly to the condo board or property manager with options at different price points, full project schedules, and insurance certificates.' },
      { num: '03', title: 'Phased Occupied-Building Install', body: 'Work is phased so no section is left exposed, tenants are notified 48 hours in advance, and every section is completed to weathertight condition each day.' },
      { num: '04', title: 'Handover & Portfolio Warranty', body: 'We complete a final walkthrough with the property manager and provide a unified warranty covering all buildings in the project.' },
    ],
    icons: [Search, ClipboardList, Building, Award],
  },
  'roof-replacement': {
    steps: [
      { num: '01', title: 'Full Condition Inspection', body: 'We assess every layer of your existing roof, identify deck damage and soft spots, and provide an honest written evaluation of what the replacement requires.' },
      { num: '02', title: 'Written Proposal & Timeline', body: 'A detailed, itemized proposal with a firm price and completion date is provided before any work begins. No surprises, no add-ons.' },
      { num: '03', title: 'Complete Tear-Off & Installation', body: 'We remove all existing layers, inspect and repair the deck, install upgraded underlayment and ice shield, and complete your new roof to the highest standard.' },
      { num: '04', title: 'Final Walkthrough & Warranty', body: 'We inspect every detail with you, clean the property completely, and hand you your workmanship and manufacturer warranty documentation.' },
    ],
    icons: [Search, ClipboardList, RefreshCw, Shield],
  },
  'roof-tarping': {
    steps: [
      { num: '01', title: 'Emergency Call & Dispatch', body: 'Call our 24/7 line and a crew is dispatched immediately. Within our service area, our target response time is 4 hours or less, day or night.' },
      { num: '02', title: 'Pre-Installation Documentation', body: 'Before we install, we photograph all damage from multiple angles to provide a complete visual record for your insurance claim.' },
      { num: '03', title: 'Professional Tarp Installation', body: 'We install commercial-grade 10-mil polyethylene anchored with 2×4 battens and weighted perimeter edges, rated to hold through 60 mph winds for weeks.' },
      { num: '04', title: 'On-Site Insurance Documentation', body: 'We provide a complete written damage report with photographs, materials used, and coverage area before we leave your property.' },
    ],
    icons: [Phone, Search, Shield, BadgeCheck],
  },
}

// ─── Shared Process Data (all service pages) ─────────────────────────────────

const sharedProcessData: { steps: ProcessStep[]; icons: React.ElementType[] } = {
  steps: [
    {
      num: '01',
      title: 'Start a Conversation',
      body: 'Once you call us or fill out our online form, we\'ll follow up promptly to schedule an initial conversation. This first meeting is about listening and understanding your goals, priorities, and budget. We\'ll guide you through big picture decisions like materials, timelines, and next steps, so you can move forward with clarity and confidence.',
    },
    {
      num: '02',
      title: 'Onsite Estimates',
      body: 'After we confirm the needs of your project, our team will develop a plan, come to your home and give you an honest estimate for the materials and our work. We just do the math, and give you clear value.',
    },
    {
      num: '03',
      title: 'Sign the Contract',
      body: 'We handle the whole process, from permits and financing to designing and building your project. We will lay out a detailed contract explaining everything you need to know. We do the homework, and you sign on the dotted line.',
    },
    {
      num: '04',
      title: 'Work Begins',
      body: 'After city permits and scheduling, we start work on your new roof or other projects. We work to match your vision of home with crystal clear communication, clean job sites, experienced crews and expert planning. We are proud of our diligent stewardship and creating a meaningful connection with the homeowners we serve.',
    },
  ],
  icons: [Phone, Home, ClipboardList, Hammer],
}

// ─── Per-Service Warranty Data ───────────────────────────────────────────────

type WarrantyCard = { label: string; duration: string; items: string[] }
type WarrantyInfo = { heading: string; description: string; footnote: string; cards: WarrantyCard[] }

const serviceWarrantyData: Record<string, WarrantyInfo> = {
  'residential-roofing': {
    heading: 'What Your Warranty Covers',
    description: 'Every Elite Roofing residential installation comes with layered warranty protection, covering both materials and workmanship.',
    footnote: 'All warranty terms are documented in writing and provided on site at project completion. Manufacturer warranties are registered by Elite Roofing on your behalf.',
    cards: [
      { label: 'Workmanship', duration: '10 Years', items: ['All installation-related failures', 'Flashing and sealing defects', 'Workmanship-related leaks', 'Ridge cap and ventilation installation'] },
      { label: 'Premium Shingles', duration: 'Lifetime', items: ['GAF Timberline HDZ & similar', 'Shingle cracking and splitting', 'Granule loss beyond normal wear', 'Algae and stain resistance'] },
      { label: 'Standard Shingles', duration: '30 Years', items: ['Architectural shingles', 'Manufacturing defects', 'Wind resistance up to 130 mph', 'Transferable to next owner'] },
    ],
  },
  'commercial-roofing': {
    heading: 'What Your Warranty Covers',
    description: 'Every Elite Roofing commercial installation is backed by layered protection covering workmanship, membrane systems, and rooftop components.',
    footnote: 'All warranty documentation is provided at project handover. Manufacturer warranties are registered by Elite Roofing on your behalf.',
    cards: [
      { label: 'Workmanship', duration: '10 Years', items: ['All installation-related failures', 'Flashing, penetration, and drain details', 'Seam and termination defects', 'Post-installation performance issues'] },
      { label: 'TPO & EPDM Membrane', duration: '20 Years', items: ['Material manufacturing defects', 'Seam separation and delamination', 'UV degradation beyond spec', 'Puncture resistance per ASTM D6702'] },
      { label: 'Metal & Flashing Components', duration: '40 Years', items: ['Kynar 500 finish warranty', 'Structural panel integrity', 'Fastener and clip failures', 'Transferable to new property owner'] },
    ],
  },
  'roof-repair': {
    heading: 'What Your Repair Warranty Covers',
    description: 'Every Elite Roofing repair is backed by a written guarantee covering both the work performed and the materials installed.',
    footnote: 'Warranty documentation is provided on site before we leave. Coverage applies to the repaired area and all associated materials.',
    cards: [
      { label: 'Workmanship', duration: '5 Years', items: ['All repair-related labour', 'Flashing and sealing performed', 'Penetration waterproofing', 'Associated installation failures'] },
      { label: 'Materials', duration: '10 Years', items: ['Replacement shingles and membrane', 'Flashing and metal components', 'Sealants and adhesives used', 'Manufacturer defect coverage'] },
      { label: 'Leak-Free Guarantee', duration: '2 Years', items: ['Guaranteed dry after repair', 'No-cost return if leak reappears', 'Photographic before-and-after on file', 'Written documentation before we leave'] },
    ],
  },
  'storm-damage-restoration': {
    heading: 'What Your Restoration Warranty Covers',
    description: 'Storm restoration work by Elite Roofing is fully warranted, so you can be confident your roof is back to the standard it was built to.',
    footnote: 'All warranty documentation is provided at project completion. Insurance warranty assignments are completed by Elite Roofing on your behalf.',
    cards: [
      { label: 'Workmanship', duration: '5 Years', items: ['All restoration-related labour', 'Flashing, sealing, and penetrations', 'Sheathing and deck repairs', 'Post-installation performance issues'] },
      { label: 'Restored Materials', duration: '30 Years', items: ['Premium shingle replacement coverage', 'Manufacturer defect warranty', 'Wind resistance up to 130 mph', 'Transferable to next owner'] },
      { label: 'Emergency Stabilization', duration: '90 Days', items: ['Commercial-grade tarp integrity', 'Wind and water infiltration coverage', 'Re-anchor at no charge if needed', 'Written protection report included'] },
    ],
  },
  'gutter-systems': {
    heading: 'What Your Eavestrough Warranty Covers',
    description: 'Every Elite Roofing eavestrough system is warranted from on-site fabrication through final installation and flow testing.',
    footnote: 'All warranty terms are provided in writing before we leave the site. Coverage includes the seamless system and all downspout connections.',
    cards: [
      { label: 'Workmanship', duration: '5 Years', items: ['All installation-related failures', 'Hanger, bracket, and spike failures', 'Downspout connection and sealing', 'Pitch and flow-related performance issues'] },
      { label: 'Aluminum Eavestrough', duration: '25 Years', items: ['Seamless system structural integrity', 'Joint and seam separation', 'Paint adhesion and finish', 'Wind and ice load performance'] },
      { label: 'Gutter Guard System', duration: '10 Years', items: ['Micro-mesh or screen integrity', 'Bracket and attachment systems', 'Flow restriction or blockage failures', 'Manufacturer defect coverage'] },
    ],
  },
  'skylight-installation': {
    heading: 'What Your Skylight Warranty Covers',
    description: 'Every Elite Roofing skylight installation is backed by a comprehensive warranty covering the unit, the flashing system, and our labour.',
    footnote: 'All warranty documentation, including registered VELUX manufacturer warranties, is provided on site at installation completion.',
    cards: [
      { label: 'Workmanship', duration: '10 Years', items: ['Leak-free installation guarantee', 'Step flashing and counterflashing', 'Curb construction and sealing', 'Rough opening and interior finishing'] },
      { label: 'VELUX Glass & Frame', duration: '10 Years', items: ['Glass unit seal failure', 'Frame warping and structural defects', 'Hardware and operator failures', 'Solar blind and accessory coverage'] },
      { label: 'Flashing & Waterproofing', duration: '10 Years', items: ['Manufacturer step-flashing kit', 'All sealant and adhesive systems', 'Deck integration and underlayment', 'Performance in rain, ice, and snow'] },
    ],
  },
  'roof-inspection': {
    heading: 'Your Inspection Report Guarantee',
    description: 'Every Elite Roofing inspection is backed by a written accuracy guarantee and a report accepted by insurers, lenders, and legal proceedings.',
    footnote: 'Inspection files are retained on record indefinitely. Re-inspections within the guarantee period are scheduled within 5 business days of request.',
    cards: [
      { label: 'Accuracy Guarantee', duration: '30 Days', items: ['Free re-inspection if missed defect found', 'No-cost written supplementary report', 'Direct access to your assigned inspector', 'Full refund if report is materially inaccurate'] },
      { label: 'Report Delivery', duration: '24 Hours', items: ['Full photographic documentation', 'Written findings with severity ratings', 'Remaining service life estimate', 'Itemized repair priority list'] },
      { label: 'Accepted Documentation', duration: 'Lifetime', items: ['Insurance claim support', 'Mortgage and lender compliance', 'Legal and court admissible', 'Permanent file on record'] },
    ],
  },
  'metal-roofing': {
    heading: 'What Your Metal Roof Warranty Covers',
    description: 'Metal roofing by Elite Roofing carries one of the longest warranty stacks in the industry, covering finish, panel, and workmanship.',
    footnote: 'All warranty documentation is provided at project completion. Manufacturer warranties are registered by Elite Roofing on your behalf.',
    cards: [
      { label: 'Workmanship', duration: '15 Years', items: ['All installation-related failures', 'Seam, clip, and fastener performance', 'Flashing, ridge, and hip details', 'Post-installation leak coverage'] },
      { label: 'Kynar Finish & Coating', duration: '40 Years', items: ['Paint adhesion and film integrity', 'Fading beyond acceptable ΔE', 'Chalking and chalk rating limits', 'UV degradation beyond spec'] },
      { label: 'Steel & Aluminum Panel', duration: 'Lifetime', items: ['Structural panel integrity', 'Perforation from manufacturing defects', 'Wind resistance per ASTM E1592', 'Transferable to new property owner'] },
    ],
  },
  'flat-roofing': {
    heading: 'What Your Flat Roof Warranty Covers',
    description: 'Every Elite Roofing flat and low-slope installation is backed by layered protection covering membrane, workmanship, and drainage systems.',
    footnote: 'Warranty documentation is provided at project handover. Manufacturer membrane warranties are registered by Elite Roofing on your behalf.',
    cards: [
      { label: 'Workmanship', duration: '10 Years', items: ['All installation-related failures', 'Seam, termination, and penetration details', 'Drain, scupper, and overflow flashing', 'Post-installation ponding or leak issues'] },
      { label: 'TPO Membrane', duration: '20 Years', items: ['Manufacturing defects', 'Seam separation and weld failure', 'UV degradation beyond rated performance', 'Puncture resistance per ASTM D6702'] },
      { label: 'EPDM Membrane', duration: '20 Years', items: ['Material integrity and elasticity', 'Seam adhesion and tape systems', 'Shrinkage beyond acceptable limits', 'Resistance to weathering and ozone'] },
    ],
  },
  'multi-family-roofing': {
    heading: 'What Your Portfolio Warranty Covers',
    description: 'Multi-family and condo installations by Elite Roofing are covered under a unified warranty structure across all buildings in your project.',
    footnote: 'Warranty certificates are issued per building and consolidated into a single portfolio package for the property manager or board.',
    cards: [
      { label: 'Workmanship', duration: '10 Years', items: ['All installation-related failures', 'Flashing, valley, and penetration details', 'Common area and parapet wall work', 'Per-building and portfolio-wide coverage'] },
      { label: 'Materials Per Building', duration: '30 Years', items: ['Shingle and membrane manufacturing defects', 'Wind resistance up to 130 mph', 'Granule loss beyond normal wear', 'Fully transferable on unit resale'] },
      { label: 'Portfolio Coordination', duration: 'Lifetime', items: ['Unified warranty file per property', 'Board and property manager on record', 'Annual inspection reminder program', 'Priority scheduling for warranty claims'] },
    ],
  },
  'roof-replacement': {
    heading: 'What Your Replacement Warranty Covers',
    description: 'A full roof replacement with Elite Roofing means a complete new warranty package, covering every layer from deck to shingle.',
    footnote: 'All warranty terms are documented in writing and provided on site at project completion. Manufacturer warranties are registered by Elite Roofing on your behalf.',
    cards: [
      { label: 'Workmanship', duration: '10 Years', items: ['Complete installation labour', 'Deck repair and preparation', 'Underlayment and ice shield', 'All flashing, ridge, and ventilation'] },
      { label: 'Premium Shingles', duration: 'Lifetime', items: ['GAF Timberline HDZ & similar', 'Shingle cracking and splitting', 'Granule loss beyond normal wear', 'Algae and stain resistance'] },
      { label: 'Standard Shingles', duration: '30 Years', items: ['Architectural shingle coverage', 'Manufacturing defects', 'Wind resistance up to 130 mph', 'Transferable to next owner'] },
    ],
  },
  'roof-tarping': {
    heading: 'Your Emergency Service Guarantee',
    description: 'Elite Roofing stands behind every emergency tarp installation, from response speed to the integrity of the installed protection.',
    footnote: 'All emergency service documentation is provided before we leave your property. Insurance-ready reports are available for immediate submission.',
    cards: [
      { label: 'Response Guarantee', duration: '4 Hours', items: ['Target dispatch within 1 hour', 'On-site within 4 hours in our service area', '24/7 availability including holidays', 'Written confirmation of dispatch time'] },
      { label: 'Tarp Integrity', duration: '90 Days', items: ['Commercial 10-mil polyethylene', 'Wind resistance rated to 60 mph', '2×4 batten anchorage system', 'No-cost re-anchor if failure occurs'] },
      { label: 'Insurance Documentation', duration: 'Claim-Ready', items: ['Full written damage report', 'Photographic record from multiple angles', 'Materials list and coverage area', 'Accepted by all major Ontario insurers'] },
    ],
  },
}

// ─── Service Reviews ─────────────────────────────────────────────────────────

type ServiceReview = {
  name: string
  location: string
  rating: number
  quote: string
  image: string
}

const p1 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
const p2 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
const p3 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
const p4 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'

const serviceReviewsMap: Record<string, ServiceReview[]> = {
  'residential-roofing': [
    { name: 'Karen Mitchell', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite replaced our aging shingles last spring and the whole roof looks brand new. They were on time every morning, cleaned up every evening, and finished two days ahead of schedule. The workmanship warranty gave us total peace of mind.' },
    { name: 'David Nguyen', location: 'Richmond Hill, ON', rating: 5, image: p2, quote: 'From the free estimate to the final walkthrough, the process was completely transparent. The crew laid new residential shingles in one day and our home has never looked better. Couldn\'t recommend them more highly.' },
    { name: 'Sandra Kowalski', location: 'Markham, ON', rating: 5, image: p3, quote: 'We had multiple quotes and Elite Roofing was the most thorough by far. They identified ice dam damage we didn\'t even know about and fixed everything properly. Zero leaks through the whole winter.' },
    { name: 'Mark Thompson', location: 'Brampton, ON', rating: 5, image: p4, quote: 'Professional from start to finish. The team replaced our entire residential roof and the quality of their work speaks for itself. Neighbours have already stopped to ask who we used.' },
  ],
  'commercial-roofing': [
    { name: 'James Harrington', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite Roofing completed our flat roof replacement on a 12,000 sq ft warehouse with zero disruption to operations. The project manager communicated every step and the work was finished on budget.' },
    { name: 'Michelle Park', location: 'Mississauga, ON', rating: 5, image: p2, quote: 'We had a critical leak above our retail space that two other contractors couldn\'t solve. Elite found the source on the first visit and had it sealed that same day. Their commercial expertise is unmatched.' },
    { name: 'Robert Chen', location: 'Toronto, ON', rating: 5, image: p3, quote: 'For our office complex re-roofing, Elite brought a full crew that worked weekends to avoid disrupting our tenants. The new TPO roof is perfect and came with a full manufacturer warranty.' },
    { name: 'Lisa Fernandez', location: 'Brampton, ON', rating: 5, image: p4, quote: 'We\'ve used Elite for all three of our commercial properties now. Consistent quality, honest pricing, and they show up when they say they will. Exactly what you need for commercial work.' },
  ],
  'roof-repair': [
    { name: 'Patricia Liu', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Called Elite after noticing water stains on our ceiling. They came out the next morning, found the damaged flashing, and repaired it the same day. No sales pressure, just fast and honest repair work.' },
    { name: 'Tom Gallagher', location: 'Aurora, ON', rating: 5, image: p2, quote: 'I thought I needed a full replacement and was dreading the cost. Elite\'s inspector told me honestly that a targeted repair was all I needed. They saved me thousands and did the repair perfectly.' },
    { name: 'Nadia Okafor', location: 'Newmarket, ON', rating: 5, image: p3, quote: 'After a heavy rainstorm revealed a leak, Elite were there within 24 hours. They identified the problem, repaired the damaged section, and provided a full written report. Thorough and fast.' },
    { name: 'Eric Baxter', location: 'Barrie, ON', rating: 5, image: p4, quote: 'Exceptional roof repair service. The crew fixed three separate problem areas that a previous contractor had missed. They documented everything with photos and the repairs have held through two winters now.' },
  ],
  'storm-damage-restoration': [
    { name: 'Chris Papadopoulos', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'After the August hail storm we had damage across the entire roof. Elite came out the next morning, documented everything for insurance, and had the restoration completed in two days. They made a stressful situation easy.' },
    { name: 'Angela Morrison', location: 'Whitby, ON', rating: 5, image: p2, quote: 'Elite walked me through the entire insurance claim process for my storm damaged roof. They knew exactly what the adjuster needed and helped me get a full replacement covered. Couldn\'t have done it without them.' },
    { name: 'Jason Dubois', location: 'Oshawa, ON', rating: 5, image: p3, quote: 'We had significant wind damage after a severe storm. Elite tarped the roof the same evening to prevent further damage, then completed the full restoration the following week. Fast, professional, and covered by insurance.' },
    { name: 'Maria Santos', location: 'Ajax, ON', rating: 5, image: p4, quote: 'I was overwhelmed after the storm damage to our home. Elite handled everything from the emergency tarp to the final inspection. Their team was calm, efficient, and incredibly knowledgeable about the entire restoration process.' },
  ],
  'gutter-systems': [
    { name: 'Brian Walsh', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite installed seamless eavestrough on our whole house in a single morning. They removed the old system, checked all the fascia, and left everything spotless. Our basement flooding issues have completely stopped.' },
    { name: 'Heather Campbell', location: 'Thornhill, ON', rating: 5, image: p2, quote: 'The gutter guards Elite installed have been incredible. For the first time in years I don\'t need to clean out the eavestroughs every fall. Very fair pricing and the install was done cleanly and quickly.' },
    { name: 'Steven Park', location: 'Markham, ON', rating: 5, image: p3, quote: 'Our old gutters were pulling away from the fascia and causing water damage. Elite replaced everything with a properly pitched seamless system and fixed the underlying fascia damage at the same time. Great all-in-one work.' },
    { name: 'Tamara Wilson', location: 'Stouffville, ON', rating: 5, image: p4, quote: 'Excellent eavestrough service. They came on time, explained exactly what needed to be done, and completed the installation faster than expected. The new gutter system channels water perfectly away from our foundation.' },
  ],
  'skylight-installation': [
    { name: 'Paul Andersen', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite installed two large skylights in our living room and the transformation is incredible. Natural light floods the space all day. The installation was watertight from day one and they cleaned up completely after themselves.' },
    { name: 'Rachel Kim', location: 'North York, ON', rating: 5, image: p2, quote: 'I was nervous about installing a skylight because of leak concerns. Elite explained the flashing and waterproofing process in detail, and three years later it\'s completely dry in any weather. Beautifully done work.' },
    { name: 'Daniel O\'Brien', location: 'Etobicoke, ON', rating: 5, image: p3, quote: 'We had Elite install a vented skylight over our master bathroom. The fresh air it brings in is amazing and the install is perfectly integrated with the roofline. Very professional crew and excellent attention to detail.' },
    { name: 'Jennifer Tran', location: 'Scarborough, ON', rating: 5, image: p4, quote: 'Our skylight installation was handled professionally from start to finish. The team was knowledgeable about different skylight options and helped us choose the right size and style. The end result exceeded our expectations.' },
  ],
  'roof-inspection': [
    { name: 'Alan Reeves', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'We used Elite for a pre purchase inspection before buying our home. Their detailed report with photos gave us clear leverage in negotiation and peace of mind about the roof condition. Worth every penny.' },
    { name: 'Susan Park', location: 'Woodbridge, ON', rating: 5, image: p2, quote: 'Elite\'s roof inspection before we listed our home was incredibly thorough. They found minor issues we weren\'t aware of, we had them fixed, and our buyers had no concerns about the roof at all. Stress-free process.' },
    { name: 'Greg Lawson', location: 'Kleinburg, ON', rating: 5, image: p3, quote: 'Annual inspection service from Elite has been invaluable. They catch small problems early every year and we\'ve avoided any major repairs. Their written reports are detailed and easy to understand.' },
    { name: 'Carolyn Hughes', location: 'King City, ON', rating: 5, image: p4, quote: 'I requested a full roof inspection after a neighbour had significant storm damage. Elite\'s team was thorough and honest - they found two areas that needed attention and repaired them on the spot. Excellent service.' },
  ],
  'metal-roofing': [
    { name: 'Frank Deluca', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite installed a standing seam metal roof on our century home and it\'s the best home improvement we\'ve ever made. The installation was precise, the detail work around the dormers is flawless, and the warranty is exceptional.' },
    { name: 'Olivia Strand', location: 'Nobleton, ON', rating: 5, image: p2, quote: 'We wanted a metal roof that would last our lifetime. Elite helped us choose the right profile and colour, and the result is stunning. Two winters in and not a single issue - completely silent in rain thanks to the insulation they added.' },
    { name: 'Marcus Lee', location: 'Bolton, ON', rating: 5, image: p3, quote: 'The metal roofing team at Elite was outstanding. They completed our large farmhouse in three days with impeccable precision on every seam and ridge cap. The craftsmanship is immediately visible and the roof has dramatically improved our home.' },
    { name: 'Diana Bergmann', location: 'Schomberg, ON', rating: 5, image: p4, quote: 'After researching metal roofing companies for months, I chose Elite and I\'m so glad I did. Their installers are clearly specialists. The finished roof is beautiful, and they left the property cleaner than when they arrived.' },
  ],
  'flat-roofing': [
    { name: 'Tony Marchese', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite replaced our commercial flat roof with a TPO membrane system and the difference is night and day. No more ponding water, no more leaks. They applied a proper drainage slope and the results have been perfect.' },
    { name: 'Samantha Reed', location: 'Concord, ON', rating: 5, image: p2, quote: 'Our flat roofed addition had been leaking for two years. Two other companies couldn\'t fix it permanently. Elite diagnosed the drainage problem, reconfigured the slope, and applied a fully adhered membrane. Zero leaks since.' },
    { name: 'Kevin Zhao', location: 'Maple, ON', rating: 5, image: p3, quote: 'We had Elite install a modified bitumen flat roof on our commercial unit. The crew was experienced, worked cleanly around our equipment, and the project came in on schedule and on budget. Excellent flat roofing work.' },
    { name: 'Laura Whitfield', location: 'Woodbridge, ON', rating: 5, image: p4, quote: 'The flat roof on our condo addition was a constant source of problems. Elite completely re-decked and applied a new waterproof membrane system. Three years of problem-free performance now. Highly recommended.' },
  ],
  'multi-family-roofing': [
    { name: 'Victor Rossi', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Elite re-roofed our entire 24-unit townhouse complex with minimal disruption to residents. Their phased approach was considerate of the tenants and their project management kept everything on track and on budget.' },
    { name: 'Helen Janowski', location: 'Mississauga, ON', rating: 5, image: p2, quote: 'As a property manager I\'ve worked with many roofing companies. Elite stands out for their communication, clean job sites, and consistent quality across our entire condominium portfolio. They understand multi-unit challenges.' },
    { name: 'Andrew Barrette', location: 'Brampton, ON', rating: 5, image: p3, quote: 'Our apartment building\'s roof was beyond its service life. Elite produced a thorough scope of work, coordinated everything with our board, and completed the project efficiently. Every unit remains leak-free.' },
    { name: 'Nicole Ferris', location: 'Burlington, ON', rating: 5, image: p4, quote: 'We contracted Elite for a full multi-family roof replacement on our townhouse complex. Their pricing was transparent, their scheduling minimized tenant complaints, and the final result was excellent quality throughout.' },
  ],
  'roof-replacement': [
    { name: 'Gary Buchanan', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'Our 25-year-old roof was at end of life and Elite handled the full replacement seamlessly. Complete tear-off, new decking where needed, and premium shingles. The entire job took one day and the results are outstanding.' },
    { name: 'Patricia Sullivan', location: 'Thornhill, ON', rating: 5, image: p2, quote: 'I was dreading the process of replacing our roof but Elite made it easy. They walked us through every option, gave us a firm written price, and completed the replacement in one day. Home looked brand new when they finished.' },
    { name: 'Michael Kovacs', location: 'Woodbridge, ON', rating: 5, image: p3, quote: 'After getting four quotes, Elite wasn\'t the cheapest but they were the most detailed and professional. The quality of the replacement work exceeded my expectations and they found and fixed three soft spots in our decking.' },
    { name: 'Denise Lambert', location: 'Kleinburg, ON', rating: 5, image: p4, quote: 'Exceptional full roof replacement. The crew arrived at 7am, worked nonstop, and by 4pm our entire roof was completely replaced and the yard was spotless. The new roof has completely transformed the look of our home.' },
  ],
  'roof-tarping': [
    { name: 'Ryan Connors', location: 'Vaughan, ON', rating: 5, image: p1, quote: 'After a tree fell on our roof during a storm, Elite had an emergency tarp in place within two hours of my call. It kept everything completely dry while we sorted out insurance. Fast response when it matters most.' },
    { name: 'Sarah Beaumont', location: 'Newmarket, ON', rating: 5, image: p2, quote: 'Our roof was severely damaged overnight and we were in a panic. Elite was there by 9am with a crew and had the entire damaged section secured under heavy-duty tarping before the next rain arrived. Professional emergency service.' },
    { name: 'Ben Kowalski', location: 'Barrie, ON', rating: 5, image: p3, quote: 'Roof tarping from Elite was exactly what we needed in an emergency. They secured three large sections after hail damage, gave me a full written damage report for insurance, and followed up once the repairs were complete.' },
    { name: 'Melissa Torres', location: 'Innisfil, ON', rating: 5, image: p4, quote: 'I was impressed by how quickly Elite responded to our emergency tarping call. Professional crew, heavy-duty materials, and they made sure the tarp was fully secured so nothing could shift in the wind. Saved our home from water damage.' },
  ],
}

// ─── Get Started Section Data ─────────────────────────────────────────────────

const serviceGetStartedData: Record<string, { heading: string; body: string[] }> = {
  'residential-roofing': {
    heading: 'Your Expert Residential Roofing Team',
    body: [
      'Whether you\'re replacing an aging roof or repairing damage after a rough Ontario winter, Elite Roofing brings certified craftsmanship and clear communication to every home. We work with premium materials installed to the highest standard, every time.',
      'Serving homeowners across Vaughan and surrounding areas, our residential team takes the time to explain your options, provide a firm written price, and complete the work on schedule. You finish with a roof that protects your home for decades and comes with the warranty coverage you deserve.',
    ],
  },
  'commercial-roofing': {
    heading: 'Expert Commercial Roofing Solutions',
    body: [
      'Whether you need a full flat roof replacement or ongoing maintenance for your commercial property, Elite Roofing provides engineered roofing systems designed for the demands of Ontario\'s climate. Our commercial team has the experience and certifications your property requires.',
      'Serving businesses and property owners across Vaughan and surrounding areas, we work around your operations schedule, communicate directly with facilities managers, and deliver complete warranty documentation at project handover. Your building is protected and your team is informed at every step.',
    ],
  },
  'roof-repair': {
    heading: 'Your Trusted Roof Repair Specialists',
    body: [
      'Whether you\'re dealing with a persistent leak or unexpected shingle damage, Elite Roofing brings precision, care, and straightforward answers to every repair call. We trace every issue to its root cause and complete lasting repairs using the right materials and techniques.',
      'Serving homeowners across Vaughan and surrounding areas, our repair team takes the time to explain what went wrong, what we\'ll fix, and how long it will last. You move forward with confidence knowing your roof is properly restored and backed by our written guarantee.',
    ],
  },
  'storm-damage-restoration': {
    heading: 'Ontario\'s Storm Damage Restoration Experts',
    body: [
      'Whether you\'re dealing with hail damage, wind-lifted shingles, or a fallen tree, Elite Roofing responds quickly with the documentation and expertise your insurance claim requires. We manage the full restoration so you don\'t have to navigate it alone.',
      'Serving homeowners across Vaughan and surrounding areas, our storm team handles everything from emergency tarping to final inspection. We communicate clearly with your insurer and keep you informed at every step, so your home is restored completely with no surprises.',
    ],
  },
  'gutter-systems': {
    heading: 'Professional Gutter System Installers',
    body: [
      'Whether you\'re replacing aging eavestroughs or installing a new seamless system, Elite Roofing designs and fabricates your gutters on-site for a perfect fit. Proper drainage is essential to protecting your foundation, fascia, and landscaping.',
      'Serving homeowners across Vaughan and surrounding areas, our gutter team pitches every system precisely, tests it before we leave, and backs the work with a written warranty. Clear communication and a clean worksite are part of every installation.',
    ],
  },
  'skylight-installation': {
    heading: 'Expert Skylight Installation Services',
    body: [
      'Whether you\'re adding natural light to a living space or installing a vented skylight in a bathroom, Elite Roofing handles the full installation with waterproofing expertise at the centre. A properly flashed skylight transforms a room and lasts decades without a single leak.',
      'Serving homeowners across Vaughan and surrounding areas, our skylight team takes the time to explain sizing, placement, and glazing options before work begins. The result is a weathertight installation backed by our 10-year leak-free guarantee.',
    ],
  },
  'roof-inspection': {
    heading: 'Professional Roof Inspection Services',
    body: [
      'Whether you\'re buying a home, preparing for a sale, or simply want a clear picture of your roof\'s condition, Elite Roofing delivers thorough written inspections with full photographic documentation. Our reports are accepted by insurers, lenders, and legal proceedings.',
      'Serving homeowners across Vaughan and surrounding areas, our inspection team provides honest findings with no upsell pressure. You receive a detailed report within 24 hours, along with a straight assessment of remaining service life and any repairs that make sense to address now.',
    ],
  },
  'metal-roofing': {
    heading: 'Ontario\'s Metal Roofing Specialists',
    body: [
      'Whether you\'re upgrading to a standing seam panel or restoring a heritage home with a metal shingle profile, Elite Roofing brings the technical precision metal roofing demands. Every seam, clip, and ridge cap is installed to manufacturer specification.',
      'Serving homeowners across Vaughan and surrounding areas, our metal roofing team guides you through profile, finish, and warranty options before a single panel is cut. You end up with a roof that lasts 50 years and looks exceptional for every one of them.',
    ],
  },
  'flat-roofing': {
    heading: 'Expert Flat Roofing Solutions',
    body: [
      'Whether you\'re dealing with a failing membrane or planning a new flat roof installation, Elite Roofing provides engineered drainage solutions and certified membrane systems that perform for decades. Proper slope and watertight terminations are built into every job.',
      'Serving homeowners and commercial property owners across Vaughan and surrounding areas, our flat roofing team explains every system option in plain language. You move forward with a roof that drains properly, resists Ontario winters, and comes with full manufacturer and workmanship coverage.',
    ],
  },
  'multi-family-roofing': {
    heading: 'Multi-Family Roofing Specialists',
    body: [
      'Whether you manage a condo complex or a townhouse portfolio, Elite Roofing delivers phased roofing solutions that keep buildings watertight and tenants undisturbed. Our experience with occupied-building installations means every project is planned around your residents.',
      'Serving property managers and condo boards across Vaughan and surrounding areas, our multi-family team presents directly to boards, works within reserve fund timelines, and delivers unified warranties across your entire portfolio. Clear communication at every phase is how we protect your investment.',
    ],
  },
  'roof-replacement': {
    heading: 'Your Expert Roof Replacement Team',
    body: [
      'Whether you\'re dealing with storm damage or planning a roof replacement, Elite Roofing brings experience, care, and clear guidance to every home. We install roofing systems with a focus on durability, proper installation, and steady communication throughout the process.',
      'Serving homeowners across Vaughan and surrounding areas, our team takes the time to explain options, timelines, and next steps so you can move forward with confidence on a roof built to handle Ontario\'s climate.',
    ],
  },
  'roof-tarping': {
    heading: 'Emergency Roof Tarping & Rapid Response',
    body: [
      'Whether you\'re dealing with storm damage in the middle of the night or an unexpected roof failure, Elite Roofing dispatches quickly and secures your home with commercial-grade tarping that holds through Ontario\'s toughest weather. We document everything for your insurance claim before we leave.',
      'Serving homeowners across Vaughan and surrounding areas, our emergency team arrives ready, works efficiently, and provides a full written damage report on site. You can submit your insurance claim with confidence knowing every detail is documented and your home is protected.',
    ],
  },
}

// ─── Service Quick Form ───────────────────────────────────────────────────────

function ServiceQuickForm({ serviceTitle }: { serviceTitle: string }) {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', service: serviceTitle, message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!fields.name.trim()) e.name = 'Name is required'
    if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Valid email is required'
    if (!fields.message.trim()) e.message = 'Please describe your project'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-green-600" />
        </div>
        <h4 className="font-serif text-lg font-bold text-[#0f172a] mb-2">Thank You!</h4>
        <p className="font-sans text-sm text-[#1e293b]">We&apos;ll be in touch within 24 hours to discuss your project.</p>
      </div>
    )
  }

  const inputCls = `w-full px-4 py-3 font-sans text-sm text-[#0f172a] bg-[#f8f7f5] border border-[#e7e5e4] focus:outline-none focus:border-[#D0000F] focus:bg-white transition-colors duration-200`

  const serviceOptions = [
    'Multi Family Roofing', 'Roof Replacement', 'Metal Roofing', 'Flat Roofing',
    'Gutter Systems', 'Skylight Installation', 'Roof Repairs', 'Storm Damage Restoration',
    'Other / Not Sure',
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <input
          type="text"
          placeholder="Full Name *"
          value={fields.name}
          onChange={e => { setFields(f => ({...f, name: e.target.value})); setErrors(er => ({...er, name: ''})) }}
          className={inputCls + (errors.name ? ' border-red-400' : '')}
        />
        {errors.name && <p className="font-sans text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address *"
          value={fields.email}
          onChange={e => { setFields(f => ({...f, email: e.target.value})); setErrors(er => ({...er, email: ''})) }}
          className={inputCls + (errors.email ? ' border-red-400' : '')}
        />
        {errors.email && <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number (optional)"
          value={fields.phone}
          onChange={e => setFields(f => ({...f, phone: e.target.value}))}
          className={inputCls}
        />
      </div>
      <div>
        <select
          value={fields.service}
          onChange={e => setFields(f => ({...f, service: e.target.value}))}
          className={inputCls + ' cursor-pointer'}
        >
          <option value="" disabled>Select a Service</option>
          {serviceOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          placeholder="Project Details *"
          rows={4}
          value={fields.message}
          onChange={e => { setFields(f => ({...f, message: e.target.value})); setErrors(er => ({...er, message: ''})) }}
          className={inputCls + ' resize-none' + (errors.message ? ' border-red-400' : '')}
        />
        {errors.message && <p className="font-sans text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-6 py-4 bg-[#D0000F] hover:bg-[#A5000A] text-white font-sans text-sm font-semibold transition-colors duration-300 disabled:opacity-70"
      >
        {submitting ? 'Sending…' : 'Get In Touch'}
      </button>
    </form>
  )
}

// ─── Review Carousel ──────────────────────────────────────────────────────────

function ReviewCarousel({ reviews, serviceTitle }: { reviews: ServiceReview[]; serviceTitle: string }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = reviews.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 4500)
    return () => clearInterval(id)
  }, [paused, total])

  const prev = () => { setPaused(true); setCurrent((c) => (c - 1 + total) % total) }
  const next = () => { setPaused(true); setCurrent((c) => (c + 1) % total) }
  const r = reviews[current]

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 relative overflow-hidden">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="bg-white border border-[#e7e5e4] p-7 rounded-xl shadow-sm h-full flex flex-col"
        >
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: r.rating }).map((_, i) => (
              <span key={i} className="text-[#f59e0b] text-base leading-none">★</span>
            ))}
          </div>
          <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed flex-1 mb-6">
            &ldquo;{r.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-[#e7e5e4]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src={r.image} alt={r.name} fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-[#0f172a]">{r.name}</p>
              <p className="font-sans text-[11px] text-[#0f172a]">{r.location} · {serviceTitle}</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPaused(true); setCurrent(i) }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#D0000F] w-5' : 'bg-[#e7e5e4]'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="w-9 h-9 rounded-md border border-[#e7e5e4] flex items-center justify-center hover:border-[#D0000F] hover:text-[#D0000F] transition-colors duration-200">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="w-9 h-9 rounded-md border border-[#e7e5e4] flex items-center justify-center hover:border-[#D0000F] hover:text-[#D0000F] transition-colors duration-200">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── FAQ Accordion ──────────────────────────────────────────────────────────────

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={[
              'border transition-all duration-300',
              isOpen
                ? 'border-[#D0000F]/50 shadow-sm'
                : 'border-[#e7e5e4] hover:border-[#D0000F]/30',
            ].join(' ')}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base font-semibold text-[#0f172a] leading-snug">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-[#D0000F]" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 border-t border-[#e7e5e4]">
                    <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

// ─── Animated Process Section (all service pages) ─────────────────────────────

function AnimatedProcessSection({ steps, stepIcons }: { steps: ProcessStep[]; stepIcons: React.ElementType[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null])
  const contactRef = useRef<HTMLDivElement>(null)
  const [pathD, setPathD] = useState('')
  const [pathLength, setPathLength] = useState(0)
  const [pointLengths, setPointLengths] = useState<number[]>([])
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(true)
  const prevProgressRef = useRef(0)

  useEffect(() => {
    const buildPath = () => {
      if (!sectionRef.current) return
      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionAbsTop = sectionRect.top + window.scrollY

      const allRefs: (HTMLDivElement | null)[] = [...iconRefs.current, contactRef.current]
      const positions = allRefs
        .map(ref => {
          if (!ref) return null
          const r = ref.getBoundingClientRect()
          return {
            x: r.left - sectionRect.left + r.width / 2,
            y: r.top + window.scrollY - sectionAbsTop + r.height / 2,
          }
        })
        .filter((p): p is { x: number; y: number } => p !== null)
      if (positions.length < 2) return

      const cx = sectionRect.width / 2
      const fx = positions[0].x, fy = positions[0].y
      const neckY = fy * 0.3
      const entryD = `M ${cx} 0 L ${cx} ${neckY} C ${cx} ${fy * 0.65} ${fx} ${fy * 0.65} ${fx} ${fy}`
      let d = entryD
      for (let i = 0; i < positions.length - 1; i++) {
        const a = positions[i], b = positions[i + 1]
        const midY = (a.y + b.y) / 2
        d += ` C ${a.x} ${midY} ${b.x} ${midY} ${b.x} ${b.y}`
      }
      setPathD(d)

      const ns = 'http://www.w3.org/2000/svg'
      const tmpSvg = document.createElementNS(ns, 'svg')
      tmpSvg.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;top:-9999px;left:-9999px'
      document.body.appendChild(tmpSvg)

      const lengths: number[] = []
      for (let i = 0; i < positions.length; i++) {
        let partial = entryD
        for (let j = 0; j < i; j++) {
          const a = positions[j], b = positions[j + 1]
          const midY = (a.y + b.y) / 2
          partial += ` C ${a.x} ${midY} ${b.x} ${midY} ${b.x} ${b.y}`
        }
        const p = document.createElementNS(ns, 'path')
        p.setAttribute('d', partial)
        tmpSvg.appendChild(p)
        lengths.push(p.getTotalLength())
      }

      const fullEl = document.createElementNS(ns, 'path')
      fullEl.setAttribute('d', d)
      tmpSvg.appendChild(fullEl)
      const totalLen = fullEl.getTotalLength()
      document.body.removeChild(tmpSvg)

      setPathLength(totalLen)
      setPointLengths(lengths)
    }

    buildPath()
    window.addEventListener('resize', buildPath)
    return () => window.removeEventListener('resize', buildPath)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      const entered = vh * 0.85 - rect.top
      const newProgress = Math.max(0, Math.min(1, entered / rect.height))
      const goingDown = newProgress >= prevProgressRef.current
      prevProgressRef.current = newProgress
      setIsScrollingDown(goingDown)
      setScrollProgress(newProgress)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const drawnLength = pathLength > 0 ? scrollProgress * pathLength : 0
  const dashOffset = pathLength > 0 ? pathLength - drawnLength : 9999

  const activeSteps = pointLengths.length >= 4
    ? pointLengths.slice(0, 4).map(len => drawnLength >= len)
    : [false, false, false, false]
  const contactActive = pointLengths.length >= 5 && drawnLength >= pointLengths[4]

  return (
    <section ref={sectionRef} className="relative pt-24 md:pt-32 pb-32 md:pb-40 bg-[#fafaf9]">
      {/* Fade the top of the snake line */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-[#fafaf9] via-[#fafaf9]/70 to-transparent z-10 pointer-events-none" />
      {/* Animated SVG snake — desktop only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" fill="none">
          {pathD && (
            <path d={pathD} stroke="#e2e8f0" strokeWidth="2" strokeDasharray="10 8" />
          )}
          <path
            d={pathD || 'M 0 0'}
            stroke="#D0000F"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: pathLength > 0 ? pathLength : 9999,
              strokeDashoffset: pathLength > 0 ? dashOffset : 9999,
              transition: isScrollingDown ? 'stroke-dashoffset 0.08s linear' : 'none',
              opacity: pathLength > 0 ? 1 : 0,
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 lg:px-16">
        {/* Heading — line starts from below this block */}
        <div ref={headingRef} className="flex items-start justify-end mb-6 lg:mb-8">
          <div className="text-left">
            <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-3 block">
              Our Process
            </span>
            <h2 className="font-sans font-black text-[#0f172a] leading-[1.05]">
              <span className="block text-[2.8rem] lg:text-[3.8rem] xl:text-[4.5rem]">Four Steps.</span>
              <span className="block text-[2.8rem] lg:text-[3.8rem] xl:text-[4.5rem]">zero <span className="text-[#D0000F]">Effort.</span></span>
            </h2>
          </div>
        </div>

        {/* Desktop: animated zigzag layout */}
        <div className="hidden lg:block">
          {steps.map((step, i) => {
            const isActive = activeSteps[i]
            const isLeft = i % 2 === 0
            const Icon = stepIcons[i]
            return (
              <div
                key={i}
                className={`flex items-center gap-24 py-16 ${!isLeft ? 'flex-row-reverse' : ''}`}
              >
                <div
                  ref={el => { iconRefs.current[i] = el }}
                  className="flex-shrink-0 relative flex items-center justify-center"
                  style={{ width: '112px', height: '112px' }}
                >
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? 'bg-[#D0000F] border-2 border-[#D0000F] shadow-xl shadow-[#D0000F]/25'
                        : 'bg-white border-2 border-[#D0000F]/40'
                    }`}
                    style={{ borderRadius: ['60% 40% 55% 45% / 45% 55% 40% 60%', '40% 60% 45% 55% / 55% 45% 60% 40%', '55% 45% 60% 40% / 40% 60% 45% 55%', '45% 55% 40% 60% / 60% 40% 55% 45%'][i] }}
                  />
                  <Icon
                    className={`relative z-10 w-10 h-10 transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-[#cbd5e1]'
                    }`}
                  />
                </div>
                <div className={`flex-1 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-25'}`}>
                  <div className={isLeft ? 'ml-auto w-fit' : ''}>
                    <div className="font-sans text-[11px] font-semibold tracking-[0.3em] uppercase text-[#D0000F] mb-3">
                      {String(i + 1).padStart(2, '0')} / 04
                    </div>
                    <h3 className="font-sans font-black text-2xl lg:text-3xl text-[#0f172a] mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed max-w-xs">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile: heading + numbered list */}
        <div className="lg:hidden space-y-0">
          <div className="mb-8">
            <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-2 block">
              Our Process
            </span>
            <h2 className="font-sans font-black text-[2rem] text-[#0f172a] leading-tight mb-8">
              Four Steps. <span className="text-[#D0000F]">zero Effort.</span>
            </h2>
          </div>
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#041D35] flex items-center justify-center flex-shrink-0">
                  <span className="font-sans text-[10px] font-bold text-white tracking-wider">{step.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#e7e5e4] my-2 min-h-[36px]" />
                )}
              </div>
              <div className={i < steps.length - 1 ? 'pb-10' : ''}>
                <h3 className="font-serif text-base font-semibold text-[#0f172a] mb-1.5 leading-snug">{step.title}</h3>
                <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us button — the line terminates here */}
        <div className="flex justify-center mt-28 lg:mt-36">
          <div ref={contactRef}>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-8 py-4 font-sans text-sm font-semibold transition-all duration-500 rounded-md ${
                contactActive
                  ? 'bg-[#D0000F] hover:bg-[#A5000A] text-white shadow-xl shadow-[#D0000F]/25'
                  : 'bg-white border-2 border-[#e2e8f0] text-[#0f172a]'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────────

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  const content = serviceContent[params.slug]

  if (!service || !content) {
    notFound()
  }

  const Icon = iconMap[service.icon] ?? Home
  const zigImg1 = content.galleryImages[0] ?? content.heroImage
  const zigImg2 = content.galleryImages[1] ?? content.galleryImages[0] ?? content.heroImage
  const reviews = serviceReviewsMap[params.slug] ?? serviceReviewsMap['residential-roofing']
  const gsData = serviceGetStartedData[params.slug] ?? serviceGetStartedData['roof-replacement']

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[280px] md:min-h-[360px] lg:min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt={service.title}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
            style={content.heroImagePosition ? { objectPosition: content.heroImagePosition } : undefined}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex pt-24 md:pt-28 lg:pt-32">
          <div className="flex items-center gap-2 text-white font-sans text-sm font-bold tracking-widest uppercase">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <Link href="/#services" className="hover:text-white/70 transition-colors">Services</Link>
            <span className="text-white/50">/</span>
            <span className="text-white/80">{service.title}</span>
          </div>
        </div>
      </section>

      {/* ── Get Started ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: text content */}
            <div className="pt-12 md:pt-14 lg:pt-16 pb-12 lg:pb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
                {gsData.heading}
              </h2>
              <div className="w-24 h-px bg-[#D0000F] mb-8" />
              {gsData.body.map((paragraph, idx) => (
                <p key={idx} className="font-sans text-base text-[#0f172a] leading-relaxed mb-5 last:mb-0">
                  {paragraph}
                </p>
              ))}
              <div className="mt-7 space-y-3">
                {([
                  { label: 'Licensed in Ontario', Icon: Shield },
                  { label: '$5M Liability Insurance', Icon: BadgeCheck },
                  { label: 'WSIB Covered', Icon: Users },
                  { label: 'BBB Accredited Business', Icon: Award },
                ] as { label: string; Icon: React.ElementType }[]).map(({ label, Icon }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0f172a]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#0f172a]" />
                    </div>
                    <span className="font-sans text-sm font-semibold text-[#0f172a]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: form card — overlaps hero banner */}
            <div className="relative z-10 pb-12 lg:pb-16 lg:-mt-24">
              <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-10">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] mb-2">
                  Let&apos;s Get Started!
                </h3>
                <Link href="/testimonials" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity cursor-pointer">
                  {/* Overlapping reviewer avatars */}
                  <div className="flex -space-x-2 flex-shrink-0">
                    {[
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face',
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face',
                    ].map((src, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative flex-shrink-0">
                        <Image src={src} alt="reviewer" fill sizes="32px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <span key={i} className="text-[#f59e0b] text-sm leading-none">★</span>
                      ))}
                    </div>
                    <p className="font-sans text-xs text-[#1e293b]">4.9 out of 5 · 300+ Google reviews</p>
                  </div>
                </Link>
                <ServiceQuickForm serviceTitle={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Standard ─────────────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28">
          <div className="px-8 md:px-10 lg:px-14">
            <div className="text-center mb-16">
              <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
                Our Commitment
              </span>
              <h2 className="font-sans font-black text-[2rem] md:text-[2.6rem] text-[#0f172a] leading-tight mb-5">
                The Standard
              </h2>
              <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed max-w-2xl mx-auto">
                Every Elite Roofing crew operates under a defined set of standards, not suggestions. This is what you can expect from the moment the first truck arrives to the final walkthrough.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {([
                {
                  icon: BadgeCheck,
                  heading: 'Certified Installers Only',
                  body: 'Every crew member is background-checked, licensed, and trained under GAF Master Elite certification requirements. No subcontractors, no day-labour. The same faces from start to finish.',
                },
                {
                  icon: Wrench,
                  heading: 'Worksite Discipline',
                  body: 'Landscaping is protected before work begins. Magnetic sweeps run twice daily. Every evening your property is left clean. Debris cleared, materials staged neatly, nothing left exposed to weather.',
                },
                {
                  icon: Layers,
                  heading: 'No Material Substitutions',
                  body: 'The materials quoted are the materials installed. We never swap to a cheaper product in the field. Every delivery is documented and available for your review on request.',
                },
                {
                  icon: Users,
                  heading: 'One Point of Contact',
                  body: 'Your project manager is reachable by phone or text throughout the job. You know exactly what is happening and when. Not through a call centre, but through your own dedicated contact.',
                },
              ] as { icon: React.ElementType; heading: string; body: string }[]).map((item, i) => {
                const ItemIcon = item.icon
                return (
                  <div key={i} className="border-t-2 border-[#D0000F] pt-7">
                    <div className="mb-4">
                      <ItemIcon className="w-7 h-7 text-[#D0000F]" />
                    </div>
                    <h3 className="font-sans font-black text-[#0f172a] text-base mb-3 leading-snug">{item.heading}</h3>
                    <p className="font-sans text-sm text-[#1e293b] leading-loose">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      {/* ── How It Works: Our Proven Process (all service pages) ─────────────── */}
      <AnimatedProcessSection steps={sharedProcessData.steps} stepIcons={sharedProcessData.icons} />

      {/* ── Our Work (3-card grid) ────────────────────────────────────────────── */}
      {(() => {
        const featuredSlugs = content.featuredProjects ?? []
        const featuredCards = featuredSlugs
          .map(slug => projects.find(p => p.slug === slug))
          .filter(Boolean) as typeof projects
        if (featuredCards.length === 0) return null
        return (
          <section className="pt-16 md:pt-20 pb-28 md:pb-36 bg-[#fafaf9]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-10">
              <div className="text-center">
                <span className="font-sans text-[13px] font-medium tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
                  Our Work
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
                  {service.title} Projects
                </h2>
              </div>
            </div>

            <div className="px-2 md:px-6 lg:px-10 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredCards.map((project) => (
                  <Link key={project.id} href="/projects" className="overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500 rounded-xl group block">
                    <div className="relative aspect-[4/3] bg-[#0f172a] overflow-hidden rounded-t-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 border-t border-[#e7e5e4]">
                      <h3 className="font-serif text-base font-semibold text-[#0f172a] mb-1 leading-snug">{project.title}</h3>
                      <p className="font-sans text-xs text-[#0f172a] mb-3">{project.location} &middot; {project.year}</p>
                      <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed line-clamp-2">{project.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D0000F] text-white font-sans text-sm font-semibold hover:bg-[#A5000A] transition-colors duration-300 rounded-md">
                View More Projects
              </Link>
            </div>
          </section>
        )
      })()}

      {/* ── Split Overview Banner ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[380px] md:min-h-[440px] lg:min-h-[500px]">

        {/* Right image — centred within the right portion */}
        <div className="absolute inset-y-0 right-0 w-[60%]">
          <Image
            src={content.overviewImage ?? zigImg1}
            alt={service.title}
            fill
            sizes="60vw"
            className="object-cover"
            style={content.overviewImagePosition ? { objectPosition: content.overviewImagePosition } : { objectPosition: 'center' }}
          />
          {/* Dark gradient on left edge of roofing image */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#041D35]/80 to-transparent pointer-events-none" />
        </div>

        {/* Left panel: dark stripe background diagonal */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[72%] lg:w-[62%]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 81% 100%, 0 100%)' }}
        >
          <Image
            src="/stripe-bg.avif"
            alt=""
            fill
            className="object-cover object-center"
          />
          {/* Overlay to deepen contrast and ensure readability */}
          <div className="absolute inset-0 bg-[#041D35]/55" />
        </div>

        {/* Content — shifted right within the left panel area */}
        <div className="relative z-10 min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center">
          <div className="w-full md:w-[56%] lg:w-[54%] flex items-center justify-center pl-8 md:pl-10 lg:pl-14 pr-8 md:pr-6 lg:pr-4 py-10 md:py-14">
            <div className="w-full max-w-[340px] md:max-w-[440px] lg:max-w-[480px]">
              <h2 className="font-sans text-[1.7rem] md:text-[1.85rem] lg:text-[2.1rem] font-black text-white mb-5 leading-tight uppercase tracking-normal">
                {content.tagline}
              </h2>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Guarantee (all service pages) ────────────────────────────────── */}
      {(() => {
        const wd = serviceWarrantyData[params.slug]
        if (!wd) return null
        return (
          <section className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0">
              <Image src="/warranty-bg.avif" alt="" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-white/55" />
            </div>
            <div className="relative z-10 px-4 md:px-8 lg:px-16">
              <div className="text-center mb-14 md:mb-18">
                <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-3 block">
                  Our Guarantee
                </span>
                <h3 className="font-sans font-black text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] text-[#0f172a] leading-tight">
                  {wd.heading}
                </h3>
                <p className="font-sans text-sm text-[#1e293b] mt-5 max-w-xl mx-auto leading-relaxed">
                  {wd.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
                {wd.cards.map(({ label, duration, items }) => (
                  <div key={label} className="bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-[#D0000F]/30">
                    <div className="flex items-start justify-between mb-5 pb-5 border-b border-[#D0000F]/20">
                      <p className="font-sans text-xs font-semibold text-[#1e293b]">{label}</p>
                      <span className="font-sans font-black text-xl text-[#D0000F]">{duration}</span>
                    </div>
                    <ul className="space-y-3">
                      {items.map(item => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-[#D0000F] mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm font-medium text-[#0f172a] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-center font-sans text-xs text-[#1e293b] mt-10 leading-relaxed max-w-2xl mx-auto">
                {wd.footnote}
              </p>
            </div>
          </section>
        )
      })()}

      {/* ── Client Reviews ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[13px] font-semibold tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Hear From Our Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left — sliding reviews */}
            <div className="flex flex-col">
              <ReviewCarousel reviews={reviews} serviceTitle={service.title} />
            </div>

            {/* Right — stats + links */}
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 leading-snug">
                What Our Clients<br />Are Saying About Our<br />{service.title}
              </h3>

              <Link href="/testimonials" className="flex items-center gap-4 mb-5 hover:opacity-80 transition-opacity cursor-pointer">
                <div className="flex -space-x-3">
                  {reviews.slice(0, 3).map((r, i) => (
                    <div key={i} className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                      <Image src={r.image} alt={r.name} fill sizes="44px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <span key={i} className="text-[#f59e0b] text-base leading-none">★</span>
                    ))}
                  </div>
                  <p className="font-sans text-sm font-semibold text-[#0f172a]">
                    4.9 <span className="font-normal text-[#1e293b]">out of 5 across 300 Google reviews</span>
                  </p>
                </div>
              </Link>

              <p className="font-sans text-sm font-medium text-[#0f172a] leading-relaxed mb-8">
                Hundreds of homeowners and businesses across Ontario have trusted Elite Roofing for their {service.title.toLowerCase()} needs. Read what they have to say.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://customerreviews.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f59e0b] text-[#0f172a] font-sans text-base font-semibold hover:bg-[#d97706] transition-colors duration-300 rounded-md">
                  Leave a Google Review
                </a>
                <a
                  href="/testimonials"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D0000F] text-white font-sans text-base font-semibold hover:bg-[#A5000A] transition-colors duration-300 rounded-md"
                >
                  See More Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-[#fafaf9]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-[13px] font-medium tracking-[0.35em] uppercase text-[#1e293b] mb-4 block">
              Questions & Answers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Common Questions About {service.title}
            </h2>
          </div>
          <FAQAccordion faqs={content.faqs} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-[13px] font-medium tracking-[0.35em] uppercase text-white/60 mb-5 block">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Discuss Your {service.title} Project?
          </h2>
          <p className="font-sans text-sm text-white/55 leading-relaxed mb-10 max-w-xl mx-auto">
            Elite Roofing provides a no pressure, no cost assessment of your roof. We document every finding, answer your questions honestly, and deliver a transparent written proposal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#D0000F] hover:bg-[#A5000A] text-white font-sans text-base font-semibold transition-colors duration-300 rounded-md"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+19055550198"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/5 font-sans text-base font-semibold transition-all duration-300 rounded-md whitespace-nowrap"
            >
              (905) 555-0198
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
