'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView, useCountUp } from '@/hooks/use-premium';

const slides = [
  {
    title: 'Your Trusted IT Partner Since 1992',
    subtitle: 'Comprehensive IT Solutions for Modern Businesses',
    description:
      'From IT infrastructure and network solutions to server management and AMC services — we deliver reliable technology solutions that empower businesses across Pune and India.',
    cta: 'Explore Services',
    ctaLink: '#services',
  },
  {
    title: 'IT Infrastructure That Powers Growth',
    subtitle: 'Enterprise-Grade Hardware & Software Solutions',
    description:
      'Get the best competitive prices on assembled desktops, laptops, servers, and networking equipment. We supply, install, and maintain your entire IT ecosystem.',
    cta: 'Shop Now',
    ctaLink: '#contact',
  },
  {
    title: '24/7 Support & Maintenance',
    subtitle: 'AMC & Facility Management Services',
    description:
      'Our dedicated support team ensures your IT systems run smoothly around the clock. Minimize downtime and maximize productivity with DCC Infotech.',
    cta: 'Get a Quote',
    ctaLink: '#contact',
  },
];

const stats = [
  { value: 30, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 10000, suffix: '+', label: 'Projects Delivered', display: '10K+' },
  { value: 99, suffix: '%', label: 'Client Retention' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, isInView } = useInView({ once: true });

  const years = useCountUp(30, 2000, 0, isInView);
  const clients = useCountUp(500, 2000, 0, isInView);
  const projects = useCountUp(10000, 2500, 0, isInView);
  const retention = useCountUp(99, 2000, 0, isInView);

  const counterValues = [years, clients, projects, retention];

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-dcc-teal/[0.07] blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-dcc-amber/[0.06] blur-3xl"
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-dcc-teal/[0.04] blur-3xl"
          animate={{
            y: [0, 40, -20, 0],
            x: [0, -20, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-dcc-amber/[0.04] blur-2xl"
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -15, 25, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl section-x py-32" ref={inViewRef}>
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Subtitle badge */}
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-dcc-teal/15 bg-white/60 backdrop-blur-sm px-4 py-1.5 text-sm text-dcc-teal font-medium mb-8"
              >
                <span className="h-2 w-2 rounded-full bg-dcc-amber animate-pulse" />
                {slide.subtitle}
              </motion.span>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
              >
                {slide.title.split(' ').map((word, i) => {
                  const accentWords = ['IT', 'Growth', 'Support'];
                  if (accentWords.includes(word)) {
                    return (
                      <span key={i} className="text-gradient">
                        {word}{' '}
                      </span>
                    );
                  }
                  return <span key={i}>{word} </span>;
                })}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
              >
                {slide.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const el = document.querySelector(slide.ctaLink);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-dcc-amber hover:bg-dcc-amber-dark text-dcc-slate rounded-full px-8 h-13 text-base font-semibold shadow-lg shadow-dcc-amber/25 hover:shadow-xl hover:shadow-dcc-amber/30 transition-all duration-300"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a href="tel:+917507800800">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-muted rounded-full px-8 h-13 text-base backdrop-blur-sm transition-all duration-300"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* KPI Stats Row */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-10 border-t border-border/40"
          >
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">
                  {stat.display
                    ? stat.display
                    : `${counterValues[i].toLocaleString()}${stat.suffix}`}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide indicators - minimal dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 bg-dcc-teal'
                : 'w-2 bg-dcc-teal/20 hover:bg-dcc-teal/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}