import React from 'react';
import Banner from '../Banner/Banner.jsx';
import Category from '../Category/Category.jsx';
import PopularMenu from '../PopularMenu/PopularMenu.jsx';
import Featured from '../Featured/Featured.jsx';
import Testimonials from '../Testimonials/Testimonials.jsx';
import CompanyBrief from '../Company_brief.jsx/CompanyBrief.jsx';
import CallUs from '../CallUs/CallUs.jsx';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <CompanyBrief></CompanyBrief>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;