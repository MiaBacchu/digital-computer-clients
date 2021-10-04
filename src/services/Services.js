import React, { useEffect, useState } from 'react';
import Cards from '../card/Cards';

const Services = () => {
    const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch('course.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
    return (
        courses.map(course=><div><Cards course={course}></Cards></div>)
    );
};

export default Services;