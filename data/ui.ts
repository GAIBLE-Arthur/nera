import type { Locale } from "@/lib/i18n";

/**
 * Small, mostly one-off UI strings that don't belong to a single content
 * domain (section headings, diagram node labels, shared microcopy). Larger
 * blocks of editorial content live in their own files (site.ts, solutions.ts,
 * solution-pages.ts, approach.ts, technologies.ts, contact.ts, about.ts).
 *
 * Diagram nodes carry a short `description` in addition to their `label`:
 * every diagram on the site is click-to-expand (see DiagramNode), so each
 * node needs something worth expanding into.
 */

export interface DiagramNodeText {
  label: string;
  description: string;
}

interface ProblemItem {
  situation: string;
  objective: string;
}

interface SectionCtaText {
  text: string;
  label: string;
}

interface UiText {
  problemsSection: {
    title: string;
    items: ProblemItem[];
    cta: SectionCtaText;
  };
  sectionCtas: Record<"solutions" | "approach" | "technology" | "about", SectionCtaText>;
  solutionsSection: { eyebrow: string; title: string; description: string };
  endToEnd: {
    eyebrow: string;
    title: string;
    description: string;
    paragraph: string;
    chainTitle: string;
    axisLabel: string;
    chain: Record<"businessNeed" | "data" | "dataModel" | "businessLogic" | "backend" | "interface" | "users", DiagramNodeText>;
  };
  approachSection: { eyebrow: string; title: string; description: string };
  technologySection: {
    eyebrow: string;
    title: string;
    description: string;
    diagram: Record<"existingSystems" | "nera" | "existingStack" | "openSource" | "workingSystem", DiagramNodeText>;
  };
  footer: { tagline: string; solutionsHeading: string; siteHeading: string; copyrightSuffix: string };
  navbar: { solutionsHeading: string };
  solutionHero: { backLink: string };
  solutionCard: { viewSolution: string };
  solutionShared: {
    howItWorksEyebrow: string;
    examplesEyebrow: string;
    deliverablesTitle: string;
    architectureEyebrow: string;
    deploymentEyebrow: string;
    approachEyebrow: string;
    capabilitiesEyebrow: string;
    capabilitiesTitle: string;
    technologyTitle: string;
    pricingLabel: string;
    maintenanceLabel: string;
    hardwareSizedAround: string;
    whereItRunsTitle: string;
    whereItRunsDescription: string;
  };
  dataAnalyticsPage: {
    architectureTitle: string;
    approachTitle: string;
    diagram: Record<"rawData" | "auditCleaning" | "structuredModel" | "automation" | "reporting", DiagramNodeText>;
  };
  analyticsPlatformPage: {
    architectureTitle: string;
    architectureDescription: string;
    approachTitle: string;
    diagram: Record<"dataSources" | "ingestion" | "database" | "transformation" | "dataModel" | "analytics" | "users", DiagramNodeText>;
  };
  digitalPlatformsPage: {
    architectureTitle: string;
    architectureDescription: string;
    approachTitle: string;
    diagram: Record<"users" | "webInterface" | "apiBackend" | "businessLogic" | "postgres" | "externalServices", DiagramNodeText>;
    dockerNote: string;
  };
  privateAiPage: {
    approachTitle: string;
    ragDiagram: Record<"companyData" | "ingestion" | "retrieval" | "context" | "localModel" | "applicationApi" | "employee", DiagramNodeText>;
    deploymentDiagram: {
      companyNetwork: DiagramNodeText;
      dockerEnvironment: string;
      services: Record<"application" | "aiService" | "vectorLayer" | "database", DiagramNodeText>;
      hardware: DiagramNodeText;
    };
  };
  contactTypeLabel: string;
  diagramHint: string;
}

