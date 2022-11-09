import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../components/Blogs/Blogs';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import NotFound from '../components/Others/NotFound';
import ServiceDetails from '../components/Services/ServiceDetails';
import Services from '../components/Services/Services';
import Main from '../Layouts/Main';
import PrivateRoutes from './PrivateRoutes';
import MyReviews from '../components/Reviews/MyReviews'
import AddService from '../components/Services/AddService';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            // ----------------------- home page
            {
                path: '/',
                element: <Home></Home>
            },
            // ----------------------- services page
            {
                path: '/services',
                element: <Services></Services>,
                loader : ()=> fetch('http://localhost:5000/services/') 
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path : '/services/add',
                element : <AddService></AddService>
            },
            //  ------------------ reviews
            {
                path : '/myReviews',
                element : <PrivateRoutes> <MyReviews></MyReviews> </PrivateRoutes>,
            },
            // ----------------------------- blog page
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
             // ----------------------------- login page
             {
                path: '/login',
                element: <Login></Login>
            },
             // ----------------------------- register page
             {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    //  ------------------- 404 page
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
export default routes;