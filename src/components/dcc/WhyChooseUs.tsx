'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Clock,
  BadgeDollarSign,
  Headphones,
  ThumbsUp,
  Zap,
} from 'lucide-react';

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

const stats = [
  { value: '30+', label: 'Years of Experience' },
  { value: '500+', label: 'Satisfied Clients' },
  { value: '10,000+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Retention Rate' },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section className="section-padding bg-dcc-slate relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-dcc-teal/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dcc-teal/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-dcc-amber font-semibold text-sm tracking-wider uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Why Businesses <span className="text-dcc-teal-light">Trust DCC</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We combine decades of expertise with a commitment to excellence, making us the preferred
            IT partner for businesses of all sizes across Pune and India.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={scaleIn}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl lg:text-4xl font-bold text-dcc-amber">{stat.value}</div>
              <div className="text-white/60 text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              variants={fadeInUp}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-dcc-teal/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-dcc-teal/20 group-hover:bg-dcc-teal flex items-center justify-center mb-4 transition-colors duration-300">
                <reason.icon className="h-6 w-6 text-dcc-teal-light group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}