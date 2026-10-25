// src/components/products/CategoryCard.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Tag } from 'lucide-react';
import type { Category } from '../../data/categories';

interface Props {
  category: Category;
  index: number;
  inView: boolean;
}

// Gradient-based visual for categories without images
function GradientVisual({ gradient, icon, accent }: { gradient: string; icon: string; accent: string }) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}
    >
      {/* Abstract shapes */}
      <div
        className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20"
        style={{ background: accent, filter: 'blur(20px)' }}
      />
      <div
        className="absolute bottom-6 left-6 w-16 h-16 rotate-45 opacity-10 border-2"
        style={{ borderColor: accent }}
      />
      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl opacity-30">{icon}</span>
      </div>
    </div>
  );
}

export default function CategoryCard({ category, index, inView }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="category-card h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / Visual */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-dark-800">
        {category.image ? (
          <>
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.7s ease' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
          </>
        ) : (
          <GradientVisual gradient={category.gradient} icon={category.icon} accent={category.accent} />
        )}

        {/* Category ID badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-mono font-bold"
            style={{
              background: `${category.accent}25`,
              border: `1px solid ${category.accent}50`,
              color: category.accent,
            }}
          >
            {category.id}
          </span>
        </div>

        {/* Group badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium glass border-0 text-slate-300 capitalize">
            {category.group}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col gap-3 flex-1">
        {/* Header */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest mb-1"
            style={{ color: category.accent }}>
            {category.tagline}
          </p>
          <h3 className="font-display font-bold text-lg text-white leading-tight">
            {category.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {category.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {category.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs"
              style={{
                background: `${category.accent}12`,
                color: `${category.accent}cc`,
                border: `1px solid ${category.accent}25`,
              }}
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-white/5">
          {category.stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="font-bold text-sm text-white">{value}</p>
              <p className="text-slate-600 text-[10px] uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
          style={{
            background: hovered ? `${category.accent}20` : 'rgba(255,255,255,0.04)',
            border: `1px solid ${hovered ? category.accent + '50' : 'rgba(255,255,255,0.08)'}`,
            color: hovered ? category.accent : '#94a3b8',
          }}
          id={`explore-${category.slug}`}
        >
          Explore Concept
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}
