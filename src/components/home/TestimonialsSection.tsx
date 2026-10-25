// src/components/home/TestimonialsSection.tsx
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Mehta',
    role: 'Procurement Head, SportMax India',
    avatar: 'RM',
    color: '#6366f1',
    rating: 5,
    text: 'NexusPro connected us with our sports garment supplier within 48 hours. The quality check process gave us full confidence before placing a 10,000-unit order. Exceptional service.',
  },
  {
    id: 2,
    name: 'Sofia Al-Rashid',
    role: 'CEO, Elysian Fragrances',
    avatar: 'SA',
    color: '#a855f7',
    rating: 5,
    text: 'Finding a reliable perfume manufacturer for our private label was a nightmare—until NexusPro. Three matched suppliers, two samples, and we launched within 6 weeks. Incredible.',
  },
  {
    id: 3,
    name: 'James O\'Brien',
    role: 'Director, AgileBuild UK',
    avatar: 'JO',
    color: '#06b6d4',
    rating: 5,
    text: 'We source construction materials through NexusPro quarterly. The consistency, documentation support, and logistics coordination are unmatched for the price point.',
  },
  {
    id: 4,
    name: 'Priya Nair',
    role: 'Operations VP, TechStack Global',
    avatar: 'PN',
    color: '#10b981',
    rating: 5,
    text: 'Our IT hardware sourcing through NexusPro saved us 23% on last quarter\'s procurement. Their vendor verification process is thorough and their support team is always responsive.',
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-950/40 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Client Stories
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Trusted by{' '}
            <span className="gradient-text-gold">500+ Brands</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Card */}
          <div className="relative min-h-[280px] glass-strong rounded-3xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array(testimonials[active].rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
                  "{testimonials[active].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm"
                    style={{ background: `linear-gradient(135deg, ${testimonials[active].color}, ${testimonials[active].color}88)` }}
                  >
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonials[active].name}</p>
                    <p className="text-slate-500 text-sm">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-8xl font-serif text-indigo-500/10 leading-none pointer-events-none select-none">
              "
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-indigo-500/40 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-slate-400" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 h-2 bg-indigo-500' : 'w-2 h-2 bg-slate-700'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-indigo-500/40 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
