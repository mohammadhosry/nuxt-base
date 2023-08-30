<template>
    <button :class="variantClasses" v-bind="$attrs">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { Variants } from "types";

const variants: Variants = {
    primary: "btn-primary",
    danger: "btn-danger",
    success: "btn-success",
};

interface Props {
    variant?: keyof Variants;
}

const props = defineProps<Props>();
const { variant } = toRefs(props);

const variantClasses = computed(() => variants[variant?.value || "primary"]);
</script>
