import { Hero } from "@/components/sections/Hero";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { EndToEndSection } from "@/components/sections/EndToEndSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
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
      <ProblemsSection locale={locale} />
      <SolutionsSection locale={locale} />
      <ApproachSection locale={locale} />
      <EndToEndSection locale={locale} />
      <TechnologySection locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
