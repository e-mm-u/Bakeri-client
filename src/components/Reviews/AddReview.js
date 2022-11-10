import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = ({ service }) => {
    useTitle('AddReviews-Bakeri');

    const { user } = useContext(AuthContext);
    const [review, setReview] = useState({})
    // ------------------ create and set review ---------
    const createReview = event => {
        const customer_review = event.target.value;
        const { email, displayName, photoURL, uid } = user;
        const { name, _id } = service;

        const reviewInfo = { ...review };
        reviewInfo['review'] = customer_review;
        reviewInfo['userInfo'] = { email, displayName, photoURL, uid };
        reviewInfo['serviceInfo'] = { name, _id, photoURL: service.photoURL };

        console.log('before set and fetch post', reviewInfo);
        setReview(reviewInfo);
        console.log('after setting ', review);
    }

    //  --------------- POST / add review ------------
    const handleAddReview = event => {
        event.preventDefault();
        // ______________________________________
        // ____________________ fetch - post ____
        fetch('https://bakery-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data from .then data addReview client', data)
                if (data.acknowledged) {
                    console.log('1 knwlg 1')
                    alert('You have succesfully added a review')
                    event.target.reset()
                }
            })
    }


    return (
        <div>
            {user ?
                <div className='text-center'>
                    <form onSubmit={handleAddReview} className="form-control">
                        <div className='flex flex-col items-center justify-center'>
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Write a review :</span>
                            </label>
                            <textarea onBlur={createReview} type="text" name='review' placeholder=" " className="textarea textarea-bordered h-24 w-full max-w-sm" required />
                        </div>
                        <div className='my-3'>
                            <input type="submit" value="Add review" className='btn btn-warning' />
                        </div>
                    </form>
                </div>
                :
                <>
                    <label htmlFor="my-modal" className="btn">Add review</label>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <p className="py-4">You must log in to add a review here.</p>
                            <Link to='/login' className='btn'>Login</Link>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">X</label>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default AddReview;