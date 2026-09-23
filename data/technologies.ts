import type { Locale } from "@/lib/i18n";

export interface Technology {
  name: string;
  role: string;
}

interface TechnologyEntry {
  name: string;
  role: Record<Locale, string>;
}

// Representative technologies only, not an exhaustive catalogue.
// The point is to show that tooling is chosen per problem, not sold as the product.
const technologyEntries: TechnologyEntry[] = [
  { name: "PostgreSQL", role: { en: "Relational storage and warehousing", fr: "Stockage relationnel et entrepôt de données" } },
  { name: "Python", role: { en: "Data processing and automation", fr: "Traitement de données et automatisation" } },
  { name: "ETL", role: { en: "Extracting, transforming and loading data", fr: "Extraction, transformation et chargement des données" } },
  { name: "Docker", role: { en: "Packaging and deployment", fr: "Packaging et déploiement" } },
  { name: "dbt", role: { en: "Data transformation and modeling", fr: "Transformation et modélisation des données" } },
  { name: "Apache Superset", role: { en: "Open-source analytics and dashboards", fr: "Analytics et tableaux de bord open source" } },
  { name: "Power BI", role: { en: "Reporting inside a Microsoft environment", fr: "Reporting dans un environnement Microsoft" } },
  { name: "Microsoft Fabric", role: { en: "Managed analytics at platform scale", fr: "Analytics managés à l'échelle d'une plateforme" } },
  { name: "ONLYOFFICE", role: { en: "Collaborative document workflows", fr: "Workflows documentaires collaboratifs" } },
];

export function getTechnologies(locale: Locale): Technology[] {
  return technologyEntries.map((t) => ({ name: t.name, role: t.role[locale] }));
}
