export const ABOUT_META = {
  title: 'ABOUT',
  tagline: 'THE R&D LAB FOR ENTERPRISE MODERNIZATION',
  description: 'Twofold Tech is a product-led engineering lab building autonomous development tools for enterprise transformation.',
};

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const COMPANY_TIMELINE: TimelineEvent[] = [
  {
    year: '2024',
    title: 'GENESIS',
    description: 'Founded as an R&D lab focused on enterprise software modernization and agentic engineering.',
  },
  {
    year: '2024',
    title: 'ALLOY ALPHA',
    description: 'Released first version of ALLOY - the high-performance Rust engine for Sitecore migrations.',
  },
  {
    year: '2025',
    title: 'STUDIO BETA',
    description: 'Launched STUDIO_OS with Tri-Agent Architecture for autonomous software development.',
  },
  {
    year: '2026',
    title: 'EXPANSION',
    description: 'Scaling enterprise deployments and expanding agentic capabilities across the platform.',
  },
];

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'ARCHITECTURAL INTEGRITY',
    description: 'Every line of code must serve the system. We build for decades, not demos.',
    icon: 'building',
  },
  {
    title: 'ZERO WASTE ENGINEERING',
    description: 'No unnecessary complexity. Every abstraction earns its place through utility.',
    icon: 'target',
  },
  {
    title: 'HUMAN-IN-THE-LOOP',
    description: 'AI augments human judgment. Critical decisions require human oversight.',
    icon: 'users',
  },
  {
    title: 'MEMORY SAFETY',
    description: 'From Rust tooling to schema validation, we eliminate entire classes of bugs by design.',
    icon: 'shield',
  },
];

export interface LabFocus {
  title: string;
  description: string;
  status: string;
}

export const LAB_FOCUS_AREAS: LabFocus[] = [
  {
    title: 'AGENTIC ORCHESTRATION',
    description: 'Multi-agent systems that plan, build, and validate enterprise software autonomously.',
    status: 'ACTIVE',
  },
  {
    title: 'MIGRATION ENGINEERING',
    description: 'High-performance tooling for moving legacy systems to modern architectures.',
    status: 'ACTIVE',
  },
  {
    title: 'SEMANTIC SEO',
    description: 'AI-driven technical SEO auditing and remediation for headless implementations.',
    status: 'RESEARCH',
  },
  {
    title: 'PREDICTIVE DEVOPS',
    description: 'Self-healing infrastructure powered by predictive anomaly detection.',
    status: 'RESEARCH',
  },
];
