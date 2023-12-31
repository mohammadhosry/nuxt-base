import { LanguageCode } from "types";

declare module "nuxt/schema" {
    interface AppConfigInput {
        languages: LanguageCode[];
        rtlLanguages: string[];
        defaultLanguage: LanguageCode;
    }
}

export {};
