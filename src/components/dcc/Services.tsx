'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Server, Network, Cpu, Wrench, Package, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Server,
    title: 'IT Infrastructure Services',
    description:
      'End-to-end IT infrastructure design, deployment, and management. We build robust, scalable systems that support your business operations and growth, from server rooms to complete data centers.',
    features: ['Network Design & Setup', 'Server Room Setup', 'Cable Management', 'Power Solutions'],
  },
  {
    icon: Package,
    title: 'Distribution Services',
    description:
      'Authorized distributor of leading IT brands. We offer competitive wholesale pricing on desktops, laptops, peripherals, networking equipment, and software licenses for corporate and retail clients.',
    features: ['Authorized Dealer', 'Bulk Pricing', 'Wide Product Range', 'Quick Delivery'],
  },
  {
    icon: Network,
    title: 'Network Solutions',
    description:
      'Comprehensive networking solutions including LAN/WAN setup, wireless networks, VPN configurations, firewall deployment, and network security audits for businesses of all sizes.',
    features: ['LAN/WAN Setup', 'Wireless Solutions', 'VPN & Firewall', 'Network Security'],
  },
  {
    icon: Cpu,
    title: 'Computer Sales & Services',
    description:
      'Quality assembled desktops, branded laptops, and peripherals at the best competitive prices. Our expert technicians also provide repair, upgrade, and data recovery services.',
    features: ['Assembled Desktops', 'Branded Laptops', 'Hardware Upgrades', 'Data Recovery'],
  },
  {
    icon: Wrench,
    title: 'AMC & FMS Solution',
    description:
      'Annual Maintenance Contracts and Facility Management Services that ensure your IT infrastructure runs at peak performance. Proactive monitoring, rapid response, and minimal downtime guaranteed.',
    features: ['24/7 Support', 'Preventive Maintenance', 'Rapid Response', 'SLA Backed'],
  },
  {
    icon: ShieldCheck,
    title: 'Server Solutions',
    description:
      'Enterprise-grade server solutions including installation, configuration, virtualization, backup systems, and disaster recovery planning to keep your critical business data safe and accessible.',
    features: ['Server Installation', 'Virtualization', 'Backup Solutions', 'Disaster Recovery'],
  },
];

export default function Services() {
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

  return (
    <section id="services" className="section-padding bg-muted/30" ref={ref}>
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
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dcc-slate mb-5">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comprehensive IT solutions tailored to meet the unique needs of your business. From
            infrastructure to support, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              variants={fadeInUp}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-dcc-teal/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-dcc-teal/10 group-hover:bg-dcc-teal flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-dcc-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-dcc-slate mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-dcc-slate/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-dcc-teal shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="text-dcc-teal hover:text-dcc-teal-dark p-0 h-auto font-medium group/btn"
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={8}
          variants={fadeInUp}
          className="text-center mt-14"
        >
          <Button
            size="lg"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-dcc-teal hover:bg-dcc-teal-dark text-white rounded-full px-8 shadow-lg shadow-dcc-teal/20"
          >
            Need a Custom Solution?
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}