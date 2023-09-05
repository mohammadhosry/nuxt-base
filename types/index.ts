import { NuxtLinkProps } from "nuxt/app";

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
}
