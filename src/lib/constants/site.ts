export const SITE_TITLE = 'Twofold Tech';
export const SITE_DESCRIPTION = 'Enterprise Software Research & Modernization Lab';
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
      { label: 'STUDIO_OS', href: '/studio' },
      { label: 'ALLOY_CLI', href: '/alloy' },
    ],
  },
  { label: 'ADVISORY', href: '/advisory' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export const FOOTER_NAV = {
  products: [
    { label: 'STUDIO_OS', href: '/studio' },
    { label: 'ALLOY_CLI', href: '/alloy' },
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
  "Twofold Tech is an R&D lab engineering the next generation of autonomous development tools. Our flagship platform, STUDIO, provides the planning and validation guardrails required for high-stakes enterprise engineering. From Sitecore XP/XM Cloud transitions to custom .NET ecosystems, we build the systems that build the future.";

export interface ServicePillar {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  highlight?: boolean;
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    title: "SITECORE MODERNIZATION",
    description: "Deep-stack expertise in moving from XP Monoliths to XM Cloud. We don't just migrate; we re-architect for Headless, utilizing ALLOY to ensure data integrity across millions of items.",
    tags: ["XP TO XM CLOUD", "HEADLESS ARCHITECTURE", "NEXT.JS"],
    highlight: true,
    icon: "database",
  },
  {
    title: ".NET ECOSYSTEMS",
    description: "Custom enterprise software development on .NET 8/9. We build high-concurrency, event-driven systems that integrate seamlessly with legacy infrastructure and modern AI agents.",
    tags: ["ASP.NET CORE", "BLAZOR", "MICROSERVICES"],
    icon: "server",
  },
  {
    title: "AGENTIC WORKFLOWS",
    description: "Implementing STUDIO-driven autonomous agents to handle complex business logic, from automated content orchestration to predictive DevOps and self-healing infrastructure.",
    tags: ["SEMANTIC KERNEL", "ORCHESTRATION", "RAG"],
    icon: "brain",
  },
];

export interface TechStackItem {
  name: string;
  category: string;
  description: string;
}

export const TECH_STACK: TechStackItem[] = [
  { name: 'STUDIO', category: 'PRODUCT', description: 'Agentic Orchestration OS' },
  { name: 'ALLOY', category: 'PRODUCT', description: 'Rust Migration Engine' },
  { name: 'SITECORE', category: 'PLATFORM', description: 'XM Cloud & Edge' },
  { name: '.NET 9', category: 'CORE', description: 'ASP.NET Core & MAUI' },
  { name: 'RUST', category: 'SYSTEMS', description: 'High-Performance Tooling' },
  { name: 'AZURE', category: 'CLOUD', description: 'AI Foundry & Container Apps' },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What makes STUDIO different from GitHub Copilot?",
    answer: "Copilot is an autocomplete engine; STUDIO is an Orchestration OS. STUDIO uses a Tri-Agent architecture to 'Plan, Build, and Write.' It validates architectural decisions against your specific constraints before writing code, eliminating the 'drift' common in standard LLM outputs.",
  },
  {
    question: "Is Twofold Tech a Product Company or a Consultancy?",
    answer: "We are a Product-Led Engineering Lab. We use our proprietary tooling (STUDIO and ALLOY) to deliver enterprise outcomes 5x faster and with higher precision than conventional manual engineering. You get the benefit of our R&D lab applied directly to your project.",
  },
  {
    question: "Can ALLOY migrate custom Sitecore pipelines?",
    answer: "Yes. ALLOY parses the dependency graph of your legacy .NET pipelines. While it handles data serialization automatically, it also flags pipeline logic that needs to be refactored for the Headless/SaaS world of XM Cloud.",
  },
  {
    question: "How do you ensure 'Enterprise Safety' with Agentic AI?",
    answer: "We implement 'Human-in-the-Loop' gates and rigid schema validation. STUDIO creates a sandbox environment where code is tested against unit tests generated *before* the implementation. If the code fails the tests, the Agent self-corrects without human intervention.",
  },
];
