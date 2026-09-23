import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { getEngagementTiers, getCommitments } from "@/data/engagement";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function EngagementSection({ locale }: { locale: Locale }) {
  const tiers = getEngagementTiers(locale);
  const commitments = getCommitments(locale);
  const t = getUiText(locale).engagementSection;

  return (
    <section id="engagement" className="bg-paper py-24 sm:py-28">
      <div className="container-nera">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
          {tiers.map((tier, index) => (
            <Reveal key={tier.step} delay={index * 60} as="li" className="flex flex-col gap-3 bg-paper p-6">
              <span className="font-mono text-xs text-accent-strong">{tier.step}</span>
              <span className="text-lg font-semibold tracking-tight text-ink">{tier.title}</span>
              <span className="text-sm leading-relaxed text-muted">{tier.description}</span>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest2 text-accent-strong">
            {t.commitmentsLabel}
          </p>
          <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
            {commitments.map((commitment, index) => (
              <Reveal key={commitment.title} delay={index * 60} className="bg-paper p-6">
                <p className="text-base font-semibold text-ink">{commitment.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{commitment.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
