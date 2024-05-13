<template>
    <section class="page bg-gradient-to-r from-indigo-950 to-slate-950">
        <main>
		    <NavbarProducts />
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold text-white mb-4">Checkout</h1>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <form @submit.prevent="submitCheckout">
                        <div class="mb-4">
                            <div id="card-element" class="border border-gray-300 rounded p-4">
                            <!-- A Stripe Element will be inserted here. -->
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
import { ref, type Ref, onMounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '@/composables/useCart';
import { onAuthStateChanged, type Auth } from 'firebase/auth';
import { type Stripe, type StripeCardElement, type StripeElements } from '@stripe/stripe-js';
import { checkoutStripe } from '@/composables/checkoutStripe';

const { checkout } = checkoutStripe();

export default {
    setup() {
        const router = useRouter();
        const { $auth, $stripe } = useNuxtApp();
        const { user } = useFirebaseAuth();
        const { total } = useCart();
        const cardElement: Ref<StripeCardElement | null> = ref(null);

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

        onMounted(async () => {
            if (!$stripe) {
                useSonner.error('Error!', {
                    description: 'Stripe is not initialized.',
                    duration: 2000,
                });
                return;
            }
            const elements: StripeElements = ($stripe as Stripe).elements();
            cardElement.value = elements.create('card', {
                style: {
                    base: {
                        color: '#32325d',
                        fontFamily: 'Arial, sans-serif',
                        fontSmoothing: 'antialiased',
                        fontSize: '16px',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#fa755a',
                        iconColor: '#fa755a',
                    },
                },
            });
            if (cardElement.value)
                cardElement.value.mount('#card-element');
        });
        
        // TODO: fix "Missing value for stripe.confirmCardPayment intent secret: value should be a client_secret string."
        const submitCheckout = async (): Promise<void> => {
            if ($stripe as Stripe && cardElement.value) {
                await checkout($stripe as Stripe);
            }
            else {
                useSonner.error('Error!', {
                    description: 'Stripe is not initialized!',
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
