import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

function detectLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NERA_LOCALE")?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale;
  }

  // French is the site's primary language (see defaultLocale in lib/i18n.ts)
  // — only send visitors to English if their browser actually asks for it.
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  if (acceptLanguage.toLowerCase().startsWith("en")) {
    return "en";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes, and any request for a file with an
  // extension (icon.svg, robots.txt, sitemap.xml, ...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
