'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '@/hooks/use-premium';

const testimonials = [
  {
    name: 'SBI — State Bank of India',
    role: 'Banking & Financial Services',
    text: 'DCC Infotech has been our trusted IT partner for years. Their AMC services are exceptional — response times are rapid and their 400+ engineers are highly skilled. We trust DCC with our critical IT infrastructure across multiple branches.',
    rating: 5,
    initials: 'SBI',
  },
  {
    name: 'Serum Institute of India',
    role: 'Pharmaceutical & Healthcare',
    text: 'We needed a complete IT infrastructure setup and ongoing maintenance for our operations. DCC delivered everything — from networking to servers to workstations — on time and within budget. Their service-first approach is truly commendable.',
    rating: 5,
    initials: 'SI',
  },
  {
    name: 'TATA Group',
    role: 'Conglomerate — Manufacturing & IT',
    text: 'As a growing enterprise, we needed flexible IT solutions. DCC provided us with scalable server infrastructure and ongoing support that has grown with us. Their distribution pricing and after-sales support is outstanding.',
    rating: 5,
    initials: 'TG',
  },
  {
    name: 'Punjab National Bank',
    role: 'Banking & Financial Services',
    text: 'The network and security solution DCC implemented for our offices has drastically improved our operational efficiency. Their team understood our unique banking requirements and delivered a robust, ISO-certified solution.',
    rating: 5,
    initials: 'PNB',
  },
  {
    name: 'Jupiter Hospital',
    role: 'Healthcare & Hospitality',
    text: 'We trust DCC Infotech for all our IT procurement and maintenance needs. From end-to-end IT infrastructure to surveillance systems — their quality and service is unmatched in the region.',
    rating: 5,
    initials: 'JH',
  },
];

const clientLogos = ['SBI', 'BOI', 'CBI', 'PNB', 'TATA', 'HAL', 'BSNL', 'RBI', 'DRDO', 'Huvepharma'];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Testimonials() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="section bg-background"
      ref={ref}
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            Testimonials
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what India&apos;s leading
            banks, hospitals, and enterprises have to say about working with DCC Infotech.
          </p>
        </motion.div>

        {/* Featured testimonial card */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          variants={fadeInUp}
          className="relative mx-auto max-w-4xl"
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <Quote className="mb-6 h-10 w-10 text-dcc-teal/20" />

            {/* Crossfade testimonial text */}
            <div className="relative min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 text-lg leading-relaxed text-foreground/80 md:text-xl"
                >
                  &ldquo;{t.text}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="mt-8 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dcc-teal font-bold text-lg text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < t.rating
                          ? 'fill-dcc-amber text-dcc-amber'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-dcc-teal/20 text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === active
                        ? 'w-6 bg-dcc-teal'
                        : 'w-2 bg-dcc-teal/20 hover:bg-dcc-teal/40'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-dcc-teal/20 text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trusted by logos */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
          variants={fadeInUp}
          className="mt-16 border-t border-border pt-12"
        >
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Trusted by leading organizations across India
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="flex h-12 min-w-[80px] items-center justify-center rounded-lg bg-muted/60 px-4 text-sm font-medium text-muted-foreground/50"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}