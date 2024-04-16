<template>
    <section class="page bg-gradient-to-r from-indigo-950 to-slate-950">
        <main>
            <NavbarProducts />
            <div class="container mx-auto">
                <h1 class="py-5 text-2xl font-bold mb-4">Shopping Cart</h1>

                <div v-if="cart.length === 0" class="text-center text-white">
                    <p>Your shopping cart is empty</p>

                    <button @click="router.push('/mice')" class="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2
                    rounded-lg mt-4">Go to Products</button>
                </div>

                <div v-else>
                    <div v-for="item in cart" :id="item.id" class="flex justify-between items-center bg-white
                    p-4 mb-4 rounded">
                        <div class="flex items-center">
                            <img :src="item.img" alt="product" class="w-20 h-20 object-cover rounded">
                            <div class="ml-4">
                                <h2 class="text-black text-lg font-bold">{{ item.name }}</h2>
                                <p class="text-gray-500">R$ {{ item.price }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between mt-5">
                        <button @click="clearCart" class="bg-red-500 hover:bg-red-800 text-white px-4 py-2
                        rounded-lg">Clear Cart</button>
                        <div class="text-white">
                            <p>Total: R$ {{ total }}</p>
                            <router-link to="/" class="text-blue-500">Checkout</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script lang="ts" setup>
import { onBeforeMount, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '@/composables/useCart';
import { onAuthStateChanged, type Auth } from 'firebase/auth';

const { $auth} = useNuxtApp();
const { user } = useFirebaseAuth();
const router = useRouter();

onBeforeMount(() => {
    onAuthStateChanged($auth as Auth, (firebaseUser) => {
        if(firebaseUser)
        {
            user.value = firebaseUser;
            // useSonner.info('User is logged in as ' + firebaseUser.email);
        }
        else {
            router.push('/login');
            useSonner.error('User is not logged in!');
        }
    });
});

useSeoMeta({
    title: 'Shopping Cart',
    keywords: 'shopping cart, cart, shopping',
});

const { cart, clearCart } = useCart();

const total = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.price, 0);
});

</script>

<style lang="scss" scoped>
.page {
    overflow-y: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

</style>
