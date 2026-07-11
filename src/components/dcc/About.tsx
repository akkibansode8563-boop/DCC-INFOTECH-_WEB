'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Quote, Award, Users, Target, CheckCircle2, Calendar } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
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
  },
];

const points = [
  { x: 150, y: 410 },  // 1992 (Below)
  { x: 430, y: 370 },  // 1997 (Above)
  { x: 710, y: 330 },  // 2000 (Below)
  { x: 990, y: 290 },  // 2005 (Above)
  { x: 1270, y: 250 }, // 2010 (Below)
  { x: 1550, y: 215 }, // 2013 (Above)
  { x: 1830, y: 180 }, // 2017 (Below)
  { x: 2110, y: 145 }, // 2020 (Above)
  { x: 2390, y: 110 }, // Today (Below)
];

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Header reveal
    gsap.fromTo(
      '.about-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.about-header-reveal', start: 'top 85%', once: true },
      }
    );
    // Left visual reveal
    gsap.fromTo(
      '.about-left-reveal',
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.about-left-reveal', start: 'top 80%', once: true },
      }
    );
    // Badge scale reveal
    gsap.fromTo(
      '.about-badge',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        clearProps: 'all',
        scrollTrigger: { trigger: '.about-badge', start: 'top 90%', once: true },
      }
    );
    // Story text reveal
    gsap.fromTo(
      '.about-story-reveal',
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.about-story-reveal', start: 'top 85%', once: true },
      }
    );
    // Feature pills reveal
    gsap.fromTo(
      '.about-pill',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.about-pill-container', start: 'top 85%', once: true },
      }
    );
    // Quote block reveal
    gsap.fromTo(
      '.about-quote-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.about-quote-reveal', start: 'top 85%', once: true },
      }
    );

    const mm = gsap.matchMedia();

    // DESKTOP: Horizontal Pin Scrolling
    mm.add("(min-width: 1024px)", () => {
      const scrollContent = document.getElementById("scroll-content");
      if (!scrollContent) return;

      const getScrollAmount = () => {
        return scrollContent.scrollWidth - window.innerWidth;
      };

      const pinTween = gsap.to(scrollContent, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: "#timeline-section",
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount() * 1.5}`,
          invalidateOnRefresh: true,
        }
      });

      const progressPath = document.getElementById("graph-path-progress");
      if (progressPath) {
        const pathLength = (progressPath as any).getTotalLength();
        gsap.set(progressPath, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });

        gsap.to(progressPath, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#timeline-section",
            start: "top top",
            end: () => `+=${getScrollAmount() * 1.5}`,
            scrub: 1,
          }
        });
      }

      const groups = gsap.utils.toArray<HTMLElement>(".timeline-group");
      groups.forEach((group, idx) => {
        const node = group.querySelector(".timeline-node");
        const card = group.querySelector(".timeline-card");
        const isLast = idx === groups.length - 1;

        gsap.fromTo([node, card], 
          { opacity: 0, y: (i) => i === 0 ? 0 : 30, scale: (i) => i === 0 ? 0 : 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              containerAnimation: pinTween,
              start: "left 90%",
              toggleActions: "play none none reverse"
            }
          }
        );

        ScrollTrigger.create({
          trigger: group,
          containerAnimation: pinTween,
          start: "left 60%",
          end: "left 40%",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(node, { scale: 1.15, filter: "drop-shadow(0 0 15px rgba(20, 163, 168, 0.6))", duration: 0.3 });
              gsap.to(card, { borderColor: "rgba(13, 115, 119, 0.45)", scale: 1.02, duration: 0.3 });
              gsap.to(group, { opacity: 1, duration: 0.3 });
              
              if (isLast) countUpStats();
            } else {
              gsap.to(node, { scale: 1, filter: "none", duration: 0.3 });
              gsap.to(card, { borderColor: "rgba(13, 115, 119, 0.15)", scale: 1, duration: 0.3 });
              gsap.to(group, { opacity: 0.7, duration: 0.3 });
            }
          }
        });
      });

      let countTriggered = false;
      const countUpStats = () => {
        if (countTriggered) return;
        countTriggered = true;
        const stats = document.querySelectorAll("#today-bento-card [data-target]");
        stats.forEach(stat => {
          const targetAttr = stat.getAttribute("data-target");
          if (!targetAttr) return;
          const target = parseInt(targetAttr, 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2.0,
            ease: "power3.out",
            onUpdate: () => {
              stat.textContent = Math.floor(obj.val).toLocaleString() + "+";
            }
          });
        });
      };
    });

    // MOBILE: Vertical Rail Scroll
    mm.add("(max-width: 1023px)", () => {
      const mobileProgress = document.getElementById("mobile-progress-line");
      const mobileGroups = gsap.utils.toArray<HTMLElement>(".mobile-group");

      if (mobileProgress) {
        gsap.to(mobileProgress, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: "#mobile-track",
            start: "top 70%",
            end: "bottom 30%",
            scrub: true
          }
        });
      }

      mobileGroups.forEach((group) => {
        const card = group.querySelector(".glass-card");
        const dot = group.querySelector(".mobile-dot");

        gsap.fromTo([card, dot],
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });
  }, { scope: aboutRef });

  return (
    <section id="about" className="section bg-background" ref={aboutRef} aria-label="About DCC Infotech">
      <div className="mx-auto max-w-7xl">
        <div className="about-header-reveal mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            About Us
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Building IT Excellence <span className="text-gradient">Since 1992</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground font-sans-inter">
            34 years of unwavering commitment to delivering world-class IT solutions that
            transform businesses and drive innovation across India.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 mb-24">
          <div className="about-left-reveal relative max-w-[480px] mx-auto w-full">
            <div className="relative overflow-hidden rounded-2xl border border-dcc-teal/10 aspect-[4/5] w-full group shadow-2xl z-10">
              <div className="absolute inset-0 mesh-gradient opacity-40 z-0" />
              <Image
                src="/md-sir.jpeg"
                alt="Mr. Anil Mhaske"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-85 z-10" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-white/10 z-20">
                <p className="text-base font-bold text-foreground">Mr. Anil Mhaske</p>
                <p className="text-xs text-dcc-teal font-medium">Founder & Managing Director</p>
              </div>
            </div>
            <div className="about-badge absolute -bottom-8 -right-6 z-20">
              <div className="glass flex items-center gap-3 rounded-2xl p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dcc-amber/10">
                  <Award className="h-6 w-6 text-dcc-amber" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-heading">34+</div>
                  <div className="text-xs text-muted-foreground font-sans-inter">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="about-story-reveal mb-8">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Our Story</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground font-sans-inter">
                In 1992, a young boy from a humble background named Shri. Anil Mhaske started a
                business in a 10x10 sq. ft. room with a staff of 1-2 people. Today, DCC operates with over 45,000+
                sq. ft. of office space, impacting 20,000+ lives. We chased a singular conviction: service is not an
                afterthought; it is the foundation of a long-term relation.
              </p>
            </div>

            <div className="about-pill-container mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featurePills.map((item) => (
                <div key={item.text} className="about-pill flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-dcc-teal/10">
                    <item.icon className="h-4 w-4 text-dcc-teal" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="about-quote-reveal glass rounded-2xl p-6">
              <Quote className="mb-3 h-8 w-8 text-dcc-teal/30" />
              <p className="mb-4 italic leading-relaxed text-foreground/80 font-sans-inter">
                &ldquo;When India thinks IT, they think DCC. Service is not an afterthought; it is the foundation of a long-term relation.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <section id="timeline-section" className="relative w-full overflow-hidden bg-white border-y border-slate-100 rounded-3xl py-12">
          <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 w-full mb-8 z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 mt-1">
              Milestones That <span className="text-gradient">Define Us</span>
            </h2>
            <p className="text-xs text-slate-500 mt-2">Scroll vertically to see the timeline draw and translate horizontally.</p>
          </div>

          {/* DESKTOP TIMELINE TRACK (Horizontal Pin Scroll) */}
          <div id="desktop-track" className="hidden lg:block w-full overflow-hidden no-scrollbar">
            <div id="scroll-content" className="relative inline-flex items-center h-[540px] px-24" style={{ minWidth: '2650px' }}>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minWidth: '2600px' }}>
                <defs>
                  <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0d7377" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#14a3a8" />
                  </linearGradient>
                </defs>
                
                {/* Base curve track */}
                <path id="graph-path-base" d="M 150,410 Q 430,370 710,330 T 1270,250 T 1830,180 T 2390,110" 
                      fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                
                {/* Progress curve track */}
                <path id="graph-path-progress" d="M 150,410 Q 430,370 710,330 T 1270,250 T 1830,180 T 2390,110" 
                      fill="none" stroke="url(#gradientLine)" strokeWidth="5" strokeLinecap="round" />
                
                {/* Connector vertical lines */}
                {points.map((p, i) => {
                  const isAbove = i % 2 !== 0;
                  return (
                    <line
                      key={i}
                      x1={p.x}
                      y1={p.y}
                      x2={p.x}
                      y2={isAbove ? p.y - 50 : p.y + 50}
                      stroke="#0d7377"
                      strokeWidth={1.5}
                      strokeDasharray="3,3"
                      opacity={0.5}
                    />
                  );
                })}
              </svg>

              {/* Milestones nodes & cards */}
              {timeline.map((item, idx) => {
                const pt = points[idx];
                const isAbove = idx % 2 !== 0;
                const isLast = idx === timeline.length - 1;

                return (
                  <div
                    key={item.year}
                    className="absolute timeline-group animate-reveal"
                    style={{ left: pt.x, top: pt.y }}
                  >
                    {isLast ? (
                      <>
                        {/* Pulse waves */}
                        <div className="pulse-wave w-16 h-16 bg-amber-500/25 -translate-x-1/2 -translate-y-1/2 z-0" />
                        <div className="pulse-wave w-24 h-24 bg-amber-500/10 -translate-x-1/2 -translate-y-1/2 z-0" style={{ animationDelay: '0.5s' }} />
                        
                        <div
                          className="timeline-node w-14 h-14 rounded-full border-4 border-amber-400 bg-gradient-to-tr from-amber-600 to-amber-400 shadow-lg text-white font-black font-heading text-xs flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                        >
                          Today
                        </div>
                        
                        {/* Bento Card for Today (frosted white backdrop hides background path) */}
                        <div
                          id="today-bento-card"
                          className="timeline-card p-6 w-[340px] rounded-2xl bg-white/95 border-2 border-amber-500/30 text-left -translate-x-1/2 mt-12 shadow-xl hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 z-10"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Current Presence</span>
                          </div>
                          <h3 className="text-base font-black font-heading text-slate-900 mb-4">Keeping India Connected</h3>
                          
                          <div className="grid grid-cols-3 gap-3 text-center border-t border-slate-100 pt-4">
                            <div>
                              <div className="text-xl font-bold font-stat text-teal-700" data-target="3150">0</div>
                              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-1">Clients</div>
                            </div>
                            <div>
                              <div className="text-xl font-bold font-stat text-teal-700" data-target="20000">0</div>
                              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-1">Lives</div>
                            </div>
                            <div>
                              <div className="text-xl font-bold font-stat text-teal-700" data-target="12">0</div>
                              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-1">States</div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="timeline-node w-12 h-12 rounded-full border-4 border-white bg-teal-700 shadow-md text-white font-bold font-heading text-xs flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                        >
                          {item.year}
                        </div>
                        <div
                          className={`timeline-card p-5 w-60 rounded-2xl bg-white/95 border border-[#0d7377]/12 text-center -translate-x-1/2 shadow-lg hover:shadow-xl hover:border-[#0d7377]/25 transition-all duration-300 z-10 ${
                            isAbove ? '-translate-y-[100%] -mt-16' : 'mt-10'
                          }`}
                        >
                          <h4 className="font-bold text-teal-800 text-sm font-heading mb-1">
                            {item.year === '1992' ? 'Founding' : item.year === '1997' ? 'Samsung Alliance' : item.year === '2000' ? 'Network Expansion' : item.year === '2005' ? 'Retail Showroom' : item.year === '2010' ? 'Dell Partnership' : item.year === '2013' ? 'Dell Store No.1' : item.year === '2017' ? 'GEM Integration' : 'Retail Stores'}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-sans-inter">{item.event}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}

            </div>
          </div>

          {/* MOBILE TIMELINE TRACK (Vertical Rail Scroll) */}
          <div id="mobile-track" className="lg:hidden w-full h-[65vh] overflow-y-auto px-6 relative no-scrollbar">
            <div className="relative pl-8 border-l-2 border-slate-200 py-4 space-y-10">
              
              <div id="mobile-progress-line" className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-teal-700 to-amber-500 origin-top" style={{ height: '0%' }}></div>

              {timeline.map((item, idx) => {
                const isLast = idx === timeline.length - 1;
                
                return (
                  <div key={item.year} className="mobile-group relative">
                    {isLast ? (
                      <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-2 border-amber-400 bg-amber-500 shadow flex items-center justify-center text-[10px] text-white font-bold mobile-dot">★</span>
                    ) : (
                      <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-2 border-white bg-teal-700 shadow flex items-center justify-center text-[10px] text-white font-bold mobile-dot">
                        {item.year.slice(-2)}
                      </span>
                    )}

                    {isLast ? (
                      <div className="glass-card p-5 border-2 border-amber-500/20">
                        <span className="text-xs font-bold text-amber-600">Today</span>
                        <h4 className="font-bold text-slate-800 text-sm font-heading mt-0.5">DCC Infotech Presence</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed mb-3 font-sans-inter">3,150+ institutional clients. 20,000+ lives impacted. 12+ states served.</p>
                        
                        <div className="grid grid-cols-3 gap-2 text-center border-t border-slate-100 pt-3">
                          <div>
                            <div className="text-base font-bold font-stat text-teal-700">3,150+</div>
                            <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Clients</div>
                          </div>
                          <div>
                            <div className="text-base font-bold font-stat text-teal-700">20K+</div>
                            <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Lives</div>
                          </div>
                          <div>
                            <div className="text-base font-bold font-stat text-teal-700">12+</div>
                            <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">States</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="glass-card p-4">
                        <span className="text-xs font-bold text-teal-700">{item.year}</span>
                        <h4 className="font-bold text-slate-800 text-sm font-heading mt-0.5">
                          {item.year === '1992' ? 'Founding' : item.year === '1997' ? 'Samsung Alliance' : item.year === '2000' ? 'Network Expansion' : item.year === '2005' ? 'Retail Showroom' : item.year === '2010' ? 'Dell Partnership' : item.year === '2013' ? 'Dell Store No.1' : item.year === '2017' ? 'GEM Integration' : 'Retail Stores'}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans-inter">{item.event}</p>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>

        </section>
      </div>
    </section>
  );
}
