import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ContentBlock } from "@/components/solutions/ContentBlock";
import { ListSection } from "@/components/solutions/ListSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { DigitalPlatformDiagram } from "@/components/diagrams/DigitalPlatformDiagram";
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
  const content = getSolutionPage(locale, "digital-platforms");
  return { title: content.heroTitle, description: content.heroLead };
}

export default function DigitalPlatformsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  const content = getSolutionPage(locale, "digital-platforms");
  const solution = getSolution(locale, "digital-platforms");
  const t = getUiText(locale);

  return (
    <>
      <SolutionHero locale={locale} title={content.heroTitle} lead={content.heroLead} image={solution.image} />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-nera">
          <ListSection title={content.problem.title} items={content.problemSituations ?? content.problem.body} />
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
            title={t.digitalPlatformsPage.architectureTitle}
            theme="dark"
            description={t.digitalPlatformsPage.architectureDescription}
            className="mb-12"
          />
          <DigitalPlatformDiagram locale={locale} />
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-nera">
          <ListSection
            title={content.deliverablesTitle ?? t.solutionShared.deliverablesTitle}
            items={content.deliverables}
            columns={2}
          />
        </div>
      </section>

      <section className="bg-paper pb-20 sm:pb-24">
        <div className="container-nera">
          <ContentBlock title={t.digitalPlatformsPage.approachTitle} paragraphs={[content.approachNote]} />
        </div>
      </section>

      <SolutionCTA locale={locale} title={content.cta.title} body={content.cta.body} buttonLabel={content.cta.button} />
    </>
  );
}
