import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Cards from '../card/Cards';

const Services = () => {
    const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch('course.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
    return (
        courses.map(course=><Cards course={course}></Cards>)
    );
};

export default Services;