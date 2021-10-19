import React from 'react';
import { Card, Button, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name,details,img}=service;
    return (
          <Col xs={12} sm={6} md={4} >
        <Card className="w-100 my-3">
  <Card.Img style={{height:'20rem'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {details}
    </Card.Text>
    <Link to={`details/${details}`}>
    <Button variant="primary">See Details</Button>
    </Link>
  </Card.Body>
</Card>
        </Col>
    );
};

export default Service;