import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../components/Blogs/Blogs';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import NotFound from '../components/Others/NotFound';
import AddReview from '../components/Reviews/AddReview';
import ServiceDetails from '../components/Services/ServiceDetails';
import Services from '../components/Services/Services';
import Main from '../Layouts/Main';

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