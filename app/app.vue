<template>
    <Html :lang="locale" :dir="locales.find((l) => l.code === locale)?.dir">

    <Head>
        <Title>{{ $config.public.appName }}</Title>
    </Head>

    <Body class="dark:(bg-dark text-light)">
        <NuxtLayout>
            <NuxtLoadingIndicator />
            <NuxtPage />
            <!-- <Loading v-if="loading" /> -->
        </NuxtLayout>
    </Body>

    </Html>
</template>

<script setup lang="ts">
import "@unocss/reset/tailwind.css";

const { locale, locales } = useI18n();
// const { dir } = useSiteLanguage();
const loading = ref(true);

onMounted(async () => {
    await nextTick();
    loading.value = false;
});
</script>
