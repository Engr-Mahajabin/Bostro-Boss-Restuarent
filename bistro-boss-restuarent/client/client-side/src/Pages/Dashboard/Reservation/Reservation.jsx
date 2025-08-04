import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import InfoCards from '../../../Components/InfoCards';
import { BsTable } from "react-icons/bs";


const Reservation = () => {
    return (
        <div>
            <SectionTitles heading="book a table" subHeading="Reservation"></SectionTitles>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Date */}
                <div>
                    <label className="block text-sm font-medium mb-1">Date*</label>
                    <input
                        type="date"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Time */}
                <div>
                    <label className="block text-sm font-medium mb-1">Time*</label>
                    <input
                        type="time"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Guests */}
                <div>
                    <label className="block text-sm font-medium mb-1">Guest*</label>
                    <select className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400">
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
                        placeholder="Your Name"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium mb-1">Phone*</label>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email*</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
            </form>

            {/* Button */}
            <div className="text-center mt-8 mb-24">
                <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-yellow-600 inline-flex items-center gap-2"
                >
                    Book A Table<BsTable />
                </button>
            </div>

            {/* Info section */}
            <SectionTitles heading="our location" subHeading="Visit Us"></SectionTitles>
            <InfoCards></InfoCards>
        </div>
    );
};

export default Reservation;