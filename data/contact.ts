import type { Locale } from "@/lib/i18n";

export const projectTypeIds = ["data-analytics", "analytics-platform", "digital-platform", "private-ai", "other"] as const;
export type ProjectTypeId = (typeof projectTypeIds)[number];

const projectTypeLabels: Record<Locale, Record<ProjectTypeId, string>> = {
  en: {
    "data-analytics": "Data & Analytics",
    "analytics-platform": "Analytics Platform",
    "digital-platform": "Digital Platform",
    "private-ai": "Private AI",
    other: "Other",
  },
  fr: {
    "data-analytics": "Data & Analytics",
    "analytics-platform": "Plateforme Analytique",
    "digital-platform": "Plateforme Digitale",
    "private-ai": "IA Privée",
    other: "Autre",
  },
};

export function getProjectTypes(locale: Locale): { id: ProjectTypeId; label: string }[] {
  return projectTypeIds.map((id) => ({ id, label: projectTypeLabels[locale][id] }));
}

interface ContactText {
  title: string;
  preferEmail: string;
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  messageLabel: string;
  sendLabel: string;
  sendingLabel: string;
  sentNotice: string;
  unavailableNotice: string;
  errorRequiredName: string;
  errorRequiredEmail: string;
  errorInvalidEmail: string;
  errorRequiredMessage: string;
  errorShortMessage: string;
}

const contactText: Record<Locale, ContactText> = {
  en: {
    title: "Let's build something useful.",
    preferEmail: "Prefer email?",
    nameLabel: "Name",
    companyLabel: "Company (optional)",
    emailLabel: "Email",
    projectTypeLabel: "Project type (optional)",
    messageLabel: "What do you want to build?",
    sendLabel: "Send message",
    sendingLabel: "Sending…",
    sentNotice: "Message sent. We'll get back to you shortly.",
    unavailableNotice: "The contact form isn't connected to a backend yet. Please write directly instead (see the email address below).",
    errorRequiredName: "Please enter your name.",
    errorRequiredEmail: "Please enter your email.",
    errorInvalidEmail: "Please enter a valid email address.",
    errorRequiredMessage: "Let us know what you want to build.",
    errorShortMessage: "A few more details would help: at least 10 characters.",
  },
  fr: {
    title: "Construisons quelque chose d'utile.",
    preferEmail: "Vous préférez l'email ?",
    nameLabel: "Nom",
    companyLabel: "Entreprise (optionnel)",
    emailLabel: "Email",
    projectTypeLabel: "Type de projet (optionnel)",
    messageLabel: "Que voulez-vous construire ?",
    sendLabel: "Envoyer",
    sendingLabel: "Envoi…",
    sentNotice: "Message envoyé. Nous revenons vers vous rapidement.",
    unavailableNotice: "Le formulaire de contact n'est pas encore relié à un service d'envoi. Écrivez directement à l'adresse email ci-dessous en attendant.",
    errorRequiredName: "Merci d'indiquer votre nom.",
    errorRequiredEmail: "Merci d'indiquer votre email.",
    errorInvalidEmail: "Merci d'indiquer une adresse email valide.",
    errorRequiredMessage: "Indiquez ce que vous voulez construire.",
    errorShortMessage: "Quelques détails supplémentaires aideraient : au moins 10 caractères.",
  },
};

export function getContactText(locale: Locale): ContactText {
  return contactText[locale];
}
