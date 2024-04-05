<template>
    <main class="bg-gradient-to-b from-purple-600 to-bg-slate-950">
        <NavbarMain class="text-white bg-black"/>
        <div class="form-container">
            <div class="max-w-3xl mx-auto px-4">
                <AnimatedHeader class="pl-0 pb-0" text="Welcome to GearGrid" />
                <AnimatedParagraph class="text-white paragraph pl-0 pb-8" text="An eCommerce specialized in selling high-end computer peripherals." />
                <UiAlert class="text-white rounded-2xl bg-purple-700 border-2 border-white"
                title="New to GearGrid?" description="Only logged in users can access our wide selection of products."
                variant="default"
                icon="lucide:triangle-alert"
                />
                <span class="mx-8"/>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <UiButton href="/login"class="rounded-xl bg-black hover:bg-violet-500">Login</UiButton>
                    <span class="ml-24"/>
                    <UiButton href="/register" class="rounded-xl bg-black hover:bg-violet-500">Register</UiButton>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "GearGrid",
  description: "Browse our wide selection of products and find the perfect items for your needs.",
  keywords: "ecommerce, computer peripherals, high-end, GearGrid",
});

</script>

<style lang="css" scoped>
.form-container {
    font-family: "Nunito", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.paragraph {
    font-size: 1.25rem;
    font-weight: 500;
}
</style>