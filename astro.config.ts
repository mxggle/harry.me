import { defineConfig, envField, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    mdx({
      extendMarkdownConfig: true,
    }),
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "github-dark-default" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },

  fonts: [
    {
      name: "Wotfard",
      cssVariable: "--font-wotfard",
      fallbacks: ["sans-serif"],
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/wotfard.woff2"],
          },
        ],
      },
    },
    {
      name: "Lora",
      cssVariable: "--font-quote",
      fallbacks: ["serif"],
      provider: fontProviders.google(),
    },
    {
      name: "Cartograph CF",
      cssVariable: "--font-cartograph",
      fallbacks: ["monospace"],
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/cartograph-cf.woff2"],
          },
        ],
      },
    },
    {
      name: "Cascadia Code",
      cssVariable: "--font-cascadia-code",
      fallbacks: ["monospace"],
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/cascadia-code.woff2"],
          },
        ],
      },
    },
  ],
});
