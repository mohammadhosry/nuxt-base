import { UserLogin } from "types";

// not used for now
export const useAuthStore = defineStore("auth", () => {
    const user = useSupabaseUser();
    const { auth } = useSupabaseClient();

    const loading = ref(false);

    const isLoggedIn = computed(() => !!user.value);

    async function login({ email, password }: UserLogin) {
        loading.value = true;

        const { data, error } = await auth.signInWithPassword({
            email,
            password,
        });

        loading.value = false;

        return {
            user: data,
            error,
        };
    }

    async function logout() {
        loading.value = true;

        const { error } = await auth.signOut();

        loading.value = false;

        return { error };
    }

    return {
        user,
        isLoggedIn,
        loading,
        login,
        logout,
    };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
