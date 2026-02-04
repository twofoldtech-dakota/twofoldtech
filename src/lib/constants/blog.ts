export const BLOG_META = {
  title: 'BLOG',
  tagline: 'TECHNICAL INSIGHTS & RESEARCH',
  description: 'Deep dives into CMS integration, deterministic orchestration, and enterprise software strategy.',
};

export interface BlogCategory {
  slug: string;
  label: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'sitecore',
    label: 'SITECORE',
    description: 'XM Cloud, XP migrations, and headless implementations',
  },
  {
    slug: 'dotnet',
    label: '.NET',
    description: 'ASP.NET Core, Azure, and enterprise .NET development',
  },
  {
    slug: 'agentic',
    label: 'AGENTIC',
    description: 'AI orchestration, autonomous systems, and STUDIO insights',
  },
  {
    slug: 'architecture',
    label: 'ARCHITECTURE',
    description: 'System design, patterns, and modernization strategies',
  },
];

// Sample blog posts for the listing page
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: 'sitecore-xm-cloud-migration-guide',
    title: 'The Definitive Guide to Sitecore XM Cloud Migration',
    description: 'A comprehensive walkthrough of migrating from Sitecore XP to XM Cloud, including data strategies, content architecture, and performance optimization.',
    category: 'sitecore',
    date: '2026-01-28',
    readTime: '12 min',
    featured: true,
  },
  {
    slug: 'tri-agent-architecture-deep-dive',
    title: 'Inside STUDIO: The Tri-Agent Architecture',
    description: 'How STUDIO orchestrates three specialized AI agents to deliver enterprise-grade software with architectural integrity.',
    category: 'agentic',
    date: '2026-01-21',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'dotnet-9-enterprise-patterns',
    title: '.NET 9 Enterprise Patterns',
    description: 'Modern patterns for building scalable enterprise applications with .NET 9 and Azure.',
    category: 'dotnet',
    date: '2026-01-07',
    readTime: '15 min',
  },
  {
    slug: 'headless-sitecore-nextjs',
    title: 'Headless Sitecore with Next.js: Best Practices',
    description: 'Architectural patterns and performance optimizations for Next.js-powered Sitecore implementations.',
    category: 'sitecore',
    date: '2025-12-28',
    readTime: '11 min',
  },
  {
    slug: 'semantic-kernel-orchestration',
    title: 'Semantic Kernel for Enterprise Orchestration',
    description: 'Building robust AI orchestration pipelines with Microsoft Semantic Kernel.',
    category: 'agentic',
    date: '2025-12-21',
    readTime: '9 min',
  },
];
