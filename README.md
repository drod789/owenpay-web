# OwenPay Marketing Site

The marketing website for OwenPay at `owenpay.io`.

## Stack

- Next.js 14 (App Router) with static export
- TypeScript
- Tailwind CSS with custom plum/sage palette
- Lucide React icons
- Static HTML output, deployable to Cloudflare Pages

## Quick start (local)

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

This produces a static site in `out/` ready for Cloudflare Pages.

## Deploy to Cloudflare Pages

### Option A: Connect via GitHub (recommended)

1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git
3. Select the `owenpay-web` repo
4. Build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: `20` (set environment variable `NODE_VERSION=20`)
5. Click Save and Deploy

### Option B: Direct upload via Wrangler

```bash
npm install -g wrangler
npm run build
wrangler pages deploy out --project-name=owenpay-web
```

## Custom domain

After deployment in Cloudflare Pages:

1. Pages project → Custom domains → Set up a custom domain
2. Enter `owenpay.io`
3. Cloudflare will configure DNS automatically if the domain is managed in your Cloudflare account
4. Also add `www.owenpay.io` and redirect to apex

## File structure

```
owenpay-web/
├── app/
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Main page composing all sections
│   ├── globals.css       # Tailwind + custom CSS + prose styles
│   └── blog/
│       ├── page.tsx      # Blog index (lists all posts)
│       └── [slug]/
│           └── page.tsx  # Individual post template
├── components/
│   ├── Nav.tsx           # Top navigation (sticky)
│   ├── Hero.tsx          # Hero with main pitch
│   ├── Problem.tsx       # The problem (dark plum section)
│   ├── HowItWorks.tsx    # 4-step explanation
│   ├── Demo.tsx          # Interactive payment + tax form simulation
│   ├── WhoItsFor.tsx     # Vertical use cases grid
│   ├── WhyOwen.tsx       # Value props
│   ├── TrustSignals.tsx  # Partners and security
│   ├── RequestAccess.tsx # Form section
│   └── Footer.tsx        # Footer
├── content/
│   └── blog/             # Blog posts as .md files (write here!)
│       ├── why-we-built-owenpay.md
│       ├── hidden-cost-international-wires.md
│       └── how-stablecoin-payouts-work.md
├── lib/
│   └── blog.ts           # Blog post loading and parsing
├── public/               # Static assets
├── tailwind.config.ts    # Custom theme (plum, sage, cream)
├── next.config.js        # Static export configuration
└── package.json
```

## Writing a new blog post

1. Create a new file in `content/blog/`, e.g. `my-new-post.md`
2. Add frontmatter at the top:

```markdown
---
title: "Your post title"
description: "One-sentence description that appears in cards and SEO"
date: "2026-05-15"
author: "Your Name"
authorRole: "Founder"
tag: "Founder Note"
readTime: "5 min read"
---

Your content starts here. Write in markdown.

## Section heading

Regular paragraph text. **Bold for emphasis.** *Italics for nuance.*

> A blockquote for pulled quotes.

[Links work normally](https://example.com).
```

3. Save, commit, push to GitHub. Cloudflare auto-deploys.

The post appears at `/blog/my-new-post` automatically.

Tags can be anything: "Founder Note", "Deep Dive", "Explainer", "Product Update", "Industry News", etc.

## Customization notes

### Colors

Custom palette in `tailwind.config.ts`:
- **Plum** (primary): `plum-900` (#2A1434) for main brand, `plum-800` (#3D1E4A) for buttons
- **Sage** (accent): `sage-500` (#5E7E55) for CTAs and highlights
- **Cream** (background): `cream-100` (#F8F5F0) for page background

### Typography

- Headlines: Instrument Serif (loaded from Google Fonts)
- Body: Inter (loaded from Google Fonts)

### Form submission

The form in `RequestAccess.tsx` currently simulates submission. To make it real:

**Option 1: Cloudflare Workers + KV**
Create a Worker endpoint that writes to Workers KV or sends to your email.

**Option 2: Webhook to your CRM**
Replace the `fetch` placeholder with your webhook URL (HubSpot, Notion, Airtable, etc.).

**Option 3: Supabase**
Add a Supabase client and write to a `requests` table.

The cleanest option for now is a Cloudflare Worker that posts to your email or a Google Sheet. I can write that next when you're ready.

## Performance

This site is fully static. Expect:
- < 1s First Contentful Paint
- < 2s Largest Contentful Paint
- 95+ Lighthouse scores across the board

## SEO

Metadata configured in `app/layout.tsx`. Update Open Graph image and add a `sitemap.xml` and `robots.txt` in `public/` before launch.
