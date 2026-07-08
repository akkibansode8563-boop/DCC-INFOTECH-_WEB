'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section id="careers" className="section-padding bg-muted/30" ref={ref}>
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
            Careers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dcc-slate mb-5">
            Join Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are always looking for talented and passionate individuals to join our growing team.
            Build your career with one of Pune&apos;s most trusted IT companies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Job openings */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-dcc-slate mb-6">Current Openings</h3>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={i + 2}
                  variants={fadeInUp}
                  className="group bg-white rounded-xl p-5 flex items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md border border-transparent hover:border-dcc-teal/10 transition-all duration-300 flex-col sm:flex-row"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-dcc-teal/10 group-hover:bg-dcc-teal flex items-center justify-center shrink-0 transition-colors duration-300">
                      <job.icon className="h-5 w-5 text-dcc-teal group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dcc-slate group-hover:text-dcc-teal transition-colors">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        <span className="text-xs bg-dcc-teal/10 text-dcc-teal px-2 py-0.5 rounded-full">
                          {job.department}
                        </span>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                          {job.type}
                        </span>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-dcc-teal text-dcc-teal hover:bg-dcc-teal hover:text-white shrink-0 self-start sm:self-center"
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
            <div className="bg-gradient-to-br from-dcc-teal/5 to-dcc-teal/10 rounded-2xl p-6 border border-dcc-teal/10 sticky top-28">
              <h3 className="text-lg font-bold text-dcc-slate mb-4">Why Work With Us?</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                At DCC Infotech, we believe our people are our greatest asset. Here&apos;s what makes
                us a great place to work:
              </p>
              <ul className="space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2.5 text-sm text-dcc-slate">
                    <div className="w-5 h-5 rounded-full bg-dcc-teal/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-dcc-teal" />
                    </div>
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-dcc-teal/10">
                <p className="text-sm text-muted-foreground mb-3">
                  Don&apos;t see a role that fits? We&apos;d still love to hear from you!
                </p>
                <Button
                  className="w-full bg-dcc-teal hover:bg-dcc-teal-dark text-white rounded-full"
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