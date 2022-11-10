import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    useTitle('ServiceDetails-Bakeri');

    const service = useLoaderData();
    const { photoURL, name, title, details, price, rating } = service;//useLoaderData()[0];

    return (
        <div>
            {/* service details  */}
            <div className='card my-8 text-center'>
                <div className='flex justify-center align-center'>
                    <PhotoProvider>
                        <PhotoView src={photoURL}>
                            <img className='' src={photoURL} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
               <div className='card-body '>
               <h1 className='text-3xl font-bold'>{name}</h1>
                <h3 className='text-xl font-bold'>{title}</h3>
                <small className='text-lg'>{details}</small>
                <p className='font-semibold'>Price {price}</p>
                <p className='font-semibold'>Rating : {rating}</p>
               </div>
            </div>
            {/* review details */}
            <p className='divider'> ' ' ' ' ' ' ' ' ' </p>
            <Reviews service={service}></Reviews>
        </div>
    );
};

export default ServiceDetails;