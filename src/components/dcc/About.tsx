'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Quote, Award, Users, Target, CheckCircle2, Calendar } from 'lucide-react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeLeft, scaleIn, staggerContainer, viewportOnce } from '@/lib/motion';
import SplitReveal from '@/components/motion/SplitReveal';

const featurePills = [
  { icon: Target, text: 'Client-first approach' },
  { icon: Users, text: '400+ specialized engineers' },
  { icon: Award, text: 'Authorized distributor of 210+ brands' },
  { icon: CheckCircle2, text: 'ISO 9001, 14001, 27001, 20000-1 certified' },
];

const timeline = [
  { year: '1992', title: 'Founding', event: 'Founded in Pune by Mr. Anil Mhaske in a humble 10×10 sq. ft. room.', color: '#0d5c5c' },
  { year: '1997', title: 'Samsung Alliance', event: 'Secured a Samsung distribution partnership — the first major brand alliance.', color: '#c9962f' },
  { year: '2000', title: 'Network Expansion', event: 'Grew channel distribution network across Maharashtra, reaching every district.', color: '#0d5c5c' },
  { year: '2005', title: 'Retail Showroom', event: "Deepened IT peripheral repairs. Opened Pune's biggest laptop showroom.", color: '#c9962f' },
  { year: '2010', title: 'Dell Partnership', event: "Launched Corporate Division & secured Dell's National Distributorship.", color: '#0d5c5c' },
  { year: '2013', title: 'Dell Store No.1', event: "Became No.1 Regional Distributor of Dell. Opened India's first Dell Authorised Store.", color: '#c9962f' },
  { year: '2017', title: 'GEM Integration', event: 'Started GEM business. Grew channel network to 6,500+ partners.', color: '#0d5c5c' },
  { year: '2020', title: 'Retail Expansion', event: 'Expanded retail to 25+ stores across Maharashtra.', color: '#c9962f' },
  { year: 'Today', title: 'DCC Presence', event: '3,150+ institutional clients. 20,000+ lives impacted. 12+ states served.', color: '#0d5c5c' },
];

