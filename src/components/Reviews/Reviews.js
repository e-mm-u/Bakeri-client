import React, { useEffect, useState } from 'react';
import AddReview from './AddReview';
import ReviewCard from './ReviewCard';

const Reviews = ({ service }) => {
    const { _id } = service;
    const [allReviews, setAllreviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
        .then(res => res.json())
        .then(data => {setAllreviews(data); console.log(data)})
    },[_id])

    return (
        <div>
            <AddReview service={service}></AddReview>
            <h1 className='text-3xl'>All Reviews ({allReviews.length})</h1>
            {
                allReviews.map(review =>
                    <ReviewCard key={review._id} service_review={review}> </ReviewCard>
                )
            }
        </div>
    );
};

export default Reviews;