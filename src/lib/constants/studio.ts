export const STUDIO_META = {
  title: 'STUDIO_OS',
  tagline: 'The Agentic Orchestration Operating System',
  description:
    'STUDIO uses a Tri-Agent Architecture to Plan, Build, and Write enterprise software with unprecedented precision. Human-in-the-Loop validation ensures architectural integrity at every step.',
  category: 'FLAGSHIP PLATFORM',
};

export interface Agent {
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  color: string;
}

export const STUDIO_AGENTS: Agent[] = [
  {
    name: 'PLANNER',
    role: 'Strategic Architect',
    description:
      'Analyzes requirements and designs implementation strategies. Creates detailed execution plans with dependency graphs and validation checkpoints.',
    capabilities: [
      'Requirement Analysis',
      'Architecture Design',
      'Dependency Mapping',
      'Risk Assessment',
    ],
    color: 'bg-blue-500',
  },
  {
    name: 'BUILDER',
    role: 'Implementation Engine',
    description:
      'Executes plans with precision. Generates code that adheres to enterprise standards and automatically validates against defined constraints.',
    capabilities: [
      'Code Generation',
      'Test Creation',
      'Refactoring',
      'Integration',
    ],
    color: 'bg-tf-orange',
  },
  {
    name: 'WRITER',
    role: 'Documentation Synthesizer',
    description:
      'Produces comprehensive technical documentation. Maintains consistency across codebases and generates API references automatically.',
    capabilities: [
      'Technical Writing',
      'API Documentation',
      'Architecture Docs',
      'Changelog Generation',
    ],
    color: 'bg-green-500',
  },
];

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const STUDIO_FEATURES: Feature[] = [
  {
    title: 'Tri-Agent Architecture',
    description:
      'Three specialized AI agents working in concert: Planner, Builder, and Writer. Each agent is optimized for its specific domain.',
    icon: 'cpu',
  },
  {
    title: 'Human-in-the-Loop',
    description:
      'Critical decisions require human approval. Automated validation gates ensure quality without sacrificing control.',
    icon: 'users',
  },
  {
    title: 'Self-Healing Code',
    description:
      'When tests fail, STUDIO automatically diagnoses and corrects issues. Continuous validation prevents regression.',
    icon: 'refresh',
  },
  {
    title: 'Enterprise Safety',
    description:
      'Sandbox environments, schema validation, and audit trails. Built for regulated industries and high-stakes engineering.',
    icon: 'shield',
  },
  {
    title: 'Context Preservation',
    description:
      'Maintains project context across sessions. No more re-explaining your codebase to AI assistants.',
    icon: 'database',
  },
  {
    title: 'Multi-Repository Support',
    description:
      'Orchestrate changes across multiple repositories. Perfect for microservices and monorepo architectures.',
    icon: 'git-branch',
  },
];

export interface Spec {
  label: string;
  value: string;
}

export const STUDIO_SPECS: Spec[] = [
  { label: 'Architecture', value: 'Tri-Agent System' },
  { label: 'Context Window', value: '200K+ Tokens' },
  { label: 'Languages', value: '.NET, TypeScript, Rust, Python' },
  { label: 'Integration', value: 'VS Code, CLI, API' },
  { label: 'Validation', value: 'Real-time + Batch' },
  { label: 'Deployment', value: 'Cloud + On-Premise' },
];

export interface UseCase {
  title: string;
  description: string;
  outcome: string;
}

export const STUDIO_USE_CASES: UseCase[] = [
  {
    title: 'Legacy Migration',
    description:
      'Modernize monolithic applications to microservices with automated dependency analysis and incremental refactoring.',
    outcome: '70% reduction in migration time',
  },
  {
    title: 'Feature Development',
    description:
      'Accelerate new feature delivery with AI-assisted planning, implementation, and testing workflows.',
    outcome: '3x faster time-to-production',
  },
  {
    title: 'Code Review Automation',
    description:
      'Automated PR reviews with architectural compliance checking and security vulnerability scanning.',
    outcome: '90% reduction in review cycle time',
  },
  {
    title: 'Documentation Generation',
    description:
      'Generate and maintain technical documentation from code. API docs, architecture diagrams, and runbooks.',
    outcome: 'Always up-to-date documentation',
  },
];
