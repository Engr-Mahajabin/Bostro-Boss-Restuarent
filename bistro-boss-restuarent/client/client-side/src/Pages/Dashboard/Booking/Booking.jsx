import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useBookings from '../../../Hooks/useBookings';
import { FaTrash } from 'react-icons/fa';

const Booking = () => {
    const [bookings, refetch] = useBookings();
    const axiosSecure = useAxiosSecure();

    // Calculate total price
    const totalPrice = bookings.reduce((sum, item) => sum + item.price, 0);

    const handleDelete = (booking) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This booking will be deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/bookings/${booking._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire("Deleted!", "The booking has been removed.", "success");
                }
            }
        });
    };

    return (
        <div>
            <SectionTitles heading="My Bookings" subHeading="Excellent Ambience"></SectionTitles>
            <div className="overflow-x-auto">
                {/* Top section */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">
                        TOTAL BOOKINGS: <span>{bookings.length}</span>
                    </h2>
                    <h2 className="text-xl font-semibold">
                        TOTAL PRICE: <span>${totalPrice}</span>
                    </h2>
                    <button className="bg-orange-400 text-black px-4 py-2 rounded">
                        PAY
                    </button>
                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table w-full bg-white shadow-lg rounded">
                        <thead>
                            <tr className="bg-orange-400 text-black">
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Guest Number</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={booking._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="w-12 h-12 overflow-hidden rounded">
                                            <img
                                                src={booking.image}
                                                alt={booking.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td>{booking.guests} guest</td>
                                    <td>${booking.category}</td>
                                    <td>${booking.price}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(booking)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaTrash className='text-orange-500'></FaTrash>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Booking;
