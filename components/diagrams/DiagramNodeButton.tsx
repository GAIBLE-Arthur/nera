import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface DiagramNodeButtonProps {
  label: string;
  active?: boolean;
  emphasis?: boolean;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * Plain button node for diagrams laid out with fixed/absolute positioning
 * (e.g. a branching diagram over an SVG connector overlay), where an
 * expanding panel or popover would overlap a neighboring node. Selecting a
 * node here never changes its size — the description it reveals is shown
 * in one shared caption area below the diagram instead (see
 * TechApproachDiagram), so nothing can ever get covered by a sibling.
 */
export function DiagramNodeButton({ label, active, emphasis, onClick, className, style }: DiagramNodeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={onClick ? Boolean(active) : undefined}
      style={style}
      className={cn(
        // Note: the parent positions this button via an inline `transform`
        // (translate), which always wins over a Tailwind transform utility
        // (scale) here — so active feedback uses ring/shadow, not scale.
        "flex items-center justify-center border px-3 text-center font-mono text-[11px] uppercase tracking-wide transition-all duration-200 sm:text-xs",
        emphasis
          ? "border-accent bg-accent/15 text-accent"
          : active
            ? "border-on-dark-muted bg-surface-alt text-on-dark"
            : "border-border-dark bg-surface-alt text-on-dark-muted",
        active && "ring-2 ring-accent/50",
        onClick && "hover:border-on-dark-muted/70",
        className
      )}
    >
      {label}
    </button>
  );
}