const points = [
  { x: 150, y: 350 }, { x: 410, y: 310 }, { x: 670, y: 270 }, { x: 930, y: 235 },
  { x: 1190, y: 200 }, { x: 1450, y: 165 }, { x: 1710, y: 130 }, { x: 1970, y: 95 }, { x: 2230, y: 60 },
];

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const isDesktopPinActive = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollXProgress } = useScroll({ container: trackRef });
  const lineScaleX = useSpring(scrollXProgress, { stiffness: 70, damping: 22 });

  // Pin the timeline on desktop and scrub its horizontal position off the
  // page's vertical scroll — replaces the "drag to explore" gesture with a
  // more discoverable, Apple-style pinned scroll. Disabled on mobile/tablet
  // and under reduced-motion, where the native horizontal drag/scroll
  // (already wired below) remains the interaction.
  useEffect(() => {
    if (shouldReduceMotion) return;
    let ctx: any;
    let mm: any;

    (async () => {
      const gsapModule = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current;
        const wrap = pinWrapRef.current;
        if (!track || !wrap) return;

        isDesktopPinActive.current = true;
        const maxScroll = () => track.scrollWidth - track.clientWidth;

        const st = ScrollTrigger.create({
          trigger: wrap,
          start: 'top top+=72',
          end: () => `+=${maxScroll() * 0.9}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self: any) => {
            track.scrollLeft = self.progress * maxScroll();
          },
        });

        return () => {
          isDesktopPinActive.current = false;
          st.kill();
        };
      });
    })();

    return () => {
      mm?.revert?.();
    };
  }, [shouldReduceMotion]);

  return (
    <section id="about" className="section bg-background" ref={aboutRef} aria-label="About DCC Infotech">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="ledger-mark justify-center">
            <span className="ledger-index">02</span>
            <span className="ledger-rule" />
            About Us
          </div>
          <SplitReveal as="h2" className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Building IT Excellence <span className="text-gradient">Since 1992</span>
          </SplitReveal>
          <p className="text-lg leading-relaxed text-muted-foreground font-sans-inter">
            34 years of unwavering commitment to delivering world-class IT solutions that
            transform businesses and drive innovation across India.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 mb-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeLeft}
            className="relative max-w-[480px] mx-auto w-full"
          >
            <div className="relative overflow-hidden rounded-2xl border border-dcc-teal/10 aspect-[4/5] w-full group shadow-2xl z-10">
              <div className="absolute inset-0 mesh-gradient opacity-40 z-0" />
              <Image
                src="/md-sir.jpeg"
                alt="Mr. Anil Mhaske"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-white font-semibold">Mr. Anil Mhaske</p>
                <p className="text-xs text-dcc-brass-light font-medium">Founder &amp; Managing Director</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
              className="absolute -bottom-8 -right-6 z-20"
            >
              <div className="glass flex items-center gap-3 rounded-2xl p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dcc-brass/10">
                  <Award className="h-6 w-6 text-dcc-brass" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-heading">34+</div>
                  <div className="text-xs text-muted-foreground font-sans-inter">Years of Trust</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-foreground font-heading">Our Story</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground font-sans-inter">
                In 1992, a young boy from a humble background named Shri. Anil Mhaske started a
                business in a 10×10 sq. ft. room with a staff of 1–2 people to provide the best
                prices and after-sales service to his clients. Today, DCC operates with over 45,000+
                sq. ft. of office space, impacting 20,000+ lives.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground font-sans-inter">
                Where the market was looking at every order as a deal, we chased a singular conviction:
                service is not an afterthought; it is the foundation of a long-term relation. That belief,
                &ldquo;Where Service is a Way of Life,&rdquo; shaped everything that came after. We recruited and trained
                specialized engineers, established R&amp;D labs, and built a distribution network that reached into
                Maharashtra&apos;s smallest districts. Today, the growth speaks for itself: 400+ engineers keeping
                client systems running uninterrupted across 12+ states, with a 150+ sales team and 125 dedicated
                back-office staff.
              </p>
            </motion.div>



            <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
              <Quote className="mb-3 h-8 w-8 text-dcc-teal/30" />
              <p className="mb-1 italic leading-relaxed text-foreground/80 font-sans-inter">
                &ldquo;When India thinks IT, they think DCC. Service is not an afterthought; it is the foundation of a long-term relation.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-28" ref={pinWrapRef}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mb-10 text-center"
          >
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-dcc-teal/15 bg-dcc-teal/5 px-4 py-1.5 text-sm font-medium text-dcc-teal">
              <Calendar className="h-4 w-4" />
              Our Journey
            </div>
            <SplitReveal as="h3" className="text-2xl font-bold text-foreground sm:text-3xl font-heading">
              Milestones That <span className="text-gradient">Define Us</span>
            </SplitReveal>
            <p className="mt-2 text-sm text-muted-foreground font-sans-inter">
              <span className="lg:hidden">Drag or scroll horizontally to explore 34 years of growth →</span>
              <span className="hidden lg:inline">Keep scrolling to move through 34 years of growth ↓</span>
            </p>
          </motion.div>

          <div
            ref={trackRef}
            className="overflow-x-auto pb-6 pt-4 no-scrollbar"
            style={{ scrollbarWidth: 'none', cursor: 'grab' }}
            onMouseDown={(e) => {
              if (isDesktopPinActive.current) return;
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
            <div className="relative inline-flex items-center px-12" style={{ minWidth: '2400px', height: 440 }}>
              <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

              <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="timelineLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0d5c5c" />
                    <stop offset="50%" stopColor="#c9962f" />
                    <stop offset="100%" stopColor="#1d9e8c" />
                  </linearGradient>
                </defs>

                <path
                  d="M 150,350 Q 280,330 410,310 T 670,270 T 930,235 T 1190,200 T 1450,165 T 1710,130 T 1970,95 T 2230,60"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  opacity={0.6}
                />
                <motion.path
                  d="M 150,350 Q 280,330 410,310 T 670,270 T 930,235 T 1190,200 T 1450,165 T 1710,130 T 1970,95 T 2230,60"
                  fill="none"
                  stroke="url(#timelineLineGradient)"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  style={{ pathLength: lineScaleX }}
                />

                {points.map((p, i) => {
                  const isAbove = i % 2 !== 0;
                  return (
                    <line
                      key={i}
                      x1={p.x} y1={p.y} x2={p.x} y2={isAbove ? p.y - 42 : p.y + 42}
                      stroke="#0d5c5c" strokeWidth={1.5} strokeDasharray="3,3" opacity={0.4}
                    />
                  );
                })}
              </svg>

              <div className="relative w-full h-full">
                {timeline.map((item, idx) => {
                  const pt = points[idx];
                  const isAbove = idx % 2 !== 0;
                  return (
                    <div key={item.year}>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.15 }}
                        className="absolute z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-background font-bold text-xs text-white shadow-md select-none font-mono-data"
                        style={{
                          left: pt.x - 24,
                          top: pt.y - 24,
                          background: `linear-gradient(135deg, ${item.color} 0%, #0d5c5c 100%)`,
                          boxShadow: '0 4px 12px rgba(13, 92, 92, 0.25)',
                        }}
                      >
                        {item.year}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: isAbove ? -12 : 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: idx * 0.05 + 0.1 }}
                        className="absolute z-10 w-[220px] text-center"
                        style={{ left: pt.x - 110, top: isAbove ? pt.y - 120 : pt.y + 40 }}
                      >
                        <h4 className="font-bold text-dcc-teal text-sm font-heading mb-1 select-none">
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-muted-foreground select-none font-sans-inter">
                          {item.event}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
