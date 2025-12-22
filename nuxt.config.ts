// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxthub/core",
    // "@pinia/nuxt",
    "@unocss/nuxt",
    // "@nuxtjs/supabase",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@twicpics/components/nuxt3",
  ],
  hub: {
    db: 'sqlite',
    kv: true,
    blob: true,
    cache: true,
  },
  compatibilityDate: "2025-12-21",
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    },
    experimental: {
      tasks: true,
      openAPI: true,
    }
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
