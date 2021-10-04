import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Card, Col } from 'react-bootstrap';

const Cards = (props) => {
    const {title,price,img,details}=props.course;
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
           <Card style={{ width: '100%' }}>
  <Card.Img style={{height:'15rem'}} variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      <h1>{price}</h1>
      <br />
      <p>{details}</p>
    </Card.Text>
    <Button className="bg-primary text-white rounded">Buy Now</Button>
  </Card.Body>
</Card> 
</Col>
    );
};

export default Cards;