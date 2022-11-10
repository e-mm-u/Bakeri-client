import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../Services/ServicesCard';
import Banner from './Banner';
import MyStory from './MyStory';
import Subscribe from './Subscribe';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/services?limit=${3}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div className='my-4 '>
            <Banner></Banner>
            <h1 className='divider text-3xl flex justify-center font-bold my-8'>My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-4'>
            {
                services.map(service => 
                    <ServicesCard key={service._id} service={service}></ServicesCard>
                )
            }
            </div>
            <div className='text-center mt-3 mb-4'>
            <Link to='/services' className='btn btn-warning'> See all services </Link>
            </div>
            <Subscribe></Subscribe>
            <MyStory></MyStory>
        </div>
    );
};

export default Home;