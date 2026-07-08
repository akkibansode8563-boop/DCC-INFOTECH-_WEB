'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Server, ShieldCheck, Video, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/use-premium';

const services = [
  {
    icon: Server,
    title: 'Reliable IT Infrastructure & Maintenance',
    description:
      'AMC & FMS with proactive inspections and rapid-response SLAs. Precision chip-level repairing of motherboards, processors, and graphics cards. Networking, server infrastructure, online UPS & EPABX deployment. Transforms unpredictable capital repair costs into fixed, manageable operational expenses.',
    features: ['AMC & FMS Contracts', 'Chip-Level Repair', 'Network & Server Setup', 'UPS & EPABX Solutions'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security & Surveillance',
    description:
      'Server, Firewall & Antivirus security systems providing multi-layered threat protection for banking, government, and corporate environments. Surveillance CCTV deployment for retail, commercial, and institutional campuses. Endpoint and Cloud Security aligned with ISO 27001 standards.',
    features: ['Firewall & Antivirus', 'CCTV Surveillance', 'Endpoint Security', 'Cloud Security'],
  },
  {
    icon: Video,
    title: 'Unified Communications — Office in the Box',
    description:
      'Instant deployment of fully integrated workspaces for corporate, GEM, and enterprise clients. Audio Visual Solutions for retail and commercial environments. Video Conferencing & Interactive Displays for seamless multi-site collaboration. GEM procurement expertise — fully compliant, transparent, and auditable.',
    features: ['Integrated Workspaces', 'AV Solutions', 'Video Conferencing', 'GEM Procurement'],
  },
  {
    icon: Package,
    title: 'Easy Rentals — You Name IT, We Rent IT',
    description:
      'High-performance Laptops, Desktops, Printers, Projectors, Rack Servers, and AV equipment on rent. Custom & Flexible Terms with Zero Maintenance Burden and Instant Scalability. Ideal for project-based deployments, new office setups, corporate events, government tenders, and business continuity planning.',
    features: ['Laptop Rentals', 'Desktop Rentals', 'Printer Rentals', 'Server Rentals', 'AV Equipment', 'Flexible Terms'],
    highlight: true,
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
            Four pillars of enterprise IT excellence — Infrastructure, Security, Communications, and
            Rentals. Comprehensive solutions tailored to meet the unique needs of your business.
          </p>
        </motion.div>

        {/* Service cards grid — first 3 pillars */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {services.slice(0, 3).map((service, i) => (
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

        {/* Easy Rentals — highlighted full-width card */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={5}
          variants={fadeInUp}
          className="card-premium group rounded-2xl p-6 md:p-8 lg:p-10 border-dcc-amber/30 bg-gradient-to-r from-dcc-amber/5 to-transparent"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            {/* Left */}
            <div className="flex-1">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-dcc-amber/10 transition-all duration-300 group-hover:bg-dcc-amber group-hover:shadow-lg group-hover:shadow-dcc-amber/20">
                <Package className="h-7 w-7 text-dcc-amber transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-1 text-xl font-bold text-foreground sm:text-2xl">
                {services[3].title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {services[3].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {services[3].features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-dcc-amber/20 bg-dcc-amber/5 px-3 py-1 text-xs font-medium text-dcc-amber-dark"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 text-sm font-medium text-dcc-amber-dark transition-colors hover:text-dcc-amber group/btn"
              >
                Get Rental Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
            {/* Right — rental categories */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:mt-0 lg:grid-cols-2 lg:min-w-[300px]">
              {['Laptops — Dell, HP, Lenovo', 'Full Desktop Workstations', 'Laser & Inkjet Printers', 'Projectors & AV Equipment', 'Rack Servers & Networking', 'Custom Flexible Terms'].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 p-3"
                >
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-dcc-amber" />
                  <span className="text-xs font-medium text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={7}
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