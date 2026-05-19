export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  work: WorkContent;
  validation: ValidationContent;
  compute: ComputeEnvironmentProps;
}

export interface HeroProps {
  name: string;
  role: string;
}

export type PillarKey = "ai" | "copy" | "create";

export interface CapabilitiesContent {
  primary: string[];
  secondary: string[];
}

export interface PillarStage {
  version: string;
  name: string;
  text: string;
}

export interface ImplementationPillar {
  id: PillarKey;
  title: string;
  lead: string;
  stages?: PillarStage[];
  points?: string[];
}

export interface JourneyStep {
  label: string;
  body: string;
}

export interface AchievementMetric {
  value: string;
  label: string;
}

export interface WorkContent {
  capabilities: CapabilitiesContent;
  implementation: {
    pillars: ImplementationPillar[];
    journey: JourneyStep[];
    oneLiner: string;
  };
  achievements: {
    headline: string;
    primary: AchievementMetric[];
    secondary: AchievementMetric[];
  };
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
