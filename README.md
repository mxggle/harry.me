# Dev Harry Blog

> **Note:** This project is primarily my personal blog. If anyone wishes to use it, feel free to delete all entries and edit the settings freely.

---

## Table of contents

1. [Project structure](#-project-structure)
2. [Installation & local development](#-installation--local-development)
3. [Commands](#-commands)
4. [Creating content](#-creating-content)
   - [Posts](#posts-srcdatablog)
   - [Image galleries](#galleries-srcdatagalleries)
5. [GalleryEmbed component](#%EF%B8%8F-galleryembed-component)
6. [Configuration](#%EF%B8%8F-configuration)
7. [License](#-license)

---

## 🚀 Project structure

```
/
├── public/
│   ├── audio/             # Audio files (intro, etc.)
│   └── pagefind/          # Search index (generated at build)
├── src/
│   ├── assets/            # Local fonts, SVG icons and logo
│   ├── components/        # Reusable Astro components
│   ├── data/
│   │   ├── blog/          # Posts .md / .mdx
│   │   └── galleries/     # Galleries (one folder per album)
│   ├── layouts/           # Root layout, PostDetails, etc.
│   ├── pages/             # Astro routes
│   ├── styles/            # global.css, typography.css
│   └── utils/             # Filters, OG with Satori, Shiki transformers
└── astro.config.ts
```

---

## 👨🏻‍💻 Installation & local development

**Requirements:** Node.js 20+ and pnpm.

```bash
# 1. Install dependencies
pnpm install

# 2. Development server
pnpm run dev
# → http://localhost:4321
```

The Pagefind search index is **only available in the production build**. To test it locally:

```bash
pnpm run build && pnpm run preview
```

### Docker

```bash
docker build -t Dev Harry-blog .
docker run -p 4321:80 Dev Harry-blog
```

---

## 🧞 Commands

| Command            | Action                                                   |
| :----------------- | :------------------------------------------------------- |
| `pnpm install`     | Install dependencies                                     |
| `pnpm run dev`     | Local dev server at `localhost:4321`                     |
| `pnpm run build`   | Production build (`astro check` + build + Pagefind)      |
| `pnpm run preview` | Preview the production build                             |
| `pnpm run format`  | Format with Prettier                                     |
| `pnpm run lint`    | Lint with ESLint                                         |

> `pnpm run build` internally runs `pagefind --site dist && cp -r dist/pagefind public/`. The search index ends up in `public/pagefind/` ready for preview.

---

## 📝 Creating content

### Posts (`src/data/blog/`)

Create a `.md` or `.mdx` file with the following frontmatter:

```yaml
---
title: "Post title"
pubDatetime: 2026-01-15T10:00:00Z   # required — ISO 8601 with timezone
description: "Short description for SEO and cards"
tags: ["astro", "dev"]
featured: false       # highlight on the home page
draft: false          # hidden in production
timezone: "America/Guatemala"  # overrides SITE.timezone
hideEditPost: false
---
```

**MDX**: JSX components can be used directly. `<GalleryEmbed>` is available without importing it (see next section).

**Table of Contents**: add `## Table of contents` to the post body to auto-generate the TOC with `remark-toc` + `remark-collapse`.

**Annotated code blocks** (via Shiki transformers):

```
// [!code highlight]      → highlight the line
// [!code ++]             → added line (diff)
// [!code --]             → removed line (diff)
// fileName: file.ts      → display the filename above the block
```

---

### Galleries (`src/data/galleries/`)

Create a **folder** with the desired slug. Place an `index.md` and image files inside:

```
src/data/galleries/
└── my-trip-to-tokyo/
    ├── index.md
    ├── 01-shibuya.jpg
    ├── 02-asakusa.jpg
    └── 03-fuji.png
```

The folder name becomes the URL: `/galleries/my-trip-to-tokyo`.

Images are displayed **sorted alphabetically**. Use numeric prefixes (`01-`, `02-`, …) to control the order.

#### Gallery frontmatter

```yaml
---
title: "My Trip to Tokyo"           # required
description: "Travel photos..."     # required
pubDatetime: 2026-01-20T00:00:00Z   # required
draft: false
coverImage: ./01-shibuya.jpg        # optional — explicit cover image
tags:
  - japan
  - travel
---
```

> Galleries have no body text; all visual content comes from the images in the folder.

#### Cover image

- **With `coverImage`**: Astro resolves and optimizes the relative path. If that image is already in the folder it won't be shown twice on the detail page.
- **Without `coverImage`**: the first image (alphabetically) is used as the cover in listing cards.

#### Automatic alt text

The alt text is derived from the filename:

```
01-sunset-kyoto.jpg     →  "Sunset Kyoto"
002_fuji_mountain.png   →  "Fuji Mountain"
IMG_4532.JPG            →  gallery title (fallback)
```

---

## 🖼️ GalleryEmbed component

Embed a gallery inside any `.mdx` post — **no import needed**:

```mdx
{/* First 6 photos, 3 columns (default) */}
<GalleryEmbed slug="my-trip-to-tokyo" />

{/* Only 4 photos in 2 columns, no footer link */}
<GalleryEmbed slug="my-trip-to-tokyo" limit={4} cols={2} showLink={false} />

{/* All photos */}
<GalleryEmbed slug="my-trip-to-tokyo" limit={0} />
```

| Prop       | Type          | Default | Description                                               |
| :--------- | :------------ | :------ | :-------------------------------------------------------- |
| `slug`     | `string`      | —       | **Required.** Folder name in `src/data/galleries/`        |
| `limit`    | `number`      | `6`     | Max images to show. `0` = all                             |
| `showLink` | `boolean`     | `true`  | Show link to the full gallery at the bottom               |
| `cols`     | `2 \| 3 \| 4` | `3`     | Number of grid columns                                    |

Each `<GalleryEmbed>` creates its own lightbox `<dialog id="ge-lb-{slug}">`, allowing **multiple embeds in the same post** without conflicts. Invalid slugs render a warning block instead of breaking the build.

---

## ⚙️ Configuration

All site configuration lives in `src/config.ts` (the `SITE` constant):

```ts
export const SITE = {
  website: "https://Dev Harry.vercel.app/",
  author: "Andrés",
  desc: "A space where curiosity turns into code",
  title: "Dev Harry",
  timezone: "America/Guatemala",  // default timezone for posts
  showArchives: true,
  showGalleries: true,   // false → hides /galleries and the nav link
  showBackButton: true,
  dynamicOgImage: true,
  introAudio: {
    enabled: true,               // show/hide the hero audio player
    src: "/audio/intro-web.mp3", // path relative to /public
    label: "INTRO.MP3",
    duration: 60,                // seconds
  },
};
```

Social links and "Share" links are defined in `src/constants.ts`.

> For details on visual effects, typography and the design system see [CUSTOMIZATIONS.md](CUSTOMIZATIONS.md).

---

## 📜 License

Based on [AstroPaper](https://github.com/satnaing/astro-paper) by [Sat Naing](https://satnaing.dev), licensed under MIT.
Customizations © 0xdres.
