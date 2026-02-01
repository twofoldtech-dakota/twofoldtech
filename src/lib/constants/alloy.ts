export const ALLOY_META = {
  title: 'ALLOY_CLI',
  tagline: 'High-Performance Migration Engine',
  description:
    'A Rust-powered CLI tool for enterprise Sitecore migrations. ALLOY parses, transforms, and serializes content at speeds 90% faster than traditional tools with zero data loss.',
  category: 'MIGRATION ENGINE',
};

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export const ALLOY_METRICS: Metric[] = [
  {
    value: '90%',
    label: 'Faster Processing',
    description: 'Compared to traditional .NET-based migration tools',
  },
  {
    value: '0',
    label: 'Data Loss',
    description: 'Guaranteed integrity across millions of items',
  },
  {
    value: '10M+',
    label: 'Items Processed',
    description: 'In production migrations to date',
  },
  {
    value: '< 1hr',
    label: 'Avg Migration Time',
    description: 'For standard enterprise content trees',
  },
];

export interface PipelineStage {
  name: string;
  description: string;
  details: string[];
}

export const ALLOY_PIPELINE: PipelineStage[] = [
  {
    name: 'PARSE',
    description: 'Analyze source Sitecore content tree and dependency graph',
    details: [
      'Template inheritance mapping',
      'Item relationship detection',
      'Media library indexing',
      'Workflow state capture',
    ],
  },
  {
    name: 'TRANSFORM',
    description: 'Convert legacy structures to XM Cloud compatible format',
    details: [
      'Field type conversion',
      'Rendering parameter migration',
      'Placeholder key mapping',
      'Security role translation',
    ],
  },
  {
    name: 'VALIDATE',
    description: 'Ensure data integrity and compatibility',
    details: [
      'Schema validation',
      'Reference integrity checks',
      'Content length limits',
      'Character encoding verification',
    ],
  },
  {
    name: 'SERIALIZE',
    description: 'Output to XM Cloud serialization format',
    details: [
      'YAML item serialization',
      'Incremental export',
      'Delta detection',
      'Rollback snapshots',
    ],
  },
];

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const ALLOY_FEATURES: Feature[] = [
  {
    title: 'Memory-Safe Rust Core',
    description:
      'Built in Rust for maximum performance and memory safety. No garbage collection pauses during large migrations.',
    icon: 'zap',
  },
  {
    title: 'Incremental Processing',
    description:
      'Only process changed items. Perfect for iterative migrations and continuous content sync.',
    icon: 'layers',
  },
  {
    title: 'Pipeline Flagging',
    description:
      'Automatically identifies custom .NET pipeline logic that needs manual refactoring for XM Cloud.',
    icon: 'flag',
  },
  {
    title: 'Parallel Execution',
    description:
      'Multi-threaded processing with configurable worker pools. Scale to your hardware.',
    icon: 'cpu',
  },
  {
    title: 'Detailed Reporting',
    description:
      'Comprehensive migration reports with item-level status, warnings, and error details.',
    icon: 'file-text',
  },
  {
    title: 'Dry Run Mode',
    description:
      'Preview migration results without writing changes. Validate before committing.',
    icon: 'eye',
  },
];

export const ALLOY_CLI_EXAMPLES = [
  {
    command: 'alloy analyze --source ./master --output ./report.json',
    description: 'Analyze content tree and generate dependency report',
  },
  {
    command: 'alloy migrate --config ./alloy.config.yaml --dry-run',
    description: 'Preview migration with dry run mode',
  },
  {
    command: 'alloy migrate --parallel 8 --incremental',
    description: 'Run incremental migration with 8 worker threads',
  },
  {
    command: 'alloy validate --strict --schema xmcloud',
    description: 'Validate serialized output against XM Cloud schema',
  },
];

export interface Spec {
  label: string;
  value: string;
}

export const ALLOY_SPECS: Spec[] = [
  { label: 'Language', value: 'Rust' },
  { label: 'Platforms', value: 'Windows, macOS, Linux' },
  { label: 'Source Formats', value: 'Sitecore XP 9.x, 10.x' },
  { label: 'Target Format', value: 'XM Cloud / Serialization' },
  { label: 'Configuration', value: 'YAML / JSON' },
  { label: 'Output', value: 'YAML Items + Reports' },
];
