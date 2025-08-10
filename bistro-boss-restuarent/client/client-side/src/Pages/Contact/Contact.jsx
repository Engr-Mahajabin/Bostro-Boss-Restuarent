import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import InfoCards from '../../Components/InfoCards';
import SectionTitles from '../../Components/SectionTitles';
import Cover from '../Shared/Cover/Cover';
import contactImg from '../../assets/contact/banner.jpg'


const Contact = () => {
    return (
        <div className='mb-20'>
            <Cover img={contactImg} title='Contact Us'></Cover>
            <SectionTitles heading="our location" subHeading="Visit Us"></SectionTitles>
            {/* Cards */}
            <InfoCards></InfoCards>
            {/* Contact Form */}
            <SectionTitles heading="contact form" subHeading="Send Us a Message"></SectionTitles>

            <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Name*</label>
                    <input type="text" placeholder="Enter your name" className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Email*</label>
                    <input type="email" placeholder="Enter your email" className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Phone*</label>
                    <input type="text" placeholder="Enter your phone number" className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="flex flex-col md:col-span-2">
                    <label className="mb-1 font-medium">Message*</label>
                    <textarea placeholder="Write your message here" rows={4} className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="md:col-span-2 text-center">
                    <button type="submit" className="bg-orange-500 text-white py-2 px-6 rounded inline-flex items-center gap-2">
                        Send Message <FaPaperPlane />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;