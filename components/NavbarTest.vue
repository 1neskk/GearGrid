<template>
    <nav class="navbar flex items-center justify-between bg-black py-4 px-6">
        <div>
        <NuxtLink to="/" class="text-white text-lg font-semibold">GearGrid</NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
            <ul class="flex space-x-4">
                <li v-for="link in links" :key="link.name">
                    <NuxtLink :to="link.path"
                    class="hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 md:dark:hover:underline
                underline-offset-4 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700">{{ link.name }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="flex items-center space-x-4">
            <router-link to="/cart" class="text-white">Cart</router-link>
            <UiAvatar :fallback="emailInitials" />
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const { user } = useFirebaseAuth();
const emailInitials = ref('');

watch(user, (newUser) => {
    if(newUser)
    {
        emailInitials.value = (newUser.email || '').split('@')[0].slice(0, 2).toUpperCase();
    }
});

const links = ref([
    { name: 'Mice', path: '/mice' },
    { name: 'Keyboards', path: '/keyboards' },
    { name: 'Mousepads', path: '/mousepads' },
]);
</script>

<style lang="scss" scoped>
.navbar {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 1.1rem;
}
</style>
