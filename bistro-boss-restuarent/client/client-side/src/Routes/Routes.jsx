import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import Shop from "../Pages/Shop/Shop.jsx";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import Secret from "../Pages/Shared/Secret/Secret.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import Cart from "../Pages/Dashboard/Cart/Cart.jsx";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers.jsx";
import AddItems from "../Pages/Dashboard/AddItems/AddItems.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems.jsx";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem.jsx";
import Payment from "../Pages/Dashboard/Payment/Payment.jsx";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory.jsx";
import UserHome from "../Pages/Dashboard/UserHome/UserHome.jsx";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome.jsx";
import Reservation from "../Pages/Dashboard/Reservation/Reservation.jsx";

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
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            //Normal User Routes:
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },

            // Only Admin Routes:
            {
                path: 'adminHome',
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: 'addItems',
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: 'manageItems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
        ]
    }
]);

