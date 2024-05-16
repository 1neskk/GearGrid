import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const stripe = new Stripe(config.public.STRIPE_SECRET_KEY, {
        apiVersion: '2022-11-15', // old version for now
    });

    const body = await readBody(event);
    const totalAmount = body.amount;

    if (typeof totalAmount !== 'number' || isNaN(totalAmount) || totalAmount <= 0) {
        return {
            statusCode: 400,
            error: 'Invalid total amount',
        };
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount,
            currency: 'brl',
        });

        return {
            client_secret: paymentIntent.client_secret,
        };
    } catch (error) {
        console.error("error creating payment intent", error);
        return {
            statusCode: 500,
            error: error.message,
        };
    }
});
