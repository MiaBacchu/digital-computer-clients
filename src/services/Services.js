import Cards from '../card/Cards';
import SetCourse from '../setCourse/SetCourse';

const Services = () => {
  const [courses]=SetCourse()
    return (
        courses.map(course=><Cards course={course}></Cards>)
    );
};

export default Services;