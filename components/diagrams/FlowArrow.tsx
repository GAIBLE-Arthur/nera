import { cn } from "@/lib/utils";

interface FlowArrowProps {
  direction?: "down" | "right";
  theme?: "light" | "dark";
  /** Staggers the traveling pulse so a row of arrows doesn't all pulse in
   * lockstep — pass e.g. `index * 250` when rendering several in a row. */
  delayMs?: number;
  className?: string;
}

export function FlowArrow({ direction = "down", theme = "dark", delayMs = 0, className }: FlowArrowProps) {
  const stroke = theme === "dark" ? "var(--color-on-dark-muted)" : "var(--color-muted)";
  const isDown = direction === "down";

  return (
    <svg
      aria-hidden="true"
      viewBox={isDown ? "0 0 24 40" : "0 0 40 24"}
      className={cn(isDown ? "h-8 w-5" : "h-5 w-8", className)}
    >
      {isDown ? (
        <>
          <path d="M12 0 V32 M4 24 L12 34 L20 24" fill="none" stroke={stroke} strokeWidth="1.5" />
          <circle cx="12" cy="1" r="2" fill="var(--color-accent)" className="animate-flow-down" style={{ animationDelay: `${delayMs}ms` }} />
        </>
      ) : (
        <>
          <path d="M0 12 H32 M24 4 L34 12 L24 20" fill="none" stroke={stroke} strokeWidth="1.5" />
          <circle cx="1" cy="12" r="2" fill="var(--color-accent)" className="animate-flow-right" style={{ animationDelay: `${delayMs}ms` }} />
        </>
      )}
    </svg>
  );
}
