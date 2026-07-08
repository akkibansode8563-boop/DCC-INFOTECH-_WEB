'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Server, Network, Cpu, Wrench, Package, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/use-premium';

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });

  return (
    <section
      id="services"
      className="section bg-muted/20"
      ref={ref}
      aria-label="Our Services"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            What We Offer
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Comprehensive IT solutions tailored to meet the unique needs of your business. From
            infrastructure to support, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              variants={fadeInUp}
              className="card-premium group rounded-2xl p-6 lg:p-8"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-dcc-teal/10 transition-all duration-300 group-hover:bg-dcc-teal group-hover:shadow-lg group-hover:shadow-dcc-teal/20">
                <service.icon className="h-7 w-7 text-dcc-teal transition-colors duration-300 group-hover:text-white" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {/* Feature bullets */}
              <ul className="mb-6 space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/70">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-dcc-teal" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 text-sm font-medium text-dcc-teal transition-colors hover:text-dcc-teal-dark group/btn"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={8}
          variants={fadeInUp}
          className="mt-14 text-center"
        >
          <Button
            size="lg"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-full bg-dcc-teal px-8 font-semibold text-white shadow-lg shadow-dcc-teal/20 transition-all duration-300 hover:bg-dcc-teal-dark hover:shadow-xl hover:shadow-dcc-teal/30"
          >
            Need a Custom Solution?
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}