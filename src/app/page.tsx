import Navbar from '@/components/dcc/Navbar';
import Hero from '@/components/dcc/Hero';
import About from '@/components/dcc/About';
import MissionVisionValues from '@/components/dcc/MissionVisionValues';
import Services from '@/components/dcc/Services';
import WhyChooseUs from '@/components/dcc/WhyChooseUs';
import Testimonials from '@/components/dcc/Testimonials';
import Team from '@/components/dcc/Team';
import PartnersSection from '@/components/dcc/PartnersSection';
import CTABanner from '@/components/dcc/CTABanner';
import Gallery from '@/components/dcc/Gallery';
import Careers from '@/components/dcc/Careers';
import FAQ from '@/components/dcc/FAQ';
import Contact from '@/components/dcc/Contact';
import Footer from '@/components/dcc/Footer';
import WhatsAppButton from '@/components/dcc/WhatsAppButton';

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