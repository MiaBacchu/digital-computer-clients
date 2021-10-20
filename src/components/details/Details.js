import React from 'react';
import { useParams } from 'react-router';
import useServicesContext from '../hooks/useServicesContext';

const Details = () => {
    let { serviceId } = useParams();
    const services = useServicesContext();
    const service = services?.find(service => service.id.toString() === serviceId);
    console.log(services)
    return (
        <div className="d-sm-flex my-5 text-center w-50 mx-auto">
           <img style={{width:'15rem'}} src={service?.img} alt=""/>
           <div className="m-5">
           <h3>{service?.name}</h3>
           <p>{service?.details}</p>
           </div>
        </div>
    );
};

export default Details;