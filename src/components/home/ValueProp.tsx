// src/components/home/ValueProp.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, ShieldCheck, Layers, Zap, TrendingUp, Users } from 'lucide-react';

const pillars = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Reach',
    description: 'Connect with verified manufacturers and suppliers across 40+ countries, all vetted to our quality standards.',
    color: 'from-indigo-500 to-blue-600',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Verified Quality',
    description: 'Every partner undergoes rigorous certification checks—ISO, OEKO-TEX, CE, and industry-specific standards.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Multi-Vertical',
    description: '12+ industry categories under one platform—from fashion & lifestyle to heavy industrial manufacturing.',
    color: 'from-purple-500 to-fuchsia-600',
    glow: 'rgba(168,85,247,0.3)',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Sourcing',
    description: 'Submit your requirements and receive matched supplier proposals within 24–48 hours. No wasted time.',
    color: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Scale with Ease',
    description: 'Whether you need 50 units or 50,000—our partners accommodate rapid scaling without quality compromise.',
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Dedicated Support',
    description: 'A dedicated account manager guides every order, handles logistics, and ensures on-time delivery.',
    color: 'from-rose-500 to-pink-600',
    glow: 'rgba(244,63,94,0.3)',
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function ValueProp() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Why NexusPro
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Built for{' '}
            <span className="gradient-text">Serious Business</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don't just list suppliers—we orchestrate end-to-end B2B connections with precision, trust, and speed.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group relative p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-500"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 40px ${p.glow}` }}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {p.icon}
              </div>

              <h3 className="font-display font-semibold text-lg text-white mb-2.5 group-hover:gradient-text transition-all duration-300">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {p.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-1 h-8 rounded-full bg-gradient-to-b opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                style={{ background: `linear-gradient(to bottom, ${p.glow.replace('0.3', '1')}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
