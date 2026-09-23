import { Reveal } from "@/components/ui/Reveal";
import { PipelineDiagram, type PipelineStep } from "./PipelineDiagram";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

/**
 * Digital Platforms architecture: the application chain on top, with
 * containerized infrastructure shown as the layer everything above runs on.
 */
export function DigitalPlatformDiagram({ locale }: { locale: Locale }) {
  const t = getUiText(locale).digitalPlatformsPage;
  const d = t.diagram;

  const appChain: PipelineStep[] = [
    { label: d.users.label, description: d.users.description },
    { label: d.webInterface.label, description: d.webInterface.description },
    { label: d.apiBackend.label, description: d.apiBackend.description, emphasis: true },
    { label: d.businessLogic.label, description: d.businessLogic.description },
    { label: d.postgres.label, description: d.postgres.description },
    { label: d.externalServices.label, description: d.externalServices.description },
  ];

  return (
    <div className="flex flex-col gap-6">
      <PipelineDiagram steps={appChain} theme="light" />

      <Reveal delay={450} className="flex flex-col items-center gap-2">
        <span aria-hidden="true" className="text-muted">↓</span>
        <div className="w-full border border-dashed border-border px-5 py-4 text-center">
          <p className="font-mono text-xs uppercase tracking-widest2 text-accent-strong">Docker</p>
          <p className="mt-1 text-sm text-muted">{t.dockerNote}</p>
        </div>
      </Reveal>
    </div>
  );
}
