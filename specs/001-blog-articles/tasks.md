# Tasks: Blog Articles System

**Input**: Design documents from `/specs/001-blog-articles/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL and not included in this feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: Next.js App Router structure
- Routes: `app/blogs/`
- Components: `src/components/blogs/`
- Utilities: `src/utils/blogs/`
- Content: `content/blogs/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create directory structure: `content/blogs/`, `src/components/blogs/`, `src/utils/blogs/`
- [x] T002 [P] Install markdown processing dependencies: gray-matter, remark, remark-gfm, remark-rehype, rehype-stringify, rehype-highlight
- [x] T003 [P] Create TypeScript types file with BlogArticle, ArticleSection, ArticleMetadata interfaces in `src/utils/blogs/types.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create markdown processing utility to parse frontmatter and convert markdown to HTML in `src/utils/blogs/markdown.ts`
- [x] T005 Create reading time calculation utility in `src/utils/blogs/reading-time.ts`
- [x] T006 Create blog data fetching utility `getAllArticles()` to read and parse all markdown files in `src/utils/blogs/blog-data.ts`
- [x] T007 Create blog data fetching utility `getArticleBySlug(slug)` to find and parse article by slug in `src/utils/blogs/blog-data.ts`
- [x] T008 Create blog data fetching utility `getArticleSlugs()` to return all article slugs for static generation in `src/utils/blogs/blog-data.ts`
- [x] T009 Create slug generation utility to sanitize filenames and frontmatter slugs in `src/utils/blogs/blog-data.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Blog Articles Listing (Priority: P1) 🎯 MVP

**Goal**: Visitors can view a grid of all available blog articles on the `/blogs` page with clickable cards that navigate to individual articles.

**Independent Test**: Navigate to `/blogs` and verify that all published articles are displayed in a grid layout with clickable cards that navigate to individual article pages. Test on mobile device to verify responsive single-column layout.

### Implementation for User Story 1

