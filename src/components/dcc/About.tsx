'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Quote, Award, Users, Target, CheckCircle2, Calendar } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import {
  motion,
  useScroll,
  useSpring,
  useInView,
} from 'framer-motion';

const featurePills = [
  { icon: Target, text: 'Client-first approach' },
  { icon: Users, text: '400+ specialized engineers' },
  { icon: Award, text: 'Authorized distributor of 210+ brands' },
  { icon: CheckCircle2, text: 'ISO 9001, 14001, 27001, 20000-1 certified' },
];

const timeline = [
  {
    year: '1992',
    event: 'Founded in Pune by Mr. Anil Mhaske in a humble 10×10 sq. ft. room.',
    color: '#0d9488',
    icon: '🏢',
  },
  {
    year: '1997',
    event: 'Secured a Samsung distribution partnership — the first major brand alliance.',
    color: '#f59e0b',
    icon: '🤝',
  },
  {
    year: '2000',
    event: 'Grew channel distribution network across Maharashtra, reaching every district.',
    color: '#0d9488',
    icon: '🌐',
  },
  {
    year: '2005',
    event: "Deepened IT peripheral repairs. Opened Pune's biggest laptop showroom.",
    color: '#f59e0b',
    icon: '💻',
  },
  {
    year: '2010',
    event: "Launched Corporate Division & secured Dell's National Distributorship.",
    color: '#0d9488',
    icon: '🚀',
  },
  {
    year: '2013',
    event: "Became No.1 Regional Distributor of Dell. Opened India's first Dell Authorised Store.",
    color: '#f59e0b',
    icon: '🏆',
  },
  {
    year: '2017',
    event: 'Started GEM business. Grew channel network to 6,500+ partners.',
    color: '#0d9488',
    icon: '📈',
  },
  {
    year: '2020',
    event: 'Expanded retail to 25+ stores across Maharashtra.',
    color: '#f59e0b',
    icon: '🏪',
  },
  {
    year: 'Today',
    event: '3,150+ institutional clients. 20,000+ lives impacted. 12+ states served.',
    color: '#0d9488',
    icon: '⭐',
  },
];

const points = [
  { x: 120, y: 350 },  // 1992
  { x: 320, y: 310 },  // 1997
  { x: 520, y: 270 },  // 2000
  { x: 720, y: 235 },  // 2005
  { x: 920, y: 200 },  // 2010
  { x: 1120, y: 165 }, // 2013
  { x: 1320, y: 130 }, // 2017
  { x: 1520, y: 95 },  // 2020
  { x: 1720, y: 60 },  // Today
];

