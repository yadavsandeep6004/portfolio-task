// src/pages/Home.tsx
import Hero from '../components/home/Hero';
import ValueProp from '../components/home/ValueProp';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProp />
      <FeaturedCategories />
      <ProcessSection />
      <TestimonialsSection />
    </main>
  );
}
