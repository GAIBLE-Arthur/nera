import { SectionHeader } from "@/components/SectionHeader";

interface ToolsBlockProps {
  title: string;
  items: string[];
  /** Optional certification line shown above the tools. */
  certification?: string;
}

/** The tools used on a given offer, with an optional certification. */
export function ToolsBlock({ title, items, certification }: ToolsBlockProps) {
  return (
    <div>
      <SectionHeader title={title} />
      {certification && (
        <p className="mt-6 border-l-2 border-accent pl-4 text-sm font-medium leading-relaxed text-ink sm:text-base">
          {certification}
        </p>
      )}
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="border border-border px-3.5 py-2 font-mono text-xs uppercase tracking-wide text-graphite"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
