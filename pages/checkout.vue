<template>
    <section class="page bg-gradient-to-r from-indigo-950 to-slate-950">
        <main>
		    <NavbarProducts />
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold text-white mb-4">Checkout</h1>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <form @submit.prevent="submitCheckout">
                        <div class="mb-4">
                            <div class="text-black pb-8 flex justify-between">
                                <span>Total:</span>
                                <span class="font-bold">${{ total.toFixed(2) }}</span>
                            </div>
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
import { ref, type Ref, inject, onMounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '@/composables/useCart';
import { onAuthStateChanged, type Auth } from 'firebase/auth';
import { type Stripe, type StripeCardElement, type StripeElements } from '@stripe/stripe-js';

export default {
    setup() {
        const router = useRouter();
        const { $auth } = useNuxtApp();
        const { user } = useFirebaseAuth();
        const { total } = useCart();

        const stripe = inject<Stripe | undefined>('stripe');
        const cardElement: Ref<StripeCardElement | null> = ref(null);

        onBeforeMount(() => {
            onAuthStateChanged($auth as Auth, (firebaseUser) => {
                if(firebaseUser)
                {
                    user.value = firebaseUser;
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
            if (!stripe) {
                useSonner.error('Error!', {
                    description: 'Stripe has not been initialized.',
                    duration: 2000,
                });
                return;
            }
            
            const elements: StripeElements = stripe.elements();
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
        
        const submitCheckout = async (): Promise<void> => {
            if (!stripe || !cardElement.value) {
                useSonner.error('Error!', {
                    description: 'Stripe or Card Element not initialized.',
                    duration: 2000,
                });
                return;
            }

            try {
                const response = await fetch('/api/payment-intent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        amount: total.value * 100,
                    }),
                });

                if (!response.ok) {
                    const message = 'An error has occurred: ${response.status}';
                    useSonner.error('Error!', {
                        description: message,
                        duration: 2000,
                    });
                    throw new Error(message);
                }

                const data = await response.json();
                //console.log("Server response: ", data)

                const clientSecret = data.client_secret;
                if (!clientSecret) {
                    useSonner.error('Error!', {
                        description: 'Client secret not returned from server.',
                        duration: 2000,
                    });
                    return;
                }

                const result = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: cardElement.value,
                    },
                });

                if (result.error) {
                    useSonner.error('Error!', {
                        description: result.error.message,
                        duration: 2000,
                    });
                } else {
                    if (result.paymentIntent?.status === 'succeeded') {
                        useSonner.success('Success!', {
                            description: 'Payment succeeded.',
                            duration: 2000,
                        });
                    }
                }
            }
            catch (error) {
                useSonner.error('Error!', {
                    description: (error as Error).message,
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
