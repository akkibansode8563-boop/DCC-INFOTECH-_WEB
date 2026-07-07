'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-white" ref={ref}>
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dcc-slate mb-5">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say
            about working with DCC Infotech.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-dcc-teal/5 to-dcc-teal/10 rounded-3xl p-8 md:p-12 border border-dcc-teal/10">
            <Quote className="h-10 w-10 text-dcc-teal/20 mb-6" />

            <motion.p
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl text-dcc-slate/80 leading-relaxed mb-8 min-h-[100px]"
            >
              &ldquo;{testimonials[active].text}&rdquo;
            </motion.p>

            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full animated-gradient flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="font-semibold text-dcc-slate text-lg">
                    {testimonials[active].name}
                  </div>
                  <div className="text-muted-foreground text-sm">{testimonials[active].role}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[active].rating
                        ? 'text-dcc-amber fill-dcc-amber'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-dcc-teal/20 flex items-center justify-center text-dcc-teal hover:bg-dcc-teal hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-6 bg-dcc-teal' : 'w-2 bg-dcc-teal/20 hover:bg-dcc-teal/40'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-dcc-teal/20 flex items-center justify-center text-dcc-teal hover:bg-dcc-teal hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Client logos / trust bar */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
          variants={fadeInUp}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by leading organizations across Pune and India
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40">
            {['TechCorp', 'EduCare', 'StartUp Hub', 'MFG Co.', 'Finance Group', 'HealthPlus'].map(
              (name) => (
                <div
                  key={name}
                  className="w-32 h-12 rounded-lg bg-muted flex items-center justify-center text-sm font-medium text-dcc-slate"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}