import Image from "next/image";
import Link from "next/link";
import type { SolutionSummary } from "@/data/solutions";
import { getUiText } from "@/data/ui";
import { withLocale, type Locale } from "@/lib/i18n";

interface SolutionCardProps {
  solution: SolutionSummary;
  locale: Locale;
  priority?: boolean;
}

export function SolutionCard({ solution, locale, priority = false }: SolutionCardProps) {
  const viewSolutionLabel = getUiText(locale).solutionCard.viewSolution;

  return (
    <Link
      href={withLocale(locale, solution.href)}
      className="group relative flex min-h-[200px] flex-col justify-end overflow-hidden border border-border-dark bg-surface text-on-dark focus-visible:outline-offset-4 sm:min-h-[240px]"
    >
      <Image
        src={solution.image.src}
        alt={solution.image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/10 transition-opacity duration-500 group-hover:from-surface group-hover:via-surface/85"
      />

      <div className="relative flex flex-col gap-2 p-5 sm:p-6">
        <span className="font-mono text-xs tracking-widest2 text-accent">{solution.index}</span>
        <h3 className="text-xl font-semibold tracking-tightest sm:text-2xl">{solution.title}</h3>
        <p className="text-sm font-medium text-on-dark-muted">{solution.tagline}</p>
        <p className="text-sm font-medium text-accent">{solution.forYouIf}</p>

        {/* Collapsed-until-hover only from sm: up — on mobile, where hover
            doesn't exist, the description is shown by default so nothing
            essential is hidden behind an interaction that isn't available. */}
        <p className="overflow-hidden text-sm leading-relaxed text-on-dark-muted transition-all duration-500 ease-out sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-32 sm:group-hover:opacity-100 sm:group-focus-visible:max-h-32 sm:group-focus-visible:opacity-100 motion-reduce:max-h-32 motion-reduce:opacity-100">
          {solution.description}
        </p>

        <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium">
          {viewSolutionLabel}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
