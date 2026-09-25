"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getContactCta } from "@/data/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

/**
 * Contact button pinned to the bottom of the screen on phones, so the one
 * action the page asks for is always one tap away. Appears once the visitor
 * scrolls past the hero and hides while the contact form itself is visible.
 */
export function MobileCtaBar({ locale }: { locale: Locale }) {
  const cta = getContactCta(locale);
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    let observer: IntersectionObserver | undefined;
    if (contact) {
      observer = new IntersectionObserver(([entry]) => setContactVisible(Boolean(entry?.isIntersecting)), { threshold: 0.1 });
      observer.observe(contact);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastHero && !contactVisible;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border-dark bg-surface/95 px-4 pt-3 backdrop-blur transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
      aria-hidden={!visible}
    >
      <Link
        href={cta.href}
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-medium tracking-wide text-on-dark transition-colors hover:bg-accent-strong"
      >
        {cta.label}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
