import { PipelineDiagram, type PipelineStep } from "./PipelineDiagram";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function AnalyticsPlatformDiagram({ locale }: { locale: Locale }) {
  const d = getUiText(locale).analyticsPlatformPage.diagram;

  const steps: PipelineStep[] = [
    { label: d.dataSources.label, description: d.dataSources.description },
    { label: d.ingestion.label, description: d.ingestion.description },
    { label: d.database.label, description: d.database.description, emphasis: true },
    { label: d.transformation.label, description: d.transformation.description },
    { label: d.dataModel.label, description: d.dataModel.description, emphasis: true },
    { label: d.analytics.label, description: d.analytics.description },
    { label: d.users.label, description: d.users.description },
  ];

  return <PipelineDiagram steps={steps} theme="light" />;
}
