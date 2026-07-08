'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-premium';

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function PartnersSection() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });

  return (
    <section
      className="section bg-background"
      ref={ref}
      aria-label="Partners and clients"
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
        </motion.div>

        {/* Brand Partners */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          variants={fadeInUp}
          className="mb-14"
        >
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-dcc-amber">
            Our Brand Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {brandPartners.map((brand, i) => (
              <motion.div
                key={brand}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i + 2}
                variants={fadeInUp}
                className="flex h-11 items-center justify-center rounded-xl border border-border/50 bg-muted/30 px-5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-dcc-teal/20 hover:bg-dcc-teal/5 hover:text-dcc-teal"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Clients */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={23}
          variants={fadeInUp}
        >
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-dcc-amber">
            Our Valued Clients
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {keyClients.map((client, i) => (
              <motion.div
                key={client}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i + 24}
                variants={fadeInUp}
                className="flex h-11 items-center justify-center rounded-xl border border-dcc-teal/10 bg-dcc-teal/5 px-5 text-sm font-medium text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}