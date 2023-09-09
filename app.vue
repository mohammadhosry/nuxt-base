<template>
    <Html :lang="siteLanguage" :dir="dir">
        <Head>
            <Title>{{ $config.public.appName }}</Title>
        </Head>
        <Body class="font-ubuntu dark:(bg-dark text-light)">
            <NuxtLayout v-if="!loading">
                <NuxtPage />
            </NuxtLayout>
            <Loading v-else />
        </Body>
    </Html>
</template>

<script setup lang="ts">
import "@unocss/reset/tailwind.css";

const { dir, siteLanguage } = useSiteLanguage();
const loading = ref(true);

onMounted(async () => {
    await nextTick();
    loading.value = false;
});
</script>
