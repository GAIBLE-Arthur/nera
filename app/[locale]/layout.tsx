import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { site, getSiteText } from "@/data/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const { locale: rawLocale } = params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const text = getSiteText(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: text.title,
      template: `%s | ${site.name}`,
    },
    description: text.description,
    alternates: {
      languages: { en: "/en", fr: "/fr" },
    },
    openGraph: {
      title: text.title,
      description: text.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: text.title,
      description: text.description,
    },
    icons: {
      icon: "/icon.svg",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale: rawLocale } = params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale: Locale = rawLocale;

  return (
    <html lang={locale} className={`${inter.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">
        <SmoothScrollProvider />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-on-dark"
        >
          {locale === "fr" ? "Aller au contenu" : "Skip to content"}
        </a>
        <Navbar locale={locale} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
