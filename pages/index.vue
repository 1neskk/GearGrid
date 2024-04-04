<template>
    <main class="bg-gradient-to-r from-gray-800 to-gray-300">
        <NavbarMain class="text-white bg-black"/>
        <div class="form-container">
            <div class="max-w-3xl mx-auto px-4">
                <h1 class="text-black text-4xl font-bold mb-6">Welcome to <span class="glow-text text-xl md:hover:underline underline-offset-8">GearGrid</span></h1>
                <p class=" text-black text-lg mb-8">An eCommerce specialized in selling high-end computer peripherals.</p>
                <UiAlert class="text-black rounded-2xl bg-yellow-300 border-b-0 border-t-0 border-r-0 border-l-0 border-yellow-500"
                title="New to GearGrid?" description="Create an account to access our wide selection of products."
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.glow-text {
    font-size: 2.2rem;
    color: #fff;
    text-shadow: 0 0 10px rgb(199, 69, 255), 0 0 20px rgb(199, 69, 255), 0 0 30px rgb(199, 69, 255), 0 0 40px rgb(199, 69, 255), 0 0 50px rgb(199, 69, 255), 0 0 60px rgb(199, 69, 255), 0 0 70px rgb(199, 69, 255);
    animation: animate 3s linear infinite;
}
</style>
