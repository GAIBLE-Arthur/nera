import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ContentBlock } from "@/components/solutions/ContentBlock";
import { ListSection } from "@/components/solutions/ListSection";
import { TechTags } from "@/components/solutions/TechTags";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { PrivateAIRagDiagram } from "@/components/diagrams/PrivateAIRagDiagram";
import { PrivateAIDeploymentDiagram } from "@/components/diagrams/PrivateAIDeploymentDiagram";
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
  const content = getSolutionPage(locale, "private-ai");
  return { title: content.heroTitle, description: content.heroLead };
}

export default function PrivateAIPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  const content = getSolutionPage(locale, "private-ai");
  const solution = getSolution(locale, "private-ai");
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
            title={t.privateAiPage.approachTitle}
            theme="dark"
            description={content.ragExplainer}
            className="mb-12"
          />
          <PrivateAIRagDiagram locale={locale} />
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-nera">
          <ListSection title={t.solutionShared.deliverablesTitle} items={content.deliverables} columns={2} />
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-surface py-20 text-on-dark sm:py-24">
        <div className="container-nera grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              title={t.solutionShared.whereItRunsTitle}
              theme="dark"
              description={t.solutionShared.whereItRunsDescription}
            />
            {content.privacyNote && (
              <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-on-dark-muted">
                {content.privacyNote}
              </p>
            )}
            {content.sizingFactors && (
              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-widest2 text-on-dark-muted">
                  {t.solutionShared.hardwareSizedAround}
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-2">
                  {content.sizingFactors.map((factor) => (
                    <li key={factor} className="h-full">
                      <div className="flex h-full items-center border border-border-dark px-3 py-2.5 text-sm text-on-dark-muted">
                        {factor}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <PrivateAIDeploymentDiagram locale={locale} />
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-nera grid gap-14 lg:grid-cols-2">
          <ContentBlock title={t.privateAiPage.approachTitle} paragraphs={[content.approachNote]} />
          <TechTags title={t.solutionShared.technologyTitle} items={content.technologies} />
        </div>
      </section>

      {(content.pricingNote || content.maintenanceNote) && (
        <section className="bg-paper pb-20 sm:pb-24">
          <div className="container-nera grid gap-4 sm:grid-cols-2">
            {content.pricingNote && (
              <div className="border border-border bg-paper px-6 py-5">
                <p className="text-sm text-muted">
                  <span className="font-medium text-ink">{t.solutionShared.pricingLabel}: </span>
                  {content.pricingNote}
                </p>
              </div>
            )}
            {content.maintenanceNote && (
              <div className="border border-border bg-paper px-6 py-5">
                <p className="text-sm text-muted">
                  <span className="font-medium text-ink">{t.solutionShared.maintenanceLabel}: </span>
                  {content.maintenanceNote}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <SolutionCTA locale={locale} title={content.cta.title} body={content.cta.body} />
    </>
  );
}
