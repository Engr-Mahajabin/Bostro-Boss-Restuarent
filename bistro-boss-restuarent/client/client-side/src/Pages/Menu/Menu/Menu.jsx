import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitles from "../../../Components/SectionTitles";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter((item) => item.category === "offered");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Main cover */}
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitles
                subHeading="Don't Miss"
                heading="today's offer"
            ></SectionTitles>

            {/* Offered items */}
            <MenuCategory
                items={offered}>
            </MenuCategory>

            {/* Dessert items */}
            <MenuCategory
                items={dessert}
                title={"Desserts"}
                img={dessertImg}
            ></MenuCategory>

            {/* pizza items */}
            <MenuCategory
                items={pizza}
                title={"Pizza"}
                img={pizzaImg}>
            </MenuCategory>

            {/* salad items */}
            <MenuCategory
                items={salad}
                title={"salads"}
                img={saladImg}
            ></MenuCategory>

            {/* soup items */}
            <MenuCategory
                items={soup}
                title={"soups"}
                img={soupImg}>
            </MenuCategory>
        </div>
    );
};

export default Menu;
