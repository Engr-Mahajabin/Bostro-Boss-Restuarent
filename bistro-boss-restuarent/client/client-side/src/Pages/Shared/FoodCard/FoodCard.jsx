import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    const handleAddToCart = food => {
        console.log(food);
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