export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefixes a path with the locale, e.g. withLocale("fr", "/solutions/private-ai"). */
export function withLocale(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}
