// src/components/home/FeaturedCategories.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import CategoryCard from '../products/CategoryCard';

export default function FeaturedCategories() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featured = categories.filter((c) => c.featured);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-dark-950">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Featured Industries
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Explore Top{' '}
              <span className="gradient-text">Categories</span>
            </h2>
          </div>
          <Link
            to="/categories"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm group transition-colors shrink-0"
            id="view-all-categories-link"
          >
            View all 12 categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 relative p-8 rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 100%)',
            border: '1px solid rgba(99,102,241,0.25)',
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Can't find what you need?
              </h3>
              <p className="text-slate-400 text-sm">
                We source custom solutions across 50+ niche industries. Just ask.
              </p>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0"
              id="custom-solution-cta"
            >
              Request Custom Solution
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
