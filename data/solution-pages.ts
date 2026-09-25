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
        "When no off-the-shelf software fits the way you work, KAG Systèmes builds it. Internal app, customer portal, automation: a custom tool that belongs to you.",
      problem: { title: "The problem", body: [] },
      problemSituations: [
        "Off-the-shelf software doesn't match the way you work, or does ten times too much.",
        "Your tools don't talk to each other, and everything gets copied from one to the next.",
        "Your customers call you for information they could find themselves.",
      ],
      whatWeBuild: {
        title: "What can be built for you",
        items: [
          "An internal app: tracking production, job sites, orders, stock…",
          "A customer or partner portal: orders, tracking, documents, self-service",
          "Automations: reminders, notifications, document generation",
          "Links between your software, so nothing gets copied by hand",
          "A complete platform, with accounts, payments and an admin area",
        ],
      },
      deliverablesTitle: "What you get",
      deliverables: [
        "A scoping of your needs and the way you work",
        "The tool, built and tested with your teams",
        "Access and permissions suited to each person",
        "Links to your existing software",
        "Go-live, security and documentation",
        "A tool that belongs to you",
      ],
      approachNote:
        "First understanding how things really happen at your company, before drawing a single screen. Then building, testing with your teams, and adjusting.",
      cta: {
        title: "Missing a tool?",
        body: "Describe what you want to do, or what's getting in the way today. That's the starting point.",
        button: "Describe your need",
      },
    },
    fr: {
      eyebrow: "04 · Outils métier",
      heroTitle: "Outils métier",
      heroLead:
        "Quand aucun logiciel du marché ne colle à votre façon de travailler, KAG Systèmes le construit. Application interne, espace client, automatisation : un outil sur mesure, qui vous appartient.",
      problem: { title: "Le problème", body: [] },
      problemSituations: [
        "Les logiciels du marché ne correspondent pas à votre façon de travailler, ou en font dix fois trop.",
        "Vos outils ne se parlent pas, et tout se recopie d'un logiciel à l'autre.",
        "Vos clients vous appellent pour des informations qu'ils pourraient trouver eux-mêmes.",
      ],
      whatWeBuild: {
        title: "Ce qui peut être construit pour vous",
        items: [
          "Une application interne : suivi de production, de chantiers, de commandes, de stocks…",
          "Un espace client ou partenaire : commandes, suivi, documents, en autonomie",
          "Des automatisations : relances, notifications, génération de documents",
          "Des liens entre vos logiciels, pour ne plus rien recopier",
          "Une plateforme complète, avec comptes, paiements et espace d'administration",
        ],
      },
      deliverablesTitle: "Ce que vous recevez",
      deliverables: [
        "Un cadrage de vos besoins et de votre façon de travailler",
        "L'outil développé et testé avec vos équipes",
        "Des accès et des droits adaptés à chaque personne",
        "Les liens avec vos logiciels existants",
        "La mise en service, la sécurité et la documentation",
        "Un outil qui vous appartient",
      ],
      approachNote:
        "D'abord comprendre comment ça se passe vraiment chez vous, avant de dessiner le moindre écran. Puis construire, tester avec vos équipes, et ajuster.",
      cta: {
        title: "Il vous manque un outil ?",
        body: "Racontez ce que vous voulez faire, ou ce qui coince aujourd'hui. C'est le point de départ.",
        button: "Décrire votre besoin",
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
