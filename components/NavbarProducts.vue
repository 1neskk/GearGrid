<template>
    <nav class="navbar flex items-center justify-between bg-black py-4 px-6">
        <div class="transform transition-transform duration-200 hover:scale-110">
        <NuxtLink to="/" class="text-white text-xl font-bold">GearGrid</NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
            <ul class="flex space-x-4">
                <li v-for="link in links" :key="link.name">
                    <NuxtLink :to="link.path"
                    class="font-regular hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 md:dark:hover:underline
                underline-offset-4 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700">{{ link.name }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="flex items-center space-x-4">
            <router-link to="/cart" class="transform transition-transform duration-200 hover:scale-110 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
            </router-link>
            <RouterLink to="/profile" class="transform transition-transform duration-200 hover:scale-110">
            <UiAvatar :fallback="emailInitials" />
            </RouterLink>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';

const { user } = useFirebaseAuth();
const emailInitials = ref('');

// Remember user's initials when changing to other page
onMounted(() => {
    if (user.value && user.value.email) {
        emailInitials.value = (user.value.email[0] + user.value.email[1]).toUpperCase();
    }
});

// Remember user's initials when refreshing the page
watch(user, () => {
    if (user.value && user.value.email) {
        emailInitials.value = (user.value.email[0] + user.value.email[1]).toUpperCase();
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