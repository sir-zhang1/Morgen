export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export type AbstractSegment =
  | { kind: "text"; value: string }
  | { kind: "metric"; value: string }
  | { kind: "product"; value: string }
  | { kind: "link"; text: string; href: string };

export interface AbstractParagraph {
  segments: AbstractSegment[];
}

export interface SiteContent {
  hero: HeroProps;
  abstract: AbstractParagraph[];
  validation: ValidationContent;
  compute: ComputeEnvironmentProps;
}

export interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

export interface MeritCredential {
  text?: string;
  emphasis?: string;
  suffix?: string;
}

export interface PortfolioEntry {
  code: string;
  title: string;
  domain: string;
  core: string;
}

export interface ValidationContent {
  credentials: MeritCredential[];
  portfolio: PortfolioEntry[];
}

export interface FirstPrincipleAxiom {
  letter: string;
  text: string;
}

export interface ComputeEnvironmentProps {
  sectionTitle?: string;
  sectionHref?: string;
  image: string;
  axioms: FirstPrincipleAxiom[];
  stackTags?: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
