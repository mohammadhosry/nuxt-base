<template>
    <nav class="flex">
        <ul class="flex gap-x-4">
            <!-- <li
                v-for="({ name, path, meta }, index) in navbarRoutes"
                :key="name"
                class="text-blue-500 capitalize"
            >
                <NuxtLink :to="path" active-class="text-amber-600">{{
                    meta?.navbar?.label || name
                }}</NuxtLink>
            </li> -->
            <!-- <li class="text-blue-500">
                <NuxtLink active-class="text-amber-600" to="/">Home</NuxtLink>
            </li>
            <li class="text-blue-500">
                <NuxtLink active-class="text-amber-600" :to="{ name: 'login' }">Login</NuxtLink>
            </li>
            <li class="text-blue-500">
                <NuxtLink active-class="text-amber-600" to="/profile">Profile</NuxtLink>
            </li> -->
            <template v-for="{ label, to, name, hide } in items" :key="name">
                <li class="text-blue-500 capitalize" v-if="!hide">
                    <NuxtLink active-class="text-amber-600" :to="to || { name }">{{
                        label || name
                    }}</NuxtLink>
                </li>
            </template>
            <slot name="append"></slot>
        </ul>
    </nav>
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
