import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaStar, FaShoppingCart } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";

const UserDashboard = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // Fetch user-specific stats dynamically
    const { data: userStats = {}, isLoading } = useQuery({
        queryKey: ["user-stats", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-stats?email=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });

    if (isLoading) {
        return (
            <p className="text-center text-gray-500 mt-10">
                Loading your dashboard...
            </p>
        );
    }

    return (
        <div className="p-6">
            {/* Header */}
            <h2 className="text-3xl font-semibold mb-6">
                Welcome back,{" "}
                <span className="text-orange-600">
                    {user?.displayName || "User"}
                </span>
                👋
            </h2>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow rounded-lg p-4 flex items-center gap-3">
                    <FaBook className="text-4xl text-orange-500" />
                    <div>
                        <h4 className="text-gray-500 text-sm">Total Bookings</h4>
                        <p className="text-2xl font-bold">{userStats.bookings || 0}</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-4 flex items-center gap-3">
                    <FaStar className="text-4xl text-yellow-400" />
                    <div>
                        <h4 className="text-gray-500 text-sm">Total Reviews</h4>
                        <p className="text-2xl font-bold">{userStats.reviews || 0}</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-4 flex items-center gap-3">
                    <BiSolidFoodMenu className="text-4xl text-blue-500" />
                    <div>
                        <h4 className="text-gray-500 text-sm">Total Menu Items</h4>
                        <p className="text-2xl font-bold">{userStats.menuItems || 0}</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-4 flex items-center gap-3">
                    <FaShoppingCart className="text-4xl text-green-500" />
                    <div>
                        <h4 className="text-gray-500 text-sm">Total Orders</h4>
                        <p className="text-2xl font-bold">{userStats.orders || 0}</p>
                    </div>
                </div>
            </div>

            {/* Optional sections below */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recommended Dishes */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-3 text-orange-600">
                        🍽 Recommended for You
                    </h3>
                    {userStats.recommended?.length ? (
                        <ul className="space-y-2 text-gray-700">
                            {userStats.recommended.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 italic">No recommendations yet.</p>
                    )}
                </div>

                {/* Recent Reviews */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600">
                        ⭐ Your Recent Reviews
                    </h3>
                    {userStats.recentReviews?.length ? (
                        <ul className="space-y-2 text-gray-700">
                            {userStats.recentReviews.map((rev, idx) => (
                                <li key={idx}>“{rev}”</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 italic">
                            You haven’t added any reviews yet.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
