import { AuthState, UserInfo } from "types";

export const useAuthStore = defineStore("auth", {
    state: (): AuthState => {
        return {
            user: null,
            loading: false,
        };
    },
    getters: {
        isLoggedIn: (state) => state.user !== null,
    },
    actions: {
        async login() {
            this.loading = true;

            const user = await new Promise<UserInfo>((resolve) => {
                setTimeout(() => {
                    resolve({
                        name: "mohamamd",
                        email: "moahmmad.hosry@gmail.com",
                    });
                }, 1600);
            });

            this.user = user;

            this.loading = false;
        },
        logout() {
            this.user = null;
            console.log("logout", this.user);
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
