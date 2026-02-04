export const ADVISORY_META = {
  title: 'ADVISORY',
  tagline: 'SENIOR EXPERTISE, NOT A SLIDE DECK',
  description: 'Direct access to practitioners with 30 combined years of enterprise experience. Architecture reviews, CMS integration strategy, and AI orchestration guidance—delivered by the same people who build Conduit and STUDIO.',
};

export interface AdvisoryService {
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const ADVISORY_SERVICES: AdvisoryService[] = [
  {
    title: 'ARCHITECTURE REVIEW',
    description: 'Deep-dive analysis of existing systems with actionable recommendations from senior practitioners.',
    deliverables: [
      'Architecture documentation',
      'Performance bottleneck analysis',
      'Scalability assessment',
      'Technical debt inventory',
    ],
    icon: 'layers',
  },
  {
    title: 'CMS UNIFICATION',
    description: 'Unify fragmented CMS platforms with Conduit and a clear integration roadmap.',
    deliverables: [
      'CMS inventory and capability mapping',
      'Unified API strategy and governance',
      'Adapter roadmap for priority platforms',
      'Risk analysis and migration sequencing',
    ],
    icon: 'database',
  },
  {
    title: 'AI ORCHESTRATION',
    description: 'Implement deterministic AI-assisted development workflows with STUDIO.',
    deliverables: [
      'AI readiness assessment',
      'Workflow automation opportunities',
      'Quality gate and traceability design',
      'STUDIO integration planning',
    ],
    icon: 'cpu',
  },
  {
    title: 'SITECORE MODERNIZATION',
    description: 'Guidance for Sitecore XP to XM Cloud transitions from senior practitioners.',
    deliverables: [
      'XM Cloud readiness audit',
      'Content architecture planning',
      'Headless implementation strategy',
      'Migration execution support',
    ],
    icon: 'map',
  },
];

export interface EngagementModel {
  title: string;
  duration: string;
  description: string;
  bestFor: string;
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: 'DISCOVERY',
    duration: '2-4 WEEKS',
    description: 'Initial assessment and strategic recommendations delivered directly by Dakota and Dillon.',
    bestFor: 'Organizations starting their transformation',
  },
  {
    title: 'EMBEDDED',
    duration: '3-6 MONTHS',
    description: 'Hands-on partnership with your team. We lead the technical work, not manage it from afar.',
    bestFor: 'Active modernization or integration programs',
  },
  {
    title: 'RETAINER',
    duration: 'ONGOING',
    description: 'Continuous access to senior expertise for strategic guidance and technical escalations.',
    bestFor: 'Long-term enterprise initiatives',
  },
];

export interface CaseMetric {
  value: string;
  label: string;
}

export const ADVISORY_METRICS: CaseMetric[] = [
  { value: '30', label: 'COMBINED YEARS' },
  { value: '2', label: 'SENIOR PRACTITIONERS' },
  { value: '0', label: 'JUNIORS ON STAFF' },
  { value: '100%', label: 'SENIOR DELIVERY' },
];
