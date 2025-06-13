import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import Shop from "../Pages/Shop/Shop.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'shop/:category',
                element: <Shop></Shop>
            },
        ]
    },
]);

