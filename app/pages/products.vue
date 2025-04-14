<script lang="ts" setup>
definePageMeta({
    name: "products",
});

const isLoading = ref(false);
const user = useSupabaseUser();

const { data: products, refresh, status } = await useFetch("/api/products", { lazy: true });

watch(status, (val) => {
    isLoading.value = val === "pending";
    // if (val === "pending") {
    // }
    // else if (isLoading.value ) {

    // }
});

const storeProduct = async (e: Event) => {
    const form = e.target as HTMLFormElement;

    isLoading.value = true;

    await $fetch("/api/products", { method: "POST", body: new FormData(form) });

    isLoading.value = false;

    form.reset();
    refresh();
};

const deleteProduct = async (id: number) => {
    if (!confirm("Are you sure?")) return;

    isLoading.value = true;

    await $fetch(`/api/products/${id}`, { method: "DELETE" as any });

    isLoading.value = false;
    refresh();
};
</script>

<template>
    <div>
        <h1 class="text-(3xl blue-900) dark:text-blue-400">{{ $t("products") }}</h1>

        <template v-if="user">
            <h2>create new procuct</h2>

            <form @submit.prevent="storeProduct" class="flex-(~ col) gap-3 my-5">
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                    class="dark:(bg-dark-100 text-gray-4)"
                />
                <input type="file" name="file" required accept="image/*" />
                <BaseButton :disabled="isLoading">
                    <i
                        v-if="isLoading"
                        class="i-carbon-circle-dash animate-(spin duration-2000)"
                    ></i>
                    {{ $t("create") }}
                </BaseButton>
            </form>
        </template>

        <ul class="grid-(~ cols-3) gap-4">
            <li v-for="product in products" :key="product.id">
                <!-- <img v-if="product.image" :src="`/api/_hub/blob/${product.image}`" width="200" />
                <img
                    v-if="product.image"
                    :src="`https://zarafa.twic.pics/${product.image}`"
                    width="200"
                /> -->
                <TwicImg v-if="product.image" :src="product.image" refit ratio="3/4" />
                <!-- {{ product.image }}
                <br /> -->
                [{{ product.id }}] {{ product.name }}

                <BaseButton
                    v-if="user"
                    variant="danger"
                    @click="deleteProduct(product.id)"
                    :disabled="isLoading"
                >
                    {{ $t("delete") }}
                </BaseButton>
            </li>
        </ul>
    </div>
</template>
