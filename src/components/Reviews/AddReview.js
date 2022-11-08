import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';

const AddReview = ({ service }) => {

    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const { email, displayName, photoURL, uid } = user;
        const { name, _id } = service;

        const review = event.target.review.value;
        const reviewInfo = {
            review,
            userInfo: {
                email,
                displayName,
                photoURL,
                uid
            },
            serviceInfo: {
                name,
                _id
            }
        };
        console.log(reviewInfo);
    }

    return (
        <div>
            {user ?
                <>
                    <form onSubmit={handleSubmit} className="form-control">
                        <div>
                            <label className="label">
                                <span className="label-text">Write a review :</span>
                            </label>
                            <textarea type="text" name='review' placeholder=" " className="textarea textarea-bordered h-24 w-full max-w-sm" required />
                        </div>
                        <div>
                            <input type="submit" value="Add" className='btn' />
                        </div>
                    </form>
                </>
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