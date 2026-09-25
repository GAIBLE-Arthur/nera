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
        "Accurate, up-to-date figures, without rebuilding them by hand, starting from your current files and software.",
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
        "Close to your data: reviewing your files, talking to the people who build the reports, and fixing things directly.",
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
        "Des chiffres justes, à jour, sans les refaire à la main, à partir de vos fichiers et de vos logiciels actuels.",
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
        "Au plus près de vos données : examen de vos fichiers, échanges avec ceux qui font les rapports, et corrections faites directement.",
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
        "A platform that belongs to you. When it's cheaper and simpler, KAG Systèmes proposes a licence-free alternative that you run on your own.",
      cta: {
        title: "Is your data scattered?",
        body: "Tell us which software and files you use today. That's the starting point.",
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
        "Une plateforme qui vous appartient. Quand c'est moins cher et plus simple, KAG Systèmes propose une alternative sans licence, que vous exploitez en autonomie.",
      cta: {
        title: "Vos données sont éparpillées ?",
        body: "Dites-nous quels logiciels et fichiers vous utilisez aujourd'hui. C'est le point de départ.",
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
        "AI where it truly saves time, connected to your documents and data, without sending them just anywhere.",
      problem: { title: "The problem", body: [] },
      problemSituations: [
        "Your teams waste time looking for information in folders, emails or PDFs.",
        "You want to use AI, but not send your documents to a tech giant.",
        "Consumer AI tools miss the point, because they don't know your business.",
      ],
      whatWeBuild: {
        title: "What changes for you",
        items: [
          "Your teams ask a question and get an answer drawn from your own documents.",
          "Answers rely on up-to-date information, not approximations.",
          "Repetitive tasks go faster: drafting a reply, summarising a file, sorting requests.",
          "Your data stays with you, or in the environment you choose.",
          "AI is built into the tools your teams already use.",
        ],
      },
      deliverablesTitle: "What you get",
      deliverables: [
        "Your documents and data made searchable by the AI",
        "A model chosen for your use, not necessarily the biggest",
        "An assistant built into your tools",
        "An installation on your premises or on a dedicated server",
        "A suitable hardware recommendation",
      ],
      approachNote:
        "An AI is only as good as its access to the right, well-organised documents. That's where most of the time goes. The model is just one piece among others.",
      pricingNote: "It depends on the model, the number of users and the hardware. It's priced after a first conversation.",
      maintenanceNote: "Models evolve and so do your uses. Follow-up is defined from the start.",
      privacyNote:
        "Your data can stay entirely on your premises, or in a mixed setup. This is defined together before starting.",
      ragExplainer:
        "Before answering, the AI looks for the useful passages in your documents and relies on them. Answers stay grounded in your real information.",
      sizingFactors: [
        "Model size",
        "Number of users",
        "Expected response speed",
        "Volume of documents",
        "Level of confidentiality",
      ],
      cta: {
        title: "Want to use AI on your own documents?",
        body: "Tell us what your teams search for or redo every day. That's the starting point.",
        button: "Describe your need",
      },
    },
    fr: {
      eyebrow: "03 · IA privée",
      heroTitle: "IA privée",
      heroLead:
        "L'IA là où elle fait vraiment gagner du temps, branchée sur vos documents et vos données, sans les envoyer n'importe où.",
      problem: { title: "Le problème", body: [] },
      problemSituations: [
        "Vos équipes perdent du temps à chercher une information dans des dossiers, des mails ou des PDF.",
        "Vous voulez utiliser l'IA, mais pas envoyer vos documents chez un géant du web.",
        "Les outils d'IA grand public répondent à côté, parce qu'ils ne connaissent pas votre entreprise.",
      ],
      whatWeBuild: {
        title: "Ce qui change pour vous",
        items: [
          "Vos équipes posent une question et obtiennent une réponse tirée de vos propres documents.",
          "Les réponses s'appuient sur une information à jour, pas sur des approximations.",
          "Les tâches répétitives vont plus vite : préparer une réponse, résumer un dossier, trier des demandes.",
          "Vos données restent chez vous, ou dans l'environnement que vous choisissez.",
          "L'IA est intégrée aux outils que vos équipes utilisent déjà.",
        ],
      },
      deliverablesTitle: "Ce que vous recevez",
      deliverables: [
        "Vos documents et données rendus consultables par l'IA",
        "Un modèle choisi pour votre usage, pas forcément le plus gros",
        "Un assistant intégré à vos outils",
        "Une installation chez vous ou sur un serveur dédié",
        "Une recommandation de matériel adaptée",
      ],
      approachNote:
        "Une IA n'est bonne que si elle a accès aux bons documents, bien rangés. C'est là que se joue l'essentiel du travail. Le modèle n'est qu'une pièce parmi d'autres.",
      pricingNote: "Il dépend du modèle, du nombre d'utilisateurs et du matériel. Il est chiffré après un premier échange.",
      maintenanceNote: "Les modèles évoluent et vos usages aussi. Le suivi est défini dès le départ.",
      privacyNote:
        "Vos données peuvent rester entièrement chez vous, ou dans une configuration mixte. C'est défini ensemble avant de démarrer.",
      ragExplainer:
        "Avant de répondre, l'IA va chercher les passages utiles dans vos documents et s'appuie dessus. Les réponses restent fondées sur votre information réelle.",
      sizingFactors: [
        "La taille du modèle",
        "Le nombre d'utilisateurs",
        "La rapidité de réponse attendue",
        "Le volume de documents",
        "Le niveau de confidentialité",
      ],
      cta: {
        title: "Vous voulez utiliser l'IA sur vos propres documents ?",
        body: "Dites-nous ce que vos équipes cherchent ou refont tous les jours. C'est le point de départ.",
        button: "Décrire votre besoin",
      },
    },
  },
};

export function getSolutionPage(locale: Locale, id: SolutionId): SolutionPageContent {
  return solutionPages[id][locale];
}
