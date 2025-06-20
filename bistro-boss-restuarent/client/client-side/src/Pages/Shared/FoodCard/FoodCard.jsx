import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch]=useCart();

    const handleAddToCart = food => {

        if (user && user.email) {
            //Todo: sent cart item to the database
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    // Item cart a add hole alert jabe
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //Refetch the cart to update the cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send the user to the login page 
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="food" />
                </figure>
                <p className='bg-slate-800 text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
                <div className="card-body items-center text-center flex flex-col">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-400 uppercase">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;