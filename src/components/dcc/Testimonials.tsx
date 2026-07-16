'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { fadeUp, viewportOnce } from '@/lib/motion';
import SplitReveal from '@/components/motion/SplitReveal';

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

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[active];

  return (
    <section id="testimonials" ref={sectionRef} className="section bg-background overflow-hidden" aria-label="Client testimonials">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="ledger-mark justify-center">
            <span className="ledger-index">06</span>
            <span className="ledger-rule" />
            Testimonials
          </div>
          <SplitReveal as="h2" className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            What Our <span className="text-gradient">Clients Say</span>
          </SplitReveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what India&apos;s leading
            banks, hospitals, and enterprises have to say about working with DCC Infotech.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative mx-auto max-w-4xl"
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <Quote className="mb-6 h-10 w-10 text-dcc-teal/20" />

            <div className="relative min-h-[140px] md:min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-x-0 top-0 text-lg leading-relaxed text-foreground/80 md:text-xl"
                >
                  &ldquo;{t.text}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dcc-teal font-bold text-lg text-white font-heading">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < t.rating ? 'fill-dcc-brass text-dcc-brass' : 'text-gray-200'}`} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-dcc-teal/20 text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      i === active ? 'w-6 bg-dcc-teal' : 'w-2 bg-dcc-teal/20 hover:bg-dcc-teal/40'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-dcc-teal/20 text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
