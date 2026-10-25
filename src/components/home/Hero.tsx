// src/components/home/Hero.tsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const HeroScene = lazy(() => import("../3d/HeroScene"));

function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* CSS-only animated fallback */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse" />
        <div className="absolute inset-8 rounded-full border border-indigo-500/40 animate-spin-slow" />
        <div
          className="absolute inset-16 rounded-full border border-purple-500/40 animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        />
        <div className="absolute inset-[60px] bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-xl" />
      </div>
    </div>
  );
}

const STATS = [
  { value: "12+", label: "Industries" },
  { value: "500+", label: "Brands" },
  { value: "40+", label: "Countries" },
  { value: "98%", label: "Satisfaction" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e1b4b 100%)",
      }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={<SceneFallback />}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6"
          >
            Where Industries{" "}
            <span className="block gradient-text text-glow">
              Connect & Grow
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-8"
          >
            Discover premium manufacturing, sourcing, and business solutions
            across 12+ verticals. From sports garments to industrial
            machinery—curated for global B2B buyers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link
              to="/categories"
              className="btn-primary"
              id="hero-explore-cta"
            >
              Explore Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              id="hero-whatsapp-cta"
            >
              Talk to an Expert
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <p className="font-display font-bold text-2xl md:text-3xl gradient-text mb-1">
                  {value}
                </p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        ref={scrollRef as any}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
