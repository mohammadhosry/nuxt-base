// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
    // devtools: { enabled: true }
    app: {
        head: {
            title: process.env.APP_NAME,
        },
    },
});
