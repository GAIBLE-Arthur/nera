import type { Locale } from "@/lib/i18n";

interface AboutText {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  photoAlt: string;
  portfolioLabel: string;
}

const aboutText: Record<Locale, AboutText> = {
  en: {
    eyebrow: "About",
    title: "An independent engineering practice",
    paragraphs: [
      "NERA is an independent practice focused on building data, software and private AI systems for businesses.",
      "Technology choices follow the problem, not the other way around: proprietary tooling, open source, or a mix of both, depending on what the client's environment actually needs.",
    ],
    photoAlt: "NERA founder",
    portfolioLabel: "View portfolio",
  },
  fr: {
    eyebrow: "À propos",
    title: "Une pratique d'ingénierie indépendante",
    paragraphs: [
      "NERA est une pratique indépendante centrée sur la construction de systèmes data, software et IA privée pour des entreprises.",
      "Les choix technologiques suivent le problème, pas l'inverse : outils propriétaires, open source, ou un mélange des deux, selon ce que l'environnement du client exige réellement.",
    ],
    photoAlt: "Fondateur de NERA",
    portfolioLabel: "Voir le portfolio",
  },
};

export const founderPortfolioUrl = "https://gaible-arthur.github.io/Portfolio/";

export function getAboutText(locale: Locale): AboutText {
  return aboutText[locale];
}
