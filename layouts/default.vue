<template>
    <Navbar :items="items">
        <template #append>
            <li v-if="isLoggedIn">
                <button class="px-3 py-1 bg-red-500 text-white hover:bg-red-600" @click="logout">
                    logout
                </button>
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
