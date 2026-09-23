import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { solutionIds } from "@/data/solutions";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...solutionIds.map((id) => `/solutions/${id}`)];

  return locales.flatMap((locale) =>
    routes.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
  );
}
