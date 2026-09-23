import { SectionHeader } from "@/components/SectionHeader";
import { EndToEndDiagram } from "@/components/diagrams/EndToEndDiagram";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function EndToEndSection({ locale }: { locale: Locale }) {
  const t = getUiText(locale).endToEnd;

  return (
    <section data-snap data-nav-theme="dark" className="bg-surface py-24 text-on-dark sm:py-28">
      <div className="container-nera grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader title={t.title} theme="dark" description={t.description} />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-on-dark-muted sm:text-base">{t.paragraph}</p>
        </div>

        <EndToEndDiagram locale={locale} />
      </div>
    </section>
  );
}
