import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1 className='text-center text-6xl text-green-700'>About Us</h1>
            <div className='md:flex justify-center items-center my-8'>
           <div className='w-1/3'>
           <img className='w-full' src="https://i.ibb.co/cN4qYcT/20210106065024-bike-463.png" alt="" />
           </div>
           <h1 className='w-1/3 text-4xl text-pink-700'>You Can Learn More From Here</h1>
        </div>
        </div>
    );
};

export default AboutUs;