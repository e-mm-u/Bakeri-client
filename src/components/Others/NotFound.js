import React from 'react';
import useTitle from '../../hooks/useTitle';

const NotFound = () => {
    useTitle('404-Bakeri');
    return (
        <div>
            Not found
        </div>
    );
};

export default NotFound;