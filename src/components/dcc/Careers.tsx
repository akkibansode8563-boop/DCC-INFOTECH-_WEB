'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/use-premium';

const openings = [
  {
    title: 'Senior Network Engineer',
    department: 'Technical',
    type: 'Full-time',
    location: 'Pune',
    icon: TrendingUp,
  },
  {
    title: 'IT Sales Executive',
    department: 'Sales',
    type: 'Full-time',
    location: 'Pune',
    icon: Users,
  },
  {
    title: 'Field Service Technician',
    department: 'Operations',
    type: 'Full-time',
    location: 'Pune',
    icon: Briefcase,
  },
  {
    title: 'Junior Software Developer',
    department: 'Development',
    type: 'Full-time / Intern',
    location: 'Pune',
    icon: GraduationCap,
  },
];

const perks = [
  'Competitive salary & incentives',
  'Health insurance coverage',
  'Learning & development programs',
  'Friendly work environment',
  'Career growth opportunities',
  'Team outings & events',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Careers() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });

  return (
    <section
      id="careers"
      className="section bg-muted/20"
      ref={ref}
      aria-label="Career opportunities"
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
            Careers
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Join Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We are always looking for talented and passionate individuals to join our growing team.
            Build your career with one of Pune&apos;s most trusted IT companies.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Job openings */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-xl font-bold text-foreground">Current Openings</h3>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={i + 2}
                  variants={fadeInUp}
                  className="card-premium group flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between"
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
                        <span className="rounded-full bg-dcc-teal/10 px-2 py-0.5 text-xs text-dcc-teal">
                          {job.department}
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                          {job.type}
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 self-start rounded-full border-dcc-teal text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white sm:self-center"
                    onClick={() =>
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Apply Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Perks sidebar */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={7}
            variants={fadeInUp}
          >
            <div className="glass sticky top-28 rounded-2xl p-6">
              <h3 className="mb-4 text-lg font-bold text-foreground">Why Work With Us?</h3>
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
                <Button
                  className="w-full rounded-full bg-dcc-teal font-semibold text-white shadow-lg shadow-dcc-teal/20 transition-all duration-300 hover:bg-dcc-teal-dark"
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Send Your Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}