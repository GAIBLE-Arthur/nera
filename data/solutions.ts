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
        title: "Data & Analytics Consulting",
        shortTitle: "Data & Analytics",
        tagline: "Operational work, inside your environment.",
        description:
          "Data audits, cleaning, structuring and automation, done directly with your team and your existing tools.",
      },
      fr: {
        title: "Conseil Data & Analytics",
        shortTitle: "Data & Analytics",
        tagline: "Un travail opérationnel, dans votre environnement.",
        description:
          "Audit, nettoyage, structuration et automatisation des données, réalisés directement avec votre équipe et vos outils.",
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
        title: "Analytics Platform",
        shortTitle: "Analytics Platform",
        tagline: "A complete analytics environment.",
        description:
          "From raw sources to a governed data model and dashboards, built to stay maintainable.",
      },
      fr: {
        title: "Plateforme Analytique",
        shortTitle: "Plateforme Analytique",
        tagline: "Un environnement analytique complet.",
        description:
          "Des sources brutes jusqu'à un modèle de données gouverné et des tableaux de bord, conçu pour rester maintenable.",
      },
    },
  },
  {
    id: "digital-platforms",
    index: "03",
    href: "/solutions/digital-platforms",
    image: {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=70",
      alt: "A platform interface shown across a phone, laptop and desktop screen",
    },
    text: {
      en: {
        title: "Digital Platforms",
        shortTitle: "Digital Platforms",
        tagline: "From business process to working platform.",
        description:
          "Full-stack platforms: public interface, accounts, admin space, workflows, APIs and deployment, designed around how the business actually operates.",
      },
      fr: {
        title: "Plateformes Digitales",
        shortTitle: "Plateformes Digitales",
        tagline: "Du processus métier à la plateforme fonctionnelle.",
        description:
          "Des plateformes complètes : interface publique, comptes, espace admin, workflows, API et déploiement, conçues autour du fonctionnement réel de l'entreprise.",
      },
    },
  },
  {
    id: "private-ai",
    index: "04",
    href: "/solutions/private-ai",
    image: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=70",
      alt: "Server racks in a data center corridor",
    },
    text: {
      en: {
        title: "Private AI",
        shortTitle: "Private AI",
        tagline: "AI that depends on what's underneath.",
        description:
          "Local models, retrieval over your documents and data, and integration into the applications your teams already use.",
      },
      fr: {
        title: "IA Privée",
        shortTitle: "IA Privée",
        tagline: "Une IA qui dépend de ce qu'il y a dessous.",
        description:
          "Modèles locaux, recherche dans vos documents et données, intégration dans les applications déjà utilisées par vos équipes.",
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
