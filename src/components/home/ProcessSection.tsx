// src/components/home/ProcessSection.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, MessageSquare, FileCheck, Package, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    step: '01',
    title: 'Browse & Discover',
    description: 'Explore 12+ industry verticals and 500+ verified manufacturers on our curated platform.',
    color: '#6366f1',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    step: '02',
    title: 'Connect & Consult',
    description: 'Reach out via WhatsApp or our contact form. Our experts match you with ideal partners in 24 hours.',
    color: '#a855f7',
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    step: '03',
    title: 'Get Custom Quote',
    description: 'Receive tailored proposals with transparent pricing, MOQ, lead times, and certification details.',
    color: '#06b6d4',
  },
  {
    icon: <Package className="w-6 h-6" />,
    step: '04',
    title: 'Order & Track',
    description: 'Confirm your order with full visibility into production status, QC reports, and logistics.',
    color: '#10b981',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    step: '05',
    title: 'Receive & Scale',
    description: 'Accept delivery with quality assurance guarantees. Then scale with our long-term partnership model.',
    color: '#f59e0b',
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-dark-900">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Our Process
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            From Discovery to{' '}
            <span className="gradient-text">Delivery</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Five streamlined steps designed for B2B buyers who value efficiency and reliability.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(168,85,247,0.3), rgba(6,182,212,0.3), transparent)', top: '52px' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Icon bubble */}
                <div
                  className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center mb-5 z-10 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}33, ${s.color}15)`,
                    border: `2px solid ${s.color}60`,
                    boxShadow: `0 0 20px ${s.color}40`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                  {/* Step number */}
                  <span
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center"
                    style={{ background: s.color, color: '#fff' }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 marquee-container"
        >
          <div className="marquee-content">
            {[
              'Sports Garments', '·', 'Perfume', '·', 'Photography', '·', 'IT Software', '·',
              'Textile', '·', 'Machinery', '·', 'Packaging', '·', 'Auto Parts', '·',
              'Furniture', '·', 'Electrical', '·', 'Food Processing', '·', 'Construction', '·',
              'Sports Garments', '·', 'Perfume', '·', 'Photography', '·', 'IT Software', '·',
              'Textile', '·', 'Machinery', '·', 'Packaging', '·', 'Auto Parts', '·',
              'Furniture', '·', 'Electrical', '·', 'Food Processing', '·', 'Construction', '·',
            ].map((item, i) => (
              <span
                key={i}
                className={`mx-4 text-sm font-medium ${
                  item === '·' ? 'text-indigo-500' : 'text-slate-600'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
