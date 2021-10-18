import { Container, Row } from 'react-bootstrap';
import Service from '../service/Service';
import SetServices from '../setServices/setServices';

const Home = () => {
    const [services]=SetServices()
    return (
<Container fluid className='my-4'>
<h1 className='App mb-4'>What we do best.</h1>
  <Row>
  {services.slice(0,6).map(service=><Service
  key={service.id} 
  service={service}
  ></Service>)}
  </Row>
</Container>
    );
};

export default Home;