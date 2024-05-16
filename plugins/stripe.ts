import { loadStripe } from "@stripe/stripe-js";

export default defineNuxtPlugin(async nuxtApp => {
    const config = useRuntimeConfig();
    
    try {
        const stripe = await loadStripe(config.public.STRIPE_PUBLIC_KEY);

        if (stripe) {
            nuxtApp.vueApp.provide('stripe', stripe);
            nuxtApp.provide('stripe', stripe);
        }
        else {
            console.log("Stripe failed to initialize - stripe instance is null.");
        }
    }
    catch (err) {
        console.error('Failed to initialize Stripe:', err);
    }
});
