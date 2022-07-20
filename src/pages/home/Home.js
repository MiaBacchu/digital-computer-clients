import React from 'react';
import Others from '../others/Others';
import Seminars from '../seminars/Seminars';
import Banner from './banner/Banner';
import HomeCard from './card/HomeCard';
import Certification from './certification/Certification';
import Courses from './courses/Courses';
import Details from './details/Details';
import Facilities from './facilities/Facilities';
import FutureLeader from './futureLeader/FutureLeader';
import Footer from './shared/Footer';
import Navigation from './shared/Navigation';
import SharedBanner from './shared/SharedBanner';

const Home = () => {
    return (
        <div>
            <SharedBanner></SharedBanner>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Details></Details>
            <Courses></Courses>
            <Others></Others>
            <Seminars></Seminars>
            <Facilities></Facilities>
            <Certification></Certification>
            <FutureLeader></FutureLeader>
            <Footer></Footer>
        </div>
    );
};

export default Home;