"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getNavLinks, getSolutionsMenu, getContactCta, getSolutionsLabel } from "@/data/navigation";
import { site } from "@/data/site";
import { locales, withLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface NavbarProps {
  locale: Locale;
}

export function Navbar({ locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  // Whichever section currently sits directly behind the navbar — every
  // dark section on the site carries `data-nav-theme="dark"` (see Hero,
  // EndToEndSection, ContactSection, SolutionHero, and
  // the dark blocks on each solution page). Defaults to "dark" since the
  // Hero is always first, avoiding a flash of unreadable dark-on-dark text
  // before the effect below runs.
  const [navTheme, setNavTheme] = useState<"light" | "dark">("dark");
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const navLinks = getNavLinks(locale);
  const solutionsMenu = getSolutionsMenu(locale);
  const contactCta = getContactCta(locale);
  const solutionsLabel = getSolutionsLabel(locale);
  // On the home page, these are in-page anchors — SmoothScrollProvider
  // handles that scroll via Lenis, so Next's own scroll-into-view (which
  // would fire at the same time and fight it) is turned off. From any
  // other page they're real navigations, where Next's default scroll is
  // exactly what should land the visitor on the right section.
  const isHome = pathname === withLocale(locale, "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function updateNavTheme() {
      const navH = headerRef.current?.offsetHeight ?? 64;
      const el = document.elementFromPoint(window.innerWidth / 2, navH + 4);
      const themed = el?.closest("[data-nav-theme]");
      setNavTheme(themed?.getAttribute("data-nav-theme") === "dark" ? "dark" : "light");
    }
    updateNavTheme();
    window.addEventListener("scroll", updateNavTheme, { passive: true });
    window.addEventListener("resize", updateNavTheme);
    return () => {
      window.removeEventListener("scroll", updateNavTheme);
      window.removeEventListener("resize", updateNavTheme);
    };
    // Re-run on route change too, since a new page starts scrolled to top
    // with a different section (and possibly a different theme) under the nav.
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function pathForLocale(target: Locale): string {
    const rest = pathname?.replace(new RegExp(`^/(${locales.join("|")})`), "") ?? "";
    return withLocale(target, rest === "" ? "/" : rest);
  }

  // The mobile panel is always an opaque light surface (readable regardless
  // of what's behind it), so once it's open the bar above it matches.
  const effectiveTheme = mobileOpen ? "light" : navTheme;
  const isDark = effectiveTheme === "dark";
  const textColor = isDark ? "text-on-dark" : "text-ink";

  return (
    <header
      ref={headerRef as never}
      className={cn(
        // `fixed`, not `sticky` — sticky still reserves its own height in
        // normal flow, which pushed the Hero down and left a strip of the
        // page's base background (off-white) showing above it. `fixed`
        // takes the bar out of flow entirely, so the Hero (or SolutionHero)
        // starts at the very top of the page and the transparent navbar
        // genuinely floats over it instead of sitting on a gap before it.
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || mobileOpen
          ? isDark
            ? "border-border-dark bg-surface/75 backdrop-blur"
            : "border-border bg-paper/90 backdrop-blur"
          : "border-transparent bg-transparent"
      )}
    >
      <nav aria-label="Primary" className="container-nera flex h-16 items-center justify-between lg:h-20">
        <Link
          href={withLocale(locale, "/")}
          className={cn("font-mono text-lg font-medium tracking-widest2 transition-colors duration-300", textColor)}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              onClick={() => setSolutionsOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:text-accent",
                textColor
              )}
            >
              {solutionsLabel}
              <span aria-hidden="true" className={cn("transition-transform duration-200", solutionsOpen && "rotate-180")}>
                ⌄
              </span>
            </button>
            {solutionsOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 border border-border bg-paper p-2 shadow-xl">
                {solutionsMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSolutionsOpen(false)}
                    className="block px-4 py-3 transition-colors hover:bg-ink hover:text-on-dark"
                  >
                    <span className="block text-sm font-medium">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-muted group-hover:text-on-dark-muted">
                      {item.tagline}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={!isHome}
              className={cn("text-sm font-medium transition-colors duration-300 hover:text-accent", textColor)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={contactCta.href}
            scroll={!isHome}
            className={cn(
              "border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-on-dark",
              isDark ? "border-border-dark" : "border-ink",
              textColor
            )}
          >
            {contactCta.label}
          </Link>

          <LanguageSwitcher locale={locale} pathForLocale={pathForLocale} textColor={textColor} />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} pathForLocale={pathForLocale} textColor={textColor} compact />
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={cn(
                "h-px w-6 transition-transform duration-300",
                isDark ? "bg-on-dark" : "bg-ink",
                mobileOpen && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-6 transition-opacity duration-300",
                isDark ? "bg-on-dark" : "bg-ink",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-px w-6 transition-transform duration-300",
                isDark ? "bg-on-dark" : "bg-ink",
                mobileOpen && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-paper lg:hidden">
          <div className="container-nera flex flex-col gap-1 py-4">
            <p className="px-2 pb-2 pt-3 font-mono text-xs uppercase tracking-widest2 text-muted">{solutionsLabel}</p>
            {solutionsMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-border" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll={!isHome}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5 text-base font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contactCta.href}
              scroll={!isHome}
              onClick={() => setMobileOpen(false)}
              className="mt-3 border border-ink px-4 py-3 text-center text-sm font-medium text-ink"
            >
              {contactCta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher({
  locale,
  pathForLocale,
  textColor,
  compact = false,
}: {
  locale: Locale;
  pathForLocale: (target: Locale) => string;
  textColor: string;
  compact?: boolean;
}) {
  function onSelect(target: Locale) {
    try {
      document.cookie = `NERA_LOCALE=${target}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {
      // Cookies unavailable (e.g. blocked storage) — link navigation still works.
    }
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 font-mono text-xs uppercase transition-colors duration-300",
        compact ? "" : "border-l pl-6",
        // Set the colour on the wrapper so the inactive locale and the "/"
        // follow the navbar theme instead of inheriting the page's ink.
        textColor,
        textColor === "text-on-dark" ? "border-border-dark" : "border-border"
      )}
    >
      {locales.map((target, i) => (
        <span key={target} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-50">/</span>}
          <Link
            href={pathForLocale(target)}
            onClick={() => onSelect(target)}
            aria-current={target === locale ? "true" : undefined}
            className={cn(
              "px-1 py-1 transition-colors duration-300",
              target === locale ? "" : "opacity-60 hover:opacity-100"
            )}
          >
            {target.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
