<template>
    <div>
        <h1 class="text-(3xl blue-900) dark:text-blue-400">{{ $t("home") }}</h1>
        <h2 class="text-(2xl primary) dark:text-primary/60">{{ $t("home") }}</h2>
        <h2 class="text-(2xl primary-derk)">{{ $t("home") }}</h2>
        <h2 class="text-(2xl primary-derker)">{{ $t("home") }}</h2>
        <button class="btn-(~ success)">foo</button>
        <BaseButton variant="outline-danger" class="mt-3 block">foo</BaseButton>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: "home",
});
</script>
