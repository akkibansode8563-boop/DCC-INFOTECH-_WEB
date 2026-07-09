'use client';

import { useRef } from 'react';
import { Briefcase, TrendingUp, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(
      '.careers-header-reveal',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.careers-header-reveal',
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Jobs reveal
    gsap.fromTo(
      '.careers-jobs-reveal',
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.careers-jobs-reveal',
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Perks card reveal
    gsap.fromTo(
      '.careers-perks-reveal',
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.careers-perks-reveal',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="section bg-muted/20 overflow-hidden"
      aria-label="Career opportunities"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="careers-header-reveal mx-auto mb-16 max-w-3xl text-center">
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
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Job openings */}
          <div className="careers-jobs-reveal lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold text-foreground">Current Openings</h3>
            <div className="space-y-4">
              {openings.map((job) => (
                <div
                  key={job.title}
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
                    className="shrink-0 self-start rounded-full border-dcc-teal text-dcc-teal transition-all duration-300 hover:bg-dcc-teal hover:text-white sm:self-center cursor-pointer"
                    onClick={() =>
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Perks sidebar */}
          <div className="careers-perks-reveal">
            <div className="glass sticky top-28 rounded-2xl p-6 select-none">
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
                  className="w-full rounded-full bg-dcc-teal font-semibold text-white shadow-lg shadow-dcc-teal/20 transition-all duration-300 hover:bg-dcc-teal-dark cursor-pointer"
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Send Your Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}