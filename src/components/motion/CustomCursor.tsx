'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Fixed-position ring cursor. Mounted once at the root layout.
 * - Desktop only (pointer: fine); fully inert on touch devices.
 * - Respects prefers-reduced-motion by not rendering at all.
 * - mousemove is throttled via requestAnimationFrame — only one DOM update
 *   per frame, reducing CPU overhead from 60+ handler calls/sec.
 */
export default function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Slightly less stiff spring: feels smoother, composites on GPU
  const springX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.4 });

  // rAF throttle ref — ensures we set motion values at most once per frame
  const rafId = useRef<number | null>(null);
  const pendingPos = useRef<{ cx: number; cy: number } | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    const flush = () => {
      rafId.current = null;
      if (!pendingPos.current) return;
      const { cx, cy } = pendingPos.current;
      x.set(cx);
      y.set(cy);
      pendingPos.current = null;
    };

    const move = (e: MouseEvent) => {
      pendingPos.current = { cx: e.clientX, cy: e.clientY };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(flush);
      }
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('[data-cursor="hover"]'));
    };

    const hide = () => setVisible(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseleave', hide, { passive: true });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.style.cursor = 'none';
    return () => {
      document.documentElement.style.cursor = '';
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: hovering ? 50 : 28,
        height: hovering ? 50 : 28,
        borderColor: hovering ? 'rgba(201, 150, 47, 0.7)' : 'rgba(13, 92, 92, 0.55)',
        backgroundColor: hovering ? 'rgba(201, 150, 47, 0.12)' : 'transparent',
        opacity: visible ? 1 : 0,
        // CSS transition handles size/color — GPU composited, no JS cost
        transition: 'width 0.22s cubic-bezier(0.16,1,0.3,1), height 0.22s cubic-bezier(0.16,1,0.3,1), background-color 0.22s, border-color 0.22s, opacity 0.18s',
        willChange: 'transform',
      }}
    />
  );
}
