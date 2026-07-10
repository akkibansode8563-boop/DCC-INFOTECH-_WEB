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
  { name: 'Cisco', slug: 'cisco' },
  { name: 'TP-Link', slug: 'tplink' },
  { name: 'Netgear', slug: 'netgear' },
  { name: 'Seagate', slug: 'seagate' },
  { name: 'WD', slug: 'westerndigital' },
];

const clientLogos = [
  // Row 1: Banks & Institutions
  { name: 'Reserve Bank of India', path: '/client_logos/client_r1_c1.png' },
  { name: 'SBI', path: '/client_logos/client_r1_c2.png' },
  { name: 'Bank of India', path: '/client_logos/client_r1_c3.png' },
  { name: 'Central Bank of India', path: '/client_logos/client_r1_c4.png' },
  { name: 'Punjab National Bank', path: '/client_logos/client_r1_c5.png' },
  { name: 'Saraswat Bank', path: '/client_logos/client_r1_c6.png' },
  { name: 'MIT Pune', path: '/client_logos/client_r1_c7.png' },
  { name: 'Institution', path: '/client_logos/client_r1_c8.png' },
  // Row 2: Organizations
  { name: 'Organization 1', path: '/client_logos/client_r2_c1.png' },
  { name: 'Dr. Vithalrao Vikhe Patil Foundation', path: '/client_logos/client_r2_c2.png' },
  { name: 'Organization 3', path: '/client_logos/client_r2_c3.png' },
  { name: 'Pravara Rural Education Society', path: '/client_logos/client_r2_c4.png' },
  { name: 'Marathwada Mitramandal', path: '/client_logos/client_r2_c5.png' },
  { name: 'Medical University', path: '/client_logos/client_r2_c6.png' },
  { name: 'Institution 7', path: '/client_logos/client_r2_c7.png' },
  { name: 'Institution 8', path: '/client_logos/client_r2_c8.png' },
  // Row 3: Healthcare & Hospitality
  { name: 'Jupiter Hospital', path: '/client_logos/client_r3_c1.png' },
  { name: 'Poonawalla Fincorp', path: '/client_logos/client_r3_c2.png' },
  { name: 'Serum Institute of India', path: '/client_logos/client_r3_c3.png' },
  { name: 'Institute', path: '/client_logos/client_r3_c4.png' },
  { name: 'Kinetic Green', path: '/client_logos/client_r3_c5.png' },
  { name: 'Marriott', path: '/client_logos/client_r3_c6.png' },
  { name: 'Le Meridien', path: '/client_logos/client_r3_c7.png' },
  { name: 'SPIC', path: '/client_logos/client_r3_c8.png' },
  // Row 4: Industry
  { name: 'Westin Hotels & Resorts', path: '/client_logos/client_r4_c1.png' },
  { name: 'Organization', path: '/client_logos/client_r4_c2.png' },
  { name: 'HAL', path: '/client_logos/client_r4_c3.png' },
  { name: 'Murugappa Group', path: '/client_logos/client_r4_c4.png' },
  { name: 'BSNL', path: '/client_logos/client_r4_c5.png' },
  { name: 'Reliable', path: '/client_logos/client_r4_c6.png' },
  { name: 'T&T Group', path: '/client_logos/client_r4_c7.png' },
  { name: 'TT Connect & Grow', path: '/client_logos/client_r4_c8.png' },
  // Row 5: Pharma & Business
  { name: 'Huvepharma', path: '/client_logos/client_r5_c1.png' },
  { name: 'Sanjivani Medipoint', path: '/client_logos/client_r5_c2.png' },
  { name: 'Krisala', path: '/client_logos/client_r5_c3.png' },
  { name: 'Scope Retail Systems', path: '/client_logos/client_r5_c4.png' },
  { name: 'Technofour', path: '/client_logos/client_r5_c5.png' },
  { name: 'Think Project', path: '/client_logos/client_r5_c6.png' },
  // Row 6: More organizations
  { name: 'Vikhe Patil Foundation', path: '/client_logos/client_r6_c1.png' },
  { name: 'Yashada Realty', path: '/client_logos/client_r6_c2.png' },
  { name: 'GCI', path: '/client_logos/client_r6_c3.png' },
  { name: 'Autobahn Trucking', path: '/client_logos/client_r6_c4.png' },
  { name: 'SQM', path: '/client_logos/client_r6_c8.png' },
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
                    : brand.slug === 'logitech'
                      ? '/logitech.svg'
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
              {clientLogos.concat(clientLogos).map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-white border border-white/5 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5 group/item"
                >
                  <img
                    src={client.path}
                    alt={client.name}
                    className="h-10 max-h-[40px] w-auto max-w-[130px] object-contain transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}