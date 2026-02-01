# TWOFOLD TECH - Technical Specification

**Version:** 1.0
**Last Updated:** 2026-02-01
**Status:** Approved

---

## 1. Executive Summary

This document defines the technical architecture for twofold.tech, the enterprise R&D lab website for Twofold Tech. The architecture prioritizes **Lighthouse 100/100 scores**, **zero client-side JavaScript by default**, and **SEO dominance** in the Sitecore/.NET modernization space.

### Core Principles

1. **Performance by Default** — Static-first rendering with selective hydration
2. **Industrial Clarity** — Neo-Brutalist design language reflecting brand identity
3. **Zero Waste** — No unnecessary JavaScript, CSS, or network requests
4. **SEO Supremacy** — Structured data, semantic HTML, optimal Core Web Vitals

---

## 2. Technology Stack

### 2.1 Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | 5.0+ | Static site generator with island architecture |
| **Tailwind CSS** | 4.0+ | Utility-first styling with brand tokens |
| **MDX** | 3.0+ | Content authoring with component support |
| **TypeScript** | 5.0+ | Type safety across all modules |

### 2.2 Enhancement Libraries

| Library | Purpose | Hydration Strategy |
|---------|---------|-------------------|
| **Motion** | Page transitions and micro-interactions | `client:visible` |
| **View Transitions API** | Native browser page transitions | Progressive enhancement |

### 2.3 Deployment Target

| Service | Configuration |
|---------|--------------|
| **Platform** | Vercel Edge |
| **Rendering** | Static + ISR (Incremental Static Regeneration) |
| **CDN** | Vercel Edge Network |
| **Analytics** | Vercel Analytics (Core Web Vitals) |

---

## 3. Architecture Overview

### 3.1 Rendering Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                    BUILD TIME (Default)                      │
├─────────────────────────────────────────────────────────────┤
│  • All pages pre-rendered to static HTML                    │
│  • Zero JavaScript in initial payload                       │
│  • CSS inlined for critical path                            │
│  • Images optimized with srcset/AVIF/WebP                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 SELECTIVE HYDRATION (Islands)                │
├─────────────────────────────────────────────────────────────┤
│  • Interactive components hydrate on visibility             │
│  • Motion animations trigger on scroll                      │
│  • Form components hydrate on interaction                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    ISR (Blog/Dynamic)                        │
├─────────────────────────────────────────────────────────────┤
│  • Blog posts regenerate on 1-hour cycle                    │
│  • Case studies regenerate on publish webhook               │
│  • Stale-while-revalidate for instant loads                 │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Island Architecture

Components are categorized by hydration requirements:

#### Static Components (No JS)
- Navigation header
- Footer
- Hero sections
- Product feature grids
- Text content blocks
- Code syntax highlighting (build-time)

#### Interactive Islands (Selective Hydration)
| Component | Directive | Trigger |
|-----------|-----------|---------|
| Mobile menu | `client:media="(max-width: 768px)"` | Viewport match |
| Contact form | `client:visible` | Scroll into view |
| Copy code button | `client:idle` | Browser idle |
| Page transitions | `client:load` | Immediate (critical) |

### 3.3 Content Layer Architecture

Astro 5.0 Content Layer API for type-safe content:

```typescript
// content.config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    category: z.enum(['STUDIO', 'ALLOY', 'Advisory', 'Research']),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    client: z.string(),
    industry: z.string(),
    challenge: z.string(),
    solution: z.string(),
    results: z.array(z.object({
      metric: z.string(),
      value: z.string(),
    })),
    technologies: z.array(z.string()),
    publishDate: z.date(),
  }),
});
```

---

## 4. Performance Targets

### 4.1 Lighthouse Scores

| Metric | Target | Strategy |
|--------|--------|----------|
| **Performance** | 100 | Zero JS default, optimized images, edge caching |
| **Accessibility** | 100 | Semantic HTML, ARIA labels, focus management |
| **Best Practices** | 100 | HTTPS, no deprecated APIs, CSP headers |
| **SEO** | 100 | Structured data, meta tags, semantic markup |

### 4.2 Core Web Vitals

| Metric | Target | Implementation |
|--------|--------|----------------|
| **LCP** | < 1.2s | Preload hero images, inline critical CSS |
| **INP** | < 100ms | Minimal JS, event delegation |
| **CLS** | 0 | Explicit dimensions, font-display: optional |

### 4.3 Bundle Constraints

| Asset Type | Maximum Size | Enforcement |
|------------|--------------|-------------|
| Initial HTML | 50KB gzipped | Build-time check |
| Critical CSS | 14KB inlined | Astro integration |
| Total JS (hydrated page) | 30KB gzipped | Per-island budget |
| Hero image | 100KB | AVIF with fallback |

