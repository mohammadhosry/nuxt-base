import { NuxtLinkProps } from "nuxt/app";

export type NavbarItem = {
    label?: string;
    name: string;
    hide?: boolean;
} & Pick<NuxtLinkProps, "to">;

export interface UserInfo {
    name: string;
    email: string;
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface AuthState {
    user: UserInfo | null;
    loading: boolean;
}

export interface Variants {
    primary: string;
    danger: string;
    success: string;
}
