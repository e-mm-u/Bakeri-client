import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../Services/ServicesCard';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/services?limit=${3}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div className='my-4 '>
            <h1 className='text-3xl flex justify-center font-bold mb-8'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-4'>
            {
                services.map(service => 
                    <ServicesCard key={service._id} service={service}></ServicesCard>
                )
            }
            </div>
            <Link to='/services' className='btn btn-info'> See all services </Link>
        </div>
    );
};

export default Home;