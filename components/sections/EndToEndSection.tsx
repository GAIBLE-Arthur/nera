import { SectionHeader } from "@/components/SectionHeader";
import { SectionCTA } from "@/components/SectionCTA";
import { EndToEndDiagram } from "@/components/diagrams/EndToEndDiagram";
import { TechApproachDiagram } from "@/components/diagrams/TechApproachDiagram";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

/**
 * End-to-end positioning and the "use what makes sense" technology approach,
 * shown side by side: the full chain on one side, how existing tools are kept
 * or completed on the other.
 */
export function EndToEndSection({ locale }: { locale: Locale }) {
  const ui = getUiText(locale);
  const t = ui.endToEnd;
  const tech = ui.technologySection;
  const cta = ui.sectionCtas.technology;

  return (
    <section id="technology" data-snap data-nav-theme="dark" className="bg-surface py-24 text-on-dark sm:py-28">
      <div className="container-nera">
        <SectionHeader title={t.title} theme="dark" description={t.description} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-on-dark-muted sm:text-base">{t.paragraph}</p>

        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold tracking-tight text-on-dark sm:text-2xl">{t.chainTitle}</h3>
            <EndToEndDiagram locale={locale} />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-on-dark sm:text-2xl">{tech.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-on-dark-muted sm:text-base">{tech.description}</p>
            </div>
            <TechApproachDiagram locale={locale} />
          </div>
        </div>

        <SectionCTA text={cta.text} label={cta.label} theme="dark" />
      </div>
    </section>
  );
}
