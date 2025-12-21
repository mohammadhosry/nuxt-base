<template>
    <div>
        <h1 class="text-(3xl blue-900) dark:text-sky-300">{{ $t("login") }}</h1>
        <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
        <form @submit.prevent="login" class="mt-4 w-1/3">
            <BaseInput type="email" :placeholder="$t('email')" v-model="credentials.email" autofocus required />
            <BaseInput type="password" :placeholder="$t('password')" v-model="credentials.password" required />
            <BaseButton variant="primary" :disabled="loading">{{ $t("login") }}</BaseButton>
        </form>
    </div>
</template>

<script setup lang="ts">
const loading = ref(false);
const error = ref("");

const credentials = reactive({
    email: "",
    password: "",
});

const login = async () => {
    loading.value = true;

    // const { error } = await auth.signInWithPassword(credentials);

    console.log(JSON.stringify(credentials, null, 2));

    try {
        await $fetch("/api/users/login", {
            method: "POST",
            body: credentials,
        });

        await navigateTo("/");
    }
    catch (err: any) {
        console.log({ err })
        error.value = err?.data?.message || "An error occurred";
    }
    finally {
        loading.value = false;
    }


    // if (error) alert(error);
    // else navigateTo("/");
};

definePageMeta({
    name: "login",
});
</script>
