import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Contact = () => {
    return (
            <Card style={{width:'18rem'}} className="text-center mx-auto my-5">
  <Card.Body>
    <Card.Title className='mt-5'>Help & Support</Card.Title>
    <Card.Text>
      Our Support Team is Spread Across to Globe To Give Your Answer as soon as Possible.
    </Card.Text>
    <Button variant="success rounded-pill my-5">Visit Support Page</Button>
    <br />
    <a href="notfound" className="text-success mb-5">Submit a request</a>
  </Card.Body>
</Card>
    );
};

export default Contact;