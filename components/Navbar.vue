<template>
    <div class="bg-gray-100 dark:bg-dark-100">
        <nav class="container mx-auto flex items-center justify-between py-3">
            <ul class="flex items-center gap-x-4">
                <template v-for="{ label, to, name, hide } in items" :key="name">
                    <li class="text-blue-500 capitalize" v-if="!hide">
                        <NuxtLink active-class="text-amber-600" :to="to || { name }">{{
                            label || ($te(name) ? $t(name) : name)
                        }}</NuxtLink>
                    </li>
                </template>
                <slot name="append"></slot>
            </ul>
            <slot name="userInfo"></slot>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { NavbarItem } from "types";

defineProps<{
    items: NavbarItem[];
}>();

// const

// const router = useRouter();
// const navbarRoutes = computed(() =>
//     router.options.routes
//         .filter((r) => !r.meta?.navbar?.hide)
//         .sort(
//             (a, b) =>
//                 (a.meta?.navbar?.order || router.options.routes.length) -
//                 (b.meta?.navbar?.order || router.options.routes.length)
//         )
// );
</script>
