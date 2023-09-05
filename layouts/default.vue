<template>
    <Navbar :items="items">
        <template #append>
            <li v-if="isLoggedIn">
                <BaseButton variant="danger" @click="logout">Logout</BaseButton>
            </li>
        </template>
    </Navbar>
    <hr />
    <pre>{{ { isLoggedIn, userEmail: user?.email } }}</pre>
    <main><slot /></main>
</template>

<script setup lang="ts">
import { NavbarItem } from "types";

const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const isLoggedIn = computed(() => !!user.value);

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
