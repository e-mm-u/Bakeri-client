import React from 'react';

const Subscribe = () => {
    return (
        <div className='h-48 bg-base-200 flex items-center justify-center'>
            <div className="form-control">
            <h1 className='font-medium mb-3'>Stay in touch with us via newsletter direct in your mailbox</h1>
                <label className="input-group">
                    <span>Email</span>
                    <input type="text" placeholder="info@site.com" className="input input-bordered" />
                </label>
            </div>
        </div>
    );
};

export default Subscribe;