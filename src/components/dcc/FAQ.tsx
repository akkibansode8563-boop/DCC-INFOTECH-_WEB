'use client';

import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

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
      'Getting a quote is easy! You can fill out the contact form on our website, call us directly at 85980 90100, email us at info@dccinfotech.in, or even reach out via WhatsApp. Our 150+ sales team members will typically respond within a few hours with a detailed, competitive quotation tailored to your specific needs. For bulk orders and GEM procurement, we offer special pricing.',
  },
  {
    question: 'Do you provide on-site support outside of Pune?',
    answer:
      'Yes! With 400+ engineers across 12+ states — Maharashtra, Goa, Gujarat, Madhya Pradesh, Uttar Pradesh, Karnataka, Haryana, Delhi, Telangana, Punjab, Chhattisgarh, and Rajasthan — we provide on-site support to a wide geographic area. Our 3,000+ active AMC customers benefit from rapid-response SLAs. For all locations, remote support via secure remote access tools is also available.',
  },
  {
    question: 'What makes DCC Infotech different from other IT vendors?',
    answer:
      'Four key factors set us apart: first, our 34 years of experience since 1992 means we have deep domain expertise and proven processes. Second, as an authorized distributor of 210+ brands, we offer genuine products at the best competitive pricing. Third, our "Where Service is a Way of Life" philosophy — we believe in building long-term relationships, not just completing transactions. Fourth, our ISO 9001, ISO 14001, ISO 27001, and ISO 20000-1 certifications ensure world-class quality and information security standards.',
  },
  {
    question: 'Can you help with IT infrastructure for a new office setup?',
    answer:
      'Yes, new office IT setup is one of our core strengths through our "Office in the Box" unified communications solution. We provide end-to-end solutions including site assessment, network design and cabling, server room setup, workstation procurement and configuration, printer and peripheral setup, enterprise security (firewall, CCTV, endpoint security), and ongoing maintenance. We have successfully set up IT infrastructure for 3,150+ institutional clients across India.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(
      '.faq-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.faq-header-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Accordion container reveal
    gsap.fromTo(
      '.faq-accordion-reveal',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.faq-accordion-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Bottom CTA reveal
    gsap.fromTo(
      '.faq-cta-reveal',
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.faq-cta-reveal',
          start: 'top 90%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section bg-background overflow-hidden"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="faq-header-reveal mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            FAQ
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Find answers to common questions about our IT services, support, pricing, and more.
            Can&apos;t find what you&apos;re looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion-reveal">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/40 last:border-b-0"
              >
                <AccordionTrigger className="px-1 py-5 text-left text-base font-medium text-foreground transition-colors duration-200 hover:text-dcc-teal hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-1 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="faq-cta-reveal mt-10 rounded-2xl border border-dcc-teal/10 p-8 text-center mesh-gradient">
          <h3 className="mb-2 text-lg font-semibold text-foreground">Still have questions?</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Our team is ready to help you with any inquiries about our services.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 rounded-full bg-dcc-teal px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-dcc-teal-dark hover:shadow-lg hover:shadow-dcc-teal/20"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}