<template>
    <div>
        <h1 class="text-3xl text-blue-900 dark:text-blue-400">profile</h1>
        <pre>{{ user }}</pre>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();

definePageMeta({
    // navbar: {
    //     order: 2,
    // },
});
</script>
