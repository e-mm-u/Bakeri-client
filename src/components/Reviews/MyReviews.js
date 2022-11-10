import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    useTitle('MyReviews-Bakeri');

    const { user, logout } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    // ____________________________________________
    //_______fetch myreviews based on user email___
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`, {
            // jwt
            headers: {
                authorization : `Bearer ${localStorage.getItem('jwToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    console.log(res.json())
                    return logout();
                }
                return res.json()
            })
            .then(data => setMyreviews(data))

    }, [logout, user.email])


    // ____________________________________________
    //_______ handle review update ___

    // ____________________________________________
    //_______ handle review delete ___
    const handleReviewDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remainingReviews = myreviews.filter(review => review._id !== id);
                    setMyreviews(remainingReviews);
                }
            })
    }
    // _______________________________________________________________________

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