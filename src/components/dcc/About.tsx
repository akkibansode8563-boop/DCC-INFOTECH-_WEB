'use client';

import { motion } from 'framer-motion';
import { Quote, Award, Users, Target, CheckCircle2, Calendar } from 'lucide-react';
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
  { icon: Target, text: 'Client-first approach' },
  { icon: Users, text: '400+ specialized engineers' },
  { icon: Award, text: 'Authorized distributor of 210+ brands' },
  { icon: CheckCircle2, text: 'ISO 9001, 14001, 27001, 20000-1 certified' },
];

const timeline = [
  { year: '1992', event: 'Founded in Pune by Mr. Anil Mhaske' },
  { year: '1997', event: 'Secured Samsung distribution' },
  { year: '2000', event: 'Grew channel distribution network across Maharashtra' },
  { year: '2005', event: 'Deepened IT peripheral repairs. Opened Pune\'s biggest laptop showroom' },
  { year: '2010', event: 'Launched Corporate Division. Secured Dell\'s National Distributorship' },
  { year: '2013', event: 'Became No.1 Regional Distributor of Dell. Opened India\'s first Dell Authorised Store' },
  { year: '2017', event: 'Started GEM business. Grew channel network to 6,500+ partners' },
  { year: '2020', event: 'Expanded retail to 25+ stores across Maharashtra' },
  { year: 'Today', event: '3,150+ institutional clients. 20,000+ lives impacted. 12+ states served' },
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
            34 years of unwavering commitment to delivering world-class IT solutions that
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

            {/* Floating badge: 34 Years */}
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
                  <div className="text-2xl font-bold text-foreground">34+</div>
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
                In 1992, a young boy from a humble background named Shri. Anil Mhaske started a
                business in a 10x10 sq. ft. room with a staff of 1-2 people to provide the best
                prices and after-sales service to his clients. Today, DCC operates with over 45,000+
                sq. ft. of office space, impacting 20,000+ lives. Where the market was looking at
                every order as a deal, we chased a singular conviction: service is not an
                afterthought; it is the foundation of a long-term relation.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                That belief, &ldquo;Where Service is a Way of Life,&rdquo; shaped everything that
                came after. We recruited and trained specialized engineers, established R&amp;D labs,
                and built a distribution network that reached into Maharashtra&apos;s smallest
                districts. Today, the growth speaks for itself: 400+ engineers keeping client
                systems running uninterrupted across 12+ states, with a 150+ sales team and 125
                dedicated back-office staff.
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
                &ldquo;When India thinks IT, they think DCC. Our commitment has always been simple —
                make IT accessible to every individual that empowers their growth, and thereby fuels
                the growth of the whole nation. Service is not an afterthought; it is the
                foundation of a long-term relation.&rdquo;
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

        {/* Timeline */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={6}
          variants={fadeInUp}
          className="mt-24"
        >
          <div className="mb-12 text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-dcc-teal/15 bg-dcc-teal/5 px-4 py-1.5 text-sm text-dcc-teal font-medium">
              <Calendar className="h-4 w-4" />
              Our Journey
            </div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              Milestones That <span className="text-gradient">Define Us</span>
            </h3>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-dcc-teal/20 sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={7 + i}
                  variants={fadeInUp}
                  className={`relative flex flex-col gap-2 pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 ${
                    i % 2 === 0 ? 'sm:text-right' : 'sm:text-left sm:direction-rtl'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-dcc-teal bg-background sm:left-1/2 sm:-translate-x-1/2" />

                  {/* Year */}
                  <div className={`font-bold text-dcc-teal ${i % 2 === 0 ? 'sm:text-right' : 'sm:col-start-2 sm:text-left'}`}>
                    {item.year}
                  </div>

                  {/* Event */}
                  <div className={`text-sm text-muted-foreground leading-relaxed ${i % 2 === 0 ? 'sm:col-start-2 sm:text-left' : ''}`}>
                    {item.event}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}