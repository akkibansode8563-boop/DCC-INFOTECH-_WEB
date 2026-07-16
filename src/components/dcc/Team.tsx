'use client';

import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import SplitReveal from '@/components/motion/SplitReveal';

const team = [
  { name: 'Mr. Anil Mhaske', role: 'Managing Director', bio: "Founder and visionary behind DCC's 35+ year journey. Built a service-first company from the ground up into a company that India's biggest banks, government bodies, and enterprises trust with their IT.", initials: 'AM', gradient: 'from-dcc-teal to-dcc-teal-dark' },
  { name: 'Mr. Sharad Mulmule', role: 'Director – Operations', bio: 'With an inspiring 27-year trajectory at DCC rising from an entry-level professional to executive leadership through sheer integrity and dedication, Mr. Mulmule is the driving force behind our operational stability.', initials: 'SM', gradient: 'from-dcc-brass to-dcc-brass-dark' },
  { name: 'Mr. Jaysingh Jadhav', role: 'Director – Sales & Marketing', bio: "Bringing 25 years of strategic market expertise and an MBA from Pune University, Mr. Jadhav is the architect of DCC's sales pipeline and territory expansion across B2B clientele.", initials: 'JJ', gradient: 'from-dcc-teal-light to-dcc-teal' },
  { name: 'Mr. Sharad Londhe', role: 'Director – Service', bio: 'Holding a BE in Electronics from Pune University and backed by 16 years at DCC, Mr. Londhe spearheads our multi-state service infrastructure with over 400 engineers and 3,000+ active AMC customers.', initials: 'SL', gradient: 'from-dcc-slate-light to-dcc-slate' },
  { name: 'Mr. Lahuraj Gaikwad', role: 'Director – HR & Admin', bio: 'With 18 years of progressive leadership at DCC, Mr. Gaikwad oversees a dynamic workforce of 675+ employees, utilizing data-driven HR strategies to foster diversity and maximize productivity.', initials: 'LG', gradient: 'from-dcc-brass to-dcc-brass-dark' },
  { name: 'Mr. Jeevan Kadam', role: 'Director – Public Relations', bio: 'An integral part of DCC for 30 years, Mr. Kadam holds a Diploma in Digital Engineering, masterfully bridging technology with corporate communication through strategic PR campaigns.', initials: 'JK', gradient: 'from-dcc-teal to-dcc-teal-dark' },
  { name: 'Mr. Aniruddha Mhaske', role: 'Director – Business Development', bio: 'Representing the second generation of DCC leadership, Mr. Mhaske brings global operational experience from Walmart (US), Katek Inc. (Canada), and Skip (Netherlands). Spearheading PAN-India presence by 2030.', initials: 'AMk', gradient: 'from-dcc-teal-light to-dcc-teal' },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="team" ref={sectionRef} className="section bg-muted/20 overflow-hidden" aria-label="Our team">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="ledger-mark justify-center">
            <span className="ledger-index">07</span>
            <span className="ledger-rule" />
            Our Team
          </div>
          <SplitReveal as="h2" className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Meet the <span className="text-gradient">Leaders</span>
          </SplitReveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A leadership team with over 150+ years of combined experience, driving DCC&apos;s mission
            to be India&apos;s most trusted IT partner across 12+ states.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="flex flex-wrap justify-center gap-6"
        >
          {team.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="card-premium group overflow-hidden rounded-2xl select-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[300px] hover:shadow-2xl hover:shadow-dcc-teal/10 hover:border-dcc-teal/30"
            >
              <div className="flex h-48 items-center justify-center bg-muted/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-radial from-dcc-teal/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150" />
                <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} font-bold text-2xl text-white shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 z-10 font-heading`}>
                  {member.initials}
                </div>
              </div>

              <div className="p-6 transition-all duration-300 group-hover:bg-dcc-teal/[0.015]">
                <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-dcc-teal font-heading">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-dcc-teal/80 transition-colors duration-300 group-hover:text-dcc-teal">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">{member.bio}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href="https://www.linkedin.com/company/dcc-infotech-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 hover:bg-dcc-teal hover:text-white hover:scale-110"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="mailto:info@dccinfotech.in"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 hover:bg-dcc-teal hover:text-white hover:scale-110"
                    aria-label={`${member.name} Email`}
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
