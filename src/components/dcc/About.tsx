'use client';

import { motion } from 'framer-motion';
import { Quote, Award, Users, Target, CheckCircle2 } from 'lucide-react';
import { useInView } from '@/hooks/use-premium';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const featurePills = [
  { icon: Target, text: 'Customer-first approach' },
  { icon: Users, text: 'Expert certified team' },
  { icon: Award, text: 'Authorized distributor' },
  { icon: CheckCircle2, text: 'ISO compliant processes' },
];

export default function About() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });

  return (
    <section id="about" className="section bg-background" ref={ref} aria-label="About DCC Infotech">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            About Us
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Building IT Excellence{' '}
            <span className="text-gradient">Since 1992</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Three decades of unwavering commitment to delivering world-class IT solutions that
            transform businesses and drive innovation across India.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Visual card */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-dcc-teal/10 p-12 mesh-gradient">
              {/* Decorative border accent */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-dcc-teal/5" />

              {/* Centered monogram */}
              <div className="flex items-center justify-center py-16">
                <div className="relative">
                  <motion.span
                    className="block text-8xl font-black tracking-tighter text-foreground/80 sm:text-9xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    DCC
                  </motion.span>
                  <motion.div
                    className="mx-auto mt-4 h-1 w-16 rounded-full bg-dcc-amber"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  />
                </div>
              </div>
            </div>

            {/* Floating badge: 30+ Years */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute -bottom-6 right-4 sm:right-8"
            >
              <div className="glass flex items-center gap-3 rounded-2xl p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dcc-amber/10">
                  <Award className="h-6 w-6 text-dcc-amber" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">30+</div>
                  <div className="text-xs text-muted-foreground">Years of Trust</div>
                </div>
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
              <h3 className="mb-4 text-2xl font-bold text-foreground">Our Story</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                DCC Infotech Private Limited was established in 1992 by Mr. Anil Mhaske with a clear
                vision — to provide reliable, high-quality IT products and services to businesses of
                all sizes. What began as a corporate reseller and distributor has grown into one of
                Pune&apos;s most trusted IT solutions providers.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Over three decades, we have evolved from hardware sales to offering comprehensive IT
                infrastructure services, network solutions, server management, and annual maintenance
                contracts. Our deep industry knowledge and customer-first approach have earned us the
                trust of hundreds of businesses across Pune and beyond.
              </p>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={3}
              variants={fadeInUp}
              className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {featurePills.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 p-3 transition-colors hover:border-dcc-teal/20 hover:bg-dcc-teal/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-dcc-teal/10">
                    <item.icon className="h-4 w-4 text-dcc-teal" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* MD's Quote Card */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={4}
              variants={fadeInUp}
              className="glass rounded-2xl p-6"
            >
              <Quote className="mb-3 h-8 w-8 text-dcc-teal/30" />
              <p className="mb-4 italic leading-relaxed text-foreground/80">
                &ldquo;Our commitment has always been simple — deliver the best IT solutions at the most
                competitive prices, backed by service that our clients can truly rely on. Technology
                changes, but our dedication to our customers never will.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dcc-teal font-bold text-lg text-white">
                  AM
                </div>
                <div>
                  <div className="font-semibold text-foreground">Mr. Anil Mhaske</div>
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