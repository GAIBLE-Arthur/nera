import { Reveal } from "@/components/ui/Reveal";
import { FlowArrow } from "./FlowArrow";
import { FlowStep } from "./FlowStep";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

const serviceKeys = ["application", "aiService", "vectorLayer", "database"] as const;

/**
 * Deployment diagram: company network containing a Docker environment
 * (four services) sitting on local hardware or a private server. Every
 * node expands in place on click — stacked vertically so an expanded node
 * never overlaps a neighbor.
 */
export function PrivateAIDeploymentDiagram({ locale }: { locale: Locale }) {
  const t = getUiText(locale).privateAiPage.deploymentDiagram;

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center">
      <Reveal className="w-full">
        <FlowStep label={t.companyNetwork.label} description={t.companyNetwork.description} theme="dark" />
      </Reveal>

      <FlowArrow direction="down" theme="dark" delayMs={0} />

      <Reveal delay={80} className="w-full border border-accent/50 bg-accent/5 p-5">
        <p className="mb-4 text-center font-mono text-xs uppercase tracking-widest2 text-accent">
          {t.dockerEnvironment}
        </p>
        <div className="flex flex-col gap-2.5">
          {serviceKeys.map((key) => (
            <FlowStep
              key={key}
              label={t.services[key].label}
              description={t.services[key].description}
              theme="dark"
              className="min-h-[56px]"
            />
          ))}
        </div>
      </Reveal>

      <FlowArrow direction="down" theme="dark" delayMs={400} />

      <Reveal delay={160} className="w-full">
        <FlowStep label={t.hardware.label} description={t.hardware.description} theme="dark" />
      </Reveal>
    </div>
  );
}
