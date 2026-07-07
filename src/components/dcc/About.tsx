'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Award, Users, Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-dcc-teal font-semibold text-sm tracking-wider uppercase mb-3">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dcc-slate mb-5">
            Building IT Excellence{' '}
            <span className="gradient-text">Since 1992</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Three decades of unwavering commitment to delivering world-class IT solutions that
            transform businesses and drive innovation across India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-dcc-teal/10 to-dcc-teal/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl animated-gradient flex items-center justify-center">
                    <span className="text-white font-bold text-4xl">D</span>
                  </div>
                  <h3 className="text-2xl font-bold text-dcc-slate">Data Care Corporation</h3>
                  <p className="text-muted-foreground mt-2">DCC Infotech Private Limited</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-dcc-teal/20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-dcc-amber/10" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-dcc-amber/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-dcc-amber" />
              </div>
              <div>
                <div className="text-2xl font-bold text-dcc-slate">30+</div>
                <div className="text-xs text-muted-foreground">Years of Trust</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
              variants={fadeInUp}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-dcc-slate mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DCC Infotech Private Limited was established in 1992 by Mr. Anil Mhaske with a clear
                vision — to provide reliable, high-quality IT products and services to businesses of
                all sizes. What began as a corporate reseller and distributor has grown into one of
                Pune&apos;s most trusted IT solutions providers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over three decades, we have evolved from hardware sales to offering comprehensive IT
                infrastructure services, network solutions, server management, and annual maintenance
                contracts. Our deep industry knowledge and customer-first approach have earned us the
                trust of hundreds of businesses across Pune and beyond.
              </p>
            </motion.div>

            {/* Key points */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={3}
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {[
                { icon: Target, text: 'Customer-first approach' },
                { icon: Users, text: 'Expert certified team' },
                { icon: Award, text: 'Authorized distributor' },
                { icon: CheckCircle2, text: 'ISO compliant processes' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-dcc-teal/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-dcc-teal" />
                  </div>
                  <span className="text-sm text-dcc-slate font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* MD's Message */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={4}
              variants={fadeInUp}
              className="bg-gradient-to-br from-dcc-teal/5 to-dcc-teal/10 rounded-2xl p-6 border border-dcc-teal/10"
            >
              <Quote className="h-8 w-8 text-dcc-teal/30 mb-3" />
              <p className="text-dcc-slate/80 italic leading-relaxed mb-4">
                &ldquo;Our commitment has always been simple — deliver the best IT solutions at the most
                competitive prices, backed by service that our clients can truly rely on. Technology
                changes, but our dedication to our customers never will.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-dcc-teal flex items-center justify-center text-white font-bold text-lg">
                  AM
                </div>
                <div>
                  <div className="font-semibold text-dcc-slate">Mr. Anil Mhaske</div>
                  <div className="text-sm text-muted-foreground">Managing Director</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}