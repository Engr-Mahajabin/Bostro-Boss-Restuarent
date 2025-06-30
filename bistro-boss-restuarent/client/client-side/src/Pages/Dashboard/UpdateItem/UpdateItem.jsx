import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; // ? ta na dile kaj kore na 

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { _id, name, category, recipe, price } = useLoaderData();

    const onSubmit = async (data) => {
        console.log(data);

        //Image upload to imgbb and get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // Now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);

            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('With image url', res.data);
    }

    return (
        <div>
            <SectionTitles heading="Update Item" subHeading="Need To!"></SectionTitles>
            <div className='bg-gray-100 p-12'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Recipe Name */}
                    <div className="form-control my-6 w-full">
                        <label className="label-text">Recipe Name*</label>
                        <input {...register("name", { required: true })} type="text" className="input w-full" defaultValue={name} placeholder="Recipe Name" />
                    </div>

                    <div className='flex gap-6'>
                        {/* Category */}
                        <div className="form-control my-6 w-full">
                            <label className="label-text">Category*</label>
                            <select {...register("category", { required: true })} defaultValue={category} className="select w-full">
                                <option disabled={true}>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div className="form-control my-6 w-full">
                            <label className="label-text">Price*</label>
                            <input {...register("price", { required: true })} type="number" className="input w-full" defaultValue={price} placeholder="Price" />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="form-control my-6 w-full">
                        <label className="label-text">Recipe Details*</label>
                        <br />
                        <textarea {...register("recipe", { required: true })} className="textarea w-full h-36" defaultValue={recipe} placeholder="Recipe Details"></textarea>
                    </div>

                    {/* File Input */}
                    <div>
                        <input {...register("image", { required: true })} type="file" className="file-input" />
                    </div>

                    {/* Button */}
                    <div className='my-6'>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-orange-400 text-white">
                            Update The Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;