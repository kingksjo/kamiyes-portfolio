### Design 
* Check the @.design in the project

### Tech Stack & Core Libraries

* **Framework:** Next.js (App Router) for routing and performance.
* **Styling:** Tailwind CSS, utilized purely for layout and typography, with a strictly overridden color palette.
* **Animations:** Framer Motion for all micro-interactions, spring physics, and scroll-linked choreographies.
* **Smooth Scroll:** `lenis` implemented globally at the layout level.

### Styling & Tailwind Rules

* **Color Overrides:** The `tailwind.config.ts` must enforce the luxury palette: `#FDFBF7` (base background), `#2C2724` (primary text), and `#9A4D3E` (terracotta footer accent).
* **Typography Integration:** Use `next/font/google` to optimize Cormorant Garamond (or Playfair Display) for large serif headers and Inter for clean, sans-serif body copy.
* **Spatial Rhythm:** Enforce massive negative space using large vertical padding utilities (e.g., `py-32` or `py-48`) between sections. Avoid tight, grid-based clustering.

### Interaction & Motion Specifications

* **Strictly Spring Physics:** Standard CSS linear or ease-in transitions are prohibited for hover states. All interactions must utilize Framer Motion springs (e.g., `type: "spring", stiffness: 100, damping: 20`).
* **Lookbook Parallax:** Apply `useScroll` and `useTransform` hooks to image wrappers in the Archive section, ensuring the imagery moves at a slightly delayed pace compared to the scroll speed to create depth.

### Component Architecture

* **Data Separation:** Centralize the portfolio projects into a single `lib/data.ts` file to keep React components clean and modular.
* **The Concierge Footer:** Isolate the footer into a standalone component that renders as a massive, edge-to-edge block of the terracotta accent color, utilizing inverted white typography.

* **Client/Server Boundary**: Heavily enforce the "use client" directive at the top of any file utilizing Framer Motion hooks, Lenis smooth scrolling, or custom interactive states. Keep layout files and static typography as default Server Components for performance.