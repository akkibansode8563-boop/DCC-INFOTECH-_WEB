'use client';

import { useRef, useEffect } from 'react';
import { Target, Eye } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring, useAnimate, useInView } from 'framer-motion';

// custom SVGs for the premium look
const IconAmbition = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <path d="M24 4C30 8 35 16 35 24c0 4-1 7-2 9l-9 9-9-9c-1-2-2-5-2-9 0-8 5-16 11-20z" fill="#fff" fillOpacity=".92"/>
    <circle cx="24" cy="21" r="5" fill="#0d5c5c"/>
    <path d="M15 33l-4 9 8-3M33 33l4 9-8-3" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
  </svg>
);

const IconSpeed = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <circle cx="24" cy="26" r="16" fill="#fff" fillOpacity=".92"/>
    <circle cx="24" cy="26" r="16" stroke="#c9962f" strokeWidth="2"/>
    <path d="M24 26 L24 14" stroke="#c9962f" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 26 L32 30" stroke="#c9962f" strokeWidth="3" strokeLinecap="round"/>
    <rect x="19" y="4" width="10" height="5" rx="2.5" fill="#c9962f"/>
    <circle cx="24" cy="26" r="2" fill="#c9962f"/>
  </svg>
);

const IconHonesty = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <path d="M24 5 8 11v10c0 11 7 18 16 22 9-4 16-11 16-22V11L24 5z" fill="#fff" fillOpacity=".92"/>
    <path d="M17 24l5 5 10-11" stroke="#0d5c5c" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const IconTeamwork = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <circle cx="17" cy="17" r="6" fill="#fff" fillOpacity=".92"/>
    <circle cx="31" cy="18" r="5" fill="#fff" fillOpacity=".75"/>
    <path d="M6 40c0-7 5-11 11-11s11 4 11 11" fill="#fff" fillOpacity=".92"/>
    <path d="M25 30c5 0 9 3.5 9 10" stroke="#fff" strokeOpacity=".75" strokeWidth="4" stroke-linecap="round" fill="none"/>
  </svg>
);

const IconHardwork = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <path d="M39 20.5l-4-1-1.5-3.6 2.3-3.5-3-3-3.5 2.3-3.6-1.5-1-4h-4.4l-1 4-3.6 1.5-3.5-2.3-3 3 2.3 3.5-1.5 3.6-4 1V25l4 1 1.5 3.6-2.3 3.5 3 3 3.5-2.3 3.6 1.5 1 4h4.4l1-4 3.6-1.5 3.5 2.3 3-3-2.3-3.5 1.5-3.6 4-1v-4.5z" fill="#fff" fillOpacity=".92"/>
    <circle cx="24" cy="22.75" r="7" fill="#0d5c5c"/>
  </svg>
);

const IconHappiness = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <path d="M24 39s-14-8.6-18.4-17.3C2.7 15.7 6 9 12.5 9 17.5 9 21.5 12.5 24 16c2.5-3.5 6.5-7 11.5-7 6.5 0 9.8 6.7 6.9 12.7C38 30.4 24 39 24 39z" fill="#fff" fillOpacity=".92"/>
    <path d="M17 22.5l4.5 4.5 9-9.5" stroke="#c9962f" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".6"/>
  </svg>
);

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

const valuesData = [
  {
    index: '01',
    title: 'Ambition',
    description: "Having a humble beginning, it's the ambition that has helped us achieve what we have today. The same ambition that all DCCians share in common.",
    icon: IconAmbition,
    gradient: 'linear-gradient(135deg, #0d5c5c, #1d9e75)',
    hero: true,
  },
  {
    index: '02',
    title: 'Speed',
    description: 'Technology moves fast; we move faster. Since 1992, DCC has set the pace in IT distribution and service, delivering the right products exactly when needed.',
    icon: IconSpeed,
    gradient: 'linear-gradient(135deg, #c9962f, #e8bd6a)',
    hero: false,
  },
  {
    index: '03',
    title: 'Honesty',
    description: "Where ambition fuels our growth, it's the honesty that has kept it intact — honesty in products and services that enhance the customer experience.",
    icon: IconHonesty,
    gradient: 'linear-gradient(135deg, #0d5c5c, #1d9e75)',
    hero: false,
  },
  {
    index: '04',
    title: 'Teamwork',
    description: "It's the teamwork that is making the dream work — the dream to become a reliable tech partner for every individual.",
    icon: IconTeamwork,
    gradient: 'linear-gradient(135deg, #c9962f, #e8bd6a)',
    hero: false,
  },
  {
    index: '05',
    title: 'Hard work',
    description: 'A thousand hardworking hands ensuring the right products and services are available at the right place and at the right time.',
    icon: IconHardwork,
    gradient: 'linear-gradient(135deg, #0d5c5c, #1d9e75)',
    hero: false,
  },
  {
    index: '06',
    title: 'Happiness',
    description: 'Ambition, honesty, hard work, teamwork, and speed lead to one single goal: happiness for our clients, partners, and employees.',
    icon: IconHappiness,
    gradient: 'linear-gradient(135deg, #c9962f, #e8bd6a)',
    hero: false,
  },
];

