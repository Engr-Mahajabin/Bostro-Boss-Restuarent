import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }

        //Confirm payment:
        const { paymentIntent, error: confirmError } = await stripe.
            confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            })

        if (confirmError) {
            console.log('Payment Confirmation Error', confirmError);
            setError(confirmError.message);
        } else {
            console.log('PaymentIntent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                //console.log('Transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
            }
        }

        // Now save the payment in the database:
        const payment = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            cartIds: cart.map(item => item._id),
            menuItemIds: cart.map(item => item.menuId),
            status: 'pending'
        }

        const res = await axiosSecure.post('/payments', payment);
        console.log('Payment saved', res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for payment",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            <div className="flex justify-center mt-16">
                <button
                    className='btn btn-sm btn-primary w-sm'
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </div>
            <p className='text-red-700 text-center mt-6'>{error}</p>
            {transactionId && <p className='text-green-600'>Your transaction id:{transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;