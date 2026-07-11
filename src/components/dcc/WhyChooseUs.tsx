'use client';

import { useRef } from 'react';
import { Shield, Clock, BadgeDollarSign, Headphones, ThumbsUp, Zap, Globe, Award } from 'lucide-react';
import { useInView, useCountUp } from '@/hooks/use-premium';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description:
      '34 years of proven track record serving India\'s biggest banks, government bodies, and enterprises. Our clients trust us because we deliver on every promise — service is our way of life.',
  },
  {
    icon: Clock,
    title: 'Rapid Response Time',
    description:
      'Our AMC and FMS teams with 400+ engineers guarantee rapid-response SLAs that eliminate unplanned downtime. We understand IT downtime costs money, so we prioritize speed without compromising quality.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Best Competitive Prices',
    description:
      'As an authorized distributor of 210+ renowned brands, we offer the most competitive wholesale pricing on IT equipment, software licenses, and peripherals — guaranteed value for your investment.',
  },
  {
    icon: Headphones,
    title: 'Pan India Support Network',
    description:
      '400+ specialized engineers and 150+ sales professionals across 12+ states. From Maharashtra to Delhi, from Karnataka to Rajasthan — our support network is always within reach.',
  },
  {
    icon: ThumbsUp,
    title: 'ISO Certified Quality',
    description:
      'ISO 9001:2015, ISO 14001:2015, ISO 27001:2013, and ISO 20000-1:2018 certified. Every product and service undergoes rigorous quality checks with genuine parts from leading brands.',
  },
  {
    icon: Zap,
    title: 'End-to-End Solutions',
    description:
      'From IT infrastructure and enterprise security to unified communications and equipment rentals — we handle everything under one roof. No need to juggle multiple vendors when DCC covers it all.',
  },
];

const isoCerts = [
  { code: 'ISO 9001:2015', label: 'Quality Management' },
  { code: 'ISO 14001:2015', label: 'Environmental Management' },
  { code: 'ISO 27001:2013', label: 'Information Security' },
  { code: 'ISO 20000-1:2018', label: 'IT Service Management' },
];

const panIndiaStates = [
  'Maharashtra', 'Goa', 'Gujarat', 'Madhya Pradesh', 'Uttar Pradesh', 'Karnataka',
  'Haryana', 'Delhi', 'Telangana', 'Punjab', 'Chhattisgarh', 'Rajasthan',
];

interface StatItem {
  end: number;
  suffix: string;
  label: string;
  display?: string;
}

const statsConfig: StatItem[] = [
  { end: 34, suffix: '+', label: 'Years of Excellence' },
  { end: 3150, suffix: '+', label: 'Institutional Clients' },
  { end: 10000, suffix: '+', label: 'Channel Partners' },
  { end: 20000, suffix: '+', label: 'Lives Impacted' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, isInView } = useInView<HTMLDivElement>({ once: true, margin: '-80px' });

  const years = useCountUp(34, 2000, 0, isInView);
  const clients = useCountUp(3150, 2000, 0, isInView);
  const partners = useCountUp(10000, 2500, 0, isInView);
  const lives = useCountUp(20000, 2500, 0, isInView);

  const counterValues = [years, clients, partners, lives];

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(
      '.wcu-header',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.wcu-header',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // KPI cards reveal
    gsap.fromTo(
      '.wcu-kpi-card',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'back.out(1.5)',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.wcu-kpi-card',
          start: 'top 90%',
          once: true,
        },
      }
    );

    // ISO certifications reveal
    gsap.fromTo(
      '.wcu-iso-card',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.wcu-iso-card',
          start: 'top 90%',
          once: true,
        },
      }
    );

    // States reveal
    // States reveal
    gsap.fromTo(
      '.wcu-state-pill',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.wcu-state-pill-container',
          start: 'top 92%',
          once: true,
        },
      }
    );

    // Reasons cards reveal
    gsap.fromTo(
      '.wcu-reason-card',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.wcu-reason-card',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-hidden bg-dcc-slate"
      aria-label="Why choose DCC Infotech"
    >
      {/* Mesh gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-dcc-teal/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-dcc-teal/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl" ref={inViewRef}>
        {/* Header */}
        <div className="wcu-header mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-amber">
            Why Choose Us
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why Businesses{' '}
            <span className="text-dcc-teal-light">Trust DCC</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            34 years of expertise, 675+ employees, and a commitment to excellence — making DCC the
            preferred IT partner for India&apos;s leading enterprises across 12+ states.
          </p>
        </div>

        {/* KPI Counters Row */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {statsConfig.map((stat, i) => (
            <div
              key={stat.label}
              className="wcu-kpi-card glass rounded-2xl p-6 text-center select-none"
            >
              <div className="text-3xl font-bold text-dcc-amber lg:text-4xl">
                {stat.display
                  ? stat.display
                  : `${counterValues[i].toLocaleString()}${stat.suffix}`}
              </div>
              <div className="mt-2 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ISO Certifications Row */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="h-5 w-5 text-dcc-teal-light" />
            <span className="text-sm font-semibold uppercase tracking-wider text-dcc-teal-light">
              ISO Certifications
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {isoCerts.map((cert) => (
              <div
                key={cert.code}
                className="wcu-iso-card glass rounded-xl p-4 text-center select-none"
              >
                <div className="text-lg font-bold text-dcc-amber">{cert.code}</div>
                <div className="mt-1 text-xs text-white/50">{cert.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PAN India Presence */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe className="h-5 w-5 text-dcc-teal-light" />
            <span className="text-sm font-semibold uppercase tracking-wider text-dcc-teal-light">
              Pan India Presence — 12+ States
            </span>
          </div>
          <div className="wcu-state-pill-container flex flex-wrap justify-center gap-2">
            {panIndiaStates.map((state) => (
              <span
                key={state}
                className="wcu-state-pill rounded-full border border-dcc-teal/20 bg-dcc-teal/5 px-4 py-1.5 text-sm font-medium text-dcc-teal-light select-none"
              >
                {state}
              </span>
            ))}
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="wcu-reason-card group glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-dcc-teal/30 select-none cursor-pointer"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dcc-teal/20 transition-all duration-300 group-hover:bg-dcc-teal group-hover:shadow-lg group-hover:shadow-dcc-teal/20">
                <reason.icon className="h-6 w-6 text-dcc-teal-light transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}