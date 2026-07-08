'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    title: 'Your Trusted IT Partner Since 1992',
    subtitle: 'Comprehensive IT Solutions for Modern Businesses',
    description:
      'From IT infrastructure and network solutions to server management and AMC services — we deliver reliable technology solutions that empower businesses across Pune and India.',
    cta: 'Explore Services',
    ctaLink: '#services',
    gradient: 'from-dcc-slate via-dcc-slate-light to-dcc-teal-dark',
  },
  {
    title: 'IT Infrastructure That Powers Growth',
    subtitle: 'Enterprise-Grade Hardware & Software Solutions',
    description:
      'Get the best competitive prices on assembled desktops, laptops, servers, and networking equipment. We supply, install, and maintain your entire IT ecosystem.',
    cta: 'Shop Now',
    ctaLink: '#contact',
    gradient: 'from-dcc-teal-dark via-dcc-teal to-dcc-teal-light',
  },
  {
    title: '24/7 Support & Maintenance',
    subtitle: 'AMC & Facility Management Services',
    description:
      'Our dedicated support team ensures your IT systems run smoothly around the clock. Minimize downtime and maximize productivity with DCC Infotech.',
    cta: 'Get a Quote',
    ctaLink: '#contact',
    gradient: 'from-dcc-slate via-dcc-teal-dark to-dcc-slate',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
        />
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dcc-teal/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-dcc-amber/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-sm mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-dcc-amber animate-pulse" />
                {slide.subtitle}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const el = document.querySelector(slide.ctaLink);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-dcc-amber hover:bg-dcc-amber-dark text-dcc-slate rounded-full px-8 h-13 text-base font-semibold shadow-lg shadow-dcc-amber/25 hover:shadow-dcc-amber/40 transition-all"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const el = document.querySelector('#about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-13 text-base backdrop-blur-sm"
                >
                  <Play className="mr-2 h-4 w-4 fill-white" />
                  Watch Video
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
          >
            {[
              { value: '30+', label: 'Years Experience' },
              { value: '500+', label: 'Happy Clients' },
              { value: '10K+', label: 'Projects Delivered' },
              { value: '50+', label: 'Team Members' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-bold text-dcc-amber">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-3">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/15 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-dcc-amber' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/15 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}