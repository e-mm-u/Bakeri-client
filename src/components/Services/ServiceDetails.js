import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()[0];
    const {photoURL, name, title, details, price, rating} = service;//useLoaderData()[0];

    return (
        <div>
            <img src={photoURL} alt="" />
            <h1>{name}</h1>
            <h3>{title}</h3>
            <small>{details}</small>
            <p>{price}</p>
            <p>{rating}</p>
        </div>
    );
};

export default ServiceDetails;