import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const stripePromise = loadStripe('pk_test_51RgRsk2eqnjv8WuAlu14cvZV81BhF6Mpx6CEjQRjQb5uSY5adl7y8nYhTSLOGAORAiHjLL4sRdwpHw0cTcQykbKn00IBqIOLvi');
// console.log("Stripe Key:", import.meta.env.VITE_PAYMENT_GATEWAY_PK);

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