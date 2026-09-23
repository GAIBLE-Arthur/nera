import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/i18n";
import { getSolutions } from "./solutions";

export interface NavLink {
  label: string;
  href: string;
}

interface NavText {
  approach: string;
  technology: string;
  about: string;
  solutions: string;
  discussProject: string;
}

const navText: Record<Locale, NavText> = {
  en: {
    approach: "Approach",
    technology: "Technology",
    about: "About",
    solutions: "Solutions",
    discussProject: "Discuss a project",
  },
  fr: {
    approach: "Approche",
    technology: "Technologie",
    about: "À propos",
    solutions: "Solutions",
    discussProject: "Discuter d'un projet",
  },
};

// Section anchors live on the homepage. From a solution page, these links
// resolve to `/{locale}#section` so the browser navigates home and jumps down.
// No standalone "Contact" link — the "Discuss a project" CTA (see
// getContactCta) already points at #contact, so a plain nav link would just
// duplicate it.
export function getNavLinks(locale: Locale): NavLink[] {
  const t = navText[locale];
  const home = withLocale(locale, "/");
  return [
    { label: t.approach, href: `${home}#approach` },
    { label: t.technology, href: `${home}#technology` },
    { label: t.about, href: `${home}#about` },
  ];
}

export function getSolutionsMenu(locale: Locale) {
  return getSolutions(locale).map((s) => ({
    label: s.shortTitle,
    href: withLocale(locale, s.href),
    tagline: s.tagline,
  }));
}

export function getSolutionsLabel(locale: Locale): string {
  return navText[locale].solutions;
}

export function getContactCta(locale: Locale): NavLink {
  return { label: navText[locale].discussProject, href: `${withLocale(locale, "/")}#contact` };
}
