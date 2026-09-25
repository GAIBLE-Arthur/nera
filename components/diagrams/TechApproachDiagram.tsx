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

// Drawn on a 400 x 518 canvas: tall enough that, at full column width on
// desktop, the diagram matches the height of the end-to-end chain beside it.
const VIEW_W = 400;
const VIEW_H = 518;

const layout: NodeLayout[] = [
  { key: "existingSystems", cx: 200, cy: 28, w: 190, h: 56 },
  { key: "nera", cx: 200, cy: 175, w: 130, h: 56, emphasis: true },
  { key: "existingStack", cx: 108, cy: 335, w: 170, h: 56 },
  { key: "openSource", cx: 292, cy: 335, w: 180, h: 56 },
  { key: "workingSystem", cx: 200, cy: 490, w: 190, h: 56 },
];

const paths = [
  "M200,56 V147",
  "M200,203 C200,255 108,255 108,307",
  "M200,203 C200,255 292,255 292,307",
  "M108,363 C108,425 200,425 200,462",
  "M292,363 C292,425 200,425 200,462",
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
    <Reveal className="mx-auto w-full max-w-md lg:max-w-none" delay={100}>
      <div className="relative w-full" style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}>
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
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
              left: `${(node.cx / VIEW_W) * 100}%`,
              top: `${(node.cy / VIEW_H) * 100}%`,
              width: `${(node.w / VIEW_W) * 100}%`,
              height: `${(node.h / VIEW_H) * 100}%`,
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
