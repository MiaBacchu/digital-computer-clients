import React from 'react';
import { Col } from 'react-bootstrap';

const Author = ({service}) => {
    const {name,details,img,about}=service;
    return (
        <Col sm={6} className='d-sm-flex justify-content-center align-items-start my-5 pb-5'>
               <img style={{width:'10rem'}} className='rounded-circle mx-3' src={img} alt="" />
            <div>
               <p>{details}</p>
               <h5>{name}</h5>
               <p>{about}</p>
            </div> 
        </Col>
    );
};

export default Author;