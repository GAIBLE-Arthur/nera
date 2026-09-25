"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { DiagramNodeButton } from "./DiagramNodeButton";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

type NodeKey = "existingSystems" | "nera" | "existingStack" | "openSource" | "workingSystem";

interface NodeLayout {
  key: NodeKey;
  cx: number;
  cy: number;
  w: number;
  h: number;
  emphasis?: boolean;
}

const layout: NodeLayout[] = [
  { key: "existingSystems", cx: 200, cy: 32, w: 190, h: 48 },
  { key: "nera", cx: 200, cy: 120, w: 120, h: 48, emphasis: true },
  { key: "existingStack", cx: 108, cy: 216, w: 160, h: 48 },
  { key: "openSource", cx: 292, cy: 216, w: 180, h: 48 },
  { key: "workingSystem", cx: 200, cy: 300, w: 190, h: 48 },
];

const paths = [
  "M200,56 V96",
  "M200,144 C200,168 108,168 108,192",
  "M200,144 C200,168 292,168 292,192",
  "M108,240 C108,270 200,270 200,276",
  "M292,240 C292,270 200,270 200,276",
];

/**
 * Small branching diagram for the Technology section: KAG Systèmes can work in the
 * existing stack, complete it with open-source components, or both. Either
 * way the output is one working system.
 *
 * Nodes never resize on click — the description appears in one shared
 * caption below the diagram, so an expanded node can never overlap or get
 * covered by a neighbor (the failure mode of a per-node popover here,
 * since nodes sit close together over the connector lines).
 */
export function TechApproachDiagram({ locale }: { locale: Locale }) {
  const t = getUiText(locale).technologySection.diagram;
  const hint = getUiText(locale).diagramHint;
  const [active, setActive] = useState<NodeKey | null>(null);

  return (
    <Reveal className="mx-auto w-full max-w-md" delay={100}>
      <div className="relative w-full" style={{ aspectRatio: "400 / 330" }}>
        <svg viewBox="0 0 400 330" aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
          {paths.map((d) => (
            <path key={d} d={d} fill="none" stroke="var(--color-border-dark)" strokeWidth="1.5" />
          ))}
          {/* Traveling pulses along each connector — the whole point of this
              diagram is "current can flow either way", so make it visible. */}
          {paths.map((d, index) => (
            <circle
              key={`pulse-${d}`}
              r="2.5"
              fill="var(--color-accent)"
              className="animate-flow-path"
              style={{ offsetPath: `path('${d}')`, animationDelay: `${index * 300}ms` }}
            />
          ))}
        </svg>

        {layout.map((node) => (
          <DiagramNodeButton
            key={node.key}
            label={t[node.key].label}
            emphasis={node.emphasis}
            active={active === node.key}
            onClick={() => setActive((current) => (current === node.key ? null : node.key))}
            style={{
              position: "absolute",
              left: `${(node.cx / 400) * 100}%`,
              top: `${(node.cy / 330) * 100}%`,
              width: `${(node.w / 400) * 100}%`,
              height: `${(node.h / 330) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <p className="mt-4 min-h-[2.5rem] border-t border-border-dark pt-3 text-sm leading-relaxed text-on-dark-muted">
        {active ? t[active].description : hint}
      </p>
    </Reveal>
  );
}
