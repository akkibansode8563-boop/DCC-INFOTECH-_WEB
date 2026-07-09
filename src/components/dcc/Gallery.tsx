'use client';

import { useRef } from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const events = [
  {
    date: 'Jul 2026',
    title: 'IT Infrastructure Summit 2026',
    location: 'Pune, Maharashtra',
    description: 'Join us for a deep-dive into modern IT infrastructure trends including edge computing, hybrid cloud, and zero-trust networking.',
  },
  {
    date: 'Aug 2026',
    title: 'Cybersecurity Workshop',
    location: 'DCC Infotech Office, Pune',
    description: 'Free workshop for businesses on protecting against ransomware, phishing, and emerging cyber threats. Limited seats available.',
  },
  {
    date: 'Sep 2026',
    title: 'Annual Client Meet & Greet',
    location: 'The Westin, Pune',
    description: 'Our annual gathering to celebrate partnerships, share roadmaps, and recognize top-performing client organizations.',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(
      '.gallery-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.gallery-header-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Video container reveal
    gsap.fromTo(
      '.gallery-video-reveal',
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.gallery-video-reveal',
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Events list reveal
    gsap.fromTo(
      '.gallery-events-reveal',
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.gallery-events-reveal',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section bg-background overflow-hidden"
      aria-label="Newsletter and events"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="gallery-header-reveal mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            Newsletter & Events
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Stay <span className="text-gradient">Connected</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Developing first-class solutions for our clients. Stay updated with our latest events,
            workshops, and industry insights.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Video component */}
          <div className="gallery-video-reveal">
            <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-dcc-slate to-dcc-teal-dark select-none">
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30 animate-none" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-white text-white" />
                </div>
                <p className="mt-4 text-lg font-medium text-white">Watch Our Company Video</p>
                <p className="mt-1 text-sm text-white/60">2 min overview of DCC Infotech</p>
              </div>
              {/* Decorative orbs */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-dcc-teal/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-dcc-amber/10 blur-3xl" />
            </div>
          </div>

          {/* Events list */}
          <div className="gallery-events-reveal space-y-4">
            <h3 className="mb-6 text-xl font-bold text-foreground">Upcoming Events</h3>
            {events.map((event) => (
              <article
                key={event.title}
                className="group cursor-pointer rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-dcc-teal/10 hover:bg-dcc-teal/5 select-none"
              >
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-dcc-teal/10 transition-colors duration-300 group-hover:bg-dcc-teal/20">
                    <Calendar className="mb-0.5 h-5 w-5 text-dcc-teal" />
                    <span className="text-[10px] font-medium text-dcc-teal">{event.date}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground transition-colors duration-300 group-hover:text-dcc-teal">
                      {event.title}
                    </h4>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <Button
              variant="outline"
              className="mt-4 rounded-full border-dcc-teal text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white cursor-pointer"
            >
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}