import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bike')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
        <div>
            <h1 className='text-center text-7xl text-red-500 my-16'>Some of Our Bike Collection</h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  m-5">
            {products.slice(0,6).map(product=>
    <div key={product._id} className='shadow-2xl rounded-lg md:w-full'>
    <img className='w-full h-72 rounded-lg' src={product.img} alt="..."/>
    <div className='mx-5 pb-8'>
    <h1 className='text-4xl mb-5'>{product.name}</h1>
    <h1 className='text-2xl mb-5'>{product.description}</h1>
    <h1 className='text-5xl mb-12'>Price : {product.price}</h1>
    <Link to={`/placeOrder/${product._id}`} className='text-2xl text-white p-3 rounded-lg bg-blue-700 focus:ring-2 hover:bg-blue-800'>Place Order</Link>
  </div>
</div>
            )}
        </div>
        </div>
    );
};

export default Product;