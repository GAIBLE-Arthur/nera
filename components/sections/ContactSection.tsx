import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { getContactText } from "@/data/contact";
import { site } from "@/data/site";
import type { Locale } from "@/lib/i18n";

export function ContactSection({ locale }: { locale: Locale }) {
  const t = getContactText(locale);

  return (
    <section id="contact" data-snap data-nav-theme="dark" className="bg-surface py-24 text-on-dark sm:py-28">
      <div className="container-nera grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader title={t.title} theme="dark" />
          <p className="mt-8 text-sm text-on-dark-muted">
            {t.preferEmail}{" "}
            <a href={`mailto:${site.email}`} className="text-on-dark underline underline-offset-4">
              {site.email}
            </a>
          </p>
        </div>

        <ContactForm locale={locale} />
      </div>
    </section>
  );
}
