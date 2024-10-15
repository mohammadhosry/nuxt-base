import { NuxtLinkProps } from "nuxt/app";

declare global {
    type LanguageCode = "ar" | "en" | "he";

    type NavbarItem = {
        label?: string;
        name: string;
        hide?: boolean;
    } & Pick<NuxtLinkProps, "to">;

    interface UserLogin {
        email: string;
        password: string;
    }

    interface Variants {
        primary: string;
        danger: string;
        success: string;

        "outline-primary": string;
        "outline-danger": string;
        "outline-success": string;
    }
}
