"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Subtle scroll parallax: the wrapped card drifts slower than the page as
 * it scrolls past, giving it a sense of depth against the flat background —
 * the small touch that makes a static hero graphic feel like part of a
 * physical scene rather than pasted on top of the page.
 */
export function ParallaxCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1, reduceMotion ? -1 : 1.5]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={reduceMotion ? undefined : { y, rotate }}
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
