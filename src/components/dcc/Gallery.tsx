'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Play, Calendar, MapPin, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '@/lib/motion';

const events = [
  { date: 'Jul 2026', title: 'IT Infrastructure Summit 2026', location: 'Pune, Maharashtra', description: 'Join us for a deep-dive into modern IT infrastructure trends including edge computing, hybrid cloud, and zero-trust networking.' },
  { date: 'Aug 2026', title: 'Cybersecurity Workshop', location: 'DCC Infotech Office, Pune', description: 'Free workshop for businesses on protecting against ransomware, phishing, and emerging cyber threats. Limited seats available.' },
  { date: 'Sep 2026', title: 'Annual Client Meet & Greet', location: 'The Westin, Pune', description: 'Our annual gathering to celebrate partnerships, share roadmaps, and recognize top-performing client organizations.' },
];

const galleryImages = [
  { src: '/gallery/1.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/1 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/1 (2).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/2.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/2 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/2 (2).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/3.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/3 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/3 (2).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/4.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/4 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/4 (2).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/5.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/5 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/6.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/6 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/7.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/7 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/8.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/8 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/9.jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/9 (1).jpg', alt: 'DCC Gallery Photo' },
  { src: '/gallery/DSC00338.JPG', alt: 'DCC Gallery Photo' },
  { src: '/gallery/DSC00372.JPG', alt: 'DCC Gallery Photo' },
  { src: '/gallery/DSC00385.JPG', alt: 'DCC Gallery Photo' },
  { src: '/gallery/DSC02219.JPG', alt: 'DCC Gallery Photo' },
  { src: '/gallery/DSC03364.JPG', alt: 'DCC Gallery Photo' },
  { src: '/gallery/DSC03451.JPG', alt: 'DCC Gallery Photo' },
  { src: '/gallery/story.jpg', alt: 'DCC Gallery Photo' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  const hasMore = visibleCount < galleryImages.length;

  return (
    <section id="gallery" ref={sectionRef} className="section bg-background overflow-hidden" aria-label="Newsletter, events and gallery">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
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
            workshops, and gallery highlights.
          </p>
        </motion.div>

        {/* Video & Events Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-2 mb-20">
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

        {/* Separator / Sub-ledger */}
        <div className="w-full h-px bg-border/40 my-16" />

        {/* Media & Photos Gallery Sub-Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground font-heading">
              Our <span className="text-gradient">Photo Gallery</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground font-sans-inter">
              Moments from our operations, head office, brand stores, and key team events.
            </p>
          </div>
        </motion.div>

        {/* Photo Grid — each card has its own whileInView so Load More works correctly */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.slice(0, visibleCount).map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border/40 bg-muted/20 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => setActiveImageIndex(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover overlay — eye icon only, no text labels */}
              <div className="absolute inset-0 bg-dcc-ink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Eye className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 8, galleryImages.length))}
              className="bg-dcc-teal hover:bg-dcc-teal-dark text-white rounded-full px-8 h-11 text-sm font-semibold shadow-md transition-all duration-300"
            >
              Load More Gallery Pictures
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 select-none"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 z-50 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 h-14 w-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 z-50 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 h-14 w-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 z-50 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Main Lightbox Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative max-w-5xl w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
              
              {/* Bottom bar inside Lightbox */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white flex justify-between items-end">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-dcc-brass-light font-mono-data uppercase mb-1 block">DCC Corporate Archive</span>
                  <h4 className="text-lg font-bold font-heading">{galleryImages[activeImageIndex].alt}</h4>
                </div>
                <span className="text-sm font-medium font-mono-data text-white/50 bg-white/10 px-3 py-1 rounded-full">
                  {activeImageIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
