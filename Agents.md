# Agents

## Project Snapshot
- **Stack**: Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, React Router.
- **Purpose**: Marketing site for Green World Campaign Kenya with rich content pages (impact metrics, initiatives, community stories, contact form).
- **Data shape**: All content is currently static and encoded in React components; there is no runtime API integration yet.

## Core Agents
- **UI Agent**
  - Owns React component work (`src/pages`, `src/components`).
  - Maintains Tailwind utility usage, shadcn/ui patterns, accessibility concerns.
  - Coordinates with Design tokens defined in `src/index.css` and `tailwind.config.ts`.
- **Content Agent**
  - Curates copy, imagery, and structured data inside page-level arrays/objects.
  - Keeps messaging consistent with GWC-K branding; ensures stats and narratives stay in sync across pages.
  - Updates assets under `src/assets` and verifies they remain optimized.
- **Experience Agent**
  - Oversees cross-page flows (navigation, routing, hero CTAs).
  - Validates responsive behaviour (`useIsMobile`, Tailwind breakpoints) and animation polish.
  - Plans future integrations (analytics, forms backend, multilingual support) and tracks open UX debts.
- **Systems Agent** (future-facing)
  - Prepares infrastructure for async data (hooks built on `@tanstack/react-query`), state handling, and external API wiring.
  - Defines testing strategy once dynamic features ship (unit tests with Vitest, e2e with Playwright or Cypress).

## Shared Operating Guidelines
- Favor composable, declarative React components; keep business data separated from presentation where possible.
- Reuse design tokens from `src/index.css`; add new tokens before sprinkling raw colors.
- When introducing API calls, surface loading/error states through the existing toast + sonner primitives.
- Document non-trivial flows with inline comments sparingly (complex animations, data wrangling).
- Keep navigation and footer links updated together; both mirror key site sections.

## Key Resources
- Routing: `src/App.tsx` (React Router routes).
- Layout primitives: `src/components/Hero.tsx`, `Navigation.tsx`, `Footer.tsx`.
- Utility helpers: `src/lib/utils.ts` (`cn` merge helper), `src/hooks` (toast + mobile detection).
- Styling: `tailwind.config.ts`, `src/index.css`.

## Typical Workflows
1. **Add new page**
   - Create component under `src/pages`.
   - Register route in `src/App.tsx` and nav/footer if public.
   - Ensure assets live in `src/assets` and are referenced with the `@` alias.
2. **Update metrics/content**
   - Adjust structured arrays (e.g., `initiatives`, `communities`) in-page.
   - Cross-check copy against other sections to maintain tone.
   - Run `npm run dev` for a live preview.
3. **Introduce interactivity**
   - Prefer controlled components + TanStack Query for async data.
   - Surface feedback via `useToast` or `toast` from `src/components/ui/sonner.tsx`.

## Quality & Testing
- Local commands: `npm run dev`, `npm run build`, `npm run lint`.
- Target responsive breakpoints: mobile `<768px`, tablet `768-1024px`, desktop `>1024px`.
- Record user-facing issues or roadmap items in a shared tracker before handoff between agents.

