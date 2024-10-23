<template>
    <Html :lang="locale" :dir="locales.find((l) => l.code === locale)?.dir">
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

const { locale, locales } = useI18n();
// const { dir } = useSiteLanguage();
const loading = ref(true);

onMounted(() => {
    nextTick().then(() => {
        loading.value = false;
    });
});
</script>
