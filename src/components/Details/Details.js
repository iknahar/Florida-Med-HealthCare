import React from 'react';
import { useParams } from 'react-router';


const Details = () => {
    const { serviceId } = useParams();
    return (
      <div>
            <h1>This is booking: {serviceId} </h1>

      </div>
    );
};

export default Details;