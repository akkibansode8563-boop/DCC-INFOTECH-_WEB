'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const brandPartners = [
  'Lenovo', 'HP', 'ASUS', 'Dell', 'Acer', 'NVIDIA', 'Intel', 'Microsoft',
  'MSI', 'Logitech', 'LG', 'AMD', 'Seagate', 'WD', 'Samsung', 'Zebronics',
  'Cisco', 'D-Link', 'TP-Link', 'Netgear',
];

const keyClients = [
  'SBI', 'Bank of India', 'Central Bank of India', 'Punjab National Bank',
  'Jupiter Hospital', 'Poonawalla Fincorp', 'Serum Institute of India', 'TATA Group',
  'HAL', 'BSNL', 'Marriott', 'Le Meridien', 'Westin', 'Murugappa Group',
  'DRDO', 'RBI', 'Huvepharma',
];

export default function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandTickerRef = useRef<HTMLDivElement>(null);
  const clientTickerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(
      '.partners-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.partners-header-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Infinite horizontal scroll for brand ticker
    const brandTicker = brandTickerRef.current;
    if (brandTicker) {
      const scrollWidth = brandTicker.scrollWidth / 2;
      gsap.to(brandTicker, {
        x: -scrollWidth,
        ease: 'none',
        duration: 35,
        repeat: -1,
        overwrite: 'auto',
      });
    }

    // Infinite horizontal scroll for client ticker (reverse direction)
    const clientTicker = clientTickerRef.current;
    if (clientTicker) {
      const scrollWidth = clientTicker.scrollWidth / 2;
      gsap.set(clientTicker, { x: -scrollWidth });
      gsap.to(clientTicker, {
        x: 0,
        ease: 'none',
        duration: 40,
        repeat: -1,
        overwrite: 'auto',
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="section bg-background overflow-hidden"
      aria-label="Partners and clients"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="partners-header-reveal mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            Our Partners & Clients
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-gradient">210+ Brands</span> &{' '}
            <span className="text-gradient">3,150+ Clients</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Authorized distributor and service partner for the world&apos;s leading IT brands.
            Trusted by India&apos;s top banks, hospitals, PSUs, and enterprises.
          </p>
        </div>

        {/* Brand Partners Ticker */}
        <div className="mb-14 select-none">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-dcc-amber">
            Our Brand Partners
          </h3>
          <div className="relative w-full overflow-hidden py-4">
            {/* Edge fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />

            <div ref={brandTickerRef} className="flex gap-4 w-max">
              {brandPartners.concat(brandPartners).map((brand, i) => (
                <div
                  key={`${brand}-${i}`}
                  className="flex h-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-muted/30 px-6 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-dcc-teal/30 hover:bg-dcc-teal/[0.03] hover:text-dcc-teal"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Clients Ticker */}
        <div className="select-none">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-dcc-amber">
            Our Valued Clients
          </h3>
          <div className="relative w-full overflow-hidden py-4">
            {/* Edge fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />

            <div ref={clientTickerRef} className="flex gap-4 w-max">
              {keyClients.concat(keyClients).map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="flex h-12 shrink-0 items-center justify-center rounded-xl border border-dcc-teal/10 bg-dcc-teal/5 px-6 text-sm font-medium text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}