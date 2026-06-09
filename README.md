# TCMS.ai Website

Corporate-grade Next.js marketing site with a built-in CMS for content updates. Built for Malaysian transport operators, fleet owners, and logistics companies.

## Marketing Website

The public-facing site lives in the `web/` directory. It includes:

- **Homepage** — 11 conversion-focused sections (hero, pain points, GPS visibility, customer portal, fuel savings, compliance, ecosystem, ROI calculator, social proof, pricing, final CTA)
- **Solution pages** — dedicated landing pages for key product modules

**Full developer handoff documentation:**

➡️ **[docs/MARKETING_WEBSITE.md](docs/MARKETING_WEBSITE.md)**

## Routes

| URL | Purpose |
|-----|---------|
| http://localhost:3000 | Homepage |
| http://localhost:3000/operations | Operations & execution module |
| http://localhost:3000/fleet | Fleet management module |
| http://localhost:3000/compliance | Compliance & governance module |
| http://localhost:3000/crm | Customer relationship management module |
| http://localhost:3000/security | Security & access control module |
| http://localhost:3000/solutions/accounting-payments | Accounting & payments (Command Center preview) |
| http://localhost:3000/solutions/fleet-maintenance | Fleet maintenance & inspections (Command Center preview) |
| http://localhost:3000/solutions/payroll-compliance | Payroll & Malaysian compliance (Command Center preview) |
| http://localhost:3000/admin | CMS admin panel |

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

Default admin password (change immediately): `tcms-admin-change-me`

## CMS Admin

The admin panel supports editing homepage content:

- SEO metadata, navigation, hero, pain points, pricing, final CTA, footer

Solution pages use a **Command Center** product-preview layout (`CommandCenterShell`) — marketing dashboard mockups, not authenticated app screens. Content is in `web/src/lib/content/solutions.ts`. See [Solution Pages](docs/MARKETING_WEBSITE.md#14-solution-pages).

## Project Structure

```
newtcmswebsite/
├── docs/MARKETING_WEBSITE.md
├── reference/code.html
├── account_payments.html      # Source mockup (reference)
├── fleet_maintenance.html     # Source mockup (reference)
├── payroll.html               # Source mockup (reference)
└── web/
    ├── content/homepage.json
    └── src/
        ├── app/
        │   ├── page.tsx
        │   └── solutions/     # Solution page routes
        ├── components/
        │   ├── sections/      # Homepage sections
        │   └── solutions/     # Command Center preview components
        └── lib/content/
            ├── schema.ts      # Homepage CMS schema
            └── solutions.ts   # Solution page content
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
