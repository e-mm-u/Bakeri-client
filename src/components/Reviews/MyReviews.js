import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`, {
            // pore jwt er kaj hobe ekhane
        })
            .then(res => {
                // jwt related code hobe
                return res.json()
            })
            .then(data => setMyreviews(data))

    }, [user?.email])

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        myreviews.map(review =>
                            <MyReviewsRow
                                key={review._id}
                                myreview={review}
                            ></MyReviewsRow>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;