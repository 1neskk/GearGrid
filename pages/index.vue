<template>
    <main class="bg-gradient-to-r from-gray-800 to-gray-300">
        <NavbarMain class="text-white bg-black"/>
        <div class="form-container">
            <div class="max-w-3xl mx-auto px-4">
                <AnimatedHeader class="pl-0 pb-0" text="Welcome to GearGrid" />
                <AnimatedParagraph class="paragraph pl-0 pb-8" text="An eCommerce specialized in selling high-end computer peripherals." />
                <UiAlert class="text-black rounded-2xl bg-yellow-300 border-b-0 border-t-0 border-r-0 border-l-0 border-yellow-500"
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
    color: #000;;
}

</style>
