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

        fetch(`http://localhost:5000/reviews/${_id}`, {
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
        <div>
            <form onSubmit={handleUpdateReview} className="form-control">
                <div>
                    <label className="label">
                        <span className="label-text">Edit your review :</span>
                    </label>
                    <textarea onBlur={handleEditedReview} type="text" name='review' defaultValue={review} placeholder=" " className="textarea textarea-bordered h-24 w-full max-w-sm" required />
                </div>
                <div>
                    <input type="submit" value="Update" className='btn' />
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;