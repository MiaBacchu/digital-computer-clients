import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef=useRef()
    const descriptionRef=useRef()
    const imgRef=useRef()
    const priceRef=useRef()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=nameRef.current.value
        const description=descriptionRef.current.value
        const img=imgRef.current.value
        const price=priceRef.current.value
        const newBike={name,description,img,price}
        fetch('https://still-ravine-45870.herokuapp.com/bike',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newBike)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.insertedId) {
                alert('Bike added successfully!')
            }
        })
    }
    return (
        <div className='my-9'>
            <form onSubmit={handleSubmit} className='text-center'>
      <input ref={nameRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='name'/>
      <br/>
      <br/>
      <textarea ref={descriptionRef} className='w-96 h-40 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='description'/>
      <br/>
      <br/>
      <input ref={imgRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='img Url'/>
      <br/>
      <br/>
      <input ref={priceRef} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='price'/>
      <br/>
      <br/>
      <input className='w-96 h-14 bg-blue-700 text-white text-3xl focus:ring-2 hover:bg-blue-800 rounded-md text-2xl' type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;