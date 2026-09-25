import type { Locale } from "@/lib/i18n";
import type { SolutionId } from "./solutions";

export interface SolutionPageContent {
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  problem: { title: string; body: string[] };
  /** When set, the problem is shown as a list of situations instead of paragraphs. */
  problemSituations?: string[];
  whatWeBuild: { title: string; items: string[] };
  /** Overrides the shared "Deliverables" heading for this page. */
  deliverablesTitle?: string;
  deliverables: string[];
  /** Omitted on pages that no longer show a technology list. */
  technologies?: string[];
  approachNote: string;
  cta: { title: string; body: string; button?: string };
  /** Private AI only — infrastructure/pricing disclaimer. */
  pricingNote?: string;
  /** Private AI only — deployment/confidentiality clarification. */
  privacyNote?: string;
  /** Private AI only — factors that drive hardware/infrastructure sizing. */
  sizingFactors?: string[];
  /** Private AI only — short, jargon-free explanation of retrieval (RAG). */
  ragExplainer?: string;
  /** Private AI only — what happens after go-live: model updates, monitoring, infra cost. */
  maintenanceNote?: string;
}

type SolutionPages = Record<SolutionId, Record<Locale, SolutionPageContent>>;

const solutionPages: SolutionPages = {
  "data-analytics": {
    en: {
      eyebrow: "01 · Data & reporting",
      heroTitle: "Data & reporting",
      heroLead:
        "Accurate, up-to-date figures, without rebuilding them by hand. We start from your current files and software.",
      problem: { title: "The problem", body: [] },
      problemSituations: [
        "Every month, someone spends hours compiling the same figures.",
        "Two reports on the same topic don't give the same result.",
        "Every new question means another Excel export.",
      ],
      whatWeBuild: {
        title: "What changes for you",
        items: [
          "You know where your data is and which of it you can trust.",
          "Your files are cleaned and organised, and the whole team can rely on them.",
          "Repetitive tasks run on their own.",
          "Your reports update without anyone touching them.",
          "Your indicators live in the tool you already use.",
        ],
      },
      deliverablesTitle: "What you get",
      deliverables: [
        "A clear picture of your data",
        "Clean, structured files",
        "Automatic updates",
        "Indicators defined with you",
        "Dashboards in your tool (Power BI, Excel or other)",
      ],
      approachNote:
        "Close to your data: we look at your files, talk to the people who build the reports, and fix things directly.",
      cta: {
        title: "Have a data problem you can already describe?",
        body: "That's usually enough to start. Discuss what isn't working today and what fixing it would actually take.",
        button: "Describe your problem",
      },
    },
    fr: {
      eyebrow: "01 · Données & reporting",
      heroTitle: "Données & reporting",
      heroLead:
        "Des chiffres justes, à jour, sans les refaire à la main. On part de vos fichiers et de vos logiciels actuels.",
      problem: { title: "Le problème", body: [] },
      problemSituations: [
        "Chaque mois, quelqu'un passe des heures à compiler les mêmes chiffres.",
        "Deux rapports sur le même sujet ne donnent pas le même résultat.",
        "Chaque nouvelle question demande un nouvel export Excel.",
      ],
      whatWeBuild: {
        title: "Ce qui change pour vous",
        items: [
          "Vous savez où sont vos données et lesquelles sont fiables.",
          "Vos fichiers sont nettoyés et rangés, toute l'équipe peut s'y fier.",
          "Les tâches répétitives tournent toutes seules.",
          "Vos rapports se mettent à jour sans intervention.",
          "Vos indicateurs sont dans l'outil que vous utilisez déjà.",
        ],
      },
      deliverablesTitle: "Ce que vous recevez",
      deliverables: [
        "Un état des lieux de vos données",
        "Des fichiers propres et structurés",
        "Des mises à jour automatiques",
        "Des indicateurs définis avec vous",
        "Des tableaux de bord dans votre outil (Power BI, Excel ou autre)",
      ],
      approachNote:
        "Au plus près de vos données : on regarde vos fichiers, on parle avec ceux qui font les rapports, et on corrige directement.",
      cta: {
        title: "Vous pouvez déjà décrire un problème de données ?",
        body: "C'est souvent suffisant pour démarrer. Discutons de ce qui ne fonctionne pas aujourd'hui et de ce qu'il faudrait pour le corriger.",
        button: "Décrire votre problème",
      },
    },
  },
  "analytics-platform": {
    en: {
      eyebrow: "02 · Analytics platform",
      heroTitle: "Analytics platform",
      heroLead:
        "A single database that brings all your data together, up to date and reliable. Your reports, analyses and AI projects all start from there.",
      problem: { title: "The problem", body: [] },
      problemSituations: [
        "Your data is scattered across the ERP, accounting, the CRM and dozens of files.",
        "History gets lost: there's no way to compare with last year.",
        "Every new report or project starts from scratch to fetch the data.",
      ],
      whatWeBuild: {
        title: "What changes for you",
        items: [
          "All your data is gathered in one place.",
          "It's cleaned and updated automatically.",
          "History is kept, so you can compare over time.",
          "Your reports, analyses and AI projects start from the same base.",
          "The platform is yours, with no dependency on a vendor.",
        ],
      },
      deliverablesTitle: "What you get",
      deliverables: [
        "Your data sources connected",
        "A central database",
        "Automatic updates",
        "A clear, documented data model",
        "Access suited to each person",
        "Go-live and documentation",
      ],
      approachNote:
        "A platform that belongs to you. When it's cheaper and simpler, we propose a licence-free alternative that you run on your own.",
      cta: {
        title: "Is your data scattered?",
        body: "Tell us which software and files you use today. We'll start from there.",
        button: "Describe your need",
      },
    },
    fr: {
      eyebrow: "02 · Plateforme analytique",
      heroTitle: "Plateforme analytique",
      heroLead:
        "Une base unique qui rassemble toutes vos données, à jour et fiable. Vos rapports, vos analyses et vos projets IA partent tous de là.",
      problem: { title: "Le problème", body: [] },
      problemSituations: [
        "Vos données sont éparpillées entre l'ERP, la compta, le CRM et des dizaines de fichiers.",
        "L'historique se perd : impossible de comparer avec l'an dernier.",
        "Chaque nouveau rapport ou projet repart de zéro pour aller chercher les données.",
      ],
      whatWeBuild: {
        title: "Ce qui change pour vous",
        items: [
          "Toutes vos données sont réunies au même endroit.",
          "Elles sont nettoyées et mises à jour automatiquement.",
          "L'historique est conservé, vous pouvez comparer dans le temps.",
          "Vos rapports, vos analyses et vos projets IA partent de la même base.",
          "La plateforme vous appartient, sans dépendre d'un éditeur.",
        ],
      },
      deliverablesTitle: "Ce que vous recevez",
      deliverables: [
        "Vos sources de données connectées",
        "Une base de données centrale",
        "Des mises à jour automatiques",
        "Un modèle de données clair et documenté",
        "Des accès adaptés à chaque personne",
        "La mise en service et la documentation",
      ],
      approachNote:
        "Une plateforme qui vous appartient. Quand c'est moins cher et plus simple, on propose une alternative sans licence, que vous exploitez en autonomie.",
      cta: {
        title: "Vos données sont éparpillées ?",
        body: "Dites-nous quels logiciels et fichiers vous utilisez aujourd'hui. On part de là.",
        button: "Décrire votre besoin",
      },
    },
  },
  "digital-platforms": {
    en: {
      eyebrow: "04 · Business tools",
      heroTitle: "Business tools",
      heroLead:
        "From business process to working platform: public interface, accounts, admin space and the backend.",
      problem: {
        title: "The problem",
        body: [
          "A spreadsheet, a shared inbox and a handful of disconnected tools can run a small operation for a while, until they can't. Growth exposes the gaps: no single source of truth, manual handoffs, and processes that live in someone's head.",
          "It's about building, for specific needs, a platform designed around how the business actually works.",
        ],
      },
      whatWeBuild: {
        title: "What KAG Systèmes builds",
        items: [
          "A public-facing interface and, where needed, authenticated user accounts",
          "A client space and an administrator space with the right permissions",
          "Business workflows encoded directly into the platform",
          "An API and backend that other systems can integrate with",
          "A database designed around the business's actual data",
          "Scheduling, payments, notifications or automations where the process needs them",
          "Containerized deployment so the platform runs the same way in every environment",
        ],
      },
      deliverables: [
        "Product and workflow scoping",
        "API / backend",
        "Web interface, public and authenticated areas",
        "PostgreSQL database",
        "Containerized deployment (Docker)",
        "Security and access control",
      ],
      technologies: ["TypeScript", "PostgreSQL", "Docker", "API design", "Automations & integrations"],
      approachNote:
        "KAG Systèmes starts from the business process, not a feature list. The platform is scoped around what the workflow actually requires before any interface is designed.",
      cta: {
        title: "Have a business process you want turned into a platform?",
        body: "Discuss the process you want turned into a platform, and what it would need to cover end to end.",
      },
    },
    fr: {
      eyebrow: "04 · Outils métier",
      heroTitle: "Outils métier",
      heroLead:
        "Du processus métier à la plateforme fonctionnelle : interface publique, comptes, espace admin et le backend.",
      problem: {
        title: "Le problème",
        body: [
          "Un tableur, une boîte mail partagée et quelques outils qui ne se parlent pas peuvent suffire un temps. Mais la croissance révèle vite les limites : aucune source de vérité unique, des transferts manuels, des processus qui n'existent que dans la tête de quelqu'un.",
          "Il s'agit de construire, pour des besoins spécifiques, une plateforme pensée autour du fonctionnement réel de l'entreprise.",
        ],
      },
      whatWeBuild: {
        title: "Ce que KAG Systèmes construit",
        items: [
          "Une interface publique et, si besoin, des comptes utilisateurs authentifiés",
          "Un espace client et un espace administrateur avec les bonnes permissions",
          "Les workflows métier encodés directement dans la plateforme",
          "Une API et un backend avec lesquels d'autres systèmes peuvent s'intégrer",
          "Une base de données conçue autour des données réelles de l'entreprise",
          "Planification, paiements, notifications ou automatisations quand le processus l'exige",
          "Un déploiement conteneurisé pour que la plateforme fonctionne de la même façon dans chaque environnement",
        ],
      },
      deliverables: [
        "Cadrage produit et workflows",
        "API / backend",
        "Interface web, espaces public et authentifié",
        "Base de données PostgreSQL",
        "Déploiement conteneurisé (Docker)",
        "Sécurité et contrôle d'accès",
      ],
      technologies: ["TypeScript", "PostgreSQL", "Docker", "Conception d'API", "Automatisations & intégrations"],
      approachNote:
        "KAG Systèmes part du processus métier, pas d'une liste de fonctionnalités. La plateforme est cadrée selon ce que le workflow exige réellement, avant même de concevoir une interface.",
      cta: {
        title: "Vous avez un processus métier à transformer en plateforme ?",
        body: "Discutons du processus que vous voulez transformer en plateforme, et de ce qu'il faudrait couvrir de bout en bout.",
      },
    },
  },
  "private-ai": {
    en: {
      eyebrow: "03 · Private AI",
      heroTitle: "Private AI",
      heroLead:
        "AI that depends on what's underneath: company data, retrieval, a model, and the application people actually use.",
      problem: {
        title: "The problem",
        body: [
          "What determines whether AI is actually useful, or actually private, is everything underneath it: which documents it can see, how they're indexed, which model runs it, and where that model runs.",
          "KAG Systèmes works on the full system, from ingesting company documents and data to deploying the model in an environment that matches the business's confidentiality requirements.",
        ],
      },
      whatWeBuild: {
        title: "What KAG Systèmes builds",
        items: [
          "Ingestion of company documents and data into a searchable index",
          "A retrieval layer (RAG) that gives the model relevant context instead of guesswork",
          "A local or private model sized to the workload, not necessarily the largest available",
          "An application or API layer connecting the model to how people actually work",
          "Containerized deployment, on-premise or on dedicated hardware when required",
        ],
      },
      deliverables: [
        "Document and data ingestion pipeline",
        "Retrieval / indexing layer",
        "Model selection and deployment",
        "Application or API integration",
        "Docker-based deployment package",
        "Sizing and infrastructure recommendation",
      ],
      technologies: ["Docker", "Open-source LLMs", "Vector / search layer", "Python", "API integration"],
      approachNote:
        "KAG Systèmes treats the retrieval layer and the data feeding it as the real engineering problem. The model is one component among several, not the whole project.",
      pricingNote:
        "Infrastructure and pricing depend on the selected model, workload, hardware and deployment requirements.",
      maintenanceNote:
        "Private AI has a life after go-live: models evolve, usage shifts. That follow-up gets scoped as part of the project — it isn't an open-ended support commitment.",
      privacyNote:
        "Whether data stays fully on-premise depends on the deployment chosen, from fully local infrastructure to hybrid setups. This is defined with the client before the project starts.",
      ragExplainer:
        "In practice, this means the model doesn't rely only on what it was trained on. Before answering, it retrieves the most relevant passages from the company's own documents and uses them as context, which keeps answers grounded in current, real information instead of memory alone.",
      sizingFactors: [
        "Model size",
        "Number of concurrent users",
        "Expected response latency",
        "Amount of document context retrieved per query",
        "Overall workload",
        "Confidentiality requirements",
      ],
      cta: {
        title: "Considering AI that runs on your own data?",
        body: "Discuss the documents, systems and confidentiality requirements involved. Sizing follows from there.",
      },
    },
    fr: {
      eyebrow: "03 · IA privée",
      heroTitle: "IA privée",
      heroLead:
        "Une IA qui dépend de ce qu'il y a dessous : données de l'entreprise, recherche documentaire, modèle, et l'application réellement utilisée.",
      problem: {
        title: "Le problème",
        body: [
          "Ce qui détermine si une IA est réellement utile, ou réellement privée, c'est tout ce qu'il y a dessous : quels documents elle peut voir, comment ils sont indexés, quel modèle l'exécute, et où ce modèle tourne.",
          "KAG Systèmes travaille sur le système complet, de l'ingestion des documents et données de l'entreprise jusqu'au déploiement du modèle dans un environnement conforme aux exigences de confidentialité de l'entreprise.",
        ],
      },
      whatWeBuild: {
        title: "Ce que KAG Systèmes construit",
        items: [
          "Ingestion des documents et données de l'entreprise dans un index consultable",
          "Une couche de recherche documentaire (RAG) qui donne au modèle un contexte pertinent plutôt que des approximations",
          "Un modèle local ou privé dimensionné pour la charge, pas nécessairement le plus grand disponible",
          "Une couche application ou API qui relie le modèle à l'usage réel des équipes",
          "Un déploiement conteneurisé, sur site ou sur du matériel dédié si nécessaire",
        ],
      },
      deliverables: [
        "Pipeline d'ingestion de documents et données",
        "Couche de recherche documentaire / indexation",
        "Sélection et déploiement du modèle",
        "Intégration application ou API",
        "Package de déploiement basé sur Docker",
        "Recommandation de dimensionnement et d'infrastructure",
      ],
      technologies: ["Docker", "LLM open source", "Couche vectorielle / recherche", "Python", "Intégration API"],
      approachNote:
        "KAG Systèmes considère la couche de recherche documentaire et les données qui l'alimentent comme le véritable enjeu d'ingénierie. Le modèle est un composant parmi d'autres, pas le projet entier.",
      pricingNote:
        "L'infrastructure et le tarif dépendent du modèle choisi, de la charge, du matériel et des exigences de déploiement.",
      maintenanceNote:
        "L'IA privée a une vie après la mise en production : les modèles évoluent, les usages changent. Ce suivi est cadré dès le projet — ce n'est pas un engagement de support illimité.",
      privacyNote:
        "Le fait que les données restent entièrement sur site dépend du déploiement choisi, d'une infrastructure totalement locale à des configurations hybrides. Cela est défini avec le client avant le démarrage du projet.",
      ragExplainer:
        "En pratique, cela signifie que le modèle ne s'appuie pas uniquement sur ce qu'il a appris à l'entraînement. Avant de répondre, il recherche les passages les plus pertinents dans les documents de l'entreprise et les utilise comme contexte, ce qui garde les réponses ancrées dans une information réelle et à jour plutôt que dans la seule mémoire du modèle.",
      sizingFactors: [
        "Taille du modèle",
        "Nombre d'utilisateurs simultanés",
        "Latence de réponse attendue",
        "Volume de contexte documentaire récupéré par requête",
        "Charge globale",
        "Exigences de confidentialité",
      ],
      cta: {
        title: "Vous envisagez une IA qui fonctionne sur vos propres données ?",
        body: "Discutons des documents, systèmes et exigences de confidentialité concernés. Le dimensionnement en découle.",
      },
    },
  },
};

export function getSolutionPage(locale: Locale, id: SolutionId): SolutionPageContent {
  return solutionPages[id][locale];
}
