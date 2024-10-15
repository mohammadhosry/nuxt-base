<template>
    <Html :lang="siteLanguage" :dir="dir">
        <Head>
            <Title>{{ $config.public.appName }}</Title>
        </Head>
        <Body class="font-ubuntu dark:(bg-dark text-light)">
            <NuxtLayout>
                <NuxtPage />
                <Loading v-if="loading" />
            </NuxtLayout>
        </Body>
    </Html>
</template>

<script setup lang="ts">
import "@unocss/reset/tailwind.css";

const { dir, siteLanguage } = useSiteLanguage();
const loading = ref(true);

onMounted(() => {
    nextTick().then(() => {
        loading.value = false;
    });
});
</script>
