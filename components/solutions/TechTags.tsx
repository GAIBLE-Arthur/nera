import { SectionHeader } from "@/components/SectionHeader";

interface TechTagsProps {
  title: string;
  items: string[];
}

export function TechTags({ title, items }: TechTagsProps) {
  return (
    <div>
      <SectionHeader title={title} />
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
