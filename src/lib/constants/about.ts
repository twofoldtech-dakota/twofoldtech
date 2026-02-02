export const ABOUT_META = {
  title: 'ABOUT',
  tagline: 'SENIOR EXPERTISE. SERIOUS SOFTWARE.',
  description: 'Twofold Tech is two senior engineers—brothers—with 30 combined years in enterprise software. We advise on architecture, engineering leadership, and AI integration. And we build products that enterprises and agencies actually use.',
};

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const COMPANY_TIMELINE: TimelineEvent[] = [
  {
    year: '2024',
    title: 'FOUNDED',
    description: 'Dakota and Dillon Smith launch Twofold Tech, bringing 30 combined years of enterprise experience to advisory and product development.',
  },
  {
    year: '2024',
    title: 'ALLOY SHIPS',
    description: 'Released ALLOY—the high-performance Rust engine for Sitecore migrations—born from real-world enterprise problems.',
  },
  {
    year: '2025',
    title: 'STUDIO BETA',
    description: 'Launched STUDIO_OS with Tri-Agent Architecture for Deterministic Orchestration of AI-assisted development.',
  },
  {
    year: '2026',
    title: 'SCALING',
    description: 'Expanding enterprise advisory engagements and product deployments across the platform.',
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
    description: 'We ship software, not slide decks. Our products (STUDIO, ALLOY) encode our expertise into tools you can actually use.',
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
    title: 'AGENTIC ORCHESTRATION',
    description: 'Multi-agent systems that plan, build, and validate enterprise software with Deterministic Orchestration.',
    status: 'ACTIVE',
  },
  {
    title: 'MIGRATION ENGINEERING',
    description: 'High-performance tooling for moving legacy Sitecore and .NET systems to modern architectures.',
    status: 'ACTIVE',
  },
  {
    title: 'ENTERPRISE ADVISORY',
    description: 'Architecture reviews, technical strategy, and engineering leadership guidance from senior practitioners.',
    status: 'ACTIVE',
  },
  {
    title: 'AI INTEGRATION',
    description: 'Implementing AI-assisted development workflows that are traceable, auditable, and enterprise-safe.',
    status: 'ACTIVE',
  },
];

// Backward compatibility - keep old export name pointing to new data
export const LAB_FOCUS_AREAS = EXPERTISE_FOCUS_AREAS;
