## Goal
Turn the current SecureTech site from a good-looking single-page shell into a production-quality multi-page site with real depth, working forms, proper SEO, and polish — suitable as a portfolio/internship deliverable.

## Scope (what I'll build)

### 1. New pages + deeper content
- **`/products`** — full product catalog page (all 8 TPS devices as detailed cards with specs, use cases, "Request datasheet" CTA).
- **`/products/$slug`** — dynamic product detail pages (hero image, spec table, applications, related products).
- **`/solutions`** — Industries page (Telecom, Banking, Elections, Government, NGO/Cash Disbursement) — each a proper section with real case-study references.
- **`/about`** — company story, timeline, leadership, presence map (5 countries), certifications.
- **`/contact`** — dedicated contact page with form + offices (Islamabad HQ, regional presence) + inquiry categories.
- **`/blog/$slug`** — real blog post routes (MDX-style content in TS) for the 6 existing posts, each with its own SEO.

### 2. Backend wiring (Lovable Cloud)
Enable Lovable Cloud and add three tables + server functions:
- `contact_inquiries` — general contact form submissions.
- `job_applications` — Careers form (name, email, phone, role, cover letter, CV file via Cloud Storage).
- `newsletter_subscribers` — footer signup with email validation.
- All with RLS, Zod validation, and success/error toasts.

### 3. SEO & discoverability
- Generate a branded **`og:image`** cover (1200×630) and wire it per leaf route.
- Add **JSON-LD**: `Organization` in `__root`, `Article` on blog posts, `Product` on product pages, `BreadcrumbList` on deep routes.
- Add **`/sitemap.xml`** via server route (enumerates all static + dynamic routes).
- Add **`/robots.txt`** with sitemap directive.
- Per-route canonical + `og:url` (self-referencing).
- Fix each route's `head()` with unique title/description already done for existing 3 — extend to new routes.

### 4. UX polish
- **404 page** with illustration + helpful links.
- **Breadcrumbs** component on Products / Solutions / Blog detail routes.
- **Image performance**: `loading="lazy"`, explicit width/height on all `<img>`, preload the hero.
- **LiveChat**: replace placeholder with either a functional "Message us" widget that writes to `contact_inquiries`, or remove it (I'll go with the functional route).
- **Newsletter footer form**: wire to backend + validation + toast.
- **Loading & error boundaries** on all new routes with data.

### 5. Home refresh (light touch, no full redesign)
- Wire hero image with proper priority loading.
- Real client logos as SVG/text lockups instead of plain text list.
- CTAs point to the new `/products`, `/solutions`, `/contact` routes instead of anchor scrolls.

### Out of scope (won't do unless you ask)
- Full visual redesign of the hero (would need the 3-direction picker flow).
- Dark mode toggle (tokens are ready; toggle can be added later).
- Multi-language / i18n.
- Analytics integration.
- Real CV file parsing / applicant tracking beyond storage.

## Technical notes
- Router: TanStack Start file-based routing under `src/routes/`. Blog & product detail routes use `$slug` dynamic segments with a static data map in `src/data/{posts,products}.ts` (no CMS).
- Forms: `react-hook-form` + `zod`, submitting via `createServerFn` under `src/lib/*.functions.ts`. CV upload goes to Supabase Storage bucket `cv-uploads`, with signed URL returned server-side.
- Grants + RLS: every new table gets explicit `GRANT` + policies (`INSERT` for `anon` on inquiries/applications/newsletter; no `SELECT` for public).
- `og:image` generated once via image tool, uploaded via `lovable-assets`, referenced at absolute URL on leaf routes only.
- `sitemap.xml` implemented as `src/routes/sitemap[.]xml.ts` server route; enumerates static routes + iterates the product/blog data files.

## Delivery order
1. Enable Lovable Cloud + create tables/storage.
2. Build data files (products, posts) + shared components (Breadcrumbs, ProductCard, PostCard).
3. Create all new routes with head() + content.
4. Wire the three forms end-to-end.
5. Generate og:image + add JSON-LD + sitemap + robots.
6. Polish pass (lazy loading, 404, CTAs, LiveChat wiring).
7. Build check + Playwright smoke test on each route.

Approve and I'll build straight through.
