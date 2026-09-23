import type { Technology } from "@/data/technologies";

export function TechnologyItem({ name, role }: Technology) {
  return (
    <div className="border border-border-dark px-4 py-4 sm:px-5 sm:py-5">
      <p className="text-sm font-semibold text-on-dark sm:text-base">{name}</p>
      <p className="mt-1 text-xs leading-relaxed text-on-dark-muted sm:text-sm">{role}</p>
    </div>
  );
}
