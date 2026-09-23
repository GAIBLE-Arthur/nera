"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { FlowStep } from "./FlowStep";
import { FlowArrow } from "./FlowArrow";
import { cn } from "@/lib/utils";

export interface PipelineStep {
  label: string;
  description?: string;
  tech?: string[];
  emphasis?: boolean;
}

interface PipelineDiagramProps {
  steps: PipelineStep[];
  theme?: "light" | "dark";
  className?: string;
}

/**
 * A left-to-right (top-to-bottom on mobile) technical pipeline — used for
 * the Analytics Platform architecture and the Private AI retrieval flow.
 *
 * Mobile renders a simple vertical stack where each step expands in place
 * (safe — single column, nothing else to misalign).
 *
 * Desktop renders a two-row CSS grid (boxes on row 1, tech tags on row 2)
 * so every box is exactly the same height and every arrow sits centered
 * between boxes, regardless of label length. Boxes never resize on click
 * there — the description appears in one shared caption below the whole
 * diagram, the same pattern used by TechApproachDiagram, so a step can
 * never grow and throw the row out of alignment.
 */
export function PipelineDiagram({ steps, theme = "light", className }: PipelineDiagramProps) {
  const isDark = theme === "dark";
  const [active, setActive] = useState<number | null>(null);
  const gridTemplateColumns = steps.map((_, i) => (i < steps.length - 1 ? "1fr auto" : "1fr")).join(" ");
  const activeStep = active !== null ? steps[active] : undefined;

  return (
    <div className={className}>
      {/* Mobile / tablet: simple vertical stack, each step expands in place */}
      <div className="flex flex-col lg:hidden">
        {steps.map((step, index) => (
          <Reveal key={step.label} delay={index * 70} className="flex flex-col items-center">
            <FlowStep
              label={step.label}
              description={step.description}
              theme={theme}
              emphasis={step.emphasis}
              className="w-full min-h-[64px]"
            />
            <TechTagList step={step} isDark={isDark} />
            {index < steps.length - 1 && (
              <div className="flex items-center justify-center py-1">
                <FlowArrow direction="down" theme={theme} delayMs={index * 220} />
              </div>
            )}
          </Reveal>
        ))}
      </div>

      {/* Desktop: two-row grid, uniform box height, shared caption below */}
      <div className="hidden lg:block">
        <div className="grid gap-y-3" style={{ gridTemplateColumns }}>
          {steps.map((step, index) => (
            <div key={step.label} style={{ gridColumn: index * 2 + 1, gridRow: 1 }} className="min-w-0">
              <Reveal delay={index * 70}>
                <button
                  type="button"
                  aria-pressed={step.description ? active === index : undefined}
                  onClick={step.description ? () => setActive((current) => (current === index ? null : index)) : undefined}
                  className={cn(
                    "flex h-24 w-full items-center justify-center border px-4 text-center text-sm font-semibold tracking-tight transition-all duration-200",
                    step.emphasis
                      ? "border-accent bg-accent/10 text-accent"
                      : isDark
                        ? "border-border-dark bg-surface-alt text-on-dark"
                        : "border-border bg-paper text-ink",
                    active === index && "scale-[1.04] shadow-lg",
                    active === index && !step.emphasis && (isDark ? "border-on-dark-muted" : "border-ink/40"),
                    step.description && (isDark ? "hover:border-on-dark-muted/60" : "hover:border-ink/40")
                  )}
                >
                  {step.label}
                </button>
              </Reveal>
            </div>
          ))}

          {steps.map((step, index) =>
            index < steps.length - 1 ? (
              <div
                key={`arrow-${step.label}`}
                style={{ gridColumn: index * 2 + 2, gridRow: 1 }}
                className="flex items-center justify-center self-center px-2"
              >
                <FlowArrow direction="right" theme={theme} delayMs={index * 220} />
              </div>
            ) : null
          )}

          {steps.map((step, index) => (
            <div key={`tags-${step.label}`} style={{ gridColumn: index * 2 + 1, gridRow: 2 }} className="min-w-0">
              <TechTagList step={step} isDark={isDark} />
            </div>
          ))}
        </div>

        {steps.some((s) => s.description) && (
          <p
            className={cn(
              "mt-5 min-h-[2.5rem] border-t pt-3 text-sm leading-relaxed",
              isDark ? "border-border-dark text-on-dark-muted" : "border-border text-muted"
            )}
          >
            {activeStep?.description ?? " "}
          </p>
        )}
      </div>
    </div>
  );
}

function TechTagList({ step, isDark }: { step: PipelineStep; isDark: boolean }) {
  if (!step.tech || step.tech.length === 0) return null;
  return (
    <ul className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1 px-1">
      {step.tech.map((t) => (
        <li
          key={t}
          className={cn(
            "font-mono text-[10px] uppercase tracking-wide",
            isDark ? "text-on-dark-muted" : "text-muted"
          )}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
