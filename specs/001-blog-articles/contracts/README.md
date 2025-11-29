# Contracts: Blog Articles System

**Date**: 2025-11-22  
**Feature**: Blog Articles System

## Overview

This feature uses static site generation and does not require API contracts. All data is read from markdown files at build time and rendered as static HTML pages.

## Data Contracts

### Blog Article Data Structure

Articles are stored as markdown files with YAML frontmatter. The structure is defined in [data-model.md](../data-model.md).

### File System Contract

**Location**: `content/blogs/*.md`

**Format**: Markdown with YAML frontmatter

**Required Fields**:
- `title` (string)
- `date` (string, ISO 8601 format: YYYY-MM-DD)

**Optional Fields**:
- `author` (string)
- `featuredImage` (string, path to image)
- `excerpt` (string)
- `slug` (string, custom URL slug)
- `description` (string, meta description)
- `keywords` (string[], SEO keywords)

## Component Contracts

### BlogCard Component

**Props**:
```typescript
interface BlogCardProps {
  title: string
  excerpt?: string
  featuredImage?: string
  publicationDate: Date
  readingTime: number
  slug: string
}
```

### ArticleContent Component

**Props**:
```typescript
interface ArticleContentProps {
  content: string // HTML string from processed markdown
  headings: ArticleSection[]
}
```

### TableOfContents Component

**Props**:
```typescript
interface TableOfContentsProps {
  headings: ArticleSection[]
  activeId?: string
}
```

### ShareButtons Component

**Props**:
```typescript
interface ShareButtonsProps {
  url: string
  title: string
  description?: string
}
```

## URL Contracts

- **Listing**: `/blogs` (static route)
- **Article**: `/blogs/[slug]` (dynamic route, statically generated)
  - `slug`: URL-friendly string matching article filename or frontmatter slug

## Build-Time Contracts

### generateStaticParams

**Returns**: `Promise<Array<{ slug: string }>>`

**Contract**: Must return array of all article slugs for static generation.

**Example**:
```typescript
export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
```

## No Runtime API Contracts

This feature does not require runtime API contracts as all data is:
- Read from filesystem at build time
- Processed during static generation
- Served as static HTML pages

