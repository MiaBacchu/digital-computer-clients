import React, { useRef } from 'react';
import useAuth from '../../../Hooks/Context/useAuth';

const DashboardReview = () => {
    const {user}=useAuth()
    const nameRef=useRef()
    const photoRef=useRef()
    const ratingsRef=useRef()
    const commentsRef=useRef()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=nameRef.current.value
        const photoURL=photoRef.current.value
        const ratings=ratingsRef.current.value
        const comments=commentsRef.current.value
        const newReview={name,photoURL,ratings,comments}
        fetch('https://still-ravine-45870.herokuapp.com/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newReview)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className='my-9'>
           <form onSubmit={handleSubmit} className='text-center'>
      <input ref={nameRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' defaultValue={user.displayName}/>
      <br/>
      <br/>
      <input ref={photoRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Photo Url'defaultValue={user.photoURL}/>
      <br/>
      <br/>
      <input ref={ratingsRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='ratings 1-5'/>
      <br/>
      <br/>
      <textarea ref={commentsRef} className='w-96 h-56 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='your comments'/>
      <br/>
      <br/>
      <input className='w-96 h-14 bg-blue-700 text-white text-3xl focus:ring-2 hover:bg-blue-800 rounded-md text-2xl' type="submit" />
    </form>
        </div>
    );
};

export default DashboardReview;