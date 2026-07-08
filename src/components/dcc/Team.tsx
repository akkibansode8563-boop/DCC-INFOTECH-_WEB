'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useInView } from '@/hooks/use-premium';

const team = [
  {
    name: 'Anil Mhaske',
    role: 'Managing Director',
    bio: 'Founder of DCC Infotech with 30+ years of IT industry experience. Led the company from a small reseller to one of Pune\'s top IT solutions providers.',
    initials: 'AM',
    gradient: 'from-dcc-teal to-dcc-teal-dark',
  },
  {
    name: 'Sachin Khendake',
    role: 'Technical Director',
    bio: 'Expert in IT infrastructure, networking, and server management. Oversees all technical operations and ensures delivery excellence.',
    initials: 'SK',
    gradient: 'from-dcc-amber to-dcc-amber-dark',
  },
  {
    name: 'Neha Mhaske',
    role: 'Operations Head',
    bio: 'Manages daily operations, vendor relationships, and client coordination. Ensures smooth execution of all projects and services.',
    initials: 'NM',
    gradient: 'from-dcc-teal-light to-dcc-teal',
  },
  {
    name: 'Rahul Patil',
    role: 'Sales Manager',
    bio: 'Leads the sales team with focus on corporate accounts and distribution channels. Brings extensive knowledge of IT products and market trends.',
    initials: 'RP',
    gradient: 'from-dcc-slate-light to-dcc-slate',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Team() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });

  return (
    <section
      id="team"
      className="section bg-muted/20"
      ref={ref}
      aria-label="Our team"
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
            Our Team
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Meet the <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our experienced team of IT professionals is dedicated to providing you with the best
            solutions and support for all your technology needs.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              variants={fadeInUp}
              className="card-premium group overflow-hidden rounded-2xl"
            >
              {/* Avatar area */}
              <div className="flex h-48 items-center justify-center bg-muted/40">
                <motion.div
                  className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} font-bold text-2xl text-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-dcc-teal/20`}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.initials}
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-dcc-teal">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 hover:bg-dcc-teal hover:text-white hover:scale-110"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 hover:bg-dcc-teal hover:text-white hover:scale-110"
                    aria-label={`${member.name} Email`}
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}