---

## 5. Design System

### 5.1 Neo-Brutalist Foundations

The design system implements Industrial Clarity through:

```
VISUAL HIERARCHY
────────────────
• High contrast (black/white base)
• International Orange (#FF5F1F) as singular accent
• 5px borders — no subtle shadows or gradients
• Geometric precision — 90° angles, no curves
• Typography dominance — content over decoration
```

### 5.2 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#FF5F1F` | International Orange — CTAs, accents |
| `--color-background` | `#FFFFFF` | Page background |
| `--color-surface` | `#F5F5F5` | Card backgrounds |
| `--color-text` | `#0A0A0A` | Primary text |
| `--color-text-muted` | `#525252` | Secondary text |
| `--color-border` | `#0A0A0A` | All borders (5px) |

### 5.3 Typography Scale

```
FONT STACK
──────────
Primary: "JetBrains Mono", monospace (headings, code)
Body: "Inter", system-ui, sans-serif

SCALE (1.25 ratio)
──────────────────
--text-xs:   0.75rem   (12px)
--text-sm:   0.875rem  (14px)
--text-base: 1rem      (16px)
--text-lg:   1.25rem   (20px)
--text-xl:   1.563rem  (25px)
--text-2xl:  1.953rem  (31px)
--text-3xl:  2.441rem  (39px)
--text-4xl:  3.052rem  (49px)
--text-5xl:  3.815rem  (61px)
```

### 5.4 Spacing System

8px base unit with consistent scale:

```
--space-1:  0.25rem  (4px)
--space-2:  0.5rem   (8px)
--space-3:  0.75rem  (12px)
--space-4:  1rem     (16px)
--space-6:  1.5rem   (24px)
--space-8:  2rem     (32px)
--space-12: 3rem     (48px)
--space-16: 4rem     (64px)
--space-24: 6rem     (96px)
--space-32: 8rem     (128px)
```

### 5.5 Border System

Neo-Brutalist borders are **always 5px solid black**:

```css
.brutalist-border {
  border: 5px solid #0A0A0A;
}

.brutalist-border-top {
  border-top: 5px solid #0A0A0A;
}

/* Offset shadow for depth */
.brutalist-shadow {
  box-shadow: 8px 8px 0 0 #0A0A0A;
}

.brutalist-shadow-orange {
  box-shadow: 8px 8px 0 0 #FF5F1F;
}
```

### 5.6 Component Patterns

#### Card Component
```
┌─────────────────────────────────────┐
│ ███████████████████████████████████ │  ← 5px border
│                                     │
│  CATEGORY                           │  ← Monospace, uppercase
│                                     │
│  Title of the Card                  │  ← Bold, large
│                                     │
│  Description text that explains     │
│  what this card contains.           │
│                                     │
│  [ACTION BUTTON]                    │  ← Orange background
│                                     │
└─────────────────────────────────────┘
        └── 8px offset shadow
```

#### Button Variants
```
PRIMARY (Orange)
┌──────────────────┐
│  TRIGGER TASK    │  bg: #FF5F1F, text: white
└──────────────────┘

SECONDARY (Outline)
┌──────────────────┐
│  LEARN MORE      │  bg: transparent, border: 5px black
└──────────────────┘

GHOST (Text only)
  VIEW DOCS →        text: #0A0A0A, underline on hover
```

---

## 6. Page Architecture

### 6.1 Site Map

```
/                           # Homepage — Lab overview
├── /studio                 # STUDIO product page
├── /alloy                  # ALLOY product page
├── /advisory               # Advisory services
├── /research               # Research publications
│   └── /research/[slug]    # Individual papers
├── /blog                   # Technical blog
│   └── /blog/[slug]        # Individual posts
├── /about                  # Lab background
└── /contact                # Contact form
```

### 6.2 Layout Hierarchy

```
BaseLayout.astro
├── <head> — Meta, fonts, critical CSS
├── Header.astro (static)
├── <slot /> — Page content
└── Footer.astro (static)

ProductLayout.astro (extends Base)
├── ProductHero.astro
├── FeatureGrid.astro
├── TechnicalSpecs.astro
└── CTASection.astro

BlogLayout.astro (extends Base)
├── ArticleHeader.astro
├── TableOfContents.astro (client:media)
├── <Content /> — MDX rendered
└── RelatedPosts.astro
```

---

## 7. View Transitions

### 7.1 Implementation Strategy

Native View Transitions API with graceful degradation:

```astro
---
// BaseLayout.astro
import { ViewTransitions } from 'astro:transitions';
---

<head>
  <ViewTransitions />
</head>
```

