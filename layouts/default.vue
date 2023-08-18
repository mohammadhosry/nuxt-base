<template>
    <Navbar :items="items" />
    <hr />
    <button @click="isLoggedIn = !isLoggedIn">Login</button>
    <pre>{{ { isLoggedIn } }}</pre>
    <main><slot /></main>
</template>

<script setup lang="ts">
import { NavbarItem } from "components/Navbar.vue";

const isLoggedIn = ref(false);

const items = computed<NavbarItem[]>(() => [
    { name: "home" },
    { name: "profile" },
    { name: "login", hide: isLoggedIn.value },
]);
</script>
