<template>
    <section class="page bg-gradient-to-r from-indigo-950 to-slate-950">
        <main>
		    <NavbarProducts />
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold text-white mb-4">Checkout</h1>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <form @submit.prevent="submitCheckout()">
                        <div class="mb-4">
                            <label for="card-element" class="block text-sm font-medium text-gray-700">Card Details</label>

                            <div class="mt-1">
                                <div id="card-element" class="mt-1">
                                    
                                </div>
                            </div>

                            <div id="card-info" class="mt-1">
                                <div class="text-sm text-gray-500 mt-2">
                                    <div>Test Card: 4242 4242 4242 4242</div>
                                    <div>Test Expiry: 04/24</div>
                                    <div>Test CVC: 242</div>
				                    <div>Ammount to pay: {{ total }}</div>
                                </div>
                            </div> 
                        </div>
                        <div class="flex justify-end">
                            <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                Pay
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </section>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '@/composables/useCart';
import { onAuthStateChanged, type Auth } from 'firebase/auth';
import { useElements, type StripeCardElement } from '@stripe/stripe-js';
import { checkout } from '@/composables/checkout';

export default {
    setup() {
        const router = useRouter();
        const { $auth, $stripe } = useNuxtApp();
        const { user } = useFirebaseAuth();
        const { total } = useCart();
        const elements = useElements();
        const cardElement = ref<StripeCardElement | null>(null);
        const stripe = ref($stripe);

        onBeforeMount(() => {
            onAuthStateChanged($auth as Auth, (firebaseUser) => {
                if(firebaseUser)
                {
                    user.value = firebaseUser;
                    useSonner.info('Checkout functionality is unavailable and it is under development/testing.');
                }
                else {
                    router.push('/login');
                    useSonner.error('Error!', {
                        description: 'User is not logged in.',
                        duration: 2000,
                    })
                }
            });
        });

        useSeoMeta({
            title: 'Checkout',
            keywords: 'checkout, payment, buy',
        });

        onMounted(() => {
            if (elements.value && !cardElement.value) {
                cardElement.value = elements.value.create('card');
                if (cardElement.value) {
                    cardElement.value.mount('#card-element');
                }
            }
        });

        const submitCheckout = async () => {
            if (stripe.value && cardElement.value) {
                await checkout(stripe.value);
            }
            else {
                useSonner.error('Error!', {
                    description: 'Stripe is not initialized.',
                    duration: 2000,
                });
            }
        };
        return {
            submitCheckout,
            total,
        }
    },
};

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
