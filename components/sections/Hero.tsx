import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxCard } from "@/components/ui/ParallaxCard";
import { HeroHeadline } from "./HeroHeadline";
import { getHeroCopy } from "@/data/site";
import { getAboutText } from "@/data/about";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const heroCopy = getHeroCopy(locale);

  return (
    <section data-snap data-nav-theme="dark" className="relative overflow-hidden bg-surface text-on-dark">
      <div className="container-nera relative grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-widest2 text-accent">{heroCopy.kicker}</p>
          </Reveal>

          <HeroHeadline
            text={heroCopy.headline}
            className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl lg:text-6xl"
          />

          <Reveal delay={520}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
              {heroCopy.sub}
            </p>
          </Reveal>

          <Reveal delay={620} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={heroCopy.primaryCta.href} variant="accent" scroll={false}>
              {heroCopy.primaryCta.label}
            </CTAButton>
            <CTAButton href={heroCopy.secondaryCta.href} variant="ghost-dark" scroll={false}>
              {heroCopy.secondaryCta.label}
            </CTAButton>
          </Reveal>

          <Reveal delay={700}>
            <p className="mt-5 text-sm text-on-dark-muted">{heroCopy.reassurance}</p>
          </Reveal>

          {/* On phones the founder card sits under the buttons instead of beside them. */}
          <Reveal delay={760} className="mt-10 lg:hidden">
            <FounderCard locale={locale} compact />
          </Reveal>
        </div>

        <ParallaxCard className="hidden lg:flex lg:items-center lg:justify-center">
          <FounderCard locale={locale} />
        </ParallaxCard>
      </div>
    </section>
  );
}

/** Who is behind the site, with the certification: the first piece of proof a visitor sees. */
function FounderCard({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = getAboutText(locale);

  return (
    <div
      className={cn(
        "w-full border border-border-dark bg-surface-alt",
        compact ? "flex items-center gap-4 p-4" : "max-w-sm shadow-2xl"
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-graphite",
          compact ? "h-20 w-20" : "aspect-[4/3] w-full"
        )}
      >
        <Image
          src="/images/founder.png"
          alt={t.photoAlt}
          fill
          sizes={compact ? "80px" : "384px"}
          className="object-cover object-top"
        />
      </div>

      <div className={cn("flex flex-col", compact ? "gap-1" : "gap-2 p-6")}>
        <p className={cn("font-semibold tracking-tight text-on-dark", compact ? "text-base" : "text-xl")}>{t.founderName}</p>
        <p className="text-sm text-on-dark-muted">{t.founderRole}</p>
        <p className={cn("border-l-2 border-accent pl-3 text-sm font-medium text-on-dark", compact ? "mt-1" : "mt-3")}>
          {t.certification}
        </p>
        {!compact && <p className="mt-2 text-sm text-on-dark-muted">{t.founderNote}</p>}
      </div>
    </div>
  );
}
