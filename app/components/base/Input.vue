<template>
    <input
        class="border-(2 gray-400) p-(x3 y1) block mb-4 w-full dark:(bg-dark-100 text-gray-4 placeholder-gray-5)"
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
</template>
<script setup lang="ts">
defineProps<{
    modelValue: string;
}>();

defineEmits<{
    // (event: "update:modelValue", vlaue: string): void;
    "update:modelValue": [value: string]; // alternative syntax
}>();
</script>
