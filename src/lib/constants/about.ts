export const ABOUT_META = {
  title: 'ABOUT',
  tagline: 'SENIOR EXPERTISE. SERIOUS SOFTWARE.',
  description: 'Twofold Tech is two senior engineers—brothers—with 30 combined years in enterprise software. We advise on architecture, CMS integration, and AI orchestration. And we build products that unify content context (Conduit) and orchestrate deterministic delivery (STUDIO).',
};

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const COMPANY_TIMELINE: TimelineEvent[] = [
  {
    year: '2020',
    title: 'FOUNDED',
    description: 'Dakota and Dillon launch Twofold Tech, bringing 30 combined years of enterprise experience to advisory and product development.',
  },
  {
    year: '2025',
    title: 'STUDIO OPEN SOURCE',
    description: 'Released STUDIO as an open-source orchestration platform for deterministic AI-assisted development.',
  },
  {
    year: '2026',
    title: 'CONDUIT BETA',
    description: 'Launched Conduit beta—one connection to every CMS via an enterprise-grade MCP server.',
  },
  {
    year: '2026',
    title: 'ENTERPRISE SCALE',
    description: 'Expanded advisory engagements and Conduit deployments across enterprise platforms.',
  },
];

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'SENIOR-LEVEL STANDARDS',
    description: 'The people you talk to are the people who do the work. No juniors. No bait-and-switch. No account managers.',
    icon: 'building',
  },
  {
    title: 'DETERMINISTIC OVER PROBABILISTIC',
    description: 'AI should follow architectural logic, not hunches. Every decision is traceable. Every output is auditable.',
    icon: 'target',
  },
  {
    title: 'PRODUCTS OVER PROMISES',
    description: 'We ship software, not slide decks. Conduit and STUDIO encode our expertise into tools you can actually use.',
    icon: 'users',
  },
  {
    title: 'ACCOUNTABLE ALWAYS',
    description: 'When projects require additional capacity, we bring in vetted specialists—but we stay accountable. You\'ll never be handed off.',
    icon: 'shield',
  },
];

export interface ExpertiseFocus {
  title: string;
  description: string;
  status: string;
}

export const EXPERTISE_FOCUS_AREAS: ExpertiseFocus[] = [
  {
    title: 'CMS UNIFICATION',
    description: 'Unified content access across Sitecore, Contentful, Umbraco, Optimizely, and more using Conduit.',
    status: 'ACTIVE',
  },
  {
    title: 'AGENTIC ORCHESTRATION',
    description: 'Multi-agent systems that plan, build, and validate enterprise software with Deterministic Orchestration.',
    status: 'ACTIVE',
  },
  {
    title: 'ENTERPRISE ADVISORY',
    description: 'Architecture reviews, integration strategy, and engineering leadership guidance from senior practitioners.',
    status: 'ACTIVE',
  },
  {
    title: 'SITECORE MODERNIZATION',
    description: 'XP to XM Cloud transformations with hardened content architecture and governance.',
    status: 'ACTIVE',
  },
];

// Backward compatibility - keep old export name pointing to new data
export const LAB_FOCUS_AREAS = EXPERTISE_FOCUS_AREAS;
