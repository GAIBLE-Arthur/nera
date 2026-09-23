import { Reveal } from "@/components/ui/Reveal";
import { FlowStep } from "./FlowStep";
import { FlowArrow } from "./FlowArrow";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

const chainKeys = ["businessNeed", "data", "dataModel", "businessLogic", "backend", "interface", "users"] as const;
const emphasisKeys = new Set(["data", "dataModel", "interface"]);

/**
 * The core positioning diagram: a single chain from business need to users,
 * with the data layer and the interface layer visually emphasized to show
 * NERA works on both what the system runs on and what people actually see.
 * Each step expands on click with a one-line explanation.
 */
export function EndToEndDiagram({ locale }: { locale: Locale }) {
  const t = getUiText(locale).endToEnd;

  return (
    <div className="relative mx-auto flex max-w-md flex-col items-stretch sm:max-w-lg">
      <div
        aria-hidden="true"
        className="absolute -left-4 top-3 bottom-3 hidden w-px bg-border-dark sm:block lg:-left-10"
      />
      <div
        aria-hidden="true"
        className="absolute -left-4 top-1/2 hidden -translate-y-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest2 text-on-dark-muted sm:block lg:-left-10"
      >
        {t.axisLabel}
      </div>

      {chainKeys.map((key, index) => {
        const node = t.chain[key];
        return (
          <Reveal key={key} delay={index * 70} className="flex flex-col items-center">
            <FlowStep
              label={node.label}
              description={node.description}
              emphasis={emphasisKeys.has(key)}
              theme="dark"
              className="w-full"
            />
            {index < chainKeys.length - 1 && <FlowArrow direction="down" theme="dark" delayMs={index * 220} />}
          </Reveal>
        );
      })}
    </div>
  );
}
