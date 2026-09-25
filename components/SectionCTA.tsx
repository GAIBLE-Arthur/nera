import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionCTAProps {
  text: string;
  label: string;
  href?: string;
  theme?: "light" | "dark";
  className?: string;
}

/**
 * Closing call to action at the bottom of a home section: one line of
 * copy and a button pointing to the contact form.
 */
export function SectionCTA({ text, label, href = "#contact", theme = "light", className }: SectionCTAProps) {
  const isDark = theme === "dark";

  return (
    <Reveal
      className={cn(
        "mt-12 flex flex-col items-start gap-5 border-t pt-8 sm:flex-row sm:items-center sm:justify-between",
        isDark ? "border-border-dark" : "border-border",
        className
      )}
    >
      <p className={cn("text-lg font-medium tracking-tight", isDark ? "text-on-dark" : "text-ink")}>{text}</p>
      <CTAButton href={href} variant={isDark ? "ghost-dark" : "primary"} scroll={false}>
        {label}
      </CTAButton>
    </Reveal>
  );
}
