# Twofold.tech Directory Structure

**Optimized for Astro 5.0 with Content Layer API**

---

## Overview

This structure separates concerns clearly: static components vs. hydrated islands, content collections vs. pages, and shared utilities vs. feature-specific code.

```
twofold.tech/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Build, test, lint
│       ├── lighthouse.yml      # Performance audits
│       └── deploy-preview.yml  # PR preview deployments
│
├── public/
│   ├── fonts/
│   │   ├── inter-var.woff2     # Primary font (variable)
│   │   └── jetbrains-mono.woff2 # Code font
│   ├── images/
│   │   ├── logo.svg
│   │   ├── logo-dark.svg
│   │   └── og-default.png      # Default OpenGraph image
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── manifest.json           # PWA manifest
│
├── src/
│   ├── assets/                 # Processed by Astro
│   │   ├── images/             # Optimized images
│   │   └── icons/              # SVG icon sprites
│   │
│   ├── components/
│   │   ├── common/             # Shared static components
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Link.astro
│   │   │   └── Icon.astro
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   ├── MobileMenu.astro
│   │   │   └── Breadcrumbs.astro
│   │   │
│   │   ├── sections/           # Page sections (static)
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── ProductShowcase.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── CTA.astro
│   │   │   └── Stats.astro
│   │   │
│   │   ├── blog/               # Blog-specific components
│   │   │   ├── PostCard.astro
│   │   │   ├── PostHeader.astro
│   │   │   ├── PostContent.astro
│   │   │   ├── AuthorBio.astro
│   │   │   ├── TableOfContents.astro
│   │   │   ├── RelatedPosts.astro
│   │   │   └── ShareButtons.astro
│   │   │
│   │   ├── products/           # Product page components
│   │   │   ├── ProductCard.astro
│   │   │   ├── FeatureGrid.astro
│   │   │   ├── PricingTable.astro
│   │   │   └── ProductHero.astro
│   │   │
│   │   ├── case-studies/       # Case study components
│   │   │   ├── CaseStudyCard.astro
│   │   │   ├── ResultsMetric.astro
│   │   │   └── TechStack.astro
│   │   │
│   │   ├── bento/              # Bento grid system
│   │   │   ├── BentoGrid.astro
│   │   │   ├── BentoCard.astro
│   │   │   └── BentoVariants.astro
│   │   │
│   │   └── islands/            # Hydrated components (client JS)
│   │       ├── react/          # React islands
│   │       │   ├── CodePlayground.tsx
│   │       │   ├── InteractiveDemo.tsx
│   │       │   ├── SearchDialog.tsx
│   │       │   └── ContactForm.tsx
│   │       │
│   │       ├── svelte/         # Svelte islands (lighter)
│   │       │   ├── ThemeToggle.svelte
│   │       │   ├── NewsletterForm.svelte
│   │       │   ├── VideoPlayer.svelte
│   │       │   └── AnimatedChart.svelte
│   │       │
│   │       └── shared/         # Shared island utilities
│   │           ├── island-wrapper.ts
│   │           └── hydration-utils.ts
│   │
│   ├── content/                # Content Layer collections
│   │   ├── config.ts           # Collection schemas
│   │   │
│   │   ├── blog/               # Blog posts (MDX)
│   │   │   ├── sitecore/       # Sitecore category
│   │   │   │   ├── xm-cloud-best-practices.mdx
│   │   │   │   └── headless-migration-guide.mdx
│   │   │   ├── dotnet/         # .NET category
│   │   │   │   ├── aspnet-core-8-features.mdx
│   │   │   │   └── azure-functions-patterns.mdx
│   │   │   ├── architecture/   # Architecture category
│   │   │   │   └── composable-dxp-patterns.mdx
│   │   │   └── insights/       # General insights
│   │   │       └── enterprise-ai-adoption.mdx
│   │   │
│   │   ├── products/           # Product data (JSON/YAML)
│   │   │   ├── studio.json
│   │   │   └── conduit.json
│   │   │
│   │   ├── case-studies/       # Case studies (MDX)
│   │   │   ├── enterprise-migration.mdx
│   │   │   └── headless-commerce.mdx
│   │   │
│   │   ├── team/               # Team member data
│   │   │   └── members.json
│   │   │
│   │   └── testimonials/       # Client testimonials
│   │       └── testimonials.json
│   │
│   ├── layouts/                # Page layouts
│   │   ├── BaseLayout.astro    # Root layout (head, body)
│   │   ├── PageLayout.astro    # Standard page wrapper
│   │   ├── BlogLayout.astro    # Blog post layout
│   │   ├── ProductLayout.astro # Product page layout
│   │   └── LandingLayout.astro # Marketing landing pages
│   │
│   ├── pages/                  # File-based routing
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   │
│   │   ├── products/
│   │   │   ├── index.astro     # Products overview
│   │   │   ├── studio.astro    # STUDIO product page
│   │   │   └── conduit.astro   # Conduit product page
│   │   │
│   │   ├── blog/
│   │   │   ├── index.astro     # Blog listing
│   │   │   ├── [...slug].astro # Dynamic blog posts
│   │   │   ├── category/
│   │   │   │   └── [category].astro
│   │   │   └── tag/
│   │   │       └── [tag].astro
│   │   │
│   │   ├── case-studies/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   │
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   ├── consulting.astro
│   │   │   └── development.astro
│   │   │
│   │   ├── lab/                # R&D Lab dashboard
│   │   │   └── index.astro
│   │   │
│   │   ├── og/                 # OpenGraph image generation
│   │   │   └── [...slug].png.ts
│   │   │
│   │   ├── api/                # API routes (if needed)
│   │   │   └── newsletter.ts   # Newsletter signup
│   │   │
│   │   ├── rss.xml.ts          # RSS feed
│   │   ├── sitemap.xml.ts      # Sitemap (or use integration)
│   │   ├── 404.astro
│   │   └── 500.astro
│   │
│   ├── lib/                    # Shared utilities
│   │   ├── seo/
│   │   │   ├── metadata.ts     # SEO metadata generator
│   │   │   ├── schemas.ts      # JSON-LD schemas
│   │   │   └── sitemap.ts      # Sitemap utilities
│   │   │
│   │   ├── utils/
│   │   │   ├── date.ts         # Date formatting
│   │   │   ├── string.ts       # String utilities
│   │   │   ├── cn.ts           # Class name merger
│   │   │   └── reading-time.ts # Calculate read time
│   │   │
│   │   ├── constants/
│   │   │   ├── site.ts         # Site metadata
│   │   │   ├── navigation.ts   # Nav structure
│   │   │   └── social.ts       # Social links
│   │   │
│   │   └── preferences.ts      # User preferences (localStorage)
│   │
│   ├── styles/
│   │   ├── global.css          # Global styles, CSS reset
│   │   ├── typography.css      # Typography system
│   │   ├── bento.css           # Bento grid utilities
│   │   ├── animations.css      # CSS animations
│   │   └── prose.css           # Blog content styling
│   │
│   └── types/                  # TypeScript definitions
│       ├── content.ts          # Content collection types
│       ├── seo.ts              # SEO config types
│       └── env.d.ts            # Environment types
│
├── tests/
│   ├── unit/                   # Unit tests (Vitest)
│   │   └── lib/
│   ├── integration/            # Integration tests
│   │   └── components/
│   └── e2e/                    # E2E tests (Playwright)
│       ├── home.spec.ts
│       ├── blog.spec.ts
│       └── navigation.spec.ts
│
├── scripts/                    # Build/dev scripts
│   ├── generate-og-images.ts
│   └── validate-content.ts
│
├── astro.config.mjs            # Astro configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── package.json
├── pnpm-lock.yaml
├── .env.example
├── .gitignore
├── .prettierrc
├── .eslintrc.cjs
├── lighthouserc.json           # Lighthouse CI config
├── playwright.config.ts        # E2E test config
└── vitest.config.ts            # Unit test config
```

