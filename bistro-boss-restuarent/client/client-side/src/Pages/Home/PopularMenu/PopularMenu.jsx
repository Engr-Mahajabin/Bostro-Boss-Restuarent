// import React, { useEffect, useState } from 'react';
import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, []);

    // Using custom hook to fetch menu data and filter popular items: 
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-12'>
            <SectionTitles subHeading={'Check it out'} heading={'from our menu'}></SectionTitles>

            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline mt-8 border-0 border-b-4">View More Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;