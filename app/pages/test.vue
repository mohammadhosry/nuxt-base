<template>
    <div>
        <h1 class="text-(3xl blue-900) dark:text-blue-400">test page</h1>
        <form @submit.prevent="storeProduct" class="flex-(~ col) gap-3 my-5">
            <input type="text" name="name" placeholder="name" required class="dark:(bg-dark-100 text-gray-4)" />
            <input type="file" name="file" required accept="image/*" />
            <button type="submit">Create</button>
        </form>
        <pre>{{ { products } }}</pre>
    </div>
</template>

<script setup lang="ts">
const { data: products, refresh } = await useFetch("/api/products", { lazy: true });


const storeProduct = async (e: Event) => {
    const form = e.target as HTMLFormElement;

    await $fetch("/api/products", { method: "POST", body: new FormData(form) });

    form.reset();
    refresh();
};
</script>