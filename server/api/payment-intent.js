import { useCart } from '@/composables/useCart'
import Stripe from 'stripe';
const config = useRuntimeConfig();
const stripe = new Stripe(config.public.STRIPE_SECRET_KEY);

const { total } = useCart();

export default defineEventHandler(async (event) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'brl',
    });

    return { id: paymentIntent.client_secret };
});