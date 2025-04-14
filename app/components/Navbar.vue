<template>
    <div class="bg-gray-100 dark:bg-dark-100">
        <nav class="container mx-auto flex items-center justify-between py-3">
            <ul class="flex items-center gap-x-4">
                <li
                    v-for="{ label, to, name, hide } in filteredItems"
                    :key="name"
                    class="text-blue-500 capitalize"
                >
                    <NuxtLink active-class="text-amber-600" :to="localePath(to || name)">{{
                        label || ($te(name) ? $t(name) : name)
                    }}</NuxtLink>
                </li>

                <li v-for="code in filteredLocaleCodes" class="text-blue-500 capitalize">
                    <NuxtLink active-class="text-amber-600" :to="switchLocalePath(code)">{{
                        $t(code)
                    }}</NuxtLink>
                </li>

                <slot name="append"></slot>
            </ul>
            <slot name="userInfo"></slot>
        </nav>
    </div>
</template>

<script setup lang="ts">
const { items } = defineProps<{
    items: NavbarItem[];
}>();

const switchLocalePath = useSwitchLocalePath();

const { locale, localeCodes } = useI18n();

const filteredLocaleCodes = computed(() =>
    localeCodes.value.filter((code) => code !== locale.value)
);

const localePath = useLocalePath();

// const

// const router = useRouter();
const filteredItems = computed(() => items.filter((item) => !item.hide));
</script>
