import { resolve } from "node:path";
import { voidPlugin } from "void";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // "@pinia/nuxt",
    "@unocss/nuxt",
    // "@nuxtjs/supabase",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@twicpics/components/nuxt3",
  ],
  // void's schema alias. Declared at the top level so Vite, Nitro, and the
  // generated tsconfigs all resolve it.
  alias: {
    "@schema": resolve(__dirname, "db/schema.ts"),
  },
  compatibilityDate: "2025-12-21",
  nitro: {
    preset: "cloudflare-module",
    // voidPlugin selects Nitro's built-in "cloudflare-dev" preset in dev, which
    // needs a wrangler config to read bindings from. void rejects a root
    // wrangler.jsonc once void.config.ts exists, so point at the one it writes.
    cloudflare: {
      dev: {
        configPath: resolve(__dirname, ".void-wrangler.jsonc"),
      },
    },
    experimental: {
      openAPI: true,
    },
  },
  vite: {
    plugins: [voidPlugin()],
  },
  runtimeConfig: {
    public: {
      appName: "Nuxt base",
    },
  },
  i18n: {
    // legacy: false,
    // locale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        dir: "ltr",
        file: 'en.json'
      },
      {
        code: "ar",
        name: "Arabic",
        dir: "rtl",
        file: 'ar.json'
      },
      {
        code: "he",
        name: "Hebrew",
        dir: "rtl",
        file: 'he.json'
      },
    ],
    defaultLocale: "en",
    // vueI18n: './i18n.config.ts',
    // vueI18n: "./i18n.config.ts",
  },

  twicpics: {
    domain: `https://zarafa.twic.pics`,
  },

  app: {
    head: {
      script: [
        {
          innerHTML: `
if (localStorage.getItem("vueuse-color-scheme") === "dark") {
    document.documentElement.classList.add("dark");
}
`,
        },
      ],
    },
  },
});
