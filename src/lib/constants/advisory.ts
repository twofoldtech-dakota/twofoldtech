export const ADVISORY_META = {
  title: 'ADVISORY',
  tagline: 'ENTERPRISE MODERNIZATION CONSULTING',
  description: 'Strategic guidance for organizations navigating complex digital transformations, legacy migrations, and agentic engineering adoption.',
};

export interface AdvisoryService {
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const ADVISORY_SERVICES: AdvisoryService[] = [
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
    title: 'ARCHITECTURE REVIEW',
    description: 'Deep-dive analysis of existing systems with actionable recommendations.',
    deliverables: [
      'Architecture documentation',
      'Performance bottleneck analysis',
      'Scalability assessment',
      'Technical debt inventory',
    ],
    icon: 'layers',
  },
  {
    title: 'AGENTIC READINESS',
    description: 'Prepare your organization for AI-driven development workflows.',
    deliverables: [
      'AI integration assessment',
      'Workflow automation opportunities',
      'Security and governance framework',
      'Team training recommendations',
    ],
    icon: 'cpu',
  },
  {
    title: 'SITECORE EXPERTISE',
    description: 'Specialized consulting for Sitecore XP to XM Cloud transitions.',
    deliverables: [
      'XM Cloud readiness audit',
      'Content architecture planning',
      'Headless implementation strategy',
      'Personalization roadmap',
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
    description: 'Initial assessment and strategic recommendations for your modernization journey.',
    bestFor: 'Organizations starting their transformation',
  },
  {
    title: 'EMBEDDED',
    duration: '3-6 MONTHS',
    description: 'Hands-on partnership with your team to execute complex technical initiatives.',
    bestFor: 'Active migration or transformation projects',
  },
  {
    title: 'RETAINER',
    duration: 'ONGOING',
    description: 'Continuous access to our expertise for strategic guidance and technical oversight.',
    bestFor: 'Long-term modernization programs',
  },
];

export interface CaseMetric {
  value: string;
  label: string;
}

export const ADVISORY_METRICS: CaseMetric[] = [
  { value: '50+', label: 'ENTERPRISE ENGAGEMENTS' },
  { value: '90%', label: 'CLIENT RETENTION' },
  { value: '5x', label: 'AVERAGE ROI' },
  { value: '<24h', label: 'RESPONSE TIME' },
];
