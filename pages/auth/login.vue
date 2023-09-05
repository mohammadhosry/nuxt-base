<template>
    <div>
        <h1 class="text-3xl text-blue-900">Login</h1>
        <br />
        <input
            type="text"
            class="border border-gray-400"
            placeholder="Username"
            v-model="credentials.email"
            autofocus
        />
        <input
            type="password"
            class="border border-gray-400"
            placeholder="Password"
            v-model="credentials.password"
        />
        <BaseButton variant="primary" @click="login" :disabled="loading">Login</BaseButton>
    </div>
</template>

<script setup lang="ts">
const { auth } = useSupabaseClient();
const loading = ref(false);

const credentials = reactive({
    email: "",
    password: "",
});

const login = async () => {
    loading.value = true;

    const { error } = await auth.signInWithPassword(credentials);

    loading.value = false;

    if (error) alert(error);
    else navigateTo("/");
};

definePageMeta({
    name: "login",
    // navbar: {
    //     label: "Login",
    //     order: 3,
    // },
});
</script>
