import React from 'react';
import Cards from '../card/Cards';
import SetCourse from '../setCourse/SetCourse';

const Home = () => {
    const [courses]=SetCourse()
    return (
        courses.slice(0,6).map(course=><Cards course={course}></Cards>)
    )
};

export default Home;