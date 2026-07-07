'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  'IT Infrastructure Services',
  'Distribution Services',
  'Network Solutions',
  'Computer Sales & Services',
  'AMC & FMS Solutions',
  'Server Solutions',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dcc-slate text-white">
      {/* Newsletter bar */}
      <div className="bg-dcc-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
            <p className="text-white/80 text-sm mt-1">Stay updated with our latest IT solutions & offers</p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-dcc-teal flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">DCC Infotech</span>
                <span className="text-[10px] text-white/60 leading-tight tracking-wide uppercase">
                  Private Limited
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              DCC started in 1992 by Mr. Anil Mhaske as a corporate reseller, distributor, and then
              after providing AMC, Solution-based services and Corporate services. Trusted IT partner
              for businesses across Pune and India.
            </p>
            <div className="flex gap-3">
              {['facebook', 'linkedin', 'instagram', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-dcc-teal flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social}
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/70 hover:text-dcc-amber text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUp className="h-3 w-3 rotate-90 text-dcc-teal group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="text-white/70 hover:text-dcc-amber text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUp className="h-3 w-3 rotate-90 text-dcc-teal group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-dcc-teal shrink-0" />
                <span className="text-white/70 text-sm">
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-dcc-teal shrink-0" />
                <a href="tel:+917507800800" className="text-white/70 hover:text-dcc-amber text-sm transition-colors">
                  +91 7507800800
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-dcc-teal shrink-0" />
                <a href="mailto:info@dccinfotech.in" className="text-white/70 hover:text-dcc-amber text-sm transition-colors">
                  info@dccinfotech.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Separator className="bg-white/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/50 text-xs flex items-center gap-1">
          &copy; {new Date().getFullYear()} DCC Infotech Private Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-dcc-teal hover:bg-dcc-teal-dark text-white shadow-lg shadow-dcc-teal/30 flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    facebook: 'f',
    linkedin: 'in',
    instagram: 'ig',
    twitter: 'X',
  };
  return <span className="text-xs font-bold text-white/80">{icons[name] || ''}</span>;
}

function NewsletterForm() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-5 h-11 w-full md:w-72 focus:ring-dcc-amber"
      />
      <Button
        type="submit"
        disabled={status === 'loading'}
        className="bg-dcc-amber hover:bg-dcc-amber-dark text-dcc-slate rounded-full px-6 h-11 font-semibold shrink-0"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {status === 'success' && (
        <p className="text-xs text-green-300 mt-1">Subscribed successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-xs text-red-300 mt-1">Failed. Try again.</p>
      )}
    </form>
  );
}

import React from 'react';