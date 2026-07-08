'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Phone, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Careers', href: '#careers' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [open, setOpen] = useState(false);

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

  const handleNavClick = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <motion.header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm shadow-black/[0.03]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="mx-auto max-w-7xl section-x transition-all duration-500"
        style={{ height: scrolled ? 64 : 80 }}
        aria-label="Main navigation"
      >
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
            aria-label="DCC Infotech - Home"
          >
            <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-dcc-teal">
              DCC{' '}
              <span className="text-gradient">Infotech</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    isActive
                      ? 'text-dcc-teal'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-1/2 h-0.5 rounded-full bg-dcc-teal -translate-x-1/2"
                    initial={false}
                    animate={{
                      width: isActive ? 20 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side: contact info + CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop: phone & email */}
            <div className="hidden lg:flex items-center gap-4 mr-2">
              <a
                href="tel:+918598090100"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-dcc-teal transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden xl:inline">85980 90100</span>
              </a>
              <a
                href="mailto:info@dccinfotech.in"
                className="hidden xl:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-dcc-teal transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                info@dccinfotech.in
              </a>
            </div>

            {/* Get a Quote CTA */}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:inline-flex items-center gap-2 bg-dcc-amber hover:bg-dcc-amber-dark text-dcc-slate rounded-full px-6 h-10 text-sm font-semibold shadow-md shadow-dcc-amber/20 hover:shadow-lg hover:shadow-dcc-amber/30 transition-all duration-300"
            >
              Get a Quote
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Mobile Sheet trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-10 w-10 rounded-xl"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetHeader className="p-6 pb-4 border-b border-border/50">
                  <SheetTitle className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight text-foreground">
                      DCC <span className="text-gradient">Infotech</span>
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 p-4">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }}
                          className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? 'text-dcc-teal bg-dcc-teal/5'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          }`}
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    );
                  })}
                </div>
                <div className="mt-auto border-t border-border/50 p-4 space-y-3">
                  <a
                    href="tel:+918598090100"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-dcc-teal transition-colors px-4 py-2"
                  >
                    <Phone className="h-4 w-4" />
                    85980 90100
                  </a>
                  <a
                    href="mailto:info@dccinfotech.in"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-dcc-teal transition-colors px-4 py-2"
                  >
                    <Mail className="h-4 w-4" />
                    info@dccinfotech.in
                  </a>
                  <SheetClose asChild>
                    <Button
                      onClick={() => handleNavClick('#contact')}
                      className="w-full bg-dcc-amber hover:bg-dcc-amber-dark text-dcc-slate rounded-full font-semibold shadow-md shadow-dcc-amber/20"
                    >
                      Get a Quote
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}