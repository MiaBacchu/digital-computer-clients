import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SetServices from '../setServices/setServices';
import Branch from './branch/Branch';

const Branches = () => {
    const [services]=SetServices()
    return (
        <Container fluid className='my-4'>
            <h1 className='App mb-4'>Some of Our Branches</h1>
  <Row>
  {services.slice(6,10).map(service=><Branch
  key={service.id} 
  service={service}
  ></Branch>)}
  </Row>
</Container>
    );
};

export default Branches;