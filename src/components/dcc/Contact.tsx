'use client';

import { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { fadeUp, fadeLeft, fadeRight, viewportOnce } from '@/lib/motion';
import SplitReveal from '@/components/motion/SplitReveal';

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=DCC+House+J.M.+Road+Pune+411004';
const MAPS_EMBED_URL = 'https://www.google.com/maps?q=DCC+House+J.M.+Road+Pune+411004&output=embed';

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '85980 90100 / 020-67057575', href: 'tel:+918598090100', color: 'bg-dcc-teal/10 text-dcc-teal' },
  { icon: Mail, label: 'Email Us', value: 'info@dccinfotech.in', href: 'mailto:info@dccinfotech.in', color: 'bg-dcc-brass/10 text-dcc-brass-dark' },
  { icon: MapPin, label: 'Visit Us', value: '637 Deccan, DCC House, J.M. Road, Pune 411004', href: MAPS_URL, color: 'bg-dcc-teal/10 text-dcc-teal' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 10:00 AM – 8:00 PM', href: undefined, color: 'bg-dcc-brass/10 text-dcc-brass-dark' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const shouldReduceMotion = useReducedMotion();

  // Tasteful, on-brand confetti burst (teal + brass only) from the submit
  // button's position — fires only on genuine success, never on error.
  const fireConfetti = async () => {
    if (shouldReduceMotion || !submitBtnRef.current) return;
    const confetti = (await import('canvas-confetti')).default;
    const rect = submitBtnRef.current.getBoundingClientRect();
    confetti({
      particleCount: 70,
      spread: 65,
      startVelocity: 32,
      gravity: 1.1,
      ticks: 130,
      colors: ['#0d5c5c', '#1d9e8c', '#c9962f', '#e8bd6a'],
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !subject || !message) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone: phone || null, subject, message }),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        toast({ title: 'Message sent!', description: 'Thank you for reaching out. We will get back to you shortly.' });
        fireConfetti();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      setStatus('idle');
      toast({ title: 'Something went wrong', description: 'Please try again or contact us directly by phone.', variant: 'destructive' });
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section bg-muted/20 overflow-hidden" aria-label="Contact us">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="mx-auto mb-16 max-w-3xl text-center">
          <div className="ledger-mark justify-center">
            <span className="ledger-index">12</span>
            <span className="ledger-rule" />
            Contact Us
          </div>
          <SplitReveal as="h2" className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Let&apos;s <span className="text-gradient">Get in Touch</span>
          </SplitReveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or need IT support? Reach out to us and our team will get back to
            you within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeLeft} className="space-y-4 lg:col-span-2 select-none">
            <h3 className="mb-6 text-xl font-bold text-foreground font-heading">Contact Information</h3>
            {contactInfo.map((info) => {
              const content = (
                <>
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${info.color}`}>
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="mt-0.5 font-medium text-foreground transition-colors duration-300 group-hover:text-dcc-teal">
                      {info.value}
                    </div>
                  </div>
                </>
              );
              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-premium group flex items-start gap-4 rounded-xl p-4 cursor-pointer"
                >
                  {content}
                </a>
              ) : (
                <div key={info.label} className="card-premium group flex items-start gap-4 rounded-xl p-4">
                  {content}
                </div>
              );
            })}

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block h-48 overflow-hidden rounded-2xl border border-border/40"
              aria-label="Open DCC Infotech location in Google Maps"
            >
              <iframe
                src={MAPS_EMBED_URL}
                className="h-full w-full grayscale-[15%] contrast-[1.05]"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DCC Infotech location map"
              />
            </a>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeRight} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-premium rounded-2xl border-border/60 p-6 md:p-8 select-none">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" placeholder="Your full name" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" placeholder="How can we help?" required className="h-12 rounded-xl" />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your requirements..." required rows={5} className="resize-none rounded-xl" />
              </div>
              <Button
                ref={submitBtnRef}
                type="submit"
                disabled={status === 'loading'}
                size="lg"
                className="mt-6 h-12 rounded-full bg-dcc-teal px-8 font-semibold text-white shadow-lg shadow-dcc-teal/20 transition-all duration-300 hover:bg-dcc-teal-dark hover:shadow-xl hover:shadow-dcc-teal/30 w-full sm:w-auto cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
