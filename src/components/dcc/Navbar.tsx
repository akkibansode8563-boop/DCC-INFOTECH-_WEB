'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-dcc-slate text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <a href="tel:+917507800800" className="hover:text-dcc-amber transition-colors">
                +91 7507800800
              </a>
            </span>
            <span className="text-white/50">|</span>
            <span>Where Service is a way of life</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-dcc-amber transition-colors">
              info@dccinfotech.in
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3" onClick={() => handleNavClick('#home')}>
              <div className="w-10 h-10 rounded-lg animated-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-dcc-slate leading-tight tracking-tight">
                  DCC Infotech
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight tracking-wide uppercase">
                  Private Limited
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-dcc-teal bg-dcc-teal/5'
                      : 'text-dcc-slate hover:text-dcc-teal hover:bg-dcc-teal/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => handleNavClick('#contact')}
                className="hidden sm:flex items-center gap-2 bg-dcc-teal hover:bg-dcc-teal-dark text-white rounded-full px-5"
              >
                Get a Quote
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t bg-white"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-dcc-teal bg-dcc-teal/5'
                        : 'text-dcc-slate hover:text-dcc-teal hover:bg-dcc-teal/5'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full mt-3 bg-dcc-teal hover:bg-dcc-teal-dark text-white rounded-full"
                >
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}