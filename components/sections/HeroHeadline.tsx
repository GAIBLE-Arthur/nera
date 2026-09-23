"use client";

import { motion, useReducedMotion } from "framer-motion";

const APPLE_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Word-by-word blur-in reveal for the hero headline — runs once on mount
 * (this is above the fold, so it's a load-in, not a scroll trigger).
 */
export function HeroHeadline({ text, className }: { text: string; className?: string }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: APPLE_EASE }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
