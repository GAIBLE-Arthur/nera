import { SectionHeader } from "@/components/SectionHeader";
import { TechnologyItem } from "@/components/TechnologyItem";
import { TechApproachDiagram } from "@/components/diagrams/TechApproachDiagram";
import { getTechnologies } from "@/data/technologies";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function TechnologySection({ locale }: { locale: Locale }) {
  const technologies = getTechnologies(locale);
  const t = getUiText(locale).technologySection;

  return (
    <section id="technology" data-snap data-nav-theme="dark" className="bg-surface py-24 text-on-dark sm:py-28">
      <div className="container-nera">
        <SectionHeader title={t.title} theme="dark" description={t.description} />

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyItem key={tech.name} {...tech} />
            ))}
          </div>

          <TechApproachDiagram locale={locale} />
        </div>
      </div>
    </section>
  );
}
