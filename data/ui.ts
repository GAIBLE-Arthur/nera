import type { Locale } from "@/lib/i18n";

/**
 * Small, mostly one-off UI strings that don't belong to a single content
 * domain (section headings, diagram node labels, shared microcopy). Larger
 * blocks of editorial content live in their own files (site.ts, solutions.ts,
 * solution-pages.ts, approach.ts, contact.ts, about.ts).
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

interface FaqItem {
  question: string;
  answer: string;
}

interface UiText {
  faqSection: { title: string; items: FaqItem[] };
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
    ragTitle: string;
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
    faqSection: {
      title: "Frequently asked questions",
      items: [
        { question: "How much does it cost?", answer: "The price depends on the problem to fix. A precise quote is given after a first conversation, with no commitment. Ballpark: [range to fill in]." },
        { question: "How long does it take?", answer: "From a few days to automate a report to a few weeks for a custom tool. The timeline is set in the quote." },
        { question: "Does our data need to be clean to start?", answer: "No. Putting your files back in order is part of the work." },
        { question: "Do we have to change our software?", answer: "No. The work starts from what you already use. A tool is only replaced if it really gets in the way." },
        { question: "Where does our data go?", answer: "It stays with you, or in the environment you choose. Nothing is sent to an outside service without your agreement." },
        { question: "What if you're not available?", answer: "Everything that's built is documented and belongs to you. Another provider can take over at any time." },
        { question: "Where do you work?", answer: "[Area to fill in]: on site in the region, remotely anywhere in France." },
      ],
    },
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
      cta: { text: "Recognise one of these?", label: "Describe your problem" },
    },
    sectionCtas: {
      solutions: { text: "Your need doesn't fit any of these boxes?", label: "Describe your problem" },
      approach: { text: "It all starts with a conversation about your situation.", label: "Describe your problem" },
      technology: { text: "Already have tools in place? KAG Systèmes starts from there.", label: "Describe your problem" },
      about: { text: "A problem to solve, a project in mind?", label: "Describe your problem" },
    },
    solutionsSection: {
      eyebrow: "What KAG Systèmes builds",
      title: "Solutions",
      description: "Four ways to fix a concrete problem. Each can stand alone or connect into a larger system.",
    },
    endToEnd: {
      eyebrow: "Positioning",
      title: "From A to Z, one point of contact.",
      description:
        "No subcontracting and no hand-offs between providers: the same person understands your need, organises your data and builds the tool.",
      paragraph:
        "Every step is covered, from what you're trying to fix to what your teams use every day.",
      chainTitle: "From the need to the screen.",
      axisLabel: "KAG Systèmes: end to end",
      chain: {
        businessNeed: { label: "Your need", description: "What you're actually trying to fix, in plain terms." },
        data: { label: "Your data", description: "Where it is today, how reliable it is, what needs tidying." },
        dataModel: { label: "Organising the data", description: "A structure that matches how your business really works." },
        businessLogic: { label: "Your business rules", description: "The rules and steps the tool has to follow." },
        backend: { label: "The engine", description: "What runs behind the scenes and keeps everything up to date." },
        interface: { label: "The screens", description: "What people see and use every day." },
        users: { label: "Your teams", description: "The people the whole chain is built for." },
      },
    },
    approachSection: {
      eyebrow: "Method",
      title: "No complexity.",
      description: "Five steps, always the same.",
    },
    technologySection: {
      eyebrow: "Technology",
      title: "Use what makes sense. Own what matters.",
      description:
        "Your current tools are kept when they work, and completed when needed. The technology serves the problem, it isn't the product.",
      diagram: {
        existingSystems: { label: "What you already have", description: "The software and files you use today." },
        nera: { label: "KAG Systèmes", description: "Assesses what to keep, what to complete, and what to replace." },
        existingStack: { label: "Existing tools", description: "Extended in place when they're already fit for purpose." },
        openSource: { label: "Alternative", description: "Proposed where it cuts licensing cost and increases control." },
        workingSystem: { label: "A tool that works", description: "Either way, the result is something your teams actually use." },
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
      pricingLabel: "Pricing",
      maintenanceLabel: "After go-live",
      hardwareSizedAround: "Hardware depends on",
      whereItRunsTitle: "Where it runs",
      whereItRunsDescription:
        "On a server at your premises, on a dedicated server, or a mix of both, depending on your needs.",
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
        "The path your data takes, from the software where it's entered to the screens where you use it.",
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
      architectureTitle: "From your process to the tool",
      architectureDescription:
        "The way you work, turned into a tool connected to your software and services (payment, email, calendar).",
      approachTitle: "Starting from the way you work",
      diagram: {
        users: { label: "Users", description: "Whoever the platform is actually built for." },
        webInterface: { label: "Web interface", description: "What users see: public pages plus authenticated areas." },
        apiBackend: { label: "API / backend", description: "The layer other systems and the interface talk to." },
        businessLogic: { label: "Business logic", description: "The rules that encode how the business actually works." },
        postgres: { label: "Database", description: "Structured storage for the platform's real data." },
        externalServices: { label: "External services", description: "Payments, email, calendar: connected where the process needs them." },
      },
      dockerNote: "Installation: the tool runs the same way everywhere",
    },
    privateAiPage: {
      ragTitle: "How the AI finds the right answer",
      approachTitle: "The real work is your data",
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
        dockerEnvironment: "Dedicated environment",
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
    faqSection: {
      title: "Questions fréquentes",
      items: [
        { question: "Combien ça coûte ?", answer: "Le prix dépend du problème à régler. Un devis précis est donné après un premier échange, sans engagement. Ordre de grandeur : [fourchette à compléter]." },
        { question: "Combien de temps ça prend ?", answer: "De quelques jours pour automatiser un rapport à quelques semaines pour un outil sur mesure. Le délai est fixé dans le devis." },
        { question: "Faut-il des données propres pour commencer ?", answer: "Non. Remettre de l'ordre dans vos fichiers fait partie du travail." },
        { question: "Faut-il changer nos logiciels ?", answer: "Non. Le travail part de ce que vous utilisez déjà. Un outil n'est remplacé que s'il bloque vraiment." },
        { question: "Où vont nos données ?", answer: "Elles restent chez vous, ou dans l'environnement que vous choisissez. Rien n'est envoyé à un service externe sans votre accord." },
        { question: "Et si vous n'êtes pas disponible ?", answer: "Tout ce qui est construit est documenté et vous appartient. Un autre prestataire peut reprendre la main à tout moment." },
        { question: "Vous intervenez où ?", answer: "[Zone à compléter] : sur site dans la région, à distance partout en France." },
      ],
    },
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
      cta: { text: "Vous vous reconnaissez ?", label: "Décrire votre problème" },
    },
    sectionCtas: {
      solutions: { text: "Votre besoin ne rentre dans aucune case ?", label: "Décrire votre problème" },
      approach: { text: "Tout commence par un échange sur votre situation.", label: "Décrire votre problème" },
      technology: { text: "Vous avez déjà des outils en place ? KAG Systèmes part de là.", label: "Décrire votre problème" },
      about: { text: "Un problème à régler, un projet en tête ?", label: "Décrire votre problème" },
    },
    solutionsSection: {
      eyebrow: "Ce que KAG Systèmes construit",
      title: "Solutions",
      description: "Quatre façons de régler un problème concret. Chacune peut fonctionner seule ou s'intégrer dans un système plus large.",
    },
    endToEnd: {
      eyebrow: "Positionnement",
      title: "De A à Z, un seul interlocuteur.",
      description:
        "Pas de sous-traitance ni de relais entre prestataires : la même personne comprend votre besoin, organise vos données et construit l'outil.",
      paragraph:
        "Chaque étape est prise en charge, de ce que vous cherchez à régler jusqu'à ce que vos équipes utilisent tous les jours.",
      chainTitle: "Du besoin à l'écran.",
      axisLabel: "KAG Systèmes : de bout en bout",
      chain: {
        businessNeed: { label: "Votre besoin", description: "Ce que vous cherchez vraiment à régler." },
        data: { label: "Vos données", description: "Où elles sont aujourd'hui, leur fiabilité, ce qu'il faut remettre en ordre." },
        dataModel: { label: "Organisation des données", description: "Une structure qui correspond à votre fonctionnement réel." },
        businessLogic: { label: "Vos règles de gestion", description: "Les règles et étapes que l'outil doit suivre." },
        backend: { label: "Le moteur de l'outil", description: "Ce qui tourne en coulisses et garde tout à jour." },
        interface: { label: "Les écrans", description: "Ce que vos équipes voient et utilisent chaque jour." },
        users: { label: "Vos équipes", description: "Les personnes pour qui toute la chaîne est construite." },
      },
    },
    approachSection: {
      eyebrow: "Méthode",
      title: "Pas de complexité.",
      description: "Cinq étapes, toujours les mêmes.",
    },
    technologySection: {
      eyebrow: "Technologie",
      title: "Utiliser ce qui a du sens. Maîtriser ce qui compte.",
      description:
        "Vos outils actuels sont conservés quand ils fonctionnent, et complétés quand il le faut. La technologie sert le problème, elle n'est pas le produit.",
      diagram: {
        existingSystems: { label: "Ce que vous avez déjà", description: "Les logiciels et fichiers que vous utilisez aujourd'hui." },
        nera: { label: "KAG Systèmes", description: "Évalue ce qui doit être gardé, complété, ou remplacé." },
        existingStack: { label: "Outils existants", description: "Étendus en place quand ils conviennent déjà." },
        openSource: { label: "Alternative", description: "Proposée quand elle réduit les coûts de licence et augmente le contrôle." },
        workingSystem: { label: "Un outil qui marche", description: "Dans les deux cas, le résultat est un outil que vos équipes utilisent vraiment." },
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
      pricingLabel: "Tarif",
      maintenanceLabel: "Après la mise en service",
      hardwareSizedAround: "Le matériel dépend de",
      whereItRunsTitle: "Où cela fonctionne",
      whereItRunsDescription:
        "Sur un serveur chez vous, sur un serveur dédié, ou un mélange des deux, selon vos besoins.",
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
        "Le chemin de vos données, du logiciel où elles sont saisies jusqu'aux écrans où vous les exploitez.",
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
      architectureTitle: "De votre processus à l'outil",
      architectureDescription:
        "Votre façon de travailler, traduite en un outil relié à vos logiciels et à vos services (paiement, e-mail, agenda).",
      approachTitle: "En partant de votre façon de travailler",
      diagram: {
        users: { label: "Utilisateurs", description: "Ceux pour qui la plateforme est réellement construite." },
        webInterface: { label: "Interface web", description: "Ce que voient les utilisateurs : pages publiques et espaces authentifiés." },
        apiBackend: { label: "API / backend", description: "La couche à laquelle parlent les autres systèmes et l'interface." },
        businessLogic: { label: "Logique métier", description: "Les règles qui encodent le fonctionnement réel de l'entreprise." },
        postgres: { label: "Base de données", description: "Stockage structuré pour les données réelles de l'outil." },
        externalServices: { label: "Services externes", description: "Paiements, email, calendrier : connectés quand le processus l'exige." },
      },
      dockerNote: "Installation : l'outil fonctionne de la même façon partout",
    },
    privateAiPage: {
      ragTitle: "Comment l'IA trouve la bonne réponse",
      approachTitle: "Le vrai travail, c'est vos données",
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
        dockerEnvironment: "Environnement dédié",
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
