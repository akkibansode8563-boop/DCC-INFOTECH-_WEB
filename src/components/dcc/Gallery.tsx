'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section id="gallery" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-dcc-teal font-semibold text-sm tracking-wider uppercase mb-3">
            Newsletter & Events
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dcc-slate mb-5">
            Stay <span className="gradient-text">Connected</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Developing first-class solutions for our clients. Stay updated with our latest events,
            workshops, and industry insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Video section */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeInUp}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-dcc-slate to-dcc-teal-dark flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
                <p className="text-white mt-4 text-lg font-medium">Watch Our Company Video</p>
                <p className="text-white/60 text-sm mt-1">2 min overview of DCC Infotech</p>
              </div>
              {/* Decorative */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-dcc-teal/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-dcc-amber/10 blur-3xl" />
            </div>
          </motion.div>

          {/* Upcoming events */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-dcc-slate mb-6">Upcoming Events</h3>
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i + 3}
                variants={fadeInUp}
                className="group bg-muted/50 hover:bg-dcc-teal/5 rounded-xl p-5 border border-transparent hover:border-dcc-teal/10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-dcc-teal/10 flex flex-col items-center justify-center shrink-0 group-hover:bg-dcc-teal/20 transition-colors">
                    <Calendar className="h-5 w-5 text-dcc-teal mb-0.5" />
                    <span className="text-[10px] font-medium text-dcc-teal">{event.date}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dcc-slate group-hover:text-dcc-teal transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <Button
              variant="outline"
              className="mt-4 border-dcc-teal text-dcc-teal hover:bg-dcc-teal hover:text-white rounded-full"
            >
              View All Events
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}