'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What types of IT services does DCC Infotech provide?',
    answer:
      'DCC Infotech offers a comprehensive range of IT services including IT infrastructure design and setup, network solutions (LAN/WAN, wireless, VPN), server installation and management, computer sales and repair, annual maintenance contracts (AMC), facility management services (FMS), and IT equipment distribution. We serve businesses of all sizes — from small startups to large enterprises.',
  },
  {
    question: 'How quickly can your team respond to support requests?',
    answer:
      'Our standard AMC support guarantees a response time of under 2 hours for critical issues within Pune city limits. For non-critical requests, we typically respond within 4-6 business hours. Our 24/7 support line ensures that urgent issues are addressed any time, day or night. We also offer priority SLA plans for clients who need even faster response times.',
  },
  {
    question: 'Do you offer customized IT solutions for specific industries?',
    answer:
      'Absolutely! We understand that different industries have unique IT requirements. Our team has experience designing solutions for manufacturing, education, healthcare, finance, IT/ITeS, and retail sectors. We begin every engagement with a thorough assessment of your specific needs and design a tailored solution that fits your budget and operational requirements.',
  },
  {
    question: 'What brands and products do you distribute?',
    answer:
      'As an authorized distributor and corporate reseller, we carry products from leading IT brands including HP, Dell, Lenovo, Cisco, D-Link, TP-Link, Intel, AMD, Seagate, Western Digital, APC, and many more. Our distribution covers desktops, laptops, servers, networking equipment, storage devices, peripherals, and software licenses — all at competitive wholesale pricing.',
  },
  {
    question: 'How can I get a quote for my IT requirements?',
    answer:
      'Getting a quote is easy! You can fill out the contact form on our website, call us directly at +91 7507800800, email us at info@dccinfotech.in, or even reach out via WhatsApp. Our sales team will typically respond within a few hours with a detailed, competitive quotation tailored to your specific needs. For bulk orders, we offer special pricing.',
  },
  {
    question: 'Do you provide on-site support outside of Pune?',
    answer:
      'While our primary operations are based in Pune, we do provide on-site support to select locations in Maharashtra including Mumbai, Nashik, and Aurangabad for our AMC clients. For locations beyond our direct reach, we partner with authorized service networks to ensure timely support. Remote support via secure remote access tools is available for clients across India.',
  },
  {
    question: 'What makes DCC Infotech different from other IT vendors?',
    answer:
      'Three key factors set us apart: first, our 30+ years of experience means we have deep domain expertise and proven processes. Second, as an authorized distributor, we offer the best competitive pricing with genuine products. Third, our "service first" philosophy — we believe in building long-term relationships, not just completing transactions. Our 99% client retention rate speaks to the quality and reliability we deliver consistently.',
  },
  {
    question: 'Can you help with IT infrastructure for a new office setup?',
    answer:
      'Yes, new office IT setup is one of our core strengths. We provide end-to-end solutions including site assessment, network design and cabling, server room setup, workstation procurement and configuration, printer and peripheral setup, security systems (CCTV, access control), and ongoing maintenance. We have successfully set up IT infrastructure for over 200 offices in Pune.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section id="faq" className="section-padding bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="inline-block text-dcc-teal font-semibold text-sm tracking-wider uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dcc-slate mb-5">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about our IT services, support, pricing, and more.
            Can&apos;t find what you&apos;re looking for? Feel free to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/50 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-dcc-slate hover:text-dcc-teal font-medium text-base py-5 px-1 hover:no-underline transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 px-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
          variants={fadeInUp}
          className="text-center mt-10 p-8 rounded-2xl bg-gradient-to-br from-dcc-teal/5 to-dcc-teal/10 border border-dcc-teal/10"
        >
          <h3 className="text-lg font-semibold text-dcc-slate mb-2">Still have questions?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Our team is ready to help you with any inquiries about our services.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-dcc-teal hover:bg-dcc-teal-dark text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}