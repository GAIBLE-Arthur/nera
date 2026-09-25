import { SectionHeader } from "@/components/SectionHeader";
import { SectionCTA } from "@/components/SectionCTA";
import { SolutionCard } from "@/components/SolutionCard";
import { getSolutions } from "@/data/solutions";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function SolutionsSection({ locale }: { locale: Locale }) {
  const solutions = getSolutions(locale);
  const ui = getUiText(locale);
  const t = ui.solutionsSection;
  const cta = ui.sectionCtas.solutions;

  return (
    <section id="solutions" data-snap className="relative flex min-h-screen flex-col justify-center bg-paper py-16 sm:py-20">
      <div className="container-nera">
        <SectionHeader title={t.title} description={t.description} />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} locale={locale} priority={index === 0} />
          ))}
        </div>

        <SectionCTA text={cta.text} label={cta.label} />
      </div>
    </section>
  );
}