// Rolling counter component for card indexes
function RollingIndex({ indexStr, triggerRef }: { indexStr: string; triggerRef: React.RefObject<any> }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(triggerRef, { once: true, margin: '-60px' });

  useEffect(() => {
    if (isInView) {
      const targetVal = parseInt(indexStr, 10);
      animate(0, targetVal, {
        duration: 0.9,
        ease: 'easeOut',
        onUpdate: (latest) => {
          if (scope.current) {
            scope.current.textContent = String(Math.round(latest)).padStart(2, '0');
          }
        }
      });
    }
  }, [isInView, animate, indexStr, scope, triggerRef]);

  return <span ref={scope} className="value-index">00</span>;
}

// Individual 3D Interactive Card
function ValueCard({
  value,
  index,
  gridRef,
}: {
  value: (typeof valuesData)[0];
  index: number;
  gridRef: React.RefObject<any>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for coordinates
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map to rotations
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 200, damping: 25 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handlePointerLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const IconComponent = value.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ y: 40, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: 'easeOut', delay: index * 0.08 }}
      className={`value-card ${value.hero ? 'hero' : ''}`}
    >
      <div className="value-card-top">
        <div className="value-icon-badge" style={{ background: value.gradient }}>
          <IconComponent />
        </div>
        <RollingIndex indexStr={value.index} triggerRef={gridRef} />
      </div>
      <h3 className="font-heading font-bold text-foreground text-slate-800">{value.title}</h3>
      <p className="desc text-muted-foreground font-sans-inter mt-2 leading-relaxed">{value.description}</p>
    </motion.div>
  );
}

export default function MissionVisionValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="mission-vision"
      ref={sectionRef}
      className="section bg-muted/20 overflow-hidden relative"
      aria-label="Mission, Vision and Values"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-gradient-to-br from-teal-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-gradient-to-br from-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Embedded CSS for custom styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .values-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
        }
        .value-card {
          position: relative;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(18, 32, 29, 0.09);
          border-radius: 22px;
          padding: 28px 26px 30px;
          overflow: hidden;
          grid-column: span 2;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(18, 32, 29, .05), 0 12px 28px -18px rgba(18, 32, 29, .18);
          transition: box-shadow 0.4s ease;
          transform-style: preserve-3d;
        }
        .value-card.hero {
          grid-column: span 3;
        }
        .value-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 1px;
          background: linear-gradient(135deg, #1d9e75, #e8bd6a);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .value-card:hover::before {
          opacity: 1;
        }
        .value-card:hover {
          box-shadow: 0 1px 3px rgba(18, 32, 29, .06), 0 20px 40px -18px rgba(13, 92, 92, .28);
        }
        .value-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .value-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: #526059;
          opacity: 0.55;
          padding-top: 6px;
        }
        .value-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, .5), 0 6px 14px -6px rgba(18, 32, 29, .25);
        }
        .value-card.hero .value-icon-badge {
          width: 64px;
          height: 64px;
          border-radius: 18px;
        }
        @media (max-width: 860px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .value-card {
            grid-column: span 2 !important;
          }
        }
      `}} />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-dcc-teal">
            Our Purpose
          </span>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-heading">
            Mission, Vision &{' '}
            <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground font-sans-inter">
            The guiding principles that have shaped DCC into India&apos;s trusted IT partner
            over 34 years of service excellence.
          </p>
        </motion.div>

        {/* Mission & Vision — side by side */}
        <div className="mb-24 grid gap-6 md:grid-cols-2">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="card-premium group rounded-2xl p-8 select-none"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-dcc-teal/10 transition-all duration-300 group-hover:bg-dcc-teal group-hover:shadow-lg group-hover:shadow-dcc-teal/20">
              <Target className="h-7 w-7 text-dcc-teal transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground font-heading">{mission.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground font-sans-inter">{mission.text}</p>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="card-premium group rounded-2xl p-8 border-dcc-amber/20 bg-gradient-to-br from-dcc-amber/5 to-transparent select-none"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-dcc-amber/10 transition-all duration-300 group-hover:bg-dcc-amber group-hover:shadow-lg group-hover:shadow-dcc-amber/20">
              <Eye className="h-7 w-7 text-dcc-amber transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground font-heading">{vision.title}</h3>
            <p className="text-2xl font-bold text-gradient leading-snug font-heading">{vision.text}</p>
          </motion.div>
        </div>

        {/* Values Section Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-left mb-12"
        >
          <p className="eyebrow">What drives us</p>
          <h2 className="font-heading font-extrabold text-slate-900 mt-2">
            Our core <span className="text-gradient">values</span>
          </h2>
          <p className="text-muted-foreground font-sans-inter max-w-lg mt-2 leading-relaxed">
            Six principles that have carried DCC Infotech from a 10x10 room in Pune to a national distribution network.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div ref={gridRef} className="values-grid">
          {valuesData.map((value, idx) => (
            <ValueCard key={value.title} value={value} index={idx} gridRef={gridRef} />
          ))}
        </div>
      </div>
    </section>
  );
}