import { ToolsBlock } from "@/components/solutions/ToolsBlock";
import { getSolutionPage } from "@/data/solution-pages";
import type { Locale } from "@/lib/i18n";

export function ToolsSection({ locale }: { locale: Locale }) {
  const tools = getSolutionPage(locale, "data-analytics").tools;
  if (!tools) return null;

  return (
    <section id="tools" className="bg-paper py-24 sm:py-28">
      <div className="container-nera">
        <ToolsBlock title={tools.title} items={tools.items} certification={tools.certification} />
      </div>
    </section>
  );
}
