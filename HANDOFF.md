# Blog Setup Handoff

## What's done

The blog is scaffolded and builds cleanly using the Devharry theme (https://github.com/0xdres/astro-devharry), MIT licensed. It includes:

- Full blog with post cards, glow effects, shimmer animations
- ⌘K search (Pagefind, fully wired)
- Dark/light mode
- Tags, Archives, Galleries pages
- Dynamic OG image generation (Satori)
- MDX support
- RSS feed + sitemap
- Vercel deployment config

**Run with:** `pnpm dev` | **Build:** `pnpm build`

---

## What still needs doing

### 1. Update `src/config.ts`

Replace all values with yours:

```ts
website: "https://harrysui.me/",
author: "Harry",
profile: "https://github.com/YOUR_GITHUB",
desc: "A blog about language learning, Coding, AI, and thoughts.",
title: "Harry's Blog",
lang: "en",
timezone: "Asia/Hong_Kong",        // or your actual timezone
introAudio: { enabled: false },    // disable — you don't have an audio file
editPost: { enabled: false },      // disable or point to your own repo URL
```

### 2. Update `src/constants.ts`

Set your social links (GitHub, Twitter, etc.). Remove any you don't use.

### 3. Replace Spanish UI strings

These files have hardcoded Spanish text that needs translating to English:

- `src/pages/index.astro` — hero description, section labels ("Recientes", "Destacados", "Explorar todos los posts", "Escrito por")
- `src/pages/search.astro` — "Buscar", "Encuentra cualquier artículo..."
- `src/components/Header.astro` — any nav labels
- `src/components/Footer.astro` — footer text
- `src/pages/about/index.astro` — about page content

Ask Claude: *"Translate all hardcoded Spanish strings to English in this project"*

### 4. Delete sample content

Remove everything in `src/data/blog/` (the original author's posts).
Keep the folder structure — just delete the post subfolders.

### 5. Add your posts

Posts go in `src/data/blog/your-post-slug/index.md` (or `.mdx`).

**Required frontmatter** (note: `pubDatetime` not `pubDate`, and `description` is required):

```yaml
---
title: "Post Title"
pubDatetime: 2026-03-22T00:00:00Z
description: "One sentence description."
tags: ["japanese", "language"]
draft: false
featured: false   # set true to pin to homepage
---
```

Images go in the same folder as the post: `src/data/blog/your-post-slug/cover.jpg`
Reference in frontmatter: `ogImage: "./cover.jpg"`

### 6. Replace the OG image

`public/devharry-og.webp` → replace with your own og image (used as the default social share image).
Update the filename in `src/config.ts` → `ogImage`.

### 7. WordPress migration

When ready to migrate posts from WordPress:
1. WordPress Dashboard → Tools → Export → All content → download XML
2. Run: `npx wordpress-export-to-markdown`
3. Move output into `src/data/blog/`
4. Rename `pubDate` → `pubDatetime` in frontmatter (bulk find/replace)
5. Add `description` field to each post (required — build will fail without it)
6. Move images into each post's folder, update references from WordPress URLs to `./image.jpg`

### 8. Deploy to Vercel

1. Push repo to GitHub
2. Import project at vercel.com (auto-detects Astro)
3. Set build command: `pnpm build` (Vercel should detect this automatically)
4. Add custom domain `harrysui.me` in Vercel project settings

---

## Project structure reference

```
src/
├── config.ts          ← site-wide settings (start here)
├── constants.ts       ← social links
├── data/
│   └── blog/          ← your Markdown posts go here (Obsidian sync target)
│       └── post-slug/
│           ├── index.md
│           └── cover.jpg
├── pages/
│   ├── index.astro    ← homepage (has Spanish strings)
│   ├── posts/         ← blog archive + individual posts
│   ├── tags/          ← tag pages
│   ├── archives/      ← posts by year
│   ├── galleries/     ← photo galleries (can disable in config.ts)
│   ├── search.astro   ← search page (has Spanish strings)
│   └── about/         ← about page
└── components/        ← UI components

public/
├── audio/             ← intro audio (can disable in config.ts)
└── devharry-og.webp  ← replace with your OG image
```

## Obsidian workflow

Point your Obsidian vault folder at `src/data/blog/`.

Rules for posts:
- Standard Markdown only — no wikilinks (`[[]]`), no callouts (`> [!NOTE]`)
- `description` is required (build fails without it)
- Use `draft: true` while writing, remove when publishing
- Images: `![alt](./image.jpg)` with relative paths, file in same folder as post
