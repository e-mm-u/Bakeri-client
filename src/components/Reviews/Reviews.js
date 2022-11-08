import React from 'react';
import AddReview from './AddReview';
import ReviewCard from './ReviewCard';

const Reviews = ({ service }) => {

    const allreviews = [];
    return (
        <div>
            <AddReview service={service}></AddReview>
            <h1 className='text-3xl'>All Reviews(10)</h1>
            {
                allreviews.map(review =>
                    <ReviewCard review={review}> </ReviewCard>
                )
            }
        </div>
    );
};

export default Reviews;