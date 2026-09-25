import { SectionHeader } from "@/components/SectionHeader";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/ui/Reveal";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function ProblemsSection({ locale }: { locale: Locale }) {
  const t = getUiText(locale).problemsSection;

  return (
    <section id="problems" data-snap className="bg-paper py-24 sm:py-28">
      <div className="container-nera">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <Reveal key={item.situation} as="li" delay={index * 60} className="flex flex-col gap-4 bg-paper p-6">
              <span className="text-lg font-semibold leading-snug tracking-tight text-ink">{item.situation}</span>
              <span className="mt-auto text-sm leading-relaxed text-muted">
                <span className="font-mono text-xs uppercase tracking-widest2 text-accent-strong">{t.objectiveLabel}</span>
                <br />
                {item.objective}
              </span>
            </Reveal>
          ))}
        </ul>

        <SectionCTA text={t.cta.text} label={t.cta.label} />
      </div>
    </section>
  );
}
