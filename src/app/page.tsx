import dynamic from 'next/dynamic';
import Navbar from '@/components/dcc/Navbar';
import Hero from '@/components/dcc/Hero';
import About from '@/components/dcc/About';
import LazySections from '@/components/dcc/LazySections';

// FAQ and Footer: keep SSR — FAQ content ranks in Google featured snippets,
// Footer contains address/contact info indexed by search engines.
const FAQ = dynamic(() => import('@/components/dcc/FAQ'), { ssr: true });
const Footer = dynamic(() => import('@/components/dcc/Footer'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Above-fold: SSR for fastest LCP */}
        <Hero />
        <About />
        {/* Below-fold: client-only lazy bundles via LazySections */}
        <LazySections />
        {/* SEO-critical: keep server-rendered */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}