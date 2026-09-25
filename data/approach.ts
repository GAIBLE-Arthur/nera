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
      en: "Your need, your current tools and your constraints, before anything is chosen.",
      fr: "Votre besoin, vos outils actuels et vos contraintes, avant de choisir quoi que ce soit.",
    },
  },
  {
    step: "02",
    title: { en: "Design", fr: "Concevoir" },
    description: {
      en: "The simplest solution that fixes the problem, sized for your business.",
      fr: "La solution la plus simple qui règle le problème, adaptée à votre taille.",
    },
  },
  {
    step: "03",
    emphasis: true,
    title: { en: "Build", fr: "Construire" },
    description: {
      en: "The tool itself, built and tested with the people who will use it.",
      fr: "L'outil lui-même, construit et testé avec les personnes qui vont s'en servir.",
    },
  },
  {
    step: "04",
    emphasis: true,
    title: { en: "Go live", fr: "Mettre en service" },
    description: {
      en: "At your company, with a team trained to use it.",
      fr: "Chez vous, avec une équipe formée pour l'utiliser.",
    },
  },
  {
    step: "05",
    title: { en: "Improve", fr: "Améliorer" },
    description: {
      en: "Adjustments once the tool is in use, based on what really works.",
      fr: "Des ajustements une fois l'outil en usage, selon ce qui marche vraiment.",
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
