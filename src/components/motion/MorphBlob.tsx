'use client';

import { useEffect, useRef, useState, useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MorphBlobProps {
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  opacity?: number;
  duration?: number;
}

// Four path variants, all built on the same 8-point structure so Framer Motion
// can interpolate the `d` string directly (matching command/point count is
// what makes cross-shape "d" tweening work without a paid morphing plugin).
const PATHS = [
  'M300,80 C420,80 480,180 460,280 C440,380 380,460 280,460 C180,460 100,400 90,300 C80,200 140,100 220,90 C250,86 275,80 300,80 Z',
  'M300,60 C400,90 470,150 470,260 C470,370 400,440 300,450 C200,460 110,410 90,310 C70,210 120,120 210,90 C245,78 270,55 300,60 Z',
  'M290,90 C390,70 470,140 470,250 C470,360 420,450 310,460 C200,470 100,420 90,310 C80,200 150,110 240,90 C260,86 275,93 290,90 Z',
  'M300,80 C420,80 480,180 460,280 C440,380 380,460 280,460 C180,460 100,400 90,300 C80,200 140,100 220,90 C250,86 275,80 300,80 Z',
];

export default function MorphBlob({
  className,
  colorFrom = '#0d5c5c',
  colorTo = '#c9962f',
  opacity = 0.1,
  duration = 12,
}: MorphBlobProps) {
  const shouldReduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const randomId = useId();
  const gradientId = `morphblob-${randomId.replace(/:/g, '')}`;

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={className} aria-hidden="true">
      <svg viewBox="0 0 560 540" className="h-full w-full" style={{ opacity, willChange: 'auto' }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>
        <motion.path
          fill={`url(#${gradientId})`}
          d={PATHS[0]}
          animate={
            shouldReduceMotion || !inView
              ? undefined
              : { d: PATHS }
          }
          transition={{ duration, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
          style={{ willChange: 'auto' }}
        />
      </svg>
    </div>
  );
}
