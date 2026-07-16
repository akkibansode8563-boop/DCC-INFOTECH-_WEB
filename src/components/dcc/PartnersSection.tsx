'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';

const brandPartners = [
  { name: 'Dell', slug: 'dell' }, { name: 'HP', slug: 'hp' }, { name: 'Lenovo', slug: 'lenovo' },
  { name: 'ASUS', slug: 'asus' }, { name: 'Acer', slug: 'acer' }, { name: 'NVIDIA', slug: 'nvidia' },
  { name: 'Intel', slug: 'intel' }, { name: 'Microsoft', slug: 'microsoft' }, { name: 'Apple', slug: 'apple' },
  { name: 'MSI', slug: 'msi' }, { name: 'Logitech', slug: 'logitech' }, { name: 'LG', slug: 'lg' },
  { name: 'AMD', slug: 'amd' }, { name: 'Cisco', slug: 'cisco' }, { name: 'TP-Link', slug: 'tplink' },
  { name: 'Netgear', slug: 'netgear' }, { name: 'Seagate', slug: 'seagate' }, { name: 'WD', slug: 'westerndigital' },
];

const clientLogos = [
  { name: 'Reserve Bank of India', path: '/client_logos/client_76.png' },
  { name: 'Westin Hotels', path: '/client_logos/client_79.png' },
  { name: 'HAL', path: '/client_logos/client_75.png' },
  { name: 'Kinetic Green', path: '/client_logos/client_81.png' },
  { name: 'Marriott', path: '/client_logos/client_80.png' },
  { name: 'Central Bank of India', path: '/client_logos/client_68.png' },
  { name: 'BSNL', path: '/client_logos/client_70.png' },
  { name: 'T&T Group', path: '/client_logos/client_188.png' },
  { name: 'Reliable', path: '/client_logos/client_91.png' },
  { name: 'Krisala', path: '/client_logos/client_77.png' },
  { name: 'Jupiter Hospital', path: '/client_logos/client_58.png' },
  { name: 'Serum Institute of India', path: '/client_logos/client_60.png' },
  { name: 'Poonawalla Fincorp', path: '/client_logos/client_61.png' },
  { name: 'Marathwada Mitramandal', path: '/client_logos/client_104.png' },
  { name: 'Pravara Rural Education Society', path: '/client_logos/client_57.png' },
  { name: 'Murugappa Group', path: '/client_logos/client_106.png' },
  { name: 'SBI', path: '/client_logos/client_93.png' },
  { name: 'TT Connect & Grow', path: '/client_logos/client_87.png' },
  { name: 'Bank of India', path: '/client_logos/client_53.png' },
  { name: 'Technofour', path: '/client_logos/client_63.png' },
  { name: 'Le Meridien', path: '/client_logos/client_190.png' },
  { name: 'Huvepharma', path: '/client_logos/client_100.png' },
  { name: 'Saraswat Bank', path: '/client_logos/client_89.png' },
  { name: 'Punjab National Bank', path: '/client_logos/client_55.png' },
  { name: 'Scope Retail Systems', path: '/client_logos/client_95.png' },
  { name: 'Think Project', path: '/client_logos/client_86.png' },
  { name: 'SQM', path: '/client_logos/client_192.png' },
  { name: 'Sanjivani Medipoint', path: '/client_logos/client_194.png' },
  { name: 'GCI', path: '/client_logos/client_196.png' },
  { name: 'Autobahn Trucking', path: '/client_logos/client_197.png' },
  { name: 'AD Associates', path: '/client_logos/client_199.png' },
  { name: 'Yashada Realty', path: '/client_logos/client_201.png' },
  { name: 'Seoyon', path: '/client_logos/client_203.png' },
  { name: 'Vikhe Patil Foundation', path: '/client_logos/client_204.png' },
  { name: 'MIT Pune', path: '/client_logos/client_205.png' },
  { name: 'Dr. Vithalrao Vikhe Patil Foundation', path: '/client_logos/client_211.png' },
  { name: '3B Fibreglass', path: '/client_logos/client_65.png' },
];

function Ticker({ items, direction = 'left', renderItem }: { items: any[]; direction?: 'left' | 'right'; renderItem: (item: any, i: number) => React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `${direction === 'left' ? 'marqueeLeft' : 'marqueeRight'} ${items.length * 2.4}s linear infinite`,
        }}
      >
        {items.concat(items).map((item, i) => renderItem(item, i))}
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="section bg-background overflow-hidden" aria-label="Partners and clients">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}} />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="ledger-mark justify-center">
            <span className="ledger-index">08</span>
            <span className="ledger-rule" />
            Our Partners &amp; Clients
          </div>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Trusted by <span className="text-gradient">210+ Brands</span> &{' '}
            <span className="text-gradient">3,150+ Clients</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Authorized distributor and service partner for the world&apos;s leading IT brands.
            Trusted by India&apos;s top banks, hospitals, PSUs, and enterprises.
          </p>
        </motion.div>

        <div className="mb-14 select-none">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-dcc-brass font-mono-data">
            Our Brand Partners
          </h3>
          <Ticker
            items={brandPartners}
            direction="left"
            renderItem={(brand, i) => {
              const logoSrc =
                brand.slug === 'microsoft' ? '/microsoft.svg'
                : brand.slug === 'westerndigital' ? '/westerndigital.svg'
                : brand.slug === 'logitech' ? '/logitech.svg'
                : `https://cdn.simpleicons.org/${brand.slug}`;
              return (
                <div
                  key={`${brand.name}-${i}`}
                  className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-white border border-border/60 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={logoSrc}
                    alt={`${brand.name} logo`}
                    className="h-10 max-h-[40px] w-auto max-w-[130px] object-contain"
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  />
                </div>
              );
            }}
          />
        </div>

        <div className="select-none">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-dcc-brass font-mono-data">
            Our Valued Clients
          </h3>
          <Ticker
            items={clientLogos}
            direction="right"
            renderItem={(client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-white border border-border/60 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={client.path}
                  alt={`${client.name} logo`}
                  className="h-10 max-h-[40px] w-auto max-w-[130px] object-contain"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
