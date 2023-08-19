<template>
    <div>
        <h1 class="text-3xl text-blue-900">login</h1>
        <button class="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600" @click="login">
            login
        </button>
    </div>
</template>

<script setup lang="ts">
const { login: authLogin } = useAuthStore();

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
