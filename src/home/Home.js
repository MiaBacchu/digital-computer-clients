import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../card/Cards';

const Home = () => {
    const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch('course.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
    return (
        courses.slice(0,6).map(course=><div><Cards course={course}></Cards></div>)
    )
};

export default Home;