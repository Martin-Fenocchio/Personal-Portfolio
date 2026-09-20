# Martín Fenocchio Portfolio — Design System

This document defines the visual system for the personal portfolio redesign. It is the source of truth for future contributors and AI agents. Preserve its intent when changing or adding sections.

## 1. Design intent

This is a **personal portfolio**, not an agency landing page. It should feel authored by a curious developer and technical lead: editorial, playful, precise, and confident without sounding corporate.

The design combines:

- bold condensed sans-serif headlines;
- expressive italic serif moments;
- compact mono labels and metadata;
- a paper-like canvas with strong blocks of colour;
- simple geometric motion and visible grid lines.

Use visual contrast to create a journey through the page. Do not introduce decoration only for decoration's sake.

## 2. Core palette

Use the existing CSS custom properties in `src/assets/styles/portfolio-redesign.scss`.

| Token | Value | Intended use |
| --- | --- | --- |
| `--paper` | `#f1eee8` | Default warm canvas, cards, compact banner, light text on dark sections |
| `--ink` | `#11110f` | Main text, dark sections, footer, Litebox gallery context |
| `--acid` | `#d4ff3f` | Bright yellow-lime. Hero orb, Experience section, small high-energy accents |
| `--orange` | `#ff5d39` | Coral red. Writing section, hero orb, navigation offset shadow |
| Blue | `#1c56dd` | Open-source libraries section |

### Palette rules

- The primary sequence is **paper → ink → acid → ink → coral → paper → blue → ink**.
- `--acid` is a yellow-lime, not an amber/orange. Use it for the Experience section.
- The coral/red colour belongs to Writing and small accent moments. Do not replace it with a new orange.
- Do not add new prominent background colours without a deliberate page-level reason.
- Litebox work uses a deep charcoal backdrop (`#181816`) and an even darker showcase frame (`#0f0f0e`) so website previews stay central.

## 3. Typography

### Roles

- **Display / interface:** `DM Sans` — headlines, paragraphs, navigation, cards.
- **Editorial emphasis:** `Playfair Display` — only italic/emphasised words inside display headings.
- **Metadata:** `DM Mono` — eyebrow labels, dates, counts, section numbers, small utility text.

### Rules

- Headlines are heavy, tight, and compact: negative tracking and short line-height are intentional.
- Use serif italics sparingly for one or two meaningful words, such as `worked.`, `Litebox.`, `written.`, and `libraries.`
- Never make every word italic or every heading decorative.
- Keep body copy simple, direct, and first-person where appropriate.
- Headline copy must read as Martín speaking about his work, not as an agency selling services.

## 4. Layout system

- Desktop horizontal padding: `5.5vw`.
- Mobile horizontal padding: `20px`.
- Hero heading max width: `650px`; it must not consume the whole hero width.
- Standard large section spacing: approximately `120px` vertically on desktop and `75px` on mobile.
- The hero has a subtle four-part grid. Reuse fine lines and structural geometry, rather than adding heavy borders everywhere.
- Most content is deliberately left aligned. Use a right-side supporting paragraph only to create counterweight.

## 5. Navigation

The desktop header is a floating, centered navigator:

- `MF.` wordmark at left. Keep this exact two-letter mark; do not redesign it.
- Centered rounded outlined navigation pill with a coral offset shadow.
- Real SVG social icons (GitHub, LinkedIn, X) at right.
- No full-width bottom rule under the browser-like header.
- Section number prefixes use mono type.

On upward scroll, reveal a compact fixed version containing navigation items only. Hide it on downward scroll and near the top.

## 6. Page architecture and colour rhythm

Maintain this homepage order unless product requirements change:

1. **Hero** — paper
2. **A little about me** — ink
3. **Places I've worked** — acid yellow-lime
4. **Built at Litebox** — dark gallery
5. **Things I've written** — coral red
6. **Sharing what I learn** — compact paper banner
7. **Open-source libraries** — blue
8. **Contact footer** — ink

The sections should feel like distinct chapters. Avoid adjacent sections with the same large background colour.

## 7. Component-specific guidance

### Hero

- Copy structure:
  - `Hi, I'm Martín.`
  - `I build things` (serif italic)
  - `for the web`
  - Rotating final line: `and lead teams.`, `and teach about AI.`, `and keep learning.`, `and love the craft.`
- The age/location label is calculated from the birth date in code. Do not hardcode the age.
- Keep two softly blurred CSS orbs: yellow-lime on the right, coral near the lower middle.
- Orbs should bloom in, then drift very slowly. Always respect `prefers-reduced-motion`.

### Experience

- Use the acid yellow-lime background, dark text, and a readable timeline structure.
- Every entry needs a period, role/company, and concise first-person-relevant description.

### Litebox work wall

- Treat this as a dark gallery, not a generic card grid.
- The horizontal track is intentionally infinite and pauses on hover.
- Current website frames are placeholders. Replace each with a real, permitted first-viewport capture when assets are available; preserve the browser-frame treatment and marquee interaction.

### Writing

- Coral background with warm paper article cards.
- Show exactly a small featured selection from `/blogs` plus a link to all articles.
- Keep article covers, date/read-time metadata, and high-contrast headlines.

### Sharing / teaching banner

- This is deliberately compact, horizontal, and located after Writing.
- It mentions AI teaching at Litebox and links to X. It is not a large feature section.
- Do not expand it back into a full-height three-column feature unless the content becomes substantially richer.

### Open-source libraries

- Blue background and a three-column desktop grid.
- Use real package links for published libraries.
- With five published libraries, retain the sixth `In progress / Always building…` card. It completes the grid and signals work in progress without inventing a package.

### Footer

- Ink background, paper text, large email link, restrained mono metadata, and social links.
- The page's bottom elastic-scroll canvas must match this dark footer colour.

## 8. Interaction and motion

- Motion should be slow, calm, and meaningful.
- The hero phrases rotate; orbs drift; the Litebox track scrolls continuously.
- Hover states can shift, tilt, or invert a card/button slightly. Avoid bouncy or attention-seeking animations.
- Support `prefers-reduced-motion` for every continuous animation.

## 9. Responsive rules

- On screens below `750px`, hide the main center navigation pill and retain the mark/social controls.
- The upward-scroll navigation can overflow horizontally rather than wrapping unpredictably.
- Convert multi-column content grids to one column.
- Preserve strong section colours and type hierarchy; do not simplify the design into a generic mobile layout.

## 10. Implementation guardrails

- Homepage component: `src/components/redesign/portfolio-home.tsx`.
- Homepage styles: `src/assets/styles/portfolio-redesign.scss`.
- Keep design-specific styling scoped to `.portfolio-home` or the redesign stylesheet.
- Use semantic sections with stable IDs for navigation: `experience`, `work`, `writing`, `teaching`, `libraries`, and `contact`.
- The root/body bounce canvas is set dynamically so the top elastic scroll uses paper and the bottom uses footer ink. Do not remove this behaviour when refactoring.
- Test both normal rendering and macOS browser elastic scrolling after changes to page-level backgrounds.

## 11. Content voice checklist

Before approving copy, confirm that it:

- uses Martín's voice and first-person perspective;
- makes clear that he builds, leads, teaches, writes, and learns;
- says what he actually did rather than vague claims;
- avoids agency language such as “we help brands” or “world-class solutions”;
- remains concise enough to let the design breathe.
