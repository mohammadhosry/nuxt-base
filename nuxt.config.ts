// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@pinia/nuxt", "@unocss/nuxt", "@nuxtjs/supabase", "@vueuse/nuxt", "@nuxtjs/i18n"],
    pinia: {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
    },
    supabase: {
        redirectOptions: {
            login: "/auth/login",
            callback: "/confirm",
            exclude: ["/"],
        },
    },
    // imports: { dirs: ["stores"] }, // not used for now
    runtimeConfig: {
        public: {
            appName: "Nuxt base",
        },
    },
    // devtools: { enabled: true }
});
