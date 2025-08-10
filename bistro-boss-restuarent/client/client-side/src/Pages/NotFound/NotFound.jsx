import React from "react";
import { Link } from "react-router-dom";
import notfoundImg from '../../assets/404.gif';
import { FaHome } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <img
                src={notfoundImg}
                alt="404 Not Found"
                className="w-96 h-auto"
            />
            <Link
                to="/"
                className="bg-orange-500 text-white py-2 px-6 rounded inline-flex items-center gap-2"
            >
                Back To Home <FaHome></FaHome>
            </Link>
        </div>
    );
};

export default NotFound;
