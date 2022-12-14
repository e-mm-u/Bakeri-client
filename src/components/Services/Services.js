import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    useTitle('services-Bakeri');

    const services = useLoaderData();
    const [displayServices] = useState(services);
    // console.log(services)
    return (
        <div className='my-4 '>
            <h1 className='text-3xl flex justify-center font-bold mb-8'>My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-4'>

                {
                    displayServices.map(service =>
                        <ServicesCard key={service._id} service={service}></ServicesCard>
                    )
                }
            </div>
        </div>
    );
};

export default Services;