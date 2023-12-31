// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                    "Source Code Pro": [
                        100, 200, 300, 400, 500, 600, 700, 800, 900,
                    ],
                },
            },
        ],
        "@nuxtjs/eslint-module",
        "@pinia/nuxt",
    ],
    pages: true,
    ignore: ["./to-come/**"],
});
