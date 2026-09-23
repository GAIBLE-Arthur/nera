import { NextResponse } from "next/server";
import { site } from "@/data/site";

/**
 * Contact form backend — sends the submission by email via Resend's HTTP
 * API (https://resend.com), no SDK dependency needed.
 *
 * Requires two environment variables (see README.md "Connecting the
 * contact form"):
 *   - RESEND_API_KEY   — from the Resend dashboard.
 *   - CONTACT_TO_EMAIL — the inbox that should receive submissions.
 *     Falls back to `site.email` (data/site.ts) if unset.
 *
 * Until RESEND_API_KEY is set, this returns a clear 501 rather than
 * pretending the message was sent — matching lib/contactService.ts, which
 * surfaces that error to the form instead of showing a fake success state.
 */

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  projectType?: string;
  message: string;
}

function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return typeof v.name === "string" && typeof v.email === "string" && typeof v.message === "string";
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Contact form backend is not configured (missing RESEND_API_KEY)." },
      { status: 501 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isContactPayload(payload)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { name, company, email, projectType, message } = payload;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  // Resend's shared sandbox sender — works immediately with no domain
  // verification. Replace with an address on a domain you've verified in
  // Resend (e.g. contact@yourdomain.com) once you have one.
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "NERA Website <onboarding@resend.dev>";

  const html = `
    <h2>New message from the NERA website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${projectType ? `<p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New contact form message from ${name}`,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error("Resend API error:", resendResponse.status, errorBody);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
