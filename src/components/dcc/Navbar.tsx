'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
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
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm shadow-black/[0.03]'
          : 'bg-transparent'
      }`}
      style={{ animation: 'slideDown 0.6s ease forwards' }}
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
            className="flex items-center gap-2 group shrink-0"
            aria-label="DCC Infotech - Home"
          >
            <Image src="/dcc-logo.png" alt="DCC Logo" width={36} height={36} priority className="h-9 w-9 object-contain" />
            <span className="text-base lg:text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-dcc-teal hidden sm:inline-block whitespace-nowrap">
              DCC <span className="text-gradient">INFOTECH PVT LTD</span>
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
                  className={`relative px-2.5 py-1.5 xl:px-3 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    isActive
                      ? 'text-dcc-teal'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-1/2 h-0.5 rounded-full bg-dcc-teal -translate-x-1/2 transition-all duration-300"
                    style={{ width: isActive ? 20 : 0, opacity: isActive ? 1 : 0 }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side: contact info + CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop: phone & email */}
            <div className="hidden lg:flex items-center gap-4 mr-2 whitespace-nowrap">
              <a
                href="tel:+918598090100"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-dcc-teal transition-colors whitespace-nowrap"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">85980 90100</span>
              </a>
              <a
                href="mailto:info@dccinfotech.in"
                className="hidden xl:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-dcc-teal transition-colors whitespace-nowrap"
              >
                <Mail className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">info@dccinfotech.in</span>
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
                    <Image src="/dcc-logo.png" alt="DCC Logo" width={32} height={32} className="h-8 w-8 object-contain" />
                    <span className="text-base font-bold tracking-tight text-foreground whitespace-nowrap">
                      DCC <span className="text-gradient">INFOTECH PVT LTD</span>
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
    </header>
  );
}