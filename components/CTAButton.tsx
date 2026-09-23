import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost-dark";
  className?: string;
  /** Pass false when the link targets an anchor on the page already being
   * viewed — SmoothScrollProvider handles that scroll via Lenis, so
   * Next.js's own scroll-into-view would just fight it. Leave the default
   * (true) for links that navigate to a different page. */
  scroll?: boolean;
}

const variantStyles: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary: "bg-ink text-on-dark hover:bg-accent-strong",
  secondary: "border border-border text-ink hover:border-ink",
  "ghost-dark": "border border-border-dark text-on-dark hover:border-on-dark",
};

export function CTAButton({ href, children, variant = "primary", className, scroll }: CTAButtonProps) {
  return (
    <Link
      href={href}
      scroll={scroll}
      className={cn(
        "group inline-flex items-center gap-2 rounded-none px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200",
        variantStyles[variant],
        className
      )}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
