import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/Context/useAuth';

const Placeproduct = () => {
    const {user}=useAuth()
    const {bikeId}=useParams()
    const [product,setProduct]=useState({})
    const nameRef=useRef()
    const emailRef=useRef()
    const productRef=useRef()
    const priceRef=useRef()
    const addressRef=useRef()
    const phoneRef=useRef()
    useEffect(()=>{
        fetch(`https://still-ravine-45870.herokuapp.com/bike/${bikeId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[bikeId,user.email])

    const handleSubmit=(e)=>{
        e.preventDefault()
        const userName=nameRef.current.value
        const userEmail=emailRef.current.value
        const productName=productRef.current.value
        const productPrice=priceRef.current.value
        const userAddress=addressRef.current.value
        const userPhone=phoneRef.current.value
        const newproduct={userName,userEmail,productName,productPrice,userAddress,userPhone,status:"pending"}
        fetch('https://still-ravine-45870.herokuapp.com/product',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newproduct)
        })
        .then(res=>res.json())
        .then(data=>{
            window.location.href='/dashboard/myproduct' 
        })
    }
    return (
        <>
        <table className='w-full mb-8 text-3xl'>
            <tr className='bg-yellow-400'>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>product Name</th>
                    <th>product Price</th>
                </tr>
                <tr>
                    <td className='text-center'>{user.displayName}</td>
                    <td className='text-center'>{user.email}</td>
                    <td className='text-center'>{product.name}</td>
                    <td className='text-center'>{product.price}</td>
                </tr>
            </table>
        <div className='md:flex gap-4 lg:justify-around items-center m-8'>
            <div className='shadow-2xl rounded-lg md:w-1/2 lg:w-1/3 xl:w-1/4'>
    <img className='w-full h-72 rounded-lg' src={product.img} alt="..."/> 
    <div className='m-5 pb-8'>
    <h1 className='text-4xl mb-5'>{product.name}</h1>
    <h1 className='text-2xl mb-5'>{product.description}</h1>
    <h1 className='text-5xl mb-12'>Price : {product.price}</h1>
   </div>
            </div>
            <form onSubmit={handleSubmit} className='text-center'>
      <input ref={nameRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Your Name' readOnly={user.displayName && true} defaultValue={user.displayName}/>
      <br/>
      <br/>
      <input ref={emailRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Your Email' readOnly={user.email && true} defaultValue={user.email}/>
      <br/>
      <br/>
      <input ref={productRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' readOnly defaultValue={product.name}/>
      <br/>
      <br/>
      <input ref={priceRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' readOnly defaultValue={product.price}/>
      <br/>
      <br/>
      <input ref={addressRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='address'/>
      <br/>
      <br/>
      <input ref={phoneRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='phone number'/>
      <br/>
      <br/>
      <input className='w-96 h-14 bg-blue-700 text-white text-3xl focus:ring-2 hover:bg-blue-800 rounded-md text-2xl' type="submit" />
    </form>
        </div>
        </>
    );
};

export default Placeproduct;