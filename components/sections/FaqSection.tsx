import { SectionHeader } from "@/components/SectionHeader";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

/**
 * Short FAQ before the contact form, answering the questions that stop a
 * visitor from getting in touch (price, time, data, availability).
 */
export function FaqSection({ locale }: { locale: Locale }) {
  const t = getUiText(locale).faqSection;

  return (
    <section id="faq" data-snap className="bg-paper py-24 sm:py-28">
      <div className="container-nera grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader title={t.title} />

        <div className="border-t border-border">
          {t.items.map((item) => (
            <details key={item.question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold tracking-tight text-ink sm:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-lg text-accent-strong transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
