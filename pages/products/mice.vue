<template>
    <main class="bg-gradient-to-r from-violet-800 to-violet-300">
        <NavbarMain />
        <div class="container mx-auto py-8">
            <h1 class="text-3xl font-bold mb-4">Mice</h1>
            <p class="text-black font-normal mb-4">
                Browse our selection of high-end computer mice.
            </p>
            <div class="grid grid-cols-3 gap-4">
                <!-- Product 1 -->
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="text-xl font-bold mb-2">Product 1</h2>
                    <p class="text-gray-700">Description of Product 1</p>
                </div>

                <!-- Product 2 -->
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="text-xl font-bold mb-2">Product 2</h2>
                    <p class="text-gray-700">Description of Product 2</p>
                </div>

                <!-- Product 3 -->
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="text-xl font-bold mb-2">Product 3</h2>
                    <p class="text-gray-700">Description of Product 3</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { useHead } from 'nuxt/app';
import { useRouter } from 'vue-router';
const { user } = useFirebaseAuth();

const router = useRouter();

if (!user.value) {
    router.push('/login');
}

useHead({
    title: 'Mice',
    meta: [
        {
            name: 'description',
            content: 'Browse our selection of high-end computer mice.'
        }
    ]
});
</script>