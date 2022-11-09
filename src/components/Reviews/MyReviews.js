import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    // ____________________________________________
    //_______fetch myreviews based on user email___
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

    // ____________________________________________
    //_______ handle review delete ___
    const handleReviewDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method : 'DELETE',
        })
        .then( res => res.json())
        .then( data => {
            if(data.deletedCount > 0){
                alert('deleted successfully')
                const remainingReviews = myreviews.filter(review => review._id !== id);
                setMyreviews(remainingReviews);
            }
        })
    }

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
                                    handleReviewDelete={handleReviewDelete}
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