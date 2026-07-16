'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MorphBlob from '@/components/motion/MorphBlob';

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden" aria-label="Call to action">
      <div className="animated-gradient py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 dot-pattern" style={{ opacity: 0.25 }} />

        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <motion.div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" style={{ y }} />
          <motion.div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-dcc-brass/10 blur-3xl" style={{ y }} />
          <MorphBlob
            className="absolute -right-24 top-1/2 hidden w-[420px] h-[400px] -translate-y-1/2 md:block"
            colorFrom="#ffffff"
            colorTo="#e8bd6a"
            opacity={0.06}
            duration={11}
          />
          <motion.div
            className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/[0.03] blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl section-x text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-dark mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-dcc-brass-light" />
              <span className="text-sm font-medium text-white/90">Limited Time Offer</span>
            </div>

            <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-heading">
              Ready to Transform Your IT Infrastructure?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Get a free IT audit and customized proposal for your business. Our experts will assess
              your current setup and recommend the best solutions — at no cost and no obligation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-dcc-brass px-8 font-semibold text-white shadow-lg shadow-dcc-brass/25 transition-all duration-300 hover:bg-dcc-brass-dark hover:shadow-xl hover:shadow-dcc-brass/30 h-13 text-base"
              >
                Get Free IT Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="tel:+918598090100">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 rounded-full border-white/30 px-8 text-base text-black backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-black bg-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call 85980 90100
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
