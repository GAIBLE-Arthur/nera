import type { Locale } from "@/lib/i18n";

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  emphasis?: boolean;
}

interface StepEntry {
  step: string;
  emphasis?: boolean;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

const stepEntries: StepEntry[] = [
  {
    step: "01",
    title: { en: "Understand", fr: "Comprendre" },
    description: {
      en: "The business need, the current data and the constraints, before any tool is chosen.",
      fr: "Le besoin métier, les données existantes et les contraintes, avant de choisir un outil.",
    },
  },
  {
    step: "02",
    title: { en: "Design", fr: "Concevoir" },
    description: {
      en: "A data model and architecture sized to the problem, not to a template.",
      fr: "Un modèle de données et une architecture dimensionnés pour le problème, pas pour un modèle générique.",
    },
  },
  {
    step: "03",
    emphasis: true,
    title: { en: "Build", fr: "Construire" },
    description: {
      en: "The actual system: pipelines, backend, interface, built and tested.",
      fr: "Le système lui-même : pipelines, backend, interface, construits et testés.",
    },
  },
  {
    step: "04",
    emphasis: true,
    title: { en: "Deploy", fr: "Déployer" },
    description: {
      en: "Into a real environment, with the client's team able to operate it afterwards.",
      fr: "Dans un environnement réel, avec une équipe client capable de l'utiliser ensuite.",
    },
  },
  {
    step: "05",
    title: { en: "Improve", fr: "Améliorer" },
    description: {
      en: "Iterate once the system is in use, based on how it actually performs.",
      fr: "Itérer une fois le système en usage, en fonction de ses performances réelles.",
    },
  },
];

export function getApproachSteps(locale: Locale): ApproachStep[] {
  return stepEntries.map((s) => ({
    step: s.step,
    emphasis: s.emphasis,
    title: s.title[locale],
    description: s.description[locale],
  }));
}
