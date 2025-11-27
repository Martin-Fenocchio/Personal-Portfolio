# Research: Blog Articles System

**Date**: 2025-11-22  
**Feature**: Blog Articles System

## Markdown Processing Libraries

### Decision: Use gray-matter + remark + rehype

**Rationale**: 
- `gray-matter`: Industry-standard library for parsing markdown frontmatter (YAML metadata)
- `remark`: Unified markdown processor ecosystem, highly extensible
- `rehype`: HTML processor that works seamlessly with remark
- `rehype-highlight`: Syntax highlighting for code blocks
- `remark-gfm`: GitHub Flavored Markdown support (tables, strikethrough, etc.)

**Alternatives Considered**:
- `markdown-it`: Popular but less extensible than remark ecosystem
- `marked`: Simpler but lacks unified ecosystem
- `MDX`: Overkill for simple markdown rendering, adds complexity

**Implementation Approach**:
```typescript
// Parse frontmatter and content
const matterResult = matter(markdownFile)
// Process markdown to HTML
const processedContent = await remark()
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeStringify)
  .process(matterResult.content)
```

## Static Generation Pattern

### Decision: Use Next.js `generateStaticParams` for static generation

**Rationale**:
- Next.js 15 App Router provides `generateStaticParams` function
- Runs at build time to generate static pages
- Optimal performance - pages are pre-rendered HTML
- No runtime database queries needed
- Perfect for markdown-based content

**Implementation Pattern**:
```typescript
// app/blogs/[slug]/page.tsx
export async function generateStaticParams() {
  const articles = getAllArticles() // Read markdown files
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
```

**Alternatives Considered**:
- Server-side rendering (SSR): Slower, requires runtime processing
- Client-side rendering: Poor SEO, slower initial load
- ISR (Incremental Static Regeneration): Unnecessary complexity for static content

## Table of Contents Generation

### Decision: Extract headings from markdown AST and generate TOC client-side

**Rationale**:
- Parse markdown headings during markdown processing
- Generate anchor IDs for each heading (slugify heading text)
- Store heading structure in article metadata
- Render TOC client-side with scroll highlighting using Intersection Observer API

**Implementation Approach**:
- Extract headings during markdown processing (remark plugin)
- Generate slug-based anchor IDs (e.g., "what-actually-matters" from "What Actually Matters")
- Store headings array in article metadata
- Use Intersection Observer to highlight active section on scroll

**Alternatives Considered**:
- Server-side TOC generation: More complex, same result
- Manual TOC in frontmatter: Not scalable, error-prone

## Reading Time Calculation

### Decision: Calculate reading time from word count using 200 words/minute standard

**Rationale**:
- Industry standard: 200-250 words per minute
- Simple calculation: wordCount / 200 = minutes
- Round to nearest minute, minimum 1 minute
- Calculate during markdown processing (build time)

**Implementation**:
```typescript
const calculateReadingTime = (content: string): number => {
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return Math.max(1, minutes)
}
```

## Share Functionality

### Decision: Use Web Share API with fallback to manual share URLs

**Rationale**:
- Web Share API provides native sharing on supported devices
- Fallback to manual URL construction for Twitter/LinkedIn
- Copy to clipboard using Clipboard API
- No external dependencies needed

**Implementation**:
- Twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`
- LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
- Copy link: Clipboard API with visual feedback

## Newsletter Signup

### Decision: Placeholder component with external service integration point

**Rationale**:
- Newsletter service selection deferred to implementation phase
- Component structure defined but integration flexible
- Common services: Mailchimp, ConvertKit, Substack, custom API

**Implementation**:
- Create reusable `NewsletterSignup` component
- Accept service URL/props as configuration
- Styled to match design reference (green button, prominent placement)

## Image Optimization

### Decision: Use Next.js Image component with WebP format

**Rationale**:
- Next.js Image component provides automatic optimization
- WebP format reduces file size significantly
- Responsive images with srcset
- Lazy loading built-in
- Aligns with constitution performance requirements

## URL Slug Generation

### Decision: Generate slugs from article filenames or frontmatter

**Rationale**:
- Use filename as slug (e.g., `my-article.md` → `/blogs/my-article`)
- Allow override via frontmatter `slug` field
- Sanitize slugs: lowercase, replace spaces with hyphens, remove special chars
- Ensure URL-safe characters only

**Implementation**:
```typescript
const generateSlug = (filename: string, frontmatter?: { slug?: string }): string => {
  if (frontmatter?.slug) return sanitizeSlug(frontmatter.slug)
  return sanitizeSlug(filename.replace('.md', ''))
}
```

## Markdown File Structure

### Decision: Store markdown files in `content/blogs/` directory with frontmatter

**Rationale**:
- Clear separation of content from code
- Easy to manage and version control
- Frontmatter for metadata (title, date, author, featured image, etc.)
- Markdown body for article content

**File Structure**:
```markdown
---
title: "Article Title"
date: "2025-11-22"
author: "Martín Fenocchio"
featuredImage: "/images/article-image.webp"
excerpt: "Article excerpt for listing page"
---

# Article Content

Markdown content here...
```

## Performance Optimization Strategies

### Decision: Static generation + code splitting + image optimization

**Rationale**:
- Static generation: Pages pre-rendered at build time
- Code splitting: Dynamic imports for heavy components (markdown renderer)
- Image optimization: Next.js Image component
- Minimal JavaScript: Server components where possible

**Implementation**:
- Use React Server Components for blog listing and article pages
- Client components only for interactive features (TOC, share buttons)
- Lazy load markdown processing if needed

