<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# kamiyes-portfolio

Single-page editorial portfolio (`/` only) for Oluwakamiye Sharaye: Next.js 16 App Router, React 19, TypeScript, Tailwind v4, `lucide-react`, `motion` (import from `motion/react`), `lenis` for smooth scrolling. npm only (`package-lock.json` committed). No tests, no CI.

## Commands

- `npm run dev` — dev server
- `npm run lint` — ESLint; keep it at 0 errors **and 0 warnings** (currently clean)
- `npm run build` — production build; also runs the TypeScript check (no separate typecheck script, no test suite — verify changes with build + visual check in the browser)

## Design constraints (hard rules, not preferences)

The aesthetic is "quiet luxury editorial" — see `intent.md` for the philosophy. It must actively subvert developer-portfolio tropes. Forbidden: dark mode, terminal/neon UI, bento grids, glowing gradients, blue/purple accents, drop shadows beyond subtle borders.

- Fixed palette, applied as literal hex arbitrary-value classes in components (not the `:root` vars in `globals.css`): `#FDFBF7` base, `#2C2724` text, `#F4F0EA` surface, `#D8CFC4` hairline borders, `#59534E` secondary text, `#9A4D3E` terracotta — terracotta is used sparingly (accents, italic emphasis) except the Footer, which is a solid terracotta block.
- Fonts via `next/font/google` in `app/layout.tsx`: Cormorant Garamond (serif, `font-serif`, headings/quotes) and Inter (sans, `font-sans`, body/labels). The `.font-serif`/`.font-sans` utilities are manually defined in `app/globals.css`.
- Editorial conventions: uppercase micro-labels with wide `tracking-[...]`, generous vertical padding between sections, grayscale/toned imagery via `next/image` filters.

## Doc vs. reality (read before following other docs)

- `spec.md` is the motion target and is now implemented (`motion` + `lenis` installed); `tailwind.config.ts` is still absent — Tailwind v4 stays CSS-first, do not create one.
- `.design/DESIGN.md` describes a different, unimplemented design direction (Playfair Display/Space Mono, 720px archival layout). It does not match the shipped site — don't restyle components to match it.
- `intent.md` accurately describes the intended design and is safe to follow.
- For animation work, read the project-local skills first: `.agents/skills/gsap-framer-scroll-animation/` (Motion v12+ recipes in `references/framer.md`) and `.agents/skills/premium-frontend-ui/` (restraint principles — skip its cursor/preloader/glass ideas, they violate the constraints below).

## Conventions & gotchas

- Tailwind v4 is configured CSS-first: theme variables and custom utilities live in `app/globals.css` (`@import "tailwindcss"`). Do not create a `tailwind.config.ts`.
- Lenis owns scrolling (`components/SmoothScroll.tsx`, `root` + `anchors: true`): never add `scroll-behavior: smooth` CSS or `data-scroll-behavior` attributes — they fight Lenis. In-page `#anchor` links are animated by Lenis automatically.
- Scrollable modal/panel containers need `data-lenis-prevent`, and scroll locks must use the Lenis instance (`useLenis()` → `stop()`/`start()`), never `body.style.overflow`.
- Motion primitives: shared spring in `lib/motion.ts` (`springSnappy`: stiffness 100, damping 20); `components/Reveal.tsx` for scroll reveals. `useScroll` always needs `target` + `offset`; MotionValues go in `style` of `motion.*` elements only; animate transform/opacity only. `MotionConfig reducedMotion="user"` is already global — don't add per-component reduced-motion plumbing.
- External images require an entry in `next.config.ts` → `images.remotePatterns` (`images.unsplash.com` and `picsum.photos` are already allowed).
- `app/layout.tsx` uses the Next 16 globally-available type helper `LayoutProps<"/">` — it is not imported; don't "fix" it to `React.ReactNode`.
- Code style differs by directory: `components/*.tsx` use single quotes, no semicolons, named function exports; `app/*.tsx` use double quotes + semicolons. Match the file you're editing (ESLint does not enforce either).
- All portfolio content (projects, disciplines, contact info) lives in `lib/data.ts`; components read from `PORTFOLIO_DATA` and must not hardcode content.

## Architecture

`app/page.tsx` is a single `'use client'` component that owns all modal state and composes everything: `Navbar`, `Hero`, `LookbookSection`, `EditorialDisciplines`, `Footer`, plus `ProjectDossierModal`, `ConciergeModal`, `IndexModal`. Modals lock body scroll (`overflow: hidden`) and close on Escape; keep that behavior when refactoring.
