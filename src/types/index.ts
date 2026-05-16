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
  abstract: string[];
  validation: ValidationItem[];
  compute: ComputeEnvironmentProps;
}

export interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

export interface ValidationItem {
  title: string;
  description: string;
}

export interface ComputeLayer {
  title: string;
  summary: string;
  stack?: string;
}

export interface ComputeEnvironmentProps {
  layers: ComputeLayer[];
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
