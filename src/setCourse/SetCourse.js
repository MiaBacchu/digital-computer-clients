import { useEffect, useState } from 'react';

const SetCourse = () => {
    const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch('course.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
    return [courses,setCourses]
};

export default SetCourse;