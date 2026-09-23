import type { Locale } from "@/lib/i18n";

export interface EngagementTier {
  step: string;
  title: string;
  description: string;
}

export interface Commitment {
  title: string;
  description: string;
}

interface TierEntry {
  step: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

const tierEntries: TierEntry[] = [
  {
    step: "01",
    title: { en: "Audit & scoping", fr: "Audit & cadrage" },
    description: {
      en: "A look at the current data and systems, and a feasibility read on what's actually possible.",
      fr: "Un état des lieux des données et des systèmes existants, et une lecture de faisabilité sur ce qui est réellement possible.",
    },
  },
  {
    step: "02",
    title: { en: "Pilot", fr: "Pilote" },
    description: {
      en: "One real use case, deployed on a limited scope, to validate the approach before committing further.",
      fr: "Un cas d'usage réel, déployé sur un périmètre restreint, pour valider l'approche avant d'engager la suite.",
    },
  },
  {
    step: "03",
    title: { en: "Deployment", fr: "Déploiement" },
    description: {
      en: "The full system, built and put into production in the client's environment.",
      fr: "Le système complet, construit et mis en production dans l'environnement du client.",
    },
  },
  {
    step: "04",
    title: { en: "Ongoing support", fr: "Suivi" },
    description: {
      en: "Maintenance, updates and support once the system is in daily use.",
      fr: "Maintenance, mises à jour et support une fois le système en usage quotidien.",
    },
  },
];

interface CommitmentEntry {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

const commitmentEntries: CommitmentEntry[] = [
  {
    title: { en: "Zero lock-in", fr: "Zéro dépendance" },
    description: {
      en: "Code, documentation and intellectual property belong entirely to the client.",
      fr: "Le code, la documentation et la propriété intellectuelle appartiennent intégralement au client.",
    },
  },
  {
    title: { en: "Skills transferred", fr: "Autonomie transmise" },
    description: {
      en: "Internal teams are trained to operate the system day-to-day, without depending on NERA for every change.",
      fr: "Les équipes internes sont formées pour opérer le système au quotidien, sans dépendre de NERA pour chaque intervention.",
    },
  },
  {
    title: { en: "Sized to the need", fr: "Infrastructure dimensionnée" },
    description: {
      en: "Hardware and models are chosen for the actual workload, not to maximize the invoice.",
      fr: "Le matériel et les modèles sont choisis pour la charge réelle, pas pour maximiser la facture.",
    },
  },
];

export function getEngagementTiers(locale: Locale): EngagementTier[] {
  return tierEntries.map((t) => ({ step: t.step, title: t.title[locale], description: t.description[locale] }));
}

export function getCommitments(locale: Locale): Commitment[] {
  return commitmentEntries.map((c) => ({ title: c.title[locale], description: c.description[locale] }));
}
