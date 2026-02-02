export const ADVISORY_META = {
  title: 'ADVISORY',
  tagline: 'SENIOR EXPERTISE, NOT A SLIDE DECK',
  description: 'Direct access to practitioners with 30 combined years of enterprise experience. Architecture reviews, technical strategy, engineering leadership guidance—delivered by the same people who build STUDIO and ALLOY.',
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
    title: 'MIGRATION STRATEGY',
    description: 'Comprehensive roadmaps for transitioning from legacy platforms to modern architectures.',
    deliverables: [
      'Current state assessment',
      'Migration roadmap with phases',
      'Risk analysis and mitigation',
      'Resource and timeline planning',
    ],
    icon: 'map',
  },
  {
    title: 'AI INTEGRATION',
    description: 'Prepare your organization for AI-driven development workflows with Deterministic Orchestration.',
    deliverables: [
      'AI readiness assessment',
      'Workflow automation opportunities',
      'Security and governance framework',
      'STUDIO integration planning',
    ],
    icon: 'cpu',
  },
  {
    title: 'SITECORE EXPERTISE',
    description: 'Specialized guidance for Sitecore XP to XM Cloud transitions from practitioners who built ALLOY.',
    deliverables: [
      'XM Cloud readiness audit',
      'Content architecture planning',
      'Headless implementation strategy',
      'ALLOY deployment support',
    ],
    icon: 'database',
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
    bestFor: 'Active migration or transformation projects',
  },
  {
    title: 'RETAINER',
    duration: 'ONGOING',
    description: 'Continuous access to senior expertise for strategic guidance and technical escalations.',
    bestFor: 'Long-term modernization programs',
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
