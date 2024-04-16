<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img class="w-full h-100 object-cover object-center" :src="img" 
        alt="Mouse image">
        <div class="p-6">
            <h2 class="text-lg font-semibold text-gray-800">{{ name }}</h2>
            <p class="text-gray-700 mt-2">R$ {{ price }}</p>
            <UiButton class="mt-4" @click="addToCart({ id, name, price, img })">
            Add to Cart
            </UiButton>
        </div>
    </div>
</template>

<script lang="ts">
import { gsap } from 'gsap';
import { useCart } from '@/composables/useCart';
import { type Products } from '@/composables/useFirestoreDB';

export default {
    name: 'ProductCard',
    props: {
        id: {
            default: '',
            type: String,
        },
        name: {
            default: '',
            type: String,
        
        },
        price: {
            default: 0,
            type: Number,
        },
        img: {
            default: '',
            type: String,
        },
    },

    mounted() {
        const card = this.$el;
        gsap.set(card, { opacity: 0, y: 100 });
        gsap.to(card, {
            duration: 1.2,
            opacity: 1,
            y: 0,
            ease: 'back.out',
            stagger: 0.2,
        });
    },

    setup() {
        const { addToCart } = useCart();

        return { addToCart };
    },
};

</script>
