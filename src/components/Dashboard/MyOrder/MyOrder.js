import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useFirebase from '../../../Hooks/useFirebase/useFirebase';

const MyOrder = () => {
    const {user}=useFirebase()
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/order/${user.email}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[user])
    const handleDelete=(id)=>{
        if (window.confirm('are you sure?')) {
            fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
            })
        .then(res =>res.json())
        .then(data =>{
            if (data.deletedCount===1) {
                const remainingProducts=products.filter(product=>product._id!==id)
                setProducts(remainingProducts)
            }
        })
        }
    }
    return (
        <div className='grid grid-cols-3 text-4xl mx-5'>
            {products.map(product=>
    <div key={product._id} className='my-9'>
    <div className='w-80 py-8 shadow-2xl rounded-lg mx-auto'>
    <h1 className='text-4xl mb-5'>Name : {product.productName}</h1>
    <h1 className='text-5xl mb-5'>Price : {product.productPrice}</h1>
    <h1 className='text-5xl mb-8'>{product.status}</h1>
    <button onClick={()=>handleDelete(product._id)} className="rounded-full bg-red-400 p-3 hover:bg-red-700">Cancel Order</button>
    </div>
        </div>)}
        </div>
    );
};

export default MyOrder;