<template>
    <section class="page">
        <main class="bg-gradient-to-b from-purple-600 to-bg-slate-950">
            <NavbarMain class="bg-black" />
            <div class="container mx-auto py-8">
                <h1 class="text-3xl font-bold mb-4">Mice</h1>
                <p class="text-white font-normal mb-4">
                    Browse our selection of high-end computer mice.
                </p>
                <UiAlert class="mb-8" title="Coming soon" description="This page is yet to be implemented!"
                variant="default" icon="lucide:circle-alert" />
                <div class="grid grid-cols-3 gap-4">
                    <!-- Product 1 -->
                    <div class="bg-white rounded-lg shadow p-4">
                        <h2 class="text-xl text-black font-bold mb-2">Product 1</h2>
                        <p class="text-gray-700">Description of Product 1</p>
                    </div>

                    <!-- Product 2 -->
                    <div class="bg-white rounded-lg shadow p-4">
                        <h2 class="text-xl text-black font-bold mb-2">Product 2</h2>
                        <p class="text-gray-700">Description of Product 2</p>
                    </div>

                    <!-- Product 3 -->
                    <div class="bg-white rounded-lg shadow p-4">
                        <h2 class="text-xl text-black font-bold mb-2">Product 3</h2>
                        <p class="text-gray-700">Description of Product 3</p>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const { user } = useFirebaseAuth();

const router = useRouter();

if (!user.value) {
    router.push('/login');
}

useSeoMeta({
  title: "Mice",
  description: "Browse our selection of high-end computer mice.",
});
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>