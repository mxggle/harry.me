# Vercel Analytics Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate Vercel Analytics into the Astro project to track page views and visitor data.

**Architecture:** Install the `@vercel/analytics` package and add the `<Analytics />` component to the base layout (`src/layouts/Layout.astro`) as per Vercel's official Astro documentation.

**Tech Stack:** Astro, pnpm, `@vercel/analytics`.

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [x] **Step 1: Install `@vercel/analytics` package**

Run: `pnpm add @vercel/analytics`

- [x] **Step 2: Verify installation in `package.json`**

Ensure `@vercel/analytics` is listed in the `dependencies` section.

- [x] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add @vercel/analytics dependency"
```

---

### Task 2: Integrate Analytics Component

**Files:**
- Modify: `src/layouts/Layout.astro`

- [x] **Step 1: Import the `Analytics` component**

Add the import statement at the top of the frontmatter in `src/layouts/Layout.astro`.

```typescript
import Analytics from "@vercel/analytics/astro";
```

- [x] **Step 2: Add the `<Analytics />` component to the layout**

Place the `<Analytics />` component inside the `<body>` tag, after the `<SearchModal />` component.

```astro
    <SearchModal />
    <Analytics />
```

- [x] **Step 3: Verify the change locally**

Run: `pnpm dev`
Expected: The site should load without errors. Inspecting the source should show the analytics script or a placeholder.

- [x] **Step 4: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: integrate Vercel Analytics component"
```

---

### Task 3: Final Verification

- [x] **Step 1: Run project build**

Run: `pnpm build`
Expected: The build should complete successfully.

- [x] **Step 2: Run linting and type checking**

Run: `pnpm lint && pnpm run sync && npx astro check`
Expected: No errors related to the new integration.

- [x] **Step 3: Commit (if any fixes were needed)**

```bash
git add .
git commit -m "chore: final verification and cleanup"
```
