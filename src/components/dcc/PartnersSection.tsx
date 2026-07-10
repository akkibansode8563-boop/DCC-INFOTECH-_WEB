'use client';

import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const brandPartners = [
  { name: 'Dell', slug: 'dell' },
  { name: 'HP', slug: 'hp' },
  { name: 'Lenovo', slug: 'lenovo' },
  { name: 'ASUS', slug: 'asus' },
  { name: 'Acer', slug: 'acer' },
  { name: 'NVIDIA', slug: 'nvidia' },
  { name: 'Intel', slug: 'intel' },
  { name: 'Microsoft', slug: 'microsoft' },
  { name: 'Apple', slug: 'apple' },
  { name: 'MSI', slug: 'msi' },
  { name: 'Logitech', slug: 'logitech' },
  { name: 'LG', slug: 'lg' },
  { name: 'AMD', slug: 'amd' },
  { name: 'Samsung', slug: 'samsung' },
  { name: 'Cisco', slug: 'cisco' },
  { name: 'TP-Link', slug: 'tplink' },
  { name: 'Netgear', slug: 'netgear' },
  { name: 'Seagate', slug: 'seagate' },
  { name: 'WD', slug: 'westerndigital' },
];

const keyClients = [
  { name: 'SBI', initials: 'SBI' },
  { name: 'Bank of India', initials: 'BOI' },
  { name: 'Central Bank of India', initials: 'CBI' },
  { name: 'Punjab National Bank', initials: 'PNB' },
  { name: 'Jupiter Hospital', initials: 'JH' },
  { name: 'Poonawalla Fincorp', initials: 'PF' },
  { name: 'Serum Institute of India', initials: 'SII' },
  { name: 'TATA Group', initials: 'TATA', slug: 'tata' },
  { name: 'HAL', initials: 'HAL' },
  { name: 'BSNL', initials: 'BSNL' },
  { name: 'Marriott', initials: 'MAR', slug: 'marriott' },
  { name: 'Le Meridien', initials: 'LM' },
  { name: 'Westin', initials: 'WEST' },
  { name: 'Murugappa Group', initials: 'MG' },
  { name: 'DRDO', initials: 'DRDO' },
  { name: 'RBI', initials: 'RBI' },
  { name: 'Huvepharma', initials: 'HP' },
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
              {brandPartners.concat(brandPartners).map((brand, i) => {
                const logoSrc = brand.slug === 'microsoft' 
                  ? '/microsoft.svg' 
                  : brand.slug === 'westerndigital' 
                    ? '/westerndigital.svg' 
                    : `https://cdn.simpleicons.org/${brand.slug}`;
                return (
                  <div
                    key={`${brand.name}-${i}`}
                    className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-white border border-white/5 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5 group/item"
                  >
                    <img
                      src={logoSrc}
                      alt={`${brand.name} Logo`}
                      className="h-10 max-h-[40px] w-auto max-w-[130px] object-contain transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                );
              })}
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
                  key={`${client.name}-${i}`}
                  className="flex h-12 shrink-0 items-center justify-center rounded-xl border border-dcc-teal/10 bg-dcc-teal/5 px-6 gap-3 text-sm font-semibold text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white group/item"
                >
                  {client.slug ? (
                    <img
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${client.slug}.svg`}
                      alt={`${client.name} Logo`}
                      className="h-4 w-4 opacity-50 invert-[0.3] group-hover/item:opacity-100 group-hover/item:invert transition-all duration-300 dark:invert-[0.7]"
                    />
                  ) : (
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-dcc-teal/10 text-[9px] font-extrabold tracking-tighter text-dcc-teal group-hover/item:bg-white/20 group-hover/item:text-white transition-colors duration-300">
                      {client.initials}
                    </div>
                  )}
                  <span>{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}