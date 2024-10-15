import {
    defineConfig,
    presetWebFonts,
    presetUno,
    transformerVariantGroup,
    presetIcons,
} from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: "bunny",
            fonts: {
                ubuntu: "Ubuntu",
                // ubuntu: {
                //     name: "Ubuntu",
                //     italic: false,
                //     weights: [400, 700],
                // },
            },
        }),
        presetIcons({
            extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
            },
            scale: 1.5,
        }),
    ],
    transformers: [transformerVariantGroup()],
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
        {
            btn: "p-(x3 y1) border-(solid 2) border-(solid 2) rounded-md",
        },
        [
            /^btn-([\w]*)$/,
            ([, c]) =>
                `text-white border-${c} bg-${c} hover:(bg-${c}-dark border-${c}-darker) dark:(bg-${c}/40 border-${c}-darker/40 hover:(bg-${c}-dark/60 border-${c}-darker/60))`,
        ],
        [
            /^btn-outline-([\w]*)$/,
            ([, c]) =>
                `text-${c} border-${c} hover:(text-white bg-${c}) dark:(text-${c}/60 border-${c}/60 hover:(bg-${c}/60))`,
        ],
    ],
});
