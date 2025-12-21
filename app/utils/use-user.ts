export default function useUser() {
    const { data: user, refresh } = useFetch<User>("/api/users/me");

    async function logout() {
        await useFetch("/api/users/logout", {
            method: "POST",
        });

        refresh();
    }

    return { user, logout };
}