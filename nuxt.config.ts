// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
    pinia: {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
    },
    imports: { dirs: ["stores"] },
    app: {
        head: {
            // htmlAttrs: {
            //     lang: "ar",
            //     dir: "rtl",
            // },
            title: process.env.APP_NAME,
        },
    },
    // devtools: { enabled: true }
});
