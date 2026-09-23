"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  as?: "div" | "li";
}

// The characteristic "decelerate" curve used across Apple's product pages —
// fast start, long soft landing.
const APPLE_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-triggered reveal: blur-to-focus + subtle scale-up + rise, rather
 * than a flat opacity/translateY fade. Runs once per element via
 * `whileInView`, and collapses to a plain instant appearance under
 * `prefers-reduced-motion`.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  if (reduceMotion) {
    const Plain = as === "li" ? "li" : "div";
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay: delay / 1000, ease: APPLE_EASE }}
    >
      {children}
    </Tag>
  );
}
