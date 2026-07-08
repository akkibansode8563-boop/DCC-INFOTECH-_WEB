'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

/* ═══════════════════════════════════════════
   useInView — Intersection Observer hook
   Premium viewport detection with margin
   ═══════════════════════════════════════════ */
export function useInView(options?: {
  once?: boolean;
  margin?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options?.once !== false) observer.unobserve(el);
        } else if (options?.once === false) {
          setIsInView(false);
        }
      },
      {
        rootMargin: options?.margin ?? '-80px',
        threshold: options?.threshold ?? 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.once, options?.margin, options?.threshold]);

  return { ref, isInView };
}

/* ═══════════════════════════════════════════
   useCountUp — Animated number counter
   Easing: easeOutExpo for premium feel
   ═══════════════════════════════════════════ */
export function useCountUp(
  end: number,
  duration: number = 2000,
  start: number = 0,
  trigger: boolean = true
) {
  const [value, setValue] = useState(start);
  const rafRef = useRef<number>();

  const easeOutExpo = useCallback((t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }, []);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      setValue(Math.floor(start + (end - start) * easedProgress));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, start, trigger, easeOutExpo]);

  return value;
}

/* ═══════════════════════════════════════════
   useScrollProgress — Track section scroll
   for parallax and progress effects
   ═══════════════════════════════════════════ */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}