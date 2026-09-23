import type Lenis from "lenis";

/**
 * Shared handle to the single Lenis instance created by
 * SmoothScrollProvider, so other client components (e.g. Navbar's in-page
 * anchor links) can trigger the same smooth scroll engine instead of
 * falling back to the browser's instant anchor jump.
 */
export const lenisRef: { current: Lenis | null } = { current: null };
