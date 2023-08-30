// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@pinia/nuxt", "@unocss/nuxt"],
    pinia: {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
    },
    imports: { dirs: ["stores"] },
    css: ["~/assets/main.css"],
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
