import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
            <Carousel>
  <Carousel.Item>
    <img style={{height:'30rem'}}
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/smiling-young-blonde-female-doctor-wearing-medical-robe-stethoscope-around-neck-holding-clipboard-pointing-side_409827-64.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Doctor Marry Watt</h3>
      <p>Expert in Medincine & Baby Health</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'30rem'}}
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Doctor Inna White</h3>
      <p>Expert in Brain & Neorology</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'30rem'}}
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/healthcare-workers-medicine-covid-19-pandemic-self-quarantine-concept-smiling-attractive-doctor-scrubs-glasses-stethoscope-neck-cross-arms-chest-ready-help-patients_1258-58772.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Doctor Thomas Curran</h3>
      <p>Expert in Medicine & Heart Disease</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;