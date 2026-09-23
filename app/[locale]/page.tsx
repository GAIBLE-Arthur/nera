import { Hero } from "@/components/sections/Hero";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { EndToEndSection } from "@/components/sections/EndToEndSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  return (
    <>
      <Hero locale={locale} />
      <SolutionsSection locale={locale} />
      <EndToEndSection locale={locale} />
      <ApproachSection locale={locale} />
      <EngagementSection locale={locale} />
      <TechnologySection locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
