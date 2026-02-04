export const STUDIO_META = {
  title: 'STUDIO',
  tagline: 'Open-Source Deterministic Orchestration',
  description:
    'STUDIO is an open-source orchestration platform that enforces plan-first workflows, quality gates, and traceable AI-assisted development. Built by senior practitioners for enterprise rigor.',
  category: 'OPEN SOURCE PLATFORM',
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
      'Analyzes requirements and designs execution plans with dependency graphs and validation checkpoints.',
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
      'Executes plans deterministically. Generates code that adheres to constraints and validates each step.',
    capabilities: [
      'Code Generation',
      'Test Creation',
      'Refactoring',
      'Integration',
    ],
    color: 'bg-tf-orange',
  },
  {
    name: 'REVIEWER',
    role: 'Quality Gatekeeper',
    description:
      'Verifies the build against requirements and quality gates. Produces audit-ready outputs.',
    capabilities: [
      'Quality Gates',
      'Architecture Compliance',
      'Security Validation',
      'Traceability Reports',
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
      'Planner, Builder, and Reviewer work in concert to separate strategy, execution, and validation.',
    icon: 'cpu',
  },
  {
    title: 'Plan-First Workflows',
    description:
      'Every change starts with a validated plan to prevent architectural drift.',
    icon: 'users',
  },
  {
    title: 'Quality Gates',
    description:
      'Automated validation gates enforce correctness before execution completes.',
    icon: 'shield',
  },
  {
    title: 'Traceable Decisions',
    description:
      'Requirements and changes are linked for full auditability and rollback.',
    icon: 'database',
  },
  {
    title: 'Open-Box Architecture',
    description:
      'Inspect, extend, and customize the orchestration logic. No black boxes.',
    icon: 'git-branch',
  },
  {
    title: 'Deterministic Recovery',
    description:
      'Rollback to known-good states with deterministic snapshots and state control.',
    icon: 'refresh',
  },
];

export interface Spec {
  label: string;
  value: string;
}

export const STUDIO_SPECS: Spec[] = [
  { label: 'Architecture', value: 'Tri-Agent System' },
  { label: 'Workflow', value: 'Plan-First Execution' },
  { label: 'Governance', value: 'Quality Gates' },
  { label: 'Traceability', value: 'Requirement ↔ Code' },
  { label: 'Integration', value: 'CLI + Git' },
  { label: 'License', value: 'Open Source' },
];

export interface UseCase {
  title: string;
  description: string;
  outcome: string;
}

export const STUDIO_USE_CASES: UseCase[] = [
  {
    title: 'Architectural Compliance',
    description:
      'Enforce enterprise standards across teams with deterministic quality gates and traceable decisions.',
    outcome: 'Reduced architectural drift',
  },
  {
    title: 'AI-Assisted Refactoring',
    description:
      'Modernize legacy codebases with plan-first, validated refactor workflows.',
    outcome: 'Lower regression risk',
  },
  {
    title: 'Governed Automation',
    description:
      'Use AI without losing accountability through explicit requirements and verification.',
    outcome: 'Audit-ready outputs',
  },
  {
    title: 'Documentation Consistency',
    description:
      'Generate consistent technical documentation tied to the implementation plan.',
    outcome: 'Always current docs',
  },
];
