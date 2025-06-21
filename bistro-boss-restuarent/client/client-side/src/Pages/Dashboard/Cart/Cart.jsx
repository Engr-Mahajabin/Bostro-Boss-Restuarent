import React from 'react';
import useCart from '../../../Hooks/useCart';

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div>
                <h2 className='text-5xl'>Total Orders: {cart.length}</h2>
                <h2 className='text-5xl'>Total Price: {totalPrice}</h2>
                <button className='btn btn-primary'>Pay</button>
            </div>
        </div>
    );
};

export default Cart;