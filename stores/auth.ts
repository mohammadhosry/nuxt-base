import { AuthState, UserLogin } from "types";

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
        async login({ username, password }: UserLogin) {
            this.loading = true;

            const { user, error } = await new Promise<{
                user: AuthState["user"];
                error: string | null;
            }>((resolve) => {
                setTimeout(() => {
                    if (username == "mohammad" && password == "1234") {
                        resolve({
                            user: {
                                name: "Mohamamd",
                                email: "moahmmad.hosry@gmail.com",
                            },
                            error: null,
                        });
                    } else {
                        resolve({ error: "wrong credentials", user: null });
                    }
                }, 1600);
            });

            if (user) {
                this.user = user;
            }

            this.loading = false;

            return { error };
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
