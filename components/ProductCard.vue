<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img class="w-full h-100 object-cover object-center" :src="img" 
        alt="Mouse image">
        <div class="p-6">
            <h2 class="text-lg font-semibold text-gray-800">{{ title }}</h2>
            <p class="text-gray-700 mt-2">R${{ price }}</p>
            <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Add to cart
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { gsap } from 'gsap';

export default {
    name: 'ProductCard',
    props: {
        id: String,
        title: String,
        price: Number,
        img: String,
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
    
};

</script>
