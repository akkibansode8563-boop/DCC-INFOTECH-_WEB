'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MapPin, Mail, ArrowUp, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' },
];

const serviceLinks = [
  'IT Infrastructure & Maintenance',
  'Enterprise Security & Surveillance',
  'Unified Communications',
  'Easy Rentals',
];

// Only linking icons we have a real, verified destination for —
// dead "#" social icons erode trust more than fewer, working ones.
function SocialIcons() {
  return (
    <>
      <a
        href="https://www.linkedin.com/company/dcc-infotech-pvt-ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-dcc-teal-light hover:scale-110"
        aria-label="LinkedIn"
      >
        <svg className="h-4 w-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/dccinfotechpvtltd"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-dcc-teal-light hover:scale-110"
        aria-label="Instagram"
      >
        <svg className="h-4 w-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
      <a
        href="mailto:info@dccinfotech.in"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-dcc-teal-light hover:scale-110"
        aria-label="Email DCC Infotech"
      >
        <Mail className="h-4 w-4 text-white/80" />
      </a>
    </>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
  }, [email]);

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2 md:w-auto relative">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-11 w-full rounded-full border-white/20 bg-white/10 px-5 text-white placeholder:text-white/50 focus-visible:ring-dcc-brass-light md:w-72"
      />
      <Button
        type="submit"
        disabled={status === 'loading'}
        className="h-11 shrink-0 rounded-full bg-dcc-brass px-6 font-semibold text-white shadow-md shadow-dcc-brass/20 transition-all duration-300 hover:bg-dcc-brass-dark hover:shadow-lg hover:shadow-dcc-brass/30"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-1 h-4 w-4 animate-spin" />
            ..
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
      {status === 'success' && <p className="absolute -bottom-5 text-xs text-emerald-300">Subscribed successfully!</p>}
      {status === 'error' && <p className="absolute -bottom-5 text-xs text-red-300">Failed. Try again.</p>}
    </form>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNavClick = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="ink-surface" role="contentinfo">
      <div className="bg-dcc-teal-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-white font-heading">Subscribe to our Newsletter</h3>
            <p className="mt-1 text-sm text-white/80">Stay updated with our latest IT solutions &amp; offers</p>
          </div>
          <div className="relative">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-1">
                <Image src="/dcc-logo.png" alt="DCC Logo" width={36} height={36} className="h-7 w-7 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                DCC <span className="text-dcc-teal-light">INFOTECH PVT LTD</span>
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Founded in 1992 by Mr. Anil Mhaske, DCC INFOTECH PVT LTD is a leading multichannel IT
              distribution and service company trusted by India&apos;s biggest banks, government
              bodies, and enterprises across 12+ states.
            </p>
            <div className="flex gap-3">
              <SocialIcons />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white font-heading">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-dcc-brass-light"
                  >
                    <ArrowRight className="h-3 w-3 -rotate-90 text-dcc-teal-light transition-transform duration-200 group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white font-heading">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-dcc-brass-light"
                  >
                    <ArrowRight className="h-3 w-3 -rotate-90 text-dcc-teal-light transition-transform duration-200 group-hover:translate-x-1" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white font-heading">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dcc-teal-light" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=DCC+House+J.M.+Road+Pune+411004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-dcc-brass-light transition-colors duration-200"
                >
                  637 Deccan, DCC House, J.M. Road, Pune 411004
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-dcc-teal-light" />
                <div className="flex flex-col">
                  <a href="tel:+918598090100" className="text-sm text-white/70 transition-colors duration-200 hover:text-dcc-brass-light">
                    85980 90100
                  </a>
                  <a href="tel:+912067057575" className="text-sm text-white/70 transition-colors duration-200 hover:text-dcc-brass-light">
                    020-67057575
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-dcc-teal-light" />
                <a href="mailto:info@dccinfotech.in" className="text-sm text-white/70 transition-colors duration-200 hover:text-dcc-brass-light">
                  info@dccinfotech.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:px-6 sm:flex-row">
        <p className="flex items-center gap-1 text-xs text-white/50">
          &copy; {new Date().getFullYear()} DCC Infotech Private Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/40">Privacy Policy</span>
          <span className="text-xs text-white/40">Terms of Service</span>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-dcc-teal text-white shadow-lg shadow-dcc-teal/30 transition-colors duration-300 hover:bg-dcc-teal-dark"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
