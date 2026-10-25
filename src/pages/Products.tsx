// src/pages/Products.tsx
import { useState, useMemo, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, X, Layers } from 'lucide-react';
import { categories, categoryGroups, type CategoryGroup } from '../data/categories';
import CategoryCard from '../components/products/CategoryCard';

export default function Products() {
  const [activeGroup, setActiveGroup] = useState<CategoryGroup>('All');
  const [search, setSearch] = useState('');

  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: '-50px' });

  const filtered = useMemo(() => {
    let list = categories;
    if (activeGroup !== 'All') {
      list = list.filter(
        (c) => c.group.toLowerCase() === activeGroup.toLowerCase()
      );
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeGroup, search]);

  return (
    <main className="min-h-screen bg-dark-950">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e1b4b 100%)' }}
        />
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div ref={headerRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-5">
                <Layers className="w-3.5 h-3.5" />
                All Categories
              </span>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
                Business{' '}
                <span className="gradient-text">Categories</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                Explore our curated portfolio of 12 premium industry verticals.
                Each category represents a full ecosystem of verified B2B partners.
              </p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative max-w-xl mx-auto"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search categories, products, or services..."
                  className="w-full pl-12 pr-12 py-4 rounded-2xl glass border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:shadow-glow-sm transition-all duration-300"
                  id="category-search-input"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 bg-dark-950/90 backdrop-blur-lg border-b border-white/5">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categoryGroups.map((group) => (
                <button
                  key={group}
                  onClick={() => setActiveGroup(group)}
                  className={`filter-tab whitespace-nowrap ${activeGroup === group ? 'active' : ''}`}
                  id={`filter-${group.toLowerCase()}`}
                >
                  {group}
                  {group !== 'All' && (
                    <span className="ml-1.5 text-xs opacity-60">
                      ({categories.filter(c => c.group.toLowerCase() === group.toLowerCase()).length})
                    </span>
                  )}
                  {group === 'All' && (
                    <span className="ml-1.5 text-xs opacity-60">({categories.length})</span>
                  )}
                </button>
              ))}
            </div>
            <div className="text-xs text-slate-600 font-medium shrink-0">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container-custom" ref={gridRef}>
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeGroup}-${search}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((cat, i) => (
                  <CategoryCard
                    key={cat.id}
                    category={cat}
                    index={i}
                    inView={gridInView}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-display font-semibold text-xl text-white mb-2">
                  No categories found
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => { setSearch(''); setActiveGroup('All'); }}
                  className="btn-outline text-sm"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative p-10 rounded-3xl overflow-hidden text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 50%, rgba(6,182,212,0.1) 100%)',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            {/* Glowing orbs */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <span className="inline-block text-4xl mb-4">🚀</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Ready to Source at Scale?
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
                Connect with our team via WhatsApp for a personalized sourcing consultation—free, fast, and no commitment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20discuss%20sourcing%20requirements"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  id="products-whatsapp-cta"
                >
                  Start on WhatsApp
                </a>
                <a
                  href="mailto:hello@nexuspro.com"
                  className="btn-outline"
                  id="products-email-cta"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
