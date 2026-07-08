'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, BadgeDollarSign, Headphones, ThumbsUp, Zap } from 'lucide-react';
import { useInView, useCountUp } from '@/hooks/use-premium';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description:
      'Over 30 years of proven track record serving businesses across Pune with consistent quality and reliability. Our clients trust us because we deliver on every promise.',
  },
  {
    icon: Clock,
    title: 'Rapid Response Time',
    description:
      'Our AMC and support teams guarantee response times under 2 hours. We understand that IT downtime costs money, so we prioritize speed without compromising quality.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Best Competitive Prices',
    description:
      'As an authorized distributor, we offer the most competitive wholesale pricing on IT equipment, software licenses, and peripherals — guaranteed value for your investment.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support Team',
    description:
      'A team of certified IT professionals ready to assist you 24/7. From troubleshooting to strategic IT planning, our experts are always just a call away.',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Assured',
    description:
      'Every product and service we deliver goes through rigorous quality checks. We only partner with leading brands and use genuine parts for all repairs and assemblies.',
  },
  {
    icon: Zap,
    title: 'End-to-End Solutions',
    description:
      'From procurement to installation to maintenance — we handle everything under one roof. No need to juggle multiple vendors when DCC Infotech covers it all.',
  },
];

const statsConfig = [
  { end: 30, suffix: '+', label: 'Years of Experience' },
  { end: 500, suffix: '+', label: 'Satisfied Clients' },
  { end: 10000, suffix: '+', label: 'Projects Completed', display: '10,000+' },
  { end: 99, suffix: '%', label: 'Client Retention Rate' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyChooseUs() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });

  const years = useCountUp(30, 2000, 0, isInView);
  const clients = useCountUp(500, 2000, 0, isInView);
  const projects = useCountUp(10000, 2500, 0, isInView);
  const retention = useCountUp(99, 2000, 0, isInView);

  const counterValues = [years, clients, projects, retention];

  return (
    <section
      className="section relative overflow-hidden bg-dcc-slate"
      ref={ref}
      aria-label="Why choose DCC Infotech"
    >
      {/* Mesh gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-dcc-teal/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-dcc-teal/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-amber">
            Why Choose Us
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why Businesses{' '}
            <span className="text-dcc-teal-light">Trust DCC</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            We combine decades of expertise with a commitment to excellence, making us the preferred
            IT partner for businesses of all sizes across Pune and India.
          </p>
        </motion.div>

        {/* KPI Counters Row */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {statsConfig.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={scaleIn}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-dcc-amber lg:text-4xl">
                {stat.display
                  ? stat.display
                  : `${counterValues[i].toLocaleString()}${stat.suffix}`}
              </div>
              <div className="mt-2 text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              variants={fadeInUp}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-dcc-teal/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dcc-teal/20 transition-all duration-300 group-hover:bg-dcc-teal group-hover:shadow-lg group-hover:shadow-dcc-teal/20">
                <reason.icon className="h-6 w-6 text-dcc-teal-light transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}