// src/data/categories.ts

export interface Category {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  gradient: string;
  accent: string;
  icon: string;
  tags: string[];
  stats: { label: string; value: string }[];
  featured?: boolean;
  group: 'lifestyle' | 'industrial' | 'technology' | 'services';
}

export const categories: Category[] = [
  {
    id: '01',
    slug: 'sports-garments',
    name: 'Sports Garments',
    tagline: 'Performance Redefined',
    description:
      'Custom team jerseys, tracksuits, and performance apparel engineered for elite athletes and professional sports clubs. MOQ from 50 units.',
    image: '/images/cat_sports.jpg',
    gradient: 'from-blue-600 via-indigo-700 to-purple-800',
    accent: '#6366f1',
    icon: '⚡',
    tags: ['Jerseys', 'Tracksuits', 'Uniforms', 'Performance Wear'],
    stats: [
      { label: 'Products', value: '200+' },
      { label: 'Min Order', value: '50 pcs' },
      { label: 'Lead Time', value: '10 days' },
    ],
    featured: true,
    group: 'lifestyle',
  },
  {
    id: '02',
    slug: 'perfume-fragrance',
    name: 'Perfume & Fragrance',
    tagline: 'Scent Architecture',
    description:
      'Premium fragrance house offering signature blends, private-label perfumes, and bespoke bottle design for luxury brand partners.',
    image: '/images/cat_perfume.jpg',
    gradient: 'from-purple-700 via-fuchsia-700 to-rose-700',
    accent: '#a855f7',
    icon: '✨',
    tags: ['Eau de Parfum', 'Private Label', 'Bottle Design', 'Luxury'],
    stats: [
      { label: 'Fragrances', value: '500+' },
      { label: 'Min Order', value: '100 units' },
      { label: 'Customization', value: '100%' },
    ],
    featured: true,
    group: 'lifestyle',
  },
  {
    id: '03',
    slug: 'photography',
    name: 'Photography Studio',
    tagline: 'Visual Storytelling',
    description:
      'Full-service commercial photography for brands, events, fashion, and architectural projects. Studio and on-location shoots worldwide.',
    image: '/images/cat_photography.jpg',
    gradient: 'from-amber-600 via-orange-700 to-red-700',
    accent: '#f59e0b',
    icon: '📸',
    tags: ['Commercial', 'Fashion', 'Events', 'Architecture'],
    stats: [
      { label: 'Projects', value: '1200+' },
      { label: 'Experience', value: '12 yrs' },
      { label: 'Clients', value: '300+' },
    ],
    group: 'services',
  },
  {
    id: '04',
    slug: 'it-software',
    name: 'IT & Software',
    tagline: 'Digital Innovation',
    description:
      'End-to-end software development, cloud infrastructure, AI solutions, and digital transformation services for enterprises.',
    image: '/images/cat_it.jpg',
    gradient: 'from-cyan-600 via-teal-700 to-blue-800',
    accent: '#06b6d4',
    icon: '💻',
    tags: ['Software Dev', 'Cloud', 'AI/ML', 'Consulting'],
    stats: [
      { label: 'Solutions', value: '150+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Global', value: '40+ cities' },
    ],
    featured: true,
    group: 'technology',
  },
  {
    id: '05',
    slug: 'textile-fabric',
    name: 'Textile & Fabric',
    tagline: 'Woven Excellence',
    description:
      'Premium fabric manufacturer offering cotton, silk, synthetics and blends. Certified sustainable production, large-scale B2B supply.',
    image: '/images/cat_textile.jpg',
    gradient: 'from-emerald-600 via-green-700 to-teal-800',
    accent: '#10b981',
    icon: '🧵',
    tags: ['Cotton', 'Silk', 'Synthetics', 'Sustainable'],
    stats: [
      { label: 'SKUs', value: '800+' },
      { label: 'Min Order', value: '500 m' },
      { label: 'Certifications', value: 'OEKO-TEX' },
    ],
    group: 'industrial',
  },
  {
    id: '06',
    slug: 'industrial-machinery',
    name: 'Industrial Machinery',
    tagline: 'Precision Engineering',
    description:
      'Heavy machinery, CNC equipment, conveyor systems, and precision-engineered components for manufacturing and processing industries.',
    image: '',
    gradient: 'from-slate-600 via-zinc-700 to-gray-800',
    accent: '#94a3b8',
    icon: '⚙️',
    tags: ['CNC Machines', 'Conveyor', 'Automation', 'Components'],
    stats: [
      { label: 'Machines', value: '400+' },
      { label: 'Countries', value: '35+' },
      { label: 'Support', value: '24/7' },
    ],
    group: 'industrial',
  },
  {
    id: '07',
    slug: 'packaging-printing',
    name: 'Packaging & Printing',
    tagline: 'Unbox the Difference',
    description:
      'Custom corrugated boxes, mono-cartons, flexible packaging, labels, and offset/digital print solutions for FMCG and retail.',
    image: '',
    gradient: 'from-yellow-600 via-amber-600 to-orange-700',
    accent: '#f59e0b',
    icon: '📦',
    tags: ['Cartons', 'Labels', 'Flexible Pack', 'Print'],
    stats: [
      { label: 'SKUs/yr', value: '5M+' },
      { label: 'Lead Time', value: '7 days' },
      { label: 'Clients', value: '500+' },
    ],
    group: 'industrial',
  },
  {
    id: '08',
    slug: 'auto-parts',
    name: 'Auto Parts & Components',
    tagline: 'Precision at Speed',
    description:
      'OEM-grade automotive components, engine parts, suspension, braking systems, and electrical assemblies for global vehicle manufacturers.',
    image: '',
    gradient: 'from-red-700 via-rose-700 to-pink-800',
    accent: '#ef4444',
    icon: '🔧',
    tags: ['Engine Parts', 'Suspension', 'Braking', 'OEM'],
    stats: [
      { label: 'Part Numbers', value: '10,000+' },
      { label: 'OEM Partners', value: '50+' },
      { label: 'ISO', value: 'TS 16949' },
    ],
    group: 'industrial',
  },
  {
    id: '09',
    slug: 'furniture-interior',
    name: 'Furniture & Interior',
    tagline: 'Spaces Redefined',
    description:
      'Bespoke furniture collections, interior design concepts, and material sourcing for residential, commercial, and hospitality projects.',
    image: '',
    gradient: 'from-stone-600 via-brown-700 to-amber-800',
    accent: '#92400e',
    icon: '🪑',
    tags: ['Custom Furniture', 'Interior Design', 'Hospitality', 'Residential'],
    stats: [
      { label: 'Designs', value: '300+' },
      { label: 'Experience', value: '15 yrs' },
      { label: 'Projects Done', value: '800+' },
    ],
    group: 'services',
  },
  {
    id: '10',
    slug: 'electrical-electronics',
    name: 'Electrical & Electronics',
    tagline: 'Powering Industry',
    description:
      'Industrial electrical panels, switchgear, control systems, and electronic assemblies for manufacturing and infrastructure projects.',
    image: '',
    gradient: 'from-yellow-500 via-amber-600 to-yellow-700',
    accent: '#eab308',
    icon: '⚡',
    tags: ['Switchgear', 'Control Panels', 'Wiring', 'Electronics'],
    stats: [
      { label: 'Products', value: '600+' },
      { label: 'IEC Certified', value: '100%' },
      { label: 'Installations', value: '2000+' },
    ],
    group: 'industrial',
  },
  {
    id: '11',
    slug: 'food-processing',
    name: 'Food Processing & FMCG',
    tagline: 'Farm to Shelf',
    description:
      'Food-grade processing equipment, FMCG packaging solutions, and supply chain logistics for food and beverage manufacturers.',
    image: '',
    gradient: 'from-lime-600 via-green-600 to-emerald-700',
    accent: '#84cc16',
    icon: '🌿',
    tags: ['FMCG', 'Food Grade', 'Packaging', 'Supply Chain'],
    stats: [
      { label: 'Brands Served', value: '200+' },
      { label: 'Certifications', value: 'FSSC 22000' },
      { label: 'Daily Output', value: '50T+' },
    ],
    group: 'industrial',
  },
  {
    id: '12',
    slug: 'construction-materials',
    name: 'Construction Materials',
    tagline: 'Building the Future',
    description:
      'Tiles, pipes, fittings, structural steel, insulation, and construction hardware for civil, residential, and commercial projects.',
    image: '',
    gradient: 'from-gray-600 via-slate-700 to-zinc-800',
    accent: '#64748b',
    icon: '🏗️',
    tags: ['Tiles', 'Steel', 'Pipes', 'Fittings'],
    stats: [
      { label: 'SKUs', value: '1500+' },
      { label: 'Projects', value: '3000+' },
      { label: 'In Stock', value: '95%' },
    ],
    group: 'industrial',
  },
];

export const categoryGroups = ['All', 'Lifestyle', 'Industrial', 'Technology', 'Services'] as const;
export type CategoryGroup = typeof categoryGroups[number];
