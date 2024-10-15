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
            exclude: ["/"],
        },
    },

    // imports: { dirs: ["stores"] }, // not used for now
    // devtools: { enabled: true }
    runtimeConfig: {
        public: {
            appName: "Nuxt base",
        },
    },

    compatibilityDate: "2024-08-30",
});
