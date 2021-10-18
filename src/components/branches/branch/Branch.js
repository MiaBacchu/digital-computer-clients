import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Branch = ({service}) => {
    const {name,details,img}=service;
    return (
          <Col xs={6} sm={4} md={3} >
        <Card className="w-100">
  <Card.Img style={{height:'10rem'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {details}
    </Card.Text>
  </Card.Body>
</Card>
        </Col>
    );
};

export default Branch;