'use client';

import { useRef, useState } from 'react';
import { ArrowRight, Monitor, Cpu, Wrench, Award, Building2, Eye, Settings, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';
import SplitReveal from '@/components/motion/SplitReveal';

const services = [
  {
    icon: Monitor,
    title: 'Branded Desktops & Laptops',
    description:
      'Authorized partner and channel distributor for 210+ top brands including Dell, HP, Lenovo, and Acer. Genuine brand systems at wholesale channel pricing for institutional clients.',
    features: ['Dell, HP, Lenovo Partner', 'Wholesale Channel Pricing', 'Genuine Brand Warranty', 'Volume Order Fulfillment'],
    brands: ['Dell', 'HP', 'Lenovo', 'Acer', 'Apple', 'Asus'],
    categories: ['Business Laptops', 'Commercial Desktops', 'All-in-One PCs', 'Workstations'],
    featured: true,
  },
  {
    icon: Cpu,
    title: 'Custom PC Assembly',
    description:
      'Expert custom desktop PC assembly for corporate labs, editing suits, data analytics nodes, and education campuses. Tailored hardware configuration with premium parts.',
    features: ['High-Performance Builds', 'Genuine Brands Only', 'Tailored Specifications', 'Burn-in Reliability Testing'],
    brands: ['HP', 'Dell', 'Lenovo', 'Acer', 'Logitech', 'Zebronics', 'Lapcare', 'Intel', 'AMD', 'NVIDIA', 'ASUS', 'MSI', 'Gigabyte', 'Corsair', 'EVM'],
    categories: ['Keyboard', 'Mouse', 'Gaming Keyboard & Mouse', 'Cabinet (Gaming/Non-Gaming)', 'UPS', 'Printer', 'SSD', 'RAM', 'Motherboard', 'CCTV Products'],
  },
  {
    icon: Wrench,
    title: 'AMC & FMS Contracts',
    description:
      'Proactive Annual Maintenance Contracts (AMC) and Facility Management Services (FMS). Rapid-response support with 400+ specialized on-site engineers.',
    features: ['SLA-Backed Rapid Response', 'Preventative Regular Audits', '400+ Engineers Support', 'Minimizes System Downtime'],
    brands: ['Dell', 'HP', 'Lenovo', 'Cisco', 'Fortinet', 'Microsoft'],
    categories: ['Desktop/Laptop AMC', 'Server & Storage Maintenance', 'Network FMS', 'SLA Helpdesk Support'],
    featured: true,
  },
  {
    icon: Award,
    title: 'GeM Procurement Sourcing',
    description:
      'Expert procurement, supply, and tender execution through the Government e-Marketplace (GeM) portal. Transparent, fully compliant bidding and fulfillment.',
    features: ['GeM Portal Authorized', 'Compliant Documentation', 'PSU & Government Sourcing', 'Robust Order Logistics'],
    brands: ['Dell', 'HP', 'Cisco', 'Acer', 'Lenovo', 'APC'],
    categories: ['Direct Purchase Bidding', 'Custom Bids (L1)', 'OEM Authorization (MAF)', 'Government Tenders'],
  },
  {
    icon: Building2,
    title: 'Corporate IT Infrastructure',
    description:
      'End-to-end corporate office IT setups. Servers, rack infrastructure, enterprise firewalls, secure networking, online UPS, and unified communications.',
    features: ['Server Room Architecture', 'Enterprise Firewalls', 'Online UPS & Power Systems', 'Integrated Network Cabling'],
    brands: ['Cisco', 'Sophos', 'Ubiquiti', 'APC', 'Vertiv', 'Synology'],
    categories: ['Enterprise Server Setup', 'Firewall Security', 'Unified Communications', 'NAS/SAN Storage'],
  },
  {
    icon: Eye,
    title: 'Surveillance & Security',
    description:
      'Advanced CCTV surveillance camera setups, biometric access control systems, and monitoring stations for commercial properties, banks, and warehouses.',
    features: ['HD IP Camera Deployments', 'Biometric Access Control', 'Multi-Site Integration', 'Secure Recording Servers'],
    brands: ['Hikvision', 'CP Plus', 'Dahua', 'Honeywell', 'Matrix'],
    categories: ['IP CCTV Surveillance', 'Biometric Access Control', 'Smart Attendance (RFID)', 'NVR Setup'],
  },
  {
    icon: Settings,
    title: 'Chip-Level Laptop Repairing',
    description:
      'State-of-the-art diagnostic repair lab for precision chip-level fix of laptop motherboards, power ICs, displays, and peripheral controllers.',
    features: ['Motherboard Chip-Level Fix', 'Advanced Diagnostic Microscope', 'Genuine Component Spare Parts', 'Service Repair Warranty'],
    brands: ['Dell', 'HP', 'Lenovo', 'MacBook', 'Asus', 'Acer'],
    categories: ['Motherboard Chip Repair', 'Power IC Replacement', 'Screen/Panel Fix', 'Data Recovery'],
  },
  {
    icon: Package,
    title: 'Easy IT Equipment Rentals',
    description:
      'Short-term and long-term rental plans for high-performance laptops, desktops, printers, projectors, and rack servers. Zero maintenance burden.',
    features: ['Laptops, Desktops & Servers', 'Zero Maintenance Burden', 'Instant Hardware Scalability', 'Custom Flexible Terms'],
    brands: ['Dell', 'HP', 'Lenovo', 'Apple', 'Cisco', 'APC'],
    categories: ['Corporate Laptop Rentals', 'Event/Project Bulk Rentals', 'Enterprise Server Rentals', 'Printer Rentals'],
    highlight: true,
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 220, damping: 24 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`service-card card-premium group rounded-2xl p-6 lg:p-8 select-none flex flex-col justify-between ${
        service.highlight ? 'border-dcc-brass/30 bg-gradient-to-br from-dcc-brass/[0.04] to-transparent' : ''
      }`}
    >
      <div style={{ transform: 'translateZ(24px)' }}>
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
            service.highlight
              ? 'bg-dcc-brass/10 group-hover:bg-dcc-brass group-hover:shadow-lg group-hover:shadow-dcc-brass/20'
              : 'bg-dcc-teal/10 group-hover:bg-dcc-teal group-hover:shadow-lg group-hover:shadow-dcc-teal/20'
          }`}
        >
          <service.icon
            className={`h-7 w-7 transition-colors duration-300 ${
              service.highlight ? 'text-dcc-brass group-hover:text-white' : 'text-dcc-teal group-hover:text-white'
            }`}
          />
        </div>

        <h3 className="mb-3 text-xl font-bold text-foreground font-heading">{service.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

        <ul className="mb-6 grid gap-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/70">
              <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${service.highlight ? 'bg-dcc-brass' : 'bg-dcc-teal'}`} />
              {f}
            </li>
          ))}
        </ul>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="pt-4 border-t border-border/40 space-y-4">
            {service.brands && (
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5 font-mono-data">
                  Brands &amp; Partners
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.brands.map((brand) => (
                    <span key={brand} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-dcc-teal/5 text-dcc-teal border border-dcc-teal/10 hover:bg-dcc-teal/10 transition-colors duration-300">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {service.categories && (
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5 font-mono-data">
                  Product Range &amp; Services
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.categories.map((cat) => (
                    <span key={cat} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-dcc-brass/5 text-dcc-brass-dark border border-dcc-brass/10 hover:bg-dcc-brass/10 transition-colors duration-300">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        style={{ transform: 'translateZ(20px)' }}
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors group/btn cursor-pointer ${
          service.highlight ? 'text-dcc-brass-dark hover:text-dcc-brass' : 'text-dcc-teal hover:text-dcc-teal-dark'
        }`}
      >
        {expanded ? 'Hide Details' : 'Explore Details'}
        <ArrowRight className={`h-4 w-4 transition-transform group-hover/btn:translate-x-1 ${expanded ? 'rotate-90' : ''}`} />
      </button>
    </motion.div>
  );
}

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" ref={servicesRef} className="section bg-muted/20 overflow-hidden" aria-label="Our Services">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="ledger-mark justify-center">
            <span className="ledger-index">04</span>
            <span className="ledger-rule" />
            What We Offer
          </div>
          <SplitReveal as="h2" className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Our <span className="text-gradient">Services</span>
          </SplitReveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Complete channel IT solutions. From PC assembly and brand distribution to SLA-backed corporate maintenance, GeM procurement, and equipment rentals.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6 auto-rows-fr"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-14 text-center"
        >
          <Button
            size="lg"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-full bg-dcc-teal px-8 font-semibold text-white shadow-lg shadow-dcc-teal/20 transition-all duration-300 hover:bg-dcc-teal-dark hover:shadow-xl hover:shadow-dcc-teal/30 cursor-pointer"
          >
            Need a Custom Solution?
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
