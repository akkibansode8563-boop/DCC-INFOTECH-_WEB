'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Anil Mhaske',
    role: 'Managing Director',
    bio: 'Founder of DCC Infotech with 30+ years of IT industry experience. Led the company from a small reseller to one of Pune\'s top IT solutions providers.',
    initials: 'AM',
    color: 'from-dcc-teal to-dcc-teal-dark',
  },
  {
    name: 'Sachin Khendake',
    role: 'Technical Director',
    bio: 'Expert in IT infrastructure, networking, and server management. Oversees all technical operations and ensures delivery excellence.',
    initials: 'SK',
    color: 'from-dcc-amber to-dcc-amber-dark',
  },
  {
    name: 'Neha Mhaske',
    role: 'Operations Head',
    bio: 'Manages daily operations, vendor relationships, and client coordination. Ensures smooth execution of all projects and services.',
    initials: 'NM',
    color: 'from-dcc-teal-light to-dcc-teal',
  },
  {
    name: 'Rahul Patil',
    role: 'Sales Manager',
    bio: 'Leads the sales team with focus on corporate accounts and distribution channels. Brings extensive knowledge of IT products and market trends.',
    initials: 'RP',
    color: 'from-dcc-slate-light to-dcc-slate',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section id="team" className="section-padding bg-muted/30" ref={ref}>
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
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dcc-slate mb-5">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our experienced team of IT professionals is dedicated to providing you with the best
            solutions and support for all your technology needs.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              variants={fadeInUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-transparent hover:border-dcc-teal/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Avatar area */}
              <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  {member.initials}
                </div>
                {/* Decorative */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-dcc-teal/5" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-dcc-slate">{member.name}</h3>
                <p className="text-dcc-teal text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-muted hover:bg-dcc-teal flex items-center justify-center text-muted-foreground hover:text-white transition-all"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-muted hover:bg-dcc-teal flex items-center justify-center text-muted-foreground hover:text-white transition-all"
                    aria-label={`${member.name} Email`}
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}