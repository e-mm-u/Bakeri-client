import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsRow = ({myreview, handleUpdateReviews, handleReviewDelete}) => {
    const {serviceInfo, review, _id} = myreview;
    // console.log(review)
    return (
        <tr>
            <td>
                {/* first column */}
                <div className="flex items-center gap-2">
                    <img className='h-16 w-16 rounded-lg border border-info' src={serviceInfo.photoURL} alt="alt" />
                    <p>{serviceInfo.name}</p>
                </div>
            </td>
            {/* second col - review */}
            <td>
                {review}
            </td>
            <td>
                <Link to={`/myReviews/edit/${_id}`} className="btn btn-ghost btn-xs">Edit</Link>
                <button onClick={()=> handleReviewDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default MyReviewsRow;