# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Twofold Tech marketing website built with Astro 5, React, Tailwind CSS, and MDX. Deployed to Vercel Edge with static output. The site represents a two-person enterprise software consultancy specializing in Sitecore modernization and agentic AI orchestration.

## Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Type-check and build for production
npm run preview      # Preview production build locally
npm run check        # Run Astro type checking only

# Code quality
npm run lint         # ESLint on src/**/*.{ts,tsx,astro}
npm run format       # Prettier formatting
```

## Architecture

### Path Aliases (tsconfig.json)
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@lib/*` → `src/lib/*`
- `@content/*` → `src/content/*`
- `@styles/*` → `src/styles/*`
- `@assets/*` → `src/assets/*`

### Key Directories
- `src/lib/constants/` — Site-wide constants (navigation, copy, service pillars). **Edit these files to update page content rather than editing `.astro` pages directly.**
- `src/content/` — Astro Content Collections (blog posts in MDX, case studies)
- `src/layouts/` — `BaseLayout.astro` is the root layout with SEO meta, structured data, View Transitions
- `studio/brand/` — Brand source of truth in YAML (identity, voice, manifesto, messaging). Reference these when writing new copy.

### Content Collections
Defined in `src/content/config.ts`:
- **blog**: MDX posts with frontmatter schema (title, description, publishDate, author, tags, category, draft)
- **case-studies**: Client work with results metrics and testimonials

### Rendering Strategy
- Static output (`output: 'static'` in astro.config.mjs)
- Selective hydration via Astro islands—use `client:visible` or `client:idle` for interactive React components
- View Transitions API for page navigation

## Design System

Neo-Brutalist aesthetic with strict conventions:
- **Accent color**: International Orange `#FF5F1F`
- **Borders**: Always 5px solid black (`border-brutal` utility)
- **Shadows**: 8px offset (`shadow-brutal`, `shadow-brutal-orange`)
- **Typography**: JetBrains Mono for headings/code, Inter for body
- Tailwind config at `tailwind.config.ts` contains all custom tokens

## Environment Variables

```bash
RESEND_API_KEY=re_xxx   # Required for contact form (Resend email API)
```

## Products & Brand

Two products are central to the brand:
- **STUDIO**: Agentic orchestration platform ("Deterministic Orchestration")
- **ALLOY**: Rust-based high-performance migration tooling for Sitecore

Key thesis: "Deterministic Orchestration vs Prompt-and-Pray" — AI should follow architectural logic, not generate unvalidated code.
