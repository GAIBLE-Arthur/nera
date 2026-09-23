import { Caveat } from "next/font/google";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxCard } from "@/components/ui/ParallaxCard";
import { HeroHeadline } from "./HeroHeadline";
import { getHeroCopy } from "@/data/site";
import type { Locale } from "@/lib/i18n";

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

export function Hero({ locale }: { locale: Locale }) {
  const heroCopy = getHeroCopy(locale);

  return (
    <section data-snap data-nav-theme="dark" className="relative overflow-hidden bg-surface text-on-dark">
      <div className="container-nera relative grid gap-14 py-24 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="flex flex-col justify-center">
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
            <CTAButton href={heroCopy.primaryCta.href} variant="primary" scroll={false}>
              {heroCopy.primaryCta.label}
            </CTAButton>
            <CTAButton href={heroCopy.secondaryCta.href} variant="ghost-dark" scroll={false}>
              {heroCopy.secondaryCta.label}
            </CTAButton>
          </Reveal>
        </div>

        <ParallaxCard className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="flex aspect-[4/5] w-full max-w-sm items-center justify-center border border-border-dark bg-paper p-6 shadow-2xl">
            <span className={`${caveat.className} -rotate-2 text-[7rem] leading-none text-ink`} aria-hidden="true">
              NERA
            </span>
            <span className="sr-only">NERA</span>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
}
