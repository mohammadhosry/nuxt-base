<template>
    <Navbar :items="items">
        <template #append>
            <li v-if="isLoggedIn">
                <BaseButton variant="danger" @click="logout">{{ $t("logout") }}</BaseButton>
            </li>
            <li>
                <select
                    class="appearance-none text-center border-2 p-(x4 y2) rounded-2 dark:bg-transparent"
                    :value="locale"
                    @change="(e) => setLocale((e.target as HTMLSelectElement).value)"
                >
                    <option v-for="locale in localeCodes" :value="locale" :key="locale">
                        {{ $t(locale) }}
                    </option>
                </select>
            </li>
            <li>
                <BaseButton variant="primary" @click="isDark = !isDark">
                    <i class="i-carbon-moon dark:i-carbon-sun"></i>
                </BaseButton>
            </li>
        </template>
        <template v-if="isLoggedIn && user" #userInfo>
            {{ $t("greeting", { name: user.email?.split("@")[0] || user.id }) }}
        </template>
    </Navbar>
    <main class="container mx-auto pt-10"><slot /></main>
    <Footer />
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const isLoggedIn = computed(() => !!user.value);
// const isDark = useDark({ disableTransition: false }); // from vueuse

const isDark = useLocalStorage(
    "vueuse-color-scheme",
    document?.documentElement?.classList?.contains("dark") || false,
    {
        serializer: {
            read: (value: string) => value === "dark",
            write: (value: boolean) => {
                document.documentElement.classList[value ? "add" : "remove"]("dark");
                return value ? "dark" : "light";
            },
        },
    }
);

// const { languages } = useSiteLanguage(); // uses useLocalStorage from vueuse
const { locale, setLocale, localeCodes } = useI18n();

const logout = async () => {
    const { error } = await auth.signOut();

    if (error) alert(error);
    else navigateTo("/");
};

const items = computed<NavbarItem[]>(() => [
    { name: "home" },
    { name: "profile", hide: !isLoggedIn.value },
    { name: "login", hide: isLoggedIn.value },
    { name: "products" },
]);
</script>
