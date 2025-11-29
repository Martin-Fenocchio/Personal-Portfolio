# Quickstart: Blog Articles System

**Date**: 2025-11-22  
**Feature**: Blog Articles System

## Overview

This guide helps you quickly understand and work with the blog articles system. The system allows you to create blog articles as markdown files and automatically generates static pages for browsing and reading them.

## Creating a New Blog Article

1. **Create a markdown file** in `content/blogs/` directory:
   ```bash
   content/blogs/my-new-article.md
   ```

2. **Add frontmatter** at the top of the file:
   ```markdown
   ---
   title: "My New Article"
   date: "2025-11-22"
   author: "Martín Fenocchio"
   featuredImage: "/images/my-article.webp"
   excerpt: "A brief description of the article"
   ---
   ```

3. **Write your article** in markdown below the frontmatter:
   ```markdown
   # My Article Title
   
   Your article content here...
   
   ## Section Heading
   
   More content...
   ```

4. **Build the site**:
   ```bash
   npm run build
   ```

5. **Access your article**:
   - Listing: `http://localhost:3000/blogs`
   - Article: `http://localhost:3000/blogs/my-new-article`

## File Structure

```
content/blogs/
├── article-1.md
├── article-2.md
└── article-3.md

app/blogs/
├── page.tsx              # Blog listing page
└── [slug]/
    └── page.tsx         # Individual article page

src/components/blogs/
├── blog-card.tsx         # Article card component
├── article-content.tsx   # Content renderer
├── table-of-contents.tsx # TOC sidebar
└── share-buttons.tsx     # Share functionality
```

## Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Article title |
| `date` | string | Yes | Publication date (YYYY-MM-DD) |
| `author` | string | No | Author name (default: "Martín Fenocchio") |
| `featuredImage` | string | No | Path to featured image |
| `excerpt` | string | No | Short description for listing |
| `slug` | string | No | Custom URL slug (default: filename) |
| `description` | string | No | Meta description for SEO |
| `keywords` | string[] | No | SEO keywords array |

## Markdown Features Supported

- Headings (h1-h6)
- Paragraphs
- Lists (ordered and unordered)
- Links
- Images
- Code blocks with syntax highlighting
- Inline code
- Bold and italic text
- Tables (GitHub Flavored Markdown)
- Blockquotes

## URL Structure

- **Listing page**: `/blogs`
- **Article page**: `/blogs/[slug]`
  - Slug is generated from filename (without `.md`) or frontmatter `slug` field
  - Example: `my-article.md` → `/blogs/my-article`

## Development Workflow

1. **Create article**: Add markdown file to `content/blogs/`
2. **Test locally**: Run `npm run dev` and visit `/blogs`
3. **Build**: Run `npm run build` to generate static pages
4. **Deploy**: Push to repository, static pages generated on build

## Common Tasks

### Adding a Featured Image

1. Place image in `public/images/` directory
2. Reference in frontmatter:
   ```markdown
   featuredImage: "/images/my-image.webp"
   ```

### Customizing Article Slug

Add `slug` field to frontmatter:
```markdown
---
title: "My Article"
slug: "custom-url-slug"
---
```

### Generating Table of Contents

TOC is automatically generated from markdown headings (h2-h4). Headings are automatically assigned anchor IDs based on their text.

Example:
```markdown
## What Actually Matters
```
Becomes: `#what-actually-matters` in the URL

## Troubleshooting

**Article not appearing in listing**:
- Check file is in `content/blogs/` directory
- Verify frontmatter is valid YAML
- Ensure `date` field is present and valid

**404 error on article page**:
- Check slug matches filename (without `.md`)
- Verify `generateStaticParams` includes your article
- Rebuild the site: `npm run build`

**Markdown not rendering correctly**:
- Check markdown syntax is valid
- Verify code blocks use proper syntax (triple backticks)
- Ensure frontmatter is separated by `---` lines

## Next Steps

- Review [spec.md](./spec.md) for detailed requirements
- Check [plan.md](./plan.md) for implementation details
- See [data-model.md](./data-model.md) for data structure

