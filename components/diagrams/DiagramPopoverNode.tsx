"use client";

import { useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface DiagramPopoverNodeProps {
  label: string;
  description?: string;
  emphasis?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Click-to-expand node for diagrams laid out with absolute positioning or a
 * fixed grid (Technology branching diagram, Private AI deployment diagram),
 * where an inline-expanding panel (see FlowStep) would reflow sibling
 * boxes. The description appears as a small anchored popover instead, so
 * the diagram's layout never shifts.
 */
export function DiagramPopoverNode({ label, description, emphasis, className, style }: DiagramPopoverNodeProps) {
  const [open, setOpen] = useState(false);
  const interactive = Boolean(description);

  return (
    <div className={cn("relative", className)} style={style}>
      <button
        type="button"
        onClick={() => interactive && setOpen((v) => !v)}
        aria-expanded={interactive ? open : undefined}
        className={cn(
          "flex h-full w-full items-center justify-center border px-3 text-center font-mono text-[11px] uppercase tracking-wide transition-colors sm:text-xs",
          emphasis
            ? "border-accent bg-accent/15 text-accent"
            : "border-border-dark bg-surface-alt text-on-dark-muted",
          interactive && "hover:border-on-dark-muted/70"
        )}
      >
        {label}
      </button>
      {open && description && (
        <div
          role="status"
          className="absolute left-1/2 top-full z-20 mt-2 w-48 -translate-x-1/2 border border-border-dark bg-surface px-3 py-2 text-left text-[11px] normal-case leading-relaxed text-on-dark-muted shadow-xl"
        >
          {description}
        </div>
      )}
    </div>
  );
}
