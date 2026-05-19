import { NAV_LINKS, SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import type { PillarKey, SiteConfig, SiteContent } from "../types";

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
  },
  work: {
    capabilities: {
      primary: [
        "Full-stack Engineer",
        "AI Engineer",
        "Algorithm Engineer",
        "Growth Product",
      ],
      secondary: [
        "Product Manager",
        "Software Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "Web3 Engineer",
      ],
    },
    implementation: {
      pillars: [
        {
          id: "ai",
          title: "AI product line",
          lead: "A three-stage AI stack—conversational market research, natural-language trading actions, then book-aware analysis with sourced retrieval.",
          stages: [
            {
              version: "V1",
              name: "Trading Research",
              text: "Dialogue model for market Q&A, insights, and research chat in-terminal",
            },
            {
              version: "V2",
              name: "Trading Assistant",
              text: "Natural language to open, close, and copy-trade—review drafts, then wallet-sign",
            },
            {
              version: "V3",
              name: "Trading Analyst",
              text: "Position analysis for your book; market retrieval with cited, searchable sources",
            },
          ],
        },
        {
          id: "copy",
          title: "Copy Trading",
          lead: "Leaders trade; followers mirror automatically—with wallet-authorized funding and settlement kept in sync with the leader book.",
          points: [
            "Gurus surface through rankings and relationships",
            "Trades propagate on Square as discoverable social proof",
          ],
        },
        {
          id: "create",
          title: "Create Markets",
          lead: "Anyone eligible can launch binary prediction markets, expanding long-tail supply beyond protocol listings.",
          points: [
            "Creators earn fees as markets trade",
            "Withdraw earnings to your own wallets—non-custodial by design",
          ],
        },
      ],
      journey: [
        {
          label: "Discover",
          body: "Browse home, protocol listings, rolling crypto hourlies, and picks tuned to the session—find a market worth a view.",
        },
        {
          label: "Trade",
          body: "Place market or limit orders, track live PnL, climb the leaderboard, and share results with QR-backed cards.",
        },
        {
          label: "AI",
          body: "Chat for market insight, speak to open or close or copy, then get portfolio-aware analysis with sourced market research—all with wallet-signed execution when you trade.",
        },
        {
          label: "Copy",
          body: "Follow ranked Gurus, turn on mirroring, and see leader activity in the hub and on Square—follower fills stay aligned with leader outcomes.",
        },
        {
          label: "Create",
          body: "Launch a market through guided checks and moderation, earn fees as volume accrues, and withdraw on-chain to your wallet.",
        },
        {
          label: "Square",
          body: "Post, comment, and like around real positions; signed posts and trade attachments make the feed a distribution layer for conviction.",
        },
        {
          label: "Growth",
          body: "Link X, Discord, or Telegram to the same wallet profile; earn points, referrals, and mission rewards while onboarding stays faucet-friendly.",
        },
        {
          label: "Trust",
          body: "Connect a Solana wallet, sign every money move, claim through automated payout jobs, and build reputation on-profile.",
        },
      ],
      oneLiner:
        "A full-stack prediction market terminal—creator supply, a staged AI stack from research to execution, and social copy distribution—built non-custodial on Solana.",
    },
    achievements: {
      headline: "Production scale on Solana Devnet",
      primary: [
        { value: "14.0M+", label: "Orders processed (all-time)" },
        { value: "93K+", label: "Wallet profiles" },
        { value: "1.1K+", label: "Creator markets launched" },
        { value: "760+", label: "Unique market creators" },
        { value: "15.2M+", label: "Copy trading events" },
        { value: "172K+", label: "Square posts" },
        { value: "60K+", label: "Referral codes applied" },
      ],
      secondary: [],
    },
  },
  validation: {
    credentials: [
      {
        text: "MS in AI — Computer Science ranks in the global ",
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
