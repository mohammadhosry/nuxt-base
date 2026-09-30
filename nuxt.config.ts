import { resolve } from "node:path";
import { voidPlugin } from "void";
// Loads the module's NitroOptions augmentation so cloudflareDev typechecks.
import type {} from "nitro-cloudflare-dev";

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
    // Without this module, dev has no D1/R2 bindings and every request fails
    // with "env: Missing Cloudflare binding 'DB'".
    modules: ["nitro-cloudflare-dev"],
    // void refuses a root wrangler.jsonc once void.config.ts exists, but
    // nitro-cloudflare-dev needs one. Point it at the config void writes.
    cloudflareDev: {
      configPath: resolve(__dirname, ".void-wrangler.jsonc"),
    },
    experimental: {
      tasks: true,
      openAPI: true,
    },
  },  vite: {
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
