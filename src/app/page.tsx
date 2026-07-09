import dynamic from 'next/dynamic';
import Navbar from '@/components/dcc/Navbar';
import Hero from '@/components/dcc/Hero';
import About from '@/components/dcc/About';

// Dynamically import below-the-fold sections to optimize initial JavaScript bundle weight
const MissionVisionValues = dynamic(() => import('@/components/dcc/MissionVisionValues'), { ssr: true });
const Services = dynamic(() => import('@/components/dcc/Services'), { ssr: true });
const WhyChooseUs = dynamic(() => import('@/components/dcc/WhyChooseUs'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/dcc/Testimonials'), { ssr: true });
const Team = dynamic(() => import('@/components/dcc/Team'), { ssr: true });
const PartnersSection = dynamic(() => import('@/components/dcc/PartnersSection'), { ssr: true });
const CTABanner = dynamic(() => import('@/components/dcc/CTABanner'), { ssr: true });
const Gallery = dynamic(() => import('@/components/dcc/Gallery'), { ssr: true });
const Careers = dynamic(() => import('@/components/dcc/Careers'), { ssr: true });
const FAQ = dynamic(() => import('@/components/dcc/FAQ'), { ssr: true });
const Contact = dynamic(() => import('@/components/dcc/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/dcc/Footer'), { ssr: true });
const WhatsAppButton = dynamic(() => import('@/components/dcc/WhatsAppButton'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <MissionVisionValues />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Team />
        <PartnersSection />
        <CTABanner />
        <Gallery />
        <Careers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}