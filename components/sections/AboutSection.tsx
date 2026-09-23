import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { getAboutText } from "@/data/about";
import type { Locale } from "@/lib/i18n";

export function AboutSection({ locale }: { locale: Locale }) {
  const t = getAboutText(locale);

  return (
    <section id="about" data-snap className="bg-paper py-24 sm:py-28">
      <div className="container-nera grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-sm overflow-hidden border border-border bg-graphite">
            <Image
              src="/images/founder.jpg"
              alt={t.photoAlt}
              fill
              sizes="(min-width: 1024px) 384px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeader title={t.title} />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {t.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
