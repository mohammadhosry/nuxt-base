// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // pages: false,

    modules: [
        "@nuxthub/core",
        // "@pinia/nuxt",
        "@unocss/nuxt",
        "@nuxtjs/supabase",
        "@vueuse/nuxt",
        "@nuxtjs/i18n",
        "@twicpics/components/nuxt3",
    ],

    hub: {
        database: true,
        kv: true,
        blob: true,
        cache: true,
    },

    nitro: {
        experimental: {
            // Enable Server API documentation within NuxtHub
            openAPI: true,
        },
    },

    // pinia: {
    //     autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
    // },

    supabase: {
        redirectOptions: {
            login: "/auth/login",
            callback: "/confirm",
            exclude: ["/", "/products", "/*/products"],
        },
    },

    // imports: { dirs: ["stores"] }, // not used for now
    // devtools: { enabled: true }
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
            },
            {
                code: "ar",
                name: "Arabic",
                dir: "rtl",
            },
            {
                code: "he",
                name: "Hebrew",
                dir: "rtl",
            },
        ],
        defaultLocale: "en",
        // vueI18n: './i18n.config.ts',
        vueI18n: "./i18n.config.ts",
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

    compatibilityDate: "2024-08-30",
});
