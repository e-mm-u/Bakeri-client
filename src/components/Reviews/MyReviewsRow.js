import React from 'react';

const MyReviewsRow = ({myreview}) => {
    const {serviceInfo, review} = myreview;
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
                <button className="btn btn-ghost btn-xs">Update</button>
                <button className="btn btn-ghost btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default MyReviewsRow;