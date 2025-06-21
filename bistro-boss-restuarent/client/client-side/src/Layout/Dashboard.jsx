import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaCalendarCheck, FaEnvelope, FaHome, FaList, FaShopify, FaShoppingCart, FaStar, FaWallet } from 'react-icons/fa';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className='flex'>
            {/* Dashboard side bar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <h1 className='text-3xl text-bold'>Bistro Boss Restuarent</h1>

                <div className="divider"></div>

                <ul className='menu'>
                    <li><NavLink to='/dashboard/userHome'>
                        <FaHome></FaHome>
                        User Home</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/reservation'>
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/paymentHistory'>
                        <FaWallet></FaWallet>
                        Payment History</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart({cart.length})</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/addReview'>
                        <FaStar></FaStar>
                        Add Review</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/myBooking'>
                        <FaCalendarCheck></FaCalendarCheck>
                        My Booking</NavLink>
                    </li>

                    <div className="divider"></div>

                    <li><NavLink to='/dashboard/userHome'>
                        <FaHome></FaHome>
                        User Home</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/menu'>
                        <FaList></FaList>
                        Menu</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/shop'>
                        <FaShopify></FaShopify>
                        Shop</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/contact'>
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                    </li>

                </ul>
            </div>

            {/* Dashboard Content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;