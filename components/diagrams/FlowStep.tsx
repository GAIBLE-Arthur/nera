"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

interface FlowStepProps {
  label: string;
  description?: string;
  emphasis?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

/**
 * A single labeled, click-to-expand node used across every diagram on the
 * site. Click/tap toggles a short explanation, so the diagrams are
 * interactive identically on desktop and touch devices (no hover-only
 * behavior). Nodes without a `description` render as plain, non-interactive
 * boxes.
 */
export function FlowStep({ label, description, emphasis, theme = "dark", className }: FlowStepProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const isDark = theme === "dark";
  const interactive = Boolean(description);

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <button
        type="button"
        onClick={() => interactive && setOpen((v) => !v)}
        aria-expanded={interactive ? open : undefined}
        aria-controls={interactive ? panelId : undefined}
        className={cn(
          "flex h-full w-full flex-1 flex-col items-center justify-center gap-1 border px-5 py-4 text-center transition-all duration-200",
          emphasis
            ? "border-accent bg-accent/10"
            : isDark
              ? "border-border-dark bg-surface-alt"
              : "border-border bg-paper",
          interactive && (isDark ? "hover:border-on-dark-muted/60" : "hover:border-ink/40"),
          open && "ring-2 ring-accent/50",
          !interactive && "cursor-default"
        )}
      >
        <span
          className={cn(
            "text-sm font-semibold tracking-tight sm:text-base",
            emphasis ? "text-accent" : isDark ? "text-on-dark" : "text-ink"
          )}
        >
          {label}
        </span>
        {interactive && (
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 text-[10px] transition-all duration-200",
              open ? "rotate-180 text-accent" : isDark ? "text-on-dark-muted" : "text-muted"
            )}
          >
            ⌄
          </span>
        )}
      </button>

      {interactive && (
        <div
          id={panelId}
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out",
            open ? "mt-1.5 max-h-32 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <p
            className={cn(
              "border px-3.5 py-2.5 text-left text-xs leading-relaxed",
              isDark ? "border-border-dark bg-surface text-on-dark-muted" : "border-border bg-paper text-muted"
            )}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
