import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  as = "h2",
  className,
}: SectionHeaderProps) {
  const Heading = as;
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-mono text-xs uppercase tracking-widest2",
            isDark ? "text-accent" : "text-accent-strong"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "text-3xl font-semibold tracking-tightest sm:text-4xl",
          isDark ? "text-on-dark" : "text-ink"
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            isDark ? "text-on-dark-muted" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
