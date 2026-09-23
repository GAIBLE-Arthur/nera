"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { lenisRef } from "@/lib/lenisInstance";

/**
 * Momentum/eased scrolling instead of the browser's default 1:1 scroll,
 * plus a gentle section snap and smooth in-page anchor navigation — all
 * driven entirely through Lenis.
 *
 * Deliberately does NOT use native CSS `scroll-behavior: smooth` or
 * `scroll-snap-type`: either one fights Lenis, which moves the page itself
 * via `scrollTo()` every frame. Two engines fighting over the same scroll
 * position is exactly what makes a page feel janky instead of fluid, so
 * both the section snap and anchor-link clicks (Navbar, "Explore
 * solutions", etc.) are handled by watching/driving Lenis directly — same
 * engine, same feel, no fighting.
 *
 * Disabled under `prefers-reduced-motion` so motion-sensitive visitors get
 * native, immediate scrolling.
 */
export function SmoothScrollProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => 1 - Math.pow(1 - t, 2.2),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    // --- Section snap -------------------------------------------------
    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    let isSnapping = false;

    function scheduleSnap() {
      if (isSnapping) return;
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[data-snap]"));
        if (sections.length === 0) return;

        const viewportH = window.innerHeight;
        let nearest: HTMLElement | null = null;
        let nearestDist = Infinity;
        for (const section of sections) {
          const dist = Math.abs(section.getBoundingClientRect().top);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearest = section;
          }
        }

        // Only nudge in when already close — this is the "proximity" part.
        // Far away (mid-read, or inside a tall section like a pinned
        // diagram) it does nothing.
        if (nearest && nearestDist > 6 && nearestDist < viewportH * 0.3) {
          isSnapping = true;
          lenis.scrollTo(nearest, {
            duration: 0.7,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            onComplete: () => {
              isSnapping = false;
            },
          });
        }
      }, 140);
    }

    lenis.on("scroll", scheduleSnap);

    // --- Smooth in-page anchor navigation ------------------------------
    // Any <a href="...#section"> that points at the current page (Navbar
    // links, "Explore solutions", "Discuss a project", ...) scrolls via
    // Lenis instead of the browser's instant jump.
    function onClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement)?.closest?.("a[href*='#']");
      if (!anchor || anchor.getAttribute("target") === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const [path, hash] = href.split("#");
      if (!hash) return;
      if (path && path !== window.location.pathname) return; // navigates elsewhere — let Next.js handle it

      const target = document.getElementById(hash);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", `#${hash}`);
      // Guard against the proximity-snap firing mid-animation and fighting
      // this deliberate scroll.
      isSnapping = true;
      lenis.scrollTo(target, {
        duration: 1.0,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        onComplete: () => {
          isSnapping = false;
        },
      });
    }

    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(settleTimer);
      document.removeEventListener("click", onClick);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  return null;
}
