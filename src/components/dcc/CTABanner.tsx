'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="animated-gradient py-16 md:py-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-dcc-amber/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-dcc-amber" />
              <span className="text-white/90 text-sm font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Get a free IT audit and customized proposal for your business. Our experts will assess
              your current setup and recommend the best solutions — at no cost and no obligation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-dcc-amber hover:bg-dcc-amber-dark text-dcc-slate rounded-full px-8 h-13 text-base font-semibold shadow-lg shadow-dcc-amber/25"
              >
                Get Free IT Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="tel:+917507800800">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-13 text-base backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call +91 7507800800
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}