const uiText: Record<Locale, UiText> = {
  en: {
    problemsSection: {
      title: "Sound familiar?",
      items: [
        { situation: "The same reports are rebuilt by hand every week.", objective: "Figures that update themselves." },
        { situation: "Each department has its own numbers, and they never match.", objective: "One reliable source, shared by everyone." },
        { situation: "The same information is typed in two or three times.", objective: "Enter it once, use it everywhere." },
        { situation: "Everything depends on a spreadsheet only one person understands.", objective: "A clear tool the whole team can use." },
        { situation: "You want to use AI, but not just any way.", objective: "Concrete uses, with your data staying in-house." },
        { situation: "Decisions are made without a clear view of the business.", objective: "The right indicators, visible at the right time." },
      ],
      cta: { text: "Recognise one of these?", label: "Talk about your situation" },
    },
    sectionCtas: {
      solutions: { text: "Your need doesn't fit any of these boxes?", label: "Describe your problem" },
      approach: { text: "It all starts with a conversation about your situation.", label: "Schedule a call" },
      technology: { text: "Already have tools in place? That's where we start.", label: "Discuss your current setup" },
      about: { text: "A problem to solve, a project in mind?", label: "Get in touch" },
    },
    solutionsSection: {
      eyebrow: "What KAG Systèmes builds",
      title: "Solutions",
      description: "Four areas of work, one practice. Each can stand alone or connect into a larger system.",
    },
    endToEnd: {
      eyebrow: "Positioning",
      title: "End-to-end, by design",
      description: "KAG Systèmes builds the technology underneath: from data to interface.",
      paragraph:
        "A recommendation is only useful if something is built from it. KAG Systèmes stays involved across the whole chain, from the data a system runs on to the interface people use, rather than handing off at the point where it gets difficult.",
      chainTitle: "From data to interface.",
      axisLabel: "KAG Systèmes: end to end",
      chain: {
        businessNeed: { label: "Business need", description: "What the business is actually trying to solve, in plain terms." },
        data: { label: "Data", description: "Where it lives today, how reliable it is, and what needs cleaning." },
        dataModel: { label: "Data model", description: "A structure that matches how the business actually operates." },
        businessLogic: { label: "Business logic", description: "The rules and workflows that make the system behave correctly." },
        backend: { label: "Backend / services", description: "The APIs and services that run the logic and serve the data." },
        interface: { label: "Interface", description: "What people actually see and use, day to day." },
        users: { label: "Users", description: "The people the whole chain exists to serve." },
      },
    },
    approachSection: {
      eyebrow: "Method",
      title: "No complexity.",
      description: "A straightforward sequence, repeated on every engagement: small or large.",
    },
    technologySection: {
      eyebrow: "Technology",
      title: "Use what makes sense. Own what matters.",
      description:
        "KAG Systèmes can work inside what's already in place, or complete it. The technology serves the problem, it isn't the product.",
      diagram: {
        existingSystems: { label: "Existing systems", description: "What the client already runs today." },
        nera: { label: "KAG Systèmes", description: "Assesses what to keep, what to complete, and what to replace." },
        existingStack: { label: "Existing tools", description: "Extended in place when they're already fit for purpose." },
        openSource: { label: "Alternative", description: "Proposed where it cuts licensing cost and increases control." },
        workingSystem: { label: "Working system", description: "Either path ends in something the client actually runs." },
      },
    },
    footer: {
      tagline: "End-to-end technology. Results-driven.",
      solutionsHeading: "Solutions",
      siteHeading: "Site",
      copyrightSuffix: "Independent practice.",
    },
    navbar: { solutionsHeading: "Solutions" },
    solutionHero: { backLink: "Solutions" },
    solutionCard: { viewSolution: "View solution" },
    solutionShared: {
      howItWorksEyebrow: "How it works",
      examplesEyebrow: "Examples",
      deliverablesTitle: "Deliverables",
      architectureEyebrow: "Architecture",
      deploymentEyebrow: "Deployment",
      approachEyebrow: "Approach",
      capabilitiesEyebrow: "Capabilities",
      capabilitiesTitle: "Direct expertise",
      technologyTitle: "Technologies used in this type of work",
      pricingLabel: "Pricing",
      maintenanceLabel: "After go-live",
      hardwareSizedAround: "Hardware is sized around",
      whereItRunsTitle: "Where it runs",
      whereItRunsDescription:
        "A containerized deployment on hardware sized to the workload: on-premise, dedicated, or hybrid depending on the requirements.",
    },
    dataAnalyticsPage: {
      architectureTitle: "From raw data to reporting",
      approachTitle: "How this engagement runs",
      diagram: {
        rawData: { label: "Raw data", description: "ERP exports, spreadsheets, disconnected sources." },
        auditCleaning: { label: "Audit & cleaning", description: "Quality checked, deduplicated, fixed at the source where possible." },
        structuredModel: { label: "Structured model", description: "A consistent shape the rest of the business can rely on." },
        automation: { label: "Automation", description: "Scripts and scheduled jobs." },
        reporting: { label: "Reporting", description: "Dashboards in the tools already in use, or built for the occasion." },
      },
    },
    analyticsPlatformPage: {
      architectureTitle: "Sources to dashboards",
      architectureDescription:
        "A governed path from source systems to the reporting layer, open source where it reduces licensing cost and increases control.",
      approachTitle: "Built to be owned",
      diagram: {
        dataSources: { label: "Data sources", description: "ERP, CRM, files, APIs: wherever the data starts out." },
        ingestion: { label: "Ingestion", description: "Pulling data in on a schedule that matches how fast it changes." },
        database: { label: "Database / warehouse", description: "A single place for data to live, sized to the actual volume." },
        transformation: { label: "Transformation", description: "Raw tables turned into something queryable and documented." },
        dataModel: { label: "Data model", description: "A consistent layer business teams can query without guessing." },
        analytics: { label: "Analytics", description: "Dashboards and self-service reporting on top of the model." },
        users: { label: "Users", description: "The teams who ask questions of the data every day." },
      },
    },
    digitalPlatformsPage: {
      architectureTitle: "From business process to platform",
      architectureDescription:
        "A full-stack platform running on containerized infrastructure, designed around the workflow.",
      approachTitle: "Starting from the process, not the feature list",
      diagram: {
        users: { label: "Users", description: "Whoever the platform is actually built for." },
        webInterface: { label: "Web interface", description: "What users see: public pages plus authenticated areas." },
        apiBackend: { label: "API / backend", description: "The layer other systems and the interface talk to." },
        businessLogic: { label: "Business logic", description: "The rules that encode how the business actually works." },
        postgres: { label: "PostgreSQL", description: "Structured storage for the platform's real data." },
        externalServices: { label: "External services", description: "Payments, email, calendar: connected where the process needs them." },
      },
      dockerNote: "Infrastructure & deployment: the platform runs the same way in every environment",
    },
    privateAiPage: {
      approachTitle: "The retrieval layer is the real work",
      ragDiagram: {
        companyData: { label: "Company data / documents", description: "Whatever the answers should actually be grounded in." },
        ingestion: { label: "Ingestion", description: "Documents parsed and prepared for search." },
        retrieval: { label: "Indexing / retrieval", description: "Finds the passages relevant to a given question." },
        context: { label: "Context", description: "Those passages, handed to the model alongside the question." },
        localModel: { label: "Local model", description: "Sized to the workload, not necessarily the largest available." },
        applicationApi: { label: "Application / API", description: "Where the model connects to how people actually work." },
        employee: { label: "Employee", description: "Gets an answer grounded in real, current documents." },
      },
      deploymentDiagram: {
        companyNetwork: { label: "Company network", description: "The boundary the deployment operates inside." },
        dockerEnvironment: "Docker environment",
        services: {
          application: { label: "Application", description: "The interface people interact with." },
          aiService: { label: "AI service", description: "Runs the model itself." },
          vectorLayer: { label: "Vector / search layer", description: "Powers retrieval over the indexed documents." },
          database: { label: "Database", description: "Stores everything outside the documents themselves." },
        },
        hardware: { label: "Local hardware / private server", description: "Sized to the model, workload and confidentiality requirements." },
      },
    },
    contactTypeLabel: "Type",
    diagramHint: "Tap a step for detail",
  },
  fr: {
    problemsSection: {
      title: "Ça vous parle ?",
      items: [
        { situation: "Vous refaites les mêmes tableaux chaque semaine, à la main.", objective: "Des chiffres qui se mettent à jour tout seuls." },
        { situation: "Chaque service a ses propres chiffres, et ils ne concordent jamais.", objective: "Une seule source fiable, partagée par tous." },
        { situation: "Les mêmes informations sont saisies deux ou trois fois.", objective: "Une seule saisie, utilisée partout." },
        { situation: "Tout repose sur un fichier Excel que seule une personne maîtrise.", objective: "Un outil clair que toute l'équipe utilise." },
        { situation: "Vous voulez utiliser l'IA, mais pas n'importe comment.", objective: "Des usages concrets, avec vos données qui restent chez vous." },
        { situation: "Les décisions se prennent sans vision claire de l'activité.", objective: "Les bons indicateurs, visibles au bon moment." },
      ],
      cta: { text: "Vous vous reconnaissez ?", label: "Parler de votre situation" },
    },
    sectionCtas: {
      solutions: { text: "Votre besoin ne rentre dans aucune case ?", label: "Décrire votre problème" },
      approach: { text: "Tout commence par un échange sur votre situation.", label: "Planifier un échange" },
      technology: { text: "Vous avez déjà des outils en place ? On part de là.", label: "Parler de votre existant" },
      about: { text: "Un problème à régler, un projet en tête ?", label: "Prendre contact" },
    },
    solutionsSection: {
      eyebrow: "Ce que KAG Systèmes construit",
      title: "Solutions",
      description: "Quatre domaines d'intervention, une seule pratique. Chacun peut fonctionner seul ou s'intégrer dans un système plus large.",
    },
    endToEnd: {
      eyebrow: "Positionnement",
      title: "De bout en bout, par conception",
      description: "KAG Systèmes construit la technologie qui se trouve en dessous : des données à l'interface.",
      paragraph:
        "KAG Systèmes reste impliqué sur toute la chaîne, des données sur lesquelles un système fonctionne jusqu'à l'interface utilisée.",
      chainTitle: "Des données à l'interface.",
      axisLabel: "KAG Systèmes : de bout en bout",
      chain: {
        businessNeed: { label: "Besoin métier", description: "Ce que l'entreprise cherche réellement à résoudre." },
        data: { label: "Données", description: "Où elles se trouvent aujourd'hui, leur fiabilité, ce qu'il faut nettoyer." },
        dataModel: { label: "Modèle de données", description: "Une structure qui correspond au fonctionnement réel de l'entreprise." },
        businessLogic: { label: "Logique métier", description: "Les règles et workflows qui font fonctionner le système correctement." },
        backend: { label: "Backend / services", description: "Les API et services qui exécutent la logique et servent les données." },
        interface: { label: "Interface", description: "Ce que les gens voient et utilisent." },
        users: { label: "Utilisateurs", description: "Les personnes que toute cette chaîne sert." },
      },
    },
    approachSection: {
      eyebrow: "Méthode",
      title: "Pas de complexité.",
      description: "Une séquence simple, répétée sur chaque mission.",
    },
    technologySection: {
      eyebrow: "Technologie",
      title: "Utiliser ce qui a du sens. Maîtriser ce qui compte.",
      description:
        "KAG Systèmes peut travailler dans l'existant, ou le compléter. La technologie sert le problème, elle n'est pas le produit.",
      diagram: {
        existingSystems: { label: "Systèmes existants", description: "Ce que le client utilise déjà aujourd'hui." },
        nera: { label: "KAG Systèmes", description: "Évalue ce qui doit être gardé, complété, ou remplacé." },
        existingStack: { label: "Outils existants", description: "Étendus en place quand ils conviennent déjà." },
        openSource: { label: "Alternative", description: "Proposée quand elle réduit les coûts de licence et augmente le contrôle." },
        workingSystem: { label: "Système fonctionnel", description: "Les deux chemins aboutissent à quelque chose que le client utilise réellement." },
      },
    },
    footer: {
      tagline: "Technologie de bout en bout. Orientée résultat.",
      solutionsHeading: "Solutions",
      siteHeading: "Site",
      copyrightSuffix: "Pratique indépendante.",
    },
    navbar: { solutionsHeading: "Solutions" },
    solutionHero: { backLink: "Solutions" },
    solutionCard: { viewSolution: "Voir la solution" },
    solutionShared: {
      howItWorksEyebrow: "Fonctionnement",
      examplesEyebrow: "Exemples",
      deliverablesTitle: "Livrables",
      architectureEyebrow: "Architecture",
      deploymentEyebrow: "Déploiement",
      approachEyebrow: "Approche",
      capabilitiesEyebrow: "Compétences",
      capabilitiesTitle: "Expertise directe",
      technologyTitle: "Technologies utilisées pour ce type de mission",
      pricingLabel: "Tarification",
      maintenanceLabel: "Après la mise en production",
      hardwareSizedAround: "Le matériel est dimensionné selon",
      whereItRunsTitle: "Où cela fonctionne",
      whereItRunsDescription:
        "Un déploiement conteneurisé sur du matériel dimensionné à la charge : sur site, dédié, ou hybride selon les exigences.",
    },
    dataAnalyticsPage: {
      architectureTitle: "Des données brutes au reporting",
      approachTitle: "Comment cette mission se déroule",
      diagram: {
        rawData: { label: "Données brutes", description: "Exports ERP, tableurs, sources déconnectées." },
        auditCleaning: { label: "Audit & nettoyage", description: "Qualité vérifiée, doublons supprimés, corrigé à la source si possible." },
        structuredModel: { label: "Modèle structuré", description: "Une structure cohérente sur laquelle le reste de l'entreprise peut s'appuyer." },
        automation: { label: "Automatisation", description: "Scripts et tâches planifiées." },
        reporting: { label: "Reporting", description: "Des tableaux de bord dans les outils déjà utilisés ou créés pour l'occasion." },
      },
    },
    analyticsPlatformPage: {
      architectureTitle: "Des sources aux tableaux de bord",
      architectureDescription:
        "Un chemin gouverné depuis les systèmes sources jusqu'à la couche de reporting, open source quand cela réduit les coûts de licence et augmente le contrôle.",
      approachTitle: "Conçu pour être maîtrisé",
      diagram: {
        dataSources: { label: "Sources de données", description: "ERP, CRM, fichiers, API : là où les données démarrent." },
        ingestion: { label: "Ingestion", description: "Récupération des données selon un rythme adapté à leur fréquence de changement." },
        database: { label: "Base de données / entrepôt", description: "Un lieu unique pour les données, dimensionné au volume réel." },
        transformation: { label: "Transformation", description: "Des tables brutes transformées en données requêtables et documentées." },
        dataModel: { label: "Modèle de données", description: "Une couche cohérente que les équipes métier peuvent interroger." },
        analytics: { label: "Analytique", description: "Tableaux de bord et reporting en libre-service au-dessus du modèle." },
        users: { label: "Utilisateurs", description: "Les équipes qui interrogent les données au quotidien." },
      },
    },
    digitalPlatformsPage: {
      architectureTitle: "Du processus métier à la plateforme",
      architectureDescription:
        "Une plateforme full-stack fonctionnant sur une infrastructure conteneurisée, conçue autour du workflow.",
      approachTitle: "En partant du processus, pas de la liste de fonctionnalités",
      diagram: {
        users: { label: "Utilisateurs", description: "Ceux pour qui la plateforme est réellement construite." },
        webInterface: { label: "Interface web", description: "Ce que voient les utilisateurs : pages publiques et espaces authentifiés." },
        apiBackend: { label: "API / backend", description: "La couche à laquelle parlent les autres systèmes et l'interface." },
        businessLogic: { label: "Logique métier", description: "Les règles qui encodent le fonctionnement réel de l'entreprise." },
        postgres: { label: "PostgreSQL", description: "Stockage structuré pour les données réelles de la plateforme." },
        externalServices: { label: "Services externes", description: "Paiements, email, calendrier : connectés quand le processus l'exige." },
      },
      dockerNote: "Infrastructure & déploiement : la plateforme fonctionne de la même façon dans chaque environnement",
    },
    privateAiPage: {
      approachTitle: "La couche de recherche documentaire est le véritable travail",
      ragDiagram: {
        companyData: { label: "Données / documents de l'entreprise", description: "Ce sur quoi les réponses doivent réellement s'appuyer." },
        ingestion: { label: "Ingestion", description: "Documents analysés et préparés pour la recherche." },
        retrieval: { label: "Indexation / recherche", description: "Retrouve les passages pertinents pour une question donnée." },
        context: { label: "Contexte", description: "Ces passages, transmis au modèle en plus de la question." },
        localModel: { label: "Modèle local", description: "Dimensionné pour la charge, pas nécessairement le plus grand disponible." },
        applicationApi: { label: "Application / API", description: "Là où le modèle se connecte à l'usage réel des équipes." },
        employee: { label: "Collaborateur", description: "Obtient une réponse ancrée dans des documents réels et à jour." },
      },
      deploymentDiagram: {
        companyNetwork: { label: "Réseau de l'entreprise", description: "Le périmètre dans lequel le déploiement opère." },
        dockerEnvironment: "Environnement Docker",
        services: {
          application: { label: "Application", description: "L'interface avec laquelle les gens interagissent." },
          aiService: { label: "Service IA", description: "Exécute le modèle lui-même." },
          vectorLayer: { label: "Couche vectorielle / recherche", description: "Alimente la recherche dans les documents indexés." },
          database: { label: "Base de données", description: "Stocke tout ce qui n'est pas les documents eux-mêmes." },
        },
        hardware: { label: "Matériel local / serveur privé", description: "Dimensionné selon le modèle, la charge et les exigences de confidentialité." },
      },
    },
    contactTypeLabel: "Type",
    diagramHint: "Touchez une étape pour en savoir plus",
  },
};

export function getUiText(locale: Locale): UiText {
  return uiText[locale];
}
