/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Feature, Project, Testimonial, FAQItem, ServiceArea } from './types';

// Asset references with the exact generated paths
export const IMAGES = {
  hero: '/src/assets/images/hero_concrete_driveway_1783358801903.jpg',
  patio: '/src/assets/images/patio_concrete_1783358811879.jpg',
  drivewayInstall: '/src/assets/images/driveway_installation_1783358821657.jpg',
  frontStoop: '/src/assets/images/front_stoop_concrete_1783358831826.jpg',
  sidewalk: '/src/assets/images/sidewalk_concrete_1783358855927.jpg',
  garageFloor: '/src/assets/images/garage_concrete_1783358865767.jpg',
};

export const SERVICES: Service[] = [
  {
    id: 'driveway-install',
    title: 'Driveway Installation',
    description: 'We design and pour custom-engineered concrete driveways tailored to withstand Illinois weather and heavy vehicle loads. Our driveways combine ultimate structural strength with a clean, upscale appearance.',
    iconName: 'Wrench',
    benefits: ['Grade-A 4000 PSI concrete', 'Fiber mesh & steel rebar reinforcement', 'Thickened borders & smooth broom finish'],
    basePriceRange: '$8.50 - $12.00 / sq ft'
  },
  {
    id: 'driveway-replace',
    title: 'Driveway Replacement',
    description: 'Breathe new life into your property by replacing cracked, settling, or uneven asphalt/concrete with a modern, hand-tooled concrete driveway. Includes clean excavation, subgrade preparation, and high-precision pouring.',
    iconName: 'RotateCcw',
    benefits: ['Complete hauling & disposal of old material', 'Subgrade correction to prevent settling', 'Proper pitch and drainage modeling'],
    basePriceRange: '$9.50 - $14.00 / sq ft'
  },
  {
    id: 'sidewalk-install',
    title: 'Sidewalk Installation',
    description: 'Safe, beautiful, and durable walkways linking your house, garden, and streets. Our sidewalks are hand-tooled with pristine control joints and deep broom textures to prevent slipping during winter.',
    iconName: 'Footprints',
    benefits: ['Slip-resistant textures', 'Aesthetic contour alignment', 'Uniform thickness and grading'],
    basePriceRange: '$7.50 - $10.00 / sq ft'
  },
  {
    id: 'front-stoops',
    title: 'Front Stoops & Entryways',
    description: 'Create a lasting first impression with heavy-duty concrete front stoops, entry stairs, and landing pads. Precision-leveled to perfectly match your threshold and exterior cladding.',
    iconName: 'Home',
    benefits: ['Reinforced step cores', 'Custom heights & widths to code', 'Seamless wall tie-ins'],
    basePriceRange: 'Custom quote'
  },
  {
    id: 'patios',
    title: 'Concrete Patios',
    description: 'Transform your backyard into an outdoor living masterpiece. We offer high-quality traditional broom-finished patios as well as premium stamped slate, cobble, or wood-look decorative textures.',
    iconName: 'Sparkles',
    benefits: ['Endless pattern and custom color options', 'Protective sealer application included', 'Custom seating wall and fire pit integration'],
    basePriceRange: '$9.00 - $16.00 / sq ft'
  },
  {
    id: 'garage-floors',
    title: 'Garage Floors',
    description: 'Pouring high-load, steel-hardened concrete garage floor slabs. Our garage floors feature an ultra-smooth trowel finish that is resistant to car fluid absorption and extremely easy to clean.',
    iconName: 'SquareDot',
    benefits: ['Hardened surface coat', 'Sump pit or pitch grading configuration', 'Expansion joints mapped to load lines'],
    basePriceRange: '$8.00 - $11.00 / sq ft'
  },
  {
    id: 'walkways',
    title: 'Walkways',
    description: 'Sleek, curving path solutions that elevate your home’s outdoor landscaping. Specially designed to manage elevation shifts seamlessly and provide secure footwork under any weather conditions.',
    iconName: 'TrendingUp',
    benefits: ['Flexible path geometry', 'Root-growth barrier preparation', 'Clean hand-tooled borders'],
    basePriceRange: '$7.50 - $11.00 / sq ft'
  },
  {
    id: 'residential-projects',
    title: 'Residential Concrete Projects',
    description: 'From concrete trash can pads and hot tub slabs to robust retaining walls and decorative steps, we execute custom specialty residential concrete pours of all shapes and sizes.',
    iconName: 'Grid',
    benefits: ['No project too small or custom', 'Full design consultations', 'Meticulous cleanup afterward'],
    basePriceRange: 'Custom quote'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'quality',
    title: 'Quality Craftsmanship',
    description: 'We never cut corners. Our crew pours premium materials using high-strength mixes, steel-reinforced grids, and exact hand-tooling techniques.',
    iconName: 'Award'
  },
  {
    id: 'professional',
    title: 'Professional Service',
    description: 'Clear, polite communication and an organized, clean crew. We treat your property with absolute respect from quote to cleanup.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'scheduling',
    title: 'Reliable Scheduling',
    description: 'We respect your time. We provide precise timelines, turn up exactly when promised, and push projects through to completion with no delays.',
    iconName: 'Calendar'
  },
  {
    id: 'detail',
    title: 'Attention to Detail',
    description: 'Perfect levels, pristine joint lines, neatly finished edges, and flawless drainage pitches. The little details are our pride.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'estimates',
    title: 'Free Estimates',
    description: 'Honest, itemized written proposals with clear pricing. No hidden fees, surprise surcharges, or aggressive sales tactics.',
    iconName: 'FileText'
  },
  {
    id: 'local',
    title: 'Locally Owned',
    description: 'Based right here in Hawthorn Woods, IL. We care deeply about beautifying our neighborhood and maintaining our stellar local reputation.',
    iconName: 'MapPin'
  },
  {
    id: 'materials',
    title: 'Durable Materials',
    description: 'We use premium aggregates, commercial-grade sealants, and climate-adjusted mixes suited specifically for harsh Chicagoland winters.',
    iconName: 'Hammer'
  },
  {
    id: 'satisfaction',
    title: 'Customer Satisfaction',
    description: 'Our work is not complete until you walk the project with us and sign off with a smile. We stand behind our work 100%.',
    iconName: 'ThumbsUp'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Modern Concrete Driveway Replacement',
    category: 'Driveway',
    description: 'A spacious double-car driveway featuring a custom trowel border, deep broom-finish traction surface, and flawless grading to route storm runoff.',
    image: IMAGES.drivewayInstall,
    size: '1,400 sq ft',
    completionYear: '2025'
  },
  {
    id: 'p2',
    title: 'Decorative Stamped Slate Patio',
    category: 'Patio',
    description: 'A gorgeous backyard entertainment patio featuring a stamped ashlar slate texture in concrete-gray with dark charcoal highlights.',
    image: IMAGES.patio,
    size: '550 sq ft',
    completionYear: '2026'
  },
  {
    id: 'p3',
    title: 'Pristine Front Entrance Stoop',
    category: 'Stoop',
    description: 'A heavy-duty reinforced three-step entrance stoop with matching walkway, offering a beautiful face lift to a modern residential front yard.',
    image: IMAGES.frontStoop,
    size: '120 sq ft',
    completionYear: '2025'
  },
  {
    id: 'p4',
    title: 'Curving Garden Walkway',
    category: 'Walkway',
    description: 'A beautiful, smoothly curving concrete sidewalk weaving through premium landscaping to connect the main patio to the side entrance.',
    image: IMAGES.sidewalk,
    size: '180 sq ft',
    completionYear: '2026'
  },
  {
    id: 'p5',
    title: 'Smooth-Finished Garage Floor Slab',
    category: 'Garage Floor',
    description: 'A robust steel-reinforced garage slab replacement with a heavy troweled finish, custom load joints, and fluid-resistant protective seal.',
    image: IMAGES.garageFloor,
    size: '600 sq ft',
    completionYear: '2025'
  },
  {
    id: 'p6',
    title: 'Custom Driveway & Connected Entrance Pathway',
    category: 'Driveway',
    description: 'A grand driveway project showing complete grade excavation, reinforced base, and fresh hand-finished concrete matching the front entryway.',
    image: IMAGES.hero,
    size: '1,800 sq ft',
    completionYear: '2026'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dave H.',
    location: 'Hawthorn Woods, IL',
    stars: 5,
    text: 'John did our driveway, sidewalk, and front stoop. He was professional and his work is incredible. I wouldn\'t hesitate to hire him again for any other concrete project.',
    date: 'April 2026'
  },
  {
    id: 't2',
    name: 'Sarah M.',
    location: 'Kildeer, IL',
    stars: 5,
    text: 'We had our old crumbling asphalt driveway replaced with a modern concrete driveway. John and his crew did an amazing job, completed on time, and cleaned up everything perfectly. Highly recommend!',
    date: 'May 2026'
  },
  {
    id: 't3',
    name: 'Robert T.',
    location: 'Long Grove, IL',
    stars: 5,
    text: 'The stamped concrete patio John installed has transformed our backyard. The slate pattern looks luxurious, and the crew was extremely detail-oriented. Great communication throughout.',
    date: 'June 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How long does a new concrete driveway take to install?',
    answer: 'Most standard residential driveway replacements take between 3 to 5 days to complete, depending on size. This includes 1-2 days for excavation, subgrade preparation, setting up forms, and laying reinforcement, 1 day for pouring and finishing, and 1 day for cleanup and removing forms.'
  },
  {
    id: 'faq2',
    question: 'How long should new concrete cure before I can drive on it?',
    answer: 'We recommend keeping all pedestrian traffic off the concrete for at least 24 hours. You can safely drive passenger vehicles on your new driveway after 7 full days of curing. Heavy vehicles (such as delivery trucks or dumpster rentals) should stay off the concrete for at least 28 days, when concrete reaches its full structural design strength.'
  },
  {
    id: 'faq3',
    question: 'Do you provide free estimates for concrete work?',
    answer: 'Absolutely! We provide completely free, itemized, written proposals for all residential concrete projects. We will visit your property, take precise measurements, discuss layouts/finishes, and send you a transparent quote with no hidden fees.'
  },
  {
    id: 'faq4',
    question: 'What specific areas do you serve?',
    answer: 'We are proudly based in Hawthorn Woods, IL, and serve homeowners throughout the surrounding northwest Chicago suburbs, including Lake Zurich, Kildeer, Long Grove, Deer Park, Barrington, Buffalo Grove, and Arlington Heights.'
  },
  {
    id: 'faq5',
    question: 'Can my cracked or settling concrete be repaired, or does it need replacement?',
    answer: 'While minor hairline cracks are normal, deep cracks (wider than 1/4 inch), shifting slabs, or crumbling concrete usually indicate subgrade failure or poor drainage. In these cases, superficial repairs are only temporary band-aids. A full, professional replacement resolves the underlying base issue and provides a brand-new slab designed to last 30+ years.'
  },
  {
    id: 'faq6',
    question: 'What measures do you take to prevent cracks in Chicagoland weather?',
    answer: 'We use a high-strength 4000 PSI concrete mix tailored for freeze-thaw climates, integrate internal steel rebar grids or heavy fiber mesh, create clean expansion joints at precise load points, and apply high-grade cure-and-seal compounds to lock in strength and repel winter salt intrusion.'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Hawthorn Woods', distance: 'Local / Base', isPrimary: true },
  { name: 'Lake Zurich', distance: '3 miles', isPrimary: true },
  { name: 'Kildeer', distance: '4 miles', isPrimary: true },
  { name: 'Long Grove', distance: '5 miles', isPrimary: true },
  { name: 'Deer Park', distance: '6 miles', isPrimary: true },
  { name: 'Barrington', distance: '8 miles', isPrimary: false },
  { name: 'Buffalo Grove', distance: '9 miles', isPrimary: false },
  { name: 'Arlington Heights', distance: '12 miles', isPrimary: false }
];
