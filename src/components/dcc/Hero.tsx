'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCountUp } from '@/hooks/use-premium';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useMagnetic } from '@/hooks/use-magnetic';
import MorphBlob from '@/components/motion/MorphBlob';

const slides = [
  {
    title: 'Your Trusted IT Partner Since 1992',
    subtitle: 'Where Service is a Way of Life',
    description:
      'From IT infrastructure and enterprise security to unified communications and equipment rentals — we deliver reliable technology solutions that empower businesses across 12+ states in India.',
    cta: 'Explore Services',
    ctaLink: '#services',
    bgImage: '/hero-hardware.png',
  },
  {
    title: 'Enterprise IT Infrastructure & Maintenance',
    subtitle: 'End-to-End Solutions for Modern Businesses',
    description:
      'AMC & FMS contracts, chip-level repairing, networking, server infrastructure, and more — transforming unpredictable capital repair costs into fixed, manageable operational expenses.',
    cta: 'Get a Quote',
    ctaLink: '#contact',
    bgImage: '/hero-repair.png',
  },
  {
    title: 'Easy Rentals — You Name IT, We Rent IT',
    subtitle: 'Laptops, Desktops, Printers, Servers & More',
    description:
      'High-performance IT equipment on rent with zero maintenance burden and instant scalability. Ideal for project deployments, corporate events, and government tenders.',
    cta: 'Explore Rentals',
    ctaLink: '#services',
    bgImage: '/hero-rentals.png',
  },
];

const stats = [
  { value: 34, suffix: '', label: 'Years of Excellence' },
  { value: 675, suffix: '+', label: 'Employee strength' },
  { value: 210, suffix: '+', label: 'Renowned Brands' },
  { value: 3150, suffix: '+', label: 'Institutional Clients' },
  { value: 10000, suffix: '+', label: 'Channel Partners' },
  { value: 20000, suffix: '+', label: 'Lives Impacted' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const magneticCta = useMagnetic(50, 0.4);

  const years = useCountUp(34, 2000, 0, mounted);
  const employees = useCountUp(675, 2000, 0, mounted);
  const brands = useCountUp(210, 2000, 0, mounted);
  const clients = useCountUp(3150, 2000, 0, mounted);
  const partners = useCountUp(10000, 2500, 0, mounted);
  const lives = useCountUp(20000, 2500, 0, mounted);
  const counterValues = [years, employees, brands, clients, partners, lives];

  // Pointer-driven parallax for the ambient orbs — Framer Motion springs, no GSAP
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20 });
  const blob1X = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const blob1Y = useTransform(springY, [-0.5, 0.5], [-30, 30]);
  const blob2X = useTransform(springX, [-0.5, 0.5], [30, -30]);
  const blob2Y = useTransform(springY, [-0.5, 0.5], [30, -30]);

  // rAF-throttled pointer parallax — only one Framer update per animation frame
  const rafId = useRef<number | null>(null);
  const pendingPointer = useRef<{ px: number; py: number } | null>(null);

  useEffect(() => {
    const flush = () => {
      rafId.current = null;
      if (!pendingPointer.current) return;
      const { px, py } = pendingPointer.current;
      pointerX.set(px);
      pointerY.set(py);
      pendingPointer.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      pendingPointer.current = {
        px: e.clientX / window.innerWidth - 0.5,
        py: e.clientY / window.innerHeight - 0.5,
      };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(flush);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [pointerX, pointerY]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-80' : 'opacity-0'
            }`}
          >
            {/* Only first slide is priority (LCP). Others lazy-load */}
            <Image src={s.bgImage} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-background/88 z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-dcc-teal/[0.05] via-transparent to-dcc-brass/[0.04] z-0" />
      <div className="absolute inset-0 grid-pattern opacity-70 z-0" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          style={{ x: blob1X, y: blob1Y, willChange: 'transform' }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-dcc-teal/[0.08] blur-3xl"
        />
        <motion.div
          style={{ x: blob2X, y: blob2Y, willChange: 'transform' }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-dcc-brass/[0.07] blur-3xl"
        />
        <MorphBlob
          className="absolute top-1/2 right-[-8%] w-[560px] h-[540px] -translate-y-1/2 hidden lg:block"
          opacity={0.07}
          duration={13}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl section-x py-24 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="ledger-mark">
              <span className="ledger-index">01</span>
              <span className="ledger-rule" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  {slide.subtitle}
                </motion.span>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-6 font-heading"
              >
                {slide.title.split(' ').map((word, i) => {
                  const accentWords = ['IT', 'Infrastructure', 'Rentals'];
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
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                ref={magneticCta.ref as React.RefObject<HTMLDivElement>}
                style={magneticCta.style}
                data-cursor="hover"
                className="inline-block"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const el = document.querySelector(slide.ctaLink);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-dcc-brass hover:bg-dcc-brass-dark text-white rounded-full px-8 h-13 text-base font-semibold shadow-lg shadow-dcc-brass/25 hover:shadow-xl hover:shadow-dcc-brass/30 transition-all duration-300"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <a href="tel:+918598090100">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="relative p-8 sm:p-10 rounded-3xl border border-dcc-teal/12 bg-white/45 backdrop-blur-xl shadow-2xl max-w-[360px] w-full text-center group"
            >
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-dcc-teal/5 pointer-events-none" />
              <Image
                src="/dcc-logo.png"
                alt="DCC Logo"
                width={192}
                height={192}
                priority
                className="w-48 h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="mt-8 border-t border-border/40 pt-5">
                <h2 className="text-xl font-bold tracking-wider text-foreground uppercase font-heading">
                  DCC INFOTECH PVT LTD.
                </h2>
                <p className="text-[10px] text-dcc-teal font-semibold mt-1.5 uppercase tracking-widest">
                  Where Service is a Way of Life
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } } }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 pt-10 border-t border-border/40"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-col justify-start"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight font-stat">
                {`${counterValues[i].toLocaleString()}${stat.suffix}`}
              </div>
              <div className="mt-2 h-1 w-10 rounded-full bg-dcc-brass" />
              <div className="text-xs font-semibold text-muted-foreground mt-3 uppercase tracking-wider leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? 'w-8 bg-dcc-teal' : 'w-2 bg-dcc-teal/20 hover:bg-dcc-teal/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
