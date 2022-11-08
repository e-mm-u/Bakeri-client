import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData();
    // console.log(services)
    return (
        <div className='my-4'>
            <h1 className='text-3xl flex justify-center font-bold mb-8'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {
                    services.map(service =>
                        <ServicesCard key={service.c_id} service={service}></ServicesCard>
                    )
                }
            </div>
        </div>
    );
};

export default Services;