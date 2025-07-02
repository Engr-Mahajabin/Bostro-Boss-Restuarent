import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
console.log(stripePromise);

const Payment = () => {
    return (
        <div>
            <SectionTitles heading="Payment" subHeading="Want to confirm the order?"></SectionTitles>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;