import type { Locale } from "@/lib/i18n";

export type SolutionId =
  | "data-analytics"
  | "analytics-platform"
  | "digital-platforms"
  | "private-ai";

interface SolutionText {
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
}

export interface SolutionSummary {
  id: SolutionId;
  index: string;
  href: string;
  image: { src: string; alt: string };
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
}

interface SolutionEntry {
  id: SolutionId;
  index: string;
  href: string;
  image: { src: string; alt: string };
  text: Record<Locale, SolutionText>;
}

// Editorial content for the four solution cards shown on the homepage grid.
// Add a fifth entry (and a matching page under app/[locale]/solutions/) to
// extend the offering later — no component changes required for the grid.
const solutionEntries: SolutionEntry[] = [
  {
    id: "data-analytics",
    index: "01",
    href: "/solutions/data-analytics",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70",
      alt: "Analytics charts and tables displayed across a laptop screen",
    },
    text: {
      en: {
        title: "Data & reporting",
        shortTitle: "Data & reporting",
        tagline: "Reliable figures, no re-typing.",
        description:
          "Your current files and software, cleaned, structured and automated. Your reports build themselves.",
      },
      fr: {
        title: "Données & reporting",
        shortTitle: "Données & reporting",
        tagline: "Des chiffres fiables, sans ressaisie.",
        description:
          "Vos fichiers et logiciels actuels, nettoyés, structurés et automatisés. Vos rapports se font tout seuls.",
      },
    },
  },
  {
    id: "analytics-platform",
    index: "02",
    href: "/solutions/analytics-platform",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=70",
      alt: "Grid of data and metrics displayed on a dark dashboard screen",
    },
    text: {
      en: {
        title: "Analytics platform",
        shortTitle: "Analytics platform",
        tagline: "Your whole business, on one screen.",
        description:
          "Your sources connected, dashboards always up to date, and a tool your team can keep growing.",
      },
      fr: {
        title: "Plateforme analytique",
        shortTitle: "Plateforme analytique",
        tagline: "Toute votre activité, sur un seul écran.",
        description:
          "Vos sources reliées entre elles, des tableaux de bord toujours à jour, et un outil que votre équipe peut faire évoluer.",
      },
    },
  },
  {
    id: "private-ai",
    index: "03",
    href: "/solutions/private-ai",
    image: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=70",
      alt: "Server racks in a data center corridor",
    },
    text: {
      en: {
        title: "Private AI",
        shortTitle: "Private AI",
        tagline: "AI that actually helps, with your data kept in-house.",
        description:
          "Find information in your documents, draft a reply, sort requests. AI where it saves time, built into your tools.",
      },
      fr: {
        title: "IA privée",
        shortTitle: "IA privée",
        tagline: "L'IA qui sert vraiment, avec vos données chez vous.",
        description:
          "Retrouver une information dans vos documents, préparer une réponse, trier des demandes. L'IA là où elle fait gagner du temps, intégrée à vos outils.",
      },
    },
  },
  {
    id: "digital-platforms",
    index: "04",
    href: "/solutions/digital-platforms",
    image: {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=70",
      alt: "A platform interface shown across a phone, laptop and desktop screen",
    },
    text: {
      en: {
        title: "Business tools",
        shortTitle: "Business tools",
        tagline: "The tool that replaces the shared Excel file.",
        description:
          "A custom tool for your orders, production or job sites. Enter data once, available to the whole team.",
      },
      fr: {
        title: "Outils métier",
        shortTitle: "Outils métier",
        tagline: "L'outil qui remplace le fichier Excel partagé.",
        description:
          "Un outil sur mesure pour vos commandes, votre production ou vos chantiers. Une seule saisie, accessible à toute l'équipe.",
      },
    },
  },
];

export function getSolutions(locale: Locale): SolutionSummary[] {
  return solutionEntries.map((entry) => ({
    id: entry.id,
    index: entry.index,
    href: entry.href,
    image: entry.image,
    ...entry.text[locale],
  }));
}

export function getSolution(locale: Locale, id: SolutionId): SolutionSummary {
  const found = getSolutions(locale).find((s) => s.id === id);
  if (!found) {
    throw new Error(`Unknown solution id: ${id}`);
  }
  return found;
}

export const solutionIds: SolutionId[] = solutionEntries.map((e) => e.id);
