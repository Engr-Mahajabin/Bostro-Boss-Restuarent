import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import SectionTitles from '../../../Components/SectionTitles';
import Swal from "sweetalert2";

const AddReview = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [formData, setFormData] = useState({
        recipe: "",
        suggestion: "",
        review: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log({ rating, ...formData });
        Swal.fire({
            position: "top-end",
            title: "Success!",
            text: "Review submitted successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
    };
    return (
        <div>
            <SectionTitles heading='give a review' subHeading='Sharing is Caring'></SectionTitles>

            <div className="bg-gray-100 p-12">
                {/* Rating */}
                <div className="text-center mb-4 font-semibold">
                    <p className="mb-2 text-2xl">RATE US!</p>
                    <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => {
                            const ratingValue = i + 1;
                            return (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                        className="hidden"
                                    />
                                    <FaStar
                                        size={30}
                                        className="cursor-pointer"
                                        color={
                                            ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                                        }
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                    />
                                </label>
                            );
                        })}
                    </div>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-xl">
                    <div>
                        <label className="mb-4">
                            Which recipe you liked most?
                        </label>
                        <input
                            type="text"
                            name="recipe"
                            placeholder="Recipe you liked most"
                            value={formData.recipe}
                            onChange={handleChange}
                            className="w-full p-2 bg-white"
                        />
                    </div>

                    <div>
                        <label className="mb-4">
                            Do you have any suggestion for us?
                        </label>
                        <input
                            type="text"
                            name="suggestion"
                            placeholder="Suggestion"
                            value={formData.suggestion}
                            onChange={handleChange}
                            className="w-full p-2 bg-white"
                        />
                    </div>

                    <div>
                        <label className="mb-4">
                            Kindly express your care in a short way.
                        </label>
                        <textarea
                            name="review"
                            placeholder="Review in detail"
                            rows="5"
                            value={formData.review}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2  bg-orange-500  text-white p-2 rounded transition-all duration-200"
                    >
                        Send Review <FaRocket />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;