import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useBookings from '../../../Hooks/useBookings';
import { FaCheckCircle } from 'react-icons/fa';


const ManageBooking = () => {
    const [bookings, refetch] = useBookings();
    const axiosSecure = useAxiosSecure();
    return (
        <div>
            <SectionTitles heading="manage all bookings" subHeading="At a Glance"></SectionTitles>

            {/* Total items */}
            <h2 className="text-lg font-semibold mb-4">
                Total items: {bookings.length}
            </h2>

            {/* Table */}
            <div className="overflow-x-auto bg-gray-100">
                <table className="w-full">
                    <thead>
                        <tr className="bg-orange-400 text-left">
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone Number</th>
                            <th className="p-3">Booking Date</th>
                            <th className="p-3">Booking Time</th>
                            <th className="p-3">Activity</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((b) => (
                            <tr
                                key={b.id}
                            >
                                <td className="p-3">{b.email}</td>
                                <td className="p-3">{b.phone}</td>
                                <td className="p-3">{b.date}</td>
                                <td className="p-3">{b.time}</td>
                                <td className="p-3 font-medium">
                                    {b.status === "Pending" ? (
                                        <span className="text-orange-500 font-semibold">Pending</span>
                                    ) : (
                                        <span className="text-green-600 font-semibold">Done</span>
                                    )}
                                </td>
                                <td className="p-3">
                                    {b.status === "Done" ? (
                                        <button className="bg-white rounded-full">
                                            <FaCheckCircle size={26} color='green' />
                                        </button>
                                    ) : (
                                        <button className="bg-white rounded-full">
                                            <FaCheckCircle size={26} color='green' />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooking;

