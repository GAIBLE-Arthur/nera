import type { Locale } from "@/lib/i18n";
import { getContactText, type ProjectTypeId } from "@/data/contact";

export interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  projectType: ProjectTypeId;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Frontend validation for the contact form. Company and projectType are
 * optional by design (see section 11 of the brief) — everything else is
 * required. Kept dependency-free (aside from the localized copy) and easy
 * to unit test in isolation.
 */
export function validateContactForm(values: ContactFormValues, locale: Locale): ContactFormErrors {
  const t = getContactText(locale);
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = t.errorRequiredName;
  }

  if (!values.email.trim()) {
    errors.email = t.errorRequiredEmail;
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = t.errorInvalidEmail;
  }

  if (!values.message.trim()) {
    errors.message = t.errorRequiredMessage;
  } else if (values.message.trim().length < 10) {
    errors.message = t.errorShortMessage;
  }

  return errors;
}

export function isContactFormValid(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
