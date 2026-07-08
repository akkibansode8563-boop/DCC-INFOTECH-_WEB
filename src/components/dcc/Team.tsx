'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useInView } from '@/hooks/use-premium';

const team = [
  {
    name: 'Mr. Anil Mhaske',
    role: 'Managing Director',
    bio: 'Founder and visionary behind DCC\'s 35+ year journey. Built a service-first company from the ground up into a company that India\'s biggest banks, government bodies, and enterprises trust with their IT.',
    initials: 'AM',
    gradient: 'from-dcc-teal to-dcc-teal-dark',
  },
  {
    name: 'Mr. Sharad Mulmule',
    role: 'Director – Operations',
    bio: 'With an inspiring 27-year trajectory at DCC rising from an entry-level professional to executive leadership through sheer integrity and dedication, Mr. Mulmule is the driving force behind our operational stability.',
    initials: 'SM',
    gradient: 'from-dcc-amber to-dcc-amber-dark',
  },
  {
    name: 'Mr. Jaysingh Jadhav',
    role: 'Director – Sales & Marketing',
    bio: 'Bringing 25 years of strategic market expertise and an MBA from Pune University, Mr. Jadhav is the architect of DCC\'s sales pipeline and territory expansion across B2B clientele.',
    initials: 'JJ',
    gradient: 'from-dcc-teal-light to-dcc-teal',
  },
  {
    name: 'Mr. Sharad Londhe',
    role: 'Director – Service',
    bio: 'Holding a BE in Electronics from Pune University and backed by 16 years at DCC, Mr. Londhe spearheads our multi-state service infrastructure with over 400 engineers and 3,000+ active AMC customers.',
    initials: 'SL',
    gradient: 'from-dcc-slate-light to-dcc-slate',
  },
  {
    name: 'Mr. Lahuraj Gaikwad',
    role: 'Director – HR & Admin',
    bio: 'With 18 years of progressive leadership at DCC, Mr. Gaikwad oversees a dynamic workforce of 675+ employees, utilizing data-driven HR strategies to foster diversity and maximize productivity.',
    initials: 'LG',
    gradient: 'from-dcc-amber to-dcc-amber-dark',
  },
  {
    name: 'Mr. Jeevan Kadam',
    role: 'Director – Public Relations',
    bio: 'An integral part of DCC for 30 years, Mr. Kadam holds a Diploma in Digital Engineering, masterfully bridging technology with corporate communication through strategic PR campaigns.',
    initials: 'JK',
    gradient: 'from-dcc-teal to-dcc-teal-dark',
  },
  {
    name: 'Mr. Aniruddha Mhaske',
    role: 'Director – Business Development',
    bio: 'Representing the second generation of DCC leadership, Mr. Mhaske brings global operational experience from Walmart (US), Katek Inc. (Canada), and Skip (Netherlands). Spearheading PAN-India presence by 2030.',
    initials: 'AMk',
    gradient: 'from-dcc-teal-light to-dcc-teal',
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
            Meet the <span className="text-gradient">Leaders</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A leadership team with over 150+ years of combined experience, driving DCC&apos;s mission
            to be India&apos;s most trusted IT partner across 12+ states.
          </p>
        </motion.div>

        {/* Team grid — 4 columns, 7 members (4+3) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              variants={fadeInUp}
              className={`card-premium group overflow-hidden rounded-2xl ${
                i >= 4 ? 'lg:col-span-1 lg:mx-auto lg:max-w-[calc(25%-1.5rem)]' : ''
              }`}
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