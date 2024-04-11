<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img class="w-full h-64 object-cover object-center" src="https://via.placeholder.com/640x360"
        alt="Product image">
        <div class="p-6">
            <h2 class="text-lg font-semibold text-gray-800">{{ title }}</h2>
            <p class="text-gray-700 mt-2">R${{ price }}.00</p>
            <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                View details
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: String,
    title: String,
    price: String,
});

</script>

<style lang="scss" scoped>

</style>