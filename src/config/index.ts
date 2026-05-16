import {
  NAV_LINKS,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "../consts";
import type { SiteConfig, SiteContent } from "../types";

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
    "I am an Independent Technologist focused on the structural reduction of complex systems and deterministic engineering.",
    "I view financial routing and decentralized markets as non-linear systems saturated with noise. My objective is to strip away redundancy and lock onto the 1% deterministic signal. I operate on a strict conviction: if you cannot extract precision from massive off-chain datasets, you have no right to define on-chain settlement rules.",
    "My engineering background—spanning high-fidelity predictive modeling to the semantic topology of high-dimensional data—has forged a ruthless quantitative mindset. Currently, I am injecting this dominion over \"signal and noise\" into Solana's asynchronous infrastructure. I do not care for surface-level business logic; I am obsessed with building underlying state machines that, once deployed, execute like mathematical theorems.",
    "It is this paranoia for computational integrity that drives my architectural leadership at Helm—a complex prediction market protocol designed to deconstruct real-world probabilistic game theory and translate it into deterministic on-chain settlement.",
  ],
  validation: [
    {
      title: "Theoretical Rigor & Quantitative Distinction",
      description:
        "Maintained a technical baseline within the top 1% extreme of peer cohorts in long-term evaluations of system architecture and algorithmic theory. Awarded the sole premier institutional recognition for quantitative excellence in a four-year cycle. This serves as a testament to absolute dominion over low-level computational logic.",
    },
    {
      title: "Signal Extraction in Stochasticity",
      description:
        "Secured top-tier national honors in high-dimensional modeling and complex energy routing frameworks. This validates the capacity to precisely extract high-value deterministic signals within non-linear markets saturated with noise.",
    },
    {
      title: "Architectural Leadership in Frameworks",
      description:
        "As the core logic builder, secured the highest distinction in top-tier technical competitions involving cross-border big data infrastructure. This establishes the engineering intuition required to build highly robust, cross-domain compatible complex systems from the ground up.",
    },
  ],
  compute: {
    image: "/touxiang.jpg",
    layers: [
      {
        title: "Consensus & State Layer",
        summary:
          "Focused on state machine locking and memory safety in extreme concurrency environments.",
        stack:
          "Rust · Solana Primitives · High-Concurrency State Logic",
      },
      {
        title: "Inference & Intelligence Layer",
        summary:
          "Reducing stochasticity to build complex predictive and classification matrices.",
        stack:
          "Probabilistic Modeling · Ensemble Learning Architecture · Neural Networks · Semantic Topology",
      },
      {
        title: "Deterministic Engineering Principles",
        summary:
          "Rejecting unauthorized systemic refactoring, maintaining production environment stability through absolute dictatorial will. Code evolution must be executed exclusively as incremental fixes or precise replacements. This near-paranoid engineering discipline ensures the immutability and execution safety of financial-grade application states under maximum concurrency.",
      },
    ],
  },
};
