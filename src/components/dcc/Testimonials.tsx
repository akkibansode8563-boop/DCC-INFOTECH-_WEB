'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '@/hooks/use-premium';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'IT Manager, TechCorp Pune',
    text: 'DCC Infotech has been our go-to IT partner for over 8 years. Their AMC services are exceptional — response time is always under 2 hours and their technicians are highly skilled. We have zero complaints.',
    rating: 5,
    initials: 'RS',
  },
  {
    name: 'Priya Kulkarni',
    role: 'Director, EduCare Solutions',
    text: 'We needed a complete IT infrastructure setup for our new office. DCC delivered everything — from networking to servers to workstations — on time and within budget. Truly professional team.',
    rating: 5,
    initials: 'PK',
  },
  {
    name: 'Amit Deshmukh',
    role: 'CEO, StartUp Hub Pune',
    text: 'As a growing startup, we needed flexible IT solutions. DCC provided us with scalable server infrastructure and ongoing support that has grown with us. Their pricing is also very competitive.',
    rating: 5,
    initials: 'AD',
  },
  {
    name: 'Sunita Patil',
    role: 'Operations Head, Manufacturing Co.',
    text: 'The network solution DCC implemented for our factory has drastically improved our operational efficiency. Their team understood our unique requirements and delivered a robust solution.',
    rating: 4,
    initials: 'SP',
  },
  {
    name: 'Vikram Joshi',
    role: 'CFO, Finance Group',
    text: 'We trust DCC Infotech for all our IT procurement needs. Their distribution pricing is the best in Pune, and the after-sales support is outstanding. Highly recommended for corporate IT purchasing.',
    rating: 5,
    initials: 'VJ',
  },
];

const logoPlaceholders = ['TechCorp', 'EduCare', 'StartUp Hub', 'MFG Co.', 'Finance Group', 'HealthPlus'];

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
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say
            about working with DCC Infotech.
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
            Trusted by leading organizations across Pune and India
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {logoPlaceholders.map((name) => (
              <div
                key={name}
                className="flex h-12 w-32 items-center justify-center rounded-lg bg-muted/60 text-sm font-medium text-muted-foreground/50"
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