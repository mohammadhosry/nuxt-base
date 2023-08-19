<template>
    <div>
        <h1 class="text-3xl text-blue-900">Login</h1>
        <br />
        <BaseButton variant="primary" @click="login" :disabled="loading">Login</BaseButton>
    </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const { login: authLogin } = authStore;
const { loading } = storeToRefs(authStore);

const login = async () => {
    await authLogin();
    navigateTo("/");
};

definePageMeta({
    middleware: "guest",
    name: "login",
    // navbar: {
    //     label: "Login",
    //     order: 3,
    // },
});
</script>
