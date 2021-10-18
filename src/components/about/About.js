import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SetServices from '../setServices/setServices';
import Author from './author.js/Author';

const About = () => {
    const [services]=SetServices()
    return (
        <Container fluid className='my-4'>
            <h1 className='App mb-4'>Team of highly-trained & licensed experienced professionals</h1>
  <Row>
  {services.slice(10,14).map(service=><Author
  key={service.id} 
  service={service}
  ></Author>)}
  </Row>
</Container>
    );
};

export default About;