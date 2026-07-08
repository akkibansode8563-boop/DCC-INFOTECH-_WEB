'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Zap, Heart, Users, Clock, Award } from 'lucide-react';
import { useInView } from '@/hooks/use-premium';

const mission = {
  icon: Target,
  title: 'Our Mission',
  text: 'To make IT accessible to every individual that empowers their growth, and thereby fuels the growth of the whole nation. Being a client-centric multichannel IT distribution and service company, our values start and revolve around client satisfaction.',
};

const vision = {
  icon: Eye,
  title: 'Our Vision',
  text: 'When India thinks IT, they think DCC.',
};

const values = [
  {
    icon: Zap,
    title: 'Ambition',
    description: 'Having a humble beginning, it\'s the ambition that has helped us achieve what we have today. The same ambition that all DCCians share in common.',
    color: 'bg-dcc-teal/10 text-dcc-teal group-hover:bg-dcc-teal group-hover:text-white',
  },
  {
    icon: Clock,
    title: 'Speed',
    description: 'Technology moves fast; we move faster. Since 1992, DCC has set the pace in IT distribution and service, ensuring the right products and world-class support are delivered exactly when needed.',
    color: 'bg-dcc-amber/10 text-dcc-amber-dark group-hover:bg-dcc-amber group-hover:text-white',
  },
  {
    icon: Award,
    title: 'Honesty',
    description: 'Where ambition fuels our growth, it\'s the honesty that has kept it intact. Honesty in products and services that enhance the customer experience.',
    color: 'bg-dcc-teal/10 text-dcc-teal group-hover:bg-dcc-teal group-hover:text-white',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'It\'s the teamwork that is making the dream work. Dream to become a reliable tech partner for every individual.',
    color: 'bg-dcc-amber/10 text-dcc-amber-dark group-hover:bg-dcc-amber group-hover:text-white',
  },
  {
    icon: Target,
    title: 'Hard Work',
    description: 'A thousand hardworking hands ensuring the right products and services are available at the right place and at the right time.',
    color: 'bg-dcc-teal/10 text-dcc-teal group-hover:bg-dcc-teal group-hover:text-white',
  },
  {
    icon: Heart,
    title: 'Happiness',
    description: 'Ambition, honesty, hard work, teamwork, and speed lead to one single goal: happiness for our clients, partners, and employees.',
    color: 'bg-dcc-amber/10 text-dcc-amber-dark group-hover:bg-dcc-amber group-hover:text-white',
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

export default function MissionVisionValues() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' });

  return (
    <section
      id="mission-vision"
      className="section bg-muted/20"
      ref={ref}
      aria-label="Mission, Vision and Values"
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
            Our Purpose
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Mission, Vision &{' '}
            <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The guiding principles that have shaped DCC into India&apos;s trusted IT partner
            over 34 years of service excellence.
          </p>
        </motion.div>

        {/* Mission & Vision — side by side */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeInUp}
            className="card-premium group rounded-2xl p-8"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-dcc-teal/10 transition-all duration-300 group-hover:bg-dcc-teal group-hover:shadow-lg group-hover:shadow-dcc-teal/20">
              <mission.icon className="h-7 w-7 text-dcc-teal transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">{mission.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{mission.text}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            variants={fadeInUp}
            className="card-premium group rounded-2xl p-8 border-dcc-amber/20 bg-gradient-to-br from-dcc-amber/5 to-transparent"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-dcc-amber/10 transition-all duration-300 group-hover:bg-dcc-amber group-hover:shadow-lg group-hover:shadow-dcc-amber/20">
              <vision.icon className="h-7 w-7 text-dcc-amber transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">{vision.title}</h3>
            <p className="text-2xl font-bold text-gradient leading-snug">{vision.text}</p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-foreground">
            Our Core <span className="text-gradient">Values</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 4}
              variants={fadeInUp}
              className="card-premium group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${value.color}`}
              >
                <value.icon className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-foreground">{value.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}