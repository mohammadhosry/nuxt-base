<template>
    <Navbar :items="items">
        <template #append>
            <li v-if="isLoggedIn">
                <BaseButton variant="danger" @click="logout">{{ $t("logout") }}</BaseButton>
            </li>
            <li>
                <select
                    class="appearance-none text-center border-2 p-(x4 y2) rounded-2 dark:bg-transparent"
                    v-model="siteLanguage"
                >
                    <option v-for="lang in languages" :value="lang">{{ $t(lang) }}</option>
                </select>
            </li>
            <li>
                <BaseButton variant="primary" @click="isDark = !isDark">
                    <i class="i-carbon-moon dark:i-carbon-sun"></i>
                </BaseButton>
            </li>
        </template>
        <template v-if="isLoggedIn" #userInfo>
            {{ $t("greeting", { name: user.email.split("@")[0] }) }}
        </template>
    </Navbar>
    <main class="container mx-auto pt-10"><slot /></main>
    <Footer />
</template>

<script setup lang="ts">
import { NavbarItem } from "types";

const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const isLoggedIn = computed(() => !!user.value);
const isDark = useDark(); // from vueuse

const { siteLanguage, languages } = useSiteLanguage(); // uses useLocalStorage from vueuse

const logout = async () => {
    const { error } = await auth.signOut();

    if (error) alert(error);
    else navigateTo("/");
};

const items = computed<NavbarItem[]>(() => [
    { name: "home" },
    { name: "profile", hide: !isLoggedIn.value },
    { name: "login", hide: isLoggedIn.value },
]);
</script>
