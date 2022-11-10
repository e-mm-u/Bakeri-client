import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    useTitle('AddReviews-Bakeri');

    const myReview = useLoaderData()[0];
    const { _id, review } = myReview;

    const [updateReview, setUpdateReview] = useState(myReview)

    const handleUpdateReview = event =>{
        event.preventDefault();

        fetch(`https://bakery-server.vercel.app/reviews/${_id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('fetch out done');
            if(data.modifiedCount){
                alert('review updated successfully');
            }
        })
    }

    const handleEditedReview = event => {
        const newReview = {...updateReview};
        newReview["review"] = event.target.value ;
        setUpdateReview(newReview)
    }

    return (
        <div className='text-center flex items-center justify-center h-[40vh]'>
            <form onSubmit={handleUpdateReview} className="form-control">
                <div className='flex flex-col items-center justify-center w-[50vw]'>
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Edit your review :</span>
                    </label>
                    <textarea onBlur={handleEditedReview} type="text" name='review' defaultValue={review} placeholder=" " className="textarea textarea-bordered h-24 w-full max-w-sm" required />
                </div>
                <div className='my-3'>
                    <input type="submit" value="Update" className='btn btn-warning' />
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;