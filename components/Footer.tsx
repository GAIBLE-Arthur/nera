import Link from "next/link";
import { site } from "@/data/site";
import { getSolutions } from "@/data/solutions";
import { getNavLinks } from "@/data/navigation";
import { getUiText } from "@/data/ui";
import { withLocale, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const solutions = getSolutions(locale);
  const navLinks = getNavLinks(locale);
  const t = getUiText(locale).footer;

  return (
    <footer className="border-t border-border-dark bg-surface text-on-dark">
      <div className="container-nera grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-mono text-lg tracking-widest2">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-dark-muted">{t.tagline}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-on-dark-muted">{t.solutionsHeading}</p>
          <ul className="mt-4 space-y-2.5">
            {solutions.map((s) => (
              <li key={s.id}>
                <Link
                  href={withLocale(locale, s.href)}
                  className="text-sm text-on-dark-muted transition-colors hover:text-on-dark"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-on-dark-muted">{t.siteHeading}</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-on-dark-muted transition-colors hover:text-on-dark">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-on-dark-muted transition-colors hover:text-on-dark"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="container-nera py-6 text-xs text-on-dark-muted">
          <p>
            © {year} {site.name}. {t.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
