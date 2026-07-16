'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lightweight skeleton shown while a section's JS chunk loads
function SectionSkeleton() {
  return (
    <div className="py-16 px-5 flex flex-col gap-6 animate-pulse" aria-hidden="true">
      <div className="h-6 w-40 rounded-full bg-muted mx-auto" />
      <div className="h-10 w-3/4 rounded-xl bg-muted mx-auto" />
      <div className="h-4 w-full max-w-xl rounded-lg bg-muted mx-auto" />
      <div className="h-4 w-5/6 max-w-xl rounded-lg bg-muted mx-auto" />
    </div>
  );
}

// ── ssr: false is only valid inside a Client Component ───────────────────────
// These animation-heavy sections use browser-only APIs (Framer Motion springs,
// IntersectionObserver, canvas, window). Disabling SSR for them:
//   1. Strips their JS from the server HTML payload → smaller initial download
//   2. Lets the browser parse/execute them after paint → faster First Contentful Paint
//   3. Prevents hydration mismatches from browser-only APIs
const MissionVisionValues = dynamic(
  () => import('@/components/dcc/MissionVisionValues'),
  { ssr: false }
);
const Services = dynamic(
  () => import('@/components/dcc/Services'),
  { ssr: false }
);
const WhyChooseUs = dynamic(
  () => import('@/components/dcc/WhyChooseUs'),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import('@/components/dcc/Testimonials'),
  { ssr: false }
);
const Team = dynamic(
  () => import('@/components/dcc/Team'),
  { ssr: false }
);
const PartnersSection = dynamic(
  () => import('@/components/dcc/PartnersSection'),
  { ssr: false }
);
const CTABanner = dynamic(
  () => import('@/components/dcc/CTABanner'),
  { ssr: false }
);
const Gallery = dynamic(
  () => import('@/components/dcc/Gallery'),
  { ssr: false }
);
const Careers = dynamic(
  () => import('@/components/dcc/Careers'),
  { ssr: false }
);
const Contact = dynamic(
  () => import('@/components/dcc/Contact'),
  { ssr: false }
);
const WhatsAppButton = dynamic(
  () => import('@/components/dcc/WhatsAppButton'),
  { ssr: false }
);

/**
 * All below-the-fold, animation-heavy sections collected in one Client Component
 * so that `ssr: false` on dynamic() is valid (Next.js 13+ App Router rule).
 */
export default function LazySections() {
  return (
    <>
      <Suspense fallback={<SectionSkeleton />}>
        <MissionVisionValues />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PartnersSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTABanner />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Careers />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      <WhatsAppButton />
    </>
  );
}
