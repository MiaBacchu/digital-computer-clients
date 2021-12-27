import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { useState } from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Review = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://still-ravine-45870.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <>
        <h1 className='text-center text-7xl text-red-500 my-16'>Clients Reviews</h1>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-4xl mx-5'>
            {reviews.map(review=>
    <div key={review._id} className='my-9 mx-auto'>
    <div className='w-full py-8 shadow-2xl rounded-lg px-5'>
        <img className='w-full h-56' src={review.photoURL} alt="" />
        <h1 className='text-4xl mb-5'>Name : {review.name}</h1>
        <h5 className='text-2xl mb-5 break-words'>{review.comments}</h5>
        <h1>
            <Rating
            emptySymbol={<AiOutlineStar  className='text-yellow-400'/>}
            fullSymbol={<AiFillStar className='text-yellow-400'/>}
            initialRating={review.ratings}
            readonly
            ></Rating>
        </h1>
    </div>
        </div>)}
        </div>
        </>
    );
};

export default Review;