<template>
    <button
        class="px-3 py-1 text-white hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        :class="variantClasses"
        v-bind="$attrs"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { Variants } from "types";

const variants: Variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
    warning: "bg-amber-400 hover:bg-amber-500",
};

interface Props {
    variant?: keyof Variants;
}

const props = defineProps<Props>();
const { variant } = toRefs(props);

const variantClasses = computed(() => variants[variant?.value || "primary"]);
</script>
