"use client";

import { useId, useState, type FormEvent } from "react";
import { getContactText } from "@/data/contact";
import { submitContactForm } from "@/lib/contactService";
import { validateContactForm, isContactFormValid, type ContactFormValues, type ContactFormErrors } from "@/lib/validation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = getContactText(locale);

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formId = useId();

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values, locale);
    setErrors(nextErrors);

    if (!isContactFormValid(nextErrors)) {
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm(values);
      setStatus("sent");
    } catch (err) {
      // Honest failure state: if the backend isn't configured yet (see
      // lib/contactService.ts), no message was actually sent — surface the
      // real reason rather than pretending it worked.
      setErrorMessage(err instanceof Error ? err.message : t.unavailableNotice);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={`${formId}-name`} label={t.nameLabel} error={errors.name}>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={inputStyles(Boolean(errors.name))}
          />
        </Field>

        <Field id={`${formId}-company`} label={t.companyLabel}>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputStyles(false)}
          />
        </Field>
      </div>

      <Field id={`${formId}-email`} label={t.emailLabel} error={errors.email}>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          className={inputStyles(Boolean(errors.email))}
        />
      </Field>

      <Field id={`${formId}-message`} label={t.messageLabel} error={errors.message}>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={inputStyles(Boolean(errors.message))}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-medium text-on-dark transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t.sendingLabel : t.sendLabel}
        </button>

        <p role="status" aria-live="polite" className="text-sm text-on-dark-muted">
          {status === "sent" && t.sentNotice}
          {status === "error" && errorMessage}
        </p>
      </div>
    </form>
  );
}

function inputStyles(invalid: boolean) {
  return cn(
    "w-full border bg-surface px-4 py-3 text-sm text-on-dark placeholder:text-on-dark-muted focus-visible:outline-none",
    invalid ? "border-accent" : "border-border-dark focus:border-on-dark-muted"
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase tracking-wide text-on-dark-muted">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-accent" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
