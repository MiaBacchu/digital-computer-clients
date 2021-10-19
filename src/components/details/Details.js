import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    let { serviceDetails } = useParams();
    return (
        <div>
           {serviceDetails}
        </div>
    );
};

export default Details;