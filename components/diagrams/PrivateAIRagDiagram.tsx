import { PipelineDiagram, type PipelineStep } from "./PipelineDiagram";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function PrivateAIRagDiagram({ locale }: { locale: Locale }) {
  const d = getUiText(locale).privateAiPage.ragDiagram;

  const steps: PipelineStep[] = [
    { label: d.companyData.label, description: d.companyData.description },
    { label: d.ingestion.label, description: d.ingestion.description },
    { label: d.retrieval.label, description: d.retrieval.description, emphasis: true },
    { label: d.context.label, description: d.context.description },
    { label: d.localModel.label, description: d.localModel.description, emphasis: true },
    { label: d.applicationApi.label, description: d.applicationApi.description },
    { label: d.employee.label, description: d.employee.description },
  ];

  return <PipelineDiagram steps={steps} theme="light" />;
}
