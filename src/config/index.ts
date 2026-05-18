import {
  NAV_LINKS,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "../consts";
import type { SiteConfig, SiteContent } from "../types";

const FIRST_PRINCIPLES_AXIOMS = [
  {
    letter: "F",
    text: "Fidelity to reconciled state precedes velocity—what cannot be verified across chain and ledger should not ship.",
  },
  {
    letter: "I",
    text: "In markets saturated with noise, the right to define settlement rules belongs only to those who extract measurable precision.",
  },
  {
    letter: "R",
    text: "Reduction is not aesthetic minimalism; it is the discipline of keeping systems legible under maximum load.",
  },
  {
    letter: "S",
    text: "State machines, once deployed, should execute like theorems—not read like feature lists.",
  },
  {
    letter: "T",
    text: "Translating probabilistic games into settleable consensus is infrastructure. That is the work pursued at Helm.",
  },
];

export const SITE_CONFIG: SiteConfig = {
  title: SITE_TITLE,
  author: "Morgen",
  description: SITE_DESCRIPTION,
  lang: "en",
  siteLogo: "/favicon.svg",
  navLinks: [...NAV_LINKS],
  socialLinks: [],
  socialImage: "/zen-og.png",
  canonicalURL: undefined,
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Morgen",
    role: "Tech Partner, Architect and Core Contributor at Helm",
    tagline: SITE_DESCRIPTION,
  },
  abstract: [
    {
      segments: [
        { kind: "text", value: "I lead product and technology for " },
        { kind: "product", value: "Helm" },
        { kind: "text", value: " (" },
        {
          kind: "link",
          text: "helm.trading",
          href: "https://helm.trading/",
        },
        {
          kind: "text",
          value:
            ")—a Solana-native prediction-market terminal where users trade real-world event outcomes and short-duration crypto markets with the speed and clarity of a professional desk, not a crypto toy.",
        },
      ],
    },
    {
      segments: [
        {
          kind: "text",
          value:
            "I joined at inception and owned the full stack from zero: product definition, trading architecture, data plane, and on-chain operations. That includes market and limit order flow, settlement and payout automation, indexer-style reconciliation, a ",
        },
        { kind: "product", value: "copy-trading" },
        {
          kind: "text",
          value:
            " mirror engine with auditable attribution, ",
        },
        { kind: "product", value: "UGC markets" },
        {
          kind: "text",
          value: " with creator economics, a social layer (",
        },
        { kind: "product", value: "Square" },
        {
          kind: "text",
          value:
            "), and growth systems (points, referrals, OAuth). On the AI side, I shipped ",
        },
        { kind: "product", value: "TradeDraft" },
        {
          kind: "text",
          value:
            "—an executable copilot that turns intent into structured, wallet-signed trades (no custody, no auto-signing).",
        },
      ],
    },
    {
      segments: [
        { kind: "product", value: "Helm" },
        {
          kind: "text",
          value:
            " is live on Solana devnet public beta by design: we stress-test real user behavior, economics, and ops before mainnet. The infrastructure is built mainnet-shaped—treasury, SPL flows, claims, anti-abuse, and a full V2→V3 token cutover across three devnet iterations—so scaling is an execution milestone, not a science project.",
        },
      ],
    },
    {
      segments: [
        { kind: "text", value: "Early traction is measurable: " },
        { kind: "metric", value: "130k+" },
        { kind: "text", value: " connected wallets, " },
        { kind: "metric", value: "13.5M+" },
        { kind: "text", value: " order records, and " },
        { kind: "metric", value: "14.5M+" },
        { kind: "text", value: " copy-pipeline events within the first " },
        { kind: "metric", value: "~2.5 months" },
        { kind: "text", value: " of beta, plus " },
        { kind: "metric", value: "1,100+" },
        { kind: "text", value: " user-created markets. I optimize for ship velocity, honest metrics, and " },
        { kind: "product", value: "terminal-grade UX" },
        {
          kind: "text",
          value:
            "—the combination of product taste and systems depth that turns a prediction-market idea into a platform investors can underwrite.",
        },
      ],
    },
  ],
  validation: {
    credentials: [
      {
        text: "MS in AI, Shandong University — Computer Science ranks in the global ",
        emphasis: "Top 0.1% (ESI) and Top 100 worldwide",
      },
      {
        text: "",
        emphasis: "University National Scholarship",
        suffix: " recipient",
      },
      {
        text: "",
        emphasis: "Gold medal",
        suffix:
          " at the Belt and Road & BRICS Skills Development and Technological Innovation Competition",
      },
    ],
    portfolio: [
      {
        code: "ARCH-2024-CLD",
        title: "Cloud-Native Resource Scheduling Protocols",
        domain: "Dynamic allocation within cloud infrastructure.",
        core: "Distributed Systems, Load Balancing Algorithms.",
      },
      {
        code: "ALG-2023-NLP",
        title: "Semantic Topology & Knowledge Graphs",
        domain:
          "Mapping unstructured historical data into navigable logic.",
        core: "Word2Vec, PageRank, NLP Feature Extraction.",
      },
      {
        code: "MOD-2023-REC",
        title: "ML-Driven Behavioral Matrices",
        domain:
          "User segmentation and transactional relational mapping.",
        core: "K-Means Clustering, Apriori Algorithm.",
      },
      {
        code: "SIM-2024-ECO",
        title: "Macro-Market Game Theory Simulation",
        domain:
          "Quantitative simulation of economic decision-making and trade dynamics.",
        core: "Stochastic Environments, Incentive Mechanism Design.",
      },
      {
        code: "STAT-2024-REG",
        title: "Stochastic Signal Extraction Modeling",
        domain:
          "Isolating deterministic behavioral patterns from high-dimensional marketing noise.",
        core: "Applied Statistics, Probability Regression Matrices.",
      },
    ],
  },
  compute: {
    sectionTitle: "First Principles",
    sectionHref: "about",
    image: "/touxiang.jpg",
    axioms: FIRST_PRINCIPLES_AXIOMS,
    stackTags: "Mathematics · Engineering · Consensus · Integrity",
  },
};
