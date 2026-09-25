import type { Locale } from "@/lib/i18n";

interface ContactText {
  title: string;
  intro: string;
  preferEmail: string;
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
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
    title: "Describe your problem.",
    intro: "A few lines are enough. First conversation with no commitment.",
    preferEmail: "Prefer email?",
    nameLabel: "Name",
    companyLabel: "Company (optional)",
    emailLabel: "Email",
    messageLabel: "Your problem in a few lines",
    sendLabel: "Send message",
    sendingLabel: "Sending…",
    sentNotice: "Message sent. We'll get back to you shortly.",
    unavailableNotice: "The contact form isn't connected to a backend yet. Please write directly instead (see the email address below).",
    errorRequiredName: "Please enter your name.",
    errorRequiredEmail: "Please enter your email.",
    errorInvalidEmail: "Please enter a valid email address.",
    errorRequiredMessage: "Describe your problem in a few lines.",
    errorShortMessage: "A few more details would help: at least 10 characters.",
  },
  fr: {
    title: "Décrivez votre problème.",
    intro: "Quelques lignes suffisent. Premier échange sans engagement.",
    preferEmail: "Vous préférez l'email ?",
    nameLabel: "Nom",
    companyLabel: "Entreprise (optionnel)",
    emailLabel: "Email",
    messageLabel: "Votre problème en quelques lignes",
    sendLabel: "Envoyer",
    sendingLabel: "Envoi…",
    sentNotice: "Message envoyé. Nous revenons vers vous rapidement.",
    unavailableNotice: "Le formulaire de contact n'est pas encore relié à un service d'envoi. Écrivez directement à l'adresse email ci-dessous en attendant.",
    errorRequiredName: "Merci d'indiquer votre nom.",
    errorRequiredEmail: "Merci d'indiquer votre email.",
    errorInvalidEmail: "Merci d'indiquer une adresse email valide.",
    errorRequiredMessage: "Décrivez votre problème en quelques lignes.",
    errorShortMessage: "Quelques détails supplémentaires aideraient : au moins 10 caractères.",
  },
};

export function getContactText(locale: Locale): ContactText {
  return contactText[locale];
}
