export const SITE_TITLE = 'Twofold Tech';
export const SITE_DESCRIPTION = 'One connection to every CMS. Deterministic orchestration for enterprise software.';
export const SITE_URL = 'https://twofold.tech';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'PRODUCTS',
    href: '#',
    children: [
      { label: 'CONDUIT', href: '/conduit' },
      { label: 'STUDIO', href: '/studio' },
    ],
  },
  { label: 'ADVISORY', href: '/advisory' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export const FOOTER_NAV = {
  products: [
    { label: 'Conduit', href: '/conduit' },
    { label: 'STUDIO', href: '/studio' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Advisory', href: '/advisory' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
  ],
};

export const PERFORMANCE_MANIFESTO =
  "Enterprise software isn't slowed by coding. It's slowed by fragmented context, brittle integrations, and AI without accountability. We're two senior engineers with 30 combined years in enterprise systems. Conduit unifies CMS access through a single MCP interface. STUDIO orchestrates deterministic delivery. We advise and build it with you—directly.";

export interface ServicePillar {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  highlight?: boolean;
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    title: 'CMS UNIFICATION',
    description: 'Conduit connects Sitecore XP/XM Cloud, Umbraco, Optimizely, Contentful, and more through one interface. No more one-off integrations.',
    tags: ['SITECORE XP + XM', 'UMBRACO', 'OPTIMIZELY', 'CONTENTFUL'],
    highlight: true,
    icon: 'database',
  },
  {
    title: 'DETERMINISTIC ORCHESTRATION',
    description: 'STUDIO provides plan-first, traceable AI workflows with quality gates and rollback. Open source, open box.',
    tags: ['TRI-AGENT', 'QUALITY GATES', 'TRACEABILITY'],
    icon: 'brain',
  },
  {
    title: 'ENTERPRISE ADVISORY',
    description: 'Architecture reviews, CMS integration strategy, and AI governance led by senior practitioners with 30 years combined experience.',
    tags: ['ARCHITECTURE', 'AI GOVERNANCE', 'INTEGRATION STRATEGY'],
    icon: 'server',
  },
];

export interface TechStackItem {
  name: string;
  category: string;
  description: string;
}

export const TECH_STACK: TechStackItem[] = [
  { name: 'CONDUIT', category: 'PRODUCT', description: 'Unified CMS MCP Server' },
  { name: 'STUDIO', category: 'OPEN SOURCE', description: 'Deterministic Orchestration' },
  { name: 'SITECORE', category: 'CMS', description: 'XP & XM Cloud' },
  { name: 'CONTENTFUL', category: 'CMS', description: 'Composable Content Platform' },
  { name: 'UMBRACO', category: 'CMS', description: 'Open-Source .NET CMS' },
  { name: 'OPTIMIZELY', category: 'CMS', description: 'Enterprise CMS & Experimentation' },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is Conduit?',
    answer: 'Conduit is an enterprise-grade MCP server that provides a single interface for CMS operations across platforms. Connect once and access content consistently across Sitecore, Umbraco, Optimizely, Contentful, and more.',
  },
  {
    question: 'Which CMS platforms does Conduit support?',
    answer: 'Sitecore XP and XM Cloud are primary. We also support Umbraco, Optimizely, Contentful, Sanity, and WordPress. Additional platforms are added via adapters.',
  },
  {
    question: 'Why not just build custom CMS integrations?',
    answer: 'Custom integrations are brittle and expensive to maintain. Conduit provides a unified contract with enterprise features like caching, rate limiting, and audit logging.',
  },
  {
    question: 'Is STUDIO open source?',
    answer: 'Yes. STUDIO is open source and built for deterministic orchestration—plan-first workflows, quality gates, and traceable decisions.',
  },
  {
    question: 'Can two people handle enterprise-scale projects?',
    answer: 'We each have 15+ years delivering at Fortune 500 and federal scale. When engagements require more capacity, we bring in vetted specialists—but we stay accountable.',
  },
];
