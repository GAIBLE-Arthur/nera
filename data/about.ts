import type { Locale } from "@/lib/i18n";

interface AboutText {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** Certification line, highlighted in the About section and the hero card. */
  certification: string;
  photoAlt: string;
  portfolioLabel: string;
  /** Short identity shown on the hero card. */
  founderName: string;
  founderRole: string;
  founderNote: string;
}

// TEMP: the location in the last paragraph is a placeholder to fill in.
const aboutText: Record<Locale, AboutText> = {
  en: {
    eyebrow: "About",
    title: "Who's behind KAG Systèmes",
    paragraphs: [
      "Arthur Gaible, founder of KAG Systèmes. The person who listens to your problem is the one who fixes it: no salesperson, no subcontracting.",
      "Data, reporting, AI and custom tools for small and mid-sized businesses, starting from the tools already in place.",
      "Based in [city, region]. On site in the region, remotely anywhere in France.",
    ],
    certification: "Microsoft Certified: Power BI Data Analyst Associate (PL‑300)",
    photoAlt: "Arthur Gaible, founder of KAG Systèmes",
    portfolioLabel: "View portfolio",
    founderName: "Arthur Gaible",
    founderRole: "Founder of KAG Systèmes",
    founderNote: "Independent. One point of contact.",
  },
  fr: {
    eyebrow: "À propos",
    title: "Qui est derrière KAG Systèmes",
    paragraphs: [
      "Arthur Gaible, fondateur de KAG Systèmes. La personne qui écoute votre problème est celle qui le règle : pas de commercial, pas de sous-traitance.",
      "Données, reporting, IA et outils sur mesure pour les TPE et PME, à partir des outils déjà en place.",
      "Basé à [ville, région]. Sur site dans la région, à distance partout en France.",
    ],
    certification: "Certifié Microsoft Power BI Data Analyst (PL‑300)",
    photoAlt: "Arthur Gaible, fondateur de KAG Systèmes",
    portfolioLabel: "Voir le portfolio",
    founderName: "Arthur Gaible",
    founderRole: "Fondateur de KAG Systèmes",
    founderNote: "Indépendant. Un seul interlocuteur.",
  },
};

export const founderPortfolioUrl = "https://portfolio-amber-five-mbyr7urwg3.vercel.app/";

export function getAboutText(locale: Locale): AboutText {
  return aboutText[locale];
}
