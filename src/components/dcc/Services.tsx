'use client';

import { useRef } from 'react';
import { ArrowRight, Monitor, Cpu, Wrench, Award, Building2, Eye, Settings, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const services = [
  {
    icon: Monitor,
    title: 'Branded Desktops & Laptops',
    description:
      'Authorized partner and channel distributor for 210+ top brands including Dell, HP, Lenovo, and Acer. Genuine brand systems at wholesale channel pricing for institutional clients.',
    features: ['Dell, HP, Lenovo Partner', 'Wholesale Channel Pricing', 'Genuine Brand Warranty', 'Volume Order Fulfillment'],
  },
  {
    icon: Cpu,
    title: 'Custom PC Assembly',
    description:
      'Expert custom desktop PC assembly for corporate labs, editing suits, data analytics nodes, and education campuses. Tailored hardware configuration with premium parts.',
    features: ['High-Performance Builds', 'Genuine Brands Only', 'Tailored Specifications', 'Burn-in Reliability Testing'],
  },
  {
    icon: Wrench,
    title: 'AMC & FMS Contracts',
    description:
      'Proactive Annual Maintenance Contracts (AMC) and Facility Management Services (FMS). Rapid-response support with 400+ specialized on-site engineers.',
    features: ['SLA-Backed Rapid Response', 'Preventative Regular Audits', '400+ Engineers Support', 'Minimizes System Downtime'],
  },
  {
    icon: Award,
    title: 'GeM Procurement Sourcing',
    description:
      'Expert procurement, supply, and tender execution through the Government e-Marketplace (GeM) portal. Transparent, fully compliant bidding and fulfillment.',
    features: ['GeM Portal Authorized', 'Compliant Documentation', 'PSU & Government Sourcing', 'Robust Order Logistics'],
  },
  {
    icon: Building2,
    title: 'Corporate IT Infrastructure',
    description:
      'End-to-end corporate office IT setups. Servers, rack infrastructure, enterprise firewalls, secure networking, online UPS, and unified communications.',
    features: ['Server Room Architecture', 'Enterprise Firewalls', 'Online UPS & Power Systems', 'Integrated Network Cabling'],
  },
  {
    icon: Eye,
    title: 'Surveillance & Security',
    description:
      'Advanced CCTV surveillance camera setups, biometric access control systems, and monitoring stations for commercial properties, banks, and warehouses.',
    features: ['HD IP Camera Deployments', 'Biometric Access Control', 'Multi-Site Integration', 'Secure Recording Servers'],
  },
  {
    icon: Settings,
    title: 'Chip-Level Laptop Repairing',
    description:
      'State-of-the-art diagnostic repair lab for precision chip-level fix of laptop motherboards, power ICs, displays, and peripheral controllers.',
    features: ['Motherboard Chip-Level Fix', 'Advanced Diagnostic Microscope', 'Genuine Component Spare Parts', 'Service Repair Warranty'],
  },
  {
    icon: Package,
    title: 'Easy IT Equipment Rentals',
    description:
      'Short-term and long-term rental plans for high-performance laptops, desktops, printers, projectors, and rack servers. Zero maintenance burden.',
    features: ['Laptops, Desktops & Servers', 'Zero Maintenance Burden', 'Instant Hardware Scalability', 'Custom Flexible Terms'],
    highlight: true,
  },
];

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(
      '.services-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.services-header-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Cards entrance stagger
    gsap.fromTo(
      '.service-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.service-card',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // CTA button reveal
    gsap.fromTo(
      '.services-cta-reveal',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.services-cta-reveal',
          start: 'top 90%',
          once: true,
        },
      }
    );

    // 3D Card tilt effect on hover
    const cards = gsap.utils.toArray('.service-card');
    cards.forEach((card: any) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const angleX = (yc - y) / 25;
        const angleY = (x - xc) / 25;

        gsap.to(card, {
          rotateX: angleX,
          rotateY: angleY,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }, { scope: servicesRef });

  return (
    <section
      id="services"
      ref={servicesRef}
      className="section bg-muted/20 overflow-hidden"
      aria-label="Our Services"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="services-header-reveal mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            What We Offer
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Complete channel IT solutions. From PC assembly and brand distribution to SLA-backed corporate maintenance, GeM procurement, and equipment rentals.
          </p>
        </div>

        {/* Service cards grid — 8 pillars */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card card-premium group rounded-2xl p-6 lg:p-8 select-none flex flex-col justify-between transition-all duration-300 ${
                service.highlight ? 'border-dcc-amber/30 bg-gradient-to-br from-dcc-amber/[0.03] to-transparent' : ''
              }`}
            >
              <div>
                {/* Icon */}
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                  service.highlight 
                    ? 'bg-dcc-amber/10 group-hover:bg-dcc-amber group-hover:shadow-lg group-hover:shadow-dcc-amber/20' 
                    : 'bg-dcc-teal/10 group-hover:bg-dcc-teal group-hover:shadow-lg group-hover:shadow-dcc-teal/20'
                }`}>
                  <service.icon className={`h-7 w-7 transition-colors duration-300 ${
                    service.highlight 
                      ? 'text-dcc-amber group-hover:text-white' 
                      : 'text-dcc-teal group-hover:text-white'
                  }`} />
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
                      <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        service.highlight ? 'bg-dcc-amber' : 'bg-dcc-teal'
                      }`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors group/btn cursor-pointer ${
                  service.highlight 
                    ? 'text-dcc-amber-dark hover:text-dcc-amber' 
                    : 'text-dcc-teal hover:text-dcc-teal-dark'
                }`}
              >
                {service.highlight ? 'Get Rental Quote' : 'Learn More'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta-reveal mt-14 text-center">
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
        </div>
      </div>
    </section>
  );
}