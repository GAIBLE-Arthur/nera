import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getUiText } from "@/data/ui";
import { withLocale, type Locale } from "@/lib/i18n";

interface SolutionHeroProps {
  locale: Locale;
  title: string;
  lead: string;
  image: { src: string; alt: string };
}

export function SolutionHero({ locale, title, lead, image }: SolutionHeroProps) {
  const backLabel = getUiText(locale).solutionHero.backLink;

  return (
    <section data-nav-theme="dark" className="relative flex min-h-[560px] items-center overflow-hidden bg-surface text-on-dark sm:min-h-[640px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient only where the text sits, so the photo itself stays fully
          visible rather than being washed out under a uniform dark layer. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/10 sm:via-surface/75 sm:to-transparent"
      />

      <div className="container-nera relative py-20 sm:py-24">
        <div className="max-w-xl">
          <Reveal>
            <Link
              href={`${withLocale(locale, "/")}#solutions`}
              className="font-mono text-xs uppercase tracking-widest2 text-on-dark-muted hover:text-on-dark"
            >
              ← {backLabel}
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 text-base leading-relaxed text-on-dark-muted sm:text-lg">{lead}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
