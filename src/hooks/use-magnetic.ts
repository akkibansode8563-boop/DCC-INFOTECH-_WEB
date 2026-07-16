'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * Magnetic hover effect: the element gently translates toward the pointer
 * when the cursor is within `radius` px of its bounding box, and springs
 * back on leave. Desktop-only — no-ops on touch/coarse-pointer devices so
 * it never interferes with tap accuracy on mobile.
 */
export function useMagnetic(radius = 60, strength = 0.35) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const reach = radius + Math.max(rect.width, rect.height) / 2;

      const MAX_PULL = 8;

      if (dist < reach) {
        const pullX = dx * strength * (1 - dist / reach) * 0.6;
        const pullY = dy * strength * (1 - dist / reach) * 0.6;
        x.set(Math.max(-MAX_PULL, Math.min(MAX_PULL, pullX)));
        y.set(Math.max(-MAX_PULL, Math.min(MAX_PULL, pullY)));
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', reset);
    };
  }, [radius, strength, x, y]);

  return { ref, style: { x: springX, y: springY } };
}
