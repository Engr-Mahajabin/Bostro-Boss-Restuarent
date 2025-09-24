// import React from 'react';
// import useAuth from '../../../Hooks/useAuth';

// const UserHome = () => {
//     const { user } = useAuth();
//     return (
//         <div>
//             <h2 className='text-3xl'>
//                 <span>Hi, Welcome Back! </span>
//                 {
//                     user?.displayName ? user.displayName : 'Back'
//                 }
//             </h2>
//         </div>
//     );
// };

// export default UserHome;



// import React from "react";

// const UserActivityDashboard = () => {
//     const user = {
//         name: "Awlad Hossain",
//         activities: { orders: 6, reviews: 2, bookings: 1, payments: 3 },
//         stats: { menu: 205, shop: 103, contact: 3 },
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-pink-50 to-yellow-50 p-8">
//             Greeting
//             <h1 className="text-2xl font-semibold mb-6">Hi, Welcome Back!</h1>

//             {/* Top Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
//                 <div className="bg-gradient-to-r from-purple-400 to-purple-300 p-6 rounded-2xl text-white shadow">
//                     <p className="text-lg font-medium">Menu</p>
//                     <p className="text-3xl font-bold mt-2">{user.stats.menu}</p>
//                 </div>
//                 <div className="bg-gradient-to-r from-yellow-400 to-orange-300 p-6 rounded-2xl text-white shadow">
//                     <p className="text-lg font-medium">Shop</p>
//                     <p className="text-3xl font-bold mt-2">{user.stats.shop}</p>
//                 </div>
//                 <div className="bg-gradient-to-r from-pink-400 to-red-300 p-6 rounded-2xl text-white shadow">
//                     <p className="text-lg font-medium">Contact</p>
//                     <p className="text-3xl font-bold mt-2">{user.stats.contact}</p>
//                 </div>
//             </div>

//             {/* Activity Section */}
//             <div className="bg-white p-8 rounded-2xl shadow grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Profile Circle */}
//                 <div className="flex flex-col items-center justify-center">
//                     <div className="w-32 h-32 border-4 border-yellow-400 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700">
//                         {user.name[0]}
//                     </div>
//                     <p className="mt-4 text-lg font-medium">{user.name}</p>
//                 </div>

//                 {/* Activity Stats */}
//                 <div className="flex flex-col justify-center">
//                     <h2 className="text-xl font-semibold mb-4">Your Activities</h2>
//                     <p className="text-gray-600 mb-2">🛒 Orders: {user.activities.orders}</p>
//                     <p className="text-gray-600 mb-2">⭐ Reviews: {user.activities.reviews}</p>
//                     <p className="text-gray-600 mb-2">📅 Bookings: {user.activities.bookings}</p>
//                     <p className="text-gray-600 mb-2">💰 Payments: {user.activities.payments}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserActivityDashboard;


import React from "react";

const UserHome = () => {
    const user = { name: "Mahajabin" }; // এইটা context/auth থেকে আসবে
    const stats = [
        { title: "Reservations", value: 2 },
        { title: "Orders", value: 5 },
        { title: "Payments", value: 3 },
        { title: "Notifications", value: 1 },
    ];

    return (
        <div className="p-6">
            {/* Welcome */}
            <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name} 👋</h2>
            <p className="text-gray-600 mb-6">Here’s a quick look at your dashboard.</p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="p-6 bg-white shadow rounded-xl text-center hover:shadow-lg transition"
                    >
                        <p className="text-3xl font-bold text-blue-500">{item.value}</p>
                        <p className="mt-2 text-gray-700">{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Upcoming Reservation Example */}
            <div className="bg-white p-6 shadow rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Upcoming Reservation</h3>
                <p className="text-gray-700">📅 25 Aug 2025 at 7:00 PM, 4 Guests</p>
            </div>
        </div>
    );
};

export default UserHome;

