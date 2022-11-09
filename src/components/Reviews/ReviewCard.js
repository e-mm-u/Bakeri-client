import React from 'react';

const ReviewCard = ({service_review}) => {
    const {review, userInfo} = service_review;
    console.log(service_review)
    return (
        <div className=''>
            <div className='flex items-center gap-2'>
                <img src={userInfo.photoURL} className='h-12 w-12 rounded-full' alt="user" />
                <p className='text-xl font-semibold uppercase'>{userInfo.displayName}</p>
            </div>
            <div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;