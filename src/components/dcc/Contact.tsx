'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useInView } from '@/hooks/use-premium';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '85980 90100 / 020-67057575',
    href: 'tel:+918598090100',
    color: 'bg-dcc-teal/10 text-dcc-teal',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@dccinfotech.in',
    href: 'mailto:info@dccinfotech.in',
    color: 'bg-dcc-amber/10 text-dcc-amber-dark',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '637 Deccan, DCC House, J.M. Road, Pune 411004',
    href: '#',
    color: 'bg-dcc-teal/10 text-dcc-teal',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sat: 9:30 AM – 6:30 PM',
    href: '#',
    color: 'bg-dcc-amber/10 text-dcc-amber-dark',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });
  const { toast } = useToast();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

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
        toast({
          title: 'Message sent!',
          description: 'Thank you for reaching out. We will get back to you shortly.',
        });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      setStatus('idle');
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly by phone.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section
      id="contact"
      className="section bg-muted/20"
      ref={ref}
      aria-label="Contact us"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            Contact Us
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or need IT support? Reach out to us and our team will get back to
            you within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeInUp}
            className="space-y-4 lg:col-span-2"
          >
            <h3 className="mb-6 text-xl font-bold text-foreground">Contact Information</h3>
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="card-premium group flex items-start gap-4 rounded-xl p-4"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${info.color}`}
                >
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.label}</div>
                  <div className="mt-0.5 font-medium text-foreground transition-colors duration-300 group-hover:text-dcc-teal">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="mt-6 flex h-48 items-center justify-center rounded-2xl border border-border/40 bg-muted/40">
              <div className="text-center text-muted-foreground">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-dcc-teal/30" />
                <p className="text-sm">637 Deccan, DCC House</p>
                <p className="mt-1 text-xs">J.M. Road, Pune 411004</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="card-premium rounded-2xl border-border/60 p-6 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  required
                  rows={5}
                  className="resize-none rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={status === 'loading'}
                size="lg"
                className="mt-6 h-12 rounded-full bg-dcc-teal px-8 font-semibold text-white shadow-lg shadow-dcc-teal/20 transition-all duration-300 hover:bg-dcc-teal-dark hover:shadow-xl hover:shadow-dcc-teal/30 w-full sm:w-auto"
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