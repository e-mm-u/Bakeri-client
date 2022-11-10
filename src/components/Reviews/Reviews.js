import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AddReview from './AddReview';
import ReviewCard from './ReviewCard';

const Reviews = ({ service }) => {
    useTitle('Reviews-Bakeri');

    const { _id } = service;
    const [allReviews, setAllreviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => { setAllreviews(data); console.log(data) })
    }, [_id])

    return (
        <div>
            <AddReview service={service}></AddReview>
            <div className='text-center'>
                <p className='divider'></p>
                <h1 className='text-3xl'>All Reviews ({allReviews.length})</h1>
                <div className='my-3 p-5'>
                {
                    allReviews.map(review =>
                        <ReviewCard key={review._id} service_review={review}> </ReviewCard>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Reviews;