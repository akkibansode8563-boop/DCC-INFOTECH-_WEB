'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCountUp } from '@/hooks/use-premium';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

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
  const statsRef = useRef<HTMLDivElement>(null);

  // Stats animate after component mounts (they're visible on load)
  const years = useCountUp(34, 2000, 0, mounted);
  const employees = useCountUp(675, 2000, 0, mounted);
  const brands = useCountUp(210, 2000, 0, mounted);
  const clients = useCountUp(3150, 2000, 0, mounted);
  const partners = useCountUp(10000, 2500, 0, mounted);
  const lives = useCountUp(20000, 2500, 0, mounted);

  const counterValues = [years, employees, brands, clients, partners, lives];

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  useGSAP(() => {
    if (!statsRef.current) return;
    // Optional parallax on background blobs — purely decorative
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xPos = (clientX / width - 0.5) * 35;
      const yPos = (clientY / height - 0.5) * 35;
      gsap.to('.hero-blob-1', { x: xPos, y: yPos, duration: 1.5, ease: 'power2.out' });
      gsap.to('.hero-blob-2', { x: -xPos, y: -yPos, duration: 1.5, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: heroRef });

  const slide = slides[current];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Base background color */}
      <div className="absolute inset-0 bg-background" />

      {/* Background slide images */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-85' : 'opacity-0'
            }`}
          >
            <Image
              src={s.bgImage}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Semi-transparent color mask to ensure readability */}
      <div className="absolute inset-0 bg-background/85 z-0" />

      {/* Mesh gradient (without base background to prevent hiding images) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-dcc-teal/[0.04] via-transparent to-dcc-amber/[0.03] z-0" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60 z-0" />

      {/* Decorative floating orbs — pointer-events-none, purely visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="hero-blob-1 absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-dcc-teal/[0.07] blur-3xl" />
        <div className="hero-blob-2 absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-dcc-amber/[0.06] blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-dcc-teal/[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-dcc-amber/[0.04] blur-2xl" />
      </div>

      {/* Content — always visible, no opacity:0 */}
      <div className="relative z-10 mx-auto w-full max-w-7xl section-x py-24 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, badges, description, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtitle badge */}
            <div className="flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-dcc-teal/15 bg-white/60 backdrop-blur-sm px-4 py-1.5 text-sm text-dcc-teal font-medium mb-8 transition-all duration-500">
                <span className="h-2 w-2 rounded-full bg-dcc-amber animate-pulse" />
                {slide.subtitle}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6 transition-all duration-500">
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
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl transition-all duration-500">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
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
            </div>
          </div>

          {/* Right Column: Company Logo and Company Name Display */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fadeIn duration-1000">
            <div className="relative p-8 sm:p-10 rounded-3xl border border-dcc-teal/10 bg-white/40 backdrop-blur-xl shadow-2xl max-w-[360px] w-full text-center group transition-all duration-500 hover:border-dcc-teal/20 hover:-translate-y-1">
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
                <h2 className="text-xl font-bold tracking-wider text-foreground uppercase">
                  DCC INFOTECH PVT LTD.
                </h2>
                <p className="text-[10px] text-dcc-teal font-semibold mt-1.5 uppercase tracking-widest">
                  Where Service is a Way of Life
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Stats Row — 6 Columns */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 pt-10 border-t border-border/40"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="hero-stat-item flex flex-col justify-start">
              <div className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
                {`${counterValues[i].toLocaleString()}${stat.suffix}`}
              </div>
              {/* Yellow Accent Underline */}
              <div className="mt-2 h-1 w-10 rounded-full bg-dcc-amber" />
              <div className="text-xs font-semibold text-muted-foreground mt-3 uppercase tracking-wider leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
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
