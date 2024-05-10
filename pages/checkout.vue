<template>
    <section class="page bg-gradient-to-r from-indigo-950 to-slate-950">
        <main>
		    <NavbarProducts />
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold text-white mb-4">Checkout</h1>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <form @submit.prevent="checkout">
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
import { onBeforeMount } from 'vue';
import { useCart } from '@/composables/useCart';
import { onAuthStateChanged, type Auth } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
    async setup() {
        const { total, clearCart } = useCart();
        const router = useRouter();
        const { $auth, $stripe } = useNuxtApp();
        const { user } = useFirebaseAuth();

        onBeforeMount(() => {
            onAuthStateChanged($auth as Auth, (firebaseUser) => {
                if(firebaseUser)
                {
                    user.value = firebaseUser;
                    // useSonner.info('User is logged in as ' + firebaseUser.email);
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

        const stripe = await $stripe;

        async function checkout() {
            const { id: clientSecret } = await fetch('/api/payment-intent')
            .then((res) => res.json());

            const { error } = await (stripe as any).confirmCardPayment(clientSecret, {
                payment_method: {
                    card: (stripe as any).elements.getElement('card'),
                },
            });

            if (error) {
                useSonner.error('Error!', {
                    description: error.message,
                    duration: 2000,
                });
            } else {
                useSonner.success('Success!', {
                    description: 'Payment successful.',
                    duration: 2000,
                });

                clearCart();
                router.push('/success');
            }
        }
        return { checkout, total };
    }
}

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
