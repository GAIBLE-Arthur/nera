import type { ContactFormValues } from "./validation";

export interface ContactSubmissionResult {
  ok: boolean;
  message: string;
}

/**
 * Contact form submission — posts to the app's own `/api/contact` route
 * handler (see app/api/contact/route.ts), which sends the message via
 * Resend. This is the single place the UI calls, so the backend can change
 * without touching ContactForm.tsx.
 *
 * Until RESEND_API_KEY is set in the deployment environment, the API route
 * returns a 501 and this throws — the UI never pretends a message was sent
 * when nothing actually received it. See README.md "Connecting the
 * contact form" for setup.
 */
export async function submitContactForm(values: ContactFormValues): Promise<ContactSubmissionResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.error ?? "The message could not be sent. Please try again or email us directly.");
  }

  return { ok: true, message: "Message sent." };
}