- [x] T010 [P] [US1] Create BlogCard component with title, excerpt, featuredImage, publicationDate, readingTime, and slug props in `src/components/blogs/blog-card.tsx`
- [x] T011 [US1] Create BlogListing component that fetches all articles and displays them in a responsive grid layout in `src/components/blogs/blog-listing.tsx`
- [x] T012 [US1] Create blog listing page route with metadata and BlogListing component in `app/blogs/page.tsx`
- [x] T013 [US1] Add empty state handling when no articles are found in `src/components/blogs/blog-listing.tsx`
- [x] T014 [US1] Create example markdown article file in `content/blogs/example-article.md` with frontmatter and sample content for testing

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. Visitors can browse articles and click cards to navigate (even if article pages don't exist yet, navigation should work).

---

## Phase 4: User Story 2 - Read Individual Blog Article (Priority: P1)

**Goal**: Visitors can read a complete blog article on its dedicated page with markdown rendering, table of contents sidebar, and article metadata.

**Independent Test**: Navigate directly to `/blogs/[any-article-slug]` and verify that the article content renders correctly, markdown formatting is preserved, table of contents is functional with scroll highlighting, and article metadata is displayed.

### Implementation for User Story 2

- [x] T015 [P] [US2] Create ArticleContent component to render processed markdown HTML with proper styling in `src/components/blogs/article-content.tsx`
- [x] T016 [P] [US2] Create TableOfContents component with headings array prop and scroll highlighting using Intersection Observer in `src/components/blogs/table-of-contents.tsx`
- [x] T017 [US2] Update markdown processing utility to extract headings and generate anchor IDs in `src/utils/blogs/markdown.ts`
- [x] T018 [US2] Create article page route with generateStaticParams for static generation in `app/blogs/[slug]/page.tsx`
- [x] T019 [US2] Implement article page component with article metadata display (title, author, date, reading time) in `app/blogs/[slug]/page.tsx`
- [x] T020 [US2] Add ArticleContent and TableOfContents components to article page with two-column layout matching design reference in `app/blogs/[slug]/page.tsx`
- [x] T021 [US2] Implement 404 error handling for non-existent article slugs in `app/blogs/[slug]/page.tsx`
- [x] T022 [US2] Add Open Graph and Twitter Card metadata generation for article pages in `app/blogs/[slug]/page.tsx`
- [x] T023 [US2] Ensure table of contents gracefully handles articles with no headings in `src/components/blogs/table-of-contents.tsx`
- [x] T024 [US2] Add responsive design for table of contents on mobile devices in `src/components/blogs/table-of-contents.tsx`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently. Visitors can browse articles and read full articles with proper markdown rendering and table of contents.

---

## Phase 5: User Story 3 - Share Blog Articles (Priority: P2)

**Goal**: Visitors can share blog articles via copy link, Twitter/X, and LinkedIn with proper social media previews.

**Independent Test**: Click each share option on an article page and verify that the correct share URL is generated with proper metadata, and that social media platforms display appropriate previews when shared.

### Implementation for User Story 3

- [x] T025 [P] [US3] Create ShareButtons component with copy link, Twitter/X, and LinkedIn share functionality in `src/components/blogs/share-buttons.tsx`
- [x] T026 [US3] Implement copy to clipboard functionality with visual feedback in `src/components/blogs/share-buttons.tsx`
- [x] T027 [US3] Implement Twitter/X share URL generation with article title and URL in `src/components/blogs/share-buttons.tsx`
- [x] T028 [US3] Implement LinkedIn share URL generation with article URL in `src/components/blogs/share-buttons.tsx`
- [x] T029 [US3] Add ShareButtons component to article page header section in `app/blogs/[slug]/page.tsx`
- [x] T030 [P] [US3] Create NewsletterSignup component with placeholder integration point in `src/components/blogs/newsletter-signup.tsx`
- [x] T031 [US3] Add NewsletterSignup component to article page sidebar matching design reference (green button) in `app/blogs/[slug]/page.tsx`
- [x] T032 [US3] Ensure share buttons have proper ARIA labels and keyboard navigation support in `src/components/blogs/share-buttons.tsx`

**Checkpoint**: All user stories should now be independently functional. Visitors can browse articles, read articles with TOC, and share articles via multiple channels.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T033 [P] Add accessibility improvements: ARIA labels, keyboard navigation, semantic HTML across all blog components
- [x] T034 [P] Optimize images using Next.js Image component with WebP format in BlogCard and ArticleContent components
- [x] T035 Add code syntax highlighting styling to match portfolio design system
- [x] T036 Ensure all blog pages meet WCAG 2.1 Level AA accessibility standards
- [x] T037 Add proper error boundaries and error handling for markdown processing failures
- [x] T038 Verify performance: blog listing page loads in <2s, article pages load in <2s
- [x] T039 Test responsive design on mobile (320px+), tablet, and desktop viewports
- [x] T040 Run quickstart.md validation: verify creating new articles works as documented

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Depends on US1 for navigation links but can be tested independently
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Depends on US2 for article page but can be tested independently

### Within Each User Story

- Utilities before components
- Components before pages
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T002, T003)
- All Foundational tasks can run sequentially (they depend on each other)
- Once Foundational phase completes, User Stories 1 and 2 can start in parallel (if team capacity allows)
- Within US2: T015 and T016 can run in parallel (different components)
- Within US3: T025 and T030 can run in parallel (different components)
- Polish phase tasks marked [P] can run in parallel (T033, T034)

---

## Parallel Example: User Story 2

```bash
# Launch component creation tasks in parallel:
Task: "Create ArticleContent component in src/components/blogs/article-content.tsx"
Task: "Create TableOfContents component in src/components/blogs/table-of-contents.tsx"

# These can be worked on simultaneously as they are different files with no dependencies
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add Polish phase → Final validation → Deploy

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (blog listing)
   - Developer B: User Story 2 (article reading) - can start after T014
   - Developer C: User Story 3 (sharing) - can start after T024
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- All components must follow constitution: TypeScript interfaces, Tailwind styling, accessibility features
- Static generation happens at build time - test with `npm run build` and `npm run start`

