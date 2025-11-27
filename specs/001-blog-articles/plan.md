# Implementation Plan: Blog Articles System

**Branch**: `001-blog-articles` | **Date**: 2025-11-22 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-blog-articles/spec.md`

## Summary

Implement a blog articles system for the portfolio website that allows visitors to browse and read blog articles. Articles are stored as markdown files in the repository and rendered as static pages using Next.js App Router static generation. The system includes a listing page (`/blogs`) displaying all articles in a grid layout and individual article pages (`/blogs/[slug]`) with markdown rendering, table of contents sidebar, share functionality, and newsletter signup. All pages are statically generated at build time for optimal performance.

## Technical Context

**Language/Version**: TypeScript 5.2+  
**Primary Dependencies**: Next.js 15.3+, React 18.2+, Tailwind CSS 3.4+, gray-matter (markdown frontmatter parsing), remark/rehype (markdown processing), rehype-highlight (code syntax highlighting)  
**Storage**: Markdown files stored in `content/blogs/` directory in repository  
**Testing**: @testing-library/react, @testing-library/jest-dom (when tests are required)  
**Target Platform**: Web (browser), static site generation  
**Project Type**: Web application (Next.js App Router)  
**Performance Goals**: Blog listing page loads in <2s, individual article pages load in <2s, static generation at build time  
**Constraints**: Must use static routes for best performance, articles stored as markdown files, UI must match provided design reference  
**Scale/Scope**: Support for 50+ articles, responsive design (mobile 320px+, tablet, desktop), WCAG 2.1 Level AA accessibility

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Component-First Architecture ✅
- Blog listing page will use reusable `BlogCard` component
- Article page will use reusable `TableOfContents`, `ShareButtons`, `NewsletterSignup` components
- All components located in `src/components/blogs/` directory
- Components use TypeScript interfaces for props

### II. TypeScript Strict Typing ✅
- All components, utilities, and types fully typed
- Blog article data structures defined with TypeScript interfaces
- No `any` types used

### III. Tailwind-Only Styling ✅
- All styling uses Tailwind CSS classes exclusively
- No new CSS/SCSS files created
- Responsive design using Tailwind breakpoints

### IV. Accessibility First ✅
- All interactive elements have ARIA labels
- Keyboard navigation support for share buttons and table of contents
- Semantic HTML (`<article>`, `<nav>`, `<section>`)
- Images have descriptive alt attributes

### V. Performance Optimization ✅
- Static generation at build time using `generateStaticParams`
- Next.js Image component for optimized images
- Code splitting via dynamic imports if needed
- Proper metadata for SEO

### VI. Mobile-First Responsive Design ✅
- Responsive grid layout for blog listing
- Table of contents adapts for mobile viewports
- Tailwind responsive breakpoints used throughout

### VII. Code Quality Standards ✅
- Early returns where applicable
- Unique keys for list items (using article slugs)
- Proper function naming (handleClick, handleKeyDown)
- PascalCase for components, camelCase for functions

**Status**: All constitution gates pass. No violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-blog-articles/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
app/
├── blogs/
│   ├── page.tsx                    # Blog listing page (/blogs)
│   └── [slug]/
│       └── page.tsx                # Individual article page (/blogs/[slug])
│
content/
└── blogs/                          # Markdown files directory
    ├── example-article-1.md
    ├── example-article-2.md
    └── ...

src/
├── components/
│   └── blogs/
│       ├── blog-card.tsx           # Article card for listing page
│       ├── blog-listing.tsx       # Blog listing page component
│       ├── article-content.tsx     # Article content renderer
│       ├── table-of-contents.tsx   # Table of contents sidebar
│       ├── share-buttons.tsx       # Share functionality component
│       └── newsletter-signup.tsx  # Newsletter signup component
│
└── utils/
    └── blogs/
        ├── blog-data.ts            # Blog data fetching utilities
        ├── markdown.ts              # Markdown processing utilities
        ├── reading-time.ts          # Reading time calculation
        └── types.ts                 # TypeScript types/interfaces
```

**Structure Decision**: Next.js App Router structure with `app/blogs/` for routes, `content/blogs/` for markdown files, and `src/components/blogs/` for reusable components. Utilities in `src/utils/blogs/` handle data fetching, markdown processing, and type definitions.

## Complexity Tracking

> **No constitution violations requiring justification**
