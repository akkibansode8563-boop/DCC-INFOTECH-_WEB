'use client';

import { useRef } from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '@/lib/motion';

const events = [
  { date: 'Jul 2026', title: 'IT Infrastructure Summit 2026', location: 'Pune, Maharashtra', description: 'Join us for a deep-dive into modern IT infrastructure trends including edge computing, hybrid cloud, and zero-trust networking.' },
  { date: 'Aug 2026', title: 'Cybersecurity Workshop', location: 'DCC Infotech Office, Pune', description: 'Free workshop for businesses on protecting against ransomware, phishing, and emerging cyber threats. Limited seats available.' },
  { date: 'Sep 2026', title: 'Annual Client Meet & Greet', location: 'The Westin, Pune', description: 'Our annual gathering to celebrate partnerships, share roadmaps, and recognize top-performing client organizations.' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" ref={sectionRef} className="section bg-background overflow-hidden" aria-label="Newsletter and events">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="ledger-mark justify-center">
            <span className="ledger-index">09</span>
            <span className="ledger-rule" />
            Newsletter &amp; Events
          </div>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Stay <span className="text-gradient">Connected</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Developing first-class solutions for our clients. Stay updated with our latest events,
            workshops, and industry insights.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeLeft}>
            <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-dcc-ink to-dcc-teal-dark select-none">
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                >
                  <Play className="ml-1 h-8 w-8 fill-white text-white" />
                </motion.div>
                <p className="mt-4 text-lg font-medium text-white">Watch Our Company Video</p>
                <p className="mt-1 text-sm text-white/60">2 min overview of DCC Infotech</p>
              </div>
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-dcc-teal-light/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-dcc-brass/10 blur-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="space-y-4"
          >
            <motion.h3 variants={fadeRight} className="mb-6 text-xl font-bold text-foreground font-heading">
              Upcoming Events
            </motion.h3>
            {events.map((event) => (
              <motion.article
                key={event.title}
                variants={fadeRight}
                className="group cursor-pointer rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-dcc-teal/10 hover:bg-dcc-teal/5 select-none"
              >
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-dcc-teal/10 transition-colors duration-300 group-hover:bg-dcc-teal/20">
                    <Calendar className="mb-0.5 h-5 w-5 text-dcc-teal" />
                    <span className="text-[10px] font-medium text-dcc-teal font-mono-data">{event.date}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground transition-colors duration-300 group-hover:text-dcc-teal">
                      {event.title}
                    </h4>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}

            <motion.div variants={fadeRight}>
              <Button
                variant="outline"
                className="mt-4 rounded-full border-dcc-teal text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white cursor-pointer"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Notified About Events
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
