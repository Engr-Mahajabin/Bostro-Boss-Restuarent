import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaCalendarCheck, FaHome, FaShoppingCart, FaStar, FaWallet } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* Dashboard side bar */}
            <div className='w-64 min-h-screen bg-orange-400'>
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
                        My Cart</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/addReview'>
                        <FaStar></FaStar>
                        Add Review</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/myBooking'>
                        <FaCalendarCheck></FaCalendarCheck>
                        My Booking</NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;