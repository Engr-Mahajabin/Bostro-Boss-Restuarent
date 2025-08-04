import React from 'react';
import { PiPhoneCallFill } from "react-icons/pi";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const cards = [
    {
        icon: PiPhoneCallFill,
        title: 'PHONE',
        content: '+88 0123 45 6789',
    },
    {
        icon: FaMapMarkerAlt,
        title: 'ADDRESS',
        content: '123 Gulshan Ave, Dhaka',
    },
    {
        icon: FaClock,
        title: 'WORKING HOURS',
        content: 'Mon - Fri: 9AM - 10PM\nSat - Sun: 10AM - 11PM',
    },
];

const InfoCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto mb-24">
            {cards.map((card, index) => (
                <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
                    <div className="bg-orange-400 p-4 flex justify-center items-center">
                        <card.icon className="text-white text-2xl" />
                    </div>
                    <div className="text-center p-6">
                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{card.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoCards;
