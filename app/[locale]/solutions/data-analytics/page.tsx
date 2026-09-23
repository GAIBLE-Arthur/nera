import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ContentBlock } from "@/components/solutions/ContentBlock";
import { ListSection } from "@/components/solutions/ListSection";
import { TechTags } from "@/components/solutions/TechTags";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { PipelineDiagram, type PipelineStep } from "@/components/diagrams/PipelineDiagram";
import { getSolutionPage } from "@/data/solution-pages";
import { getSolution } from "@/data/solutions";
import { getUiText } from "@/data/ui";
import { isLocale, locales, defaultLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const content = getSolutionPage(locale, "data-analytics");
  return { title: content.heroTitle, description: content.heroLead };
}

export default function DataAnalyticsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  const content = getSolutionPage(locale, "data-analytics");
  const solution = getSolution(locale, "data-analytics");
  const t = getUiText(locale);
  const d = t.dataAnalyticsPage.diagram;

  const diagramSteps: PipelineStep[] = [
    { label: d.rawData.label, description: d.rawData.description },
    { label: d.auditCleaning.label, description: d.auditCleaning.description, emphasis: true },
    { label: d.structuredModel.label, description: d.structuredModel.description },
    { label: d.automation.label, description: d.automation.description },
    { label: d.reporting.label, description: d.reporting.description },
  ];

  return (
    <>
      <SolutionHero locale={locale} title={content.heroTitle} lead={content.heroLead} image={solution.image} />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-nera">
          <ContentBlock title={content.problem.title} paragraphs={content.problem.body} />
        </div>
      </section>

      <section className="bg-paper pb-20 sm:pb-24">
        <div className="container-nera">
          <ListSection title={content.whatWeBuild.title} items={content.whatWeBuild.items} columns={2} />
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-surface py-20 text-on-dark sm:py-24">
        <div className="container-nera">
          <SectionHeader title={t.dataAnalyticsPage.architectureTitle} theme="dark" className="mb-12" />
          <PipelineDiagram steps={diagramSteps} theme="dark" />
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-nera">
          <ListSection title={t.solutionShared.deliverablesTitle} items={content.deliverables} columns={2} />
        </div>
      </section>

      <section className="bg-paper pb-20 sm:pb-24">
        <div className="container-nera">
          {/* Easy to extend with a detailed founder profile later — see
              data/solution-pages.ts (`capabilities` field). */}
          <ListSection
            title={t.solutionShared.capabilitiesTitle}
            items={content.capabilities ?? []}
            columns={2}
          />
        </div>
      </section>

      <section className="bg-paper pb-20 sm:pb-24">
        <div className="container-nera grid gap-14 lg:grid-cols-2">
          <ContentBlock title={t.dataAnalyticsPage.approachTitle} paragraphs={[content.approachNote]} />
          <TechTags title={t.solutionShared.technologyTitle} items={content.technologies} />
        </div>
      </section>

      <SolutionCTA locale={locale} title={content.cta.title} body={content.cta.body} />
    </>
  );
}
