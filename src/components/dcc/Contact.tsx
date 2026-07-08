'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
    }),
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

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 7507800800',
      href: 'tel:+917507800800',
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
      value: 'Pune, Maharashtra, India',
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

  return (
    <section id="contact" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-dcc-teal font-semibold text-sm tracking-wider uppercase mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dcc-slate mb-5">
            Let&apos;s <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a project in mind or need IT support? Reach out to us and our team will get back to
            you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeInUp}
            className="lg:col-span-2 space-y-5"
          >
            <h3 className="text-xl font-bold text-dcc-slate mb-6">Contact Information</h3>
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center shrink-0`}>
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.label}</div>
                  <div className="font-medium text-dcc-slate group-hover:text-dcc-teal transition-colors mt-0.5">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden h-48 bg-dcc-slate/5 border mt-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-dcc-teal/30" />
                <p className="text-sm">Pune, Maharashtra</p>
                <p className="text-xs mt-1">Interactive map loads here</p>
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
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
              <div className="grid sm:grid-cols-2 gap-5">
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
              <div className="space-y-2 mt-5">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  required
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={status === 'loading'}
                size="lg"
                className="w-full sm:w-auto mt-6 bg-dcc-teal hover:bg-dcc-teal-dark text-white rounded-full px-8 h-12 font-semibold shadow-lg shadow-dcc-teal/20"
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