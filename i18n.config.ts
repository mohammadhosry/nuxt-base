import { I18nOptions } from "@nuxtjs/i18n";

import { ar, he, en } from "./locales";

export default defineI18nConfig<I18nOptions>(() => ({
    legacy: false,
    locale: "en",
    messages: {
        ar,
        he,
        en,
    },
}));
