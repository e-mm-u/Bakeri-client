import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    useTitle('ServiceDetails-Bakeri');

    const service = useLoaderData();
    const { photoURL, name, title, details, price, rating } = service;//useLoaderData()[0];

    return (
        <div>
            {/* service details  */}
            <div>
                <img src={photoURL} alt="" />
                <h1>{name}</h1>
                <h3>{title}</h3>
                <small>{details}</small>
                <p>{price}</p>
                <p>{rating}</p>
            </div>
            {/* review details */}
            <Reviews service={service}></Reviews>
        </div>
    );
};

export default ServiceDetails;