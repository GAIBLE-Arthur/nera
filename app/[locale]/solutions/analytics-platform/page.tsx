import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ContentBlock } from "@/components/solutions/ContentBlock";
import { ListSection } from "@/components/solutions/ListSection";
import { TechTags } from "@/components/solutions/TechTags";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { AnalyticsPlatformDiagram } from "@/components/diagrams/AnalyticsPlatformDiagram";
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
  const content = getSolutionPage(locale, "analytics-platform");
  return { title: content.heroTitle, description: content.heroLead };
}

export default function AnalyticsPlatformPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  const content = getSolutionPage(locale, "analytics-platform");
  const solution = getSolution(locale, "analytics-platform");
  const t = getUiText(locale);

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
          <SectionHeader
            title={t.analyticsPlatformPage.architectureTitle}
            theme="dark"
            description={t.analyticsPlatformPage.architectureDescription}
            className="mb-12"
          />
          <AnalyticsPlatformDiagram locale={locale} />
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-nera">
          <ListSection title={t.solutionShared.deliverablesTitle} items={content.deliverables} columns={2} />
        </div>
      </section>

      <section className="bg-paper pb-20 sm:pb-24">
        <div className="container-nera grid gap-14 lg:grid-cols-2">
          <ContentBlock title={t.analyticsPlatformPage.approachTitle} paragraphs={[content.approachNote]} />
          <TechTags title={t.solutionShared.technologyTitle} items={content.technologies ?? []} />
        </div>
      </section>

      <SolutionCTA locale={locale} title={content.cta.title} body={content.cta.body} />
    </>
  );
}
