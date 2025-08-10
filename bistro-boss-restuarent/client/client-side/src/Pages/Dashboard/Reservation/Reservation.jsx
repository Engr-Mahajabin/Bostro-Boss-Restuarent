import React, { useState } from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import InfoCards from '../../../Components/InfoCards';
import { BsTable } from "react-icons/bs";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Reservation = () => {
    const axiosSecure = useAxiosSecure();

    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "1 Person",
        name: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleBooking = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosSecure.post("/bookings", formData);

            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your table has been reserved.",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    // Reset form data here
                    setFormData({
                        date: "",
                        time: "",
                        guests: "1 Person",
                        name: "",
                        phone: "",
                        email: ""
                    });
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Something went wrong!", "error");
        }
    };

    return (
        <div>
            <SectionTitles heading="book a table" subHeading="Reservation" />

            {/* form submit handler */}
            <form
                onSubmit={handleBooking}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* Date */}
                <div>
                    <label className="block text-sm font-medium mb-1">Date*</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Time */}
                <div>
                    <label className="block text-sm font-medium mb-1">Time*</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Guests */}
                <div>
                    <label className="block text-sm font-medium mb-1">Guest*</label>
                    <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4+ People</option>
                    </select>
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">Name*</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium mb-1">Phone*</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email*</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Button */}
                <div className="col-span-full text-center mt-8 mb-24">
                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-2 px-6 rounded inline-flex items-center gap-2"
                    >
                        Book A Table <BsTable />
                    </button>
                </div>
            </form>

            <SectionTitles heading="our location" subHeading="Visit Us" />
            <InfoCards />
        </div>
    );
};

export default Reservation;
