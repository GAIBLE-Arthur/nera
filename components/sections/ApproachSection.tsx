import { SectionHeader } from "@/components/SectionHeader";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/ui/Reveal";
import { getApproachSteps } from "@/data/approach";
import { getUiText } from "@/data/ui";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

export function ApproachSection({ locale }: { locale: Locale }) {
  const steps = getApproachSteps(locale);
  const ui = getUiText(locale);
  const t = ui.approachSection;
  const cta = ui.sectionCtas.approach;

  return (
    <section id="approach" data-snap className="bg-paper py-24 sm:py-28">
      <div className="container-nera">
        <SectionHeader title={t.title} description={t.description} />

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal
              key={step.step}
              delay={index * 60}
              as="li"
              className={cn("flex flex-col gap-3 p-6", step.emphasis ? "bg-ink text-on-dark" : "bg-paper text-ink")}
            >
              <span className={cn("font-mono text-xs", step.emphasis ? "text-accent" : "text-accent-strong")}>
                {step.step}
              </span>
              <span className="text-lg font-semibold tracking-tight">{step.title}</span>
              <span className={cn("text-sm leading-relaxed", step.emphasis ? "text-on-dark-muted" : "text-muted")}>
                {step.description}
              </span>
            </Reveal>
          ))}
        </ol>

        <SectionCTA text={cta.text} label={cta.label} />
      </div>
    </section>
  );
}
