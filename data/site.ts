import type { Locale } from "@/lib/i18n";

// Global, locale-independent identity.
// TEMP: replace the placeholder domain/email once real ones are assigned.
export const site = {
  name: "KAG Systèmes",
  // TEMP placeholder domain — update before deploying to production.
  url: "https://nera.example.com",
  email: "agaiblepro@gmail.com",
} as const;

interface SiteText {
  title: string;
  description: string;
}

const siteText: Record<Locale, SiteText> = {
  en: {
    title: "KAG Systèmes | Data, Software & Private AI",
    description: "End-to-end data, software and private AI systems built pragmatically for businesses.",
  },
  fr: {
    title: "KAG Systèmes | Data, Software & IA privée",
    description: "Des systèmes data, software et IA privée conçus et construits de bout en bout, avec pragmatisme, pour les entreprises.",
  },
};

export function getSiteText(locale: Locale): SiteText {
  return siteText[locale];
}

interface HeroCopy {
  kicker: string;
  headline: string;
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const heroCopy: Record<Locale, HeroCopy> = {
  en: {
    kicker: "Data. Software. Private AI.",
    headline: "End-to-end technology. Results-driven.",
    sub: "KAG Systèmes designs and builds data solutions, from the foundations up to the interfaces teams use every day. One practice, accountable for the whole chain.",
    primaryCta: { label: "Explore solutions", href: "#solutions" },
    secondaryCta: { label: "Discuss a project", href: "#contact" },
  },
  fr: {
    kicker: "Data. Software. IA privée.",
    headline: "Technologie de bout en bout. Orientée résultat.",
    sub: "KAG Systèmes conçoit et construit des solutions de données, des fondations jusqu'aux interfaces utilisées chaque jour par les équipes. Une pratique, responsable de toute la chaîne.",
    primaryCta: { label: "Explorer les solutions", href: "#solutions" },
    secondaryCta: { label: "Discuter d'un projet", href: "#contact" },
  },
};

export function getHeroCopy(locale: Locale): HeroCopy {
  return heroCopy[locale];
}

interface Positioning {
  statement: string;
  variants: string[];
}

const positioning: Record<Locale, Positioning> = {
  en: {
    statement: "KAG Systèmes builds the technology underneath: from data to interface.",
    variants: [
      "Technology that works.",
      "From data to interface.",
      "End-to-end digital systems.",
      "Build what matters.",
    ],
  },
  fr: {
    statement: "KAG Systèmes construit la technologie qui se trouve en dessous : des données à l'interface.",
    variants: [
      "Une technologie qui fonctionne.",
      "Des données à l'interface.",
      "Des systèmes numériques de bout en bout.",
      "Construire ce qui compte.",
    ],
  },
};

export function getPositioning(locale: Locale): Positioning {
  return positioning[locale];
}
