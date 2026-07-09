'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Quote, Award, Users, Target, CheckCircle2, Calendar } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const featurePills = [
  { icon: Target, text: 'Client-first approach' },
  { icon: Users, text: '400+ specialized engineers' },
  { icon: Award, text: 'Authorized distributor of 210+ brands' },
  { icon: CheckCircle2, text: 'ISO 9001, 14001, 27001, 20000-1 certified' },
];

const timeline = [
  { year: '1992', event: 'Founded in Pune by Mr. Anil Mhaske' },
  { year: '1997', event: 'Secured Samsung distribution' },
  { year: '2000', event: 'Grew channel distribution network across Maharashtra' },
  { year: '2005', event: 'Deepened IT peripheral repairs. Opened Pune\'s biggest laptop showroom' },
  { year: '2010', event: 'Launched Corporate Division. Secured Dell\'s National Distributorship' },
  { year: '2013', event: 'Became No.1 Regional Distributor of Dell. Opened India\'s first Dell Authorised Store' },
  { year: '2017', event: 'Started GEM business. Grew channel network to 6,500+ partners' },
  { year: '2020', event: 'Expanded retail to 25+ stores across Maharashtra' },
  { year: 'Today', event: '3,150+ institutional clients. 20,000+ lives impacted. 12+ states served' },
];

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header section reveal
    gsap.fromTo(
      '.about-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.about-header-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Left visual container reveal
    gsap.fromTo(
      '.about-left-reveal',
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.about-left-reveal',
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Floating badge scale-in
    gsap.fromTo(
      '.about-badge',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.about-badge',
          start: 'top 90%',
          once: true,
        },
      }
    );

    // Story paragraphs reveal
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
        scrollTrigger: {
          trigger: '.about-story-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Feature pills scale-in stagger
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
        scrollTrigger: {
          trigger: '.about-pill-container',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Quote card entrance
    gsap.fromTo(
      '.about-quote-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.about-quote-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Timeline header entrance
    gsap.fromTo(
      '.timeline-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.timeline-header-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Drawing the timeline center line on scroll
    gsap.fromTo(
      '.timeline-progress',
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 70%',
          end: 'bottom 75%',
          scrub: true,
        },
      }
    );

    // Animating timeline items as they scroll into view
    gsap.utils.toArray('.timeline-item').forEach((item: any) => {
      const dot = item.querySelector('.timeline-dot');
      const textNodes = item.querySelectorAll('.timeline-text');

      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0.6, opacity: 0.4 },
          {
            scale: 1.1,
            opacity: 1,
            duration: 0.4,
            clearProps: 'all',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      if (textNodes.length > 0) {
        gsap.fromTo(
          textNodes,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    });
  }, { scope: aboutRef });

  return (
    <section id="about" className="section bg-background" ref={aboutRef} aria-label="About DCC Infotech">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
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

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Visual card */}
          <div className="about-left-reveal relative max-w-[480px] mx-auto w-full">
            <div className="relative overflow-hidden rounded-2xl border border-dcc-teal/10 aspect-[4/5] w-full group shadow-2xl z-10">
              {/* Premium gradient overlay under the picture */}
              <div className="absolute inset-0 mesh-gradient opacity-40 z-0" />
              
              {/* Image of MD Sir */}
              <Image
                src="/md-sir.jpeg"
                alt="Mr. Anil Mhaske - Managing Director, DCC Infotech"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Decorative border accent */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-dcc-teal/10 z-20" />
              
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-85 z-10" />

              {/* Floating caption overlay at bottom of the picture */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-white/10 z-20 shadow-lg">
                <p className="text-base font-bold text-foreground">Mr. Anil Mhaske</p>
                <p className="text-xs text-dcc-teal font-medium">Founder & Managing Director</p>
              </div>
            </div>

            {/* Floating badge: 34 Years */}
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

            {/* Feature pills */}
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

            {/* MD's Quote Card */}
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

        {/* Timeline */}
        <div className="timeline-container mt-24">
          <div className="timeline-header-reveal mb-12 text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-dcc-teal/15 bg-dcc-teal/5 px-4 py-1.5 text-sm text-dcc-teal font-medium">
              <Calendar className="h-4 w-4" />
              Our Journey
            </div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              Milestones That <span className="text-gradient">Define Us</span>
            </h3>
          </div>

          <div className="relative">
            {/* Center line with static background and GSAP drawing overlay */}
            <div className="timeline-line" />
            <div className="timeline-progress" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`timeline-item relative flex flex-col gap-2 pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 ${
                    i % 2 === 0 ? 'sm:text-right' : 'sm:text-left sm:direction-rtl'
                  }`}
                >
                  {/* Dot */}
                  <div className="timeline-dot absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-dcc-teal bg-background sm:left-1/2 sm:-translate-x-1/2 z-10" />

                  {/* Year */}
                  <div className={`timeline-text font-bold text-dcc-teal ${i % 2 === 0 ? 'sm:text-right' : 'sm:col-start-2 sm:text-left'}`}>
                    {item.year}
                  </div>

                  {/* Event */}
                  <div className={`timeline-text text-sm text-muted-foreground leading-relaxed ${i % 2 === 0 ? 'sm:col-start-2 sm:text-left' : ''}`}>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}