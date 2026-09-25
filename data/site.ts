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
  /** Who the site is for, shown above the headline. */
  kicker: string;
  headline: string;
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  /** Short reassurance line under the buttons. */
  reassurance: string;
}

const heroCopy: Record<Locale, HeroCopy> = {
  en: {
    kicker: "For small businesses in manufacturing and the trades",
    headline: "Reliable figures and tools that talk to each other. No overkill.",
    sub: "KAG Systèmes automates your reporting, brings your data together and builds the tools you're missing, starting from what you already use. One point of contact, from the first conversation to go-live.",
    primaryCta: { label: "Describe your problem", href: "#contact" },
    secondaryCta: { label: "See the solutions", href: "#solutions" },
    reassurance: "First conversation with no commitment. One point of contact from start to finish.",
  },
  fr: {
    kicker: "Pour les TPE et PME de l'industrie et de l'artisanat",
    headline: "Des chiffres fiables et des outils qui se parlent. Sans usine à gaz.",
    sub: "KAG Systèmes automatise votre reporting, centralise vos données et construit les outils qui vous manquent, à partir de ce que vous utilisez déjà. Un seul interlocuteur, du premier échange à la mise en service.",
    primaryCta: { label: "Décrire votre problème", href: "#contact" },
    secondaryCta: { label: "Voir les solutions", href: "#solutions" },
    reassurance: "Premier échange sans engagement. Un seul interlocuteur du début à la fin.",
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