### 7.2 Transition Definitions

```css
/* Page transitions */
::view-transition-old(root) {
  animation: fade-out 200ms ease-out;
}

::view-transition-new(root) {
  animation: fade-in 200ms ease-in;
}

/* Persistent elements */
[data-astro-transition-persist="header"] {
  view-transition-name: header;
}

/* Morphing cards */
.product-card {
  view-transition-name: var(--card-id);
}
```

### 7.3 Fallback Strategy

For browsers without View Transitions API support:

1. CSS `@supports` detection
2. Simple opacity crossfade fallback
3. No layout shift — instant navigation

---

## 8. Image Optimization

### 8.1 Astro Image Pipeline

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.png';
---

<Image
  src={heroImage}
  alt="STUDIO orchestration diagram"
  widths={[400, 800, 1200]}
  formats={['avif', 'webp']}
  loading="eager"
  fetchpriority="high"
/>
```

### 8.2 Format Priority

1. **AVIF** — Primary (best compression)
2. **WebP** — Fallback (broad support)
3. **PNG/JPG** — Legacy fallback

### 8.3 Loading Strategy

| Image Type | Loading | Priority |
|------------|---------|----------|
| Hero/LCP | `eager` | `high` |
| Above fold | `eager` | `auto` |
| Below fold | `lazy` | `low` |
| Thumbnails | `lazy` | `low` |

---

## 9. SEO Architecture

### 9.1 Meta Tag Strategy

```astro
---
// BaseHead.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

const { title, description, image, article } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!-- Primary -->
<title>{title} | Twofold Tech</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph -->
<meta property="og:type" content={article ? 'article' : 'website'} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:image" content={image || '/og-default.png'} />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
```

### 9.2 Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Twofold Tech",
  "description": "Enterprise Software Research & Modernization Lab",
  "url": "https://twofold.tech",
  "logo": "https://twofold.tech/logo.png",
  "sameAs": [
    "https://github.com/twofoldtech",
    "https://linkedin.com/company/twofoldtech"
  ]
}
```

### 9.3 Technical SEO Checklist

- [x] XML Sitemap generation
- [x] robots.txt configuration
- [x] Canonical URLs on all pages
- [x] Proper heading hierarchy (single H1)
- [x] Alt text on all images
- [x] Internal linking strategy
- [x] 301 redirects for legacy URLs

---

## 10. Security Headers

### 10.1 Vercel Configuration

```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

---

## 11. Build & Deploy

### 11.1 Build Pipeline

```yaml
# Build steps
1. Type check (tsc --noEmit)
2. Lint (eslint + prettier)
3. Content validation (Astro content collections)
4. Build (astro build)
5. Image optimization (automatic)
6. HTML minification (automatic)
7. Deploy to Vercel
```

### 11.2 Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `PUBLIC_SITE_URL` | Canonical URL | Yes |
| `CONTACT_FORM_ENDPOINT` | Form submission API | Yes |
| `VERCEL_ANALYTICS_ID` | Analytics tracking | No |

### 11.3 ISR Configuration

```typescript
// astro.config.mjs
export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    isr: {
      bypassToken: process.env.ISR_BYPASS_TOKEN,
      expiration: 60 * 60, // 1 hour
    },
  }),
});
```

---

## 12. Quality Assurance

### 12.1 Automated Checks

| Check | Tool | Threshold |
|-------|------|-----------|
| Lighthouse CI | `@lhci/cli` | All scores ≥ 100 |
| Bundle size | `bundlesize` | Per-asset limits |
| TypeScript | `tsc` | Zero errors |
| Accessibility | `axe-core` | Zero violations |
| Links | `linkinator` | Zero broken links |

### 12.2 Pre-commit Hooks

```json
// .husky/pre-commit
npm run type-check
npm run lint
npm run test
```

### 12.3 CI Pipeline

```yaml
# .github/workflows/ci.yml
- Checkout
- Install dependencies
- Type check
- Lint
- Build
- Lighthouse CI
- Deploy preview
```

---

## 13. Appendix

### 13.1 Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Edge | 90+ |

### 13.2 Dependencies

```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/mdx": "^4.0.0",
    "@astrojs/vercel": "^8.0.0",
    "tailwindcss": "^4.0.0",
    "motion": "^11.0.0"
  }
}
```

### 13.3 Reference Documents

- [Astro 5.0 Documentation](https://docs.astro.build)
- [Tailwind CSS 4.0 Documentation](https://tailwindcss.com)
- [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions)
- [Core Web Vitals](https://web.dev/vitals)

---

*Document generated by STUDIO Builder*
