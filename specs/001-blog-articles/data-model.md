# Data Model: Blog Articles System

**Date**: 2025-11-22  
**Feature**: Blog Articles System

## Entities

### BlogArticle

Represents a single blog article/post with all metadata and content.

**Attributes**:
- `slug` (string, required): URL-friendly identifier, unique
  - Generated from filename or frontmatter `slug` field
  - Format: lowercase, hyphens for spaces, URL-safe characters only
  - Example: `"understanding-javascript-primitives"`
  
- `title` (string, required): Article title
  - From frontmatter `title` field
  - Displayed in listing, article page, and metadata
  
- `content` (string, required): Article content in markdown format
  - Raw markdown from file body (after frontmatter)
  - Processed to HTML for rendering
  
- `excerpt` (string, optional): Short description for listing page
  - From frontmatter `excerpt` field
  - Fallback to first paragraph if not provided
  
- `featuredImage` (string, optional): Path to featured image
  - From frontmatter `featuredImage` field
  - Used in listing cards and Open Graph metadata
  - Format: `/images/article-image.webp` or full URL
  
- `author` (string, required): Author name
  - From frontmatter `author` field
  - Default: "Martín Fenocchio" if not specified
  
- `publicationDate` (Date, required): Publication date
  - From frontmatter `date` field
  - Format: ISO 8601 (YYYY-MM-DD)
  - Used for sorting (newest first) and display
  
- `readingTime` (number, computed): Estimated reading time in minutes
  - Calculated from word count: `Math.ceil(wordCount / 200)`
  - Minimum: 1 minute
  - Computed during markdown processing
  
- `headings` (ArticleSection[], computed): Table of contents structure
  - Extracted from markdown headings during processing
  - Used for table of contents sidebar
  - Computed during markdown processing
  
- `metadata` (ArticleMetadata, optional): SEO and social sharing metadata
  - Open Graph tags
  - Twitter Card tags
  - Meta description

**Relationships**:
- None (articles are independent entities)

**Validation Rules**:
- Slug must be unique across all articles
- Title must not be empty
- Content must not be empty
- Publication date must be valid date
- Featured image path must be valid if provided

**State Transitions**:
- Articles are published immediately upon being added to repository
- No draft/published state management (assumption from spec)

### ArticleSection

Represents a heading within an article, used for table of contents.

**Attributes**:
- `id` (string, required): Anchor ID for navigation
  - Generated from heading text (slugified)
  - Format: lowercase, hyphens for spaces
  - Example: `"what-actually-matters-in-gpt-5-1"`
  
- `text` (string, required): Heading text content
  - Extracted from markdown heading
  
- `level` (number, required): Heading level (1-6)
  - From markdown heading level (h1-h6)
  - Typically h2-h4 for TOC (h1 is article title)
  
- `children` (ArticleSection[], optional): Nested headings
  - For hierarchical TOC structure
  - Optional, may be flat list

**Relationships**:
- Belongs to BlogArticle (many-to-one)

**Validation Rules**:
- Level must be between 1 and 6
- ID must be unique within article
- Text must not be empty

### ArticleMetadata

SEO and social sharing metadata for an article.

**Attributes**:
- `description` (string, optional): Meta description
  - From frontmatter `description` or excerpt
  - Used for SEO and Open Graph
  
- `keywords` (string[], optional): SEO keywords
  - From frontmatter `keywords` field
  - Array of strings
  
- `ogImage` (string, optional): Open Graph image
  - From frontmatter `ogImage` or featuredImage
  - Format: Full URL or absolute path
  
- `twitterCard` (string, optional): Twitter Card type
  - Default: "summary_large_image"
  - Options: "summary", "summary_large_image"

**Relationships**:
- Belongs to BlogArticle (one-to-one)

## Data Storage

**Storage Type**: File-based (markdown files)

**Location**: `content/blogs/*.md`

**Format**: Markdown with YAML frontmatter

**Example Structure**:
```markdown
---
title: "Understanding JavaScript Primitives"
date: "2025-11-22"
author: "Martín Fenocchio"
featuredImage: "/images/js-primitives.webp"
excerpt: "Deep dive into JavaScript primitive and reference types"
description: "Learn about JavaScript primitives and reference types in depth"
keywords: ["javascript", "primitives", "types"]
slug: "understanding-javascript-primitives"
---

# Understanding JavaScript Primitives

Article content here...
```

## Data Access Patterns

**Read Operations**:
- `getAllArticles()`: Read all markdown files, parse frontmatter, return array of BlogArticle
- `getArticleBySlug(slug)`: Find article by slug, parse and return BlogArticle
- `getArticleSlugs()`: Return array of all article slugs for `generateStaticParams`

**Processing**:
- Markdown processing happens at build time
- Articles are parsed, processed, and metadata extracted during static generation
- Processed HTML and metadata cached in build output

**Sorting**:
- Articles sorted by `publicationDate` descending (newest first)
- Applied in `getAllArticles()` function

## TypeScript Interfaces

```typescript
interface BlogArticle {
  slug: string
  title: string
  content: string
  excerpt?: string
  featuredImage?: string
  author: string
  publicationDate: Date
  readingTime: number
  headings: ArticleSection[]
  metadata?: ArticleMetadata
}

interface ArticleSection {
  id: string
  text: string
  level: number
  children?: ArticleSection[]
}

interface ArticleMetadata {
  description?: string
  keywords?: string[]
  ogImage?: string
  twitterCard?: string
}

interface BlogArticleFrontmatter {
  title: string
  date: string
  author?: string
  featuredImage?: string
  excerpt?: string
  description?: string
  keywords?: string[]
  slug?: string
  ogImage?: string
  twitterCard?: string
}
```

