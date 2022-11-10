import React from 'react';
import { Link } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {
    const { _id, name, title, details, photoURL } = service;
    return (
        <div className="card w-96 glass h-100 w-full">
            <figure className='h-1/2'>
                <PhotoProvider>
                    <PhotoView src={photoURL}>
                        <img src={photoURL} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <small>{details.slice(0, 100)}...</small>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`} className='btn btn-warning'> Details </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;