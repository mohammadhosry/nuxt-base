import { NuxtLinkProps } from "nuxt/app";

export type LanguageCode = "ar" | "en" | "he";

export type NavbarItem = {
    label?: string;
    name: string;
    hide?: boolean;
} & Pick<NuxtLinkProps, "to">;

export interface UserLogin {
    email: string;
    password: string;
}

export interface Variants {
    primary: string;
    danger: string;
    success: string;

    "outline-primary": string;
    "outline-danger": string;
    "outline-success": string;
}
