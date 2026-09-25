import { CTAButton } from "@/components/CTAButton";
import { getContactCta } from "@/data/navigation";
import type { Locale } from "@/lib/i18n";

interface SolutionCTAProps {
  locale: Locale;
  title: string;
  body: string;
  /** Overrides the default contact button label. */
  buttonLabel?: string;
}

export function SolutionCTA({ locale, title, body, buttonLabel }: SolutionCTAProps) {
  const contactCta = getContactCta(locale);

  return (
    <section data-nav-theme="dark" className="bg-ink py-20 text-on-dark sm:py-24">
      <div className="container-nera flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tightest sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-on-dark-muted sm:text-base">{body}</p>
        </div>
        <CTAButton href={contactCta.href} variant="ghost-dark" className="shrink-0">
          {buttonLabel ?? contactCta.label}
        </CTAButton>
      </div>
    </section>
  );
}
