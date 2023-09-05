import { defineConfig, presetWebFonts, presetUno, transformerDirectives } from "unocss";

export default defineConfig({
    presets: [
        presetUno({
            dark: "media",
        }),
        presetWebFonts({
            provider: "google",
            fonts: {
                ubuntu: "Ubuntu",
                // ubuntu: {
                //     name: "Ubuntu",
                //     italic: false,
                //     weights: [400, 700],
                // },
            },
        }),
    ],
    transformers: [transformerDirectives()],
    theme: {
        colors: {
            primary: {
                DEFAULT: "#007bff",
                dark: "#0069d9",
                darker: "#0062cc",
            },
            danger: {
                DEFAULT: "#dc3545",
                dark: "#c82333",
                darker: "#bd2130",
            },
            success: {
                DEFAULT: "#28a745",
                dark: "#218838",
                darker: "#1e7e34",
            },
        },
    },
    shortcuts: [
        [
            /^btn-(.*)$/,
            ([, c]) =>
                `px-3 py-1 bg-${c} text-white rounded-md border-solid border-2 border-${c} hover:(bg-${c}-dark border-${c}-darker)`,
        ],
    ],
});
