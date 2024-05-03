import { loadStripe } from "@stripe/stripe-js";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const stripe = loadStripe(config.public.STRIPE_PUBLIC_KEY);

    nuxtApp.vueApp.provide('stripe', stripe);
    nuxtApp.provide('stripe', stripe);
});
