<template>
    <main class="bg-gradient-to-r from-violet-800 to-violet-300">
        <NavbarMain/>
        <div class="form-container">
            <div class="max-w-3xl mx-auto px-4">
                <h1 class="text-4xl font-bold mb-6">Welcome to GearGrid</h1>
                <p class="text-lg mb-8">An eCommerce specialized in selling high-end computer peripherals.</p>
                <UiAlert class="rounded-2xl bg-yellow-300 border-b-0 border-t-0 border-r-0 border-l-0 border-yellow-500"
                title="New to GearGrid?" description="Create an account to access our wide selection of products."
                variant="destrutive"
                icon="lucide:triangle-alert"
                />
                <span class="mx-8"/>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <UiButton href="/login"class="rounded-xl bg-black hover:bg-gray-700">Login</UiButton>
                    <span class="ml-24"/>
                    <UiButton href="/register" class="rounded-xl bg-black hover:bg-gray-700">Register</UiButton>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { useHead } from 'nuxt/app';

useHead({
  title: 'GearGrid',
  meta: [
    {
      name: 'description',
      content: 'Browse our wide selection of products and find the perfect items for your needs.'
    }
  ]
});


</script>

<style lang="css" scoped>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
