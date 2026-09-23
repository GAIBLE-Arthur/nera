import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

interface ContentBlockProps {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  theme?: "light" | "dark";
  className?: string;
}

export function ContentBlock({ eyebrow, title, paragraphs, theme = "light", className }: ContentBlockProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <SectionHeader eyebrow={eyebrow} title={title} theme={theme} />
      <div className={cn("mt-6 space-y-4 text-sm leading-relaxed sm:text-base", theme === "dark" ? "text-on-dark-muted" : "text-muted")}>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}
