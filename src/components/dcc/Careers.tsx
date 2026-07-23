'use client';

import { useRef } from 'react';
import { Briefcase, TrendingUp, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '@/lib/motion';

const openings = [
  { title: 'Senior Network Engineer', department: 'Technical', type: 'Full-time', location: 'Pune', icon: TrendingUp },
  { title: 'IT Sales Executive', department: 'Sales', type: 'Full-time', location: 'Pune', icon: Users },
  { title: 'Field Service Technician', department: 'Operations', type: 'Full-time', location: 'Pune', icon: Briefcase },
  { title: 'Junior Software Developer', department: 'Development', type: 'Full-time / Intern', location: 'Pune', icon: GraduationCap },
];

const perks = [
  'Competitive salary & incentives',
  'Health insurance coverage',
  'Learning & development programs',
  'Friendly work environment',
  'Career growth opportunities',
  'Team outings & events',
];

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="careers" ref={sectionRef} className="section bg-muted/20 overflow-hidden" aria-label="Career opportunities">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="ledger-mark justify-center">
            <span className="ledger-index">10</span>
            <span className="ledger-rule" />
            Careers
          </div>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Join Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We are always looking for talented and passionate individuals to join our growing team.
            Build your career with one of Pune&apos;s most trusted IT companies.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.09)}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-xl font-bold text-foreground font-heading">Current Openings</h3>
            <div className="space-y-4">
              {openings.map((job) => (
                <motion.div
                  key={job.title}
                  variants={fadeLeft}
                  className="card-premium group flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between select-none"
                >
                  <div className="flex items-start gap-4 sm:items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dcc-teal/10 transition-all duration-300 group-hover:bg-dcc-teal">
                      <job.icon className="h-5 w-5 text-dcc-teal transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground transition-colors duration-300 group-hover:text-dcc-teal">
                        {job.title}
                      </h4>
                      <div className="mt-1.5 flex flex-wrap gap-2">
                        <span className="rounded-full bg-dcc-teal/10 px-2 py-0.5 text-xs text-dcc-teal">{job.department}</span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{job.type}</span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 self-start rounded-full border-dcc-teal text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white sm:self-center cursor-pointer"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeRight}>
            <div className="glass sticky top-28 rounded-2xl p-6 select-none">
              <h3 className="mb-4 text-lg font-bold text-foreground font-heading">Why Work With Us?</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                At DCC Infotech, we believe our people are our greatest asset. Here&apos;s what makes
                us a great place to work:
              </p>
              <ul className="space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2.5 text-sm text-foreground">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dcc-teal/20">
                      <div className="h-2 w-2 rounded-full bg-dcc-teal" />
                    </div>
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border/50 pt-5">
                <p className="mb-3 text-sm text-muted-foreground">
                  Don&apos;t see a role that fits? We&apos;d still love to hear from you!
                </p>
                <a href="mailto:hrgroup@datacare.in?subject=Resume%20Submission">
                  <Button className="w-full rounded-full bg-dcc-teal font-semibold text-white shadow-lg shadow-dcc-teal/20 transition-all duration-300 hover:bg-dcc-teal-dark cursor-pointer">
                    Send Your Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
