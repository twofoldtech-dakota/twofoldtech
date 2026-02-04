export const CONDUIT_META = {
  title: 'CONDUIT',
  tagline: 'One Connection to Every CMS',
  description:
    'Conduit is an enterprise-grade MCP server that provides unified access to multiple CMS platforms through a single interface. Connect your AI assistants to Sitecore XP, XM Cloud, Umbraco, Optimizely, Contentful, and more—without custom integrations.',
  category: 'ENTERPRISE MCP SERVER',
  status: 'BETA',
};

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const CONDUIT_FEATURES: Feature[] = [
  {
    title: 'Unified API',
    description: 'Single interface for CMS operations across platforms.',
    icon: 'layers',
  },
  {
    title: 'Multi-CMS Support',
    description: 'Connect multiple CMS platforms simultaneously.',
    icon: 'server',
  },
  {
    title: 'Enterprise Ready',
    description: 'Built-in caching, rate limiting, and audit logging.',
    icon: 'shield',
  },
  {
    title: 'Type Safe',
    description: 'Full TypeScript support with comprehensive type definitions.',
    icon: 'code',
  },
  {
    title: 'Extensible',
    description: 'Adapter architecture for adding new CMS platforms.',
    icon: 'git-branch',
  },
  {
    title: 'AI-Connected',
    description: 'MCP-native so assistants can access content with governance.',
    icon: 'cpu',
  },
];

export const CONDUIT_CMS = [
  'Sitecore XP',
  'Sitecore XM Cloud',
  'Umbraco',
  'Optimizely',
  'Contentful',
  'Sanity',
  'WordPress',
];

export interface Step {
  title: string;
  description: string;
}

export const CONDUIT_STEPS: Step[] = [
  {
    title: 'CONNECT',
    description: 'Attach Conduit adapters to each CMS you operate.',
  },
  {
    title: 'NORMALIZE',
    description: 'Expose content through a single, type-safe API contract.',
  },
  {
    title: 'GOVERN',
    description: 'Apply caching, rate limits, and audit logging by default.',
  },
];

export interface Spec {
  label: string;
  value: string;
}

export const CONDUIT_SPECS: Spec[] = [
  { label: 'Protocol', value: 'MCP (Model Context Protocol)' },
  { label: 'Type Safety', value: 'TypeScript Definitions' },
  { label: 'CMS Focus', value: 'Sitecore XP / XM Cloud' },
  { label: 'Governance', value: 'Caching, Rate Limits, Audit Logs' },
  { label: 'Extensibility', value: 'Adapter Architecture' },
  { label: 'Status', value: 'Beta' },
];
