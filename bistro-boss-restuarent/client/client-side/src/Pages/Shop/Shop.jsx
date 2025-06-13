import React, { useState } from 'react';
import shopImg from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import ShopTab from '../ShopTab/ShopTab';
import { useParams } from 'react-router-dom';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();

    const { category } = useParams();
    console.log(category);
    const drinks = menu.filter((item) => item.category === "drinks");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");

    return (
        <div className='uppercase'>
            <Cover img={shopImg} title="Our Shop"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                    <ShopTab items={salad}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={pizza}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={soup}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={dessert}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={drinks}></ShopTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Shop;