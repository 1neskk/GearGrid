import { type Stripe, type StripeCardElement } from '@stripe/stripe-js';
import { useCart } from './useCart';
import { useRouter } from 'vue-router';

export interface BillingDetails {
    name: string;
}

export interface PaymentMethodDetails {
    paymentMethod: {
        card: StripeCardElement;
        billing_details: BillingDetails;
    };
}

export const checkoutStripe = () => {
    const { clearCart } = useCart();
    const router = useRouter();
    
    async function checkout(stripe: Stripe): Promise<void> {
        const response = await fetch('/api/payment-intent');
        const { id: clientSecret } = await response.json() as { id: string };

        const paymentMethodDetails: PaymentMethodDetails = {
            paymentMethod: {
                card: stripe.elements().getElement('card') as StripeCardElement,
                billing_details: {
                    name: 'Jenny Rosen',
                },
            },
        };

        //console.log('Client Secret:', clientSecret);
        //console.log('Payment Method Details:', safeStringify(paymentMethodDetails));


        try {
            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: paymentMethodDetails.paymentMethod.card,
                    billing_details: paymentMethodDetails.paymentMethod.billing_details,
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
        } catch (err) {
            useSonner.error('Error!', {
                description: (err as Error).message,
                duration: 2000,
            });
        }
    }
    function safeStringify(obj: any, indent = 2): string {
        const seen = new WeakSet();
        return JSON.stringify(obj, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                    return '[Ciclic reference]';
                }
                seen.add(value);
            }
            return value;
        }, indent);
    }
    return { checkout };
};
