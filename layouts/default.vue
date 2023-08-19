<template>
    <Navbar :items="items">
        <template #append>
            <li v-if="isLoggedIn">
                <BaseButton variant="danger" @click="logout">Logout</BaseButton>
            </li>
        </template>
    </Navbar>
    <hr />
    <pre>{{ { isLoggedIn, user, loading } }}</pre>
    <main><slot /></main>
</template>

<script setup lang="ts">
import { NavbarItem } from "types";

const authStore = useAuthStore();
const { logout } = authStore;
const { user, isLoggedIn, loading } = storeToRefs(authStore);

// const foo = ref(false);

const items = computed<NavbarItem[]>(() => [
    { name: "home" },
    { name: "profile", hide: !isLoggedIn.value },
    { name: "login", hide: isLoggedIn.value },
]);
</script>
