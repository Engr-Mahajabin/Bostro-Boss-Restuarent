import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 mb-10'>
            <SectionTitles subHeading={'Check it out'} heading={'From Our Menu'}></SectionTitles>
            <div className='md:flex justify-center items-center py-16 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March30,2025</p>
                    <p className='uppercase'>Can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti voluptas illum possimus ex repellat ut mollitia at, rerum tenetur! Optio repellat illo eveniet ipsa quia omnis debitis iste hic non, unde vel ipsam excepturi, nobis maiores ex aut officiis nostrum praesentium quis. Modi fuga adipisci corrupti aliquam quibusdam quis.</p>
                    <button className="btn btn-outline mt-8 border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;