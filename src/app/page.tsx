import Navbar from '@/components/dcc/Navbar';
import Hero from '@/components/dcc/Hero';
import About from '@/components/dcc/About';
import Services from '@/components/dcc/Services';
import Testimonials from '@/components/dcc/Testimonials';
import Team from '@/components/dcc/Team';
import Gallery from '@/components/dcc/Gallery';
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
        <Services />
        <Testimonials />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}