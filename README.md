# TCMS.ai Website

Corporate-grade Next.js marketing site with a built-in CMS for content updates. Built for Malaysian transport operators, fleet owners, and logistics companies.

## Marketing Website

The public-facing landing page lives in the `web/` directory. It includes 11 conversion-focused sections (hero, pain points, GPS visibility, customer portal preview, fuel savings, compliance, ecosystem, ROI calculator, social proof, pricing, and final CTA).

**Full developer handoff documentation:**

➡️ **[docs/MARKETING_WEBSITE.md](docs/MARKETING_WEBSITE.md)**

That document covers architecture, CMS fields, design system, components, SEO, performance, deployment, troubleshooting, and the product roadmap. A new developer can take over the project without verbal handoff.

## Stack

- **Next.js 16** (App Router, Server Components)
- **TypeScript** with Zod content validation
- **Tailwind CSS v4** with design tokens (`#003B8F` brand blue)
- **File-based CMS** with admin panel at `/admin`

## Getting Started

```bash
cd web
npm install
cp .env.example .env.local   # set CMS_ADMIN_PASSWORD
npm run dev
```

| URL | Purpose |
|-----|---------|
| http://localhost:3000 | Public marketing site |
| http://localhost:3000/admin | CMS admin panel |

Default admin password (change immediately): `tcms-admin-change-me`

## CMS Admin

The admin panel supports editing:

- SEO metadata
- Navigation & CTAs
- Hero section
- Pain points
- Pricing plans
- Final CTA
- Footer

All other sections (visibility, customer experience, fuel chart, compliance, ecosystem, ROI labels, social proof) are editable via `web/content/homepage.json`. See the [CMS Guide](docs/MARKETING_WEBSITE.md#4-cms-guide) for every field.

Content is stored in `web/content/homepage.json` and validated against schemas in `web/src/lib/content/schema.ts`. Saves trigger automatic homepage revalidation.

## Project Structure

```
newtcmswebsite/
├── docs/
│   └── MARKETING_WEBSITE.md    # Comprehensive developer handoff
├── reference/
│   └── code.html               # Original static HTML mockup
└── web/                        # Next.js application
    ├── content/                # CMS content (JSON)
    ├── public/                 # Static assets
    └── src/
        ├── app/                # Routes & API
        ├── components/
        │   ├── admin/          # CMS admin UI
        │   ├── layout/         # Header, Footer
        │   ├── sections/       # Page sections
        │   └── ui/             # Shared UI primitives
        └── lib/
            ├── auth/           # CMS authentication
            └── content/        # Schema, repository, defaults
```

## Scripts

Run from `web/`:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Build Verification

```bash
cd web
npm install
npm run lint    # expect exit 0
npm run build   # expect "Compiled successfully"
```

See [Build Verification](docs/MARKETING_WEBSITE.md#13-build-verification) for the full smoke test checklist.

## Reference

Original static HTML preserved at [reference/code.html](reference/code.html).