/** Individual animated timeline node on a growth graph path */
function TimelineNode({
  item,
  index,
  point,
}: {
  item: (typeof timeline)[0];
  index: number;
  point: { x: number; y: number };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });
  const isAbove = index % 2 !== 0; // Odd indices are above the line

  return (
    <div ref={ref}>
      {/* Glow highlight under active circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="absolute rounded-full pointer-events-none blur-md"
        style={{
          left: point.x - 24,
          top: point.y - 24,
          width: 48,
          height: 48,
          background: item.color,
        }}
      />

      {/* Year Circle Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: index * 0.05 }}
        whileHover={{ scale: 1.15 }}
        className="absolute z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-background font-bold text-xs text-white shadow-md transition-colors duration-300 select-none"
        style={{
          left: point.x - 24,
          top: point.y - 24,
          background: `linear-gradient(135deg, ${item.color} 0%, #0d7377 100%)`,
          boxShadow: '0 4px 12px rgba(13, 115, 119, 0.25)',
        }}
      >
        {item.year}
      </motion.div>

      {/* Clean Description Text */}
      <motion.div
        initial={{ opacity: 0, y: isAbove ? -12 : 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: index * 0.05 + 0.1 }}
        className="absolute z-10 w-[170px]"
        style={{
          left: point.x - 85,
          top: isAbove ? point.y - 120 : point.y + 40,
        }}
      >
        <p className="text-xs font-semibold leading-relaxed text-foreground select-none">
          {item.event}
        </p>
      </motion.div>
    </div>
  );
}

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineContainerRef, { once: true, margin: '-80px 0px' });

  // Scroll-driven line progress
  const { scrollXProgress } = useScroll({ container: trackRef });
  const lineScaleX = useSpring(scrollXProgress, { stiffness: 70, damping: 22 });

  useGSAP(() => {
    gsap.fromTo(
      '.about-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all',
        scrollTrigger: { trigger: '.about-header-reveal', start: 'top 85%', once: true },
      }
    );
    gsap.fromTo(
      '.about-left-reveal',
      { x: -40, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all',
        scrollTrigger: { trigger: '.about-left-reveal', start: 'top 80%', once: true },
      }
    );
    gsap.fromTo(
      '.about-badge',
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', clearProps: 'all',
        scrollTrigger: { trigger: '.about-badge', start: 'top 90%', once: true },
      }
    );
    gsap.fromTo(
      '.about-story-reveal',
      { y: 25, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out', clearProps: 'all',
        scrollTrigger: { trigger: '.about-story-reveal', start: 'top 85%', once: true },
      }
    );
    gsap.fromTo(
      '.about-pill',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out', clearProps: 'all',
        scrollTrigger: { trigger: '.about-pill-container', start: 'top 85%', once: true },
      }
    );
    gsap.fromTo(
      '.about-quote-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all',
        scrollTrigger: { trigger: '.about-quote-reveal', start: 'top 85%', once: true },
      }
    );
  }, { scope: aboutRef });

  return (
    <section id="about" className="section bg-background" ref={aboutRef} aria-label="About DCC Infotech">
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <div className="about-header-reveal mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            About Us
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Building IT Excellence{' '}
            <span className="text-gradient">Since 1992</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            34 years of unwavering commitment to delivering world-class IT solutions that
            transform businesses and drive innovation across India.
          </p>
        </div>

        {/* ── Two-column: photo + story ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Visual card */}
          <div className="about-left-reveal relative max-w-[480px] mx-auto w-full">
            <div className="relative overflow-hidden rounded-2xl border border-dcc-teal/10 aspect-[4/5] w-full group shadow-2xl z-10">
              <div className="absolute inset-0 mesh-gradient opacity-40 z-0" />
              <Image
                src="/md-sir.jpeg"
                alt="Mr. Anil Mhaske - Managing Director, DCC Infotech"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-dcc-teal/10 z-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-85 z-10" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-white/10 z-20 shadow-lg">
                <p className="text-base font-bold text-foreground">Mr. Anil Mhaske</p>
                <p className="text-xs text-dcc-teal font-medium">Founder & Managing Director</p>
              </div>
            </div>
            <div className="about-badge absolute -bottom-8 -right-2 sm:-right-6 z-20">
              <div className="glass flex items-center gap-3 rounded-2xl p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dcc-amber/10">
                  <Award className="h-6 w-6 text-dcc-amber" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">34+</div>
                  <div className="text-xs text-muted-foreground">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="about-story-reveal mb-8">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Our Story</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                In 1992, a young boy from a humble background named Shri. Anil Mhaske started a
                business in a 10x10 sq. ft. room with a staff of 1-2 people to provide the best
                prices and after-sales service to his clients. Today, DCC operates with over 45,000+
                sq. ft. of office space, impacting 20,000+ lives. Where the market was looking at
                every order as a deal, we chased a singular conviction: service is not an
                afterthought; it is the foundation of a long-term relation.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                That belief, &ldquo;Where Service is a Way of Life,&rdquo; shaped everything that
                came after. We recruited and trained specialized engineers, established R&amp;D labs,
                and built a distribution network that reached into Maharashtra&apos;s smallest
                districts. Today, the growth speaks for itself: 400+ engineers keeping client
                systems running uninterrupted across 12+ states, with a 150+ sales team and 125
                dedicated back-office staff.
              </p>
            </div>

            <div className="about-pill-container mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featurePills.map((item) => (
                <div
                  key={item.text}
                  className="about-pill flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 p-3 transition-colors hover:border-dcc-teal/20 hover:bg-dcc-teal/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-dcc-teal/10">
                    <item.icon className="h-4 w-4 text-dcc-teal" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="about-quote-reveal glass rounded-2xl p-6">
              <Quote className="mb-3 h-8 w-8 text-dcc-teal/30" />
              <p className="mb-4 italic leading-relaxed text-foreground/80">
                &ldquo;When India thinks IT, they think DCC. Our commitment has always been simple —
                make IT accessible to every individual that empowers their growth, and thereby fuels
                the growth of the whole nation. Service is not an afterthought; it is the
                foundation of a long-term relation.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dcc-teal font-bold text-lg text-white">
                  AM
                </div>
                <div>
                  <div className="font-semibold text-foreground">Mr. Anil Mhaske</div>
                  <div className="text-sm text-muted-foreground">Managing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Horizontal Timeline (Graph Curve) ── */}
        <div ref={timelineContainerRef} className="mt-28">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 text-center"
          >
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-dcc-teal/15 bg-dcc-teal/5 px-4 py-1.5 text-sm font-medium text-dcc-teal">
              <Calendar className="h-4 w-4" />
              Our Journey
            </div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              Milestones That <span className="text-gradient">Define Us</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Drag or scroll horizontally to explore 34 years of growth →
            </p>
          </motion.div>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="overflow-x-auto pb-6 pt-4"
            style={{ scrollbarWidth: 'none', cursor: 'grab' }}
            onMouseDown={(e) => {
              const el = e.currentTarget;
              const startX = e.pageX - el.offsetLeft;
              const scrollLeft = el.scrollLeft;
              const onMove = (me: MouseEvent) => {
                el.style.cursor = 'grabbing';
                el.scrollLeft = scrollLeft - (me.pageX - el.offsetLeft - startX);
              };
              const onUp = () => {
                el.style.cursor = 'grab';
                window.removeEventListener('mousemove', onMove);
                window.removeEventListener('mouseup', onUp);
              };
              window.addEventListener('mousemove', onMove);
              window.addEventListener('mouseup', onUp);
            }}
          >
            <div
              className="relative inline-flex items-center px-12"
              style={{
                minWidth: '1880px',
                height: 440,
              }}
            >
              {/* Dotted background pattern overlay inside timeline */}
              <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

              <svg
                className="absolute inset-0 pointer-events-none"
                style={{ width: '100%', height: '100%' }}
              >
                <defs>
                  {/* Linear gradient for progress line */}
                  <linearGradient id="timelineLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0d7377" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#14a3a8" />
                  </linearGradient>
                </defs>

                {/* Base light gray graph line */}
                <path
                  d="M 120,350 Q 220,330 320,310 T 520,270 T 720,235 T 920,200 T 1120,165 T 1320,130 T 1520,95 T 1720,60"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  opacity={0.5}
                />

                {/* Scroll-driven progress line */}
                <motion.path
                  d="M 120,350 Q 220,330 320,310 T 520,270 T 720,235 T 920,200 T 1120,165 T 1320,130 T 1520,95 T 1720,60"
                  fill="none"
                  stroke="url(#timelineLineGradient)"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  style={{ pathLength: lineScaleX }}
                />

                {/* Vertical dashed connectors to labels */}
                {points.map((p, i) => {
                  const isAbove = i % 2 !== 0;
                  return (
                    <line
                      key={i}
                      x1={p.x}
                      y1={p.y}
                      x2={p.x}
                      y2={isAbove ? p.y - 42 : p.y + 42}
                      stroke="#0d7377"
                      strokeWidth={1.5}
                      strokeDasharray="3,3"
                      opacity={0.4}
                    />
                  );
                })}
              </svg>

              {/* Nodes */}
              <div className="relative w-full h-full">
                {timeline.map((item, i) => (
                  <TimelineNode key={item.year} item={item} index={i} point={points[i]} />
                ))}
              </div>
            </div>
          </div>

          {/* Progress indicator dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-3 flex justify-center gap-2"
          >
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: item.color, opacity: 0.4 }}
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
