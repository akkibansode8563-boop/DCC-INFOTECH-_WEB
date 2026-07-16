'use client';

import { Children, Fragment, isValidElement, ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { viewportOnce } from '@/lib/motion';

interface SplitRevealProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  /** Stagger delay between words, in seconds */
  stagger?: number;
  /** Delay before the first word starts, in seconds */
  delay?: number;
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: '0.5em' },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Splits text nodes into per-word motion.spans and staggers them in on scroll.
 * Non-text children (e.g. <span className="text-gradient">Word</span> for accent
 * words) are split internally too, so accent styling is preserved per-word.
 * Falls back to a plain, fully-visible render when reduced-motion is requested.
 */
export default function SplitReveal({
  children,
  as = 'h2',
  className,
  stagger = 0.045,
  delay = 0,
}: SplitRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = motion[as];

  let wordIndex = 0;

  const renderNode = (node: ReactNode): ReactNode => {
    if (typeof node === 'string') {
      const words = node.split(/(\s+)/).filter((w) => w.length > 0);
      return words.map((word, i) => {
        if (/^\s+$/.test(word)) return word;
        const idx = wordIndex++;
        return (
          <motion.span
            key={`${idx}-${word}`}
            variants={wordVariants}
            custom={idx}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        );
      });
    }
    if (isValidElement(node)) {
      const el = node as React.ReactElement<any>;
      return (
        <span className={el.props.className}>
          {Children.map(el.props.children, renderNode)}
        </span>
      );
    }
    return node;
  };

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {Children.map(children, renderNode)}
    </Tag>
  );
}
