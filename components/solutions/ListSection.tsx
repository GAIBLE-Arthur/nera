import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface ListSectionProps {
  eyebrow?: string;
  title: string;
  items: string[];
  theme?: "light" | "dark";
  columns?: 1 | 2;
}

export function ListSection({ eyebrow, title, items, theme = "light", columns = 1 }: ListSectionProps) {
  const isDark = theme === "dark";

  return (
    <div>
      <SectionHeader eyebrow={eyebrow} title={title} theme={theme} />
      <ul className={cn("mt-8 grid gap-3", columns === 2 && "sm:grid-cols-2")}>
        {items.map((item, index) => (
          <Reveal key={item} delay={index * 40} as="li" className="h-full">
            <div
              className={cn(
                "flex h-full items-center border px-4 py-3.5 text-sm leading-relaxed sm:text-base",
                isDark ? "border-border-dark text-on-dark-muted" : "border-border text-muted"
              )}
            >
              {item}
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