---

## Directory Responsibilities

### `/src/components/`

| Directory | Purpose | Hydration |
|-----------|---------|-----------|
| `common/` | Reusable UI primitives | Static |
| `layout/` | Page structure components | Static |
| `sections/` | Landing page sections | Static |
| `blog/` | Blog-specific components | Static |
| `products/` | Product page components | Static |
| `bento/` | Dashboard grid system | Static |
| `islands/react/` | Complex interactive components | `client:visible` |
| `islands/svelte/` | Lightweight interactions | `client:idle` |

### `/src/content/`

| Collection | Type | Schema Location |
|------------|------|-----------------|
| `blog/` | MDX | `config.ts` |
| `products/` | JSON | `config.ts` |
| `case-studies/` | MDX | `config.ts` |
| `team/` | JSON | `config.ts` |
| `testimonials/` | JSON | `config.ts` |

### `/src/pages/`

All pages use file-based routing. Dynamic routes use `[param]` or `[...slug]` patterns.

---

## Naming Conventions

### Files

| Type | Convention | Example |
|------|------------|---------|
| Astro components | PascalCase | `ProductCard.astro` |
| React components | PascalCase | `CodePlayground.tsx` |
| Svelte components | PascalCase | `ThemeToggle.svelte` |
| Utilities | kebab-case | `reading-time.ts` |
| Content files | kebab-case | `xm-cloud-best-practices.mdx` |
| Pages | kebab-case | `case-studies/index.astro` |

### CSS Classes

- Utility classes: Tailwind conventions
- Custom classes: BEM-lite (`bento-card`, `bento-card--featured`)

### TypeScript

- Interfaces: PascalCase with `I` prefix optional
- Types: PascalCase
- Constants: SCREAMING_SNAKE_CASE for true constants, camelCase for config objects

---

## Content Organization

### Blog Categories

```
blog/
├── sitecore/     # Sitecore XM Cloud, XP, XC content
├── dotnet/       # .NET Core, Azure, C# content
├── architecture/ # System design, patterns, DXP
├── devops/       # CI/CD, infrastructure, deployment
└── insights/     # Industry trends, thought leadership
```

### Frontmatter Standards

```yaml
---
title: "Sitecore XM Cloud: A Developer's Guide"
description: "Complete guide to building headless experiences with XM Cloud"
pubDate: 2026-02-01
author: "Dakota Smith"
tags: ["sitecore", "xm-cloud", "headless"]
category: "sitecore"
heroImage: "/images/blog/xm-cloud-guide.png"
seoKeywords: ["sitecore xm cloud tutorial", "headless cms sitecore"]
---
```

---

## Import Aliases

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@lib/*": ["src/lib/*"],
      "@content/*": ["src/content/*"],
      "@styles/*": ["src/styles/*"],
      "@assets/*": ["src/assets/*"]
    }
  }
}
```

**Usage:**
```astro
---
import Button from '@components/common/Button.astro';
import { generateBlogSEO } from '@lib/seo/metadata';
import '@styles/global.css';
---
```

---

## Environment Variables

```bash
# .env.example

# Site
PUBLIC_SITE_URL=https://twofold.tech

# Analytics
PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (server-side only)
NEWSLETTER_API_KEY=
CONTACT_FORM_WEBHOOK=

# Build
NODE_ENV=development
```

---

*Structure designed for scalability, maintainability, and optimal Astro performance.*
